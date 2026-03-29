/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   docs-shell.js — Shared topbar + sidebar for all docs pages
   Injects header, drawer overlay, and sidebar into every docs page.
   Active sidebar link is detected from window.location.pathname.
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

(function () {
  /* ── TOPBAR ── */
  const topbarHTML = `
<header class="topbar">
  <div style="display:flex;align-items:center;gap:10px;">
    <button class="hamburger-btn" id="hamburger-btn" aria-label="Open navigation">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
    </button>
    <a href="/index.html" class="topbar-logo">
      <div class="topbar-logo-icon">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" fill="#FFF8F0" opacity="0.9"/><circle cx="8" cy="8" r="3" fill="#C68642"/></svg>
      </div>
      chai choco
    </a>
  </div>
  <div class="topbar-right">
    <a href="/index.html" class="mobile-back-btn">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
      Home
    </a>
    <a href="/index.html" class="topbar-link">Home</a>
    <a href="/components.html" class="topbar-link">Components</a>
    <a href="/showcase.html" class="topbar-link">Showcase</a>
    <a href="https://github.com/prajapatisaurabh/chai-tailwind" target="_blank" rel="noopener noreferrer" class="topbar-link">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
      GitHub
    </a>
  </div>
</header>
<div class="drawer-overlay" id="drawer-overlay"></div>`;

  /* ── SIDEBAR ── */
  const sidebarHTML = `
<aside class="sidebar" id="sidebar">
  <div class="sidebar-section">
    <div class="sidebar-section-label">Getting Started</div>
    <a class="sidebar-link" href="/components.html" data-page="components.html">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 8 12 12 14 14"/></svg>
      Overview
    </a>
  </div>
  <div class="sidebar-section">
    <div class="sidebar-section-label">Components</div>
    <a class="sidebar-link" href="/docs/buttons.html" data-page="buttons.html">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="8" width="18" height="8" rx="2"/></svg>
      Buttons
      <span class="sidebar-badge">5</span>
    </a>
    <a class="sidebar-link" href="/docs/cards.html" data-page="cards.html">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/></svg>
      Cards
      <span class="sidebar-badge">3</span>
    </a>
    <a class="sidebar-link" href="/docs/badges.html" data-page="badges.html">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>
      Badges &amp; Chips
      <span class="sidebar-badge">5</span>
    </a>
    <a class="sidebar-link" href="/docs/inputs.html" data-page="inputs.html">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 10h10"/></svg>
      Inputs &amp; Forms
      <span class="sidebar-badge">3</span>
    </a>
    <a class="sidebar-link" href="/docs/misc.html" data-page="misc.html">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
      Avatar &amp; Divider
    </a>
  </div>
  <div class="sidebar-section">
    <div class="sidebar-section-label">Utilities</div>
    <a class="sidebar-link" href="/docs/layout.html" data-page="layout.html">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
      Layout &amp; Grid
    </a>
    <a class="sidebar-link" href="/docs/typography.html" data-page="typography.html">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>
      Typography
    </a>
    <a class="sidebar-link" href="/docs/colors.html" data-page="colors.html">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 010 20"/></svg>
      Colors
    </a>
    <a class="sidebar-link" href="/docs/spacing.html" data-page="spacing.html">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="2" x2="12" y2="22"/><path d="M5 8l7-6 7 6M5 16l7 6 7-6"/></svg>
      Spacing
    </a>
    <a class="sidebar-link" href="/docs/shadows.html" data-page="shadows.html">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="13" height="13" rx="2"/><path d="M8 21h13M21 8v13"/></svg>
      Shadows &amp; Borders
    </a>
  </div>
  <div class="sidebar-section">
    <div class="sidebar-section-label">Motion</div>
    <a class="sidebar-link" href="/docs/animations.html" data-page="animations.html">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
      Animations
    </a>
    <a class="sidebar-link" href="/docs/interactions.html" data-page="interactions.html">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
      Hover &amp; Transitions
    </a>
  </div>
  <div class="sidebar-section">
    <div class="sidebar-section-label">Project</div>
    <a class="sidebar-link" href="/docs/roadmap.html" data-page="roadmap.html">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h12"/></svg>
      Roadmap
    </a>
  </div>
</aside>`;

  /* ── INJECT ── */
  const layout = document.getElementById('page-layout');
  if (layout) {
    // Inject topbar + overlay before the page-layout div
    layout.insertAdjacentHTML('beforebegin', topbarHTML);
    // Inject sidebar as first child of page-layout
    layout.insertAdjacentHTML('afterbegin', sidebarHTML);
  }

  /* ── ACTIVE LINK ── */
  const path = window.location.pathname;
  document.querySelectorAll('.sidebar-link[data-page]').forEach(function (a) {
    if (path.endsWith(a.dataset.page)) {
      a.classList.add('active');
    }
  });

  /* ── MOBILE DRAWER ── */
  function toggleMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('drawer-overlay');
    if (!sidebar || !overlay) return;
    const open = sidebar.classList.toggle('mobile-open');
    overlay.classList.toggle('visible', open);
  }

  function closeMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('drawer-overlay');
    if (sidebar) sidebar.classList.remove('mobile-open');
    if (overlay) overlay.classList.remove('visible');
  }

  document.addEventListener('click', function (e) {
    const btn = e.target.closest('#hamburger-btn');
    const overlay = e.target.closest('#drawer-overlay');
    if (btn) toggleMobileMenu();
    if (overlay) closeMobileMenu();
  });

  /* ── COPY CODE ── */
  window.copyCode = function (btn) {
    const block = btn.closest('.comp-code-block');
    const text  = block.querySelector('.comp-code').innerText.trim();
    const orig  = btn.innerHTML;
    navigator.clipboard.writeText(text).then(function () {
      btn.textContent = 'Copied!'; btn.classList.add('copied');
      setTimeout(function () { btn.innerHTML = orig; btn.classList.remove('copied'); }, 2000);
    }).catch(function () {
      const ta = document.createElement('textarea');
      ta.value = text;
      Object.assign(ta.style, { position: 'fixed', opacity: '0', top: '0', left: '0' });
      document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
      btn.textContent = 'Copied!'; btn.classList.add('copied');
      setTimeout(function () { btn.innerHTML = orig; btn.classList.remove('copied'); }, 2000);
    });
  };
})();
