let colors = {
  main: "#ffe",
  next: "#fef",
  release: "#eff",
};

function applyColor() {
  let branch = document.querySelector(".gh-header-meta .commit-ref")?.textContent?.trim();
  document.body.style.setProperty("--bgColor-default", (branch && colors[Object.keys(colors).find(key => branch.startsWith(key))]) ?? null);
}
applyColor();

const observer = new MutationObserver(applyColor);
observer.observe(document.body, {
  childList: true,
  subtree: true
});
