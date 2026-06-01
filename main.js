// FAQ
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