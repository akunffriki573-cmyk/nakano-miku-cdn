// ─── SPLASH
(function() {
  let p = 0;
  const fill = document.getElementById('splFill');
  const pct = document.getElementById('splPct');
  const splash = document.getElementById('splash');
  const t = setInterval(() => {
    p += Math.random() * 18 + 4;
    if (p >= 100) { p = 100; clearInterval(t); setTimeout(() => splash.classList.add('gone'), 300); }
    fill.style.width = p + '%';
    pct.textContent = Math.round(p) + '%';
  }, 80);
})();

// ─── SUBMENU
function toggleSub(btn) {
  const group = btn.closest('.drawer-group');
  group.classList.toggle('open');
}

// ─── DRAWER
function openDrawer() {
  document.getElementById('drawer').classList.add('open');
  document.getElementById('overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeDrawer() {
  document.getElementById('drawer').classList.remove('open');
  document.getElementById('overlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ─── QRIS
function openQ() { document.getElementById('qmodal').classList.add('open'); }
function closeQ() { document.getElementById('qmodal').classList.remove('open'); }

// ─── FAQ
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// ─── MARQUEE
const items = [
  { icon: 'fa-cloud-arrow-down', label: 'Downloader' },
  { icon: 'fa-sparkles', label: 'AI Chat' },
  { icon: 'fa-users-gear', label: 'Group Admin' },
  { icon: 'fa-dice-d6', label: 'RPG Economy' },
  { icon: 'fa-robot', label: 'Auto-Reply' },
  { icon: 'fa-wand-magic-sparkles', label: 'Text-to-Media' },
  { icon: 'fa-shield-check', label: '99.9% Uptime' },
  { icon: 'fa-bolt', label: 'Instant Response' },
];
const inner = document.getElementById('marqueeInner');
let html = '';
[...items, ...items].forEach(i => {
  html += `<span class="marquee-item"><i class="fas ${i.icon}"></i>${i.label}</span>`;
});
inner.innerHTML = html;

// ─── COUNTDOWN
function updateCountdown() {
  const now = new Date();
  const next = new Date();
  next.setHours(23, 59, 59, 0);
  const diff = next - now;
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  document.getElementById('countdown').textContent =
    String(h).padStart(2,'0') + ':' + String(m).padStart(2,'0') + ':' + String(s).padStart(2,'0');
}
updateCountdown();
setInterval(updateCountdown, 1000);

// ─── SCROLL REVEAL
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ─── YEAR
document.getElementById('yr').textContent = new Date().getFullYear();
