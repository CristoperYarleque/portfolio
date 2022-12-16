document.addEventListener("DOMContentLoaded", () => {
  const includeHTML = async (el, url) => {
    data = await getHtml(url)
    el.outerHTML = data
  };

  document
    .querySelectorAll("[data-include]")
    .forEach((el) => includeHTML(el, el.getAttribute("data-include")));
});

const getHtml = async (url) => {
try {
  const res = await fetch(url)
  const data = await res.text()
  return data
} catch (e) {
  console.error("Error:", e)
}
}