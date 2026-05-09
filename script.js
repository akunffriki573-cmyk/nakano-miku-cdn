/* ============================================
   NAKANO MIKU - MAIN JAVASCRIPT
   Version: 2.0
   ============================================ */

// Splash Screen
function initSplashScreen(){var e=document.getElementById("splashScreen"),t=document.getElementById("splashParticles");if(t){for(var s=0;s<30;s++){var i=document.createElement("div");i.classList.add("splash-particle"),i.style.left=100*Math.random()+"%",i.style.bottom=-20*Math.random()+"px";var a=3*Math.random()+1;i.style.width=a+"px",i.style.height=a+"px";var n=["#77A8A8","#9ECFCF","#C5E0E0","#5F8B8B","#EFF5F5"];i.style.background=n[Math.floor(Math.random()*n.length)],i.style.animationDelay=6*Math.random()+"s",i.style.animationDuration=(4*Math.random()+4)+"s",t.appendChild(i)}}window.addEventListener("load",function(){setTimeout(function(){e&&(e.classList.add("hidden"),setTimeout(function(){e.parentNode&&e.parentNode.removeChild(e)},600))},2500)})}

// Progress Bar
function initProgressBar(){window.addEventListener("scroll",function(){var e=document.documentElement,t=e.scrollTop,s=e.scrollHeight-e.clientHeight;document.getElementById("bar").style.width=t/s*100+"%"})}

// Counter Up
function initCountUp(){document.querySelectorAll(".countup").forEach(function(e){var t=parseInt(e.dataset.n),s=t/60,i=0,a=setInterval(function(){i=Math.min(i+s,t),e.textContent=Math.floor(i).toLocaleString("id"),i>=t&&clearInterval(a)},22)})}

// Reveal on Scroll
function initRevealOnScroll(){var e=new IntersectionObserver(function(t){t.forEach(function(t){t.isIntersecting&&(t.target.classList.add("on"),e.unobserve(t.target))})},{threshold:.1});document.querySelectorAll(".rv").forEach(function(t){e.observe(t)})}

// Live Counter
function initLiveCounter(){setInterval(function(){var e=document.getElementById("lc");if(e){var t=parseInt(e.textContent),s=Math.floor(5*Math.random())-2;e.textContent=Math.max(110,t+s)}},4e3)}

// Promo Sabtu
function cekPromoSabtu(){var e=new Date,t=new Date(e.getTime()+(420-e.getTimezoneOffset())*6e4),s=t.getDate(),i=t.getMonth()+1,a=t.getFullYear(),n=t.getHours(),o=25===s&&4===i&&2026===a&&n>=6&&n<20,r=document.getElementById("sabtu-promo"),l=document.getElementById("sabtu-sisa"),d=document.getElementById("nc-old-perm"),c=document.getElementById("nc-old-promo");if(o){r&&r.classList.add("aktif"),document.body.classList.add("sabtu-mode"),d&&(d.style.display="none"),c&&(c.style.display="block");var h=new Date(t);h.setHours(20,0,0,0);var m=h-t;if(m>0){var u=Math.floor(m/36e5),g=Math.floor(m%36e5/6e4),p=Math.floor(m%6e4/1e3);l&&(l.textContent=String(u).padStart(2,"0")+":"+String(g).padStart(2,"0")+":"+String(p).padStart(2,"0"))}}else r&&r.classList.remove("aktif"),document.body.classList.remove("sabtu-mode"),d&&(d.style.display=""),c&&(c.style.display="none"),l&&(l.textContent="--:--:--")}

// Menu
function openMenu(){document.getElementById("pn").classList.add("on"),document.getElementById("ov").classList.add("on"),document.body.style.overflow="hidden"}
function closeMenu(){document.getElementById("pn").classList.remove("on"),document.getElementById("ov").classList.remove("on"),document.body.style.overflow=""}

// QRIS Modal
function openQ(){document.getElementById("qm").classList.add("on"),document.body.style.overflow="hidden"}
function closeQ(){document.getElementById("qm").classList.remove("on"),document.body.style.overflow=""}

// FAQ
function toggleFaq(e){var t=e.nextElementSibling,s=t.classList.contains("open");document.querySelectorAll(".faq-body.open").forEach(function(e){e.classList.remove("open")}),document.querySelectorAll(".faq-btn.open").forEach(function(e){e.classList.remove("open")}),s||(t.classList.add("open"),e.classList.add("open"))}

// Swiper
function initSwiper(){"undefined"!=typeof Swiper&&new Swiper(".tSwiper",{slidesPerView:1,spaceBetween:12,pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:5e3,disableOnInteraction:!1},breakpoints:{600:{slidesPerView:2},960:{slidesPerView:3}}})}

// Keyboard
function initKeyboardShortcuts(){document.addEventListener("keydown",function(e){"Escape"===e.key&&(closeQ(),closeMenu())})}

// Year
function initYear(){var e=document.getElementById("yr");e&&(e.textContent=(new Date).getFullYear())}

// Modal Outside Click
function initModalOutsideClick(){document.getElementById("qm").addEventListener("click",function(e){e.target===this&&closeQ()})}

// Smooth Scroll
function initSmoothScroll(){document.querySelectorAll('a[href^="#"]').forEach(function(e){e.addEventListener("click",function(t){var s=this.getAttribute("href");if("#"!==s){var i=document.querySelector(s);i&&(t.preventDefault(),i.scrollIntoView({behavior:"smooth",block:"start"}))}})})}

// Init All
document.addEventListener("DOMContentLoaded",function(){initSplashScreen(),initProgressBar(),initCountUp(),initRevealOnScroll(),initLiveCounter(),initSwiper(),initKeyboardShortcuts(),initYear(),initModalOutsideClick(),initSmoothScroll(),cekPromoSabtu(),setInterval(cekPromoSabtu,1e3)});

// Exports
window.openMenu=openMenu,window.closeMenu=closeMenu,window.openQ=openQ,window.closeQ=closeQ,window.toggleFaq=toggleFaq;