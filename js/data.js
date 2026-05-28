// ═══════════════════════════════════════════════════════
// COMPASS+ · Site Data
// In production this data is managed via the /admin CMS.
// To add content: go to /admin, log in, and edit via the UI.
// ═══════════════════════════════════════════════════════

window.COMPASS = {};

// ── NEWS ──────────────────────────────────────────────
COMPASS.news = [
  {
    id: "project-launch",
    title_en: "COMPASS+ project officially launches",
    title_nl: "COMPASS+ project officieel van start",
    category_en: "Project Launch",
    category_nl: "Projectstart",
    date: "2025-10-01",
    featured: true,
    excerpt_en: "The FWO SBO project COMPASS+ has officially started its 4-year research programme. The interdisciplinary consortium of UA, UGent, KU Leuven and Artevelde University of Applied Sciences held its inaugural committee meeting.",
    excerpt_nl: "Het FWO SBO project COMPASS+ is officieel gestart met zijn 4-jarig onderzoeksprogramma. Het interdisciplinair consortium van UA, UGent, KU Leuven en Arteveldehogeschool hield zijn eerste stuurgroepvergadering.",
    link: ""
  },
  {
    id: "klankbord-1",
    title_en: "First advisory committee meeting — Project introduction and alignment",
    title_nl: "Eerste klankbordgroepvergadering — Kennismaking en afstemming van het project",
    category_en: "Advisory Committee",
    category_nl: "Klankbordgroep",
    date: "2026-01-27",
    featured: false,
    excerpt_en: "The first advisory committee meeting focused on introducing the COMPASS+ project, outlining its objectives and research lines, and engaging with advisory members to reflect on the project direction and priorities at the start of the collaboration.",
    excerpt_nl: "De eerste klankbordgroepvergadering stond in het teken van kennismaking, de voorstelling van het COMPASS+ project en de toelichting van de doelstellingen en onderzoekslijnen. Samen met de klankbordgroepleden werd gereflecteerd over de richting en prioriteiten van het project bij de opstart van de samenwerking.",
    link: ""
  },
  {
    id: "EFYE-2026",
    title_en: "COMPASS+ accepted for presentation at EFYE 2026 — Szeged",
    title_nl: "COMPASS+ aanvaard voor presentatie op EFYE 2026 — Szeged",
    category_en: "Conference",
    category_nl: "Conferentie",
    date: "2026-04-10",
    featured: false,
    excerpt_en: "A COMPASS+ contribution on study choice and feedback engagement has been accepted for presentation at the European First Year Experience (EFYE) Conference 2026 in Szeged.",
    excerpt_nl: "Een COMPASS+ bijdrage over studiekeuze en feedbackgebruik werd aanvaard voor presentatie op de European First Year Experience (EFYE) Conference 2026 in Szeged.",
    link: ""
  }
];

// ── EVENTS ────────────────────────────────────────────
COMPASS.events = [
  {
    id: "klankbord-1",
    title_en: "Advisory Committee Meeting #1",
    title_nl: "Klankbordgroepvergadering #1 ",
    type_en: "Advisory Committee",
    type_nl: "Klankbordgroep",
    date: "2026-01-27",
    location_en: "University of Antwerp",
    location_nl: "Universiteit Antwerpen",
    time: "09:30–13:00",
    description_en: "First advisory committee meeting - Project introduction & Aligment.",
    description_nl: "Eerste klankbordgroepvergadering - Introductie project & Afstemming."
  },
  
 {
    id: "klankbord-2",
    title_en: "Klankbordgroep Meeting #2 — Mid-project review",
    title_nl: "Klankbordgroepvergadering #2 — Tussentijdse opvolging",
    type_en: "Advisory Committee",
    type_nl: "Klankbordgroep",
    date: "2026-11-20",
    location_en: "University of Antwerp",
    location_nl: "University of Antwerp",
    time: "tba",
    description_en: "Mid-project advisory committee meeting reviewing progress across all three research lines & valorisation.",
    description_nl: "Tussentijdse klankbordgroepvergadering met overzicht van voortgang over de drie onderzoekslijnen en valorisatie."
  },
  
  {
    id: "lab-study-2",
    title_en: "RL2 Lab Study 2 — Self-efficact study - start data collection",
    title_nl: "OL2 Labstudie 2 — Zelf-effectiviteit studie - Start dataverzameling",
    type_en: "Study",
    type_nl: "Labstudie",
    date: "2026-03-16",
    location_en: "Antwerp Social Lab",
    location_nl: "Antwerp Social Lab",
    time: "",
    description_en: "Data collection for the first eye-tracking lab study examining self-efficacy as moderator of nudge effectiveness.",
    description_nl: "Dataverzameling voor de eerste eye-tracking labstudie over zelfeffectiviteit als moderator van nudge-effectiviteit."
  },
  
  {
    id: "EFYE-2026",
    title_en: "EFYE 2026 — COMPASS+ Paper Presentation",
    title_nl: "EFYE 2026 — COMPASS+ Paperpresentatie",
    type_en: "Conference",
    type_nl: "Conferentie",
    date: "2026-06-10",
    location_en: "Szeged, Hungary",
    location_nl: "Szeged, Hungary",
    time: "",
    description_en: "Presentation of COMPASS+ research findings at the European First Year Experience conference.",
    description_nl: "Presentatie van COMPASS+ onderzoeksbevindingen op de European First Year Experience conferentie."
  },
 
];

// ── TEAM ──────────────────────────────────────────────
COMPASS.team = [
    {
      id: "vincent-donche",
      name: "Prof. Vincent Donche",
      initials: "VD",
      role_en: "Principal Investigator",
      role_nl: "Promotor / Hoofdonderzoeker",
      institution: "University of Antwerp",
      department: "Research Group Edubron",
      research_lines: ["PI", "RL2 Lead", "Coordination"],
      researchers: ["Dr. Jonas Willems", "Dra.Roselyne Willems"],
      orcid: "0000-0002-9405-3896",
      order: 1
  },
  {
    id: "Stijn-Schelfhout",
    name: "Prof. Stijn Schelfhout",
    initials: "SC",
    role_en: "Supervisor",
    role_nl: "Promotor",
    institution: "Ghent University",
    department: "Dept. of Experimental Psychology",
    research_lines: ["RL1 Lead", "RL2"],
    researchers: ["Dra. Moira Decorte"],
    orcid: "",
    order: 2
  },
  {
    id: "karine-verschueren",
    name: "Prof. Karine Verschueren",
    initials: "KV",
    role_en: "Supervisor",
    role_nl: "promotor",
    institution: "KU Leuven",
    department: "School Psychology & Dev. in Context",
    research_lines: ["RL1", "RL3 Lead"],
    researchers: ["Dr. Alicia Ramos", "Dr. Ilse Van Damme", "Dra. Akemi Gabriela Watanabe Morales"],
    orcid: "",
    order: 3
  },
  {
    id: "veerle-vanoverberghe",
    name: "Veerle Vanoverberghe",
    initials: "VV",
    role_en: "Valorization Lead",
    role_nl: "Valorisatieleider",
    institution: "Artevelde University of Applied Sciences",
    department: "Education & Career Guidance",
    research_lines: ["Valorization"],
    researchers: ["Dr. Eva Vandemeulebroucke", "Sara Wouters"],
    orcid: "",
    order: 4
  }
];

// ── SETTINGS ──────────────────────────────────────────
COMPASS.settings = {
  title_en: "COMPASS+",
  title_nl: "COMPASS+",
  tagline_en: "Empowering the Study Choice Process for Higher Education",
  tagline_nl: "Studiekeuzeprocessen voor Hoger Onderwijs Versterken",
  contact_email: "vincent.donche@uantwerpen.be",
  columbus_url: "https://columbus.onderwijskiezer.be",
  show_banner: true,
  banner_en: "FWO SBO Project S002426N · 2025–2028 · University of Antwerp",
  banner_nl: "FWO SBO Project S002426N · 2025–2028 · Universiteit Antwerpen"
};
