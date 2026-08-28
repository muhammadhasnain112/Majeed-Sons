/* RubberTech Industries — site behaviour (vanilla JS) */
(() => {
  const SITE = {
    name: "EVA Rubber Foam",
    email: "pakinterrubber@gmail.com",
    phone: "+92 321 2991915",
    whatsapp: "923212991915",
    location: "MA Jinnah Road Eid Ghah Masjid Phool Gali Shop No 35 Saddar Karachi",
  };

  const PRODUCTS = [
    {
      id: "eva-foam",
      name: "EVA White Rubber",
      image: "images/products/eve-rubber.jfif",
      categories: ["foam", "sheets"],
      material: "Ethylene-Vinyl Acetate (EVA)",
      thickness: "1 mm – 28 mm",
      size: "Sheets, rolls and custom cut parts",
      colors: "White",
      applications: "Packaging, sports goods, footwear, marine, insulation",
      short: "Lightweight closed-cell foam with strong cushioning and chemical resistance.",
      description:
        "EVA white rubber is a versatile closed-cell material used wherever impact absorption, water resistance and clean fabrication are required. RubberTech supplies standard sheets and custom densities for industrial and commercial buyers.",
    },
    {
      id: "epdm-foam",
      name: "Hard Sole Sheet",
      image: "images/products/hard sole sheet.jfif",
      categories: ["foam", "industrial"],
      material: "Rubber Sole Sheets or dense synthetic polymer compounds",
      thickness: "10mm",
      size: "All Sizes",
      colors: "Black",
      applications: "HVAC, automotive weatherseals, outdoor gaskets, insulation",
      short: "Durable materials designed for shoe manufacturing and repair.",
      description:
        "high-density, durable materials engineered specifically for manufacturing and repairing the bottom layers of footwear.",
    }, {
      "id": "pe-foam",
      "name": "Holland Rubber Sheet",
      "image": "images/products/holland-rubber-sheet.jfif",
      "categories": ["rubber", "soling"],
      "material": "Rubber / EVA Blend",
      "thickness": "3 mm – 8 mm",
      "size": "Sheets and custom cut sizes",
      "colors": "Black, White, Brown, Custom",
      "applications": "Shoe soling, anti-slip matting, footwear repair, crafts",
      "short": "Textured rubber soling sheet with cross-hatch/jali pattern for enhanced grip.",
      "description": "Holland rubber sheets feature a durable, anti-slip textured pattern ideal for shoe soles and protective lining. Designed to provide excellent traction, flexibility, and wear resistance for footwear manufacturing and repair."
    },
    {
      "id": "silicone-rubber",
      "name": "Box Packing Rubber Sheet",
      "image": "images/products/box-paking-rubber.jfif",
      "categories": ["packaging", "rubber", "foam"],
      "material": "EVA / Neoprene / High-Density Foam",
      "thickness": "1 mm – 28 mm",
      "size": "Sheets, rolls, and custom die-cut inserts",
      "colors": "Black, Dark Grey, Custom",
      "applications": "Box packing inserts, protective padding, shock absorption, tool organization, shipping protection",
      "short": "High-density packaging foam/rubber sheets for box lining and shock-resistant protection.",
      "description": "Box packing rubber sheets provide superior cushioning and impact resistance for sensitive products and equipment. Material can be easily cut, routed, or die-cut to create custom inner box linings and protective packaging inserts."
    },
    {
      "id": "rubber-sheets",
      "name": "Die Cutting Rubber",
      "image": "images/products/die-cutting-rubber.jfif",
      "categories": ["rubber", "die-cutting", "industrial"],
      "material": "High-Resilience Rubber / Ejection Foam",
      "thickness": "1 mm – 28 mm",
      "size": "Sheets and custom strips",
      "colors": "Red, Yellow, Green, White, Black, Grey, Blue",
      "applications": "Die-making, ejection rubber for steel rule dies, printing & packaging die-cutting",
      "short": "High-resilience rubber sheets designed for ejection in die-cutting tools and packaging machinery.",
      "description": "Die cutting ejection rubber sheets provide high bounce resilience and tear resistance. Placed along steel rule dies, they efficiently eject cut cardboard, paper, or plastic materials after each pressing cycle."
    },
    {
      "id": "rubber-mats",
      "name": "School Working Sheets",
      "image": "images/products/School-working-sheet.jfif",
      "categories": ["crafts", "stationery", "foam"],
      "material": "EVA Foam / Polyethylene",
      "thickness": "2mm",
      "size": "A4, A3, and custom sheet sizes",
      "colors": "Assorted bright colors (Red, Blue, Yellow, Green, Pink, Orange, White, Black)",
      "applications": "School projects, arts & crafts, DIY model making, classroom teaching aids, soft cut-out shapes",
      "short": "Multi-colored soft foam sheets ideal for kids' school projects, crafting, and creative activities.",
      "description": "School working foam sheets are lightweight, easy to cut, non-toxic, and flexible. Designed specifically for students and educational activities, these vibrant sheets are perfect for art projects, craft modeling, and interactive classroom displays."
    },
    {
      "id": "shock-pads",
      "name": "Surgical Rubber Sheet",
      "image": "images/products/surgical-rubber-sheet.jfif",
      "categories": ["medical", "rubber"],
      "material": "Natural Latex / Medical Grade Silicone",
      "thickness": "3 mm – 12 mm",
      "size": "Rolls and pre-cut sheets",
      "colors": "Orange, Yellow, Purple, Pink, Red, Green, Light green, Blue, Brown, White, Black",
      "applications": "Hospital bed protection, surgical drapes, medical tubing, laboratory usage, protective barrier sheets",
      "short": "Medical-grade rubber sheets designed for hygiene protection, flexibility, and liquid resistance in healthcare environments.",
      "description": "Surgical rubber sheets offer high elasticity, waterproofing, and chemical resistance suitable for medical and laboratory applications. They provide a reliable, easy-to-sterilize protective layer for hospital beds, clinical procedures, and healthcare equipment."
    },
    {
      "id": "anti-vibration-pads",
      "name": "Interlocking Rubber Gym Flooring",
      "image": "images/products/rubber-gym-flooring.jfif",
      "categories": ["flooring", "rubber", "sports"],
      "material": "Recycled High-Density Rubber / SBR with EPDM Flecks",
      "thickness": "12 mm – 15 mm",
      "size": "500 mm x 500 mm, 1 m x 1 m interlocking tiles",
      "colors": "Black with Blue, Grey, Red, or Yellow EPDM flecks",
      "applications": "Commercial gyms, home workout areas, weightlifting zones, cross-training facilities, play areas",
      "short": "Heavy-duty interlocking rubber tiles designed for shock absorption and heavy equipment protection.",
      "description": "Interlocking rubber gym tiles provide high impact protection, noise reduction, and excellent slip resistance for heavy weight areas. Features a puzzle-edge design for easy tool-free assembly and seamless coverage."
    },
    {
      "id": "neoprene-sheets",
      "name": "Leatherboard Rubber Sheet (White)",
      "image": "images/products/leaderboard-rubber.jfif",
      "categories": ["footwear", "leatherboard", "insole"],
      "material": "Recycled Leather Fibers & Natural Rubber / Latex Binder",
      "thickness": "0.5 mm",
      "size": "Rolls and flat sheet cuts",
      "colors": "White, Off-White, Natural",
      "applications": "Footwear insoles, heel counters, shoe stiffeners, leather goods structural lining, belts, bookbinding",
      "short": "White bonded leather sheet combined with rubber binder for enhanced flexibility, shape retention, and footwear structure.",
      "description": "White leatherboard rubber sheets are crafted by bonding recycled leather fibers with natural rubber or latex. Offering excellent flex endurance, durability, and smooth finish, they are ideal for inner shoe components like counters, insoles, and structural reinforcement in leather products."
    },
    {
      "id": "foam-profiles",
      "name": "Textured Rubber Floor Mat",
      "image": "images/products/Rubber-floor-mate.jfif",
      "categories": ["matting", "flooring", "rubber"],
      "material": "Natural Rubber / Synthetic Rubber Compound",
      "thickness": "3mm",
      "size": "Standard mat sizes, rolls, and custom lengths",
      "colors": "Red, Black, Blue, White Green,",
      "applications": "Anti-slip floor covering, doorway mats, kitchen and workshop flooring, wet area protection, gym floor liners",
      "short": "Multi-patterned non-slip rubber floor mats for enhanced grip and moisture drainage.",
      "description": "Textured rubber floor mats feature anti-skid embossed patterns designed to provide maximum traction and safety in high-traffic or wet areas. Durable and waterproof, they are ideal for residential, commercial, and industrial floor protection."
    },
    {
      "id": "rubber-gaskets",
      "name": "Anti-Slip EVA Rubber Foam",
      "image": "images/products/eva-rubber-role.avif",
      "categories": ["foam", "eva", "matting"],
      "material": "Ethylene-Vinyl Acetate (EVA) / Rubber Foam",
      "thickness": "1 mm – 5 mm",
      "size": "Continuous rolls and pre-cut sheets",
      "colors": "Black, Red, Purple, Custom",
      "applications": "Yoga & exercise mats, drawer liners, anti-skid pad backing, footwear insoles, marine decking traction, craft cushioning",
      "short": "Flexible, high-grip EVA rubber foam rolls designed for shock absorption and anti-slip protection.",
      "description": "Anti-Slip EVA Rubber Foam rolls combine lightweight flexibility with superior surface grip. Water-resistant and shock-absorbing, these rolls are easily cut to size for athletic mats, protective surface liners, non-skid pads, and custom padding applications."
    },
    {
      "id": "custom-molded",
      "name": "Choti Dholki Rubber Sheet",
      "image": "images/products/choti-dholki.jfif",
      "categories": ["rubber", "soling", "matting"],
      "material": "Rubber / EVA Blend",
      "thickness": "3mm",
      "size": "Sheets and custom cut sizes",
      "colors": "Yellow",
      "applications": "Shoe soling, footwear repair, anti-slip mats, slippers & sandals, craft work",
      "short": "Textured rubber soling sheet featuring a small drum/dholki weave pattern for enhanced grip.",
      "description": "Choti Dholki rubber sheets feature a distinctive small-scale embossed pattern designed for durability and non-slip traction. High flexibility and wear resistance make them ideal for shoe soles, slippers, and surface lining."
    },
    {
      "id": "vip-rubber-foam",
      "name": "VIP Rubber Foam",
      "image": "images/products/vip-rubber.jfif",
      "categories": ["foam", "rubber", "cushioning"],
      "material": "High-Density EVA / Rubber Foam Blend",
      "thickness": "3 mm – 25 mm",
      "size": "Sheets, rolls, and pre-cut mats",
      "colors": "Black, Blue, Red, Grey, Custom",
      "applications": "Premium shoe insoles, orthopedic footwear, shock-absorbing padding, seating cushion liners, protective gear",
      "short": "Premium high-density rubber foam sheet offering superior comfort, bounce, and durability.",
      "description": "VIP Rubber Foam is a top-tier elastomeric foam material engineered for high resilience, long-lasting comfort, and exceptional compression resistance. Commonly used in high-grade footwear, specialized sports equipment, and ergonomic cushioning."
    },
    {
      "id": "banwar-rubber-sheet",
      "name": "Banwar Rubber Sheet",
      "image": "images/products/banwar-rubber.jfif",
      "categories": ["footwear", "soling", "rubber"],
      "material": "Rubber / EVA Blend",
      "thickness": "2 mm – 8 mm",
      "size": "Sheets and pre-cut soles",
      "colors": "Black, Brown, Tan, White, Custom",
      "applications": "Shoe insoles, outsole lining, footwear reinforcement, slipper soles, craft & repair",
      "short": "Durable rubber soling sheet engineered for shoe manufacturing, flexibility, and shape retention.",
      "description": "Banwar rubber sheets (commonly used in footwear insole and outsole construction) provide excellent structural support, moisture resistance, and flex endurance. Designed for easy cutting and bonding, they ensure long-lasting durability for shoes and sandals."
    },
    {
      "id": "ladies-sole-sheet",
      "name": "Ladies Sole Sheet",
      "image": "images/products/ladies-sole-sheet.jfif",
      "categories": ["footwear", "soling", "rubber"],
      "material": "EVA / Rubber Blend / Neolite",
      "thickness": "1.5 mm – 6 mm",
      "size": "Sheets and pre-cut soles",
      "colors": "Beige, Tan, Black, Nude, Brown, White, Custom",
      "applications": "Ladies footwear soling, heels, flat sandals, formal shoes, repair & replacement",
      "short": "Flexible, lightweight rubber soling sheets tailored for women's footwear and sandals.",
      "description": "Ladies Sole Sheets offer a sleek, lightweight, and fine-finished rubber surface specifically designed for women's heels, flats, and casual sandals. Formulated for excellent grip, flexibility, and neat die-cutting during shoe assembly."
    },
    {
      "id": "lehriya-design-rubber-sheet",
      "name": "Lehriya Design Rubber Sheet",
      "image": "images/products/lehriya-design.jfif",
      "categories": ["rubber", "soling", "matting"],
      "material": "Rubber / EVA Blend",
      "thickness": "3 mm – 10 mm",
      "size": "Sheets and custom cut sizes",
      "colors": "Red, Blue, Black, Green, Custom",
      "applications": "Shoe soling, chappal & slipper soles, anti-slip mats, footwear repair, surface grip lining",
      "short": "Textured rubber soling sheet featuring a classic wavy 'Lehriya' pattern for improved traction and aesthetic design.",
      "description": "Lehriya Design Rubber Sheets feature a distinctive wave-like embossed pattern that provides excellent non-slip grip and flex endurance. Highly popular in footwear manufacturing for slippers and casual shoes, as well as decorative anti-skid surface matting."
    },
    {
      "id": "coin-rubber-sheet",
      "name": "Coin Rubber Sheet",
      "image": "images/products/coin-rubber.jfif",
      "categories": ["matting", "flooring", "rubber"],
      "material": "Natural Rubber / SBR Rubber Compound",
      "thickness": "1.6 mm",
      "size": "Rolls, sheets, and custom cut sizes",
      "colors": "Black, Grey, Blue, Red, Custom",
      "applications": "Industrial flooring, walkway runners, garage floors, elevator flooring, vehicle lining, anti-slip surface protection",
      "short": "Heavy-duty rubber sheet with a coin-disc studs pattern for high-traction anti-slip flooring.",
      "description": "Coin Rubber Sheets feature an embossed round stud/coin pattern engineered to deliver high anti-slip traction, wear resistance, and easy cleaning. Ideal for protecting floors in commercial, industrial, and heavy foot-traffic areas."
    },
    {
      "id": "2-patti-chappal-rubber",
      "name": "2 Patti Chappal Rubber Sheet",
      "image": "images/products/chappal-sheet.jfif",
      "categories": ["footwear", "soling", "rubber"],
      "material": "EVA / Microcellular Rubber Blend",
      "thickness": "6 mm – 18 mm",
      "size": "Sheets and pre-cut flip-flop soles",
      "colors": "Black, Blue, Red, Yellow, Green, Custom",
      "applications": "Two-strap flip-flops (2 patti chappal), Hawaiian slippers, casual footwear manufacturing, sandal soling",
      "short": "Lightweight and flexible rubber sheet designed for manufacturing classic two-strap slippers and casual flip-flops.",
      "description": "2 Patti Chappal Rubber Sheets are engineered specifically for crafting durable, comfortable, and flexible flip-flop soles. Offering great shock absorption, water resistance, and die-cutting ease, these sheets are an essential component for everyday casual footwear production."
    },
    {
      "id": "grey-light-korea-rubber",
      "name": "Grey Light Korea Rubber Sheet",
      "image": "images/products/grey-korea.jfif",
      "categories": ["footwear", "soling", "rubber"],
      "material": "Korean Light EVA / Microcellular Rubber",
      "thickness": "2 mm – 12 mm",
      "size": "Sheets and pre-cut sole cuts",
      "colors": "Light Grey, Dark Grey, Custom",
      "applications": "Lightweight footwear soling, slipper midsoles, orthopedic insoles, sports shoe padding, craft liners",
      "short": "Premium lightweight Korean-grade grey rubber sheet offering high elasticity and low density.",
      "description": "Grey Light Korea Rubber Sheets are crafted from premium low-density microcellular rubber compound. Highly valued for its lightweight nature, excellent elasticity, and shock-absorption properties, it provides superior comfort and structural support for footwear and custom padding."
    },
    {
      "id": "desi-rubber-sheet",
      "name": "Desi Rubber Sheet",
      "image": "images/products/desi-rubber.jfif",
      "categories": ["footwear", "soling", "rubber"],
      "material": "Natural Rubber Blend / Recycled Vulcanized Rubber",
      "thickness": "3 mm – 15 mm",
      "size": "Standard sheets and custom cuts",
      "colors": "Black, Dark Brown, Natural Red, Custom",
      "applications": "Local footwear manufacturing, traditional chappal soles, heavy-duty shoe repair, industrial floor pads, agricultural matting",
      "short": "Economical and high-durability indigenous rubber sheet designed for tough wear and local footwear soling.",
      "description": "Desi Rubber Sheets are heavy-duty, budget-friendly rubber sheets manufactured for high abrasion resistance and durability. Widely used in traditional footwear craft, shoe repairs, and rugged utility padding where long service life and cost efficiency are required."
    },
    {
      "id": "china-rubber-multi",
      "name": "China Rubber Multi Sheet",
      "image": "images/products/china-multi.jfif",
      "categories": ["footwear", "soling", "rubber"],
      "material": "Multi-Layer EVA / Rubber Compound",
      "thickness": "3 mm – 15 mm",
      "size": "Sheets and pre-cut sole cuts",
      "colors": "Multi-Color (Layered Red, Blue, Yellow, Black, White)",
      "applications": "Multi-layer slipper soles, casual footwear midsoles, colorful crafts, sports shoe padding, sandals",
      "short": "Multi-layered colorful imported rubber sheet offering high durability, style, and cushioning.",
      "description": "China Rubber Multi sheets feature vibrant multi-color sandwich layers crafted from high-density EVA and rubber compounds. Engineered for easy die-cutting, superior flexibility, and eye-catching aesthetics, they are widely used in casual flip-flop production and custom footwear designs."
    },
    {
      "id": "taiwan-rubber-sheet",
      "name": "Taiwan Rubber Sheet",
      "image": "images/products/taiwan-rubber.jfif",
      "categories": ["footwear", "soling", "rubber"],
      "material": "High-Grade EVA / Synthetic Rubber Blend",
      "thickness": "2 mm – 12 mm",
      "size": "Sheets and pre-cut sole cuts",
      "colors": "Black, Grey, White, Cream, Custom",
      "applications": "High-quality shoe soling, premium slipper soles, sports shoe insoles, orthopedic footwear, durable grip lining",
      "short": "High-density imported Taiwan rubber sheet known for exceptional durability, finish, and flexibility.",
      "description": "Taiwan Rubber Sheets are premium-grade elastomeric sheets engineered for high abrasion resistance, superior flexibility, and smooth surface finishing. Popular in high-end footwear manufacturing, they offer reliable cushioning and long-lasting performance."
    },
    {
      "id": "germany-hard-jump",
      "name": "Germany Hard Jump Rubber Sheet",
      "image": "images/products/japanies.jfif",
      "categories": ["footwear", "soling", "industrial"],
      "material": "High-Density Hard Rubber / Compact Vulcanized Synthetic Rubber",
      "thickness": "10 mm",
      "size": "Sheets and pre-cut soles",
      "colors": "Black, Dark Brown, Natural Tan, Custom",
      "applications": "Formal shoe heels, boot outsoles, heavy-duty footwear soling, industrial vibration pads, high-impact shoe repair",
      "short": "Premium high-rigidity German-grade hard rubber sheet built for extreme wear resistance and heavy impact.",
      "description": "Germany Hard Jump Rubber Sheets are engineered for high-load durability, exceptional stiffness, and superior abrasion resistance. Formulated with dense vulcanized rubber compounds, they are widely used in formal footwear heel lifts, rugged boot outsoles, and heavy-duty structural shoe repairs."
    }];

  const opt = document.getElementById("product");
  PRODUCTS.forEach((product, index) => {
    console.log(`Adding product option: ${product.name} (ID: ${product.id})`);
    if (opt) {
      opt.innerHTML += `<option value="${product.id}">${product.name}</option>`;
    }

  })



  window.RUBBERTECH = { SITE, PRODUCTS };

  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const overlay = document.querySelector(".nav-overlay");
  const toTop = document.querySelector(".to-top");

  function closeNav() {
    document.body.classList.remove("nav-open");
    if (navToggle) navToggle.setAttribute("aria-expanded", "false");
  }

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      const open = document.body.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
  }
  if (overlay) overlay.addEventListener("click", closeNav);
  document.querySelectorAll(".nav a").forEach((link) => link.addEventListener("click", closeNav));
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1100) closeNav();
  });

  const onScroll = () => {
    if (header) header.classList.toggle("is-sticky", window.scrollY > 12);
    if (toTop) toTop.classList.toggle("is-visible", window.scrollY > 420);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (toTop) {
    toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  const rawPage = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  const page = rawPage.endsWith(".html") ? rawPage : `${rawPage || "index"}.html`;
  document.querySelectorAll(".nav a[data-page]").forEach((link) => {
    if (link.dataset.page === page || (page === "" && link.dataset.page === "index.html")) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const countUp = (el) => {
    if (el.dataset.counted) return;
    el.dataset.counted = "1";
    const target = Number(el.dataset.count);
    if (!Number.isFinite(target)) return;
    const suffix = el.textContent.replace(/[\d.,\s]/g, "") || "+";
    if (reduceMotion) {
      el.textContent = target + suffix;
      return;
    }
    const start = performance.now();
    const duration = 1100;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (t < 1) requestAnimationFrame(tick);
    };
    el.textContent = "0" + suffix;
    requestAnimationFrame(tick);
  };

  if ("IntersectionObserver" in window) {
    document.querySelectorAll(".product-grid .reveal, .feature-grid .reveal, .industry-grid .reveal, .products-catalog .product-card").forEach((el, i) => {
      el.style.setProperty("--d", `${(i % 6) * 0.08}s`);
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    const statsIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.querySelectorAll("b[data-count]").forEach(countUp);
          statsIo.unobserve(entry.target);
        });
      },
      { threshold: 0.35 }
    );
    document.querySelectorAll(".stats").forEach((el) => statsIo.observe(el));
  } else {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("revealed"));
    document.querySelectorAll(".stat b[data-count]").forEach(countUp);
  }

  /* Featured slider */
  const viewport = document.querySelector("[data-slider]");
  if (viewport) {
    const track = viewport.querySelector(".slider-track");
    const prev = document.querySelector("[data-slider-prev]");
    const next = document.querySelector("[data-slider-next]");
    let index = 0;

    const visibleCount = () => {
      const w = window.innerWidth;
      if (w <= 560) return 1;
      if (w <= 1024) return 2;
      if (w <= 1200) return 3;
      return 4;
    };

    const maxIndex = () => Math.max(0, track.children.length - visibleCount());

    const update = () => {
      const card = track.children[0];
      if (!card) return;
      const gap = parseFloat(getComputedStyle(track).gap) || 20;
      const step = card.getBoundingClientRect().width + gap;
      index = Math.min(index, maxIndex());
      track.style.transform = `translateX(${-index * step}px)`;
    };

    if (prev) prev.addEventListener("click", () => { index = Math.max(0, index - 1); update(); });
    if (next) next.addEventListener("click", () => { index = Math.min(maxIndex(), index + 1); update(); });
    window.addEventListener("resize", update);
    update();
  }

  /* Product filter */
  // const catalog = document.querySelector("[data-catalog]");
  // if (catalog) {
  //   const buttons = document.querySelectorAll("[data-filter]");
  //   const empty = document.querySelector("[data-empty]");
  //   buttons.forEach((btn) => {
  //     btn.addEventListener("click", () => {
  //       buttons.forEach((b) => {
  //         b.classList.remove("is-active");
  //         b.setAttribute("aria-pressed", "false");
  //       });
  //       btn.classList.add("is-active");
  //       btn.setAttribute("aria-pressed", "true");
  //       const key = btn.dataset.filter;
  //       let shown = 0;
  //       catalog.querySelectorAll("[data-categories]").forEach((card) => {
  //         const match = key === "all" || card.dataset.categories.split(" ").includes(key);
  //         card.classList.toggle("is-hidden", !match);
  //         if (match) shown += 1;
  //       });
  //       if (empty) empty.style.display = shown ? "none" : "block";
  //     });
  //   });
  // }

  /* Product modal */
  const modal = document.querySelector("#product-modal");
  if (modal) {
    const title = modal.querySelector("[data-m-title]");
    const desc = modal.querySelector("[data-m-desc]");
    const img = modal.querySelector("[data-m-img]");
    const quote = modal.querySelector("[data-m-quote]");
    const fields = {
      material: modal.querySelector("[data-m-material]"),
      thickness: modal.querySelector("[data-m-thickness]"),
      size: modal.querySelector("[data-m-size]"),
      colors: modal.querySelector("[data-m-colors]"),
      applications: modal.querySelector("[data-m-applications]"),
    };

    const openModal = (product) => {
      title.textContent = product.name;
      desc.textContent = product.description;
      img.src = product.image;
      img.alt = product.name;
      fields.material.textContent = product.material;
      fields.thickness.textContent = product.thickness;
      fields.size.textContent = product.size;
      fields.colors.textContent = product.colors;
      fields.applications.textContent = product.applications;
      quote.href = `contact.html?product=${encodeURIComponent(product.name)}#quote`;
      modal.classList.add("is-open");
      document.body.classList.add("modal-open");
      document.body.style.overflow = "hidden";
      modal.querySelector(".modal-close").focus();
    };

    const closeModal = () => {
      modal.classList.remove("is-open");
      document.body.classList.remove("modal-open");
      document.body.style.overflow = "";
    };

    document.querySelectorAll("[data-product]").forEach((btn) => {
      btn.addEventListener("click", (event) => {
        event.preventDefault();
        const product = PRODUCTS.find((item) => item.id === btn.dataset.product);
        if (product) openModal(product);
      });
    });

    modal.querySelectorAll("[data-close-modal]").forEach((el) => el.addEventListener("click", closeModal));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeModal();
    });
  }

  /* FAQ accordion */
  document.querySelectorAll(".faq-item button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const open = item.classList.contains("is-open");
      item.parentElement.querySelectorAll(".faq-item").forEach((other) => {
        other.classList.remove("is-open");
        other.querySelector("button").setAttribute("aria-expanded", "false");
      });
      if (!open) {
        item.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* Contact form */
  const form = document.querySelector("#inquiry-form");
  if (form) {
    const params = new URLSearchParams(location.search);
    const preset = params.get("product");
    if (preset && form.product) form.product.value = preset;

    const setError = (input, message) => {
      const field = input.closest(".field");
      field.classList.toggle("error", Boolean(message));
      field.querySelector(".hint").textContent = message || "";
    };

    const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    const isPhone = (value) => /^[+]?[\d\s()-]{7,20}$/.test(value);

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      let valid = true;
      const { fullname, company, email, phone, product, quantity, message } = form;

      if (!fullname.value.trim() || fullname.value.trim().length < 2) {
        setError(fullname, "Please enter your full name.");
        valid = false;
      } else setError(fullname, "");

      if (company.value && company.value.trim().length < 2) {
        setError(company, "Enter a valid company name or leave blank.");
        valid = false;
      } else setError(company, "");

      if (!isEmail(email.value.trim())) {
        setError(email, "Enter a valid email address.");
        valid = false;
      } else setError(email, "");

      if (!isPhone(phone.value.trim())) {
        setError(phone, "Enter a valid phone number.");
        valid = false;
      } else setError(phone, "");

      if (!product.value) {
        setError(product, "Select a product.");
        valid = false;
      } else setError(product, "");

      if (quantity.value && Number(quantity.value) <= 0) {
        setError(quantity, "Quantity must be greater than zero.");
        valid = false;
      } else setError(quantity, "");

      if (!message.value.trim() || message.value.trim().length < 5) {
        setError(message, "Please describe your requirement (at least 5 characters).");
        valid = false;
      } else setError(message, "");

      if (!valid) return;

      const selected = PRODUCTS.find((item) => item.name === product.value);
      const lines = [
        `Hello ${SITE.name},`,
        "",
        "I would like a quotation for the following product:",
        "",
        `*Product:* ${product.value}`,
      ];

      if (selected) {
        lines.push(
          `*Material:* ${selected.material}`,
          `*Thickness:* ${selected.thickness}`,
          `*Size:* ${selected.size}`,
          `*Colour options:* ${selected.colors}`,
          `*Applications:* ${selected.applications}`,
          `*Description:* ${selected.description}`
        );
      }

      lines.push(
        `*Quantity:* ${quantity.value.trim() || "Not specified"}`,
        "",
        "*Customer details:*",
        `Name: ${fullname.value.trim()}`,
        `Company: ${company.value.trim() || "Not specified"}`,
        `Email: ${email.value.trim()}`,
        `Phone: ${phone.value.trim()}`,
        "",
        "*Requirement:*",
        message.value.trim()
      );

      const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
      const success = document.querySelector(".form-success");
      success.classList.add("is-visible");
      success.focus();
      const opened = window.open(whatsappUrl, "_blank", "noopener");
      if (!opened) {
        window.location.href = whatsappUrl;
      }
    });
  }




})();
