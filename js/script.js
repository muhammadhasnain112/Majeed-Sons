/* RubberTech Industries — site behaviour (vanilla JS) */
(() => {
  const SITE = {
    name: "RubberTech Industries",
    email: "info@rubbertech.com",
    phone: "+92 300 1234567",
    whatsapp: "923001234567",
    location: "Karachi, Pakistan",
  };

  const PRODUCTS = [
    {
      id: "eva-foam",
      name: "EVA Foam",
      image: "images/products/eva-foam.jpg",
      categories: ["foam", "sheets"],
      material: "Ethylene-Vinyl Acetate (EVA)",
      thickness: "2 mm – 100 mm",
      size: "Sheets, rolls and custom cut parts",
      colors: "Black, white, grey and custom colours",
      applications: "Packaging, sports goods, footwear, marine, insulation",
      short: "Lightweight closed-cell foam with strong cushioning and chemical resistance.",
      description:
        "EVA foam is a versatile closed-cell material used wherever impact absorption, water resistance and clean fabrication are required. RubberTech supplies standard sheets and custom densities for industrial and commercial buyers.",
    },
    {
      id: "epdm-foam",
      name: "EPDM Foam",
      image: "images/products/epdm-foam.jpg",
      categories: ["foam", "industrial"],
      material: "EPDM closed-cell foam",
      thickness: "3 mm – 50 mm",
      size: "Sheets, strips and die-cut gaskets",
      colors: "Black, grey",
      applications: "HVAC, automotive weatherseals, outdoor gaskets, insulation",
      short: "Weather-resistant foam for sealing, insulation and outdoor applications.",
      description:
        "EPDM foam performs in heat, ozone and moisture. It is specified for HVAC insulation, automotive sealing and outdoor industrial gaskets where long-term durability matters.",
    },
    {
      id: "pe-foam",
      name: "PE Foam",
      image: "images/products/pe-foam.jpg",
      categories: ["foam"],
      material: "Polyethylene foam",
      thickness: "1 mm – 100 mm",
      size: "Planks, rolls and fabricated inserts",
      colors: "White, pink, blue, custom",
      applications: "Protective packaging, construction joints, sports padding",
      short: "Closed-cell polyethylene foam for packaging and construction.",
      description:
        "PE foam offers a clean, resilient barrier against shock and moisture. We convert planks and rolls into packaging inserts, expansion joints and protective liners to your drawing.",
    },
    {
      id: "silicone-rubber",
      name: "Silicone Rubber",
      image: "images/products/silicone-rubber.jpg",
      categories: ["rubber", "custom"],
      material: "VMQ silicone rubber",
      thickness: "0.5 mm – 20 mm",
      size: "Sheets, extruded profiles and molded parts",
      colors: "Red, translucent, white, custom",
      applications: "Food equipment, electronics, high-temperature seals",
      short: "High-temperature silicone for sealing, gaskets and hygienic applications.",
      description:
        "Silicone rubber remains flexible from low to high temperatures and is widely used in electrical, medical-adjacent and food-processing environments. Available as sheet, extrusion or custom molding.",
    },
    {
      id: "rubber-sheets",
      name: "Rubber Sheets",
      image: "images/products/rubber-sheet.jpg",
      categories: ["rubber", "sheets"],
      material: "NR, SBR, NBR, EPDM and neoprene",
      thickness: "1 mm – 50 mm",
      size: "Standard rolls and cut-to-size sheets",
      colors: "Black, red, custom",
      applications: "Flooring, lining, gaskets, general industrial fabrication",
      short: "Industrial rubber sheeting in multiple compounds and thicknesses.",
      description:
        "Our rubber sheet range covers commercial, oil-resistant and weather-grade compounds. Sheets can be supplied in rolls or cut to size for fabrication, lining and gasket production.",
    },
    {
      id: "rubber-mats",
      name: "Rubber Mats",
      image: "images/products/rubber-mat.jpg",
      categories: ["rubber", "sheets", "industrial"],
      material: "Recycled and virgin rubber",
      thickness: "3 mm – 25 mm",
      size: "Tiles, rolls and custom mats",
      colors: "Black, speckled, custom",
      applications: "Workshops, gyms, walkways, anti-fatigue stations",
      short: "Durable rubber matting for safety, traction and floor protection.",
      description:
        "Rubber mats protect floors and operators in industrial, commercial and sports environments. Options include coin, checker and anti-fatigue surfaces with custom sizing.",
    },
    {
      id: "shock-pads",
      name: "Shock Pads",
      image: "images/products/shock-pad.jpg",
      categories: ["industrial", "foam"],
      material: "High-density rubber / foam composite",
      thickness: "10 mm – 50 mm",
      size: "Tiles and custom pads",
      colors: "Black, grey",
      applications: "Playgrounds, sports turf, machinery bases",
      short: "Impact-absorbing pads for sports surfaces and equipment isolation.",
      description:
        "Shock pads reduce impact energy under synthetic turf, playgrounds and heavy equipment. We supply standard tiles and engineered pads to specified compression sets.",
    },
    {
      id: "anti-vibration-pads",
      name: "Anti-Vibration Pads",
      image: "images/products/anti-vibration-pad.jpg",
      categories: ["industrial", "rubber"],
      material: "Natural rubber with optional metal inserts",
      thickness: "10 mm – 40 mm",
      size: "Squares, mounts and custom footprints",
      colors: "Black",
      applications: "HVAC units, generators, presses, pumps",
      short: "Isolation pads and mounts that reduce noise and machine vibration.",
      description:
        "Anti-vibration pads isolate rotating and impact machinery from the building structure. Available as simple pads or bonded mounts with metal plates for bolted installation.",
    },
    {
      id: "neoprene-sheets",
      name: "Neoprene Sheets",
      image: "images/products/neoprene-sheet.jpg",
      categories: ["rubber", "sheets"],
      material: "CR neoprene",
      thickness: "1 mm – 25 mm",
      size: "Sheets and die-cut parts",
      colors: "Black, grey",
      applications: "Gaskets, marine, HVAC, oil-resistant sealing",
      short: "Oil and weather resistant neoprene for gaskets and lining.",
      description:
        "Neoprene balances oil, weather and flame resistance, making it a reliable choice for industrial gaskets, marine fenders and HVAC sealing.",
    },
    {
      id: "foam-profiles",
      name: "Foam Profiles",
      image: "images/products/foam-profiles.jpg",
      categories: ["foam", "custom"],
      material: "EPDM, silicone or PE foam",
      thickness: "As per profile drawing",
      size: "Extruded lengths and cut gaskets",
      colors: "Black, grey, custom",
      applications: "Doors, windows, enclosures, weatherstripping",
      short: "Extruded foam seals and profiles manufactured to drawing.",
      description:
        "We extrude and convert foam profiles for weatherstripping, enclosure sealing and edge protection. Send a section drawing and we will recommend compound and density.",
    },
    {
      id: "rubber-gaskets",
      name: "Rubber Gaskets",
      image: "images/products/rubber-gaskets.jpg",
      categories: ["rubber", "industrial", "custom"],
      material: "NBR, EPDM, silicone, neoprene",
      thickness: "0.5 mm – 12 mm",
      size: "Die-cut, water-jet and molded gaskets",
      colors: "Black, red, custom",
      applications: "Flanges, pumps, electrical enclosures, process equipment",
      short: "Precision-cut and molded gaskets for industrial sealing.",
      description:
        "Gaskets are cut or molded from the compound that matches your media, temperature and pressure. Prototypes and production volumes are both supported.",
    },
    {
      id: "custom-molded",
      name: "Custom Molded Rubber Products",
      image: "images/products/custom-molded.jpg",
      categories: ["custom", "rubber"],
      material: "Specified by application",
      thickness: "To drawing",
      size: "Prototype to production volumes",
      colors: "As specified",
      applications: "OEM parts, bumpers, bushings, seals, special components",
      short: "Application-engineered molded rubber parts made to your specification.",
      description:
        "When a catalogue part is not enough, RubberTech develops custom molded components. Share drawings, samples or performance targets and our team will propose compound, tooling and lead time.",
    },
  ];

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

  if ("IntersectionObserver" in window) {
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
  } else {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("revealed"));
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
  const catalog = document.querySelector("[data-catalog]");
  if (catalog) {
    const buttons = document.querySelectorAll("[data-filter]");
    const empty = document.querySelector("[data-empty]");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((b) => {
          b.classList.remove("is-active");
          b.setAttribute("aria-pressed", "false");
        });
        btn.classList.add("is-active");
        btn.setAttribute("aria-pressed", "true");
        const key = btn.dataset.filter;
        let shown = 0;
        catalog.querySelectorAll("[data-categories]").forEach((card) => {
          const match = key === "all" || card.dataset.categories.split(" ").includes(key);
          card.classList.toggle("is-hidden", !match);
          if (match) shown += 1;
        });
        if (empty) empty.style.display = shown ? "none" : "block";
      });
    });
  }

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
      document.body.style.overflow = "hidden";
      modal.querySelector(".modal-close").focus();
    };

    const closeModal = () => {
      modal.classList.remove("is-open");
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

      if (!message.value.trim() || message.value.trim().length < 10) {
        setError(message, "Please describe your requirement (at least 10 characters).");
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
