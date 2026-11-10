
import React, { useState } from "react";
import {
  ArrowUpRight,
  Menu,
  X,
  Leaf,
  ShieldCheck,
  Globe2,
  Factory,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Search,
  Sparkles
} from "lucide-react";
import "./App.css";


const products = [
  {
    no: "01", title: "Cotton Yarns", category: "Cotton",
    desc: "Versatile cotton yarn options for weaving, knitting and a wide range of textile applications.",
    tags: "Carded · Combed · Compact", icon: Leaf,
    image: "https://images.squarespace-cdn.com/content/v1/67f5d3c8e1507762e95ea8e4/62a687d7-cb76-4f8d-a7e4-ead19651a272/8-4-cotton-cone-weaving-yarn%2B%282%29.jpg"
  },
  {
    no: "02", title: "Spandex Yarns", category: "Speciality",
    desc: "Stretch yarn options designed to add flexibility, comfort and shape retention to fabrics.",
    tags: "Stretch · Elasticity · Performance", icon: CheckCircle2,
    image: "https://muzteks.com/Content/images/2022/4/20/401-penye-compact-67d184aa.jpg"
  },
  {
    no: "03", title: "Dyed & Melange Yarns", category: "Fancy",
    desc: "Colour-rich and blended-effect yarns to create distinctive looks and textile character.",
    tags: "Dyed yarn · Melange · Colour effects", icon: Sparkles,
    image: "https://www.merserizeiplik.com/resimler/baslik/1-webp-1669980211.393001.jpg"
  },
  {
    no: "04", title: "Open-End (OE) Yarns", category: "Cotton",
    desc: "Open-end yarn options for dependable performance across suitable textile applications.",
    tags: "OE cotton · Weaving · Knitting", icon: Factory,
    image: "https://revolutionfibers.com/cdn/shop/files/lofty-8-4-cotton-yarn-10-color-cone-transparent-background.png?v=1746585805&width=2048"
  },
  {
    no: "05", title: "Eli-Twist Yarns", category: "Speciality",
    desc: "Specialist twisted yarn options for customers seeking strength and consistent yarn structure.",
    tags: "Twist construction · Speciality", icon: ShieldCheck,
    image: "https://threadcollective.com.au/cdn/shop/products/ashfordunmercerisedcottton.png?crop=center&height=1577&v=1680230767&width=1577"
  },
  {
    no: "06", title: "Gassed Yarns", category: "Speciality",
    desc: "Yarns with a refined surface finish for applications where a cleaner appearance is desired.",
    tags: "Smooth finish · Refined surface", icon: CheckCircle2,
    image: "https://muzteks.com/Content/images/2022/4/20/401-penye-compact-67d184aa.jpg"
  },
  {
    no: "07", title: "Dye Package Yarns", category: "Speciality",
    desc: "Yarn options prepared for package dyeing requirements and colour-focused production.",
    tags: "Package dyeing · Colour processing", icon: Globe2,
    image: "https://revolutionfibers.com/cdn/shop/files/lofty-8-4-cotton-yarn-10-color-cone-transparent-background.png?v=1746585805&width=2048"
  },
  {
    no: "08", title: "Slub Yarns", category: "Fancy",
    desc: "Textured yarns with intentional thick-and-thin effects for distinctive fabric surfaces.",
    tags: "Textured · Slub effects · Fashion fabrics", icon: Sparkles,
    image: "https://www.merserizeiplik.com/resimler/baslik/1-webp-1669980211.393001.jpg"
  },
  {
    no: "09", title: "Ply Yarns", category: "Speciality",
    desc: "Ply yarn options created by combining strands to suit different fabric and end-use needs.",
    tags: "Two-ply · Multi-ply · Textile use", icon: Factory,
    image: "https://images.squarespace-cdn.com/content/v1/67f5d3c8e1507762e95ea8e4/62a687d7-cb76-4f8d-a7e4-ead19651a272/8-4-cotton-cone-weaving-yarn%2B%282%29.jpg"
  },
  {
    no: "10", title: "Sustainable Yarns", category: "Sustainable",
    desc: "Thoughtfully sourced fibre options for businesses working towards more responsible textiles.",
    tags: "Organic · Recycled · Responsible fibres", icon: Leaf,
    image: "https://revolutionfibers.com/cdn/shop/files/lofty-8-4-cotton-yarn-10-color-cone-transparent-background.png?v=1746585805&width=2048"
  },
  {
    no: "11", title: "Fancy Yarns", category: "Fancy",
    desc: "Creative yarn constructions and surface effects to bring individuality to fabric collections.",
    tags: "Slub · Melange · Special effects", icon: Sparkles,
    image: "https://www.merserizeiplik.com/resimler/baslik/1-webp-1669980211.393001.jpg"
  },
  {
    no: "12", title: "Blended Yarns", category: "Blended",
    desc: "Fibre combinations selected to balance comfort, appearance and performance requirements.",
    tags: "Cotton blends · Polyester blends · Modal blends", icon: Factory,
    image: "https://images.squarespace-cdn.com/content/v1/67f5d3c8e1507762e95ea8e4/62a687d7-cb76-4f8d-a7e4-ead19651a272/8-4-cotton-cone-weaving-yarn%2B%282%29.jpg"
  },
  {
    no: "13", title: "Combed, Gassed & Mercerised Yarns", category: "Speciality",
    desc: "Refined yarn choices offering a smoother surface and enhanced appearance for selected applications.",
    tags: "Combed cotton · Gassed · Mercerised", icon: ShieldCheck,
    image: "https://muzteks.com/Content/images/2022/4/20/401-penye-compact-67d184aa.jpg"
  },
  {
    no: "14", title: "Pima, Giza & Ultima Cotton", category: "Premium Cotton",
    desc: "Premium cotton varieties for high-end textile products and discerning buyers.",
    tags: "Pima · Giza · Ultima", icon: Globe2,
    image: "https://threadcollective.com.au/cdn/shop/products/ashfordunmercerisedcottton.png?crop=center&height=1577&v=1680230767&width=1577"
  },
  {
    no: "15", title: "High-End Application Yarns", category: "Premium Cotton",
    desc: "Speciality yarn sourcing to support demanding applications and premium textile products.",
    tags: "Premium applications · Speciality sourcing", icon: CheckCircle2,
    image: "https://images.squarespace-cdn.com/content/v1/67f5d3c8e1507762e95ea8e4/62a687d7-cb76-4f8d-a7e4-ead19651a272/8-4-cotton-cone-weaving-yarn%2B%282%29.jpg"
  },
  {
    no: "16", title: "Core Spun & Core Spun Slub Yarns", category: "Speciality",
    desc: "Core-spun constructions, including slub effects, for specialised fabric requirements.",
    tags: "Core spun · Core spun slub", icon: ShieldCheck,
    image: "https://www.merserizeiplik.com/resimler/baslik/1-webp-1669980211.393001.jpg"
  },
  {
    no: "17", title: "Polyester Yarns", category: "Synthetic",
    desc: "Polyester yarn options for a broad range of weaving, knitting and textile production needs.",
    tags: "Synthetic fibre · Weaving · Knitting", icon: Factory,
    image: "https://revolutionfibers.com/cdn/shop/files/lofty-8-4-cotton-yarn-10-color-cone-transparent-background.png?v=1746585805&width=2048"
  },
  {
    no: "18", title: "Polyester Viscose Yarns", category: "Blended",
    desc: "Polyester-viscose blends for customers seeking a combination of fibre characteristics.",
    tags: "Polyester · Viscose · Blended yarn", icon: Factory,
    image: "https://images.squarespace-cdn.com/content/v1/67f5d3c8e1507762e95ea8e4/62a687d7-cb76-4f8d-a7e4-ead19651a272/8-4-cotton-cone-weaving-yarn%2B%282%29.jpg"
  },
  {
    no: "19", title: "Modal Yarns", category: "Natural Fibres",
    desc: "Modal fibre yarn options for soft-feel textile applications and selected fabric blends.",
    tags: "Modal fibre · Soft feel · Blends", icon: Leaf,
    image: "https://threadcollective.com.au/cdn/shop/products/ashfordunmercerisedcottton.png?crop=center&height=1577&v=1680230767&width=1577"
  },
  {
    no: "20", title: "Flex Yarns", category: "Speciality",
    desc: "Flex yarn options available for customers with specific textile sourcing requirements.",
    tags: "Speciality yarn · Custom requirements", icon: CheckCircle2,
    image: "https://muzteks.com/Content/images/2022/4/20/401-penye-compact-67d184aa.jpg"
  },
  {
    no: "21", title: "Viscose Vortex Yarns", category: "Blended",
    desc: "Vortex-spun viscose yarn options for selected spinning, weaving and knitting applications.",
    tags: "Viscose · Vortex spinning", icon: Factory,
    image: "https://images.squarespace-cdn.com/content/v1/67f5d3c8e1507762e95ea8e4/62a687d7-cb76-4f8d-a7e4-ead19651a272/8-4-cotton-cone-weaving-yarn%2B%282%29.jpg"
  },
  {
    no: "22", title: "Tencel Yarns", category: "Sustainable",
    desc: "Tencel fibre yarn options for customers exploring modern cellulosic textile materials.",
    tags: "Tencel · Cellulosic fibre", icon: Leaf,
    image: "https://threadcollective.com.au/cdn/shop/products/ashfordunmercerisedcottton.png?crop=center&height=1577&v=1680230767&width=1577"
  },
  {
    no: "23", title: "Bamboo Yarns", category: "Natural Fibres",
    desc: "Bamboo-based yarn options for selected apparel, knitting and textile applications.",
    tags: "Bamboo fibre · Textile blends", icon: Leaf,
    image: "https://revolutionfibers.com/cdn/shop/files/lofty-8-4-cotton-yarn-10-color-cone-transparent-background.png?v=1746585805&width=2048"
  },
  {
    no: "24", title: "Organic Cotton Yarns", category: "Sustainable",
    desc: "Organic cotton yarn options for buyers seeking fibre sourcing aligned with their requirements.",
    tags: "Organic cotton · Responsible sourcing", icon: Leaf,
    image: "https://muzteks.com/Content/images/2022/4/20/401-penye-compact-67d184aa.jpg"
  }
];

const yarnRange = [
  "Cotton (Carded / Combed & Compact)",
  "Spandex",
  "Dyed & Melange Yarn",
  "OE (Open-End) Yarn",
  "Eli-Twist",
  "Gassed Yarn",
  "Dye Package",
  "Slub Yarn",
  "Ply Yarn",
  "Sustainable Yarns",
  "Fancy Yarns",
  "Blended Yarns",
  "Combed Gassed Mercerised Yarn",
  "Pima / Giza / Ultima",
  "High-End Use Yarn",
  "Core Spun Yarn & Core Spun Slub Yarn",
  "Polyester Yarns",
  "Polyester Viscose Yarns",
  "Modal Yarns",
  "Flex Yarns",
  "Viscose Vortex Yarns",
  "Tencel Yarns",
  "Bamboo Yarns",
  "Organic Cotton Yarns"
];

const categories = [
  "All",
  "Cotton",
  "Synthetic",
  "Sustainable",
  "Fancy",
  "Blended",
  "Premium Cotton",
  "Natural Fibres",
  "Speciality"
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    interest: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const updateForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const filteredProducts = products.filter((product) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      product.title.toLowerCase().includes(search) ||
      product.desc.toLowerCase().includes(search) ||
      product.tags.toLowerCase().includes(search);

    const matchesCategory =
      activeCategory === "All" ||
      product.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const chooseProduct = (productName) => {
    setForm({
      ...form,
      interest: productName
    });

    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  const submitEnquiry = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Website enquiry from ${form.name}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}
Company: ${form.company}
Email: ${form.email}
Phone: ${form.phone}
Interested in: ${form.interest}
Message: ${form.message}`
    );

    window.location.href =
      `mailto:raju.hariyarn@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  return (
    <>
      {/* TOP BAR */}
      <div className="topline">
        <div className="container topline-inner">
          <span>Hari Yarn Trading Co. Raju & Associates</span>

          <div>
            <a href="mailto:raju.hariyarn@gmail.com">
              raju.hariyarn@gmail.com
            </a>
            <span className="top-sep">|</span>
            <a href="mailto:cpramesh.hariyarn@gmail.com">
              cpramesh.hariyarn@gmail.com
            </a>
            <span className="top-sep">|</span>
            <a href="https://hytcoyarns.in" target="_blank" rel="noreferrer">
              www.hytcoyarns.in
            </a>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="header">
        <div className="container nav-container">
          <a href="#home" className="brand" onClick={closeMenu}>
            <img src="/hytco-logo.jpg" alt="HYTCO Logo" />
            <span>
              <strong>HYTCO</strong>
              <small>Hari Yarn Trading Co. Raju & Associates</small>
              <small className="brand-proprietor">Raju Addagatla | Proprietor</small>
            </span>
          </a>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About Us</a>
            <a href="#products" onClick={closeMenu}>Yarn Range</a>
            <a href="#quality" onClick={closeMenu}>Quality</a>
            <a href="#network" onClick={closeMenu}>Our Network</a>
            <a href="#contact" className="nav-contact" onClick={closeMenu}>
              Contact Us <ArrowUpRight size={16} />
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-overlay"></div>

        <div className="container hero-content">
          <p className="eyebrow">
            <span></span> QUALITY YARN SOURCING & TRADING
          </p>

          <h1>
            Connecting Quality
            <br />
            <em>Yarns</em> With Possibilities.
          </h1>

          <p className="hero-description hero-tagline">
            “Just knock at HYTCO – you can surely get what you want any type, any blend OR any Creation”
          </p>

          <div className="hero-buttons">
            <a href="#products" className="button button-gold">
              Explore Our Yarns <ArrowUpRight size={18} />
            </a>

            <a href="#contact" className="button button-outline">
              Send an Enquiry
            </a>
          </div>

          <div className="hero-note">
            <span>40+</span>
            <p>Years of textile industry experience</p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="container stats-grid">
          <div>
            <strong>40+</strong>
            <span>Years of Experience</span>
          </div>
          <div>
            <strong>24+</strong>
            <span>Yarn Varieties</span>
          </div>
          <div>
            <strong>4</strong>
            <span>Business Locations</span>
          </div>
          <div>
            <strong>Global</strong>
            <span>Sourcing Network</span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section about-section" id="about">
        <div className="container about-grid">
          <div className="about-visual">
            <img
              src="https://www.dktextileind.com/assets/images/aboutus-img.jpg"
              alt="Textile yarn manufacturing facility"
              loading="lazy"
            />
            <div className="experience-card">
              <strong>40+</strong>
              <span>Years of Experience</span>
            </div>
          </div>

          <div className="about-content">
            <p className="section-label">ABOUT OUR COMPANY</p>

            <h2>
              Building Trust Through
              <em> Quality & Relationships</em>
            </h2>

            <p>
              Hari Yarn Trading Co. & Associates is engaged in yarn
              trading and sourcing, serving weaving and knitting
              centres, corporate buyers, spinning mills and exporters.
            </p>

            <p>
              With 40 years of industry experience, we focus on
              dependable sourcing, quality-conscious selection and
              long-term business relationships.
            </p>

            <div className="about-points">
              <div><CheckCircle2 /> Customer-focused sourcing</div>
              <div><CheckCircle2 /> Wide range of yarn varieties</div>
              <div><CheckCircle2 /> Quality-conscious approach</div>
              <div><CheckCircle2 /> Long-term business relationships</div>
            </div>

            <a href="#contact" className="text-link">
              Connect With Our Team <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section products-section" id="products">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">OUR PRODUCT PORTFOLIO</p>
            <h2>Explore Our <em>Yarn Range</em></h2>
            <p>
              Discover yarn categories selected to meet diverse
              textile manufacturing and sourcing requirements.
            </p>
          </div>

          {/* SEARCH AND FILTER */}
          <div className="product-toolbar">
            <div className="product-search">
              <Search size={19} />
              <input
                type="text"
                placeholder="Search yarns..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="category-filters">
              {categories.map((category) => (
                <button
                  key={category}
                  className={
                    activeCategory === category ? "active" : ""
                  }
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* PRODUCT CARDS */}
          <div className="products-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => {
                const Icon = product.icon;

                return (
                  <article className="product-card" key={product.no}>
                    <img
                      src={product.image}
                      alt={product.title}
                      className="product-card-image"
                      loading="lazy"
                    />

                    <h3>{product.title}</h3>

                    <p>{product.desc}</p>

                    <div className="product-tags">
                      {product.tags}
                    </div>

                    <button
                      className="product-enquire"
                      onClick={() => chooseProduct(product.title)}
                    >
                      Enquire About This Yarn
                      <ArrowUpRight size={17} />
                    </button>
                  </article>
                );
              })
            ) : (
              <div className="no-products">
                <h3>No matching yarns found</h3>
                <p>Try another search word or select All.</p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("All");
                  }}
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>

          {/* FULL YARN RANGE */}
          <div className="yarn-range-box">
            <h3>Our Complete Yarn Range</h3>
            <p>Explore the different yarn varieties we can source.</p>

            <div className="yarn-tags">
              {yarnRange.map((yarn) => (
                <button
                  key={yarn}
                  onClick={() => chooseProduct(yarn)}
                >
                  {yarn} <ArrowUpRight size={13} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUALITY */}
      <section className="section quality-section" id="quality">
        <div className="container quality-grid">
          <div>
            <p className="section-label">OUR COMMITMENT</p>

            <h2>
              Quality That Supports
              <em> Better Textiles</em>
            </h2>

            <p>
              We understand the importance of consistency,
              responsible sourcing and customer requirements
              in the textile supply chain.
            </p>

            <a href="#contact" className="button button-gold">
              Discuss Your Requirements <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="quality-cards">
            <div className="quality-card">
              <ShieldCheck />
              <h3>Quality Focus</h3>
              <p>Quality-conscious product selection and sourcing.</p>
            </div>

            <div className="quality-card">
              <Leaf />
              <h3>Sustainability</h3>
              <p>Options for customers seeking responsible fibre choices.</p>
            </div>

            <div className="quality-card">
              <CheckCircle2 />
              <h3>Industry Experience</h3>
              <p>Decades of experience in yarn trading and sourcing.</p>
            </div>

            <div className="quality-card">
              <Globe2 />
              <h3>Business Network</h3>
              <p>Connections across important textile centres.</p>
            </div>
          </div>
        </div>

        <div className="container certification-note">
          <p>
            Company-stated certifications and standards include
            ISO 9001:2015, GOTS, Global Recycled Standard (GRS),
            INDITEX, BCI and OEKO-TEX Standard 100.
            Please confirm current validity and applicable scope
            before publishing certification claims.
          </p>
        </div>

        <div className="container certification-logos">
          <h3>Certifications &amp; Standards</h3>
          <p>Our certification and standards logos</p>
          <img
            src="/images/hytco-certifications.png"
            alt="HYTCO certification and standards logos including GOTS, Organic Blended, Recycled Blended, PRIMARK, OEKO-TEX, Kasturi Bharat, BCI, Global Recycled Standard, INDITEX, regenagri and ISO 9001:2015"
            loading="lazy"
          />
        </div>
      </section>

      {/* NETWORK */}
      <section className="section network-section" id="network">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">OUR PRESENCE</p>
            <h2>Connected To Textile <em>Centres</em></h2>
            <p>
              Our business network extends across important
              textile and trading locations in India.
            </p>
          </div>

          <div className="locations-grid">
            {["Secunderabad", "Ichalkaranji", "Guntur", "Tamil Nadu"].map(
              (location, index) => (
                <div className="location-card" key={location}>
                  <MapPin />
                  <span>0{index + 1}</span>
                  <h3>{location}</h3>
                  <p>Business network location</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact-section" id="contact">
        <div className="container contact-grid">
          <div className="contact-content">
            <p className="section-label">GET IN TOUCH</p>

            <h2>
              Let's Build Your
              <em> Next Textile Connection</em>
            </h2>

            <p>
              Tell us your yarn requirements. Our team will be
              happy to discuss suitable sourcing options.
            </p>

            <div className="contact-detail">
              <Mail />
              <div>
                <span>Email</span>
                <a href="mailto:cpramesh.hariyarn@gmail.com">
                  cpramesh.hariyarn@gmail.com
                </a>
                <a href="mailto:raju.hariyarn@gmail.com">
                  raju.hariyarn@gmail.com
                </a>
              </div>
            </div>
            

            <div className="contact-detail">
              <Phone />
               <div>
                <span>Telephone</span>
                <a href="tel:+27804808">27804808</a>
                <a href="tel:+27710526">27710526</a>
                 <a href="tel:+27802924">27802924</a>
              </div>
              <div>
                <span>Phone</span>
                <a href="tel:+919848012924">+91 9848012924</a>
                <a href="tel:+919121076085">+91 9121076085</a>
              </div>
            </div>

            <div className="contact-detail">
              <MapPin />
              <div>
                <span>Head Office</span>
                <p>
                  Address:  1942 Panbazar,
                  Veeramani Arcade, 4th Floor,
                  Secunderabad – 500003, Telangana.
                </p>
              </div>
            </div>

            <a
              className="whatsapp-link"
              href="mailto:cpramesh.hariyarn@gmail.com"
            >
              <MessageCircle size={19} />
              Contact Us By Email
            </a>
          </div>

          <div className="contact-form-box">
            <h3>Send An Enquiry</h3>
            <p>Share your requirements with our team.</p>

            {submitted && (
              <div className="success-message">
                Your email draft should open in your email application.
                Please send it to complete your enquiry.
              </div>
            )}

            <form onSubmit={submitEnquiry}>
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={form.name}
                  onChange={updateForm}
                  required
                />

                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={form.company}
                  onChange={updateForm}
                />
              </div>

              <div className="form-row">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={form.email}
                  onChange={updateForm}
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={updateForm}
                />
              </div>

              <select
                name="interest"
                value={form.interest}
                onChange={updateForm}
              >
                <option value="">Select Yarn Interest</option>
                {yarnRange.map((yarn) => (
                  <option key={yarn} value={yarn}>{yarn}</option>
                ))}
              </select>

              <textarea
                name="message"
                placeholder="Tell us about your yarn requirements..."
                rows="5"
                value={form.message}
                onChange={updateForm}
              />

              <button type="submit" className="button button-gold submit-button">
                Send Enquiry <ArrowUpRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}


      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">

          {/* COMPANY BRAND */}
          <div className="footer-brand">
            <img
              src="/hytco-logo.jpg"
              alt="Hari Yarn Trading Co."
              className="footer-logo"
            />

            <h3>Hari Yarn Trading Co. Raju &amp; Associates</h3>
            <p className="footer-proprietor">Raju Addagatla | Proprietor</p>

            <p>
              Trusted yarn sourcing partner with 40 years of
              experience serving the textile industry.
            </p>

            <a href="https://hytcoyarns.in" target="_blank" rel="noreferrer">
              www.hytcoyarns.in
            </a>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#products">Our Products</a>
            <a href="#quality">Quality & Certifications</a>
            <a href="#contact">Contact Us</a>
          </div>

          {/* CONTACT DETAILS */}
          <div className="footer-contact">
            <h3>Contact Us</h3>

            <h4>HARI YARN TRADING COMPANY</h4>
            <h4> (An ISO 9001:2015 Certified Company)</h4>


            <p className="footer-address">
              <strong>Address:</strong> 1942, Pan Bazar, Veeramani Arcade,
              4th Floor, Secunderabad - 500 003, Telangana.
            </p>

            <div className="footer-detail">
              <strong>Office Telephone:</strong>
              <div className="footer-inline">
                <a href="tel:27804808">27804808</a>
                <span className="footer-separator"> | </span>
                <a href="tel:27710526">27710526</a>
                <span className="footer-separator"> | </span>
                <a href="tel:27802924">27802924</a>
              </div>
            </div>

            <div className="footer-detail">
              <strong>Mobile:</strong>
              <div className="footer-inline">
                <a href="tel:+919848012924">+91 9848012924</a>
                <span className="footer-separator"> | </span>
                <a href="tel:+919121076085">+91 9121076085</a>
              </div>
            </div>

            <div className="footer-detail">
              <strong>Email:</strong>
              <div className="footer-email">
                <a href="mailto:raju.hariyarn@gmail.com">
                  raju.hariyarn@gmail.com
                </a>
                <span className="footer-separator"> | </span>
                <a href="mailto:cpramesh.hariyarn@gmail.com">
                  cpramesh.hariyarn@gmail.com
                </a>
              </div>
            </div>

            <p className="footer-extra">
              <strong>Website:</strong> hytcoyarns.in
            </p>
            <p className="footer-extra">
              <strong>Branches:</strong> Ichalkaranji <span className="footer-separator"> | </span> Guntur  <span className="footer-separator"> | </span> Tamilnadu
            </p>

            <p className="footer-extra">
              <strong>GSTIN:</strong> 36AACHA7733C1ZP
            </p>
          </div>

        </div>

        {/* FOOTER BOTTOM */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Hari Yarn Trading Co. All Rights Reserved.
          </p>

          <p>
            Designed & Developed by <strong>Harshaa Software Pvt Ltd</strong>
          </p>
        </div>
      </footer>

    </>
  );
}

export default App;
