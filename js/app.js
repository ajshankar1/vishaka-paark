/* ================================================================
   VISHAKA PAARK — app.js  (Self-contained, no fetch needed)
   All data embedded directly — works on GitHub Pages perfectly
================================================================ */

const HOTEL = {
  hotel: {
    name: "Vishaka Paark",
    tagline: "Where Every Detail Speaks of Care",
    location: "Thudiyalur Road, Saravanampatty, Coimbatore – 641 035",
    phone_landline: "0422 4695952",
    phone_mobile: "+91 90909 27979",
    whatsapp: "919090927979",
    email: "hotelvishakapaark@gmail.com",
    maps_embed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3915.453494330426!2d76.99795197504629!3d11.079539889088212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDA0JzQ2LjMiTiA3N8KwMDAnMDEuOSJF!5e0!3m2!1sen!2sin!4v1757509116775!5m2!1sen!2sin",
    cheerze_hotel_id: "41zCeLBoB8+H6~z6Ej+sDiqeTlZraDAn6WHZSg2lO8k-",
    cheerze_booking_base: "https://secure.cheerzeconnect.com/Bookings/engine.html",
    social: {
      instagram: "https://www.instagram.com/_hotel_vishaka_paark_",
      facebook: "https://www.facebook.com/share/1Gbzoj2aPk/"
    },
    stats: { rooms: 24, rating: 4.7, amenities: 16, years: 3 }
  },
  rooms: [
    {
      id: "executive-double",
      type: "Executive Double",
      for: "Solo & Couples",
      badge: "Best Seller",
      badge_style: "crimson",
      description: "A plush king-size bed with premium linen, smart TV, climate-control AC, and a private attached bathroom. Designed for the solo business traveller or a couple seeking comfort.",
      price: 2740, price_original: 3045, discount_pct: 10,
      image: "https://vishakapaark.com/wp-content/uploads/2025/09/rdp_room1.png",
      amenities: ["King Size Bed", "Smart TV", "Breakfast", "AC", "Free Wifi", "Coffee Maker"]
    },
    {
      id: "executive-twin",
      type: "Executive Twin",
      for: "Friends & Colleagues",
      badge: null, badge_style: null,
      description: "Two separate premium beds ensuring privacy and independence. Perfect for business colleagues or friends travelling together who want their own space.",
      price: 3058, price_original: 3398, discount_pct: 10,
      image: "https://vishakapaark.com/wp-content/uploads/2025/09/rdp_room2.png",
      amenities: ["Twin Beds", "Smart TV", "Breakfast", "AC", "Free Wifi", "Coffee Maker"]
    },
    {
      id: "deluxe-triple",
      type: "Deluxe Triple",
      for: "Families & Groups",
      badge: "Family Pick",
      badge_style: "gold",
      description: "Spacious layout with a king bed plus a single bed. Extra room to spread out and relax — the best choice for families or groups of three.",
      price: 4222, price_original: 4691, discount_pct: 10,
      image: "https://vishakapaark.com/wp-content/uploads/2025/09/rdp_room3.png",
      amenities: ["King + Single Bed", "Smart TV", "Breakfast", "AC", "Free Wifi", "Coffee Maker"]
    }
  ],
  facilities: [
    { id:"security",  icon:"ti-shield-check",   name:"24/7 Security & CCTV",     short:"Always watching",         desc:"HD CCTV cameras cover all corridors and entry points — monitored every hour of every day by trained staff.", category:"safety" },
    { id:"frontdesk", icon:"ti-building-store",  name:"24×7 Front Desk",          short:"Always here for you",      desc:"Our front desk staff are available round the clock — for check-ins at 3am, local tips at midnight, or anything in between.", category:"service" },
    { id:"power",     icon:"ti-bolt",            name:"24hr Power Backup",        short:"Zero outages, ever",       desc:"Full generator backup ensures your room stays powered, air-conditioned and connected — no matter what the grid does.", category:"comfort" },
    { id:"water",     icon:"ti-droplet",         name:"Hot & Cold Water",         short:"Perfect every time",       desc:"Instant hot water available at any hour. No waiting, no cold surprises — a perfect shower every single time.", category:"comfort" },
    { id:"bed",       icon:"ti-bed",             name:"King Size Bed",            short:"Sleep like royalty",       desc:"Executive-grade mattresses with plush duvets, crisp white linen, and the signature crimson throw accent unique to Vishaka Paark.", category:"comfort" },
    { id:"wifi",      icon:"ti-wifi",            name:"High-Speed Wifi",          short:"Fibre-grade speed",        desc:"High-bandwidth wifi throughout — fast enough for video calls, 4K streaming and remote work without interruption.", category:"tech" },
    { id:"breakfast", icon:"ti-coffee",          name:"Complimentary Breakfast",  short:"Start every day right",    desc:"A fresh, wholesome breakfast included with every room — served every morning to fuel your day.", category:"dining" },
    { id:"transfer",  icon:"ti-car",             name:"Pickup & Drop",            short:"Door-to-door transfer",    desc:"Convenient airport and railway station transfers arranged on request. Arrive and depart with zero stress.", category:"service" },
    { id:"parking",   icon:"ti-parking",         name:"Parking Facilities",       short:"Secure on-site parking",  desc:"Dedicated, CCTV-monitored parking for every guest's vehicle — included in your stay at no extra charge.", category:"service" },
    { id:"rowater",   icon:"ti-glass",           name:"Safe RO Drinking Water",   short:"Pure water, always",       desc:"Filtered RO-purified drinking water in every room. Safe, clean and refreshing — no bottles needed.", category:"comfort" },
    { id:"checkout",  icon:"ti-clock-24",        name:"24hr Flexible Checkout",   short:"Leave on your schedule",  desc:"Truly flexible 24-hour checkout — no pressure, no extra fee. A rare and genuine differentiator.", category:"service" },
    { id:"tv",        icon:"ti-device-tv",       name:"In-Room Entertainment",    short:"Your personal screen",     desc:"Wall-mounted smart TV in every room with streaming apps, news and sports — your entertainment, your way.", category:"tech" },
    { id:"location",  icon:"ti-map-pin",         name:"Prime Location",           short:"Heart of IT corridor",     desc:"On Thudiyalur Road, Saravanampatty — walking distance from major IT campuses, perfectly connected to Coimbatore city.", category:"location" },
    { id:"bar",       icon:"ti-bottle",          name:"Attached Bar",             short:"Unwind after your day",    desc:"An in-house bar with a curated selection of drinks — the ideal way to decompress after a long day.", category:"dining" },
    { id:"coffee",    icon:"ti-cup",             name:"Coffee Maker",             short:"Brew anytime",             desc:"A personal coffee maker in every room — enjoy a fresh cup at 6am or midnight, no room service needed.", category:"tech" },
    { id:"lock",      icon:"ti-lock",            name:"Godrej Smart Lock",        short:"Electronic keycard entry", desc:"Every room uses a Godrej electronic smart lock — tamper-proof and far more secure than a traditional key.", category:"safety" }
  ],
  testimonials: [
    { initials:"RK", name:"Rajesh Kumar",  from:"Chennai",    type:"Business Stay", stars:5, text:"The room was immaculate. Loved the wooden headboard with that warm backlight — it made the whole space feel premium. Staff were genuinely kind and the checkout was completely flexible." },
    { initials:"PM", name:"Priya Mohan",   from:"Bangalore",  type:"Family Trip",   stars:5, text:"Came with my family and booked the Deluxe Triple. Kids had space to play, breakfast was proper and fresh, and the price was very reasonable compared to other hotels nearby." },
    { initials:"SA", name:"Suresh Anand",  from:"Hyderabad",  type:"Work Trip",     stars:4, text:"Location is unbeatable if you're working in the IT corridor. Fast Wi-Fi, comfortable beds, smooth check-in. Will definitely book again on my next trip to Coimbatore." },
    { initials:"DV", name:"Divya Venkat",  from:"Coimbatore", type:"Weekend Stay",  stars:5, text:"Staycation done right. The bar is a bonus I did not expect. Clean rooms, great breakfast, and the staff remembered my name by day two. Felt like a boutique experience." }
  ],
  gallery: [
    { src:"https://vishakapaark.com/wp-content/uploads/2025/09/gall-1.png",    alt:"Hotel lobby and reception" },
    { src:"https://vishakapaark.com/wp-content/uploads/2025/09/gall-2.png",    alt:"Room amenities" },
    { src:"https://vishakapaark.com/wp-content/uploads/2025/09/gall-3.png",    alt:"Hotel facilities" },
    { src:"https://vishakapaark.com/wp-content/uploads/2025/09/gall-4.png",    alt:"Lounge area" },
    { src:"https://vishakapaark.com/wp-content/uploads/2025/09/rdp_room1.png", alt:"Executive Double Room" },
    { src:"https://vishakapaark.com/wp-content/uploads/2025/09/rdp_room2.png", alt:"Executive Twin Room" },
    { src:"https://vishakapaark.com/wp-content/uploads/2025/09/rdp_room3.png", alt:"Deluxe Triple Room" },
    { src:"https://vishakapaark.com/wp-content/uploads/2025/09/about-img.png", alt:"Vishaka Paark Lobby" }
  ]
};

/* ── LOGO IMAGE (real logo from vishakapaark.com) ── */
function logoSVG(w=48,h=48){
  return `<img src="https://vishakapaark.com/wp-content/uploads/2025/09/logo.png"
    alt="Vishaka Paark" height="${h}"
    style="height:${h}px;width:auto;object-fit:contain;display:block;"
    onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
  /><span style="display:none;font-family:'Cormorant Garamond',serif;font-size:20px;font-weight:700;color:#896C3E;letter-spacing:0.03em">VP</span>`;
}

/* ── CHEERZE URL ── */
function cheerzeURL(checkin,checkout){
  const h=HOTEL.hotel;
  return `${h.cheerze_booking_base}?hotelId=${encodeURIComponent(h.cheerze_hotel_id)}&checkin=${checkin}&checkout=${checkout}`;
}
function searchRooms(){
  const ci=document.getElementById('ci')?.value;
  const co=document.getElementById('co')?.value;
  if(!ci||!co)return;
  window.open(cheerzeURL(ci,co),'_blank');
}
function bookRoom(){
  const ci=document.getElementById('ci')?.value||document.getElementById('bw-ci')?.value;
  const co=document.getElementById('co')?.value||document.getElementById('bw-co')?.value;
  const fmt=d=>{const t=new Date();t.setDate(t.getDate()+1);return t.toISOString().split('T')[0];};
  const c=ci||fmt();const o=co||fmt();
  window.open(cheerzeURL(c,o),'_blank');
}
function proceedCheerze(){
  const ci=document.getElementById('bw-ci')?.value||document.getElementById('ci')?.value;
  const co=document.getElementById('bw-co')?.value||document.getElementById('co')?.value;
  if(!ci||!co){alert('Please select check-in and check-out dates.');return;}
  window.open(cheerzeURL(ci,co),'_blank');
}

/* ── DATE HELPERS ── */
function fmt(d){return d.toISOString().split('T')[0];}
function initDates(ciId='ci',coId='co'){
  const t=new Date();
  const t1=new Date(t);t1.setDate(t.getDate()+1);
  const t2=new Date(t);t2.setDate(t.getDate()+2);
  const ci=document.getElementById(ciId);
  const co=document.getElementById(coId);
  if(ci){ci.value=fmt(t1);ci.min=fmt(t1);}
  if(co){co.value=fmt(t2);co.min=fmt(t2);}
  if(ci)ci.addEventListener('change',()=>{
    const d=new Date(ci.value);d.setDate(d.getDate()+1);
    if(co){co.min=fmt(d);if(co.value<=ci.value)co.value=fmt(d);}
    updateNights();updatePriceSummary();
  });
  if(co)co.addEventListener('change',()=>{updateNights();updatePriceSummary();});
}
function updateNights(){
  const ci=document.getElementById('ci');const co=document.getElementById('co');
  const nd=document.getElementById('bar-nights');
  if(!ci||!co||!nd)return;
  const diff=Math.round((new Date(co.value)-new Date(ci.value))/(1000*60*60*24));
  nd.textContent=diff>0?`${diff} night${diff>1?'s':''}`:'';
}
function updatePriceSummary(){
  const ci=document.getElementById('bw-ci')?.value||document.getElementById('ci')?.value;
  const co=document.getElementById('bw-co')?.value||document.getElementById('co')?.value;
  const rsel=document.getElementById('bw-room');
  const sum=document.getElementById('bw-summary');
  if(!ci||!co||!rsel||!sum)return;
  const nights=Math.round((new Date(co)-new Date(ci))/(1000*60*60*24));
  const price=parseInt(rsel.selectedOptions[0]?.dataset.price||0);
  if(!nights||nights<1||!price){sum.classList.remove('show');return;}
  const total=price*nights;
  const discount=Math.round(total*0.10);
  const final=total-discount;
  document.getElementById('bw-rate').textContent=`₹${price.toLocaleString('en-IN')}/night`;
  document.getElementById('bw-nights-count').textContent=`${nights} night${nights>1?'s':''}`;
  document.getElementById('bw-discount').textContent=`−₹${discount.toLocaleString('en-IN')}`;
  document.getElementById('bw-total').textContent=`₹${final.toLocaleString('en-IN')}`;
  sum.classList.add('show');
}

/* ── NAV ── */
function renderNav(){
  const h=HOTEL.hotel;
  const page=document.body.dataset.page||'home';
  const base=page==='home'?'':'';
  const links=[
    {href:'index.html',   label:'Home',    p:'home'},
    {href:'rooms.html',   label:'Rooms',   p:'rooms'},
    {href:'gallery.html', label:'Gallery', p:'gallery'},
    {href:'contact.html', label:'Contact', p:'contact'},
  ];
  const el=document.getElementById('navbar');
  if(!el)return;
  el.innerHTML=`
    <a href="index.html" class="nav-logo" aria-label="Vishaka Paark home">
      <img src="https://vishakapaark.com/wp-content/uploads/2025/09/logo.png"
        alt="Vishaka Paark" class="nav-logo-img"
        onerror="this.style.display='none';this.insertAdjacentHTML('afterend','<span style=\'font-family:Cormorant Garamond,serif;font-size:20px;font-weight:700;color:#896C3E;letter-spacing:0.02em\'>Vishaka Paark</span>')"
      />
    </a>
    <div class="nav-right-group">
      <nav aria-label="Main navigation">
        <ul class="nav-links" role="list">
          ${links.map(l=>`<li><a href="${l.href}" class="${l.p===page?'active':''}">${l.label}</a></li>`).join('')}
        </ul>
      </nav>
      <div class="nav-right">
        <a href="tel:${h.phone_mobile}" class="nav-phone">
          <i class="ti ti-phone-call" aria-hidden="true"></i>
          <span>${h.phone_mobile}</span>
        </a>
        <a href="#booking" class="btn btn-gold">Book Now</a>
      </div>
    </div>`;
}

/* ── FOOTER ── */
function renderFooter(){
  const h=HOTEL.hotel;
  const el=document.getElementById('footer');
  if(!el)return;
  el.innerHTML=`
    <div class="footer-body">
      <div class="footer-brand">
        <div class="footer-logo">
        <img src="https://vishakapaark.com/wp-content/uploads/2025/09/logo.png" alt="Vishaka Paark" style="height:40px;width:auto;filter:brightness(0) saturate(100%) invert(48%) sepia(45%) saturate(400%) hue-rotate(5deg) brightness(90%)" onerror="this.style.display='none'"/>
        <span class="footer-logo-name">Vishaka Paark</span>
      </div>
        <p class="footer-tagline">Boutique hospitality in Saravanampatty — Coimbatore's IT corridor.</p>
        <div class="footer-social">
          <a href="${h.social.instagram}" class="soc-btn" aria-label="Instagram" target="_blank" rel="noopener"><i class="ti ti-brand-instagram" aria-hidden="true"></i></a>
          <a href="${h.social.facebook}"  class="soc-btn" aria-label="Facebook"  target="_blank" rel="noopener"><i class="ti ti-brand-facebook"  aria-hidden="true"></i></a>
          <a href="https://wa.me/${h.whatsapp}" class="soc-btn" aria-label="WhatsApp" target="_blank" rel="noopener"><i class="ti ti-brand-whatsapp" aria-hidden="true"></i></a>
        </div>
      </div>
      <div class="footer-col"><h4>Navigate</h4><ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="rooms.html">Our Rooms</a></li>
        <li><a href="gallery.html">Gallery</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul></div>
      <div class="footer-col"><h4>Rooms</h4><ul>
        <li><a href="rooms.html#executive-double">Executive Double</a></li>
        <li><a href="rooms.html#executive-twin">Executive Twin</a></li>
        <li><a href="rooms.html#deluxe-triple">Deluxe Triple</a></li>
      </ul></div>
      <div class="footer-col"><h4>Contact</h4><ul>
        <li><a href="tel:${h.phone_landline}">${h.phone_landline}</a></li>
        <li><a href="tel:${h.phone_mobile}">${h.phone_mobile}</a></li>
        <li><a href="mailto:${h.email}">${h.email}</a></li>
        <li class="addr">${h.location}</li>
      </ul></div>
      <div class="footer-col"><h4>Legal</h4><ul>
        <li><a href="https://vishakapaark.com/privacy-policy" target="_blank">Privacy Policy</a></li>
        <li><a href="https://vishakapaark.com/terms-and-conditions/" target="_blank">Terms & Conditions</a></li>
      </ul></div>
    </div>
    <div class="footer-bottom">
      <span class="footer-copy">© ${new Date().getFullYear()} Vishaka Paark. All rights reserved.</span>
      <a href="https://www.tripadvisor.com" target="_blank" rel="noopener" class="tripadvisor-link">
        <i class="ti ti-star" aria-hidden="true"></i> Review us on TripAdvisor
      </a>
    </div>`;
}

/* ── WA FAB ── */
function initWaFab(){
  const el=document.getElementById('wa-fab');
  if(el)el.href=`https://wa.me/${HOTEL.hotel.whatsapp}?text=Hi%2C%20I%20would%20like%20to%20book%20a%20room%20at%20Vishaka%20Paark`;
}

/* ── BOOKING BAR ── */
function renderBookingBar(id){
  const el=document.getElementById(id);
  if(!el)return;
  el.innerHTML=`<div class="bar-inner">
    <div class="bar-title"><i class="ti ti-calendar-event" aria-hidden="true"></i> Check Availability</div>
    <div style="display:flex;align-items:flex-end;gap:12px;flex-wrap:wrap">
      <div class="bar-field"><label for="ci">Check-in</label><input type="date" id="ci"/></div>
      <div class="bar-sep"></div>
      <div class="bar-field"><label for="co">Check-out</label><input type="date" id="co"/></div>
      <div class="bar-sep"></div>
      <div class="bar-field"><label for="guests">Guests</label>
        <select id="guests"><option>1 Adult</option><option>2 Adults</option><option>2 Adults + 1 Child</option><option>3 Adults</option></select>
      </div>
      <div class="bar-sep"></div>
      <div class="bar-field"><label for="rtype">Room</label>
        <select id="rtype"><option value="">Any Room</option>
          ${HOTEL.rooms.map(r=>`<option value="${r.id}">${r.type}</option>`).join('')}
        </select>
      </div>
      <span id="bar-nights" style="font-size:11px;color:#896C3E;padding-bottom:10px;white-space:nowrap"></span>
      <button class="btn btn-crimson bar-btn" onclick="searchRooms()">
        <i class="ti ti-search" aria-hidden="true"></i> Search Rooms
      </button>
    </div>
  </div>`;
  initDates('ci','co');
}

/* ── RIBBON ── */
function renderRibbon(){
  const el=document.getElementById('ribbon');
  if(!el)return;
  const s=HOTEL.hotel.stats;
  const items=[
    {num:s.rooms,       lbl:'Premium Rooms'},
    {num:s.rating+'★', lbl:'Guest Rating'},
    {num:'16+',         lbl:'Amenities'},
    {num:'24/7',        lbl:'Front Desk'},
    {num:'10%',         lbl:'Direct Discount'},
  ];
  el.innerHTML=`<div class="ribbon-inner">${items.map((it,i)=>`
    ${i?'<div class="ribbon-div"></div>':''}
    <div class="ribbon-item"><div class="ribbon-num">${it.num}</div><div class="ribbon-lbl">${it.lbl}</div></div>`).join('')}</div>`;
}

/* ── ABOUT ── */
function renderAbout(){
  const el=document.getElementById('about-content');
  if(!el)return;
  const h=HOTEL.hotel;
  el.innerHTML=`
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

/* ── ROOMS ── */
function renderRoomCards(id,showBook=true){
  const el=document.getElementById(id);
  if(!el)return;
  el.innerHTML=HOTEL.rooms.map(r=>`
    <article class="room-card" id="${r.id}">
      <div class="room-img-box">
        <img src="${r.image}" alt="${r.type} at Vishaka Paark" class="room-img" loading="lazy"/>
        ${r.badge?`<div class="room-pill pill-${r.badge_style}">${r.badge}</div>`:''}
      </div>
      <div class="room-body">
        <div class="room-for">${r.for}</div>
        <div class="room-name">${r.type}</div>
        <div class="room-desc">${r.description}</div>
        <div class="room-tags">
          ${r.amenities.map(a=>`<span class="rtag"><i class="ti ti-check" aria-hidden="true"></i>${a}</span>`).join('')}
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
          ${showBook?`<button class="btn btn-dark btn-sm" onclick="bookRoom()">Book Now</button>`:''}
        </div>
      </div>
    </article>`).join('');
}

/* ── FACILITIES ── */
function renderFacilities(id){
  const el=document.getElementById(id);
  if(!el)return;
  const cats=['all','safety','comfort','tech','service','dining','location'];
  const labels={all:'All',safety:'Safety',comfort:'Comfort',tech:'Tech',service:'Service',dining:'Dining',location:'Location'};
  const filterEl=document.getElementById('facilities-filter');
  if(filterEl){
    filterEl.innerHTML=cats.map(c=>`
      <button class="filt-btn ${c==='all'?'active':''}" onclick="filterFac('${c}')" data-cat="${c}">${labels[c]}</button>`).join('');
  }
  el.innerHTML=HOTEL.facilities.map(f=>`
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
function toggleFac(id){
  const card=document.getElementById('fac-'+id);
  if(!card)return;
  const was=card.classList.contains('expanded');
  document.querySelectorAll('.fac-card.expanded').forEach(c=>c.classList.remove('expanded'));
  if(!was)card.classList.add('expanded');
}
function filterFac(cat){
  document.querySelectorAll('.filt-btn').forEach(b=>b.classList.toggle('active',b.dataset.cat===cat));
  document.querySelectorAll('.fac-card').forEach(c=>{
    const m=cat==='all'||c.dataset.cat===cat;
    c.classList.toggle('hidden',!m);
    if(!m)c.classList.remove('expanded');
  });
}

/* ── GALLERY ── */
let lbImgs=[],lbIdx=0;
function renderGalleryGrid(id,imgs){
  const el=document.getElementById(id);
  if(!el)return;
  lbImgs=HOTEL.gallery;
  el.innerHTML=imgs.map((g,i)=>`
    <div class="gal-item" onclick="openLb(${i})" role="button" tabindex="0" aria-label="${g.alt}">
      <img src="${g.src}" alt="${g.alt}" loading="lazy"/>
      <div class="gal-overlay"><i class="ti ti-zoom-in" aria-hidden="true"></i></div>
    </div>`).join('')+`
    <div class="gal-item gal-more" onclick="window.location.href='gallery.html'" role="button" tabindex="0">
      <i class="ti ti-photo" aria-hidden="true"></i><span>View All Photos</span>
    </div>`;
}
function renderGalleryFull(id){
  const el=document.getElementById(id);
  if(!el)return;
  lbImgs=HOTEL.gallery;
  el.innerHTML=HOTEL.gallery.map((g,i)=>`
    <div class="gal-item" onclick="openLb(${i})" role="button" tabindex="0" aria-label="${g.alt}">
      <img src="${g.src}" alt="${g.alt}" loading="lazy"/>
      <div class="gal-overlay"><i class="ti ti-zoom-in" aria-hidden="true"></i></div>
    </div>`).join('');
}
function openLb(idx){
  lbIdx=idx;
  const lb=document.getElementById('lightbox');
  if(!lb)return;
  lb.querySelector('img').src=lbImgs[lbIdx].src;
  lb.querySelector('img').alt=lbImgs[lbIdx].alt;
  lb.classList.add('open');
}
function closeLightbox(){document.getElementById('lightbox')?.classList.remove('open');}
function lbNav(dir){
  lbIdx=(lbIdx+dir+lbImgs.length)%lbImgs.length;
  const lb=document.getElementById('lightbox');
  if(!lb)return;
  lb.querySelector('img').src=lbImgs[lbIdx].src;
  lb.querySelector('img').alt=lbImgs[lbIdx].alt;
}

/* ── TESTIMONIALS ── */
function renderTestimonials(id){
  const el=document.getElementById(id);
  if(!el)return;
  el.innerHTML=HOTEL.testimonials.map(t=>`
    <div class="testi-card">
      <div class="testi-stars">${'★'.repeat(t.stars)}${'☆'.repeat(5-t.stars)}</div>
      <p class="testi-quote">"${t.text}"</p>
      <div class="testi-author">
        <div class="testi-av">${t.initials}</div>
        <div><div class="testi-name">${t.name}</div><div class="testi-from">${t.from} · ${t.type}</div></div>
      </div>
    </div>`).join('');
}

/* ── BOOKING WIDGET ── */
function renderBookingWidget(id){
  const el=document.getElementById(id);
  if(!el)return;
  el.innerHTML=`
    <div class="bw-title">Reserve Your Room</div>
    <p class="bw-sub">Book direct — 10% off, instant confirmation via Cheerze</p>
    <div class="bw-fields">
      <div class="bw-row">
        <div class="bw-field"><label for="bw-ci">Check-in date</label><input type="date" id="bw-ci"/></div>
        <div class="bw-field"><label for="bw-co">Check-out date</label><input type="date" id="bw-co"/></div>
      </div>
      <div class="bw-row">
        <div class="bw-field"><label for="bw-guests">Guests</label>
          <select id="bw-guests"><option>1 Adult</option><option>2 Adults</option><option>2 Adults + 1 Child</option><option>3 Adults</option></select>
        </div>
        <div class="bw-field"><label for="bw-room">Room type</label>
          <select id="bw-room" onchange="updatePriceSummary()">
            <option value="">Select room…</option>
            ${HOTEL.rooms.map(r=>`<option value="${r.id}" data-price="${r.price}">${r.type} — ₹${r.price.toLocaleString('en-IN')}/night</option>`).join('')}
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
  initDates('bw-ci','bw-co');
}

/* ── CTA ── */
function renderCTA(id){
  const el=document.getElementById(id);
  if(!el)return;
  const h=HOTEL.hotel;
  el.innerHTML=`
    <div class="cta-row"><i class="ti ti-phone-call" aria-hidden="true"></i>
      <div><a href="tel:${h.phone_landline}" style="color:rgba(255,255,255,0.72);text-decoration:none">${h.phone_landline}</a> &nbsp;/&nbsp; <a href="tel:${h.phone_mobile}" style="color:rgba(255,255,255,0.72);text-decoration:none">${h.phone_mobile}</a></div>
    </div>
    <div class="cta-row"><i class="ti ti-mail" aria-hidden="true"></i>
      <a href="mailto:${h.email}" style="color:rgba(255,255,255,0.72);text-decoration:none">${h.email}</a>
    </div>
    <div class="cta-row"><i class="ti ti-map-pin" aria-hidden="true"></i><span>${h.location}</span></div>
    <div style="margin-top:12px;display:flex;gap:10px;flex-wrap:wrap">
      <a href="https://wa.me/${h.whatsapp}?text=Hi%2C+I+want+to+book+a+room+at+Vishaka+Paark" target="_blank" rel="noopener" class="btn btn-white btn-lg">
        <i class="ti ti-brand-whatsapp" aria-hidden="true"></i> WhatsApp Us
      </a>
      <button class="btn btn-outline btn-lg" onclick="proceedCheerze()">
        <i class="ti ti-calendar-check" aria-hidden="true"></i> Book Online
      </button>
    </div>`;
}

/* ── CONTACT CTA (contact page) ── */
function renderContactCTA(id){
  const el=document.getElementById(id);
  if(!el)return;
  const h=HOTEL.hotel;
  el.innerHTML=`
    <div class="info-card">
      <div class="info-icon"><i class="ti ti-phone-call" aria-hidden="true"></i></div>
      <div><div class="info-label">Call Us</div>
        <div class="info-val"><a href="tel:${h.phone_landline}">${h.phone_landline}</a><br><a href="tel:${h.phone_mobile}">${h.phone_mobile}</a></div>
      </div>
    </div>
    <div class="info-card">
      <div class="info-icon"><i class="ti ti-mail" aria-hidden="true"></i></div>
      <div><div class="info-label">Email</div>
        <div class="info-val"><a href="mailto:${h.email}">${h.email}</a></div>
      </div>
    </div>
    <div class="info-card">
      <div class="info-icon"><i class="ti ti-map-pin" aria-hidden="true"></i></div>
      <div><div class="info-label">Address</div><div class="info-val">${h.location}</div></div>
    </div>
    <div class="info-card">
      <div class="info-icon"><i class="ti ti-brand-whatsapp" aria-hidden="true"></i></div>
      <div><div class="info-label">WhatsApp</div>
        <div class="info-val"><a href="https://wa.me/${h.whatsapp}?text=Hi%2C+I+want+to+book+a+room" target="_blank" rel="noopener" style="color:#896C3E">Chat with us →</a></div>
      </div>
    </div>`;
}

/* ── HERO BG ── */
function initHeroBg(){
  const bg=document.querySelector('.hero-bg');
  if(bg)setTimeout(()=>bg.classList.add('loaded'),80);
}

/* ── PAGE ROUTERS ── */
function renderHome(){
  renderBookingBar('booking-bar');
  renderRibbon();
  renderAbout();
  renderRoomCards('rooms-grid',true);
  renderFacilities('facilities-grid');
  renderGalleryGrid('gallery-grid',HOTEL.gallery.slice(0,5));
  renderTestimonials('testi-grid');
  renderBookingWidget('booking-widget');
  renderCTA('cta-contact');
  initHeroBg();
}
function renderRoomsPage(){
  renderBookingBar('booking-bar');
  renderRoomCards('rooms-grid',true);
  renderFacilities('facilities-grid');
  renderBookingWidget('booking-widget');
}
function renderGalleryPage(){
  renderGalleryFull('gallery-full');
}
function renderContactPage(){
  renderContactCTA('cta-contact-full');
  const mapEl=document.getElementById('map-frame');
  if(mapEl)mapEl.src=HOTEL.hotel.maps_embed;
}

/* ── BOOT ── */
document.addEventListener('DOMContentLoaded',()=>{
  renderNav();
  renderFooter();
  initWaFab();
  const page=document.body.dataset.page||'home';
  if(page==='home')    renderHome();
  if(page==='rooms')   renderRoomsPage();
  if(page==='gallery') renderGalleryPage();
  if(page==='contact') renderContactPage();
});
