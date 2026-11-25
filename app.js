import {
  CAFE_INFO,
  MENU_CATEGORIES,
  MENU_ITEMS,
  POSITIVE_REVIEWS,
  GALLERY_PHOTOS
} from "./data/cafe-data.js";

const state = {
  activeCategory: "all",
  searchQuery: "",
  selectedVariants: {},
  cart: {}, // key -> { key, id, name, variantLabel, price, qty }
  activeReviewTag: "all",
  showAllReviews: false
};

const els = {
  ratingsStrip: document.getElementById("ratings-strip"),
  categoryPills: document.getElementById("category-pills"),
  menuSearch: document.getElementById("menu-search"),
  clearSearchBtn: document.getElementById("clear-search-btn"),
  menuStatus: document.getElementById("menu-status"),
  menuGrid: document.getElementById("menu-grid"),
  reviewFilters: document.getElementById("review-filters"),
  reviewsGrid: document.getElementById("reviews-grid"),
  toggleReviewsBtn: document.getElementById("toggle-reviews-btn"),
  galleryGrid: document.getElementById("gallery-grid"),
  headerCartCount: document.getElementById("header-cart-count"),
  mobileCartBar: document.getElementById("mobile-cart-bar"),
  mobileCartSummary: document.getElementById("mobile-cart-summary"),
  openCartBtn: document.getElementById("open-cart-btn"),
  mobileOpenCartBtn: document.getElementById("mobile-open-cart-btn"),
  cartBackdrop: document.getElementById("cart-drawer-backdrop"),
  closeCartBtn: document.getElementById("close-cart-btn"),
  cartEmptyState: document.getElementById("cart-empty-state"),
  cartItemsList: document.getElementById("cart-items-list"),
  cartCustomerFields: document.getElementById("cart-customer-fields"),
  cartTotalAmount: document.getElementById("cart-total-amount"),
  whatsappOrderBtn: document.getElementById("whatsapp-order-btn"),
  copyOrderBtn: document.getElementById("copy-order-btn"),
  copyFeedback: document.getElementById("copy-feedback"),
  orderType: document.getElementById("order-type"),
  customerName: document.getElementById("customer-name"),
  orderNotes: document.getElementById("order-notes"),
  mobileMenuToggle: document.getElementById("mobile-menu-toggle"),
  mobileNav: document.getElementById("mobile-nav"),
  lightbox: document.getElementById("photo-lightbox"),
  lightboxImg: document.getElementById("lightbox-img"),
  lightboxCaption: document.getElementById("lightbox-caption"),
  closeLightboxBtn: document.getElementById("close-lightbox-btn")
};

function renderRatingsStrip() {
  els.ratingsStrip.innerHTML = CAFE_INFO.ratings
    .map(
      (r) => `
      <div class="rating-chip">
        <div class="rating-chip-top">
          <span class="rating-score">${r.score} <span class="rating-star" aria-hidden="true">★</span></span>
          <span class="rating-platform">${r.platform}</span>
        </div>
        <div class="rating-detail">${r.detail}</div>
      </div>`
    )
    .join("");
}

function renderCategoryPills() {
  els.categoryPills.innerHTML = MENU_CATEGORIES.map(
    (cat) => `
    <button
      type="button"
      class="filter-pill ${state.activeCategory === cat.id ? "is-active" : ""}"
      role="tab"
      aria-selected="${state.activeCategory === cat.id}"
      data-category="${cat.id}"
    >
      ${cat.label}
    </button>`
  ).join("");
}

function getSelectedVariant(item) {
  if (!item.variants || item.variants.length === 0) return null;
  const idx = state.selectedVariants[item.id] ?? 0;
  return item.variants[idx] || item.variants[0];
}

function getCartKey(item, variant) {
  return variant ? `${item.id}::${variant.label}` : item.id;
}

function addToCart(itemId) {
  const item = MENU_ITEMS.find((m) => m.id === itemId);
  if (!item) return;
  const variant = getSelectedVariant(item);
  const key = getCartKey(item, variant);
  const price = variant ? variant.price : item.price;

  if (state.cart[key]) {
    state.cart[key].qty += 1;
  } else {
    state.cart[key] = {
      key,
      id: item.id,
      name: item.name,
      variantLabel: variant ? variant.label : "",
      price,
      qty: 1
    };
  }
  updateCartUI();
  renderMenu();
}

function changeCartQty(key, delta) {
  if (!state.cart[key]) return;
  state.cart[key].qty += delta;
  if (state.cart[key].qty <= 0) {
    delete state.cart[key];
  }
  updateCartUI();
  renderMenu();
}

function renderMenu() {
  const query = state.searchQuery.trim().toLowerCase();
  const filtered = MENU_ITEMS.filter((item) => {
    const matchesCategory =
      state.activeCategory === "all" || item.category === state.activeCategory;
    const matchesQuery =
      !query ||
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });

  els.menuStatus.textContent = `Showing ${filtered.length} of ${MENU_ITEMS.length} pure vegetarian items`;

  if (filtered.length === 0) {
    els.menuGrid.innerHTML = `
      <div class="menu-card">
        <p>No dishes matched "${state.searchQuery}". Try searching for "Siddu", "Momos", "Kulcha", or "Parantha".</p>
      </div>`;
    return;
  }

  els.menuGrid.innerHTML = filtered
    .map((item) => {
      const variant = getSelectedVariant(item);
      const activePrice = variant ? variant.price : item.price;
      const key = getCartKey(item, variant);
      const qtyInCart = state.cart[key]?.qty || 0;

      const thumbHtml = item.image
        ? `<img class="menu-thumb" src="${item.image}" alt="${item.name}" loading="lazy" />`
        : "";

      const variantsHtml = item.variants
        ? `<div class="variant-group" role="group" aria-label="Preparation style for ${item.name}">
            ${item.variants
              .map(
                (v, idx) => `
              <button
                type="button"
                class="variant-btn ${(state.selectedVariants[item.id] ?? 0) === idx ? "is-selected" : ""}"
                data-variant-item="${item.id}"
                data-variant-idx="${idx}"
              >
                ${v.label} ₹${v.price}
              </button>`
              )
              .join("")}
          </div>`
        : "";

      const actionHtml =
        qtyInCart > 0
          ? `<div class="qty-control">
              <button type="button" class="qty-btn" data-qty-key="${key}" data-delta="-1" aria-label="Decrease quantity of ${item.name}">−</button>
              <span class="qty-val">${qtyInCart}</span>
              <button type="button" class="qty-btn" data-qty-key="${key}" data-delta="1" aria-label="Increase quantity of ${item.name}">+</button>
            </div>`
          : `<button type="button" class="add-btn" data-add-id="${item.id}">+ Add</button>`;

      return `
      <article class="menu-card">
        <div class="menu-card-top">
          ${thumbHtml}
          <div class="menu-info">
            <div class="menu-meta-row">
              <span class="veg-mark" title="Pure Vegetarian" aria-label="Pure Vegetarian"></span>
              ${item.bestseller ? `<span class="tag-bestseller">Bestseller</span>` : ""}
              ${item.rating ? `<span class="tag-source">${item.rating}</span>` : ""}
              ${item.priceNote ? `<span class="tag-source">${item.priceNote}</span>` : ""}
            </div>
            <h3 class="menu-item-title">${item.name}</h3>
            <p class="menu-item-desc">${item.description}</p>
          </div>
        </div>
        <div class="menu-card-bottom">
          <div class="menu-price-block">
            <span class="menu-price">₹${activePrice}</span>
          </div>
          ${variantsHtml}
          ${actionHtml}
        </div>
      </article>`;
    })
    .join("");
}

function buildWhatsAppText() {
  const items = Object.values(state.cart);
  if (items.length === 0) {
    return `Namaste! I would like to place an order at ${CAFE_INFO.name}, Rishikesh.`;
  }
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const lines = items.map(
    (i) =>
      `• ${i.qty} x ${i.name}${i.variantLabel ? ` (${i.variantLabel})` : ""} — ₹${i.price * i.qty}`
  );
  const orderType = els.orderType.value;
  const custName = els.customerName.value.trim();
  const notes = els.orderNotes.value.trim();

  let msg = `Namaste ${CAFE_INFO.name}! I'd like to order:\n\n${lines.join("\n")}\n\nEstimated Total: ₹${total}\nOrder Type: ${orderType}`;
  if (custName) msg += `\nName: ${custName}`;
  if (notes) msg += `\nNote: ${notes}`;
  return msg;
}

function updateCartUI() {
  const items = Object.values(state.cart);
  const totalQty = items.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  els.headerCartCount.textContent = String(totalQty);
  els.cartTotalAmount.textContent = `₹${totalPrice}`;

  if (totalQty > 0) {
    els.mobileCartBar.classList.add("is-visible");
    els.mobileCartSummary.textContent = `${totalQty} item${totalQty > 1 ? "s" : ""} · ₹${totalPrice}`;
    els.cartEmptyState.hidden = true;
    els.cartCustomerFields.hidden = false;
  } else {
    els.mobileCartBar.classList.remove("is-visible");
    els.cartEmptyState.hidden = false;
    els.cartCustomerFields.hidden = true;
  }

  els.cartItemsList.innerHTML = items
    .map(
      (i) => `
      <li class="cart-item-row">
        <div>
          <strong>${i.name}${i.variantLabel ? ` (${i.variantLabel})` : ""}</strong>
          <div class="review-meta">₹${i.price} each · Subtotal ₹${i.price * i.qty}</div>
        </div>
        <div class="qty-control">
          <button type="button" class="qty-btn" data-qty-key="${i.key}" data-delta="-1" aria-label="Decrease ${i.name}">−</button>
          <span class="qty-val">${i.qty}</span>
          <button type="button" class="qty-btn" data-qty-key="${i.key}" data-delta="1" aria-label="Increase ${i.name}">+</button>
        </div>
      </li>`
    )
    .join("");

  const message = buildWhatsAppText();
  els.whatsappOrderBtn.href = `https://wa.me/${CAFE_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function renderReviews() {
  const filtered =
    state.activeReviewTag === "all"
      ? POSITIVE_REVIEWS
      : POSITIVE_REVIEWS.filter((r) => r.tag === state.activeReviewTag);

  const visible = state.showAllReviews ? filtered : filtered.slice(0, 6);

  els.reviewsGrid.innerHTML = visible
    .map(
      (r) => `
      <article class="review-card">
        <div>
          <div class="review-stars" aria-label="${r.rating} out of 5 stars">★★★★★</div>
          <p class="review-text">“${r.text}”</p>
        </div>
        <div class="review-footer">
          <span class="review-author">${r.author}</span>
          <span class="review-meta">${r.date} · ${r.meta}</span>
        </div>
      </article>`
    )
    .join("");

  if (filtered.length <= 6) {
    els.toggleReviewsBtn.hidden = true;
  } else {
    els.toggleReviewsBtn.hidden = false;
    els.toggleReviewsBtn.textContent = state.showAllReviews
      ? "Show Fewer Reviews"
      : `Show All ${filtered.length} Positive Reviews`;
  }
}

function renderGallery() {
  els.galleryGrid.innerHTML = GALLERY_PHOTOS.map(
    (p, idx) => `
    <button type="button" class="gallery-btn" data-gallery-idx="${idx}">
      <img class="gallery-img" src="${p.src}" alt="${p.alt}" loading="lazy" />
      <div class="gallery-caption">${p.caption}</div>
    </button>`
  ).join("");
}

function openCartDrawer() {
  els.cartBackdrop.classList.add("is-open");
  els.cartBackdrop.setAttribute("aria-hidden", "false");
  els.closeCartBtn.focus();
}

function closeCartDrawer() {
  els.cartBackdrop.classList.remove("is-open");
  els.cartBackdrop.setAttribute("aria-hidden", "true");
  els.copyFeedback.textContent = "";
}

function openLightbox(idx) {
  const photo = GALLERY_PHOTOS[idx];
  if (!photo) return;
  els.lightboxImg.src = photo.src;
  els.lightboxImg.alt = photo.alt;
  els.lightboxCaption.textContent = photo.caption;
  els.lightbox.classList.add("is-open");
  els.lightbox.setAttribute("aria-hidden", "false");
  els.closeLightboxBtn.focus();
}

function closeLightbox() {
  els.lightbox.classList.remove("is-open");
  els.lightbox.setAttribute("aria-hidden", "true");
}

function bindEvents() {
  els.categoryPills.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-category]");
    if (!btn) return;
    state.activeCategory = btn.dataset.category;
    renderCategoryPills();
    renderMenu();
  });

  els.menuSearch.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    renderMenu();
  });

  els.clearSearchBtn.addEventListener("click", () => {
    state.searchQuery = "";
    els.menuSearch.value = "";
    renderMenu();
    els.menuSearch.focus();
  });

  els.menuGrid.addEventListener("click", (e) => {
    const variantBtn = e.target.closest("[data-variant-item]");
    if (variantBtn) {
      state.selectedVariants[variantBtn.dataset.variantItem] = Number(
        variantBtn.dataset.variantIdx
      );
      renderMenu();
      return;
    }

    const addBtn = e.target.closest("[data-add-id]");
    if (addBtn) {
      addToCart(addBtn.dataset.addId);
      return;
    }

    const qtyBtn = e.target.closest("[data-qty-key]");
    if (qtyBtn) {
      changeCartQty(qtyBtn.dataset.qtyKey, Number(qtyBtn.dataset.delta));
    }
  });

  els.cartItemsList.addEventListener("click", (e) => {
    const qtyBtn = e.target.closest("[data-qty-key]");
    if (qtyBtn) {
      changeCartQty(qtyBtn.dataset.qtyKey, Number(qtyBtn.dataset.delta));
    }
  });

  [els.orderType, els.customerName, els.orderNotes].forEach((input) => {
    input.addEventListener("input", updateCartUI);
    input.addEventListener("change", updateCartUI);
  });

  els.openCartBtn.addEventListener("click", openCartDrawer);
  els.mobileOpenCartBtn.addEventListener("click", openCartDrawer);
  els.closeCartBtn.addEventListener("click", closeCartDrawer);
  els.cartBackdrop.addEventListener("click", (e) => {
    if (e.target === els.cartBackdrop) closeCartDrawer();
  });

  els.copyOrderBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(buildWhatsAppText());
      els.copyFeedback.textContent = "Order summary copied to clipboard!";
    } catch {
      els.copyFeedback.textContent = "Select and copy or click Send Order on WhatsApp.";
    }
  });

  els.reviewFilters.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-review-tag]");
    if (!btn) return;
    state.activeReviewTag = btn.dataset.reviewTag;
    state.showAllReviews = false;
    els.reviewFilters.querySelectorAll(".filter-pill").forEach((el) => {
      el.classList.toggle("is-active", el === btn);
    });
    renderReviews();
  });

  els.toggleReviewsBtn.addEventListener("click", () => {
    state.showAllReviews = !state.showAllReviews;
    renderReviews();
  });

  els.galleryGrid.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-gallery-idx]");
    if (btn) openLightbox(Number(btn.dataset.galleryIdx));
  });

  els.closeLightboxBtn.addEventListener("click", closeLightbox);
  els.lightbox.addEventListener("click", (e) => {
    if (e.target === els.lightbox) closeLightbox();
  });

  els.mobileMenuToggle.addEventListener("click", () => {
    const isOpen = els.mobileNav.classList.toggle("is-open");
    els.mobileMenuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  els.mobileNav.addEventListener("click", (e) => {
    if (e.target.matches("a")) {
      els.mobileNav.classList.remove("is-open");
      els.mobileMenuToggle.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (els.cartBackdrop.classList.contains("is-open")) closeCartDrawer();
      if (els.lightbox.classList.contains("is-open")) closeLightbox();
    }
  });
}

function init() {
  renderRatingsStrip();
  renderCategoryPills();
  renderMenu();
  renderReviews();
  renderGallery();
  updateCartUI();
  bindEvents();
}

init();
