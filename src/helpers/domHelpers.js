export function clearChildren(el) {
  while (el.lastChild) {
    el.lastChild.remove();
  }
}
