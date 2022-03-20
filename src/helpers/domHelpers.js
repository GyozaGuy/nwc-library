export function clearChildren(el) {
  while (el.lastChild) {
    el.lastChild.remove();
  }
}

export function css(cssStrings, ...parts) {
  return `
    <style>
      ${cssStrings.reduce((acc, cur, i) => `${acc}${cur}${parts[i] || ''}`, '')}
    </style>
  `;
}

export function fhtml(htmlStrings, ...parts) {
  const template = document.createElement('template');
  template.innerHTML = html(htmlStrings, ...parts);
  return template.content;
}

export function html(htmlStrings, ...parts) {
  return htmlStrings.reduce((acc, cur, i) => `${acc}${cur}${parts[i] || ''}`, '');
}
