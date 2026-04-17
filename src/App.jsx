import { useState, useEffect } from "react";

const CHALLENGES = [
  {
    id: 1, tag: "01", name: "Café Landing Page", difficulty: "Beginner", diffColor: "#4ADE80",
    theme: "A warm, cozy landing page for an artisan coffee brand. Use a sticky navbar, a full-width hero with a dark overlay, a 3-column features row, and a footer.",
    font: { name: "Playfair Display", googleUrl: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;900&display=swap", cssValue: "'Playfair Display', Georgia, serif" },
    colors: [
      { name: "Espresso", hex: "#2C1810" }, { name: "Burnt Orange", hex: "#D4824E" },
      { name: "Cream", hex: "#F5E6D3" }, { name: "Warm Brown", hex: "#8B5E3C" },
    ],
    images: [
      { label: "Hero / Background", url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80" },
      { label: "Coffee Close-up", url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80" },
      { label: "Coffee Beans", url: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80" },
    ],
    sections: [
      "Navbar — Logo (text) + 3 nav links (right aligned)",
      "Hero — Full-width BG image + dark overlay + big heading + subtext + CTA button",
      "Features — 3-column grid (icon + title + description)",
      "Footer — Centered copyright text",
    ],
    domTask: "On 'Order Now' button click → show an alert: 'Order placed! ☕ Thank you!'",
  },
  {
    id: 2, tag: "02", name: "Travel Blog Post", difficulty: "Beginner", diffColor: "#4ADE80",
    theme: "A travel blog article page. Build a navbar, a large article hero image with title overlay, a 2-column layout (article content left, sidebar right) with an author card and tags.",
    font: { name: "Lora", googleUrl: "https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400&display=swap", cssValue: "'Lora', Georgia, serif" },
    colors: [
      { name: "Deep Teal", hex: "#1A3A4A" }, { name: "Golden Sand", hex: "#E8A838" },
      { name: "Warm White", hex: "#F0EBE3" }, { name: "Sky Blue", hex: "#2D6A8A" },
    ],
    images: [
      { label: "Article Hero", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80" },
      { label: "Author Avatar", url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80" },
      { label: "Inline Article Image", url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80" },
    ],
    sections: [
      "Navbar — Logo + nav links (dark background)",
      "Article Hero — Full-width image + category badge + title + author + date overlay",
      "2-col layout: Main article text + inline image (left), Sidebar (right)",
      "Sidebar: Author card (avatar + name + bio) + Tags section",
    ],
    domTask: "Toggle dark/light mode on a button click — swap background & text colors using classList",
  },
  {
    id: 3, tag: "03", name: "Music Streaming UI", difficulty: "Intermediate", diffColor: "#FACC15",
    theme: "A dark music streaming home screen. Build a vertical sidebar navigation, a featured album hero banner with a play button, a section heading, and a 3-column album grid.",
    font: { name: "Space Mono", googleUrl: "https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap", cssValue: "'Space Mono', monospace" },
    colors: [
      { name: "Void Black", hex: "#0D0D0D" }, { name: "Hot Pink", hex: "#FF3366" },
      { name: "Dark Navy", hex: "#1A1A2E" }, { name: "Soft Gray", hex: "#C0C0C8" },
    ],
    images: [
      { label: "Featured Album Art", url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1000&q=80" },
      { label: "Album Card 1", url: "https://images.unsplash.com/photo-1598387993441-a364f854cfbd?w=400&q=80" },
      { label: "Album Card 2", url: "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?w=400&q=80" },
      { label: "Album Card 3", url: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&q=80" },
    ],
    sections: [
      "Sidebar — Logo + vertical nav items (icons + labels)",
      "Featured Banner — Full-width hero with album art background + title + artist + Play button",
      "Section heading — 'Trending Now' with letter-spacing",
      "3-column Album Grid — image + album name + artist name",
    ],
    domTask: "On 'Play' button click → toggle button text between '▶ PLAY' and '⏸ PAUSE'",
  },
  {
    id: 4, tag: "04", name: "Developer Portfolio", difficulty: "Advanced", diffColor: "#F87171",
    theme: "A sleek personal developer portfolio. Build a sticky navbar, a 2-column hero (text left, profile photo right), a skills tag strip, a 2-column project card grid, and a contact footer.",
    font: { name: "Syne", googleUrl: "https://fonts.googleapis.com/css2?family=Syne:wght@400;600;800&display=swap", cssValue: "'Syne', sans-serif" },
    colors: [
      { name: "Off White", hex: "#F5F4EF" }, { name: "Ink Black", hex: "#111111" },
      { name: "Electric Lime", hex: "#C8F544" }, { name: "Mid Gray", hex: "#888888" },
    ],
    images: [
      { label: "Profile / Hero Photo", url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" },
      { label: "Project Screenshot 1", url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" },
      { label: "Project Screenshot 2", url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80" },
    ],
    sections: [
      "Navbar — Name (logo) + nav links + 'Hire Me' CTA button",
      "Hero — Big heading + tagline + 2 buttons (left), profile photo full-height (right)",
      "Skills Strip — Horizontal list of pill/tag chips (use flexbox + wrap)",
      "Projects Grid — 2-column cards (image + title + description + link)",
      "Contact Footer — Centered email + social links",
    ],
    domTask: "Smooth scroll to #contact section when 'Hire Me' button is clicked (use scrollIntoView)",
  },
];

// ─── Mockup Components ───────────────────────────────────────────────────────

function CoffeeMockup({ c }) {
  const [esp, org, cream, brown] = c.colors.map(x => x.hex);
  return (
    <div style={{ fontFamily: c.font.cssValue, background: cream, width: "100%", minHeight: "100%" }}>
      <nav style={{ background: esp, color: cream, padding: "14px 28px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 18, fontWeight: 900, letterSpacing: 3 }}>BREWS</span>
        <div style={{ display: "flex", gap: 24, fontSize: 12 }}>
          {["Menu", "About", "Find Us"].map(l => <span key={l} style={{ opacity: 0.8, cursor: "pointer" }}>{l}</span>)}
        </div>
      </nav>
      <div style={{ position: "relative", height: 260, backgroundImage: `url(${c.images[0].url})`, backgroundSize: "cover", backgroundPosition: "center", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(44,24,16,0.6)" }} />
        <div style={{ position: "relative", textAlign: "center", color: cream }}>
          <h1 style={{ fontSize: 36, fontWeight: 900, margin: 0, letterSpacing: -1 }}>Every Sip, a Story.</h1>
          <p style={{ margin: "10px 0 0", fontSize: 13, opacity: 0.85 }}>Handcrafted coffee, roasted with love in small batches</p>
          <button style={{ marginTop: 18, background: org, color: cream, border: "none", padding: "11px 28px", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>Order Now</button>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 1, background: brown }}>
        {[["☕", "Single Origin", "Premium estate beans sourced directly from Ethiopian farms."],
          ["🧊", "Cold Brew", "Slow-steeped for 18 hours for a smooth, bold finish."],
          ["🌱", "Seasonal Blends", "Rotating small-batch roasts celebrating each harvest."]].map(([icon, title, desc], i) => (
          <div key={i} style={{ background: cream, padding: "24px 20px", textAlign: "center" }}>
            <div style={{ fontSize: 28 }}>{icon}</div>
            <div style={{ fontWeight: 700, color: esp, marginTop: 8, fontSize: 14 }}>{title}</div>
            <div style={{ fontSize: 11, color: brown, marginTop: 6, lineHeight: 1.6 }}>{desc}</div>
          </div>
        ))}
      </div>
      <div style={{ background: esp, color: cream, padding: "14px", fontSize: 11, textAlign: "center", opacity: 0.7 }}>© 2025 BREWS Coffee Co. All rights reserved.</div>
    </div>
  );
}

function TravelMockup({ c }) {
  const [teal, gold, warm, sky] = c.colors.map(x => x.hex);
  return (
    <div style={{ fontFamily: c.font.cssValue, background: warm, minHeight: "100%" }}>
      <nav style={{ background: teal, color: warm, padding: "14px 28px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 16, fontWeight: 700, letterSpacing: 2 }}>WANDERER</span>
        <div style={{ display: "flex", gap: 20, fontSize: 12, opacity: 0.85 }}>
          {["Destinations", "Stories", "About"].map(l => <span key={l}>{l}</span>)}
        </div>
      </nav>
      <div style={{ position: "relative", height: 220, backgroundImage: `url(${c.images[0].url})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(26,58,74,0.55)" }} />
        <div style={{ position: "absolute", bottom: 24, left: 28, color: warm }}>
          <span style={{ background: gold, color: teal, padding: "2px 10px", fontSize: 10, fontWeight: 700 }}>ADVENTURE</span>
          <h1 style={{ fontSize: 24, fontWeight: 700, margin: "8px 0 0" }}>Into the Heart of the Alps</h1>
          <p style={{ fontSize: 11, margin: "5px 0 0", opacity: 0.85 }}>By Sarah Chen &nbsp;•&nbsp; June 12, 2025</p>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 260px", gap: 24, padding: "24px 28px" }}>
        <div>
          <p style={{ fontSize: 13, lineHeight: 1.8, color: teal, margin: "0 0 16px" }}>The trail wound upward through a cathedral of ancient pines, each breath of mountain air carrying the sharp scent of resin and distant snow. I had come here chasing a photograph I'd seen years ago — a mirror lake reflecting jagged peaks at golden hour.</p>
          <img src={c.images[2].url} alt="inline" style={{ width: "100%", height: 140, objectFit: "cover", marginBottom: 16, display: "block" }} />
          <p style={{ fontSize: 13, lineHeight: 1.8, color: teal, margin: 0 }}>Three days above the tree line taught me more about patience than any meditation retreat could. The mountains don't hurry for anyone — and somehow, neither did I.</p>
        </div>
        <div>
          <div style={{ background: "#fff", border: `1px solid ${sky}30`, padding: 16, textAlign: "center", marginBottom: 16 }}>
            <img src={c.images[1].url} alt="author" style={{ width: 56, height: 56, borderRadius: "50%", objectFit: "cover" }} />
            <div style={{ fontWeight: 700, color: teal, fontSize: 13, marginTop: 10 }}>Sarah Chen</div>
            <div style={{ fontSize: 11, color: sky, marginTop: 5, lineHeight: 1.5 }}>Travel writer & photographer exploring the world's wild corners.</div>
          </div>
          <div style={{ fontSize: 11, fontWeight: 700, color: teal, marginBottom: 8 }}>TAGS</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
            {["Alps", "Hiking", "Solo Travel", "Nature", "Photography"].map(t => (
              <span key={t} style={{ background: gold, color: teal, padding: "3px 10px", fontSize: 10, fontWeight: 700 }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MusicMockup({ c }) {
  const [black, pink, navy, gray] = c.colors.map(x => x.hex);
  return (
    <div style={{ fontFamily: c.font.cssValue, background: black, minHeight: "100%", display: "flex" }}>
      <div style={{ width: 160, background: navy, padding: "20px 0", flexShrink: 0 }}>
        <div style={{ color: pink, fontWeight: 700, fontSize: 14, padding: "0 18px 20px", letterSpacing: 3 }}>SONIQ</div>
        {[["🏠", "Home"], ["🔍", "Search"], ["📚", "Library"], ["❤️", "Liked"], ["➕", "New Playlist"]].map(([icon, label], i) => (
          <div key={label} style={{ padding: "10px 18px", color: i === 0 ? "#fff" : gray, fontSize: 11, cursor: "pointer", display: "flex", gap: 10, alignItems: "center" }}>
            <span>{icon}</span><span>{label}</span>
          </div>
        ))}
      </div>
      <div style={{ flex: 1, overflow: "hidden" }}>
        <div style={{ position: "relative", height: 200, backgroundImage: `url(${c.images[0].url})`, backgroundSize: "cover", backgroundPosition: "center" }}>
          <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to right, rgba(13,13,13,0.9) 40%, rgba(13,13,13,0.2))` }} />
          <div style={{ position: "absolute", bottom: 20, left: 24 }}>
            <div style={{ color: pink, fontSize: 10, fontWeight: 700, letterSpacing: 2, marginBottom: 6 }}>FEATURED ALBUM</div>
            <div style={{ color: "#fff", fontSize: 22, fontWeight: 700 }}>Neon Requiem</div>
            <div style={{ color: gray, fontSize: 12, marginTop: 4 }}>The Midnight</div>
            <button style={{ marginTop: 14, background: pink, color: "#fff", border: "none", padding: "8px 20px", fontSize: 11, fontWeight: 700, cursor: "pointer", letterSpacing: 1 }}>▶ PLAY</button>
          </div>
        </div>
        <div style={{ padding: "16px 20px" }}>
          <div style={{ color: "#fff", fontWeight: 700, fontSize: 13, marginBottom: 14, letterSpacing: 2 }}>TRENDING NOW</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            {c.images.slice(1, 4).map((img, i) => (
              <div key={i} style={{ background: navy, cursor: "pointer" }}>
                <img src={img.url} alt={`album ${i}`} style={{ width: "100%", height: 90, objectFit: "cover", display: "block" }} />
                <div style={{ padding: "8px 10px" }}>
                  <div style={{ color: "#fff", fontSize: 11, fontWeight: 700 }}>Album {i + 1}</div>
                  <div style={{ color: gray, fontSize: 10, marginTop: 3 }}>Artist Name</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PortfolioMockup({ c }) {
  const [off, ink, lime, mid] = c.colors.map(x => x.hex);
  return (
    <div style={{ fontFamily: c.font.cssValue, background: off, minHeight: "100%" }}>
      <nav style={{ background: off, borderBottom: `1px solid ${ink}15`, padding: "14px 28px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 15, fontWeight: 800, color: ink }}>ALEX.DEV</span>
        <div style={{ display: "flex", gap: 24, fontSize: 12, color: mid }}>
          {["Work", "About", "Blog"].map(l => <span key={l}>{l}</span>)}
        </div>
        <button style={{ background: lime, color: ink, border: "none", padding: "7px 16px", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>Hire Me</button>
      </nav>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <div style={{ padding: "36px 28px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ fontSize: 10, color: mid, letterSpacing: 2, marginBottom: 10 }}>FULLSTACK DEVELOPER</div>
          <h1 style={{ fontSize: 30, fontWeight: 800, color: ink, margin: "0 0 12px", lineHeight: 1.05 }}>I Build Things<br />for the Web.</h1>
          <p style={{ fontSize: 12, color: mid, lineHeight: 1.7, margin: "0 0 20px" }}>Crafting fast, accessible, and beautiful digital experiences. Open to new opportunities.</p>
          <div style={{ display: "flex", gap: 10 }}>
            <button style={{ background: ink, color: off, border: "none", padding: "9px 20px", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>View Projects</button>
            <button style={{ background: "transparent", color: ink, border: `1.5px solid ${ink}`, padding: "9px 20px", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>Contact</button>
          </div>
        </div>
        <div style={{ position: "relative", background: ink, minHeight: 240, overflow: "hidden" }}>
          <img src={c.images[0].url} alt="profile" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", opacity: 0.65, display: "block" }} />
          <div style={{ position: "absolute", bottom: 14, right: 14, background: lime, color: ink, padding: "5px 12px", fontSize: 9, fontWeight: 800 }}>AVAILABLE FOR HIRE</div>
        </div>
      </div>
      <div style={{ padding: "18px 28px", borderTop: `1px solid ${ink}12` }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: ink, marginBottom: 10, letterSpacing: 1 }}>SKILLS</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
          {["React", "Node.js", "TypeScript", "Python", "PostgreSQL", "Docker", "Git", "Figma"].map(s => (
            <span key={s} style={{ background: ink, color: off, padding: "4px 12px", fontSize: 10, fontWeight: 600 }}>{s}</span>
          ))}
        </div>
      </div>
      <div style={{ padding: "14px 28px 20px", borderTop: `1px solid ${ink}12` }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: ink, marginBottom: 12, letterSpacing: 1 }}>PROJECTS</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {c.images.slice(1, 3).map((img, i) => (
            <div key={i} style={{ background: "#fff", border: `1px solid ${ink}10` }}>
              <img src={img.url} alt={`proj ${i}`} style={{ width: "100%", height: 80, objectFit: "cover", display: "block" }} />
              <div style={{ padding: "10px 12px" }}>
                <div style={{ fontWeight: 700, fontSize: 13, color: ink }}>Project {i + 1}</div>
                <div style={{ fontSize: 10, color: mid, marginTop: 3, lineHeight: 1.5 }}>A fullstack web app built with React & Node.js</div>
                <div style={{ marginTop: 7, fontSize: 10, fontWeight: 700, color: "#5a8a00" }}>View Project →</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div id="contact" style={{ background: ink, color: off, padding: "20px 28px", textAlign: "center" }}>
        <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 6 }}>Let's Work Together</div>
        <div style={{ fontSize: 12, color: mid }}>alex@developer.io &nbsp;•&nbsp; GitHub &nbsp;•&nbsp; LinkedIn</div>
      </div>
    </div>
  );
}

const MOCKUP_MAP = [CoffeeMockup, TravelMockup, MusicMockup, PortfolioMockup];

// ─── Main App ────────────────────────────────────────────────────────────────

export default function App() {
  const [active, setActive] = useState(0);
  const ch = CHALLENGES[active];
  const MockupComp = MOCKUP_MAP[active];

  useEffect(() => {
    // Load Google Font for UI shell
    const uiFont = document.createElement("link");
    uiFont.rel = "stylesheet";
    uiFont.href = "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600;700&display=swap";
    document.head.appendChild(uiFont);
  }, []);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = ch.font.googleUrl;
    document.head.appendChild(link);
    return () => { if (document.head.contains(link)) document.head.removeChild(link); };
  }, [ch.font.googleUrl]);

  const S = {
    app: { minHeight: "100vh", background: "#0A0A0A", color: "#E8E8E8", fontFamily: "'IBM Plex Mono', monospace" },
    header: { borderBottom: "1px solid #1E1E1E", padding: "14px 28px", display: "flex", justifyContent: "space-between", alignItems: "center" },
    logo: { display: "flex", alignItems: "center", gap: 10 },
    logoDot: { width: 8, height: 8, background: "#FFD600", borderRadius: "50%" },
    logoText: { fontSize: 12, fontWeight: 700, letterSpacing: 2, color: "#FFD600" },
    subtitle: { fontSize: 10, color: "#444", marginLeft: 4 },
    tabBar: { padding: "14px 28px 0", display: "flex", gap: 6 },
    body: { display: "grid", gridTemplateColumns: "360px 1fr", margin: "14px 28px 28px", border: "1px solid #1E1E1E", minHeight: "calc(100vh - 120px)" },
    briefPanel: { background: "#111", borderRight: "1px solid #1E1E1E", padding: "22px 20px", overflowY: "auto", maxHeight: "calc(100vh - 140px)" },
    sectionLabel: { fontSize: 9, color: "#444", letterSpacing: 2, marginBottom: 8 },
    mockupPanel: { background: "#0D0D0D", display: "flex", flexDirection: "column" },
    browserBar: { background: "#161616", padding: "8px 14px", display: "flex", alignItems: "center", gap: 6, borderBottom: "1px solid #1E1E1E" },
    urlBar: { flex: 1, background: "#0A0A0A", margin: "0 10px", padding: "3px 10px", fontSize: 9, color: "#555", borderRadius: 3 },
    mockupWrapper: { flex: 1, overflow: "hidden", position: "relative" },
    innerScale: { transformOrigin: "top left", transform: "scale(0.58)", width: `${100 / 0.58}%` },
  };

  return (
    <div style={S.app}>
      {/* Header */}
      <div style={S.header}>
        <div style={S.logo}>
          <div style={S.logoDot} />
          <span style={S.logoText}>HTML/CSS DOM PRACTICE</span>
          <span style={S.subtitle}>— Use the assets below to build the target design</span>
        </div>
        <span style={{ fontSize: 10, color: "#333" }}>4 challenges</span>
      </div>

      {/* Tabs */}
      <div style={S.tabBar}>
        {CHALLENGES.map((c, i) => {
          const isActive = active === i;
          return (
            <button key={c.id} onClick={() => setActive(i)} style={{
              background: isActive ? "#FFD600" : "transparent",
              color: isActive ? "#0A0A0A" : "#555",
              border: isActive ? "1px solid #FFD600" : "1px solid #1E1E1E",
              padding: "7px 16px", fontSize: 10, fontWeight: 700, cursor: "pointer",
              fontFamily: "'IBM Plex Mono', monospace", transition: "all 0.15s",
            }}>
              {c.tag} — {c.name}
            </button>
          );
        })}
      </div>

      {/* Body */}
      <div style={S.body}>

        {/* LEFT: Brief Panel */}
        <div style={S.briefPanel}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, color: "#555" }}>CHALLENGE BRIEF</span>
            <span style={{ background: ch.diffColor + "22", color: ch.diffColor, padding: "2px 10px", fontSize: 9, fontWeight: 700, borderRadius: 20 }}>{ch.difficulty}</span>
          </div>

          {/* Theme */}
          <div style={{ marginBottom: 20 }}>
            <div style={S.sectionLabel}>THEME / GOAL</div>
            <p style={{ fontSize: 11, lineHeight: 1.75, color: "#BBB", margin: 0, background: "#161616", padding: "12px 14px", border: "1px solid #1E1E1E" }}>{ch.theme}</p>
          </div>

          {/* Font */}
          <div style={{ marginBottom: 20 }}>
            <div style={S.sectionLabel}>FONT FAMILY</div>
            <div style={{ background: "#161616", border: "1px solid #1E1E1E", padding: 14 }}>
              <div style={{ fontFamily: ch.font.cssValue, fontSize: 24, color: "#F0F0F0", marginBottom: 5 }}>Aa Bb Cc 123</div>
              <div style={{ fontSize: 11, color: "#FFD600", fontWeight: 600 }}>{ch.font.name}</div>
              <div style={{ fontSize: 9, color: "#444", marginTop: 4, wordBreak: "break-all" }}>
                {`<link href="${ch.font.googleUrl}" rel="stylesheet">`}
              </div>
            </div>
          </div>

          {/* Colors */}
          <div style={{ marginBottom: 20 }}>
            <div style={S.sectionLabel}>COLOR PALETTE</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
              {ch.colors.map(color => (
                <div key={color.hex} style={{ display: "flex", alignItems: "center", gap: 8, background: "#161616", border: "1px solid #1E1E1E", padding: "8px 10px" }}>
                  <div style={{ width: 26, height: 26, background: color.hex, flexShrink: 0, border: "1px solid #333" }} />
                  <div>
                    <div style={{ fontSize: 10, color: "#DDD", fontWeight: 600 }}>{color.name}</div>
                    <div style={{ fontSize: 9, color: "#555", marginTop: 1 }}>{color.hex}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Images */}
          <div style={{ marginBottom: 20 }}>
            <div style={S.sectionLabel}>IMAGE ASSETS (Unsplash)</div>
            {ch.images.map((img, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "center", background: "#161616", border: "1px solid #1E1E1E", padding: 8, marginBottom: 6 }}>
                <img src={img.url} alt={img.label} style={{ width: 52, height: 38, objectFit: "cover", flexShrink: 0, display: "block" }} />
                <div style={{ overflow: "hidden", flex: 1 }}>
                  <div style={{ fontSize: 10, color: "#DDD", fontWeight: 600, marginBottom: 3 }}>{img.label}</div>
                  <div style={{ fontSize: 8, color: "#555", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{img.url}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Sections */}
          <div style={{ marginBottom: 18 }}>
            <div style={S.sectionLabel}>PAGE SECTIONS TO BUILD</div>
            {ch.sections.map((s, i) => (
              <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 7 }}>
                <span style={{ color: "#FFD600", fontSize: 9, marginTop: 1, flexShrink: 0 }}>▸</span>
                <span style={{ fontSize: 10, color: "#AAA", lineHeight: 1.6 }}>{s}</span>
              </div>
            ))}
          </div>

          {/* DOM Task */}
          <div style={{ background: "#FFD60010", border: "1px solid #FFD60030", padding: 14 }}>
            <div style={{ fontSize: 9, color: "#FFD600", fontWeight: 700, letterSpacing: 2, marginBottom: 7 }}>⚡ DOM MANIPULATION TASK</div>
            <p style={{ fontSize: 10, color: "#CCC", margin: 0, lineHeight: 1.7 }}>{ch.domTask}</p>
          </div>
        </div>

        {/* RIGHT: Mockup Panel */}
        <div style={S.mockupPanel}>
          <div style={{ padding: "10px 18px", borderBottom: "1px solid #1E1E1E", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 9, color: "#444", letterSpacing: 2 }}>TARGET DESIGN — Recreate this page using the assets</span>
            <span style={{ fontSize: 9, color: "#333", background: "#161616", padding: "3px 8px", border: "1px solid #1E1E1E" }}>MOCKUP PREVIEW</span>
          </div>

          {/* Browser Chrome */}
          <div style={S.browserBar}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#FF5F56" }} />
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#FFBD2E" }} />
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#27C93F" }} />
            <div style={S.urlBar}>localhost:5500/index.html</div>
          </div>

          {/* Scaled Mockup */}
          <div style={S.mockupWrapper}>
            <div style={S.innerScale}>
              <MockupComp c={ch} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
