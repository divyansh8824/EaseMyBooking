/* ============================================================
   EaseMyBooking — Travel (travel-script.js)
   Pure vanilla JS. Edit content arrays below to customise.
   ============================================================ */

/* ============================================================
   GLOBAL CONFIG — EDIT WhatsApp & email here
   ============================================================ */
const WA_NUMBER   = '918824880979';            // WhatsApp number (E.164 without +)
const OWNER_EMAIL = 'info@easemybooking.in';

/* ============================================================
   SERVICES DATA  (cards on travel.html — each opens WhatsApp)
   To add/remove a service: edit this array.
   ============================================================ */
const SERVICES = [
  {
    id:'hotel',
    icon:'fa-bed',
    title:'Hotel Booking',
    desc:'Hand-picked 4★ & 5★ hotels worldwide with member rates — pay at hotel or upfront.',
    wa:'Hi EaseMyBooking, I\'d like a hotel booking quote. City: ____ Dates: ____ Guests: ____'
  },
  {
    id:'visa',
    icon:'fa-passport',
    title:'Visa Assistance',
    desc:'End-to-end visa support for 60+ countries — document checklist, appointment, follow-up.',
    wa:'Hi EaseMyBooking, I need visa assistance for ____ (country). Travel month: ____'
  },
  {
    id:'insurance',
    icon:'fa-shield-heart',
    title:'Travel Insurance',
    desc:'Bajaj / HDFC ERGO travel insurance — medical, baggage, trip-cancel cover from ₹399.',
    wa:'Hi EaseMyBooking, I\'d like travel insurance for ____ country. Travellers: ____ Dates: ____'
  },
  {
    id:'flight',
    icon:'fa-plane-up',
    title:'Flight Booking',
    desc:'Best fares on domestic & international flights — including premium economy & business.',
    wa:'Hi EaseMyBooking, please share flight options. From: ____ To: ____ Dates: ____ Pax: ____'
  }
];

/* ============================================================
   PACKAGES DATA
   To add/edit a package: copy a block, update id, region, fields.
   `region`        : 'Domestic' | 'International'
   `tags`          : badges shown on card (e.g. 'Trending', 'Honeymoon')
   `savePct`       : optional discount %
   `image`         : main card + hero image
   `highlights`    : bullet points on card + grid on detail page
   `itinerary`     : day-wise array {day, title, desc}
   `inclusions`    : array of strings
   `exclusions`    : array of strings
   `hotels`        : [{city, name, stars, note, image}]
   `activities`    : [{icon, title, desc}]
   ============================================================ */
const PACKAGES = [
  // ============== DOMESTIC ==============
  {
    id:'kashmir-paradise',
    region:'Domestic',
    title:'Kashmir Paradise',
    cities:'Srinagar · Gulmarg · Pahalgam',
    tagline:'Houseboats on Dal Lake, snow-capped meadows of Gulmarg and pine-scented valleys of Pahalgam — Kashmir at its most cinematic.',
    duration:'6 Days · 5 Nights',
    durationNights:5,
    price:42000, priceOld:52000, savePct:18,
    rating:4.9,
    tags:['Trending','Family'],
    type:['Domestic'],
    image:'https://images.unsplash.com/photo-1566837497312-7be4b9aaae5e?w=1400&q=85',
    overview:'Discover the crown of India with this carefully crafted 6-day journey through Kashmir\'s most iconic landscapes. Stay in a traditional houseboat on Dal Lake, ride the Gulmarg Gondola to snow country, and meander through Pahalgam\'s pine-scented valleys — all with private transfers and an English-speaking local guide.',
    highlights:[
      {icon:'fa-water',text:'Shikara ride on Dal Lake at sunset'},
      {icon:'fa-snowflake',text:'Gulmarg Gondola Phase II (highest cable car)'},
      {icon:'fa-mountain',text:'Day trip to Betaab Valley & Aru Valley'},
      {icon:'fa-utensils',text:'Authentic Wazwan dinner at a Kashmiri home'},
      {icon:'fa-tree',text:'Mughal Gardens: Shalimar, Nishat, Chashme Shahi'},
      {icon:'fa-bed',text:'Premium houseboat + 4★ hotels throughout'}
    ],
    itinerary:[
      {day:'Day 1',title:'Arrive Srinagar · Houseboat on Dal Lake',desc:'Airport pickup, transfer to a deluxe houseboat. Evening Shikara ride around Dal Lake. Welcome dinner of Rogan Josh and Kahwa.'},
      {day:'Day 2',title:'Srinagar · Mughal Gardens & Old City',desc:'Visit Shalimar, Nishat & Chashme Shahi gardens. Afternoon walk through Old Srinagar — Jamia Masjid, Hari Parbat, Sufi shrines.'},
      {day:'Day 3',title:'Srinagar → Gulmarg',desc:'2-hour drive to Gulmarg (8,700 ft). Gondola Phase I to Kongdoori. Optional Phase II to Apharwat Peak (extra). Pony rides and snow play in season.'},
      {day:'Day 4',title:'Gulmarg → Pahalgam',desc:'Scenic 5-hour drive via Awantipora ruins and saffron fields of Pampore. Check into a riverside 4★ in Pahalgam.'},
      {day:'Day 5',title:'Pahalgam · Betaab & Aru Valleys',desc:'Full-day local sightseeing including Betaab Valley (film location of the iconic 80s blockbuster), Chandanwari and Aru Valley. River-side picnic lunch.'},
      {day:'Day 6',title:'Pahalgam → Srinagar Airport',desc:'Morning at leisure, check-out, scenic drive back to Srinagar (2.5 hrs), drop at SXR airport with packed lunch.'}
    ],
    inclusions:[
      '5 nights accommodation — 1N Houseboat + 2N Srinagar 4★ + 1N Gulmarg + 1N Pahalgam',
      'Daily breakfast + 5 dinners (Indian/Kashmiri menu)',
      'Private AC vehicle for all transfers & sightseeing',
      'English-speaking local guide for major sightseeing days',
      'Shikara ride (1 hour) on Dal Lake',
      'Gondola Phase I tickets in Gulmarg',
      'All hotel taxes & GST',
      '24×7 on-trip WhatsApp support'
    ],
    exclusions:[
      'Airfare to/from Srinagar (we can book — ex-Delhi from ₹6,500)',
      'Gondola Phase II tickets, pony rides & ATV rides (extra)',
      'Lunches & personal expenses',
      'Travel insurance (optional add-on)',
      'Anything not mentioned in inclusions'
    ],
    hotels:[
      {city:'Srinagar',name:'WelcomHotel by ITC',stars:4,note:'Centrally located near Dal Lake with mountain views.',image:'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80'},
      {city:'Dal Lake',name:'Royal Heritage Houseboat',stars:4,note:'Traditional cedar-wood houseboat with private deck.',image:'https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=600&q=80'},
      {city:'Gulmarg',name:'The Khyber Himalayan Resort',stars:5,note:'Ski-in/ski-out luxury at the foot of Apharwat (premium upgrade available).',image:'https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?w=600&q=80'},
      {city:'Pahalgam',name:'Hotel Heevan',stars:4,note:'Riverside cottages with Lidder River views.',image:'https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=600&q=80'}
    ],
    activities:[
      {icon:'fa-water',title:'Shikara Sunset Ride',desc:'1-hour traditional boat ride across Dal Lake'},
      {icon:'fa-snowflake',title:'Gondola Phase II',desc:'Cable car to 13,500 ft (optional)'},
      {icon:'fa-horse',title:'Pony Trail · Aru Valley',desc:'Half-day mountain trail with local pony-walla'},
      {icon:'fa-utensils',title:'Wazwan Experience',desc:'7-course Kashmiri feast at a local home'},
      {icon:'fa-leaf',title:'Saffron Fields',desc:'Walk through Pampore saffron farms (Oct-Nov)'},
      {icon:'fa-skiing',title:'Skiing in Gulmarg',desc:'Add-on ski package Dec-March'}
    ]
  },
  {
    id:'kerala-backwaters',
    region:'Domestic',
    title:'Kerala Backwaters & Beaches',
    cities:'Munnar · Thekkady · Alleppey · Kovalam',
    tagline:'Tea-carpet hills of Munnar, spice plantations of Thekkady, a private houseboat on the Alleppey backwaters and lazy beach days at Kovalam.',
    duration:'7 Days · 6 Nights',
    durationNights:6,
    price:38000, priceOld:46000, savePct:17,
    rating:4.8,
    tags:['Honeymoon','Family'],
    type:['Domestic','Honeymoon','Beach'],
    image:'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1400&q=85',
    overview:'God\'s Own Country at its most romantic — emerald tea estates, fragrant cardamom plantations, a private overnight houseboat drifting through palm-fringed backwaters and palm-lined Kovalam beaches.',
    highlights:[
      {icon:'fa-mug-hot',text:'Tea factory tour in Munnar'},
      {icon:'fa-leaf',text:'Spice plantation walk in Thekkady'},
      {icon:'fa-ship',text:'Private deluxe houseboat on Vembanad Lake'},
      {icon:'fa-spa',text:'Complimentary Ayurvedic massage in Kovalam'},
      {icon:'fa-utensils',text:'Authentic Kerala sadya on banana leaf'},
      {icon:'fa-umbrella-beach',text:'2 nights beach-front in Kovalam'}
    ],
    itinerary:[
      {day:'Day 1',title:'Arrive Cochin → Munnar',desc:'Airport pickup, scenic 4-hour drive to Munnar (5,200 ft) via Cheeyappara Waterfalls. Check-in resort overlooking tea estates.'},
      {day:'Day 2',title:'Munnar Sightseeing',desc:'Tea Museum, Mattupetty Dam, Echo Point, Kundala Lake & Top Station viewpoint. Evening at leisure.'},
      {day:'Day 3',title:'Munnar → Thekkady',desc:'Drive to Thekkady (3.5 hrs). Spice plantation walk, Kathakali show, optional bamboo rafting at Periyar.'},
      {day:'Day 4',title:'Thekkady → Alleppey Houseboat',desc:'Drive to Alleppey. Board your private deluxe houseboat at noon. Cruise through backwaters with all meals on board. Overnight on the houseboat.'},
      {day:'Day 5',title:'Disembark → Kovalam',desc:'Disembark at 9 AM. Transfer to Kovalam (4 hrs). Beach resort check-in. Sunset at Lighthouse Beach.'},
      {day:'Day 6',title:'Kovalam · Beach + Ayurveda',desc:'Morning at leisure. Complimentary 60-min Ayurvedic massage at a certified centre. Sunset cruise (optional).'},
      {day:'Day 7',title:'Kovalam → Trivandrum Airport',desc:'Late check-out, transfer to Trivandrum airport (45 min). Tour ends.'}
    ],
    inclusions:[
      '6 nights — 2N Munnar + 1N Thekkady + 1N Houseboat + 2N Kovalam',
      'Daily breakfast + all meals on houseboat day',
      'Private AC vehicle for all transfers',
      'Tea factory & spice plantation entries',
      'Kathakali performance ticket',
      'Complimentary 60-min Ayurvedic massage at Kovalam',
      'All taxes, parking, tolls',
      '24×7 on-trip support'
    ],
    exclusions:[
      'Airfare (we can book — ex-Mumbai from ₹5,500)',
      'Lunches & dinners except mentioned',
      'Bamboo rafting & periyar boat extra',
      'Personal expenses, tips, laundry'
    ],
    hotels:[
      {city:'Munnar',name:'Tea Country Resort',stars:4,note:'Plantation-view rooms with private balconies.',image:'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80'},
      {city:'Thekkady',name:'Spice Village by CGH Earth',stars:4,note:'Eco-resort cottages amid a cardamom plantation.',image:'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=600&q=80'},
      {city:'Alleppey',name:'Deluxe Houseboat',stars:4,note:'1-BR private houseboat with on-board chef.',image:'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80'},
      {city:'Kovalam',name:'Vivanta Kovalam',stars:5,note:'Cliff-top beach resort overlooking Arabian Sea.',image:'https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=600&q=80'}
    ],
    activities:[
      {icon:'fa-mug-hot',title:'Tea Tasting',desc:'Munnar Tea Museum tour & tasting flight'},
      {icon:'fa-leaf',title:'Spice Walk',desc:'Guided plantation walk in Thekkady'},
      {icon:'fa-masks-theater',title:'Kathakali Show',desc:'Classical performance + make-up demo'},
      {icon:'fa-ship',title:'Sunset Cruise',desc:'Kovalam coast sunset boat (optional)'},
      {icon:'fa-spa',title:'Ayurvedic Massage',desc:'Authentic 60-min full body massage'},
      {icon:'fa-fish',title:'Kerala Fish Curry',desc:'Cooking class with local chef'}
    ]
  },
  {
    id:'rajasthan-royal',
    region:'Domestic',
    title:'Royal Rajasthan',
    cities:'Jaipur · Jodhpur · Udaipur',
    tagline:'Pink City palaces, the blue lanes of Jodhpur and Udaipur\'s lakes — a 7-day royal odyssey through the land of kings.',
    duration:'7 Days · 6 Nights',
    durationNights:6,
    price:48000, priceOld:58000, savePct:17,
    rating:4.9,
    tags:['Heritage','Family'],
    type:['Domestic'],
    image:'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1400&q=85',
    overview:'Travel like royalty across three of Rajasthan\'s most iconic cities — Jaipur\'s Amber Fort, Jodhpur\'s Mehrangarh and Udaipur\'s Lake Pichola — in heritage hotels handpicked by our concierge.',
    highlights:[
      {icon:'fa-chess-rook',text:'Amber Fort with elephant ride entry'},
      {icon:'fa-shop',text:'Pink City bazaar walk with a local'},
      {icon:'fa-fort-awesome',text:'Mehrangarh Fort & Jaswant Thada'},
      {icon:'fa-water',text:'Lake Pichola boat ride at sunset'},
      {icon:'fa-palette',text:'Block-printing workshop in Bagru'},
      {icon:'fa-utensils',text:'Royal Rajasthani thali dinner'}
    ],
    itinerary:[
      {day:'Day 1',title:'Arrive Jaipur',desc:'Pickup at JAI airport, transfer to heritage hotel. Evening light & sound show at Amber Fort.'},
      {day:'Day 2',title:'Jaipur Sightseeing',desc:'Amber Fort (elephant ride entry), Hawa Mahal, City Palace, Jantar Mantar. Evening Pink City bazaar walk with local guide.'},
      {day:'Day 3',title:'Jaipur → Jodhpur',desc:'Drive to Jodhpur (6 hrs) with stop at Pushkar Brahma Temple. Check into a haveli hotel in the blue city.'},
      {day:'Day 4',title:'Jodhpur Sightseeing',desc:'Mehrangarh Fort, Jaswant Thada, Mandore Gardens. Sunset on the Fort ramparts. Optional: Bishnoi village safari.'},
      {day:'Day 5',title:'Jodhpur → Udaipur',desc:'Drive to Udaipur (5 hrs) via Ranakpur Jain Temple complex. Sunset boat ride on Lake Pichola.'},
      {day:'Day 6',title:'Udaipur Sightseeing',desc:'City Palace, Jagdish Temple, Sahelion ki Bari, Fateh Sagar. Evening Bagore-ki-Haveli cultural show.'},
      {day:'Day 7',title:'Departure Udaipur',desc:'Morning at leisure. Transfer to UDR airport.'}
    ],
    inclusions:[
      '6 nights heritage hotels — 2N Jaipur + 2N Jodhpur + 2N Udaipur',
      'Daily breakfast + 2 dinners',
      'AC sedan with English-speaking driver',
      'Local guides at major monuments',
      'All monument entries (Amber, Mehrangarh, City Palace, Ranakpur)',
      'Lake Pichola boat ride',
      'Elephant ride entry to Amber Fort',
      'All taxes & 24×7 support'
    ],
    exclusions:[
      'Airfare',
      'Lunches & dinners not mentioned',
      'Camera fees at monuments',
      'Personal expenses'
    ],
    hotels:[
      {city:'Jaipur',name:'Samode Haveli',stars:5,note:'250-year-old heritage haveli in the heart of the Pink City.',image:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80'},
      {city:'Jodhpur',name:'RAAS Jodhpur',stars:5,note:'Boutique heritage hotel with Mehrangarh views.',image:'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=600&q=80'},
      {city:'Udaipur',name:'Trident Udaipur',stars:5,note:'Lake-front resort with panoramic Aravalli views.',image:'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&q=80'}
    ],
    activities:[
      {icon:'fa-chess-rook',title:'Amber Fort',desc:'Hilltop fort with elephant ride'},
      {icon:'fa-shop',title:'Bazaar Walk',desc:'Pink City local guided walk'},
      {icon:'fa-water',title:'Lake Pichola',desc:'Sunset boat with Jag Mandir stop'},
      {icon:'fa-palette',title:'Block Printing',desc:'Bagru village workshop'},
      {icon:'fa-masks-theater',title:'Cultural Show',desc:'Bagore-ki-Haveli folk dance'},
      {icon:'fa-utensils',title:'Royal Thali',desc:'Authentic Rajasthani 12-dish dinner'}
    ]
  },
  {
    id:'goa-getaway',
    region:'Domestic',
    title:'Goa Beach Getaway',
    cities:'North Goa · South Goa',
    tagline:'Sun-soaked beaches, beach shacks, Portuguese cafés and lively nights — Goa in 5 days, our way.',
    duration:'5 Days · 4 Nights',
    durationNights:4,
    price:22000, priceOld:28000, savePct:21,
    rating:4.7,
    tags:['Beach','Trending'],
    type:['Domestic','Beach'],
    image:'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1400&q=85',
    overview:'5 days, 4 nights split between North Goa\'s buzz and South Goa\'s calm — with shack-hopping, river cruises, water sports and a fado dinner at a Portuguese villa.',
    highlights:[
      {icon:'fa-umbrella-beach',text:'2N North + 2N South Goa'},
      {icon:'fa-water',text:'Mandovi River cruise with live music'},
      {icon:'fa-person-swimming',text:'Water sports at Baga (parasail + jetski)'},
      {icon:'fa-utensils',text:'Fado dinner at a Portuguese villa'},
      {icon:'fa-church',text:'Old Goa heritage walk'},
      {icon:'fa-mug-saucer',text:'Café-hopping in Assagao & Fontainhas'}
    ],
    itinerary:[
      {day:'Day 1',title:'Arrive North Goa',desc:'Pickup from GOI/Mopa airport. Check into Calangute/Candolim resort. Sunset at Baga Beach + dinner at Britto\'s.'},
      {day:'Day 2',title:'North Goa Beaches',desc:'Anjuna, Vagator, Chapora Fort. Lunch at Thalassa (Greek). Evening Mandovi River cruise with live music & dance.'},
      {day:'Day 3',title:'North → South Goa',desc:'Old Goa churches (Basilica of Bom Jesus, Se Cathedral), Spice Plantation. Transfer to South Goa beach resort.'},
      {day:'Day 4',title:'South Goa Beaches',desc:'Palolem, Colva and Benaulim. Water sports at Baga. Evening Fado dinner at a 200-year-old Portuguese villa in Fontainhas.'},
      {day:'Day 5',title:'Departure',desc:'Leisurely breakfast. Drop at GOI/Mopa airport.'}
    ],
    inclusions:[
      '4 nights — 2N North + 2N South Goa (4★ beach resorts)',
      'Daily breakfast + 1 fado dinner',
      'AC sedan for all transfers & sightseeing',
      'Mandovi River cruise tickets',
      'Water sports voucher (parasail + jetski) at Baga',
      'Spice Plantation entry & lunch',
      'All taxes & 24×7 support'
    ],
    exclusions:[
      'Airfare',
      'Lunches & dinners not mentioned',
      'Casino entry fees',
      'Personal expenses'
    ],
    hotels:[
      {city:'North Goa',name:'Lazylagoon Sarovar',stars:4,note:'Pool-view rooms 200m from Baga Beach.',image:'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&q=80'},
      {city:'South Goa',name:'Radisson Blu Cavelossim',stars:5,note:'Beach-front 5★ on Cavelossim Beach.',image:'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80'}
    ],
    activities:[
      {icon:'fa-person-swimming',title:'Water Sports',desc:'Parasailing + Jetski at Baga'},
      {icon:'fa-ship',title:'River Cruise',desc:'Sunset Mandovi cruise + live music'},
      {icon:'fa-utensils',title:'Fado Night',desc:'Portuguese dinner & live fado music'},
      {icon:'fa-church',title:'Old Goa',desc:'Basilica & Cathedral heritage walk'},
      {icon:'fa-leaf',title:'Spice Plantation',desc:'Tour + traditional lunch'},
      {icon:'fa-mug-saucer',title:'Café Hop',desc:'Assagao & Fontainhas cafés'}
    ]
  },
  // ============== INTERNATIONAL ==============
  {
    id:'bali-bliss',
    region:'International',
    title:'Bali Bliss',
    cities:'Ubud · Seminyak · Nusa Dua',
    tagline:'Rice terraces, jungle villas, temple sunrises and Seminyak beach clubs — Bali in 7 unforgettable days.',
    duration:'7 Days · 6 Nights',
    durationNights:6,
    price:95000, priceOld:118000, savePct:19,
    rating:4.9,
    tags:['Honeymoon','Trending'],
    type:['International','Honeymoon','Beach'],
    image:'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1400&q=85',
    overview:'A balanced 7-day Bali experience splitting time between Ubud\'s spiritual jungle, Seminyak\'s beach-club glamour and Nusa Dua\'s quiet luxury. Includes private pool villa in Ubud and a sunrise trek up Mount Batur.',
    highlights:[
      {icon:'fa-mountain',text:'Sunrise trek up Mount Batur (active volcano)'},
      {icon:'fa-water',text:'Tegallalang rice terraces & swing'},
      {icon:'fa-spa',text:'2 spa sessions (Balinese massage + flower bath)'},
      {icon:'fa-utensils',text:'Romantic floating breakfast in private pool villa'},
      {icon:'fa-place-of-worship',text:'Tanah Lot & Uluwatu sunset temples'},
      {icon:'fa-umbrella-beach',text:'Beach club day at Potato Head or Finns'}
    ],
    itinerary:[
      {day:'Day 1',title:'Arrive Bali → Ubud',desc:'DPS airport pickup, 1.5-hr transfer to Ubud jungle. Welcome dinner & flower-bath spa session.'},
      {day:'Day 2',title:'Ubud Culture',desc:'Tegallalang rice terraces, Bali swing, Sacred Monkey Forest, Ubud Palace and traditional Kecak dance.'},
      {day:'Day 3',title:'Mount Batur Sunrise',desc:'2 AM pickup for the sunrise trek (volcano summit by 6 AM). Breakfast at the rim. Afternoon at leisure with a Balinese massage.'},
      {day:'Day 4',title:'Ubud → Seminyak',desc:'Visit Tirta Empul holy spring & coffee plantation en route. Check in to Seminyak beach hotel. Sunset at Petitenget Beach.'},
      {day:'Day 5',title:'Seminyak · Beach Club',desc:'Beach club day pass (Potato Head/Finns). Optional surf lesson at Kuta Beach. Evening Tanah Lot temple sunset.'},
      {day:'Day 6',title:'Nusa Dua + Uluwatu',desc:'Transfer to Nusa Dua luxury resort. Afternoon Uluwatu Temple + Kecak fire dance + seafood dinner at Jimbaran Bay.'},
      {day:'Day 7',title:'Departure',desc:'Beach morning, late check-out, transfer to DPS airport.'}
    ],
    inclusions:[
      '6 nights — 3N Ubud villa with private pool + 2N Seminyak 4★ + 1N Nusa Dua 5★',
      'Daily breakfast + 2 dinners + floating breakfast',
      'Airport transfers + private AC car for all sightseeing',
      'Mount Batur sunrise trek with local guide & breakfast',
      'All entries: rice terraces, monkey forest, swing, Tirta Empul, Tanah Lot, Uluwatu',
      '2 spa sessions (60 min each)',
      'Beach club day pass with food credit',
      'Jimbaran seafood dinner',
      'Local SIM card & all taxes'
    ],
    exclusions:[
      'International flights (we can book — ex-Delhi from ₹28,000)',
      'Visa-on-arrival fee (₹3,000 paid on landing)',
      'Travel insurance (optional add-on — ₹699)',
      'Lunches & extra dinners',
      'Surf lesson & other optional activities'
    ],
    hotels:[
      {city:'Ubud',name:'Komaneka at Bisma',stars:5,note:'Private pool villa nestled in jungle with valley views.',image:'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80'},
      {city:'Seminyak',name:'The Anvaya Beach Resort',stars:5,note:'Beach-front resort 5-min walk to Petitenget.',image:'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&q=80'},
      {city:'Nusa Dua',name:'The Mulia Resort',stars:5,note:'Award-winning beach-front luxury resort.',image:'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80'}
    ],
    activities:[
      {icon:'fa-mountain',title:'Batur Sunrise Trek',desc:'Volcano summit at dawn + breakfast'},
      {icon:'fa-water',title:'Rice Terraces',desc:'Tegallalang walk + Bali swing'},
      {icon:'fa-spa',title:'Balinese Spa',desc:'2 sessions in private villa'},
      {icon:'fa-utensils',title:'Floating Breakfast',desc:'Romantic in-pool breakfast'},
      {icon:'fa-place-of-worship',title:'Sunset Temples',desc:'Tanah Lot + Uluwatu Kecak'},
      {icon:'fa-umbrella-beach',title:'Beach Club',desc:'Potato Head day pass'}
    ]
  },
  {
    id:'thailand-twin',
    region:'International',
    title:'Thailand Twin City',
    cities:'Bangkok · Phuket · Phi Phi',
    tagline:'City glitz of Bangkok, island bliss of Phuket and a private speedboat to the Phi Phi islands — Thailand done right in 7 days.',
    duration:'7 Days · 6 Nights',
    durationNights:6,
    price:55000, priceOld:68000, savePct:19,
    rating:4.8,
    tags:['Family','Beach'],
    type:['International','Beach'],
    image:'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=1400&q=85',
    overview:'Cover Thailand\'s two best contrasts — Bangkok\'s skyline glitz and Phuket\'s emerald coast — including a private speedboat tour to Phi Phi & Maya Bay.',
    highlights:[
      {icon:'fa-place-of-worship',text:'Bangkok Grand Palace + Wat Pho'},
      {icon:'fa-water',text:'Floating market + canal long-tail tour'},
      {icon:'fa-ship',text:'Phi Phi & Maya Bay speedboat (private/shared)'},
      {icon:'fa-mug-hot',text:'Thai cooking class'},
      {icon:'fa-utensils',text:'Asiatique Riverfront dinner cruise'},
      {icon:'fa-umbrella-beach',text:'Patong & Karon Beach time'}
    ],
    itinerary:[
      {day:'Day 1',title:'Arrive Bangkok',desc:'BKK airport pickup, transfer to Sukhumvit hotel. Evening at MBK or Asiatique Riverfront.'},
      {day:'Day 2',title:'Bangkok City Tour',desc:'Grand Palace, Wat Pho (Reclining Buddha), Wat Arun. Evening dinner cruise on Chao Phraya River.'},
      {day:'Day 3',title:'Floating Market + Cooking',desc:'Damnoen Saduak floating market in the morning. Thai cooking class in the afternoon (you cook + eat).'},
      {day:'Day 4',title:'Bangkok → Phuket',desc:'Morning flight to HKT (included). Check in to Patong beach hotel. Evening Bangla Road & Phuket Fantasea show.'},
      {day:'Day 5',title:'Phi Phi Islands Tour',desc:'Speedboat day-tour: Maya Bay, Phi Phi Don, Bamboo Island, Khai Nok. Snorkelling stops + Thai buffet lunch on island.'},
      {day:'Day 6',title:'Phuket City + Big Buddha',desc:'Big Buddha, Wat Chalong, Karon viewpoint and Phuket Old Town walk. Sunset at Promthep Cape.'},
      {day:'Day 7',title:'Departure Phuket',desc:'Drop at HKT airport.'}
    ],
    inclusions:[
      '6 nights — 3N Bangkok 4★ + 3N Phuket 4★',
      'Daily breakfast',
      'BKK → HKT domestic flight (with check-in baggage)',
      'All transfers in private AC vehicle',
      'Bangkok city tour with English guide',
      'Floating market + Thai cooking class',
      'Phi Phi speedboat tour with lunch + snorkelling gear',
      'Phuket city sightseeing',
      'Chao Phraya dinner cruise',
      'All taxes & 24×7 support'
    ],
    exclusions:[
      'International flights (we can book — ex-Mumbai from ₹22,000)',
      'Visa fee (₹2,500 — visa-on-arrival for Indians)',
      'Travel insurance',
      'Lunches & dinners not mentioned',
      'Optional shows (Phuket Fantasea/Simon Cabaret)'
    ],
    hotels:[
      {city:'Bangkok',name:'Pullman Bangkok Grande Sukhumvit',stars:5,note:'Central location near BTS Asok station.',image:'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=600&q=80'},
      {city:'Phuket',name:'Novotel Phuket Resort',stars:4,note:'Hill-top resort with Patong views & free shuttle to beach.',image:'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&q=80'}
    ],
    activities:[
      {icon:'fa-place-of-worship',title:'Grand Palace',desc:'Bangkok\'s most iconic complex'},
      {icon:'fa-ship',title:'Phi Phi Speedboat',desc:'Maya Bay + 4 islands tour'},
      {icon:'fa-utensils',title:'Cooking Class',desc:'4-dish Thai class with chef'},
      {icon:'fa-water',title:'Floating Market',desc:'Damnoen Saduak experience'},
      {icon:'fa-moon',title:'Dinner Cruise',desc:'Chao Phraya river cruise'},
      {icon:'fa-camera',title:'Promthep Sunset',desc:'Phuket\'s best sunset point'}
    ]
  },
  {
    id:'dubai-deluxe',
    region:'International',
    title:'Dubai Deluxe',
    cities:'Dubai · Abu Dhabi',
    tagline:'Burj Khalifa skyline, desert dunes, Yas Island theme parks and the new Museum of the Future — a 5-day Emirati indulgence.',
    duration:'5 Days · 4 Nights',
    durationNights:4,
    price:78000, priceOld:92000, savePct:15,
    rating:4.8,
    tags:['Luxury','Family'],
    type:['International'],
    image:'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1400&q=85',
    overview:'Skyline, desert and theme parks — Dubai\'s greatest hits in 5 days, with a side-trip to Abu Dhabi\'s Sheikh Zayed Grand Mosque and Yas Island.',
    highlights:[
      {icon:'fa-building',text:'Burj Khalifa Level 124 + 125 entry'},
      {icon:'fa-shop',text:'Dubai Mall, Gold & Spice Souks'},
      {icon:'fa-truck-monster',text:'Evening desert safari + BBQ + belly dance'},
      {icon:'fa-water',text:'Dhow cruise dinner at Marina'},
      {icon:'fa-mosque',text:'Sheikh Zayed Grand Mosque in Abu Dhabi'},
      {icon:'fa-ticket',text:'Choice of Yas theme park (Ferrari World/Warner Bros)'}
    ],
    itinerary:[
      {day:'Day 1',title:'Arrive Dubai',desc:'DXB pickup, hotel check-in. Evening Dubai Mall + Burj Khalifa fountain show.'},
      {day:'Day 2',title:'Dubai City Tour + Burj Khalifa',desc:'Mosque, Palm Jumeirah, Atlantis, Madinat Jumeirah, Burj Al Arab photo stop. Evening Burj Khalifa Level 124/125 visit.'},
      {day:'Day 3',title:'Desert Safari',desc:'Free morning. Afternoon pick-up for evening desert safari — dune bashing, camel ride, sandboarding, sunset photos, BBQ dinner + Tanoura/belly dance.'},
      {day:'Day 4',title:'Abu Dhabi Day Trip',desc:'Sheikh Zayed Grand Mosque, Emirates Palace photo stop, Yas Island theme park of choice (Ferrari World OR Warner Bros World).'},
      {day:'Day 5',title:'Marina Cruise + Departure',desc:'Morning Dhow Cruise at Dubai Marina with buffet. Transfer to DXB airport.'}
    ],
    inclusions:[
      '4 nights at 4★ hotel in Dubai (Deira/Bur Dubai)',
      'Daily breakfast',
      'All transfers in private AC vehicle',
      'Dubai city tour with English guide',
      'Burj Khalifa 124/125 tickets',
      'Premium desert safari with BBQ',
      'Marina Dhow Cruise dinner',
      'Abu Dhabi day trip with mosque entry',
      '1 Yas Island theme park ticket',
      'All taxes & 24×7 support'
    ],
    exclusions:[
      'International flights (we can book — ex-Delhi from ₹18,000)',
      'UAE visa fee (we process — ₹6,500)',
      'Travel insurance',
      'Lunches & extra dinners',
      'Dubai Tourism Dirham (paid at hotel)'
    ],
    hotels:[
      {city:'Dubai',name:'Hyatt Place Al Rigga',stars:4,note:'2-min walk to Al Rigga Metro, central Deira.',image:'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80'}
    ],
    activities:[
      {icon:'fa-building',title:'Burj Khalifa',desc:'Level 124/125 observation deck'},
      {icon:'fa-truck-monster',title:'Desert Safari',desc:'Dune bash + BBQ + dance shows'},
      {icon:'fa-water',title:'Marina Dhow Cruise',desc:'Buffet dinner cruise'},
      {icon:'fa-mosque',title:'Grand Mosque',desc:'Sheikh Zayed Mosque entry'},
      {icon:'fa-ticket',title:'Yas Theme Park',desc:'Ferrari World OR Warner Bros'},
      {icon:'fa-shop',title:'Souks',desc:'Gold + Spice souk shopping walk'}
    ]
  },
  {
    id:'maldives-overwater',
    region:'International',
    title:'Maldives Overwater Escape',
    cities:'Male · Ari Atoll',
    tagline:'Private overwater villa, glass-bottom mornings, a candlelit beach dinner — 5 days of pure Maldivian magic.',
    duration:'5 Days · 4 Nights',
    durationNights:4,
    price:135000, priceOld:165000, savePct:18,
    rating:4.9,
    tags:['Honeymoon','Luxury'],
    type:['International','Honeymoon','Beach'],
    image:'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1400&q=85',
    overview:'A bucket-list Maldives honeymoon in a glass-floor overwater villa with all-meals plan, sunset dolphin cruise, candlelit beach dinner and a complimentary couple spa.',
    highlights:[
      {icon:'fa-house',text:'4 nights in private overwater villa'},
      {icon:'fa-utensils',text:'All-inclusive meals (breakfast, lunch, dinner)'},
      {icon:'fa-water',text:'Sunset dolphin cruise'},
      {icon:'fa-fish',text:'Snorkelling at house reef with gear'},
      {icon:'fa-heart',text:'Honeymoon set-up + couple spa (60 min)'},
      {icon:'fa-plane',text:'Domestic transfer (seaplane or speedboat)'}
    ],
    itinerary:[
      {day:'Day 1',title:'Arrive Male → Resort',desc:'MLE airport pickup, 30-min seaplane to resort. Welcome rituals + overwater villa check-in. Honeymoon bed set-up + sunset cocktails.'},
      {day:'Day 2',title:'House Reef + Spa',desc:'Morning snorkelling at house reef. Afternoon complimentary 60-min couple spa.'},
      {day:'Day 3',title:'Dolphin Cruise + Beach Dinner',desc:'Sunset dolphin cruise. Candlelit private beach dinner with menu of your choice.'},
      {day:'Day 4',title:'Excursions',desc:'Choice of: sandbank picnic / dolphin watching / Maafushi local island half-day.'},
      {day:'Day 5',title:'Departure',desc:'Late check-out, seaplane back to Male, MLE airport drop.'}
    ],
    inclusions:[
      '4 nights overwater villa (with deck access to lagoon)',
      'All-inclusive meals (breakfast, lunch, dinner with select drinks)',
      'Return seaplane / speedboat transfer from Male',
      'Honeymoon decoration + welcome amenities',
      '60-min couple spa session',
      'Sunset dolphin cruise',
      'Candlelit private beach dinner',
      'Snorkelling gear & house-reef access',
      'All taxes & 24×7 support'
    ],
    exclusions:[
      'International flights (we can book — ex-Delhi from ₹38,000)',
      'Maldives visa (free-on-arrival for Indians)',
      'Travel insurance (₹999 recommended)',
      'Premium drinks not in all-inclusive list',
      'Scuba diving & motorised water sports'
    ],
    hotels:[
      {city:'Ari Atoll',name:'Centara Grand Island Resort',stars:5,note:'Overwater villa with glass floor section + direct lagoon access.',image:'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&q=80'}
    ],
    activities:[
      {icon:'fa-water',title:'House Reef Snorkel',desc:'Direct lagoon access from villa'},
      {icon:'fa-fish',title:'Dolphin Cruise',desc:'Sunset boat with spinner dolphins'},
      {icon:'fa-utensils',title:'Beach Dinner',desc:'Private candlelit dinner'},
      {icon:'fa-spa',title:'Couple Spa',desc:'60-min over-water massage'},
      {icon:'fa-umbrella-beach',title:'Sandbank Picnic',desc:'Half-day private sandbank visit'},
      {icon:'fa-plane',title:'Seaplane Transfer',desc:'Iconic scenic flight to resort'}
    ]
  },
  {
    id:'singapore-malaysia',
    region:'International',
    title:'Singapore & Malaysia',
    cities:'Singapore · Kuala Lumpur · Genting',
    tagline:'Skyline gardens, Sentosa thrills, Twin Towers and a hill-top casino — the classic Southeast Asia twin-country sampler.',
    duration:'7 Days · 6 Nights',
    durationNights:6,
    price:88000, priceOld:108000, savePct:18,
    rating:4.7,
    tags:['Family','Trending'],
    type:['International'],
    image:'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=1400&q=85',
    overview:'A perfectly paced 7-day twin-country tour combining Singapore\'s futuristic cityscape with Malaysia\'s heritage and Genting\'s hill-top fun.',
    highlights:[
      {icon:'fa-tree-city',text:'Gardens by the Bay + Marina Bay Sands skydeck'},
      {icon:'fa-ticket',text:'Universal Studios Singapore (full day)'},
      {icon:'fa-cable-car',text:'Sentosa cable car + S.E.A. Aquarium'},
      {icon:'fa-city',text:'Petronas Twin Towers + Batu Caves'},
      {icon:'fa-mountain-sun',text:'Day in Genting Highlands'},
      {icon:'fa-ship',text:'Night Singapore river cruise'}
    ],
    itinerary:[
      {day:'Day 1',title:'Arrive Singapore',desc:'Changi airport pickup, hotel check-in. Evening Gardens by the Bay (OCBC Light Show free).'},
      {day:'Day 2',title:'Singapore City + Night Cruise',desc:'Half-day city tour (Merlion, Chinatown, Little India). Evening Singapore River Cruise + Marina Bay Sands skydeck.'},
      {day:'Day 3',title:'Sentosa Day',desc:'Cable car to Sentosa, S.E.A. Aquarium, Skyline Luge & sunset Wings of Time show.'},
      {day:'Day 4',title:'Universal Studios',desc:'Full day at Universal Studios with hotel transfers.'},
      {day:'Day 5',title:'Singapore → Kuala Lumpur',desc:'Morning flight to KL (included). City tour: Petronas Towers, KL Tower, National Mosque, Merdeka Square.'},
      {day:'Day 6',title:'Genting Highlands',desc:'Day trip to Genting via Batu Caves. Cable car up the hill. Theme park / casino at leisure. Return to KL.'},
      {day:'Day 7',title:'Departure KL',desc:'KLIA airport drop.'}
    ],
    inclusions:[
      '6 nights — 4N Singapore 4★ + 2N Kuala Lumpur 4★',
      'Daily breakfast',
      'SIN → KUL domestic flight',
      'All transfers in private AC vehicle',
      'Singapore half-day city tour + night cruise',
      'Universal Studios + Sentosa cable car + S.E.A. Aquarium tickets',
      'Gardens by the Bay (2 domes) entry',
      'Kuala Lumpur city tour + Petronas Towers entry',
      'Genting day trip with cable car',
      'All taxes & 24×7 support'
    ],
    exclusions:[
      'International flights (ex-Delhi from ₹26,000)',
      'Singapore SG Arrival Card (free)',
      'Malaysia eVisa (₹2,000 — we process)',
      'Travel insurance',
      'Lunches & dinners not mentioned',
      'Genting theme-park ride credits'
    ],
    hotels:[
      {city:'Singapore',name:'Park Hotel Clarke Quay',stars:4,note:'Riverside location 2-min walk to Clarke Quay MRT.',image:'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=600&q=80'},
      {city:'Kuala Lumpur',name:'Furama Bukit Bintang',stars:4,note:'Central KL, walking distance to Bukit Bintang.',image:'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80'}
    ],
    activities:[
      {icon:'fa-tree-city',title:'Gardens by the Bay',desc:'Cloud Forest + Flower Dome'},
      {icon:'fa-ticket',title:'Universal Studios',desc:'Full day theme park'},
      {icon:'fa-cable-car',title:'Sentosa Cable Car',desc:'+ S.E.A. Aquarium ticket'},
      {icon:'fa-ship',title:'River Cruise',desc:'Singapore River night cruise'},
      {icon:'fa-city',title:'Petronas Towers',desc:'Skybridge & observation deck'},
      {icon:'fa-mountain-sun',title:'Genting Day',desc:'Cable car + casino + park'}
    ]
  }
];

/* ============================================================
   POPULAR DESTINATIONS  (visual masonry — top of page)
   ============================================================ */
const DESTINATIONS = [
  {name:'Bali',country:'Indonesia',tag:'Honeymoon',image:'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1400&q=85',pkgId:'bali-bliss'},
  {name:'Kashmir',country:'India',tag:'Trending',image:'https://images.unsplash.com/photo-1566837497312-7be4b9aaae5e?w=900&q=85',pkgId:'kashmir-paradise'},
  {name:'Maldives',country:'Maldives',tag:'Luxury',image:'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=900&q=85',pkgId:'maldives-overwater'},
  {name:'Rajasthan',country:'India',tag:'Heritage',image:'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=900&q=85',pkgId:'rajasthan-royal'},
  {name:'Dubai',country:'UAE',tag:'Luxury',image:'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&q=85',pkgId:'dubai-deluxe'},
  {name:'Thailand',country:'Phuket+Bangkok',tag:'Beach',image:'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=900&q=85',pkgId:'thailand-twin'},
  {name:'Kerala',country:'India',tag:'Nature',image:'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=900&q=85',pkgId:'kerala-backwaters'},
  {name:'Singapore',country:'Singapore',tag:'City',image:'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=900&q=85',pkgId:'singapore-malaysia'}
];

/* ============================================================
   TESTIMONIALS  (home page)
   ============================================================ */
const TESTIMONIALS = [
  {name:'Priya Sharma',role:'Honeymooner · Delhi',quote:'Our Maldives overwater villa was straight out of a Pinterest board. Sneha from EaseMyBooking answered every WhatsApp ping in minutes.',avatar:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',rating:5},
  {name:'Rohan & Anita',role:'Family of 4 · Bangalore',quote:'Bali with two kids could have been chaos. They sorted the seaplane, the strollers and the kid-meals — we just enjoyed.',avatar:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',rating:5},
  {name:'Aditya Mehta',role:'Solo · Mumbai',quote:'Booked Kashmir 4 days before flying. They had my houseboat, Gondola tickets and driver locked in by night. Five stars.',avatar:'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80',rating:5}
];

/* ============================================================
   ============== HELPERS ==============
   ============================================================ */
const $  = (sel,r=document)=>r.querySelector(sel);
const $$ = (sel,r=document)=>Array.from(r.querySelectorAll(sel));
const fmt= (n)=>'₹'+Number(n).toLocaleString('en-IN');
const qparam = (k)=> new URLSearchParams(location.search).get(k);
const yearEl = $('#year'); if(yearEl) yearEl.textContent = new Date().getFullYear();

function waUrl(text){ return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`; }

/* ============================================================
   ============== NAV (mobile toggle + scroll bg) ==============
   ============================================================ */
(function nav(){
  const nav = $('#nav'); const toggle = $('#navToggle'); const links = $('#navLinks');
  if(!nav) return;
  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 30);
  window.addEventListener('scroll', onScroll, {passive:true}); onScroll();
  if(toggle){
    toggle.addEventListener('click', ()=>{
      toggle.classList.toggle('is-open'); links.classList.toggle('is-open');
    });
    links.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>{
      toggle.classList.remove('is-open'); links.classList.remove('is-open');
    }));
  }
})();

/* ============================================================
   ============== HERO SLIDER ==============
   ============================================================ */
(function heroSlider(){
  const slides = $$('.tHero__slide'); if(!slides.length) return;
  let i = 0;
  setInterval(()=>{
    slides[i].classList.remove('is-active');
    i = (i+1) % slides.length;
    slides[i].classList.add('is-active');
  }, 5400);
})();

/* ============================================================
   ============== CARDS ==============
   ============================================================ */
function packageCardHTML(p){
  const tags = (p.tags||[]).map(t=>`<span class="pkgCard__tag">${t}</span>`).join('');
  const save = p.savePct ? `<span class="pkgCard__tag pkgCard__tag--save">Save ${p.savePct}%</span>` : '';
  const hl = p.highlights.slice(0,3).map(h=>`<li>${h.text}</li>`).join('');
  const url = p.region === 'Domestic' ? 'domestic-package-detail.html' : 'international-package-detail.html';
  const oldP = p.priceOld ? `<span class="strike">${fmt(p.priceOld)}</span>` : '';
  return `
  <a class="pkgCard" href="${url}?id=${p.id}" data-testid="pkg-card-${p.id}">
    <div class="pkgCard__media">
      <div class="pkgCard__img" style="background-image:url('${p.image}')"></div>
      <div class="pkgCard__shade"></div>
      <div class="pkgCard__tags">${tags}${save}</div>
      <div class="pkgCard__dest">
        <small>${p.cities}</small>
        <h3>${p.title}</h3>
      </div>
    </div>
    <div class="pkgCard__body">
      <div class="pkgCard__meta">
        <span><i class="fas fa-calendar-days"></i>${p.duration}</span>
        <span><i class="fas fa-star"></i>${p.rating}</span>
      </div>
      <ul class="pkgCard__hl">${hl}</ul>
      <div class="pkgCard__foot">
        <div class="pkgCard__price">
          <small>Starts from</small>
          <strong>${fmt(p.price)} ${oldP}</strong>
        </div>
        <span class="pkgCard__cta">View Details <i class="fas fa-arrow-right"></i></span>
      </div>
    </div>
  </a>`;
}

/* ============================================================
   ============== TRAVEL HOME PAGE ==============
   ============================================================ */
(function travelHome(){
  const svcGrid = $('#servicesGrid');
  const domGrid = $('#domesticGrid');
  const intGrid = $('#intlGrid');
  const dGrid   = $('#destGrid');
  const tGrid   = $('#testiGrid');
  if(!svcGrid && !domGrid && !intGrid) return; // not the home page

  // ------- SERVICES -------
  if(svcGrid){
    svcGrid.innerHTML = SERVICES.map(s=>`
      <article class="svc" data-testid="svc-${s.id}">
        <div class="svc__icon"><i class="fas ${s.icon}"></i></div>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
        <a href="${waUrl(s.wa)}" target="_blank" rel="noopener" class="svc__cta" data-testid="svc-cta-${s.id}">
          Get Quote on WhatsApp <i class="fas fa-arrow-right"></i>
        </a>
      </article>
    `).join('');
  }

  // ------- PACKAGES -------
  if(domGrid){
    const dom = PACKAGES.filter(p=>p.region==='Domestic').slice(0,6);
    domGrid.innerHTML = dom.map(packageCardHTML).join('');
  }
  if(intGrid){
    const intl = PACKAGES.filter(p=>p.region==='International').slice(0,6);
    intGrid.innerHTML = intl.map(packageCardHTML).join('');
  }

  // ------- DESTINATIONS -------
  if(dGrid){
    dGrid.innerHTML = DESTINATIONS.map(d=>{
      const url = (PACKAGES.find(p=>p.id===d.pkgId)?.region === 'Domestic')
        ? `domestic-package-detail.html?id=${d.pkgId}`
        : `international-package-detail.html?id=${d.pkgId}`;
      return `
      <a class="destCard" href="${url}" data-testid="dest-${d.name.toLowerCase()}">
        <div class="destCard__img" style="background-image:url('${d.image}')"></div>
        <div class="destCard__body">
          <small>${d.tag}</small>
          <h3>${d.name}</h3>
          <p>${d.country}</p>
          <span class="destCard__cta">Explore <i class="fas fa-arrow-right"></i></span>
        </div>
      </a>`;
    }).join('');
  }

  // ------- TESTIMONIALS -------
  if(tGrid){
    tGrid.innerHTML = TESTIMONIALS.map(t=>`
      <article class="testi">
        <div class="testi__stars">${'★'.repeat(t.rating)}</div>
        <p class="testi__quote">"${t.quote}"</p>
        <div class="testi__author">
          <div class="testi__avatar" style="background-image:url('${t.avatar}')"></div>
          <div>
            <strong>${t.name}</strong>
            <small>${t.role}</small>
          </div>
        </div>
      </article>
    `).join('');
  }

  // ------- SEARCH FILTER -------
  const applyBtn = $('#searchApply');
  if(applyBtn){
    applyBtn.addEventListener('click', ()=>{
      const t = $('#sType').value;
      const d = $('#sDest').value.trim().toLowerCase();
      const dur = +$('#sDuration').value;
      const b = +$('#sBudget').value;

      const matches = (p)=>{
        if(t){
          if(t==='Domestic' && p.region!=='Domestic') return false;
          if(t==='International' && p.region!=='International') return false;
          if(!['Domestic','International'].includes(t) && !(p.type||[]).includes(t)) return false;
        }
        if(d && !(`${p.title} ${p.cities}`.toLowerCase().includes(d))) return false;
        if(dur && p.durationNights > dur) return false;
        if(b && p.price > b) return false;
        return true;
      };
      const dom = PACKAGES.filter(p=>p.region==='Domestic' && matches(p));
      const intl = PACKAGES.filter(p=>p.region==='International' && matches(p));
      domGrid.innerHTML = dom.length
        ? dom.map(packageCardHTML).join('')
        : `<div class="empty"><i class="fas fa-magnifying-glass"></i><h3>No domestic matches</h3><p>Try widening your filters.</p></div>`;
      intGrid.innerHTML = intl.length
        ? intl.map(packageCardHTML).join('')
        : `<div class="empty"><i class="fas fa-magnifying-glass"></i><h3>No international matches</h3><p>Try widening your filters.</p></div>`;
      // scroll to results
      document.getElementById('domestic').scrollIntoView({behavior:'smooth',block:'start'});
    });
  }
})();

/* ============================================================
   ============== PACKAGE DETAIL PAGE ==============
   ============================================================ */
(function packageDetail(){
  const root = $('#pkgRoot'); if(!root) return;

  const region = document.body.dataset.region; // 'Domestic' | 'International'
  const id = qparam('id');
  const pool = PACKAGES.filter(p=>p.region===region);
  const p = pool.find(x=>x.id===id) || pool[0];

  if(!p){ root.innerHTML = `<div class="container" style="padding:120px 20px;text-align:center"><h2>Package not found</h2><a href="travel.html" class="btn btn--gold">Back to Travel</a></div>`; return; }

  // ----- meta / OG tags -----
  document.title = `${p.title} · ${p.cities} | EaseMyBooking`;
  $('#metaDesc').setAttribute('content', p.tagline);
  $('#ogTitle').setAttribute('content', `${p.title} | EaseMyBooking`);
  $('#ogDesc').setAttribute('content', p.tagline);
  $('#ogImage').setAttribute('content', p.image);

  // ----- hero -----
  $('#pkgHeroBg').style.backgroundImage = `url('${p.image}')`;
  $('#pkgRegion').textContent = `${p.region} · ${p.cities.split(' · ')[0]}`;
  $('#pkgTitle').textContent = p.title;
  $('#pkgTagline').textContent = p.tagline;
  $('#pkgDuration').textContent = p.duration;
  $('#pkgCities').textContent = p.cities;
  $('#pkgRating').textContent = p.rating + ' / 5';

  // ----- price bar -----
  const priceStr = fmt(p.price);
  $('#pkgPrice').textContent = priceStr;
  $('#pkgPriceSide').textContent = priceStr;
  $('#pkgWA').href = waUrl(
    `Hi EaseMyBooking, I'd like a quote for the *${p.title}* package (${p.cities}, ${p.duration}, starts from ${priceStr}).`
  );

  // ----- overview -----
  $('#pkgOverview').textContent = p.overview;
  $('#pkgHighlights').innerHTML = p.highlights.map(h=>
    `<li><i class="fas ${h.icon}"></i> ${h.text}</li>`
  ).join('');

  // ----- itinerary -----
  $('#pkgItinerary').innerHTML = p.itinerary.map(d=>`
    <div class="itinDay">
      <div class="itinDay__head">
        <span class="itinDay__num">${d.day}</span>
        <span class="itinDay__title">${d.title}</span>
      </div>
      <p>${d.desc}</p>
    </div>
  `).join('');

  // ----- inclusions/exclusions -----
  $('#pkgIncl').innerHTML = p.inclusions.map(x=>`<li>${x}</li>`).join('');
  $('#pkgExcl').innerHTML = p.exclusions.map(x=>`<li>${x}</li>`).join('');

  // ----- hotels -----
  $('#pkgHotels').innerHTML = p.hotels.map(h=>`
    <div class="hotelCard">
      <div class="hotelCard__img" style="background-image:url('${h.image}')"></div>
      <div class="hotelCard__body">
        <span class="hotelCard__city">${h.city}</span>
        <span class="hotelCard__name">${h.name}</span>
        <span class="hotelCard__stars">${'★'.repeat(h.stars)}</span>
        <p class="hotelCard__note">${h.note}</p>
      </div>
    </div>
  `).join('');

  // ----- activities -----
  $('#pkgActs').innerHTML = p.activities.map(a=>`
    <div class="actChip"><i class="fas ${a.icon}"></i><strong>${a.title}</strong><span>${a.desc}</span></div>
  `).join('');

  // ----- enquiry form -----
  const form = $('#pkgEnqForm');
  // sensible default date = 21 days out
  const today = new Date(); const d1 = new Date(today); d1.setDate(d1.getDate()+21);
  form.travelDate.min = today.toISOString().split('T')[0];
  form.travelDate.value = d1.toISOString().split('T')[0];

  form.addEventListener('submit', e=>{
    e.preventDefault();
    const fd = new FormData(form);
    const msg = `*EaseMyBooking — Package Enquiry*\n\n`+
      `*Package:* ${p.title}\n`+
      `*Region:* ${p.region}\n`+
      `*Cities:* ${p.cities}\n`+
      `*Duration:* ${p.duration}\n`+
      `*Starts from:* ${priceStr}\n`+
      `--------------------------\n`+
      `*Name:* ${fd.get('name')}\n`+
      `*Phone:* ${fd.get('phone')}\n`+
      `*Email:* ${fd.get('email')}\n`+
      `*Travel Date:* ${fd.get('travelDate')}\n`+
      `*Travellers:* ${fd.get('pax')}\n`+
      `*Notes:* ${(fd.get('notes')||'').toString().slice(0,400) || 'N/A'}\n\n`+
      `Sent from easemybooking travel page.`;
    window.open(waUrl(msg), '_blank');
  });

  // top "Get Custom Quote" button focuses the form
  const quoteBtn = $('#pkgQuoteBtn');
  if(quoteBtn){
    quoteBtn.addEventListener('click', ()=>{
      form.scrollIntoView({behavior:'smooth', block:'center'});
      form.name.focus();
    });
  }

  // ----- related -----
  const related = pool.filter(x=>x.id!==p.id).slice(0,3);
  const relGrid = $('#relatedGrid');
  if(relGrid) relGrid.innerHTML = related.map(packageCardHTML).join('');
})();

/* ============================================================
   ============== ENTRANCE ANIMATIONS ==============
   ============================================================ */
(function entrances(){
  const els = $$('.pkgCard, .svc, .destCard, .whyCard, .testi, .faq__item, .section__title, .eyebrow, .pkgBlock, .actChip, .hotelCard, .itinDay');
  if(!('IntersectionObserver' in window) || !els.length) return;
  els.forEach(el=>{el.style.opacity='0';el.style.transform='translateY(20px)';el.style.transition='opacity .7s cubic-bezier(.22,.61,.36,1), transform .7s cubic-bezier(.22,.61,.36,1)'});
  const io = new IntersectionObserver((entries)=>{
    entries.forEach((en,i)=>{
      if(en.isIntersecting){
        setTimeout(()=>{en.target.style.opacity='1';en.target.style.transform='translateY(0)';}, i*30);
        io.unobserve(en.target);
      }
    });
  },{threshold:.1,rootMargin:'0px 0px -50px 0px'});
  els.forEach(el=>io.observe(el));
})();
