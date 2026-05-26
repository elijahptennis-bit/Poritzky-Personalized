import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  Camera,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Globe2,
  Handshake,
  Mail,
  MessageSquare,
  Sparkles,
  Target,
  Trophy,
} from "lucide-react";
import client40FortyLogo from "./assets/client-40forty.png";
import clientGeauSportLogo from "./assets/client-geau-sport.webp";
import clientPickleYardLogo from "./assets/client-pickle-yard.png";
import ppmHeroImage from "./assets/ppm-hero.png";
import ppmLogo from "./assets/ppm-mark.png";
import homeAboutImage from "./assets/about-home-court.png";
import storyAboutImage from "./assets/about-story-tennis.jpg";
import contactWorkspaceImage from "./assets/contact-workspace.png";
import packagesPlanningImage from "./assets/packages-planning.png";
import workEventCourtImage from "./assets/work-event-court.png";

const email = "Elijahptennis@gmail.com";
const phone = "5182600456";
const phoneDisplay = "(518) 260-0456";

const services = [
  {
    icon: Camera,
    title: "Social Media Strategy",
    text: "Content plans, posting direction, captions, reels, and platform strategy built around your audience.",
    details: [
      "Platform-specific content direction",
      "Monthly content calendars",
      "Caption, reel, and campaign ideas",
      "Audience and engagement recommendations",
    ],
  },
  {
    icon: CalendarDays,
    title: "Event Marketing",
    text: "Promotion plans, launch campaigns, flyers, email copy, and social content that drive real attendance.",
    details: [
      "Launch timelines",
      "Event promotion copy",
      "Social posts and story prompts",
      "Day-of customer experience touchpoints",
    ],
  },
  {
    icon: BarChart3,
    title: "Brand Growth",
    text: "Clear messaging, visual direction, offer positioning, and marketing systems that make your business easier to understand.",
    details: [
      "Messaging audits",
      "Offer and audience positioning",
      "Website and social bio direction",
      "Simple marketing systems for consistency",
    ],
  },
  {
    icon: Handshake,
    title: "Partnership Support",
    text: "Corporate outreach, sponsorship ideas, pitch language, and relationship-based marketing strategy.",
    details: [
      "Partnership pitch language",
      "Sponsor outreach ideas",
      "Community collaboration planning",
      "Relationship-first marketing strategy",
    ],
  },
];

const proof = [
  "Built marketing and event strategy for active sports and hospitality venues",
  "Experience with Pickle Yard, 40Forty Padel, and community-driven event promotion",
  "Professional tennis background with global travel, brand exposure, and high-performance environments",
  "Hands-on content creation, campaign planning, and customer-facing event execution",
];

const differentiators = [
  {
    icon: Trophy,
    title: "Athlete mindset",
    text: "Competitive, detail-oriented, and comfortable performing under pressure.",
  },
  {
    icon: Globe2,
    title: "Global perspective",
    text: "Experience around different audiences, cultures, and styles of communication.",
  },
  {
    icon: Target,
    title: "Personalized strategy",
    text: "No generic marketing plans. The strategy should fit the brand, audience, and goals.",
  },
];

const capabilities = [
  "Social content that feels real",
  "Event campaigns people understand",
  "Brand messaging with a clear voice",
  "Hands-on support from idea to execution",
];

const clients = [
  {
    name: "40Forty Padel Club",
    logo: client40FortyLogo,
  },
  {
    name: "Pickle Yard Mauldin",
    logo: clientPickleYardLogo,
  },
  {
    name: "Geau Sport",
    logo: clientGeauSportLogo,
  },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$750",
    cadence: "per month",
    description: "For brands that need a clean content rhythm and clearer weekly direction.",
    content: "8 content pieces / month",
    features: [
      "4 social posts or graphics",
      "4 short-form video/reel concepts",
      "Monthly content calendar",
      "Caption direction and hashtag guidance",
      "One 45-minute strategy call",
    ],
  },
  {
    name: "Growth",
    price: "$1,500",
    cadence: "per month",
    description: "For active brands, venues, and events that need consistent execution and campaign planning.",
    content: "16 content pieces / month",
    featured: true,
    features: [
      "8 social posts or graphics",
      "6 short-form video/reel concepts",
      "2 email, flyer, or event promo assets",
      "Monthly content calendar and campaign plan",
      "Two strategy calls plus weekly check-ins",
    ],
  },
  {
    name: "Premium",
    price: "$2,500",
    cadence: "per month",
    description: "For brands that want deeper support across content, events, partnerships, and growth ideas.",
    content: "28 content pieces / month",
    features: [
      "12 social posts or graphics",
      "10 short-form video/reel concepts",
      "4 event, email, or promotional assets",
      "2 partnership or sponsorship outreach pieces",
      "Weekly strategy support and priority planning",
    ],
  },
];

const navItems = [
  { label: "Services", path: "/services" },
  { label: "About Me", path: "/story" },
  { label: "Packages", path: "/packages" },
  { label: "Work", path: "/work" },
  { label: "Contact", path: "/contact" },
];

const pages = new Set([
  "/",
  "/services",
  "/story",
  "/packages",
  "/work",
  "/contact",
  "/retainer",
  "/start-project",
]);

function normalizePath(pathname) {
  if (pathname === "/retainer") return "/packages";
  return pages.has(pathname) ? pathname : "/";
}

function useRoute() {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => setPath(normalizePath(window.location.pathname));
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (nextPath) => {
    const cleanPath = normalizePath(nextPath);
    window.history.pushState({}, "", cleanPath);
    setPath(cleanPath);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return { path, navigate };
}

function ButtonLink({ href, children, variant = "primary", className = "", navigate }) {
  const isInternal = href?.startsWith("/");

  const handleClick = (event) => {
    if (!isInternal || !navigate) return;
    event.preventDefault();
    navigate(href);
  };

  return (
    <a className={`button button-${variant} ${className}`} href={href} onClick={handleClick}>
      {children}
    </a>
  );
}

function TextLink({ href, children, navigate, active = false }) {
  return (
    <a
      href={href}
      aria-current={active ? "page" : undefined}
      onClick={(event) => {
        event.preventDefault();
        navigate(href);
      }}
    >
      {children}
    </a>
  );
}

function Logo({ navigate }) {
  return (
    <a
      className="logo"
      href="/"
      aria-label="Poritzky Personalized Marketing home"
      onClick={(event) => {
        event.preventDefault();
        navigate("/");
      }}
    >
      <img src={ppmLogo} alt="" />
      <span>
        <strong>Poritzky Personalized</strong>
        <small>Marketing</small>
      </span>
    </a>
  );
}

function Header({ path, navigate }) {
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Logo navigate={navigate} />
        <nav className="site-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <TextLink
              key={item.path}
              href={item.path}
              navigate={navigate}
              active={path === item.path}
            >
              {item.label}
            </TextLink>
          ))}
        </nav>
        <ButtonLink href="/contact" navigate={navigate} variant="gold">
          Work With Me
        </ButtonLink>
      </div>
    </header>
  );
}

function HomePage({ navigate }) {
  return (
    <>
      <section className="hero">
        <div className="content-grid hero-grid">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="eyebrow">
              <Sparkles aria-hidden="true" />
              Marketing built around the people you are trying to reach
            </div>
            <h1>Personalized marketing for brands that want to grow with purpose.</h1>
            <p>
              Poritzky Personalized Marketing helps businesses turn ideas, events,
              and experiences into clear content, stronger branding, and real
              community engagement.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/start-project" navigate={navigate}>
                Start a Project <ArrowRight aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href="/services" navigate={navigate} variant="secondary">
                View Services
              </ButtonLink>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <img src={ppmHeroImage} alt="Marketing strategy materials arranged on a desk" />
            <div className="strategy-panel" aria-label="Strategy, content, and events">
              <p>Strategy / Content / Events</p>
              <h2>A modern marketing partner for growing brands.</h2>
              <div className="capability-list">
                {capabilities.map((item) => (
                  <div key={item}>
                    <CheckCircle2 aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="home-about-section">
        <div className="content-grid story-photo-grid">
          <div className="story-photo-frame">
            <img
              src={homeAboutImage}
              alt="Elijah working courtside on marketing strategy"
            />
          </div>
          <div className="story-feature-copy">
            <p className="section-label">About Me</p>
            <h2>Built from sport, travel, communication, and real brand experience.</h2>
            <p>
              I bring an athlete's discipline and a marketer's eye for growing
              trends into every project. My background helps me understand what
              people pay attention to, how communities discover events, and how
              brands can create content that feels current without feeling
              random.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/story" navigate={navigate} variant="secondary">
                Learn More <ChevronRight aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="clients-section">
        <div className="content-grid clients-wrap">
          <div className="clients-heading">
            <p className="section-label">Clients & Collaborations</p>
            <h2>Trusted by sports, lifestyle, and community-driven brands.</h2>
          </div>
          <div className="client-logo-grid" aria-label="Client logos">
            {clients.map((client) => (
              <article className="client-logo-card" key={client.name}>
                <img src={client.logo} alt={client.name} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section landing-links-section">
        <div className="content-grid preview-grid">
          <PagePreview
            label="Services"
            title="Marketing support that meets you where you are."
            text="Explore strategy, content, events, brand growth, and partnership support."
            href="/services"
            navigate={navigate}
          />
          <PagePreview
            label="Packages"
            title="Ongoing monthly support."
            text="A steady marketing partner for brands that need consistency and momentum."
            href="/packages"
            navigate={navigate}
          />
          <PagePreview
            label="Contact"
            title="Ready to talk through the next step?"
            text="Send the project details and start shaping the right plan."
            href="/contact"
            navigate={navigate}
          />
        </div>
      </section>
    </>
  );
}

function PagePreview({ label, title, text, href, navigate }) {
  return (
    <article className="service-card page-preview">
      <p className="section-label">{label}</p>
      <h3>{title}</h3>
      <p>{text}</p>
      <ButtonLink href={href} navigate={navigate} variant="secondary">
        Learn More <ChevronRight aria-hidden="true" />
      </ButtonLink>
    </article>
  );
}

function PageHero({ label, title, text, actions }) {
  return (
    <section className="page-hero">
      <div className="content-grid page-hero-grid">
        <div>
          <p className="section-label">{label}</p>
          <h1>{title}</h1>
        </div>
        <div>
          <p>{text}</p>
          {actions ? <div className="hero-actions">{actions}</div> : null}
        </div>
      </div>
    </section>
  );
}

function ServicesPage({ navigate }) {
  return (
    <>
      <PageHero
        label="Services"
        title="Choose the kind of marketing help your brand needs now."
        text="Each service is built to give your brand clearer direction, better content, and more consistent execution."
        actions={
          <>
            <ButtonLink href="/start-project" navigate={navigate}>
              Start a Project <ArrowRight aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="/packages" navigate={navigate} variant="secondary">
              View Packages
            </ButtonLink>
          </>
        }
      />
      <section className="visual-feature-section">
        <div className="content-grid visual-feature-grid">
          <div className="visual-feature-frame">
            <img src={ppmHeroImage} alt="Marketing planning materials for social content and campaigns" />
          </div>
          <div className="visual-feature-copy">
            <p className="section-label">How It Looks</p>
            <h2>Strategy, content, and campaign planning that feels organized.</h2>
            <p>
              The goal is to turn scattered ideas into a clear plan: what to
              post, what to promote, what to say, and how to make each piece
              feel connected to the brand.
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="content-grid service-detail-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="detail-card" key={service.title}>
                <div className="icon-box">
                  <Icon aria-hidden="true" />
                </div>
                <h2>{service.title}</h2>
                <p>{service.text}</p>
                <ul>
                  {service.details.map((detail) => (
                    <li key={detail}>
                      <CheckCircle2 aria-hidden="true" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}

function StoryPage({ navigate }) {
  return (
    <>
      <PageHero
        label="My Story"
        title="Built from sport, travel, communication, and real brand experience."
        text="PPM brings an athlete's discipline, a global perspective, and practical event experience into marketing strategy."
        actions={
          <ButtonLink href="/work" navigate={navigate} variant="secondary">
            See Experience
          </ButtonLink>
        }
      />
      <section className="story-photo-section">
        <div className="content-grid story-photo-grid">
          <div className="story-photo-frame">
            <img
              src={storyAboutImage}
              alt="Elijah standing on a tennis court with a racquet"
            />
          </div>
          <div className="story-feature-copy">
            <p className="section-label">Perspective</p>
            <h2>Marketing moves fast, but people still respond to what feels real.</h2>
            <p>
              My background in tennis taught me to read situations quickly:
              momentum, timing, emotion, pressure, and the small details that
              change how people respond. I bring that same awareness into
              marketing. It is not just about posting more. It is about knowing
              what people are paying attention to and turning that attention
              into a clear message.
            </p>
          </div>
        </div>
      </section>
      <section className="section story-band">
        <div className="content-grid story-grid">
          <div>
            <p className="section-label">Background</p>
            <h2>High-performance environments shaped the way PPM thinks about people.</h2>
          </div>
          <div className="story-copy">
            <p>
              I started Poritzky Personalized Marketing after years of seeing
              brands from the inside and outside. As a professional tennis
              player, I traveled the world, met people from different cultures,
              and saw how the best experiences connect beyond just a product.
            </p>
            <p>
              Now I use that perspective to help businesses create stronger
              content, clearer messaging, and more memorable experiences. The
              goal is simple: make people care, make it easy to understand, and
              make it feel personal.
            </p>
            <p>
              I also pay close attention to growing trends: what formats people
              are watching, how local communities discover events, what makes a
              venue feel shareable, and how brands can show personality without
              losing professionalism. The best marketing is current without
              feeling random. It should fit the brand, the audience, and the
              moment.
            </p>
          </div>
        </div>
      </section>
      <section className="section trend-section">
        <div className="content-grid trend-grid">
          {[
            ["Trend awareness", "Short-form video, social search, community events, and creator-style content all shape how people discover brands now."],
            ["Audience translation", "I help turn what a business does into language and content that the right people actually understand."],
            ["Local momentum", "For venues and events, the goal is to make the experience easy to picture, easy to share, and easy to say yes to."],
          ].map(([title, text]) => (
            <article className="service-card trend-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section compact-section">
        <div className="content-grid differentiator-grid">
          {differentiators.map((item) => {
            const Icon = item.icon;
            return (
              <article className="service-card" key={item.title}>
                <div className="icon-box accent">
                  <Icon aria-hidden="true" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}

function WorkPage({ navigate }) {
  return (
    <>
      <PageHero
        label="Work"
        title="Strategy that connects ideas, events, content, and customers."
        text="PPM is designed for businesses that need more than ideas. You need someone who understands the audience, the event, and the actual customer experience."
        actions={
          <ButtonLink href="/contact" navigate={navigate}>
            Talk About Your Brand <ArrowRight aria-hidden="true" />
          </ButtonLink>
        }
      />
      <section className="section">
        <div className="content-grid work-grid">
          <div className="section-heading">
            <p className="section-label">Experience</p>
            <h2>Where strategy meets real execution.</h2>
            <p>
              The work focuses on practical marketing moves: better launches,
              sharper content, clearer offers, stronger relationships, and
              customer experiences that people remember.
            </p>
          </div>
          <div className="work-photo-frame">
            <img src={workEventCourtImage} alt="Marketing materials and content tools at a sports venue" />
          </div>
        </div>
      </section>
      <section className="section compact-section">
        <div className="content-grid work-grid">
          <div className="section-heading">
            <p className="section-label">Proof</p>
            <h2>Real work across sports, events, and local brands.</h2>
          </div>
          <div className="proof-list">
            {proof.map((item, index) => (
              <article key={item} className="proof-item">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function PackagesPage({ navigate }) {
  const items = [
    "Monthly content calendar with weekly posting priorities",
    "Reel, story, and short-form video concepts built around current trends",
    "Captions, hooks, hashtags, and social search language",
    "Event promotion plans, launch timelines, and day-of content direction",
    "Brand messaging, offer positioning, and visual direction",
    "Partnership, sponsorship, and community collaboration ideas",
    "Monthly performance review with practical next-step recommendations",
    "Strategy calls and check-ins based on the package level",
  ];

  return (
    <>
      <PageHero
        label="Packages"
        title="Consistent marketing support without building a full in-house team."
        text="Packages are for brands that want steady direction, cleaner execution, and a marketing partner who stays close to the business."
        actions={
          <ButtonLink href="/contact" navigate={navigate}>
            Ask About Packages <ArrowRight aria-hidden="true" />
          </ButtonLink>
        }
      />
      <section className="visual-feature-section">
        <div className="content-grid visual-feature-grid reverse">
          <div className="visual-feature-frame">
            <img src={packagesPlanningImage} alt="Organized monthly marketing package planning materials" />
          </div>
          <div className="visual-feature-copy">
            <p className="section-label">Monthly Rhythm</p>
            <h2>Pick the level of content and strategy support that matches your pace.</h2>
            <p>
              These packages are built around practical monthly output: clear
              priorities, content ideas, campaign assets, and check-ins that
              help the brand keep moving.
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="content-grid retainer-grid">
          <article className="detail-card featured-card">
            <div className="icon-box">
              <ClipboardList aria-hidden="true" />
            </div>
            <h2>What it can include</h2>
            <ul>
              {items.map((item) => (
                <li key={item}>
                  <CheckCircle2 aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="detail-card">
            <p className="section-label">Best Fit</p>
            <h2>Sports venues, hospitality brands, events, and local businesses.</h2>
            <p>
              This is a strong fit when you already have good ideas but need
              the structure, language, and rhythm to make them show up clearly
              across your marketing.
            </p>
            <ButtonLink href="/start-project" navigate={navigate} variant="secondary">
              Start With a Project
            </ButtonLink>
          </article>
        </div>
      </section>
      <section className="section pricing-section">
        <div className="content-grid">
          <div className="section-heading split-heading">
            <div>
              <p className="section-label">Content Tiers</p>
              <h2>Monthly packages with clear deliverables.</h2>
            </div>
            <p>
              These are starting points. Each package can be adjusted around
              the brand, event calendar, and how much content you already have.
            </p>
          </div>
          <div className="pricing-grid">
            {pricingTiers.map((tier) => (
              <article
                className={`pricing-card ${tier.featured ? "pricing-card-featured" : ""}`}
                key={tier.name}
              >
                <div>
                  <p className="section-label">{tier.name}</p>
                  <h3>{tier.price}</h3>
                  <p className="price-cadence">{tier.cadence}</p>
                  <p className="tier-description">{tier.description}</p>
                </div>
                <div className="content-count">{tier.content}</div>
                <ul>
                  {tier.features.map((feature) => (
                    <li key={feature}>
                      <CheckCircle2 aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <ButtonLink href="/contact" navigate={navigate} variant={tier.featured ? "gold" : "secondary"}>
                  Ask About {tier.name}
                </ButtonLink>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function StartProjectPage({ navigate }) {
  return (
    <>
      <PageHero
        label="Start a Project"
        title="Tell me what you are building, launching, or trying to grow."
        text="This page helps you decide what to send first so the conversation starts with useful context."
        actions={
          <>
            <ButtonLink href={`mailto:${email}?subject=New%20marketing%20project`} variant="gold">
              Email Project Details <Mail aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="/services" navigate={navigate} variant="secondary">
              Compare Services
            </ButtonLink>
          </>
        }
      />
      <section className="section">
        <div className="content-grid step-grid">
          {[
            ["01", "What is the brand?", "Share the business, venue, event, or offer you want to grow."],
            ["02", "What needs to happen?", "Send the goal, timeline, audience, and what is currently getting in the way."],
            ["03", "What support sounds right?", "Mention if you need content, event promotion, brand direction, partnerships, or ongoing help."],
          ].map(([number, title, text]) => (
            <article className="proof-item project-step" key={number}>
              <span>{number}</span>
              <div>
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function ContactPage({ navigate }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    brand: "",
    support: "Monthly packages",
    timeline: "",
    budget: "",
    message: "",
  });

  const updateForm = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const submitContactForm = (event) => {
    event.preventDefault();
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Brand / Business: ${formData.brand}`,
      `Support Needed: ${formData.support}`,
      `Timeline: ${formData.timeline}`,
      `Budget: ${formData.budget}`,
      "",
      "Project Details:",
      formData.message,
    ].join("\n");

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      "New PPM inquiry"
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <PageHero
        label="Contact"
        title="Ready to make your marketing feel more personal?"
        text="Whether you need a monthly marketing partner, help promoting an event, or a clearer brand direction, PPM can help bring the next step to life."
        actions={
          <>
            <ButtonLink href={`mailto:${email}`} variant="gold">
              <Mail aria-hidden="true" /> Email Elijah
            </ButtonLink>
            <ButtonLink href="/packages" navigate={navigate} variant="secondary">
              View Packages
            </ButtonLink>
          </>
        }
      />
      <section className="visual-feature-section contact-visual-section">
        <div className="content-grid visual-feature-grid">
          <div className="visual-feature-frame">
            <img src={contactWorkspaceImage} alt="Workspace for sending marketing project details" />
          </div>
          <div className="visual-feature-copy">
            <p className="section-label">Start Simple</p>
            <h2>A few details are enough to begin shaping the right plan.</h2>
            <p>
              Send the brand, the goal, the timeline, and what kind of support
              would help most right now. From there, the next step can be clear
              and easy.
            </p>
          </div>
        </div>
      </section>
      <section className="section form-section">
        <div className="content-grid contact-form-grid">
          <div className="section-heading">
            <p className="section-label">Project Form</p>
            <h2>Tell me what you want help with.</h2>
            <p>
              Share the basics and this will open an email draft with everything
              organized, so it is easy to start the conversation.
            </p>
            <div className="direct-contact-card">
              <a href={`mailto:${email}`}>{email}</a>
              <a href={`tel:${phone}`}>{phoneDisplay}</a>
            </div>
          </div>
          <form className="contact-form" onSubmit={submitContactForm}>
            <div className="form-row">
              <label>
                Name
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={updateForm}
                  placeholder="Your name"
                  required
                />
              </label>
              <label>
                Email
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={updateForm}
                  placeholder="you@example.com"
                  required
                />
              </label>
            </div>
            <div className="form-row">
              <label>
                Phone
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={updateForm}
                  placeholder="Best number to reach you"
                />
              </label>
              <label>
                Brand / Business
                <input
                  name="brand"
                  type="text"
                  value={formData.brand}
                  onChange={updateForm}
                  placeholder="Business, venue, event, or project"
                />
              </label>
            </div>
            <div className="form-row">
              <label>
                What do you need?
                <select name="support" value={formData.support} onChange={updateForm}>
                  <option>Monthly packages</option>
                  <option>Social media strategy</option>
                  <option>Event marketing</option>
                  <option>Brand growth</option>
                  <option>Partnership support</option>
                  <option>Not sure yet</option>
                </select>
              </label>
              <label>
                Timeline
                <input
                  name="timeline"
                  type="text"
                  value={formData.timeline}
                  onChange={updateForm}
                  placeholder="Launch date, event date, or ideal start"
                />
              </label>
            </div>
            <label>
              Budget range
              <select name="budget" value={formData.budget} onChange={updateForm}>
                <option value="">Select one</option>
                <option>Under $750</option>
                <option>$750 - $1,500</option>
                <option>$1,500 - $2,500</option>
                <option>$2,500+</option>
                <option>Not sure yet</option>
              </select>
            </label>
            <label>
              What are you trying to do?
              <textarea
                name="message"
                value={formData.message}
                onChange={updateForm}
                placeholder="Tell me about your goal, audience, event, social media, or anything you want help improving."
                required
              />
            </label>
            <button className="button button-primary" type="submit">
              Send Project Details <ArrowRight aria-hidden="true" />
            </button>
          </form>
        </div>
      </section>
      <section className="section contact-section">
        <div className="content-grid contact-grid">
          <MessageSquare aria-hidden="true" className="contact-icon" />
          <p className="section-label">Best first message</p>
          <h2>Send the brand, goal, timeline, and the kind of help you need.</h2>
          <p>
            A few sentences is enough. If there is an event date, launch window,
            venue, website, or social account to review, include that too.
          </p>
          <a className="email-link" href={`mailto:${email}`}>
            {email}
          </a>
          <a className="email-link phone-link" href={`tel:${phone}`}>
            {phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}

function renderPage(path, navigate) {
  switch (path) {
    case "/services":
      return <ServicesPage navigate={navigate} />;
    case "/story":
      return <StoryPage navigate={navigate} />;
    case "/packages":
      return <PackagesPage navigate={navigate} />;
    case "/work":
      return <WorkPage navigate={navigate} />;
    case "/contact":
      return <ContactPage navigate={navigate} />;
    case "/retainer":
      return <PackagesPage navigate={navigate} />;
    case "/start-project":
      return <StartProjectPage navigate={navigate} />;
    default:
      return <HomePage navigate={navigate} />;
  }
}

export default function App() {
  const { path, navigate } = useRoute();

  return (
    <div className="site-shell">
      <Header path={path} navigate={navigate} />
      <main>{renderPage(path, navigate)}</main>
    </div>
  );
}
