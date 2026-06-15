/* ============================================================
   EaseMyBooking — Farmhouse & Villas
   Vanilla JS for sliders, filters, gallery, WhatsApp deep-links
   ============================================================ */

const WA_NUMBER = '918824880979';
const OWNER_EMAIL = 'info@easemybooking.in';

/* ----------------- PROPERTY DATA ----------------- */
const PROPERTIES = [
  {
    id: 'ramalaya',
    name: 'Ramalaya',
    type: 'FarmHouse',
    location: 'Jaipur',
    state: 'Jaipur',
    guests: 3, beds: 1, baths: 1, rating: 4.9,
    price: 4200, currency: '₹',
    featured: false,
    // badge: 'Beachfront',
    amenities: ['Parking','Wi-fi','Balcony','Airconditioning','Geyser','AC','Bonfire','Caretaker', 'TV'],
    description: 'Surrounded by lush greenery and peaceful open skies, this elegant resort retreat offers the perfect blend of comfort, luxury, and relaxed leisure living. Ideal for couples, staycations, weekend getaways, and peaceful vacations, the property provides a calm escape away from the city rush while remaining easily accessible. This thoughtfully designed 180 sq. ft. private room features a plush king-sized bed with a royal blue upholstered headboard, warm ambient lighting, earthy modern interiors, and large garden-facing windows. Equipped with a 42-inch TV, mini fridge, electric kettle, wardrobe, AC, and a cosy seating corner, the room ensures a comfortable and relaxing stay. The attached ensuite washroom includes a shower area, geyser, western commode with jet spray, fresh towels, toiletries, and modern essentials. Guests can unwind at the beautifully designed common dining area and common balcony, perfect for enjoying peaceful mornings, relaxed conversations, and serene open-sky views. The property also features a 500 sq. ft. common swimming pool surrounded by a spacious wooden deck, outdoor shower, and tranquil ambience — ideal for leisurely swims and laid-back evenings. The resort further offers a sprawling 30,000 sq. ft. common garden with lush natural grass, elegant patio seating, and ample open space ideal for gatherings, outdoor games, and relaxed outdoor experiences. Conveniently located near Jaipur’s iconic attractions like Amer Fort, Hawa Mahal, and Jantar Mantar, all approximately 9 km away, the resort offers the perfect balance of accessibility and tranquility.',
    images: [
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1400&q=85',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1400&q=85',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1400&q=85',
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1400&q=85',
      'https://images.unsplash.com/photo-1574643156929-51fa098b0394?w=1400&q=85',
      'https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=1400&q=85'
    ]
  },
  {
    id: 'gold-palm-granola',
    name: 'Gold Palm Granola',
    type: 'Farm House',
    address: 'Ramgarh Road, Jaipur',
    location: 'Jaipur',
    state: 'Rajasthan',
    guests: 3, beds: 1, baths: 1, rating: 4.9,
    price: 7700, currency: '₹',
    featured: true,
    // badge: 'Lakefront',
    amenities: ['Private Pool','Garden','Balcony','Caretaker','Wi-Fi','AC','Hygiene kit','Parking'],
    description: 'Perched above Lake Pichola, Sapphire Crest is a contemporary haveli with hand-carved jharokhas, a 20-metre pool and panoramic Aravalli views.',
    images: [
      'assets/villa-images/Gold Palm Granola/1.webp',
      'assets/villa-images/Gold Palm Granola/2.webp',
      'assets/villa-images/Gold Palm Granola/3.webp',
      'assets/villa-images/Gold Palm Granola/4.webp',
      'assets/villa-images/Gold Palm Granola/5.webp',
      'assets/villa-images/Gold Palm Granola/6.webp',
      'assets/villa-images/Gold Palm Granola/7.webp',
      'assets/villa-images/Gold Palm Granola/8.webp',
      'assets/villa-images/Gold Palm Granola/9.webp',
    ]
  },
  {
   id: 'jamun-farms',
    name: 'Jamun Farms | 2-BHK Retreat With Pvt Pool, Garden & Balcony',
    type: 'Farm House',
    address: 'Amber, Jaipur',
    location: 'Jaipur',
    state: 'Rajasthan',
    guests: 6, beds: 2, baths: 3, rating: 4.9,
    price: 7700, currency: '₹',
    featured: true,
    // badge: 'Lakefront',
    amenities: ['Private Pool','Garden','Balcony','Caretaker','Wi-Fi','AC','Hygiene kit','Parking'],
    description: 'Tucked away in the Pink City, this charming 2-BHK retreat is the perfect escape for you and your furry companions! The indoor pool area is complete with cosy poolside seating, a skylight that invites natural light, and arched windows that showcase breathtaking views of lush gardens and the hills. The living room is designed for relaxation, featuring a comfortable sofa and TV, and is conveniently located near the kitchen and dining area. Both bedrooms are designed for comfort, with one offering direct access to a spacious balcony—ideal for sipping your morning coffee while taking in the peaceful surroundings. The expansive garden provides ample space for outdoor fun, enjoying a friendly cricket match with your group. Throughout your stay, indulge in exceptional services from a dedicated 5-star hospitality team, embodying the essence of "Atithi Devo Bhava".',
    images: [
      'assets/villa-images/Gold Palm Granola/1.webp',
      'assets/villa-images/Gold Palm Granola/2.webp',
      'assets/villa-images/Gold Palm Granola/3.webp',
      'assets/villa-images/Gold Palm Granola/4.webp',
      'assets/villa-images/Gold Palm Granola/5.webp',
      'assets/villa-images/Gold Palm Granola/6.webp',
      'assets/villa-images/Gold Palm Granola/7.webp',
      'assets/villa-images/Gold Palm Granola/8.webp',
      'assets/villa-images/Gold Palm Granola/9.webp',
    ]
  },
  {
    id: 'emerald-garden',
    name: 'Emerald Garden Villa',
    type: 'Villa',
    location: 'Lonavala',
    state: 'Maharashtra',
    guests: 18, beds: 6, baths: 6, rating: 4.8,
    price: 70000,
    badge: 'Pet Friendly',
    amenities: ['Private Pool','Pet Friendly','Wi-Fi','AC','Bonfire','Indoor Games','Home Theatre','Chef'],
    description: 'Set against the Sahyadri foothills, Emerald Garden is a six-bedroom retreat with a heated pool, projection room and pet-friendly suites.',
    images: [
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1400&q=85',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1400&q=85',
      'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=1400&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=85',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400&q=85',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=85'
    ]
  },
  {
    id: 'crimson-fields',
    name: 'Crimson Fields Estate',
    type: 'Farmhouse',
    location: 'Delhi NCR',
    state: 'Haryana',
    guests: 600, beds: 16, baths: 18, rating: 4.7,
    price: 200000,
    badge: 'Mega Estate',
    amenities: ['Lawn / Garden','Pool','Helipad','Sound System','Chef','Parking','AC','Caretaker'],
    description: 'A 9-acre crimson sandstone estate 45 minutes from Delhi, with a helipad, two amphitheatre lawns and an 18-bedroom mansion — built for the biggest celebrations.',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=85',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1400&q=85',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1400&q=85',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1400&q=85',
      'https://images.unsplash.com/photo-1542665952-14513db15293?w=1400&q=85',
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1400&q=85'
    ]
  },
  {
    id: 'heritage-haveli',
    name: 'Heritage Haveli Farm',
    type: 'Heritage',
    location: 'Jodhpur',
    state: 'Rajasthan',
    guests: 350, beds: 10, baths: 12, rating: 4.8,
    price: 95000,
    badge: 'Heritage',
    amenities: ['Courtyard','Pool','Chef','Wi-Fi','AC','Parking','Bonfire','Caretaker'],
    description: 'A restored 200-year-old haveli with sandstone arches, frescoed ceilings and a stepwell pool. The textbook destination wedding venue.',
    images: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1400&q=85',
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=1400&q=85',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1400&q=85',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1400&q=85',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1400&q=85',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1400&q=85'
    ]
  },
  {
    id: 'snowline-manor',
    name: 'Snowline Manor',
    type: 'Cottage',
    location: 'Manali',
    state: 'Himachal Pradesh',
    guests: 12, beds: 5, baths: 5, rating: 4.9,
    price: 55000,
    badge: 'Mountain Retreat',
    amenities: ['Mountain View','Fireplace','Chef','Wi-Fi','Heater','Bonfire','Caretaker','Parking'],
    description: 'A pinewood chalet at 7,200 ft with panoramic Pir Panjal views, four stone fireplaces and bedrooms that open to the snowline.',
    images: [
      'https://images.unsplash.com/photo-1518733057094-95b53143d2a7?w=1400&q=85',
      'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?w=1400&q=85',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1400&q=85',
      'https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=1400&q=85',
      'https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?w=1400&q=85',
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1400&q=85'
    ]
  },
  {
    id: 'tropic-bungalow',
    name: 'Tropic Plantation Bungalow',
    type: 'Cottage',
    location: 'Coorg',
    state: 'Karnataka',
    guests: 10, beds: 4, baths: 4, rating: 4.8,
    price: 48000,
    badge: 'Eco Stay',
    amenities: ['Coffee Plantation','Pool','Wi-Fi','AC','Chef','Bonfire','Caretaker','Parking'],
    description: 'A colonial planter\'s bungalow on a 14-acre coffee estate in Coorg. Wake to mist, espresso roasted on-site and a saltwater pool framed by jackfruit trees.',
    images: [
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1400&q=85',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1400&q=85',
      'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=1400&q=85',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1400&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=85',
      'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=1400&q=85'
    ]
  },
  {
    id: 'palm-grove',
    name: 'Palm Grove Estate',
    type: 'Villa',
    location: 'Goa',
    state: 'South Goa',
    guests: 22, beds: 7, baths: 7, rating: 4.8,
    price: 110000,
    badge: 'Family Favourite',
    amenities: ['Private Pool','Wi-Fi','AC','Chef','Bonfire','Indoor Games','Caretaker','Parking'],
    description: 'A whitewashed Portuguese estate in Cavelossim with a 25-metre lap pool, palm-fringed lawns and seven en-suite bedrooms.',
    images: [
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1400&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&q=85',
      'https://images.unsplash.com/photo-1574643156929-51fa098b0394?w=1400&q=85',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1400&q=85',
      'https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=1400&q=85',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1400&q=85'
    ]
  }
];

const AMEN_ICONS = {
  'Private Pool':'fa-water-ladder','Pool':'fa-water-ladder','Jacuzzi':'fa-hot-tub-person',
  'Chef':'fa-utensils','Chef on Request':'fa-utensils','Wi-Fi':'fa-wifi','AC':'fa-snowflake',
  'Bonfire':'fa-fire','Bonfire / BBQ':'fa-fire','Caretaker':'fa-user-tie','Lawn':'fa-tree',
  'Lawn / Garden':'fa-tree','Parking':'fa-square-parking','Pet Friendly':'fa-paw',
  'Indoor Games':'fa-table-tennis-paddle-ball','Home Theatre':'fa-clapperboard',
  'Beach Access':'fa-umbrella-beach','Lake View':'fa-water','Butler':'fa-bell-concierge',
  'Sound System':'fa-music','Helipad':'fa-helicopter','Mountain View':'fa-mountain',
  'Fireplace':'fa-fire-burner','Heater':'fa-temperature-arrow-up',
  'Coffee Plantation':'fa-mug-hot','Courtyard':'fa-archway'
};
const amenIcon = (a) => AMEN_ICONS[a] || 'fa-circle-check';

/* ----------------- SHARED HELPERS ----------------- */
const $ = (sel,root=document)=>root.querySelector(sel);
const $$ = (sel,root=document)=>Array.from(root.querySelectorAll(sel));
const fmt = (n) => '₹' + Number(n).toLocaleString('en-IN');
const param = (k) => new URLSearchParams(location.search).get(k);
const yearEl = document.getElementById('year'); if(yearEl) yearEl.textContent = new Date().getFullYear();

function waLink(text){
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

/* ----------------- NAV ----------------- */
(function nav(){
  const nav = $('#nav'); const toggle = $('#navToggle'); const links = $('#navLinks');
  if(!nav) return;
  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 30);
  window.addEventListener('scroll', onScroll, {passive:true}); onScroll();
  if(toggle){
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('is-open');
      links.classList.toggle('is-open');
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      toggle.classList.remove('is-open'); links.classList.remove('is-open');
    }));
  }
})();

/* ----------------- HERO SLIDER ----------------- */
(function heroSlider(){
  const slides = $$('.hero__slide'); const dotsWrap = $('#heroDots');
  if(!slides.length || !dotsWrap) return;
  slides.forEach((_,i)=>{
    const b = document.createElement('button');
    b.setAttribute('aria-label','Slide '+(i+1));
    b.setAttribute('data-testid','hero-dot-'+i);
    if(i===0) b.classList.add('is-active');
    b.addEventListener('click',()=>go(i));
    dotsWrap.appendChild(b);
  });
  const dots = $$('#heroDots button');
  let idx = 0, timer;
  function go(n){
    slides[idx].classList.remove('is-active'); dots[idx].classList.remove('is-active');
    idx = (n+slides.length) % slides.length;
    slides[idx].classList.add('is-active'); dots[idx].classList.add('is-active');
  }
  function tick(){ go(idx+1); }
  function start(){ timer = setInterval(tick, 5200); }
  function stop(){ clearInterval(timer); }
  start();
  document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());
})();

/* ----------------- CARD RENDERING ----------------- */
function cardHTML(p){
  const amen = p.amenities.slice(0,4).map(a => `<span>${a}</span>`).join('');
  const dots = p.images.slice(0,5).map((_,i)=>`<span class="${i===0?'is-active':''}"></span>`).join('');
  return `
  <a class="card" href="property-details.html?id=${p.id}" data-testid="card-${p.id}" data-id="${p.id}">
    <div class="card__media">
      <div class="card__img" data-img-list='${JSON.stringify(p.images.slice(0,5))}' style="background-image:url('${p.images[0]}')"></div>
      <span class="card__badge">${p.badge || p.type}</span>
      <button class="card__fav" aria-label="Save" data-testid="fav-${p.id}" onclick="event.preventDefault();event.stopPropagation();this.classList.toggle('is-on');this.innerHTML=this.classList.contains('is-on')?'<i class=\\'fas fa-heart\\' style=\\'color:#e64f4f\\'></i>':'<i class=\\'far fa-heart\\'></i>';"><i class="far fa-heart"></i></button>
      <div class="card__gallery">${dots}</div>
    </div>
    <div class="card__body">
      <div class="card__loc"><i class="fas fa-location-dot"></i> ${p.location}, ${p.state}</div>
      <h3 class="card__title">${p.name}</h3>
      <div class="card__meta">
        <span><i class="fas fa-user-group"></i> Up to ${p.guests} guests</span>
        <span><i class="fas fa-bed"></i> ${p.beds} BR</span>
        <span><i class="fas fa-star"></i> ${p.rating}</span>
      </div>
      <div class="card__amen">${amen}</div>
      <div class="card__foot">
        <div class="card__price">
          <strong>${fmt(p.price)}</strong>
          <small>per night · taxes extra</small>
        </div>
        <span class="card__cta">View <i class="fas fa-arrow-right"></i></span>
      </div>
    </div>
  </a>`;
}

/* ----------------- INDEX PAGE: GRIDS + FILTERS ----------------- */
(function indexPage(){
  const featuredGrid = $('#featuredGrid');
  const grid = $('#propertyGrid');
  if(!grid) return;

  // Featured
  if(featuredGrid){
    const featured = PROPERTIES.filter(p => p.featured);
    featuredGrid.innerHTML = featured.map(cardHTML).join('');
  }

  const fLoc = $('#fLocation'), fG = $('#fGuests'), fT = $('#fType'), fB = $('#fBudget');
  const apply = $('#applyFilters'), reset = $('#resetFilters');
  const empty = $('#emptyState'); const count = $('#resultCount');

  function render(){
    const loc = fLoc.value, g = +fG.value, t = fT.value, b = +fB.value;
    const list = PROPERTIES.filter(p => {
      if(loc && p.location !== loc) return false;
      if(g && p.guests < g) return false;
      if(t && p.type !== t) return false;
      if(b && p.price > b) return false;
      return true;
    });
    grid.innerHTML = list.map(cardHTML).join('');
    empty.hidden = list.length > 0;
    count.textContent = `Showing ${list.length} of ${PROPERTIES.length} properties`;
    initCardSliders();
  }
  apply.addEventListener('click', render);
  reset.addEventListener('click', () => { fLoc.value=''; fG.value=0; fT.value=''; fB.value=0; render(); });
  render();

  // global helper to filter by location from footer
  window.filterByLocation = (loc) => {
    fLoc.value = loc; render();
    document.getElementById('listings').scrollIntoView({behavior:'smooth'});
  };
})();

/* ----------------- CARD HOVER SLIDESHOW ----------------- */
function initCardSliders(){
  $$('.card__img[data-img-list]').forEach(el => {
    const imgs = JSON.parse(el.dataset.imgList);
    const dotsWrap = el.closest('.card__media').querySelector('.card__gallery');
    if(!dotsWrap) return;
    let i = 0, t;
    const card = el.closest('.card');
    card.addEventListener('mouseenter', () => {
      t = setInterval(() => {
        i = (i+1) % imgs.length;
        el.style.backgroundImage = `url('${imgs[i]}')`;
        dotsWrap.querySelectorAll('span').forEach((s,k) => s.classList.toggle('is-active', k===i));
      }, 1100);
    });
    card.addEventListener('mouseleave', () => {
      clearInterval(t); i = 0;
      el.style.backgroundImage = `url('${imgs[0]}')`;
      dotsWrap.querySelectorAll('span').forEach((s,k) => s.classList.toggle('is-active', k===0));
    });
  });
}

/* ----------------- LEAD POPUP ----------------- */
(function leadPopup(){
  const pop = $('#leadPopup'); if(!pop) return;
  const close = $('#popupClose'); const overlay = $('#popupOverlay');
  const form = $('#popupForm');
  const KEY = 'emb_popup_seen';
  let timer = null;
  const show = () => { if(sessionStorage.getItem(KEY)) return; pop.hidden = false; document.body.style.overflow='hidden'; };
  const hide = () => { pop.hidden = true; document.body.style.overflow=''; sessionStorage.setItem(KEY,'1'); if(timer){clearTimeout(timer);timer=null;} };

  if(!sessionStorage.getItem(KEY)){
    timer = setTimeout(show, 9000);
    let shown=false;
    const onScroll = () => {
      if(shown || sessionStorage.getItem(KEY)){ window.removeEventListener('scroll', onScroll); return; }
      if((window.scrollY/(document.body.scrollHeight-window.innerHeight)) > 0.4){ show(); shown=true; }
    };
    window.addEventListener('scroll', onScroll, {passive:true});
  }
  close.addEventListener('click', hide);
  overlay.addEventListener('click', hide);
  document.addEventListener('keydown', (e)=>{if(e.key==='Escape' && !pop.hidden) hide();});

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const text = `*EaseMyBooking — Insider Offer Claim*%0A`+
      `Name: ${fd.get('name')}%0A`+
      `Phone: ${fd.get('phone')}%0A`+
      `Requesting: 10% OFF first villa booking`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, '_blank');
    hide();
  });
})();

/* ----------------- PROPERTY DETAIL PAGE ----------------- */
(function detailPage(){
  const root = $('#detailRoot'); if(!root) return;
  const id = param('id');
  const p = PROPERTIES.find(x => x.id === id) || PROPERTIES[0];

  // Meta
  document.title = `${p.name} · ${p.location} | EaseMyBooking`;

  // Info fields
  $('#dType').textContent = p.type;
  $('#dTitle').textContent = p.name;
  $('#dAddress').textContent = p.address;
  $('#dLocation').querySelector('span').textContent = `${p.location}, ${p.state}`;

  const addressEl = $('#dAddress');
  if (addressEl) addressEl.textContent = p.address || '';
  $('#dGuests').textContent = p.guests;
  $('#dBeds').textContent = p.beds;
  $('#dBaths').textContent = p.baths;
  $('#dRating').textContent = p.rating + ' / 5';
  $('#dDescription').textContent = p.description;
  $('#dPrice').textContent = fmt(p.price);

  // Amenities
  $('#dAmenities').innerHTML = p.amenities.map(a => `<div><i class="fas ${amenIcon(a)}"></i> ${a}</div>`).join('');

  // Gallery
  const mainImg = $('#galleryMain'); const thumbsWrap = $('#galleryThumbs');
  const count = $('#galleryCount');
  let gIdx = 0;
  function setMain(i){
    gIdx = (i + p.images.length) % p.images.length;
    mainImg.src = p.images[gIdx];
    mainImg.alt = `${p.name} – view ${gIdx+1}`;
    thumbsWrap.querySelectorAll('button').forEach((b,k)=>b.classList.toggle('is-active', k===gIdx));
    count.textContent = `${gIdx+1} / ${p.images.length}`;
  }
  thumbsWrap.innerHTML = p.images.map((src,i)=>`<button data-testid="thumb-${i}" style="background-image:url('${src}')" aria-label="View ${i+1}"></button>`).join('');
  thumbsWrap.querySelectorAll('button').forEach((b,i)=>b.addEventListener('click',()=>setMain(i)));
  $('#galleryPrev').addEventListener('click',()=>setMain(gIdx-1));
  $('#galleryNext').addEventListener('click',()=>setMain(gIdx+1));
  document.addEventListener('keydown',(e)=>{
    if(e.key==='ArrowLeft') setMain(gIdx-1);
    if(e.key==='ArrowRight') setMain(gIdx+1);
  });
  setMain(0);

  // Similar
  const similar = PROPERTIES.filter(x => x.id !== p.id && (x.type === p.type || x.location === p.location)).slice(0,3);
  $('#similarGrid').innerHTML = (similar.length ? similar : PROPERTIES.slice(0,3)).map(cardHTML).join('');
  initCardSliders();

  // Form
  const form = $('#enquiryForm');
  // sensible defaults for dates
  const today = new Date(); const d1 = new Date(today); d1.setDate(d1.getDate()+7);
  const d2 = new Date(d1); d2.setDate(d2.getDate()+2);
  form.checkin.min = today.toISOString().split('T')[0];
  form.checkout.min = today.toISOString().split('T')[0];
  form.checkin.value = d1.toISOString().split('T')[0];
  form.checkout.value = d2.toISOString().split('T')[0];

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const msg = `*EaseMyBooking — Villa Enquiry*%0A%0A`+
      `*Property:* ${p.name}%0A`+
      `*Location:* ${p.location}, ${p.state}%0A`+
      `*Starting Price:* ${fmt(p.price)}/night%0A`+
      `--------------------------%0A`+
      `*Name:* ${fd.get('name')}%0A`+
      `*Phone:* ${fd.get('phone')}%0A`+
      `*Email:* ${fd.get('email')}%0A`+
      `*Check-in:* ${fd.get('checkin')}%0A`+
      `*Check-out:* ${fd.get('checkout')}%0A`+
      `*Guests:* ${fd.get('guests')}%0A`+
      `*Occasion:* ${fd.get('occasion') || 'N/A'}%0A`+
      `*Notes:* ${(fd.get('notes')||'').toString().slice(0,400) || 'N/A'}%0A%0A`+
      `Sent from easemybooking villas page.`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
  });
})();

/* ----------------- LIST PROPERTY PAGE ----------------- */
(function listPage(){
  const form = $('#ownerForm'); if(!form) return;

  function buildMessage(){
    const fd = new FormData(form);
    const amen = fd.getAll('amenities');
    const lines = [
      `*EaseMyBooking — New Property Submission*`,
      ``,
      `*Owner:* ${fd.get('ownerName')}`,
      `*WhatsApp:* ${fd.get('ownerPhone')}`,
      `*Email:* ${fd.get('ownerEmail')}`,
      `--------------------------`,
      `*Property:* ${fd.get('propName')}`,
      `*Type:* ${fd.get('propType')}`,
      `*City:* ${fd.get('propCity')}`,
      `*Address:* ${fd.get('propAddress')}`,
      `*Capacity:* ${fd.get('propGuests')} guests · ${fd.get('propBeds')} BR · ${fd.get('propBaths')} Bath`,
      `*Nightly:* ₹${fd.get('propPrice')}` + (fd.get('propPriceWknd') ? `  ·  *Weekend:* ₹${fd.get('propPriceWknd')}` : ''),
      `*Amenities:* ${amen.join(', ') || 'N/A'}`,
      ``,
      `*Description:*`,
      `${fd.get('propDesc')}`,
      ``,
      `*Image Links:* ${fd.get('propImages') || 'N/A'}`
    ];
    return lines.join('\n');
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(!form.reportValidity()) return;
    const text = buildMessage();
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  });

  $('#ownerEmailBtn').addEventListener('click', () => {
    if(!form.reportValidity()) return;
    const text = buildMessage();
    const subject = encodeURIComponent('New Property Submission — ' + (form.propName.value || 'EaseMyBooking'));
    const body = encodeURIComponent(text);
    window.location.href = `mailto:${OWNER_EMAIL}?subject=${subject}&body=${body}`;
  });
})();

/* ----------------- IntersectionObserver entrance animations ----------------- */
(function entrances(){
  const els = $$('.card, .benefit, .faq__item, .section__title, .eyebrow, .hero__stats, .listHero__metrics, .enquiry');
  if(!('IntersectionObserver' in window)) return;
  els.forEach(el => { el.style.opacity='0'; el.style.transform='translateY(20px)'; el.style.transition='opacity .7s cubic-bezier(.22,.61,.36,1), transform .7s cubic-bezier(.22,.61,.36,1)'; });
  const io = new IntersectionObserver((entries)=>{
    entries.forEach((en,i)=>{
      if(en.isIntersecting){
        setTimeout(()=>{ en.target.style.opacity='1'; en.target.style.transform='translateY(0)'; }, i*40);
        io.unobserve(en.target);
      }
    });
  },{threshold:.12, rootMargin:'0px 0px -60px 0px'});
  els.forEach(el => io.observe(el));
})();
