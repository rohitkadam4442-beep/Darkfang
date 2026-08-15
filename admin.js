"use strict";

const role = localStorage.getItem("role");
const isAdmin = role === "admin";
const CAR_EDITS_STORAGE_KEY = "carEdits";
const CAR_SPEC_KEYS = ["engine", "power", "torque", "seating", "mileage", "drive"];
const UI_SELECTORS = {
  // Common selectors for cards and detail pages
  name: "#carName, h3, h2, .name, .car-name-bar",
  price: "#carPrice, .price, p, .car-price-bar",
  image: "#carImage, img",
  description: "#carDescription, .description",
  thumbnails: "#carThumbnails",
  specs: "#carSpecs"
};

// --- Data and Storage Helpers ---

/**
 * Retrieves all car edits from local storage.
 * @returns {object} An object containing all stored edits, or an empty object if an error occurs.
 */
function getStoredEdits() {
  try {
    return JSON.parse(localStorage.getItem(CAR_EDITS_STORAGE_KEY) || "{}");
  } catch (error) {
    console.error("Failed to parse car edits from local storage:", error);
    return {};
  }
}

/**
 * Saves all car edits to local storage.
 * @param {object} editsObj - The object of edits to save.
 */
function setStoredEdits(editsObj) {
  localStorage.setItem(CAR_EDITS_STORAGE_KEY, JSON.stringify(editsObj || {}));
}

/**
 * Saves a single patch of edits for a specific car UID.
 * @param {string} uid - The unique ID of the car.
 * @param {object} patch - The object containing the edits to apply.
 */
function savePatch(uid, patch) {
  const allEdits = getStoredEdits();
  const currentEdits = allEdits[uid] || {};

  Object.entries(patch).forEach(([key, value]) => {
    const isValueEmpty =
      value === undefined || value === null || (typeof value === "string" && value.trim() === "");

    if (isValueEmpty) {
      delete currentEdits[key];
    } else {
      currentEdits[key] = value;
    }
  });

  allEdits[uid] = currentEdits;
  setStoredEdits(allEdits);
}

// --- UI Rendering Functions ---

/**
 * Updates a DOM element's text content based on an edit.
 * @param {HTMLElement} container - The parent element to search within.
 * @param {string} selector - The CSS selector for the target element.
 * @param {string} value - The new text value.
 */
function updateTextContent(container, selector, value) {
  const element = container.querySelector(selector);
  if (element && value !== undefined) {
    element.innerText = value;
  }
}

/**
 * Updates a DOM element's image source based on an edit.
 * @param {HTMLElement} container - The parent element to search within.
 * @param {string} selector - The CSS selector for the target image element.
 * @param {string} newSrc - The new image URL or data URI.
 */
function updateImageSource(container, selector, newSrc) {
  const img = container.querySelector(selector);
  if (!img) return;

  if (newSrc) {
    img.src = newSrc;
  } else if (img.dataset.originalSrc) {
    img.src = img.dataset.originalSrc;
  }
}

/**
 * Renders thumbnails for a car and attaches click handlers.
 * @param {HTMLElement} container - The parent element to render thumbnails in.
 * @param {string[]} thumbnails - An array of thumbnail image URLs.
 */
function renderThumbnails(container, thumbnails) {
  const thumbWrap = container.querySelector(UI_SELECTORS.thumbnails);
  if (!thumbWrap) return;

  thumbWrap.innerHTML = "";
  thumbnails.forEach(url => {
    const img = document.createElement("img");
    img.src = url;
    img.alt = "Car thumbnail";
    img.onclick = () => {
      const mainImg = document.getElementById("carImage");
      if (mainImg) mainImg.src = url;
    };
    thumbWrap.appendChild(img);
  });
}

/**
 * Renders the car's specs section, applying any edits.
 * @param {HTMLElement} container - The parent element to render specs in.
 * @param {object} car - The original car data.
 * @param {object} edits - The edits for the car.
 */
function renderSpecs(container, car, edits) {
  const specsContainer = container.querySelector(UI_SELECTORS.specs);
  if (!specsContainer) return;

  specsContainer.innerHTML = "";
  CAR_SPEC_KEYS.forEach(specKey => {
    const capitalizedKey = specKey.charAt(0).toUpperCase() + specKey.slice(1);
    const specValue = edits[specKey] || (car.specs && car.specs[capitalizedKey]);

    if (specValue) {
      const div = document.createElement("div");
      div.className = "spec-item";
      div.innerHTML = `<h4>${capitalizedKey}</h4><p>${specValue}</p>`;
      specsContainer.appendChild(div);
    }
  });
}

/**
 * Applies saved edits to the UI of a car card or detail page.
 * @param {string} uid - The unique ID of the car.
 * @param {HTMLElement} container - The DOM element (card or detail page) to update.
 */
function applyCarEdits(uid, container) {
  const allEdits = getStoredEdits();
  const edits = allEdits[uid];
  if (!edits) return;

  // Sync edits to the global 'cars' object if it exists
  if (typeof cars !== "undefined") {
    syncEditsToCarsObject(uid, cars);
  }

  // Handle common and page-specific elements
  const isDetailPage = container.classList.contains("car-detail");
  const imgSrc = edits.image || edits.img;

  updateImageSource(container, UI_SELECTORS.image, imgSrc);

  if (edits.thumbnails !== undefined) {
    renderThumbnails(container, edits.thumbnails);
  }

  if (isDetailPage) {
    updateTextContent(container, UI_SELECTORS.name, edits.name);
    updateTextContent(container, UI_SELECTORS.price, edits.price);
    updateTextContent(container, UI_SELECTORS.description, edits.description);

    const carId = new URLSearchParams(window.location.search).get("id");
    if (typeof cars !== "undefined" && cars[carId]) {
      renderSpecs(container, cars[carId], edits);
    }
  } else {
    // Homepage card
    updateTextContent(container, UI_SELECTORS.name, edits.name);
    updateTextContent(container, UI_SELECTORS.price, edits.price);
  }
}

// --- Edit Panel UI & Logic ---

const EDIT_PANEL_STYLE = `
  position: fixed; inset: auto 20px 20px auto; max-width: 400px;
  background: #fff; border: 1px solid #ddd; border-radius: 12px;
  padding: 14px; box-shadow: 0 12px 30px rgba(0,0,0,.18); z-index: 9999;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial;
  max-height: 90vh; overflow-y: auto;
`;

/**
 * Creates and returns an input field row for the edit panel.
 * @param {object} field - The field configuration object.
 * @returns {HTMLDivElement} The created div element.
 */
function createInputField(field) {
  const row = document.createElement("div");
  row.style.cssText = "margin-bottom: 10px;";

  const label = document.createElement("label");
  label.style.cssText = "font-size: 12px; font-weight: 600; display: block; margin-bottom: 4px;";
  label.innerText = field.label;

  const input = document.createElement("input");
  input.type = "text";
  input.value = field.value || "";
  input.dataset.key = field.key;
  input.style.cssText = "width: 100%; padding: 8px; border: 1px solid #bbb; border-radius: 8px;";

  row.append(label, input);
  return row;
}

/**
 * Populates the thumbnail section of the edit panel.
 * @param {HTMLElement} container - The container for thumbnails.
 * @param {string[]} urls - Array of image URLs.
 */
function populateThumbnailsInPanel(container, urls) {
  container.innerHTML = "";
  urls.forEach(url => {
    const wrapper = document.createElement("div");
    wrapper.style.cssText = "position: relative; width: 60px; height: 60px; border: 1px solid #ddd;";
    const img = document.createElement("img");
    img.src = url;
    img.style.cssText = "width: 100%; height: 100%; object-fit: cover;";

    const removeBtn = document.createElement("button");
    removeBtn.innerHTML = "&times;";
    removeBtn.style.cssText = `
      position: absolute; top: 2px; right: 2px; background: rgba(0,0,0,0.5);
      color: #fff; border: none; border-radius: 50%; width: 18px; height: 18px;
      line-height: 1; font-size: 14px; cursor: pointer;
    `;
    removeBtn.onclick = () => wrapper.remove();
    wrapper.append(img, removeBtn);
    container.appendChild(wrapper);
  });
}

/**
 * Opens a modal edit panel for a given car card.
 * @param {HTMLElement} card - The car card or detail page element.
 */
function openHomeEditPanel(card) {
  closeExistingPanels();

  const uid = card.dataset.uid;
  const isDetailPage = card.classList.contains("car-detail");

  const panel = document.createElement("div");
  panel.className = "admin-edit-panel";
  panel.style.cssText = EDIT_PANEL_STYLE;

  const title = document.createElement("div");
  title.innerText = isDetailPage ? "Edit Car" : "Edit Card";
  title.style.cssText = "font-weight: 700; margin-bottom: 10px;";

  const form = document.createElement("form");
  const fields = getEditPanelFields(card, isDetailPage);
  const inputs = {};

  fields.forEach(f => {
    const row = createInputField(f);
    inputs[f.key] = row.querySelector("input");
    form.appendChild(row);
  });

  // Main Image section
  const mainImgSection = createMainImageSection(card);
  const mainImgInput = mainImgSection.querySelector("input[type='text']");
  const mainImgFileInput = mainImgSection.querySelector("input[type='file']");
  form.appendChild(mainImgSection);

  // Thumbnails section
  const thumbnailsSection = createThumbnailsSection(card);
  const thumbnailsContainer = thumbnailsSection.querySelector(".thumbnails-container");
  const thumbnailsFileInput = thumbnailsSection.querySelector("input[type='file']");
  form.appendChild(thumbnailsSection);

  // Buttons
  const actions = createPanelButtons(panel);
  form.appendChild(actions);

  // Attach event listeners
  mainImgSection.querySelector(".remove-image-btn").addEventListener("click", () => {
    mainImgInput.value = "";
    mainImgFileInput.value = "";
  });

  thumbnailsFileInput.addEventListener("change", e => handleThumbnailFiles(e.target.files, thumbnailsContainer));

  form.addEventListener("submit", e => {
    e.preventDefault();
    handlePanelSubmission(uid, card, inputs, mainImgInput, mainImgFileInput, thumbnailsContainer, panel);
  });

  panel.append(title, form);
  document.body.appendChild(panel);
}

/**
 * Dynamically gets the fields for the edit panel based on the element type.
 * @param {HTMLElement} card - The DOM element.
 * @param {boolean} isDetailPage - True if it's a detail page.
 * @returns {object[]} Array of field objects.
 */
function getEditPanelFields(card, isDetailPage) {
  if (isDetailPage) {
    return [
      { key: "name", label: "Car Name", value: getElementText(card, UI_SELECTORS.name) },
      { key: "price", label: "Base Price", value: getElementText(card, UI_SELECTORS.price) },
      ...CAR_SPEC_KEYS.map(key => ({
        key,
        label: key.charAt(0).toUpperCase() + key.slice(1),
        value: getCurrentSpecValue(card, key)
      })),
      { key: "description", label: "Description", value: getElementText(card, UI_SELECTORS.description) }
    ];
  } else {
    return [
      { key: "name", label: "Car Name", value: getElementText(card, UI_SELECTORS.name) },
      { key: "price", label: "Price", value: getElementText(card, UI_SELECTORS.price) }
    ];
  }
}

/**
 * Helper to safely get innerText from an element.
 * @param {HTMLElement} container - The parent element.
 * @param {string} selector - The CSS selector.
 * @returns {string} The text content or empty string.
 */
function getElementText(container, selector) {
  const el = container.querySelector(selector);
  return (el && el.innerText) || "";
}

/**
 * Creates the main image section for the edit panel.
 * @param {HTMLElement} card - The car card element.
 * @returns {HTMLDivElement} The section element.
 */
function createMainImageSection(card) {
  const mainImgRow = document.createElement("div");
  mainImgRow.style.cssText = "margin-bottom: 10px;";
  const currentImgSrc = (card.querySelector(UI_SELECTORS.image) || {}).src || "";

  mainImgRow.innerHTML = `
    <div style="font-size: 12px; font-weight: 600; margin-bottom: 4px;">Main Image</div>
    <input type="text" data-key="image" placeholder="Image URL" style="width: 100%; padding: 8px; border: 1px solid #bbb; border-radius: 8px; margin-bottom: 8px;" value="${currentImgSrc}">
    <input type="file" accept="image/*">
    <button type="button" class="remove-image-btn" style="background: #b00020; color: #fff; border: none; padding: 6px 10px; border-radius: 6px; cursor: pointer; font-size: 12px;">Remove Image</button>
  `;
  return mainImgRow;
}

/**
 * Creates the thumbnails section for the edit panel.
 * @param {HTMLElement} card - The car card element.
 * @returns {HTMLDivElement} The section element.
 */
function createThumbnailsSection(card) {
  const thumbnailsRow = document.createElement("div");
  thumbnailsRow.style.cssText = "margin-bottom: 10px;";
  const currentThumbnails = Array.from(card.querySelectorAll("#carThumbnails img")).map(i => i.src);

  thumbnailsRow.innerHTML = `
    <div style="font-size: 12px; font-weight: 600; margin-bottom: 4px;">Thumbnails</div>
    <div class="thumbnails-container" style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 8px;"></div>
    <input type="file" multiple accept="image/*">
  `;
  populateThumbnailsInPanel(thumbnailsRow.querySelector(".thumbnails-container"), currentThumbnails);
  return thumbnailsRow;
}

/**
 * Handles file selection for thumbnails.
 * @param {FileList} files - The file list from the input.
 * @param {HTMLElement} container - The thumbnails container element.
 */
function handleThumbnailFiles(files, container) {
  Array.from(files).forEach(file => {
    const reader = new FileReader();
    reader.onload = e => {
      const url = e.target.result;
      const wrapper = document.createElement("div");
      wrapper.style.cssText = "position: relative; width: 60px; height: 60px; border: 1px solid #ddd;";
      const img = document.createElement("img");
      img.src = url;
      img.style.cssText = "width: 100%; height: 100%; object-fit: cover;";
      const removeBtn = document.createElement("button");
      removeBtn.innerHTML = "&times;";
      removeBtn.style.cssText = `
        position: absolute; top: 2px; right: 2px; background: rgba(0,0,0,0.5);
        color: #fff; border: none; border-radius: 50%; width: 18px; height: 18px;
        line-height: 1; font-size: 14px; cursor: pointer;
      `;
      removeBtn.onclick = () => wrapper.remove();
      wrapper.append(img, removeBtn);
      container.appendChild(wrapper);
    };
    reader.readAsDataURL(file);
  });
}

/**
 * Creates save and cancel buttons for the edit panel.
 * @param {HTMLElement} panel - The edit panel element.
 * @returns {HTMLDivElement} The div containing the buttons.
 */
function createPanelButtons(panel) {
  const actions = document.createElement("div");
  const saveBtn = document.createElement("button");
  saveBtn.type = "submit";
  saveBtn.innerText = "Save";
  saveBtn.style.cssText = `background: #0a7c2f; color: #fff; border: none; padding: 8px 12px; border-radius: 8px; cursor: pointer; font-weight: 700; margin-right: 8px;`;

  const cancelBtn = document.createElement("button");
  cancelBtn.type = "button";
  cancelBtn.innerText = "Cancel";
  cancelBtn.style.cssText = `background: #b00020; color: #fff; border: none; padding: 8px 12px; border-radius: 8px; cursor: pointer; font-weight: 700;`;
  cancelBtn.addEventListener("click", () => panel.remove());

  actions.append(saveBtn, cancelBtn);
  return actions;
}

/**
 * Handles the form submission logic for the edit panel.
 * @param {string} uid - The unique ID of the car.
 * @param {HTMLElement} card - The car card element.
 * @param {object} inputs - An object of input elements.
 * @param {HTMLInputElement} mainImgInput - The main image URL input.
 * @param {HTMLInputElement} mainImgFileInput - The main image file input.
 * @param {HTMLElement} thumbnailsContainer - The thumbnails container element.
 * @param {HTMLElement} panel - The edit panel.
 */
function handlePanelSubmission(uid, card, inputs, mainImgInput, mainImgFileInput, thumbnailsContainer, panel) {
  const patch = {};

  Object.keys(inputs).forEach(key => {
    patch[key] = inputs[key].value.trim() || null;
  });

  patch.thumbnails = Array.from(thumbnailsContainer.querySelectorAll("img")).map(img => img.src);

  const file = mainImgFileInput.files?.[0];

  const saveEditsAndClose = () => {
    savePatch(uid, patch);
    applyCarEdits(uid, card);
    if (!card.classList.contains("car-detail")) {
      syncNamePriceToDetail(uid);
    }
    panel.remove();
    alert("Saved ✅");
  };

  if (file) {
    const reader = new FileReader();
    reader.onload = ev => {
      patch.image = ev.target.result;
      saveEditsAndClose();
    };
    reader.readAsDataURL(file);
  } else {
    patch.image = mainImgInput.value.trim() || null;
    saveEditsAndClose();
  }
}

// --- Initialization and Observers ---

/**
 * Closes any existing admin edit panels.
 */
function closeExistingPanels() {
  document.querySelectorAll(".admin-edit-panel").forEach(p => p.remove());
}

/**
 * Syncs homepage edits to the detail page edits.
 * @param {string} cardUid - The UID of the homepage card.
 */
function syncNamePriceToDetail(cardUid) {
  const allEdits = getStoredEdits();
  const baseId = cardUid.split("_")[0];
  const detailUid = Object.keys(allEdits).find(k => k.startsWith(baseId + "_detail"));

  if (detailUid) {
    const homepageEdits = allEdits[cardUid];
    const detailEdits = allEdits[detailUid] || {};

    if (homepageEdits?.name) detailEdits.name = homepageEdits.name;
    if (homepageEdits?.price) detailEdits.price = homepageEdits.price;

    allEdits[detailUid] = detailEdits;
    setStoredEdits(allEdits);

    const detailEl = document.querySelector(`[data-uid="${detailUid}"]`);
    if (detailEl) applyCarEdits(detailUid, detailEl);
  }
}

/**
 * Synchronizes local edits to the global 'cars' object for a given car.
 * @param {string} uid - The unique ID of the car.
 * @param {object} cars - The global car object.
 */
function syncEditsToCarsObject(uid, cars) {
  if (typeof cars === "undefined") {
    console.warn("Global 'cars' object is undefined. Cannot sync edits.");
    return;
  }

  const baseId = uid.split("_")[0];
  const edits = getStoredEdits()[uid];
  const car = cars[baseId];

  if (!edits || !car) return;

  Object.keys(edits).forEach(key => {
    const value = edits[key];
    if (["name", "price", "description", "image"].includes(key)) {
      car[key] = value;
    } else if (key === "thumbnails") {
      car.thumbnails = value;
    } else {
      const specKey = key.charAt(0).toUpperCase() + key.slice(1);
      if (car.specs && car.specs.hasOwnProperty(specKey)) {
        car.specs[specKey] = value;
      }
    }
  });

  console.log(`Synced edits for car '${baseId}':`, car);
}

/**
 * Generates a unique ID and applies saved edits to an element.
 * @param {HTMLElement} el - The DOM element (card or detail page).
 * @param {number} idx - The index of the element.
 */
function assignUidAndLoad(el, idx) {
  const baseId = el.dataset.id || el.dataset.uid || getElementText(el, UI_SELECTORS.name).trim().replace(/\s+/g, "_").toLowerCase() || `car_${idx}`;
  const type = el.classList.contains("car-detail") ? "detail" : "card";
  const unique = type === "detail" ? new URLSearchParams(window.location.search).get("id") || "generic" : idx;

  el.dataset.uid = `${baseId}_${type}_${unique}`;
  
  const mainImg = el.querySelector(UI_SELECTORS.image);
  if (mainImg && !mainImg.dataset.originalSrc) {
    mainImg.dataset.originalSrc = mainImg.src;
  }
  
  applyCarEdits(el.dataset.uid, el);
}

/**
 * Initializes "Edit" buttons on car cards and detail pages.
 * @param {Document|HTMLElement} scope - The scope to search for elements in.
 */
function initAdminButtons(scope = document) {
  if (!isAdmin) return;

  scope.querySelectorAll(".car-card").forEach(card => {
    if (card.querySelector("button[data-edit-card]")) return;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.innerText = "Edit";
    btn.dataset.editCard = "1";
    btn.style.cssText = `
      margin-top: 10px; background: #111; color: #fff;
      border: none; padding: 8px 14px; cursor: pointer;
      border-radius: 8px; font-weight: 600; box-shadow: 0 2px 6px rgba(0,0,0,.1);
    `;
    btn.addEventListener("click", () => openHomeEditPanel(card));
    card.appendChild(btn);
  });

  const detail = scope.querySelector(".car-detail");
  if (detail && !detail.querySelector("button[data-edit-detail]")) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.innerText = "Edit Car";
    btn.dataset.editDetail = "1";
    btn.style.cssText = `
      margin-top: 12px; background: #111; color: #fff;
      border: none; padding: 10px 16px; cursor: pointer;
      border-radius: 8px; font-weight: 700; box-shadow: 0 2px 6px rgba(0,0,0,.1);
    `;
    btn.addEventListener("click", () => openHomeEditPanel(detail));
    detail.appendChild(btn);
  }
}

/**
 * Retrieves the current value of a spec from the UI.
 * @param {HTMLElement} container - The element to search in.
 * @param {string} specKey - The key of the spec (e.g., "engine").
 * @returns {string} The spec value.
 */
function getCurrentSpecValue(container, specKey) {
  const specsContainer = container.querySelector(UI_SELECTORS.specs);
  if (!specsContainer) return "";

  const capitalizedKey = specKey.charAt(0).toUpperCase() + specKey.slice(1);
  const specItems = specsContainer.querySelectorAll(".spec-item");

  for (const item of specItems) {
    const h4 = item.querySelector("h4");
    if (h4?.textContent.trim() === capitalizedKey) {
      const p = item.querySelector("p");
      return p?.textContent.trim() || "";
    }
  }
  return "";
}

window.addEventListener("load", () => {
  const allElements = document.querySelectorAll(".car-card, .car-detail");
  allElements.forEach((el, i) => assignUidAndLoad(el, i));
  initAdminButtons();

  const mutationObserver = new MutationObserver(mutations => {
    let idx = allElements.length;
    mutations.forEach(m => {
      m.addedNodes.forEach(node => {
        if (!(node instanceof HTMLElement)) return;
        if (node.matches(".car-card, .car-detail")) {
          assignUidAndLoad(node, idx++);
          initAdminButtons(node.parentElement || node);
        }
        node.querySelectorAll(".car-card, .car-detail").forEach(el => {
          assignUidAndLoad(el, idx++);
          initAdminButtons(node);
        });
      });
    });
  });

  mutationObserver.observe(document.body, { childList: true, subtree: true });

  if (!isAdmin) {
    console.info('⚠️ Admin mode is OFF. Run localStorage.setItem("role","admin") then reload to enable Edit buttons.');
  }
});