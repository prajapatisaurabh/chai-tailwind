export function applyStyles(css) {
  const existing = document.querySelector("style[data-chai-choco]");
  if (existing) existing.remove();
  const style = document.createElement("style");
  style.setAttribute("data-chai-choco", "");
  style.innerHTML = css;
  document.head.appendChild(style);
}
