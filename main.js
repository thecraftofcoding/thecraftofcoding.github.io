// FAQ accordion
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const open = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!open) item.classList.add('open');
  });
});

// Scroll reveal
const obs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('in'), i * 60);
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
(function () {
var tabs     = document.querySelectorAll('.track-tab');
var panels   = document.querySelectorAll('.tab-content');
tabs.forEach(function (tab) {
tab.addEventListener('click', function () {
// Deactivate everything
tabs.forEach(function (t) {
  t.classList.remove('active');
  t.setAttribute('aria-selected', 'false');
});
panels.forEach(function (p) { p.classList.remove('active'); });
// Activate the clicked tab + matching panel
tab.classList.add('active');
tab.setAttribute('aria-selected', 'true');
var panelId = 'tab-' + tab.dataset.tab;
var panel = document.getElementById(panelId);
if (panel) { panel.classList.add('active'); }
});
});
})();
