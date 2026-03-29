/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   site-header.js — Common topbar for index.html & showcase.html
   Injects the shared nav before page content.
   Active link detected from window.location.pathname.
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

(function () {
  var path    = window.location.pathname;
  var isHome  = path === '/' || path.endsWith('index.html') || path === '';

  var logoHref        = isHome ? '#' : '/index.html';
  var getStartedHref  = isHome ? '#install' : '/components.html';

  var howItWorksLink = isHome
    ? '<a class="topbar-link" href="#how-it-works">How it Works</a>'
    : '';

  var GITHUB_SVG = '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>';

  var topbarHTML = '\n<header class="topbar" id="site-topbar">\n  <a href="' + logoHref + '" class="topbar-logo">\n    <div class="topbar-logo-icon">\n      <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" fill="#FFF8F0" opacity="0.9"/><circle cx="8" cy="8" r="3" fill="#C68642"/></svg>\n    </div>\n    chai choco\n  </a>\n  <nav class="topbar-right" id="topbar-desktop-nav">\n    ' + howItWorksLink + '\n    <a class="topbar-link" href="/components.html" data-page="components.html">Components</a>\n    <a class="topbar-link" href="/showcase.html" data-page="showcase.html">Showcase</a>\n    <a class="topbar-link" href="https://github.com/prajapatisaurabh/chai-tailwind" target="_blank" rel="noopener noreferrer">' + GITHUB_SVG + ' GitHub</a>\n    <a class="topbar-cta" href="' + getStartedHref + '">Get Started</a>\n  </nav>\n  <button class="topbar-mobile-btn" id="topbar-mobile-btn" aria-label="Toggle menu" aria-expanded="false">\n    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>\n  </button>\n</header>\n<div class="topbar-mobile-menu" id="topbar-mobile-menu">\n  ' + (isHome ? '<a href="#how-it-works">How it Works</a>' : '') + '\n  <a href="/components.html">Components</a>\n  <a href="/showcase.html">Showcase</a>\n  <a href="https://github.com/prajapatisaurabh/chai-tailwind" target="_blank" rel="noopener noreferrer">GitHub</a>\n  <a href="' + getStartedHref + '" style="color:var(--caramel);font-weight:700;">Get Started</a>\n</div>\n';

  document.body.insertAdjacentHTML('afterbegin', topbarHTML);

  /* ── Active link ── */
  document.querySelectorAll('.topbar-link[data-page]').forEach(function (a) {
    if (path.endsWith(a.dataset.page)) a.classList.add('active');
  });

  /* ── Scroll effect ── */
  var topbar = document.getElementById('site-topbar');
  window.addEventListener('scroll', function () {
    topbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  /* ── Mobile menu ── */
  document.addEventListener('click', function (e) {
    var btn  = e.target.closest('#topbar-mobile-btn');
    var menu = document.getElementById('topbar-mobile-menu');
    var mbtn = document.getElementById('topbar-mobile-btn');

    if (btn) {
      var open = menu.classList.toggle('open');
      mbtn.setAttribute('aria-expanded', String(open));
      return;
    }
    // close on outside click or menu link click
    if (!e.target.closest('#topbar-mobile-menu') && !e.target.closest('#topbar-mobile-btn')) {
      menu.classList.remove('open');
      mbtn.setAttribute('aria-expanded', 'false');
    }
    if (e.target.closest('#topbar-mobile-menu a')) {
      menu.classList.remove('open');
      mbtn.setAttribute('aria-expanded', 'false');
    }
  });
})();
