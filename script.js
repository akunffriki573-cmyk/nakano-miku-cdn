*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg: #0a0a08;
  --bg2: #111110;
  --bg3: #181816;
  --line: rgba(255,255,255,0.07);
  --line2: rgba(255,255,255,0.12);
  --text: #f0ede8;
  --text2: #9e9b95;
  --text3: #5a5754;
  --accent: #c8f74a;
  --accent2: #7fff6e;
  --red: #ff4d4d;
  --blue: #4d9fff;
  --font: 'DM Sans', sans-serif;
  --font-display: 'Syne', sans-serif;
  --font-mono: 'DM Mono', monospace;
  --r: 6px;
}

html { scroll-behavior: smooth; }

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font);
  font-size: 14px;
  line-height: 1.6;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

/* ─── SCROLLBAR ─── */
::-webkit-scrollbar { width: 3px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 2px; }

/* ─── SPLASH ─── */
#splash {
  position: fixed; inset: 0; z-index: 9999;
  background: var(--bg);
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  gap: 24px;
  transition: opacity .5s ease, visibility .5s;
}
#splash.gone { opacity: 0; visibility: hidden; pointer-events: none; }

.splash-logo {
  width: 72px; height: 72px;
  border-radius: 50%;
  overflow: hidden;
  border: 1.5px solid var(--line2);
  animation: pulse-border 2s ease infinite;
}
.splash-logo img { width: 100%; height: 100%; object-fit: cover; }

@keyframes pulse-border {
  0%, 100% { border-color: var(--line2); box-shadow: none; }
  50% { border-color: var(--accent); box-shadow: 0 0 18px rgba(200,247,74,.2); }
}

.splash-name {
  font-family: var(--font-display);
  font-size: 22px; font-weight: 700;
  letter-spacing: -.02em;
}

.splash-bar-wrap {
  width: 160px; height: 2px;
  background: var(--line2); border-radius: 2px;
  overflow: hidden;
}
.splash-bar-fill {
  height: 100%; width: 0%;
  background: var(--accent);
  transition: width .08s linear;
}

.splash-pct {
  font-family: var(--font-mono);
  font-size: 11px; color: var(--text3);
  letter-spacing: .1em;
}

/* ─── TOP BAR ─── */
.topbar {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  padding: 0 24px;
  height: 56px;
  display: flex; align-items: center; justify-content: space-between;
  border-bottom: 1px solid var(--line);
  background: rgba(10,10,8,.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.topbar-logo {
  display: flex; align-items: center; gap: 10px;
  text-decoration: none;
}
.topbar-logo-img {
  width: 30px; height: 30px;
  border-radius: 50%; overflow: hidden;
  border: 1px solid var(--line2);
}
.topbar-logo-img img { width: 100%; height: 100%; object-fit: cover; }

.topbar-name {
  font-family: var(--font-display);
  font-size: 15px; font-weight: 700;
  color: var(--text);
  letter-spacing: -.01em;
}
.topbar-name em { color: var(--accent); font-style: normal; }

.topbar-right {
  display: flex; align-items: center; gap: 12px;
}

.live-chip {
  display: flex; align-items: center; gap: 6px;
  padding: 4px 10px;
  border: 1px solid var(--line2);
  border-radius: 20px;
  font-family: var(--font-mono);
  font-size: 10px; color: var(--text2);
  letter-spacing: .05em;
}
.live-dot {
  width: 6px; height: 6px;
  background: var(--accent2);
  border-radius: 50%;
  animation: blink 1.4s ease infinite;
}
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: .3; }
}

.hamburger {
  width: 36px; height: 36px;
  border: 1px solid var(--line2);
  border-radius: var(--r);
  background: none;
  color: var(--text);
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  font-size: 14px;
  transition: border-color .2s, background .2s;
}
.hamburger:hover { border-color: var(--accent); background: rgba(200,247,74,.06); }

/* ─── DRAWER ─── */
.overlay {
  position: fixed; inset: 0; z-index: 150;
  background: rgba(0,0,0,.6);
  opacity: 0; visibility: hidden;
  transition: opacity .3s, visibility .3s;
  backdrop-filter: blur(4px);
}
.overlay.open { opacity: 1; visibility: visible; }

.drawer {
  position: fixed; top: 0; right: 0; bottom: 0; z-index: 200;
  width: min(300px, 88vw);
  background: var(--bg2);
  border-left: 1px solid var(--line);
  transform: translateX(100%);
  transition: transform .35s cubic-bezier(.25,.46,.45,.94);
  display: flex; flex-direction: column;
  padding: 0;
}
.drawer.open { transform: translateX(0); }

.drawer-head {
  display: flex; align-items: center; justify-content: space-between;
  padding: 20px 20px 16px;
  border-bottom: 1px solid var(--line);
}
.drawer-head-title {
  font-family: var(--font-mono);
  font-size: 10px; color: var(--text3);
  letter-spacing: .1em; text-transform: uppercase;
}
.drawer-close {
  width: 30px; height: 30px;
  border: 1px solid var(--line2);
  border-radius: 50%;
  background: none; color: var(--text2);
  cursor: pointer; font-size: 12px;
  display: flex; align-items: center; justify-content: center;
  transition: border-color .2s, color .2s;
}
.drawer-close:hover { border-color: var(--red); color: var(--red); }

.drawer-links {
  flex: 1; padding: 12px;
  display: flex; flex-direction: column; gap: 2px;
  overflow-y: auto;
}
.drawer-link {
  display: flex; align-items: center; gap: 12px;
  padding: 11px 14px;
  border-radius: var(--r);
  color: var(--text2);
  text-decoration: none;
  font-size: 13px; font-weight: 400;
  transition: background .2s, color .2s;
  cursor: pointer; border: none; background: none;
  text-align: left; width: 100%;
}
.drawer-link i { width: 16px; text-align: center; font-size: 12px; }
.drawer-link:hover { background: var(--bg3); color: var(--text); }
.drawer-link.hi { color: var(--accent); }
.drawer-link.hi:hover { background: rgba(200,247,74,.08); }

.drawer-foot {
  padding: 16px 20px;
  border-top: 1px solid var(--line);
  font-size: 10px; color: var(--text3);
  font-family: var(--font-mono);
}

/* ─── QRIS MODAL ─── */
.qmodal {
  position: fixed; inset: 0; z-index: 300;
  background: rgba(0,0,0,.75);
  display: flex; align-items: center; justify-content: center;
  opacity: 0; visibility: hidden;
  transition: opacity .25s, visibility .25s;
  padding: 20px;
  backdrop-filter: blur(6px);
}
.qmodal.open { opacity: 1; visibility: visible; }

.qbox {
  background: var(--bg2);
  border: 1px solid var(--line2);
  border-radius: 12px;
  padding: 28px 24px;
  width: 100%; max-width: 320px;
  position: relative;
}
.qbox-close {
  position: absolute; top: 14px; right: 14px;
  width: 28px; height: 28px;
  border: 1px solid var(--line2); border-radius: 50%;
  background: none; color: var(--text3);
  cursor: pointer; font-size: 11px;
  display: flex; align-items: center; justify-content: center;
  transition: border-color .2s, color .2s;
}
.qbox-close:hover { border-color: var(--red); color: var(--red); }
.qbox-title {
  font-family: var(--font-display);
  font-size: 18px; font-weight: 700; margin-bottom: 4px;
}
.qbox-sub { font-size: 12px; color: var(--text2); margin-bottom: 20px; }
.qbox-img {
  background: var(--bg3);
  border: 1px solid var(--line);
  border-radius: 8px;
  height: 180px;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  gap: 8px; margin-bottom: 16px;
  color: var(--text3); font-size: 40px;
}
.qbox-steps {
  font-size: 11px; color: var(--text2);
  line-height: 1.9;
}
.qbox-steps b { color: var(--text); display: block; margin-bottom: 4px; }

/* ─── PROMO BANNER ─── */
.promo-strip {
  background: rgba(200,247,74,.06);
  border-bottom: 1px solid rgba(200,247,74,.15);
  padding: 9px 24px;
  text-align: center;
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--accent);
  letter-spacing: .04em;
}
.promo-strip span { color: var(--text2); }

/* ─── HERO ─── */
.hero-section {
  padding: 120px 24px 80px;
  max-width: 960px; margin: 0 auto;
  position: relative;
}

.hero-kicker {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: var(--font-mono);
  font-size: 10px; color: var(--text3);
  letter-spacing: .12em; text-transform: uppercase;
  margin-bottom: 28px;
}
.hero-kicker::before {
  content: '';
  display: block; width: 20px; height: 1px;
  background: var(--text3);
}

.hero-headline {
  font-family: var(--font-display);
  font-size: clamp(38px, 9vw, 80px);
  font-weight: 800;
  line-height: 1.0;
  letter-spacing: -.04em;
  margin-bottom: 28px;
}
.hero-headline .hl-line2 {
  display: block;
  color: transparent;
  -webkit-text-stroke: 1.5px rgba(240,237,232,.4);
}
.hero-headline .hl-accent {
  display: block;
  color: var(--accent);
}

.hero-sub {
  font-size: 14px;
  color: var(--text2);
  max-width: 400px;
  line-height: 1.8;
  margin-bottom: 40px;
  font-weight: 300;
}

.hero-actions {
  display: flex; flex-wrap: wrap; gap: 12px;
  margin-bottom: 60px;
}

.btn-main {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 13px 24px;
  background: var(--accent);
  color: #0a0a08;
  font-family: var(--font-display);
  font-size: 12px; font-weight: 700;
  letter-spacing: .02em; text-transform: uppercase;
  border-radius: var(--r);
  text-decoration: none;
  border: none; cursor: pointer;
  transition: background .2s, transform .15s;
}
.btn-main:hover { background: #d8ff5a; transform: translateY(-1px); }
.btn-main:active { transform: translateY(0); }

.btn-ghost {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 13px 24px;
  border: 1px solid var(--line2);
  color: var(--text2);
  font-size: 12px; font-weight: 400;
  border-radius: var(--r);
  text-decoration: none;
  transition: border-color .2s, color .2s, background .2s;
  cursor: pointer; background: none;
}
.btn-ghost:hover { border-color: var(--text2); color: var(--text); background: rgba(255,255,255,.04); }

.hero-stats {
  display: flex; gap: 40px;
  flex-wrap: wrap;
}
.stat { display: flex; flex-direction: column; gap: 3px; }
.stat-num {
  font-family: var(--font-display);
  font-size: 28px; font-weight: 800;
  letter-spacing: -.03em;
  line-height: 1;
}
.stat-num.green { color: var(--accent); }
.stat-label {
  font-family: var(--font-mono);
  font-size: 10px; color: var(--text3);
  letter-spacing: .08em;
}

/* ─── MARQUEE ─── */
.marquee-wrap {
  overflow: hidden;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  padding: 14px 0;
  background: var(--bg2);
}
.marquee-inner {
  display: flex; gap: 0;
  width: max-content;
  animation: marquee 28s linear infinite;
}
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
.marquee-item {
  display: inline-flex; align-items: center; gap: 10px;
  padding: 0 28px;
  font-family: var(--font-mono);
  font-size: 10px; color: var(--text3);
  letter-spacing: .08em; text-transform: uppercase;
  white-space: nowrap;
}
.marquee-item i { color: var(--accent); font-size: 9px; }

/* ─── SECTION COMMON ─── */
.section { padding: 80px 24px; max-width: 960px; margin: 0 auto; }
.section-label {
  font-family: var(--font-mono);
  font-size: 10px; color: var(--text3);
  letter-spacing: .12em; text-transform: uppercase;
  display: flex; align-items: center; gap: 10px;
  margin-bottom: 20px;
}
.section-label::after {
  content: '';
  flex: 1; max-width: 40px;
  height: 1px; background: var(--line2);
}
.section-title {
  font-family: var(--font-display);
  font-size: clamp(26px, 5vw, 44px);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -.03em;
  margin-bottom: 48px;
}
.section-title .hi { color: var(--accent); }

/* ─── FEATURES ─── */
.feat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1px;
  border: 1px solid var(--line);
  border-radius: 10px;
  overflow: hidden;
  background: var(--line);
}
.feat-cell {
  background: var(--bg2);
  padding: 28px 24px;
  transition: background .2s;
  position: relative;
}
.feat-cell:hover { background: var(--bg3); }

.feat-cell-num {
  font-family: var(--font-mono);
  font-size: 10px; color: var(--text3);
  letter-spacing: .1em; margin-bottom: 14px;
}
.feat-cell-icon {
  width: 38px; height: 38px;
  border-radius: 8px;
  background: rgba(200,247,74,.08);
  border: 1px solid rgba(200,247,74,.15);
  display: flex; align-items: center; justify-content: center;
  font-size: 14px; color: var(--accent);
  margin-bottom: 14px;
}
.feat-cell-name {
  font-family: var(--font-display);
  font-size: 15px; font-weight: 700;
  margin-bottom: 8px;
  letter-spacing: -.01em;
}
.feat-cell-desc { font-size: 12px; color: var(--text2); line-height: 1.7; }

/* ─── WHY ─── */
.why-section { background: var(--bg2); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
.why-inner { padding: 80px 24px; max-width: 960px; margin: 0 auto; }

.why-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 24px;
}
.why-card {
  padding: 28px 24px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: var(--bg);
  transition: border-color .25s, transform .25s;
  position: relative; overflow: hidden;
}
.why-card:hover { border-color: rgba(200,247,74,.3); transform: translateY(-3px); }
.why-card::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--accent), transparent);
  opacity: 0;
  transition: opacity .25s;
}
.why-card:hover::before { opacity: 1; }

.why-card-num {
  font-family: var(--font-mono);
  font-size: 10px; color: var(--text3);
  letter-spacing: .1em; margin-bottom: 16px;
}
.why-card-title {
  font-family: var(--font-display);
  font-size: 17px; font-weight: 700;
  letter-spacing: -.01em; margin-bottom: 10px;
}
.why-card-desc { font-size: 12px; color: var(--text2); line-height: 1.75; }

/* ─── PRICING ─── */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 16px;
}
.price-card {
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 24px;
  background: var(--bg2);
  display: flex; flex-direction: column; gap: 14px;
  transition: border-color .25s, transform .25s;
  position: relative;
}
.price-card:hover { border-color: var(--line2); transform: translateY(-2px); }
.price-card.pop {
  border-color: rgba(200,247,74,.35);
  background: rgba(200,247,74,.04);
}
.price-card.pop:hover { border-color: rgba(200,247,74,.55); }

.price-tag-wrap { display: flex; align-items: center; justify-content: space-between; }
.price-tag {
  font-family: var(--font-mono);
  font-size: 9px; color: var(--text3);
  letter-spacing: .1em; text-transform: uppercase;
  border: 1px solid var(--line);
  padding: 3px 8px; border-radius: 20px;
}
.pop-badge {
  font-family: var(--font-mono);
  font-size: 9px; color: var(--bg);
  background: var(--accent);
  padding: 3px 8px; border-radius: 20px;
  letter-spacing: .06em;
}
.flash-badge {
  font-family: var(--font-mono);
  font-size: 9px; color: var(--accent);
  background: rgba(200,247,74,.1);
  border: 1px solid rgba(200,247,74,.3);
  padding: 3px 8px; border-radius: 20px;
  letter-spacing: .06em;
}

.price-plan {
  font-family: var(--font-display);
  font-size: 20px; font-weight: 800;
  letter-spacing: -.02em; line-height: 1.1;
}
.price-desc-text { font-size: 11px; color: var(--text3); }

.price-amount-wrap { display: flex; flex-direction: column; gap: 2px; }
.price-amount-main {
  font-family: var(--font-display);
  font-size: 30px; font-weight: 800;
  letter-spacing: -.03em; line-height: 1;
}
.price-amount-main .per {
  font-size: 12px; font-weight: 400;
  color: var(--text3); font-family: var(--font);
  letter-spacing: 0;
}
.price-amount-main.flash { color: var(--accent); }
.price-old-text { font-size: 11px; color: var(--text3); text-decoration: line-through; }

.price-feats { display: flex; flex-direction: column; gap: 8px; }
.price-feat-item {
  display: flex; align-items: center; gap: 8px;
  font-size: 12px; color: var(--text2);
}
.price-feat-item i { color: var(--accent); font-size: 10px; }

.price-cta-btn {
  display: block; text-align: center;
  padding: 12px;
  border-radius: var(--r);
  font-family: var(--font-display);
  font-size: 11px; font-weight: 700;
  letter-spacing: .04em; text-transform: uppercase;
  text-decoration: none;
  border: 1px solid var(--line2);
  color: var(--text2);
  background: none;
  transition: border-color .2s, color .2s, background .2s;
  margin-top: auto;
}
.price-cta-btn:hover { border-color: var(--text2); color: var(--text); background: rgba(255,255,255,.04); }
.price-cta-btn.primary {
  background: var(--accent); color: #0a0a08;
  border-color: var(--accent);
}
.price-cta-btn.primary:hover { background: #d8ff5a; border-color: #d8ff5a; }
.price-cta-btn.green {
  border-color: rgba(200,247,74,.4); color: var(--accent);
  background: rgba(200,247,74,.06);
}
.price-cta-btn.green:hover { background: rgba(200,247,74,.12); }

.jadibot-card {
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 24px;
  background: var(--bg2);
  display: flex; flex-direction: column; gap: 0;
}
.jadibot-title {
  font-family: var(--font-display);
  font-size: 14px; font-weight: 700;
  letter-spacing: -.01em; margin-bottom: 14px;
}
.jadibot-row {
  display: flex; align-items: center; justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid var(--line);
  font-size: 12px;
}
.jadibot-row:last-of-type { margin-bottom: 14px; }
.jadibot-price {
  font-family: var(--font-mono);
  font-size: 11px; color: var(--accent);
}
.jadibot-cta {
  display: block; text-align: center;
  padding: 11px;
  border: 1px solid rgba(200,247,74,.3);
  border-radius: var(--r);
  color: var(--accent);
  font-family: var(--font-display);
  font-size: 11px; font-weight: 700;
  letter-spacing: .04em; text-transform: uppercase;
  text-decoration: none;
  background: rgba(200,247,74,.05);
  transition: background .2s;
}
.jadibot-cta:hover { background: rgba(200,247,74,.12); }

.payment-row {
  margin-top: 32px;
  padding: 20px 24px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: var(--bg2);
  display: flex; flex-wrap: wrap; align-items: center; gap: 12px;
}
.payment-label-text {
  font-family: var(--font-mono);
  font-size: 10px; color: var(--text3);
  letter-spacing: .1em; text-transform: uppercase;
  margin-right: 4px;
}
.pay-chip {
  padding: 5px 12px;
  border: 1px solid var(--line2);
  border-radius: 20px;
  font-family: var(--font-mono);
  font-size: 10px; color: var(--text2);
  letter-spacing: .06em;
  cursor: pointer; text-decoration: none;
  transition: border-color .2s, color .2s;
  background: none;
}
.pay-chip:hover { border-color: var(--accent); color: var(--accent); }
.pay-chip.q { border-color: rgba(200,247,74,.3); color: var(--accent); background: rgba(200,247,74,.05); }

.drawer-group { display: flex; flex-direction: column; }
.drawer-parent {
  display: flex; align-items: center; justify-content: space-between;
  width: 100%;
}
.drawer-parent span { display: flex; align-items: center; gap: 12px; }
.drawer-chevron {
  font-size: 10px; color: var(--text3);
  transition: transform .25s, color .2s;
}
.drawer-group.open .drawer-chevron { transform: rotate(90deg); color: var(--accent); }
.drawer-sub {
  display: none;
  flex-direction: column; gap: 0;
  padding-left: 16px;
  border-left: 1px solid var(--line2);
  margin-left: 20px;
  margin-top: 2px;
  margin-bottom: 4px;
}
.drawer-group.open .drawer-sub { display: flex; }
.drawer-sub-link {
  display: flex; align-items: center; gap: 10px;
  padding: 9px 12px;
  border-radius: var(--r);
  color: var(--text3);
  font-size: 12px;
  text-decoration: none;
  transition: color .2s, background .2s;
}
.drawer-sub-link i { font-size: 7px; }
.drawer-sub-link:hover { color: var(--accent); background: rgba(200,247,74,.05); }

.cta-block {
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 60px 32px;
  text-align: center;
  background: var(--bg2);
  position: relative; overflow: hidden;
}
.cta-block::before {
  content: '';
  position: absolute; top: -80px; left: 50%; transform: translateX(-50%);
  width: 400px; height: 300px;
  background: radial-gradient(circle, rgba(200,247,74,.06) 0%, transparent 70%);
  pointer-events: none;
}
.cta-label {
  font-family: var(--font-mono);
  font-size: 10px; color: var(--text3);
  letter-spacing: .12em; text-transform: uppercase;
  margin-bottom: 16px;
}
.cta-title {
  font-family: var(--font-display);
  font-size: clamp(24px, 5vw, 40px);
  font-weight: 800; letter-spacing: -.03em;
  line-height: 1.1; margin-bottom: 14px;
}
.cta-sub { font-size: 13px; color: var(--text2); margin-bottom: 32px; font-weight: 300; }
.cta-btns { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; }

/* ─── FAQ ─── */
.faq-list { display: flex; flex-direction: column; gap: 1px; background: var(--line); border-radius: 10px; overflow: hidden; }
.faq-item { background: var(--bg2); }
.faq-btn {
  width: 100%; text-align: left;
  padding: 20px 24px;
  display: flex; align-items: center; justify-content: space-between; gap: 16px;
  cursor: pointer; border: none; background: none;
  color: var(--text);
  font-size: 13px; font-weight: 500;
  font-family: var(--font);
  transition: background .2s;
}
.faq-btn:hover { background: var(--bg3); }
.faq-icon { color: var(--text3); font-size: 11px; flex-shrink: 0; transition: transform .25s, color .2s; }
.faq-item.open .faq-icon { transform: rotate(45deg); color: var(--accent); }
.faq-body { display: none; padding: 0 24px 20px; }
.faq-item.open .faq-body { display: block; }
.faq-body p { font-size: 12px; color: var(--text2); line-height: 1.8; }

/* ─── BOTTOM CTA ─── */
.btm-section {
  padding: 80px 24px;
  text-align: center;
  border-top: 1px solid var(--line);
}
.btm-title {
  font-family: var(--font-display);
  font-size: clamp(32px, 7vw, 64px);
  font-weight: 800; letter-spacing: -.04em;
  line-height: 1.05; margin-bottom: 14px;
}
.btm-title .outline {
  color: transparent;
  -webkit-text-stroke: 1.5px rgba(200,247,74,.6);
}
.btm-sub { font-size: 13px; color: var(--text2); margin-bottom: 32px; font-weight: 300; }

/* ─── FOOTER ─── */
footer {
  padding: 24px;
  border-top: 1px solid var(--line);
  display: flex; align-items: center; justify-content: space-between;
  flex-wrap: wrap; gap: 12px;
}
.footer-brand {
  font-family: var(--font-display);
  font-size: 14px; font-weight: 700;
  letter-spacing: -.01em;
}
.footer-brand em { color: var(--accent); font-style: normal; }
.footer-copy { font-family: var(--font-mono); font-size: 10px; color: var(--text3); letter-spacing: .06em; }

/* ─── DIVIDER ─── */
.h-line { border: none; border-top: 1px solid var(--line); }

/* ─── ANIMATIONS ─── */
.reveal {
  opacity: 0; transform: translateY(22px);
  transition: opacity .6s ease, transform .6s ease;
}
.reveal.visible { opacity: 1; transform: translateY(0); }

@media (max-width: 600px) {
  .hero-stats { gap: 24px; }
  .topbar { padding: 0 16px; }
  .section { padding: 60px 16px; }
  .hero-section { padding: 100px 16px 60px; }
     }
