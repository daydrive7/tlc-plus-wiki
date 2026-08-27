/* ---------------------------------------------------------------------------
 * TLC+ Guide — Google Translate header button
 * Adds a language button to the Material header. On the hosted site it opens
 * the current page through Google Translate's translate.goog mirror, keeping
 * every language available that is not English. On translate.goog itself the
 * button turns into "Show original".
 * ------------------------------------------------------------------------- */
(function () {
  'use strict';

  var LANGS = [
    { code: 'pl', label: 'Polski' },
    { code: 'de', label: 'Deutsch' },
    { code: 'es', label: 'Español' },
    { code: 'fr', label: 'Français' },
    { code: 'pt', label: 'Português' },
    { code: 'pt-BR', label: 'Português (Brasil)' },
    { code: 'ru', label: 'Русский' },
    { code: 'ja', label: '日本語' },
    { code: 'it', label: 'Italiano' },
    { code: 'nl', label: 'Nederlands' },
    { code: 'tr', label: 'Türkçe' },
    { code: 'uk', label: 'Українська' },
    { code: 'zh-CN', label: '中文（简体）' },
    { code: 'zh-TW', label: '中文（繁體）' }
  ];

  var STORAGE_KEY = 'tlcp-translate-lang';

  function onTranslateHost() {
    return location.hostname.endsWith('.translate.goog');
  }

  function isLocal() {
    return (
      location.hostname === 'localhost' ||
      location.hostname === '127.0.0.1' ||
      location.protocol === 'file:'
    );
  }

  function originalHostFromTranslateHost(hostname) {
    // Google escapes dots in the original host as hyphens.
    var raw = hostname.replace(/\.translate\.goog$/, '');
    // Only undo the escaping when it looks like a github.io style host.
    return raw.replace(/-/g, '.');
  }

  function buildTranslatedUrl(lang) {
    var host = location.hostname;
    var path = location.pathname;
    var query = new URLSearchParams(location.search);
    query.set('_x_tr_sl', 'auto');
    query.set('_x_tr_tl', lang);
    query.set('_x_tr_hl', lang);
    return (
      'https://' + host + '.translate.goog' + path + '?' + query.toString()
    );
  }

  function buildOriginalUrl() {
    var host = originalHostFromTranslateHost(location.hostname);
    var path = location.pathname;
    var query = new URLSearchParams(location.search);
    ['_x_tr_sl', '_x_tr_tl', '_x_tr_hl', '_x_tr_pto'].forEach(function (k) {
      query.delete(k);
    });
    var qs = query.toString();
    return 'https://' + host + path + (qs ? '?' + qs : '');
  }

  function makeButton() {
    var btn = document.createElement('button');
    btn.className = 'md-header__button md-icon tlc-translate';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Translate');
    btn.title = onTranslateHost() ? 'Show original (English)' : 'Translate';
    btn.textContent = onTranslateHost() ? 'language' : 'translate';
    return btn;
  }

  function makeMenu() {
    var menu = document.createElement('div');
    menu.className = 'tlc-translate-menu';
    menu.setAttribute('role', 'menu');
    menu.hidden = true;

    var title = document.createElement('div');
    title.className = 'tlc-translate-menu__title';
    title.textContent = 'Translate this page';
    menu.appendChild(title);

    if (onTranslateHost()) {
      var orig = document.createElement('button');
      orig.type = 'button';
      orig.className = 'tlc-translate-menu__item tlc-translate-menu__item--strong';
      orig.textContent = 'Show original (English)';
      orig.addEventListener('click', function () {
        location.href = buildOriginalUrl();
      });
      menu.appendChild(orig);
    }

    LANGS.forEach(function (l) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'tlc-translate-menu__item';
      b.setAttribute('lang', l.code);
      b.textContent = l.label;
      b.addEventListener('click', function () {
        try { localStorage.setItem(STORAGE_KEY, l.code); } catch (e) { /* ignore */ }
        location.href = buildTranslatedUrl(l.code);
      });
      menu.appendChild(b);
    });

    var note = document.createElement('div');
    note.className = 'tlc-translate-menu__note';
    note.textContent = isLocal()
      ? 'Machine translation opens on the hosted site — run the guide from its public URL for this to work.'
      : 'Machine translation by Google Translate.';
    menu.appendChild(note);
    return menu;
  }

  function inject() {
    if (document.querySelector('.tlc-translate')) return;
    var option = document.querySelector('.md-header__inner .md-header__option');
    if (!option) return;

    var btn = makeButton();
    var menu = makeMenu();
    document.body.appendChild(menu);

    function openMenu() {
      menu.hidden = false;
      var rect = btn.getBoundingClientRect();
      menu.style.top = rect.bottom + 8 + 'px';
      menu.style.right = Math.max(8, window.innerWidth - rect.right) + 'px';
      btn.classList.add('tlc-translate--active');
    }
    function closeMenu() {
      menu.hidden = true;
      btn.classList.remove('tlc-translate--active');
    }

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      if (menu.hidden) openMenu(); else closeMenu();
    });
    document.addEventListener('click', function () { closeMenu(); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });

    option.insertBefore(btn, option.firstChild);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
  // Re-inject after Material's instant-navigation swaps the DOM.
  if (typeof document$ !== 'undefined' && document$ && document$.subscribe) {
    document$.subscribe(function () { inject(); });
  }
})();
