const list = document.querySelector(".drag-list");
const items = document.querySelectorAll(".drag-item");

function start(e) {
  if (e.target.matches(".drag-item")) {
    setTimeout(() => e.target.classList.add("active"), 0);
  }
}

const end = () =>
  items.forEach((item) => item.classList.remove("active", "grabbing"));

function activate(e) {
  reset(e);
  e.target.matches(".drag-item") && e.target.classList.add("grabbing");
  const activeItem = list.querySelector(".active");
  const inactiveItems = [...list.querySelectorAll(".drag-item:not(.active)")];
  const insertPos = inactiveItems.find(
    (item) => e.clientY <= item.offsetTop + item.offsetHeight / 2
  );
  list.insertBefore(activeItem, insertPos);
}

const reset = (e) => e.preventDefault();

list.addEventListener("dragstart", start, false);
list.addEventListener("dragend", end, false);
list.addEventListener("dragover", activate, false);
list.addEventListener("dragenter", reset, false);
