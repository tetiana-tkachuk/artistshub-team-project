
export function mountLoader(container) {
    const loader = document.createElement("div");
    loader.classList.add("loader");
    const overlay = document.createElement("div");
    overlay.style.cssText = `
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 999;
    `;
    overlay.appendChild(loader);

    if (container.style.position === "" || container.style.position === "static") {
        container.style.position = "relative";
    }
    container.appendChild(overlay);
    return overlay;
}
    
export function initLoader(selector) {
    const container = document.querySelector(selector);

    if (!container) {
        console.warn(`Container "${selector}" not found`);
        return null;
    }

    return mountLoader(container);
}
export function showLoader(loader) {
    if (loader) loader.style.display = "flex";
}

export function hideLoader(loader) {
    if (loader) loader.style.display = "none";
}