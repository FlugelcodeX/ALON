/* =========================================
   Aquatic Life Of the Nation
   Main JavaScript
========================================= */

/* =========================================
   FISH DATABASE
========================================= */

const fishData = {
  galunggong: {
    name: "GALUNGGONG",
    scientific: "Round Scad",
    image: "galunggong.png",

    description:
      "Galunggong is one of the most familiar fish in Filipino markets and is an important small pelagic catch for many fishing communities.",

    habitat:
      "Coastal waters, bays, reefs and open waters where schools can gather.",

    depth: "Generally found from near-surface waters to deeper coastal waters.",

    methods:
      "Gill nets, purse seines, ring nets and other small-scale fishing methods.",
  },

  tamban: {
    name: "TAMBAN",
    scientific: "Sardine",

    image: "tamban.png",

    description:
      "Tamban refers to several sardine species that form large schools and are widely caught in Philippine waters.",

    habitat: "Coastal and open waters, usually traveling in schools.",

    depth: "Mostly shallow to mid-water environments.",

    methods:
      "Purse seines, ring nets, gill nets and other commercial and municipal fishing gear.",
  },

  sapsap: {
    name: "SAPSAP",
    scientific: "Ponyfish",

    image: "sapsap.png",

    description:
      "Sapsap is a commonly consumed Philippine fish and is frequently sold fresh in local markets.",

    habitat:
      "Sandy and muddy coastal bottoms, estuaries and shallow marine areas.",

    depth: "Usually found in relatively shallow coastal waters.",

    methods: "Bottom nets, seines, traps and other local fishing gear.",
  },

  dilis: {
    name: "DILIS",
    scientific: "Anchovy",

    image: "dilis.png",

    description:
      "Dilis are small schooling fish that are important both as a food fish and as prey for larger marine species.",

    habitat: "Coastal waters and productive areas where plankton is abundant.",

    depth: "Mostly shallow and near-surface waters.",

    methods:
      "Small nets, purse seines, lift nets and other schooling-fish gear.",
  },

  hipon: {
    name: "HIPON",
    scientific: "Shrimp",

    image: "hipon.png",

    description:
      "Hipon is the general Filipino term for shrimp and prawns, a staple ingredient in many local dishes from sinigang to garlic-buttered grills.",

    habitat:
      "Shallow coastal waters, estuaries, seagrass beds and mangrove-lined shorelines.",

    depth: "Mostly shallow, near-surface waters close to shore.",

    methods:
      "Cast nets, fine-mesh nets, traps and other small-scale fishing gear.",
  },

  sugpo: {
    name: "SUGPO",
    scientific: "Tiger Prawn",

    image: "sugpo.png",

    description:
      "Sugpo refers to the giant tiger prawn, a large and highly prized crustacean common in Philippine aquaculture and coastal catches.",

    habitat: "Shallow coastal waters, estuaries and brackish fishponds.",

    depth: "Mostly shallow, near-surface waters and tidal flats.",

    methods: "Fish traps, fine-mesh nets and pond aquaculture.",
  },

  guso: {
    name: "GUSO",
    scientific: "Seaweed",

    image: "guso.png",

    description:
      "Guso, also called lato, is edible seaweed farmed and gathered along shallow, sunlit coastal waters throughout the Philippines.",

    habitat: "Shallow reef flats and sunlit coastal waters with clear water.",

    depth: "Near-surface waters where sunlight can reach for growth.",

    methods: "Hand harvesting and seaweed farming lines.",
  },

  "lapu-lapu": {
    name: "LAPU-LAPU",
    scientific: "Grouper",

    image: "lapu-lapu.png",

    description:
      "Lapu-lapu is the familiar Filipino name used for several grouper species. It is valued for its firm, white flesh.",

    habitat: "Coral reefs, rocky areas, coastal lagoons and reef structures.",

    depth:
      "Commonly encountered in shallow to moderately deep reef environments.",

    methods: "Hook and line, handline, traps and other reef-fishing methods.",
  },

  "maya-maya": {
    name: "MAYA-MAYA",
    scientific: "Snapper",

    image: "maya-maya.png",

    description:
      "Maya-maya is a common Filipino market name for several snapper species valued as food fish.",

    habitat: "Coral reefs, rocky bottoms and coastal waters.",

    depth: "Usually found from shallow reefs to deeper reef environments.",

    methods: "Handline, hook and line, traps and other reef fishing gear.",
  },

  bisugo: {
    name: "BISUGO",
    scientific: "Threadfin Bream",

    image: "bisugo.png",

    description:
      "Bisugo are small to medium-sized bottom-dwelling fish commonly sold in Philippine markets.",

    habitat:
      "Sandy and muddy seabeds near coastal and continental shelf areas.",

    depth: "Can occur from shallow coastal areas into deeper waters.",

    methods: "Bottom trawls, nets, handlines and other bottom-fishing methods.",
  },

  alimango: {
    name: "ALIMANGO",
    scientific: "Mud Crab",

    image: "alimango.png",

    description:
      "Alimango refers to mud crabs prized in Filipino cuisine for their meaty claws and rich, sweet flavor, often cooked in coconut cream or sweet-and-sour sauce.",

    habitat: "Mangroves, estuaries and muddy coastal waters.",

    depth:
      "Shallow coastal and brackish waters near mangrove roots and burrows.",

    methods: "Crab pots, traps and hand-lines baited with fish scraps.",
  },

  alimasag: {
    name: "ALIMASAG",
    scientific: "Blue Swimming Crab",

    image: "alimasag.png",

    description:
      "Alimasag is the Filipino name for blue swimming crab, smaller and lighter than alimango, and a major export seafood product.",

    habitat: "Sandy and muddy coastal seabeds and open coastal waters.",

    depth: "Shallow to moderately deep coastal waters.",

    methods: "Crab lift nets, traps and small-scale trawling.",
  },

  talaba: {
    name: "TALABA",
    scientific: "Oyster",

    image: "talaba.png",

    description:
      "Talaba refers to oysters cultivated and harvested along coastal waters, popular grilled or eaten raw with vinegar.",

    habitat: "Rocky shores, mangrove roots and shallow coastal farms.",

    depth: "Shallow intertidal and near-surface coastal waters.",

    methods: "Hand gathering and oyster farming on bamboo racks.",
  },

  talakitok: {
    name: "TALAKITOK",
    scientific: "Trevally",

    image: "talakitok.png",

    description:
      "Talakitok is a local name used for several trevally species. These powerful fish are popular catches in Philippine waters.",

    habitat: "Reefs, coastal waters, channels and open water.",

    depth: "Varies significantly depending on species.",

    methods: "Hook and line, trolling, handline and other fishing methods.",
  },

  tulingan: {
    name: "TULINGAN",
    scientific: "Frigate Tuna",

    image: "tulingan.png",

    description:
      "Tulingan commonly refers to frigate tuna and related small tuna species that are important food fish in the Philippines.",

    habitat: "Warm coastal and offshore waters, usually moving in schools.",

    depth: "Near-surface to mid-water environments.",

    methods: "Hook and line, trolling, nets and other tuna fishing methods.",
  },

  tambakol: {
    name: "TAMBAKOL",
    scientific: "Yellowfin Tuna",

    image: "tambakol.png",

    description:
      "Tambakol is a common Filipino name for yellowfin tuna, an economically important tuna caught throughout Philippine waters.",

    habitat: "Open ocean and offshore waters.",

    depth: "Primarily pelagic, moving through upper and mid-water layers.",

    methods:
      "Handline, longline, trolling, purse seine and other tuna fishing methods.",
  },

  tahong: {
    name: "TAHONG",
    scientific: "Mussel",

    image: "tahong.png",

    description:
      "Tahong are mussels widely farmed along Philippine coastlines and a common ingredient in soups and grilled dishes.",

    habitat: "Coastal waters, bamboo mussel farms and rocky shorelines.",

    depth: "Shallow coastal waters close to shore.",

    methods: "Hand harvesting and rope or bamboo mussel farming.",
  },

  kuhol: {
    name: "KUHOL",
    scientific: "Snail",

    image: "kuhol.png",

    description:
      "Kuhol and susô refer to various edible snails found in brackish and coastal waters, used in regional Filipino dishes.",

    habitat: "Mangroves, tidal flats and brackish coastal waters.",

    depth: "Shallow coastal and estuarine waters.",

    methods: "Hand gathering and small-scale traps.",
  },

  tanguigue: {
    name: "TANGUIGUE",
    scientific: "Spanish Mackerel",

    image: "tanguigue.png",

    description:
      "Tanguigue is one of the most popular mackerel-type fish in Philippine cuisine and markets.",

    habitat: "Coastal waters, offshore areas and areas near reefs.",

    depth:
      "Usually encountered from shallow waters into deeper offshore areas.",

    methods: "Trolling, handline, nets and other hook-and-line techniques.",
  },

  malasugi: {
    name: "MALASUGI",
    scientific: "Blue Marlin",

    image: "malasugi.png",

    description:
      "Malasugi is a Filipino name associated with marlin and is recognized as one of the large pelagic fish caught in Philippine waters.",

    habitat: "Offshore and open-ocean environments.",

    depth: "Primarily pelagic, capable of moving through considerable depths.",

    methods: "Trolling, hook and line and other offshore fishing techniques.",
  },

  barakuda: {
    name: "BARAKUDA",
    scientific: "Barracuda",

    image: "barakuda.png",

    description:
      "Barracuda are fast predatory fish found around reefs, coastal areas and offshore waters.",

    habitat: "Reefs, rocky areas, coastal waters and offshore environments.",

    depth: "Ranges from shallow coastal waters to deeper areas.",

    methods: "Hook and line, trolling, nets and other fishing techniques.",
  },

  halaan: {
    name: "HALAAN",
    scientific: "Clam",

    image: "halaan.png",

    description:
      "Halaan are venus clams commonly dug from coastal flats and a key ingredient in sinigang and other Filipino soups.",

    habitat: "Sandy and muddy coastal flats and estuaries.",

    depth: "Shallow intertidal to nearshore waters.",

    methods: "Hand digging and rake harvesting at low tide.",
  },

  banagan: {
    name: "banagan",
    scientific: "Spiny Lobster",

    image: "banagan.png",

    description:
      "banagan, refers to spiny lobsters found among rocky reef structures and prized as a premium catch.",

    habitat: "Rocky reefs, crevices and rubble-strewn seabeds.",

    depth: "Moderate to deeper reef environments.",

    methods: "Traps, hand-netting and diving by local fishermen.",
  },

  pusit: {
    name: "PUSIT",
    scientific: "Squid",

    image: "pusit.png",

    description:
      "Pusit is the familiar Filipino term for squid, an important seafood catch throughout the country.",

    habitat:
      "Coastal waters, reefs, open water and deeper marine environments depending on species.",

    depth: "Highly variable depending on species and life stage.",

    methods:
      "Squid jigs, handlines, lights and specialized squid fishing gear.",
  },

  kitang: {
    name: "KITANG",
    scientific: "Rabbitfish",

    image: "kitang.png",

    description:
      "Kitang is a familiar Philippine food fish often associated with shallow coastal habitats.",

    habitat: "Seagrass beds, mangroves, reefs and shallow coastal waters.",

    depth: "Mostly shallow coastal environments.",

    methods: "Hook and line, nets, traps and other small-scale fishing gear.",
  },

  "dogtooth-tuna": {
    name: "DOGTOOTH TUNA",
    scientific: "Dogtooth Tuna",

    image: "dogtooth-tuna.png",

    description:
      "Dogtooth tuna are large predatory fish associated with tropical reefs and offshore waters.",

    habitat: "Deep reef edges, drop-offs and offshore reef environments.",

    depth: "Often associated with deeper reef areas and steep drop-offs.",

    methods: "Trolling, handline and other hook-and-line fishing techniques.",
  },

  pugita: {
    name: "PUGITA",
    scientific: "Octopus",

    image: "pugita.png",

    description:
      "Pugita is the Filipino name for octopus, caught around reefs and rocky areas and often grilled or stewed in local dishes.",

    habitat: "Coral reefs, rocky crevices and rubble seabeds.",

    depth: "Shallow reefs to deeper rocky reef environments.",

    methods: "Hand spearing, jigging and octopus pots.",
  },

  suwaki: {
    name: "suwaki",
    scientific: "Sea Urchin",

    image: "suwaki.png",

    description:
      "suwaki is the local name for sea urchin, whose roe is a delicacy in coastal communities, especially in the Visayas and Palawan.",

    habitat: "Shallow rocky reefs and seagrass beds with clear water.",

    depth: "Mostly shallow reef and rocky bottom environments.",

    methods: "Hand gathering and free-diving harvest.",
  },
};

/* =========================================
   MODAL
========================================= */

const modal = document.getElementById("fishModal");

const modalImage = document.getElementById("modalImage");

const modalName = document.getElementById("modalName");

const modalScientific = document.getElementById("modalScientific");

const modalDescription = document.getElementById("modalDescription");

const modalHabitat = document.getElementById("modalHabitat");

const modalDepth = document.getElementById("modalDepth");

const modalMethods = document.getElementById("modalMethods");

const closeModal = document.getElementById("closeModal");

const modalCloseButton = document.getElementById("modalCloseButton");

/* =========================================
   OPEN FISH INFORMATION
========================================= */

document.querySelectorAll(".fish").forEach((fish) => {
  fish.addEventListener("click", () => {
    const id = fish.dataset.fish;

    const data = fishData[id];

    if (!data) return;

    modalImage.src = data.image;

    modalImage.alt = data.name;

    modalName.textContent = data.name;

    modalScientific.textContent = data.scientific;

    modalDescription.textContent = data.description;

    modalHabitat.textContent = data.habitat;

    modalDepth.textContent = data.depth;

    modalMethods.textContent = data.methods;

    modal.classList.add("open");

    document.body.style.overflow = "hidden";
  });
});

/* =========================================
   CLOSE MODAL
========================================= */

function closeFishModal() {
  modal.classList.remove("open");

  document.body.style.overflow = "";
}

closeModal.addEventListener("click", closeFishModal);

modalCloseButton.addEventListener("click", closeFishModal);

document
  .querySelector(".modal-backdrop")
  .addEventListener("click", closeFishModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("open")) {
    closeFishModal();
  }
});

/* =========================================
   SCROLL TO FISH
========================================= */

function scrollToFish() {
  document.getElementById("fish").scrollIntoView({
    behavior: "smooth",
  });
}

/* =========================================
   DEPTH TRACKING
   (also makes the depth indicator clickable)
========================================= */

const depthSections = document.querySelectorAll(".depth-section");

const depthItems = document.querySelectorAll(".depth-item");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const index = [...depthSections].indexOf(entry.target);

      depthItems.forEach((item) => item.classList.remove("active"));

      if (depthItems[index]) {
        depthItems[index].classList.add("active");
      }
    });
  },

  {
    threshold: 0.45,
  },
);

depthSections.forEach((section) => observer.observe(section));

/*
  Clicking a depth level scrolls the page
  to the matching zone.
*/

depthItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    const target = depthSections[index];

    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});

/* =========================================
   FISH PARALLAX
========================================= */

const fishes = document.querySelectorAll(".fish");

window.addEventListener(
  "scroll",

  () => {
    const scroll = window.scrollY;

    fishes.forEach((fish, index) => {
      /*
          Each fish moves at a
          slightly different speed.
        */

      const speed = 0.015 + (index % 4) * 0.006;

      const movement = Math.sin(scroll * speed) * 10;

      fish.style.setProperty("--scroll-move", `${movement}px`);
    });
  },

  {
    passive: true,
  },
);

/* =========================================
   NAVBAR BACKGROUND
========================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener(
  "scroll",

  () => {
    if (window.scrollY > 80) {
      navbar.style.background = "rgba(1,12,23,.45)";

      navbar.style.backdropFilter = "blur(12px)";
    } else {
      navbar.style.background =
        "linear-gradient(to bottom, rgba(0,0,0,.3), transparent)";

      navbar.style.backdropFilter = "blur(3px)";
    }
  },

  {
    passive: true,
  },
);

/* =========================================
   DAY / NIGHT LOOK

   The page now holds permanently at a single
   "sunrise" phase instead of cycling through
   the day - the sky, sun position/color and
   glow are all set once on load and left in
   place. (The phase presets below are kept
   so the sunrise look, and its colors, stay
   easy to tweak in one place.)
========================================= */

const ocean = document.querySelector(".ocean-background");

const sunset = document.querySelector(".sunset");

const sun = document.querySelector(".sun");

const rays = document.querySelector(".light-rays");

// Stops from "coastal" downward never change - this is the part
// of the water the sun cannot reach.
const DEEP_WATER_STOPS = `
  #168ea7 19%,
  #075b7e 35%,
  #063c60 52%,
  #032843 68%,
  #02172b 84%,
  #010b17 100%
`;

const sunrisePhase = {
  name: "sunrise",
  skyTop: "#ffb199",
  skyMid: "#ff7e6b",
  sunColor: "#ffd9a0",
  sunGlow: "rgba(255, 190, 140, 0.85)",
  sunOpacity: 1,
  sunTop: "17vh", // just breaking the surface
  sunsetOpacity: 0.9,
  raysOpacity: 0.35,
};

function applyDayPhase(phase) {
  ocean.style.background = `
    linear-gradient(
      to bottom,
      ${phase.skyTop} 0%,
      ${phase.skyMid} 10%,
      ${DEEP_WATER_STOPS}
    )
  `;

  sun.style.background = phase.sunColor;
  sun.style.boxShadow = `0 0 40px ${phase.sunGlow}, 0 0 120px ${phase.sunGlow}`;
  sun.style.top = phase.sunTop;
  sun.style.opacity = phase.sunOpacity;

  sunset.style.opacity = phase.sunsetOpacity;

  rays.style.opacity = phase.raysOpacity;
}

function startDayCycle() {
  // Hold permanently at sunrise - no cycling through other phases.
  applyDayPhase(sunrisePhase);
}

startDayCycle();

/* =========================================
   WATER BUBBLES — whole ocean, behind fish

   Generates randomized rising bubbles inside
   .hero-sky and every .depth-section (surface
   through deep-sea) - NOT inside .conservation,
   so the effect runs from the hero headline
   down through the deep-sea zone and stops
   before the conservation section.

   Each bubble's travel distance (--wb-rise) is
   set to that specific container's own height,
   so bubbles always rise the FULL height of
   whichever zone they're in rather than a
   fixed distance that could clip early in a
   tall section or loop too soon in a short one.
========================================= */

function createWaterBubbles() {
  const containers = document.querySelectorAll(".depth-section");

  containers.forEach((container) => {
    const layer = container.querySelector(".water-bubbles");

    if (!layer) return;

    const rise = container.offsetHeight + 120; // full height of this zone
    const count = 16 + Math.floor(Math.random() * 8); // 16-23 per zone

    for (let i = 0; i < count; i++) {
      const bubble = document.createElement("span");

      const size = 3 + Math.random() * 17; // 3px - 20px, small + large mix
      const duration = 10 + Math.random() * 16; // 10s - 26s, varied speed
      const delay = -Math.random() * duration; // stagger so it's never empty
      const drift = 10 + Math.random() * 28; // horizontal sway
      const opacity = 0.22 + Math.random() * 0.35;
      const blur = size > 14 ? (size - 14) / 6 : 0; // soft blur on larger ones

      bubble.style.setProperty("--wb-left", `${Math.random() * 100}%`);
      bubble.style.setProperty("--wb-size", `${size.toFixed(1)}px`);
      bubble.style.setProperty("--wb-rise", `${rise}px`);
      bubble.style.setProperty("--wb-dur", `${duration.toFixed(1)}s`);
      bubble.style.setProperty("--wb-delay", `${delay.toFixed(1)}s`);
      bubble.style.setProperty("--wb-drift", `${drift.toFixed(0)}px`);
      bubble.style.setProperty("--wb-op", opacity.toFixed(2));
      bubble.style.setProperty("--wb-blur", `${blur.toFixed(1)}px`);

      layer.appendChild(bubble);
    }
  });
}

createWaterBubbles();

/* Re-measure and refill on resize so bubble travel distance
   stays matched to each zone's actual height. */
let bubbleResizeTimeout;

window.addEventListener("resize", () => {
  clearTimeout(bubbleResizeTimeout);

  bubbleResizeTimeout = setTimeout(() => {
    document.querySelectorAll(".water-bubbles").forEach((layer) => {
      layer.innerHTML = "";
    });

    createWaterBubbles();
  }, 400);
});

/* =========================================
   NEWSLETTER
========================================= */

const newsletter = document.querySelector(".newsletter form");

newsletter.addEventListener(
  "submit",

  (event) => {
    event.preventDefault();

    const input = newsletter.querySelector("input");

    if (!input.value.trim()) return;

    input.value = "";

    input.placeholder = "Thank you for joining!";
  },
);

/* =========================================
   IMAGE ERROR HANDLING
========================================= */

document.querySelectorAll(".fish img").forEach((img) => {
  img.addEventListener(
    "error",

    () => {
      img.style.opacity = ".2";
    },
  );
});
