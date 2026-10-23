/* Optional third-party translation. No requests occur until a link is followed. */
(function () {
  'use strict';
  var languages = [
    ['pl', 'Polski'], ['de', 'Deutsch'], ['es', 'Español'],
    ['fr', 'Français'], ['pt', 'Português'], ['ru', 'Русский'], ['ja', '日本語']
  ];
  function isLocalUrl(value) {
    var u = new URL(value);
    return u.protocol !== 'https:' || u.hostname === 'localhost' ||
      u.hostname === '127.0.0.1' || u.hostname === '[::1]';
  }
  function translationUrl(value, language) {
    if (isLocalUrl(value)) return null;
    var url = new URL('https://translate.google.com/translate');
    url.searchParams.set('sl', 'en');
    url.searchParams.set('tl', language);
    url.searchParams.set('u', value);
    return url.href;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translationUrl: translationUrl, isLocalUrl: isLocalUrl };
  }
  if (typeof document === 'undefined') return;
  function inject() {
    if (document.querySelector('.tlc-translate')) return;
    var header = document.querySelector('.md-header__inner');
    if (!header) return;
    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'md-header__button tlc-translate';
    button.textContent = 'Translate';
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-controls', 'tlc-translation-links');
    button.setAttribute('aria-label', 'Translate this page with Google Translate');
    var panel = document.createElement('div');
    panel.id = 'tlc-translation-links';
    panel.className = 'tlc-translate-menu';
    panel.hidden = true;
    panel.setAttribute('aria-label', 'Machine translation languages');
    var title = document.createElement('div');
    title.className = 'tlc-translate-menu__title';
    title.textContent = 'Machine translation';
    panel.appendChild(title);
    var local = isLocalUrl(location.href);
    if (!local) languages.forEach(function (language) {
      var link = document.createElement('a');
      link.className = 'tlc-translate-menu__item';
      link.textContent = language[1];
      link.lang = language[0];
      link.href = translationUrl(location.href, language[0]);
      panel.appendChild(link);
    });
    var note = document.createElement('p');
    note.className = 'tlc-translate-menu__note';
    note.textContent = local
      ? 'Translation requires the public guide. Local preview pages cannot be translated.'
      : 'Opens Google Translate, a third-party service. Translation is automatic and unreviewed.';
    panel.appendChild(note);
    function close(restoreFocus) {
      panel.hidden = true;
      button.setAttribute('aria-expanded', 'false');
      if (restoreFocus) button.focus();
    }
    button.addEventListener('click', function () {
      if (!panel.hidden) return close(false);
      panel.hidden = false;
      button.setAttribute('aria-expanded', 'true');
      var rect = button.getBoundingClientRect();
      panel.style.top = rect.bottom + 8 + 'px';
      panel.style.right = Math.max(12, innerWidth - rect.right) + 'px';
      var first = panel.querySelector('a');
      if (first) first.focus();
    });
    document.addEventListener('click', function (e) {
      if (!button.contains(e.target) && !panel.contains(e.target)) close(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !panel.hidden) close(true);
    });
    document.addEventListener('focusin', function (e) {
      if (!button.contains(e.target) && !panel.contains(e.target)) close(false);
    });
    window.addEventListener('resize', function () { close(false); });
    header.appendChild(button);
    document.body.appendChild(panel);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', inject);
  else inject();
})();
