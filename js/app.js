/* ================================================================
   VISHAKA PAARK — app.js
   Dynamic rendering from hotel.json
   Cheerze booking engine integration with live date/pricing
================================================================ */

let HOTEL = null;

/* ── BOOT ── */
async function boot() {
  try {
    const res  = await fetch('./data/hotel.json');
    HOTEL = await res.json();
    const page = document.body.dataset.page || 'home';
    renderNav(HOTEL.hotel);
    renderFooter(HOTEL.hotel);
    initWaFab(HOTEL.hotel);
    if (page === 'home')    renderHome();
    if (page === 'rooms')   renderRoomsPage();
    if (page === 'gallery') renderGalleryPage();
    if (page === 'contact') renderContactPage();
  } catch(e) { console.error('Boot failed:', e); }
}

/* ── LOGO SVG ── */
function logoSVG(w=30, h=34) {
  return `<svg width="${w}" height="${h}" viewBox="0 0 32 36" fill="none" aria-hidden="true">
    <path d="M16 2C16 2,10 8,10 16C10 20,12 23,16 24C20 23,22 20,22 16C22 8,16 2,16 2Z" fill="#896C3E" opacity="0.92"/>
    <path d="M16 4C16 4,6 10,5 18C4.5 22,7 26,16 28C25 26,27.5 22,27 18C26 10,16 4,16 4Z" fill="none" stroke="#896C3E" stroke-width="0.8" opacity="0.35"/>
    <path d="M16 24C16 24,6 20,4 14C3 10,5 7,9 8C12 9,14 14,16 24Z" fill="#896C3E" opacity="0.72"/>
    <path d="M16 24C16 24,26 20,28 14C29 10,27 7,23 8C20 9,18 14,16 24Z" fill="#896C3E" opacity="0.72"/>
    <line x1="16" y1="24" x2="16" y2="33" stroke="#896C3E" stroke-width="1.4" stroke-linecap="round"/>
    <path d="M11 33Q16 31,21 33" stroke="#896C3E" stroke-width="1.2" fill="none" stroke-linecap="round"/>
    <circle cx="16" cy="15" r="2.2" fill="#0F0B09"/>
  </svg>`;
}

/* ── NAV ── */
function renderNav(h) {
  const page = document.body.dataset.page || 'home';
  const links = [
    { href:'index.html',   label:'Home',      p:'home'    },
    { href:'rooms.html',   label:'Rooms',     p:'rooms'   },
    { href:'gallery.html', label:'Gallery',   p:'gallery' },
    { href:'contact.html', label:'Contact',   p:'contact' },
  ];
  document.getElementById('navbar').innerHTML = `
    <a href="index.html" class="nav-logo" aria-label="Vishaka Paark home">
      ${logoSVG()}
      <div class="logo-text">
        <span class="logo-name">Vishaka Paark</span>
        <span class="logo-sub">Coimbatore</span>
      </div>
    </a>
    <nav>
      <ul class="nav-links" role="list">
        ${links.map(l=>`<li><a href="${l.href}" class="${l.p===page?'active':''}">${l.label}</a></li>`).join('')}
      </ul>
    </nav>
    <div class="nav-right">
      <a href="tel:${h.phone_mobile}" class="nav-phone">
        <i class="ti ti-phone-call" aria-hidden="true"></i> ${h.phone_mobile}
      </a>
      <a href="#booking" class="btn btn-gold">Book Now</a>
    </div>`;
}

/* ── FOOTER ── */
function renderFooter(h) {
  const el = document.getElementById('footer');
  if (!el) return;
  el.innerHTML = `
    <div class="footer-body">
      <div class="footer-brand">
        <div class="footer-logo">${logoSVG(26,30)}<span class="footer-logo-name">Vishaka Paark</span></div>
        <p class="footer-tagline">Boutique hospitality in Saravanampatty — Coimbatore's IT corridor.</p>
        <div class="footer-social">
          <a href="${h.social.instagram}" class="soc-btn" aria-label="Instagram" target="_blank" rel="noopener"><i class="ti ti-brand-instagram" aria-hidden="true"></i></a>
          <a href="${h.social.facebook}"  class="soc-btn" aria-label="Facebook"  target="_blank" rel="noopener"><i class="ti ti-brand-facebook"  aria-hidden="true"></i></a>
          <a href="https://wa.me/${h.whatsapp}" class="soc-btn" aria-label="WhatsApp" target="_blank" rel="noopener"><i class="ti ti-brand-whatsapp" aria-hidden="true"></i></a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Navigate</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="rooms.html">Our Rooms</a></li>
          <li><a href="gallery.html">Gallery</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Rooms</h4>
        <ul>
          <li><a href="rooms.html#executive-double">Executive Double</a></li>
          <li><a href="rooms.html#executive-twin">Executive Twin</a></li>
          <li><a href="rooms.html#deluxe-triple">Deluxe Triple</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <ul>
          <li><a href="tel:${h.phone_landline}">${h.phone_landline}</a></li>
          <li><a href="tel:${h.phone_mobile}">${h.phone_mobile}</a></li>
          <li><a href="mailto:${h.email}">${h.email}</a></li>
          <li class="addr">${h.location}</li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Legal</h4>
        <ul>
          <li><a href="https://vishakapaark.com/privacy-policy" target="_blank">Privacy Policy</a></li>
          <li><a href="https://vishakapaark.com/terms-and-conditions/" target="_blank">Terms & Conditions</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span class="footer-copy">© ${new Date().getFullYear()} Vishaka Paark. All rights reserved.</span>
      <a href="https://www.tripadvisor.com" target="_blank" rel="noopener" class="tripadvisor-link">
        <i class="ti ti-star" aria-hidden="true"></i> Review us on TripAdvisor
      </a>
    </div>`;
}

/* ── WHATSAPP FAB ── */
function initWaFab(h) {
  const el = document.getElementById('wa-fab');
  if (el) el.href = `https://wa.me/${h.whatsapp}?text=Hi%2C%20I%20would%20like%20to%20book%20a%20room%20at%20Vishaka%20Paark`;
}

/* ─────────────────────────────────────────────────────────────
   HOME PAGE
───────────────────────────────────────────────────────────── */
function renderHome() {
  renderBookingBar('booking-bar', HOTEL.hotel);
  renderRibbon(HOTEL.hotel.stats);
  renderAbout(HOTEL.hotel);
  renderRoomCards('rooms-grid', HOTEL.rooms, true);
  renderFacilities('facilities-grid', HOTEL.facilities);
  renderGalleryGrid('gallery-grid', HOTEL.gallery.slice(0,5));
  renderTestimonials('testi-grid', HOTEL.testimonials);
  renderBookingWidget('booking-widget', HOTEL.hotel, HOTEL.rooms);
  renderCTA('cta-contact', HOTEL.hotel);
  initHeroBg();
  initLightbox();
}

/* ── BOOKING BAR ── */
function renderBookingBar(id, h) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = `
    <div class="bar-inner">
      <div class="bar-title"><i class="ti ti-calendar-event" aria-hidden="true"></i> Check Availability</div>
      <div style="display:flex;align-items:flex-end;gap:12px;flex-wrap:wrap">
        <div class="bar-field">
          <label for="ci">Check-in</label>
          <input type="date" id="ci" />
        </div>
        <div class="bar-sep" aria-hidden="true"></div>
        <div class="bar-field">
          <label for="co">Check-out</label>
          <input type="date" id="co" />
        </div>
        <div class="bar-sep" aria-hidden="true"></div>
        <div class="bar-field">
          <label for="guests">Guests</label>
          <select id="guests">
            <option>1 Adult</option>
            <option>2 Adults</option>
            <option>2 Adults + 1 Child</option>
            <option>3 Adults</option>
          </select>
        </div>
        <div class="bar-sep" aria-hidden="true"></div>
        <div class="bar-field">
          <label for="rtype">Room</label>
          <select id="rtype">
            <option value="">Any Room</option>
            <option value="executive-double">Executive Double</option>
            <option value="executive-twin">Executive Twin</option>
            <option value="deluxe-triple">Deluxe Triple</option>
          </select>
        </div>
        <div id="bar-nights-display"></div>
        <button class="btn btn-crimson bar-btn" onclick="searchRooms()">
          <i class="ti ti-search" aria-hidden="true"></i> Search Rooms
        </button>
      </div>
    </div>`;
  initDates();
}

/* ── DATE INIT ── */
function initDates() {
  const fmt = d => d.toISOString().split('T')[0];
  const t = new Date();
  const t1 = new Date(t); t1.setDate(t.getDate()+1);
  const t2 = new Date(t); t2.setDate(t.getDate()+2);
  const ci = document.getElementById('ci');
  const co = document.getElementById('co');
  if (ci) { ci.value=fmt(t1); ci.min=fmt(t1); }
  if (co) { co.value=fmt(t2); co.min=fmt(t2); }
  updateNights();
  if (ci) ci.addEventListener('change', () => {
    const d=new Date(ci.value); d.setDate(d.getDate()+1);
    if (co) { co.min=fmt(d); if(co.value<=ci.value) co.value=fmt(d); }
    updateNights(); updatePriceSummary();
  });
  if (co) co.addEventListener('change', () => { updateNights(); updatePriceSummary(); });
}

function updateNights() {
  const ci = document.getElementById('ci');
  const co = document.getElementById('co');
  const nd = document.getElementById('bar-nights-display');
  if (!ci||!co||!nd) return;
  const diff = (new Date(co.value)-new Date(ci.value))/(1000*60*60*24);
  nd.textContent = diff > 0 ? `${diff} night${diff>1?'s':''}` : '';
}

/* ── CHEERZE BOOKING ENGINE LINK ── */
function cheerzeURL(checkin, checkout) {
  const h = HOTEL.hotel;
  return `${h.cheerze_booking_base}?hotelId=${encodeURIComponent(h.cheerze_hotel_id)}&checkin=${checkin}&checkout=${checkout}`;
}

function searchRooms() {
  const ci = document.getElementById('ci')?.value;
  const co = document.getElementById('co')?.value;
  if (!ci||!co) return;
  window.open(cheerzeURL(ci, co), '_blank');
}

function bookRoom(checkin, checkout) {
  const ci = checkin || document.getElementById('ci')?.value;
  const co = checkout || document.getElementById('co')?.value;
  if (!ci||!co) { searchRooms(); return; }
  window.open(cheerzeURL(ci, co), '_blank');
}

/* ── RIBBON ── */
function renderRibbon(s) {
  const el = document.getElementById('ribbon');
  if (!el) return;
  const items = [
    {num:s.rooms,          lbl:'Premium Rooms'},
    {num:s.rating+'★',    lbl:'Guest Rating'},
    {num:s.amenities+'+', lbl:'Amenities'},
    {num:'24/7',           lbl:'Front Desk'},
    {num:'10%',            lbl:'Direct Discount'},
  ];
  el.innerHTML = `<div class="ribbon-inner">${
    items.map((it,i)=>`
      ${i?'<div class="ribbon-div"></div>':''}
      <div class="ribbon-item">
        <div class="ribbon-num">${it.num}</div>
        <div class="ribbon-lbl">${it.lbl}</div>
      </div>`).join('')
  }</div>`;
}

/* ── ABOUT ── */
function renderAbout(h) {
  const el = document.getElementById('about-content');
  if (!el) return;
  el.innerHTML = `
    <div class="eyebrow">Our Story</div>
    <h2>A Hotel That Feels<br>Like <em>Belonging</em></h2>
    <p class="lead">Built for the traveller who expects more — Vishaka Paark sits at the heart of Saravanampatty, Coimbatore's fastest-growing IT corridor. Modern comforts, genuine warmth, and a location that puts you exactly where you need to be.</p>
    <div class="about-pts">
      <div class="apt"><div class="apt-icon"><i class="ti ti-shield-check" aria-hidden="true"></i></div><div class="apt-text"><strong>24/7 Security</strong><span>CCTV-monitored premises</span></div></div>
      <div class="apt"><div class="apt-icon"><i class="ti ti-wifi" aria-hidden="true"></i></div><div class="apt-text"><strong>High-Speed Wifi</strong><span>Work seamlessly, always</span></div></div>
      <div class="apt"><div class="apt-icon"><i class="ti ti-coffee" aria-hidden="true"></i></div><div class="apt-text"><strong>Breakfast Included</strong><span>Complimentary every morning</span></div></div>
      <div class="apt"><div class="apt-icon"><i class="ti ti-car" aria-hidden="true"></i></div><div class="apt-text"><strong>Pickup & Drop</strong><span>Airport & railway transfers</span></div></div>
      <div class="apt"><div class="apt-icon"><i class="ti ti-clock-24" aria-hidden="true"></i></div><div class="apt-text"><strong>24hr Checkout</strong><span>Flexible, no pressure</span></div></div>
      <div class="apt"><div class="apt-icon"><i class="ti ti-map-pin" aria-hidden="true"></i></div><div class="apt-text"><strong>Prime Location</strong><span>Heart of IT corridor</span></div></div>
    </div>
    <a href="tel:${h.phone_mobile}" class="btn btn-crimson">Call to Book &rarr;</a>`;
}

/* ── ROOM CARDS ── */
function renderRoomCards(id, rooms, showBookBtn=true) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = rooms.map(r => `
    <article class="room-card" id="${r.id}">
      <div class="room-img-box">
        <img src="${r.image}" alt="${r.type} at Vishaka Paark" class="room-img" loading="lazy" />
        ${r.badge ? `<div class="room-pill pill-${r.badge_style}">${r.badge}</div>` : ''}
      </div>
      <div class="room-body">
        <div class="room-for">${r.for}</div>
        <div class="room-name">${r.type}</div>
        <div class="room-desc">${r.description}</div>
        <div class="room-tags">
          ${r.amenities.slice(0,4).map(a=>`<span class="rtag"><i class="ti ti-check" aria-hidden="true"></i>${a}</span>`).join('')}
        </div>
        <div class="room-foot">
          <div>
            <div class="price-row">
              <span class="price-main">₹${r.price.toLocaleString('en-IN')}</span>
              <span class="price-night">/ night</span>
              <span class="price-off">${r.discount_pct}% off</span>
            </div>
            <div class="price-was">was ₹${r.price_original.toLocaleString('en-IN')}</div>
          </div>
          ${showBookBtn ? `<button class="btn btn-dark btn-sm" onclick="bookRoom()">Book Now</button>` : ''}
        </div>
      </div>
    </article>`).join('');
}

/* ── FACILITIES (interactive) ── */
function renderFacilities(id, facilities) {
  const el = document.getElementById(id);
  if (!el) return;
  const cats = ['all','safety','comfort','tech','service','dining','location'];
  const catLabels = {all:'All',safety:'Safety',comfort:'Comfort',tech:'Tech',service:'Service',dining:'Dining',location:'Location'};

  const filterEl = document.getElementById('facilities-filter');
  if (filterEl) {
    filterEl.innerHTML = cats.map(c=>`
      <button class="filt-btn ${c==='all'?'active':''}" onclick="filterFacilities('${c}')" data-cat="${c}">${catLabels[c]}</button>`
    ).join('');
  }

  el.innerHTML = facilities.map(f => `
    <div class="fac-card" data-cat="${f.category}" id="fac-${f.id}" onclick="toggleFac('${f.id}')">
      <div class="fac-front">
        <div class="fac-icon-ring"><i class="ti ${f.icon}" aria-hidden="true"></i></div>
        <div class="fac-name">${f.name}</div>
        <div class="fac-short">${f.short}</div>
      </div>
      <div class="fac-expand">
        <p>${f.desc}</p>
        <span class="fac-tag">Tap to collapse</span>
      </div>
    </div>`).join('');
}

function toggleFac(id) {
  const card = document.getElementById('fac-'+id);
  if (!card) return;
  const wasExpanded = card.classList.contains('expanded');
  document.querySelectorAll('.fac-card.expanded').forEach(c=>c.classList.remove('expanded'));
  if (!wasExpanded) card.classList.add('expanded');
}

function filterFacilities(cat) {
  document.querySelectorAll('.filt-btn').forEach(b=>{
    b.classList.toggle('active', b.dataset.cat===cat);
  });
  document.querySelectorAll('.fac-card').forEach(c=>{
    const match = cat==='all' || c.dataset.cat===cat;
    c.classList.toggle('hidden', !match);
    if (!match) c.classList.remove('expanded');
  });
}

/* ── GALLERY GRID ── */
function renderGalleryGrid(id, imgs) {
  const el = document.getElementById(id);
  if (!el) return;
  const items = imgs.map((g,i)=>`
    <div class="gal-item" data-idx="${i}" onclick="openLightbox(${i})" role="button" tabindex="0" aria-label="View ${g.alt}">
      <img src="${g.src}" alt="${g.alt}" loading="lazy" />
      <div class="gal-overlay"><i class="ti ti-zoom-in" aria-hidden="true"></i></div>
    </div>`).join('');
  el.innerHTML = items + `
    <div class="gal-item gal-more" onclick="window.location.href='gallery.html'" role="button" tabindex="0" aria-label="View all photos">
      <i class="ti ti-photo" aria-hidden="true"></i>
      <span>View All Photos</span>
    </div>`;
}

/* ── TESTIMONIALS ── */
function renderTestimonials(id, list) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = list.map(t=>`
    <div class="testi-card">
      <div class="testi-stars">${'★'.repeat(t.stars)}${'☆'.repeat(5-t.stars)}</div>
      <p class="testi-quote">"${t.text}"</p>
      <div class="testi-author">
        <div class="testi-av">${t.initials}</div>
        <div>
          <div class="testi-name">${t.name}</div>
          <div class="testi-from">${t.from} · ${t.type}</div>
        </div>
      </div>
    </div>`).join('');
}

/* ── BOOKING WIDGET (Cheerze integrated) ── */
function renderBookingWidget(id, h, rooms) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = `
    <div class="bw-title">Reserve Your Room</div>
    <p class="bw-sub">Book direct — 10% off, instant confirmation via Cheerze</p>
    <div class="bw-fields">
      <div class="bw-row">
        <div class="bw-field">
          <label for="bw-ci">Check-in date</label>
          <input type="date" id="bw-ci" />
        </div>
        <div class="bw-field">
          <label for="bw-co">Check-out date</label>
          <input type="date" id="bw-co" />
        </div>
      </div>
      <div class="bw-row">
        <div class="bw-field">
          <label for="bw-guests">Guests</label>
          <select id="bw-guests">
            <option>1 Adult</option>
            <option>2 Adults</option>
            <option>2 Adults + 1 Child</option>
            <option>3 Adults</option>
          </select>
        </div>
        <div class="bw-field">
          <label for="bw-room">Room type</label>
          <select id="bw-room" onchange="updatePriceSummary()">
            <option value="">Select room…</option>
            ${rooms.map(r=>`<option value="${r.id}" data-price="${r.price}">${r.type} — ₹${r.price.toLocaleString('en-IN')}/night</option>`).join('')}
          </select>
        </div>
      </div>
    </div>
    <div class="bw-price-summary" id="bw-summary">
      <div class="bw-price-line"><span>Room rate</span><span id="bw-rate">—</span></div>
      <div class="bw-price-line"><span>Nights</span><span id="bw-nights-count">—</span></div>
      <div class="bw-price-line" style="color:#5a7a3a"><span>Direct discount (10%)</span><span id="bw-discount">—</span></div>
      <div class="bw-price-total"><span>Total estimate</span><span id="bw-total">—</span></div>
    </div>
    <button class="btn btn-crimson btn-lg" style="width:100%;justify-content:center" onclick="proceedCheerze()">
      <i class="ti ti-calendar-check" aria-hidden="true"></i> Check Availability on Cheerze
    </button>
    <div class="bw-direct-note">
      <i class="ti ti-shield-check" aria-hidden="true"></i>
      Secure booking · Powered by Cheerze · Best rate guaranteed direct
    </div>`;

  initWidgetDates();
}

function initWidgetDates() {
  const fmt = d => d.toISOString().split('T')[0];
  const t=new Date();
  const t1=new Date(t); t1.setDate(t.getDate()+1);
  const t2=new Date(t); t2.setDate(t.getDate()+2);
  const ci=document.getElementById('bw-ci');
  const co=document.getElementById('bw-co');
  if(ci){ci.value=fmt(t1);ci.min=fmt(t1);}
  if(co){co.value=fmt(t2);co.min=fmt(t2);}
  if(ci) ci.addEventListener('change',()=>{
    const d=new Date(ci.value);d.setDate(d.getDate()+1);
    if(co){co.min=fmt(d);if(co.value<=ci.value)co.value=fmt(d);}
    updatePriceSummary();
  });
  if(co) co.addEventListener('change',updatePriceSummary);
}

function updatePriceSummary() {
  const ci   = document.getElementById('bw-ci')?.value || document.getElementById('ci')?.value;
  const co   = document.getElementById('bw-co')?.value || document.getElementById('co')?.value;
  const rsel = document.getElementById('bw-room');
  const sum  = document.getElementById('bw-summary');
  if (!ci||!co||!rsel||!sum) return;
  const nights = Math.round((new Date(co)-new Date(ci))/(1000*60*60*24));
  const price  = parseInt(rsel.selectedOptions[0]?.dataset.price||0);
  if (!nights||nights<1||!price) { sum.classList.remove('show'); return; }
  const total    = price * nights;
  const discount = Math.round(total * 0.10);
  const final    = total - discount;
  document.getElementById('bw-rate').textContent          = `₹${price.toLocaleString('en-IN')}/night`;
  document.getElementById('bw-nights-count').textContent  = `${nights} night${nights>1?'s':''}`;
  document.getElementById('bw-discount').textContent      = `−₹${discount.toLocaleString('en-IN')}`;
  document.getElementById('bw-total').textContent         = `₹${final.toLocaleString('en-IN')}`;
  sum.classList.add('show');
}

function proceedCheerze() {
  const ci = document.getElementById('bw-ci')?.value || document.getElementById('ci')?.value;
  const co = document.getElementById('bw-co')?.value || document.getElementById('co')?.value;
  if (!ci||!co) { alert('Please select check-in and check-out dates.'); return; }
  window.open(cheerzeURL(ci, co), '_blank');
}

/* ── CTA ── */
function renderCTA(id, h) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = `
    <div class="cta-row"><i class="ti ti-phone-call" aria-hidden="true"></i>
      <a href="tel:${h.phone_landline}">${h.phone_landline}</a> &nbsp;/&nbsp;
      <a href="tel:${h.phone_mobile}">${h.phone_mobile}</a>
    </div>
    <div class="cta-row"><i class="ti ti-mail" aria-hidden="true"></i>
      <a href="mailto:${h.email}">${h.email}</a>
    </div>
    <div class="cta-row"><i class="ti ti-map-pin" aria-hidden="true"></i>
      <span>${h.location}</span>
    </div>
    <div style="margin-top:10px;display:flex;gap:10px;flex-wrap:wrap">
      <a href="https://wa.me/${h.whatsapp}?text=Hi%2C+I+want+to+book+a+room+at+Vishaka+Paark"
         target="_blank" rel="noopener" class="btn btn-white btn-lg">
        <i class="ti ti-brand-whatsapp" aria-hidden="true"></i> WhatsApp Us
      </a>
      <button class="btn btn-outline btn-lg" onclick="proceedCheerze()">
        <i class="ti ti-calendar-check" aria-hidden="true"></i> Book Online
      </button>
    </div>`;
}

/* ── HERO BG ── */
function initHeroBg() {
  const bg = document.querySelector('.hero-bg');
  if (bg) setTimeout(()=>bg.classList.add('loaded'), 80);
}

/* ── LIGHTBOX ── */
let lbImgs=[], lbIdx=0;
function initLightbox() {
  lbImgs = HOTEL.gallery.map(g=>({src:g.src,alt:g.alt}));
}
function openLightbox(idx) {
  lbIdx = idx;
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.querySelector('img').src = lbImgs[lbIdx].src;
  lb.querySelector('img').alt = lbImgs[lbIdx].alt;
  lb.classList.add('open');
}
function closeLightbox() {
  document.getElementById('lightbox')?.classList.remove('open');
}
function lbNav(dir) {
  lbIdx = (lbIdx+dir+lbImgs.length)%lbImgs.length;
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.querySelector('img').src = lbImgs[lbIdx].src;
  lb.querySelector('img').alt = lbImgs[lbIdx].alt;
}

/* ── INNER PAGES ── */
function renderRoomsPage() {
  renderBookingBar('booking-bar', HOTEL.hotel);
  renderRoomCards('rooms-grid', HOTEL.rooms, true);
  renderFacilities('facilities-grid', HOTEL.facilities);
  renderBookingWidget('booking-widget', HOTEL.hotel, HOTEL.rooms);
  initDates();
  initWidgetDates();
}

function renderGalleryPage() {
  const el = document.getElementById('gallery-full');
  if (!el) return;
  initLightbox();
  el.innerHTML = HOTEL.gallery.map((g,i)=>`
    <div class="gal-item" onclick="openLightbox(${i})" role="button" tabindex="0" aria-label="View ${g.alt}">
      <img src="${g.src}" alt="${g.alt}" loading="lazy" />
      <div class="gal-overlay"><i class="ti ti-zoom-in" aria-hidden="true"></i></div>
    </div>`).join('');
}

function renderContactPage() {
  renderCTA('cta-contact-full', HOTEL.hotel);
  const mapEl = document.getElementById('map-frame');
  if (mapEl) mapEl.src = HOTEL.hotel.maps_embed;
}

document.addEventListener('DOMContentLoaded', boot);
