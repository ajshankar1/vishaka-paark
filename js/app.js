/* VISHAKA PAARK — app.js v4.0 — All data embedded, no fetch */

const D = {
  hotel:{
    name:"Vishaka Paark",location:"Thudiyalur Road, Saravanampatty, Coimbatore – 641 035",
    phone_landline:"0422 4695952",phone_mobile:"+91 90909 27979",whatsapp:"919090927979",
    email:"hotelvishakapaark@gmail.com",
    maps_embed:"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3915.453494330426!2d76.99795197504629!3d11.079539889088212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDA0JzQ2LjMiTiA3N8KwMDAnMDEuOSJF!5e0!3m2!1sen!2sin!4v1757509116775!5m2!1sen!2sin",
    cheerze_id:"41zCeLBoB8+H6~z6Ej+sDiqeTlZraDAn6WHZSg2lO8k-",
    cheerze_base:"https://secure.cheerzeconnect.com/Bookings/engine.html",
    instagram:"https://www.instagram.com/_hotel_vishaka_paark_",
    facebook:"https://www.facebook.com/share/1Gbzoj2aPk/"
  },
  rooms:[
    {id:"executive-double",type:"Executive Double",for:"Solo & Couples",badge:"Best Seller",bs:"cr",
     desc:"A plush king-size bed with premium linen, smart TV, climate-control AC and a private attached bathroom.",
     price:2740,was:3045,off:10,
     img:"https://vishakapaark.com/wp-content/uploads/2025/09/rdp_room1.png",
     tags:["King Bed","Smart TV","Breakfast","AC","Wifi"]},
    {id:"executive-twin",type:"Executive Twin",for:"Friends & Colleagues",badge:null,bs:null,
     desc:"Two separate premium beds ensuring privacy and independence — ideal for colleagues or travelling friends.",
     price:3058,was:3398,off:10,
     img:"https://vishakapaark.com/wp-content/uploads/2025/09/rdp_room2.png",
     tags:["Twin Beds","Smart TV","Breakfast","AC","Wifi"]},
    {id:"deluxe-triple",type:"Deluxe Triple",for:"Families & Groups",badge:"Family Pick",bs:"gd",
     desc:"Spacious layout with a king bed plus a single bed — perfect for families or groups of three.",
     price:4222,was:4691,off:10,
     img:"https://vishakapaark.com/wp-content/uploads/2025/09/rdp_room3.png",
     tags:["King + Single","Smart TV","Breakfast","AC","Wifi"]}
  ],
  facilities:[
    {id:"sec",  icon:"ti-shield-check",  name:"24/7 Security & CCTV",    short:"Always watching",        desc:"HD CCTV cameras cover all corridors and entry points — monitored every hour of every day.", cat:"safety"},
    {id:"fd",   icon:"ti-building-store",name:"24×7 Front Desk",         short:"Always here for you",     desc:"Our staff are available round the clock — check in at 3am or ask for local tips at midnight.", cat:"service"},
    {id:"pw",   icon:"ti-bolt",          name:"24hr Power Backup",       short:"Zero outages, ever",      desc:"Full generator backup ensures your room stays powered, air-conditioned and connected at all times.", cat:"comfort"},
    {id:"hw",   icon:"ti-droplet",       name:"Hot & Cold Water",        short:"Perfect every time",      desc:"Instant hot water available at any hour. No waiting, no cold surprises — a perfect shower every time.", cat:"comfort"},
    {id:"bed",  icon:"ti-bed",           name:"King Size Bed",           short:"Sleep like royalty",      desc:"Executive-grade mattresses with plush duvets, crisp white linen and the signature crimson throw accent.", cat:"comfort"},
    {id:"wifi", icon:"ti-wifi",          name:"High-Speed Wifi",         short:"Fibre-grade speed",       desc:"High-bandwidth wifi throughout — fast enough for video calls, 4K streaming and remote work.", cat:"tech"},
    {id:"bkf",  icon:"ti-coffee",        name:"Complimentary Breakfast", short:"Start every day right",   desc:"A fresh, wholesome breakfast included with every room — served every morning.", cat:"dining"},
    {id:"taxi", icon:"ti-car",           name:"Pickup & Drop",           short:"Door-to-door transfer",   desc:"Airport and railway station transfers arranged on request. Arrive and depart with zero stress.", cat:"service"},
    {id:"park", icon:"ti-parking",       name:"Parking Facilities",      short:"Secure on-site",          desc:"Dedicated CCTV-monitored parking for every guest's vehicle — included at no extra charge.", cat:"service"},
    {id:"ro",   icon:"ti-glass",         name:"Safe RO Drinking Water",  short:"Pure water, always",      desc:"RO-filtered purified drinking water in every room. No need to buy bottles.", cat:"comfort"},
    {id:"co",   icon:"ti-clock-24",      name:"24hr Flexible Checkout",  short:"Leave on your schedule",  desc:"Truly flexible 24-hour checkout — no pressure, no extra fee. A rare genuine differentiator.", cat:"service"},
    {id:"tv",   icon:"ti-device-tv",     name:"In-Room Entertainment",   short:"Smart TV in every room",  desc:"Wall-mounted smart TV with streaming apps, news and sports — your entertainment, your way.", cat:"tech"},
    {id:"loc",  icon:"ti-map-pin",       name:"Prime Location",          short:"Heart of IT corridor",    desc:"On Thudiyalur Road, Saravanampatty — walking distance from major IT campuses in Coimbatore.", cat:"location"},
    {id:"bar",  icon:"ti-bottle",        name:"Attached Bar",            short:"Unwind after your day",   desc:"An in-house bar with a curated selection of drinks — perfect to decompress after work or travel.", cat:"dining"},
    {id:"cof",  icon:"ti-cup",           name:"Coffee Maker",            short:"Brew anytime",            desc:"A personal coffee maker in every room — enjoy a fresh cup at 6am or midnight.", cat:"tech"},
    {id:"lock", icon:"ti-lock",          name:"Godrej Smart Lock",       short:"Electronic keycard",      desc:"Every room uses a Godrej electronic smart lock — tamper-proof and more secure than a traditional key.", cat:"safety"}
  ],
  testimonials:[
    {i:"RK",name:"Rajesh Kumar", from:"Chennai",    type:"Business Stay",stars:5,text:"The room was immaculate. Loved the wooden headboard with that warm backlight — it made the whole space feel premium. Staff were genuinely kind."},
    {i:"PM",name:"Priya Mohan",  from:"Bangalore",  type:"Family Trip",  stars:5,text:"Came with my family and booked the Deluxe Triple. Kids had space, breakfast was fresh, and the price was very reasonable."},
    {i:"SA",name:"Suresh Anand", from:"Hyderabad",  type:"Work Trip",    stars:4,text:"Location is unbeatable for the IT corridor. Fast Wi-Fi, comfortable beds, smooth check-in. Will book again next trip."},
    {i:"DV",name:"Divya Venkat", from:"Coimbatore", type:"Weekend Stay", stars:5,text:"Staycation done right. The bar is a bonus I did not expect. Clean rooms, great breakfast, staff remembered my name."}
  ],
  gallery:[
    {src:"https://vishakapaark.com/wp-content/uploads/2025/09/gall-1.png",alt:"Hotel lobby"},
    {src:"https://vishakapaark.com/wp-content/uploads/2025/09/gall-2.png",alt:"Room details"},
    {src:"https://vishakapaark.com/wp-content/uploads/2025/09/gall-3.png",alt:"Hotel facilities"},
    {src:"https://vishakapaark.com/wp-content/uploads/2025/09/gall-4.png",alt:"Lounge area"},
    {src:"https://vishakapaark.com/wp-content/uploads/2025/09/rdp_room1.png",alt:"Executive Double"},
    {src:"https://vishakapaark.com/wp-content/uploads/2025/09/rdp_room2.png",alt:"Executive Twin"},
    {src:"https://vishakapaark.com/wp-content/uploads/2025/09/rdp_room3.png",alt:"Deluxe Triple"},
    {src:"https://vishakapaark.com/wp-content/uploads/2025/09/about-img.png",alt:"Lobby reception"}
  ]
};

/* ── CHEERZE ── */
function cheerzeURL(ci,co){return`${D.hotel.cheerze_base}?hotelId=${encodeURIComponent(D.hotel.cheerze_id)}&checkin=${ci}&checkout=${co}`;}
function searchRooms(){const ci=v('ci'),co=v('co');if(ci&&co)window.open(cheerzeURL(ci,co),'_blank');}
function bookRoom(){const ci=v('ci')||v('bw-ci'),co=v('co')||v('bw-co');window.open(cheerzeURL(ci||fmt(1),co||fmt(2)),'_blank');}
function proceedCheerze(){const ci=v('bw-ci')||v('ci'),co=v('bw-co')||v('co');if(!ci||!co){alert('Please select dates.');return;}window.open(cheerzeURL(ci,co),'_blank');}
function v(id){return document.getElementById(id)?.value||'';}

/* ── DATES ── */
function fmt(n){const d=new Date();d.setDate(d.getDate()+n);return d.toISOString().split('T')[0];}
function setDates(ciId,coId){
  const ci=document.getElementById(ciId),co=document.getElementById(coId);
  if(ci){ci.value=fmt(1);ci.min=fmt(1);}
  if(co){co.value=fmt(2);co.min=fmt(2);}
  if(ci)ci.addEventListener('change',()=>{
    const d=new Date(ci.value);d.setDate(d.getDate()+1);
    const m=d.toISOString().split('T')[0];
    if(co){co.min=m;if(co.value<=ci.value)co.value=m;}
    calcPrice();
  });
  if(co)co.addEventListener('change',calcPrice);
}
function calcPrice(){
  const ci=v('bw-ci')||v('ci'),co=v('bw-co')||v('co');
  const rs=document.getElementById('bw-room'),sum=document.getElementById('bw-summary');
  if(!ci||!co||!rs||!sum)return;
  const n=Math.round((new Date(co)-new Date(ci))/(864e5));
  const p=parseInt(rs.selectedOptions[0]?.dataset.price||0);
  if(!n||n<1||!p){sum.classList.remove('show');return;}
  const t=p*n,d=Math.round(t*.1),f=t-d;
  document.getElementById('bw-rate').textContent=`₹${p.toLocaleString('en-IN')}/night`;
  document.getElementById('bw-nights-c').textContent=`${n} night${n>1?'s':''}`;
  document.getElementById('bw-disc').textContent=`−₹${d.toLocaleString('en-IN')}`;
  document.getElementById('bw-tot').textContent=`₹${f.toLocaleString('en-IN')}`;
  sum.classList.add('show');
}

/* ── FOOTER ── */
function renderFooter(){
  const el=document.getElementById('footer');if(!el)return;
  const h=D.hotel;
  el.innerHTML=`
  <div class="footer-top">
    <div>
      <img src="https://vishakapaark.com/wp-content/uploads/2025/09/logo-white.svg" alt="Vishaka Paark" class="footer-logo-img" onerror="this.style.display='none'"/>
      <p class="footer-tagline">Boutique hospitality in Saravanampatty — Coimbatore's IT corridor.</p>
      <div class="footer-social">
        <a href="${h.instagram}" class="soc-btn soc-insta" target="_blank" rel="noopener" aria-label="Instagram"><i class="ti ti-brand-instagram" aria-hidden="true"></i></a>
        <a href="${h.facebook}" class="soc-btn soc-fb" target="_blank" rel="noopener" aria-label="Facebook"><i class="ti ti-brand-facebook" aria-hidden="true"></i></a>
        <a href="https://wa.me/${h.whatsapp}" class="soc-btn soc-wa" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="ti ti-brand-whatsapp" aria-hidden="true"></i></a>
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
  </div>
  <div class="footer-bottom">
    <span class="footer-copy">© ${new Date().getFullYear()} Vishaka Paark. All rights reserved.</span>
    <a href="https://www.tripadvisor.com" target="_blank" rel="noopener" class="ta-link"><i class="ti ti-star" aria-hidden="true"></i> Review us on TripAdvisor</a>
  </div>`;
}

/* ── ROOMS GRID ── */
function renderRooms(id){
  const el=document.getElementById(id);if(!el)return;
  el.innerHTML=D.rooms.map(r=>`
    <div class="room-card" onclick="bookRoom()">
      ${r.badge?`<div class="room-card-pill pill-${r.bs}">${r.badge}</div>`:''}
      <img src="${r.img}" alt="${r.type}" class="room-card-img" loading="lazy"/>
      <div class="room-card-overlay"></div>
      <div class="room-card-body">
        <div class="room-card-for">${r.for}</div>
        <div class="room-card-name">${r.type}</div>
        <div class="room-card-price">
          <strong>₹${r.price.toLocaleString('en-IN')}</strong> / night
          <span class="off">${r.off}% off</span>
        </div>
        <div class="room-card-tags">${r.tags.map(t=>`<span class="room-card-tag">${t}</span>`).join('')}</div>
        <button class="btn-dark-solid" onclick="event.stopPropagation();bookRoom()">Book Now</button>
      </div>
    </div>`).join('');
}

/* ── FACILITIES ── */
function renderFacilities(gid,fid){
  const gel=document.getElementById(gid),fel=document.getElementById(fid);
  if(!gel)return;
  const cats=['all','safety','comfort','tech','service','dining','location'];
  const labels={all:'All',safety:'Safety',comfort:'Comfort',tech:'Tech',service:'Service',dining:'Dining',location:'Location'};
  if(fel)fel.innerHTML=cats.map(c=>`<button class="filt-btn${c==='all'?' active':''}" onclick="filterFac('${c}')" data-cat="${c}">${labels[c]}</button>`).join('');
  gel.innerHTML=D.facilities.map(f=>`
    <div class="fac-card" data-cat="${f.cat}" id="fc-${f.id}" onclick="toggleFac('${f.id}')">
      <i class="ti ${f.icon} fac-icon" aria-hidden="true"></i>
      <div class="fac-name">${f.name}</div>
      <div class="fac-short">${f.short}</div>
      <div class="fac-expand"><p>${f.desc}</p></div>
    </div>`).join('');
}
function toggleFac(id){
  const c=document.getElementById('fc-'+id);if(!c)return;
  const was=c.classList.contains('expanded');
  document.querySelectorAll('.fac-card.expanded').forEach(x=>x.classList.remove('expanded'));
  if(!was)c.classList.add('expanded');
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
function renderGallery(id,imgs,full){
  const el=document.getElementById(id);if(!el)return;
  lbImgs=D.gallery;
  if(full){
    el.innerHTML=D.gallery.map((g,i)=>`
      <div class="gal-item" onclick="openLb(${i})" role="button" tabindex="0">
        <img src="${g.src}" alt="${g.alt}" loading="lazy"/>
        <div class="gal-overlay"><i class="ti ti-zoom-in" aria-hidden="true"></i></div>
      </div>`).join('');
  } else {
    el.innerHTML=imgs.map((g,i)=>`
      <div class="gal-item" onclick="openLb(${i})" role="button" tabindex="0">
        <img src="${g.src}" alt="${g.alt}" loading="lazy"/>
        <div class="gal-overlay"><i class="ti ti-zoom-in" aria-hidden="true"></i></div>
      </div>`).join('')+
      `<div class="gal-item gal-more" onclick="window.location.href='gallery.html'" role="button">
        <i class="ti ti-photo" aria-hidden="true"></i>
        <span>View All Photos</span>
      </div>`;
  }
}
function openLb(i){lbIdx=i;const lb=document.getElementById('lightbox');const img=document.getElementById('lb-img');if(!lb||!img)return;img.src=lbImgs[i].src;img.alt=lbImgs[i].alt;lb.classList.add('open');}
function closeLb(){document.getElementById('lightbox')?.classList.remove('open');}
function lbNav(d){lbIdx=(lbIdx+d+lbImgs.length)%lbImgs.length;const img=document.getElementById('lb-img');if(img){img.src=lbImgs[lbIdx].src;img.alt=lbImgs[lbIdx].alt;}}

/* ── TESTIMONIALS ── */
function renderTestis(id){
  const el=document.getElementById(id);if(!el)return;
  el.innerHTML=D.testimonials.map(t=>`
    <div class="testi-card">
      <div class="testi-stars">${'★'.repeat(t.stars)}${'☆'.repeat(5-t.stars)}</div>
      <p class="testi-quote">"${t.text}"</p>
      <div class="testi-auth">
        <div class="testi-av">${t.i}</div>
        <div><div class="testi-name">${t.name}</div><div class="testi-from">${t.from} · ${t.type}</div></div>
      </div>
    </div>`).join('');
}

/* ── BOOKING WIDGET ── */
function renderBW(id){
  const el=document.getElementById(id);if(!el)return;
  el.innerHTML=`
    <div class="bw-title">Reserve Your Room</div>
    <p class="bw-sub">Book direct — 10% off, instant confirmation via Cheerze</p>
    <div class="bw-fields">
      <div class="bw-row">
        <div class="bw-field"><label>Check-in</label><input type="date" id="bw-ci"/></div>
        <div class="bw-field"><label>Check-out</label><input type="date" id="bw-co"/></div>
      </div>
      <div class="bw-row">
        <div class="bw-field"><label>Guests</label>
          <select><option>1 Adult</option><option>2 Adults</option><option>2 Adults + 1 Child</option><option>3 Adults</option></select>
        </div>
        <div class="bw-field"><label>Room type</label>
          <select id="bw-room" onchange="calcPrice()">
            <option value="">Select room…</option>
            ${D.rooms.map(r=>`<option value="${r.id}" data-price="${r.price}">${r.type} — ₹${r.price.toLocaleString('en-IN')}/night</option>`).join('')}
          </select>
        </div>
      </div>
    </div>
    <div class="bw-price-summary" id="bw-summary">
      <div class="bw-price-line"><span>Room rate</span><span id="bw-rate">—</span></div>
      <div class="bw-price-line"><span>Nights</span><span id="bw-nights-c">—</span></div>
      <div class="bw-price-line" style="color:#3a6e1a"><span>Direct discount (10%)</span><span id="bw-disc">—</span></div>
      <div class="bw-price-total"><span>Total estimate</span><span id="bw-tot">—</span></div>
    </div>
    <button class="bw-btn" onclick="proceedCheerze()">
      <i class="ti ti-calendar-check" aria-hidden="true"></i> Check Availability on Cheerze
    </button>
    <div class="bw-note"><i class="ti ti-shield-check" aria-hidden="true"></i> Secure · Powered by Cheerze · Best rate guaranteed</div>`;
  setDates('bw-ci','bw-co');
}

/* ── CTA ── */
function renderCTA(id){
  const el=document.getElementById(id);if(!el)return;
  const h=D.hotel;
  el.innerHTML=`
    <div class="cta-row"><i class="ti ti-phone-call" aria-hidden="true"></i>
      <div><a href="tel:${h.phone_landline}">${h.phone_landline}</a> &nbsp;/&nbsp; <a href="tel:${h.phone_mobile}">${h.phone_mobile}</a></div>
    </div>
    <div class="cta-row"><i class="ti ti-mail" aria-hidden="true"></i>
      <a href="mailto:${h.email}">${h.email}</a>
    </div>
    <div class="cta-row"><i class="ti ti-map-pin" aria-hidden="true"></i><span>${h.location}</span></div>
    <div class="cta-btns">
      <a href="https://wa.me/${h.whatsapp}?text=Hi%2C+I+want+to+book+a+room+at+Vishaka+Paark" target="_blank" rel="noopener" class="cta-btn-w">
        <i class="ti ti-brand-whatsapp" aria-hidden="true"></i> WhatsApp
      </a>
      <button class="cta-btn-o" onclick="proceedCheerze()">
        <i class="ti ti-calendar-check" aria-hidden="true"></i> Book Online
      </button>
    </div>`;
}

/* ── CONTACT PAGE CTA ── */
function renderContactInfo(id){
  const el=document.getElementById(id);if(!el)return;
  const h=D.hotel;
  el.innerHTML=`
    <div class="info-card"><div class="info-icon"><i class="ti ti-phone-call" aria-hidden="true"></i></div>
      <div><div class="info-label">Call Us</div>
        <div class="info-val"><a href="tel:${h.phone_landline}">${h.phone_landline}</a><br><a href="tel:${h.phone_mobile}">${h.phone_mobile}</a></div>
      </div>
    </div>
    <div class="info-card"><div class="info-icon"><i class="ti ti-mail" aria-hidden="true"></i></div>
      <div><div class="info-label">Email</div>
        <div class="info-val"><a href="mailto:${h.email}">${h.email}</a></div>
      </div>
    </div>
    <div class="info-card"><div class="info-icon"><i class="ti ti-map-pin" aria-hidden="true"></i></div>
      <div><div class="info-label">Address</div><div class="info-val">${h.location}</div></div>
    </div>
    <div class="info-card"><div class="info-icon"><i class="ti ti-brand-whatsapp" aria-hidden="true"></i></div>
      <div><div class="info-label">WhatsApp</div>
        <div class="info-val"><a href="https://wa.me/${h.whatsapp}?text=Hi%2C+I+want+to+book+a+room" target="_blank" rel="noopener" style="color:#896C3E">Chat with us →</a></div>
      </div>
    </div>`;
}

/* ── HERO SLIDER ── */
let slideIdx=0,slideTimer;
function startSlider(){
  const slides=document.querySelectorAll('.hero-slide');
  const dots=document.querySelectorAll('.hero-dot');
  if(!slides.length)return;
  slideTimer=setInterval(()=>{
    slides[slideIdx].classList.remove('active');
    dots[slideIdx]?.classList.remove('active');
    slideIdx=(slideIdx+1)%slides.length;
    slides[slideIdx].classList.add('active');
    dots[slideIdx]?.classList.add('active');
  },4500);
}
function goSlide(i){
  const slides=document.querySelectorAll('.hero-slide');
  const dots=document.querySelectorAll('.hero-dot');
  slides[slideIdx]?.classList.remove('active');
  dots[slideIdx]?.classList.remove('active');
  slideIdx=i;
  slides[slideIdx]?.classList.add('active');
  dots[slideIdx]?.classList.add('active');
  clearInterval(slideTimer);startSlider();
}

/* ── PAGE ROUTER ── */
document.addEventListener('DOMContentLoaded',()=>{
  renderFooter();
  const p=document.body.dataset.page||'home';
  if(p==='home'){
    setDates('ci','co');
    renderRooms('rooms-grid');
    renderFacilities('fac-grid','fac-filter');
    renderGallery('gal-grid',D.gallery.slice(0,5),false);
    renderTestis('testi-grid');
    renderBW('booking-widget');
    renderCTA('cta-contact');
    startSlider();
  }
  if(p==='rooms'){
    setDates('ci','co');
    renderRooms('rooms-grid');
    renderFacilities('fac-grid','fac-filter');
    renderBW('booking-widget');
  }
  if(p==='gallery'){
    renderGallery('gallery-full',null,true);
  }
  if(p==='contact'){
    renderContactInfo('contact-info');
    const mf=document.getElementById('map-frame');
    if(mf)mf.src=D.hotel.maps_embed;
  }
});
