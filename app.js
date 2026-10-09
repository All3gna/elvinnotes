/**
 * Elvin School — Cyberpunk HackTheBox Edition
 * Complete interactive study terminal, MS Office project manager, and OneDrive backup integration.
 */

const subjects = [
  { id: "biochemistry", name: "Biochemistry", color: "#9fef00", short: "Molecules, pathways & reaction mechanics" },
  { id: "health-informatics", name: "Health informatics", color: "#00e5ff", short: "Information systems, security & digital care" },
  { id: "clinical-sciences", name: "Clinical & human sciences", color: "#9d4edd", short: "Neuroscience, cardiorespiratory & MSK imaging" },
];

const initialResources = [
  {
    id: "carbohydrates",
    title: "Carbohydrates & Their Chemistry",
    subject: "biochemistry",
    type: "pptx",
    difficulty: "EASY",
    source: "Lecture 3;Carbohydrates.pptx",
    previewPdf: "slide-previews/Lecture 3;Carbohydrates.pdf",
    minutes: 12,
    description: "Structure and metabolic roles of monosaccharides, disaccharides, and complex carbohydrates.",
    outline: ["Monosaccharides and their stereochemistry", "Disaccharides and glycosidic linkage formation", "Polysaccharides in energy storage and structure"],
    cards: [
      { q: "What is a monosaccharide?", a: "A single polyhydroxy aldehyde or ketone unit that cannot be hydrolyzed into simpler carbohydrates." },
      { q: "What bond links monosaccharide units?", a: "A glycosidic bond, formed by a condensation reaction releasing water." }
    ],
    quiz: { q: "Which bond joins sugar units in a carbohydrate?", options: ["Peptide bond", "Glycosidic bond", "Phosphodiester bond"], answer: 1, explain: "Glycosidic bonds join monosaccharides." }
  },
  {
    id: "micromolecules",
    title: "Micromolecules: Small Essentials",
    subject: "biochemistry",
    type: "pptx",
    difficulty: "EASY",
    source: "Lecture 4;Micromolecules.pptx",
    previewPdf: "slide-previews/Lecture 4;Micromolecules.pdf",
    minutes: 8,
    description: "Core small organic molecules that serve as metabolic precursors and cellular building blocks.",
    outline: ["Common biological micromolecules", "Structural features vs biological function", "Metabolic intermediates"],
    cards: [{ q: "Why study small precursors first?", a: "Recognizing precursor structures makes complex metabolic cycles easier to trace." }],
    quiz: { q: "Metabolic pathway tracing requires identifying…", options: ["Inputs and outputs of each step", "Page numbers only", "Final product alone"], answer: 0, explain: "Tracking precursors and products clarifies pathway flow." }
  },
  {
    id: "molecular-genetics",
    title: "Molecular Biology & Genetics",
    subject: "biochemistry",
    type: "pptx",
    difficulty: "MEDIUM",
    source: "Lecture 6;Molecular & Genetics.pptx",
    previewPdf: "slide-previews/Lecture 6;Molecular & Genetics.pdf",
    minutes: 10,
    description: "Organization of nucleic acids, gene expression, and DNA storage mechanisms.",
    outline: ["DNA and RNA structure", "Central dogma: Replication, Transcription, Translation", "Gene regulation concepts"],
    cards: [{ q: "What is the principal hereditary molecule?", a: "Deoxyribonucleic acid (DNA)." }],
    quiz: { q: "Primary genetic storage in human cells:", options: ["DNA", "Glycogen", "Lipid"], answer: 0, explain: "DNA stores hereditary blueprints." }
  },
  {
    id: "enzymes",
    title: "Enzymes: Biological Catalysts",
    subject: "biochemistry",
    type: "pptx",
    difficulty: "MEDIUM",
    source: "Lecture 7; Enzymes.pptx",
    previewPdf: "slide-previews/Lecture 7; Enzymes.pdf",
    minutes: 9,
    description: "Enzyme kinetics, activation energy, active site interactions, and inhibition models.",
    outline: ["Mechanism of enzyme catalysis", "Active site binding models", "Factors influencing reaction rate"],
    cards: [{ q: "What is the primary function of an enzyme?", a: "To lower activation energy and accelerate reaction rate without being consumed." }],
    quiz: { q: "After catalysis, an enzyme is...", options: ["Consumed completely", "Free to react again", "Converted to product"], answer: 1, explain: "Catalysts remain unchanged after reaction." }
  },
  {
    id: "glycolysis",
    title: "Glycolysis & Glucose Pathways",
    subject: "biochemistry",
    type: "pptx",
    difficulty: "HARD",
    source: "glucolysis ,Frutose,galactosegluconeogenesis and PPP patway.pptx",
    previewPdf: "slide-previews/glucolysis ,Frutose,galactosegluconeogenesis and PPP patway.pdf",
    minutes: 18,
    description: "Cytosolic breakdown of glucose to pyruvate, connected to gluconeogenesis and pentose phosphate pathway.",
    outline: ["10 steps of glycolysis", "Energy investment vs payoff phase", "Gluconeogenesis bypasses", "PPP pathway NADPH generation"],
    cards: [
      { q: "Where does glycolysis occur?", a: "In the cytosol." },
      { q: "What is the 3-carbon end product?", a: "Pyruvate." }
    ],
    quiz: { q: "Glycolysis site in human cells:", options: ["Cytosol", "Mitochondria", "Nucleus"], answer: 0, explain: "Glycolysis enzymes are located in the cytosol." }
  },
  {
    id: "fatty-acids",
    title: "Fatty-Acid Biosynthesis",
    subject: "biochemistry",
    type: "pptx",
    difficulty: "MEDIUM",
    source: "Fatty Acids(Biosynthesis).pptx",
    previewPdf: "slide-previews/Fatty Acids(Biosynthesis).pdf",
    minutes: 13,
    description: "De novo assembly of palmitate from acetyl-CoA by fatty acid synthase complex.",
    outline: ["Citrate shuttle acetyl-CoA transport", "Malonyl-CoA synthesis by ACC", "Elongation steps"],
    cards: [{ q: "What is built in fatty acid biosynthesis?", a: "Long-chain fatty acids from acetyl-CoA building blocks." }],
    quiz: { q: "Fatty acid synthesis is primarily...", options: ["Chain building from carbon units", "Protein degradation", "RNA splicing"], answer: 0, explain: "It builds acyl chains sequentially." }
  },
  {
    id: "proteins",
    title: "Proteins & Amino Acid Metabolism",
    subject: "biochemistry",
    type: "pptx",
    difficulty: "MEDIUM",
    source: "Proteins and Amino acid Metabolism.pptx",
    previewPdf: "slide-previews/Proteins and Amino acid Metabolism.pdf",
    minutes: 16,
    description: "Amino acid classification, peptide bond geometry, transamination, and urea cycle connections.",
    outline: ["Amino acid side chain chemistry", "Peptide bond characteristics", "Nitrogen disposal and urea cycle"],
    cards: [{ q: "What links amino acids in proteins?", a: "Peptide bonds." }],
    quiz: { q: "Building blocks of proteins:", options: ["Fatty acids", "Amino acids", "Nucleotides"], answer: 1, explain: "Proteins are polymers of amino acids." }
  },
  {
    id: "tca",
    title: "The TCA (Krebs) Cycle",
    subject: "biochemistry",
    type: "pptx",
    difficulty: "HARD",
    source: "TCA.pptx",
    previewPdf: "slide-previews/TCA.pdf",
    minutes: 11,
    description: "Mitochondrial matrix hub connecting acetyl-CoA oxidation with NADH/FADH2 generation.",
    outline: ["Condensation of acetyl-CoA and oxaloacetate", "Decarboxylation reactions", "Regeneration of oxaloacetate"],
    cards: [{ q: "What initiates the TCA cycle?", a: "Acetyl-CoA condensing with oxaloacetate to form citrate." }],
    quiz: { q: "Which molecule joins acetyl-CoA to start the cycle?", options: ["Oxaloacetate", "Glucose", "Lactate"], answer: 0, explain: "Acetyl-CoA + Oxaloacetate -> Citrate." }
  },
  {
    id: "etc",
    title: "Electron Transport Chain & ATP Synthase",
    subject: "biochemistry",
    type: "pptx",
    difficulty: "HARD",
    source: "Electron Transport Chain lecture.pptx",
    previewPdf: "slide-previews/Electron Transport Chain lecture.pdf",
    minutes: 14,
    description: "Respiratory complexes I-IV, proton gradient generation across inner mitochondrial membrane, and ATP synthesis.",
    outline: ["Electron transfer through Complexes I-IV", "Proton pumping into intermembrane space", "Chemiosmotic ATP synthesis"],
    cards: [
      { q: "What powers ATP synthase?", a: "The proton-motive force across the inner mitochondrial membrane." },
      { q: "Final electron acceptor?", a: "Molecular oxygen (O2), forming H2O." }
    ],
    quiz: { q: "Terminal electron acceptor in ETC:", options: ["Oxygen", "Carbon dioxide", "Pyruvate"], answer: 0, explain: "Oxygen receives electrons to form water." }
  },
  {
    id: "tca-reference",
    title: "Metabolism: Connected Pathways Reference",
    subject: "biochemistry",
    type: "pptx",
    difficulty: "EASY",
    source: "Tài liệu-0.pptx",
    previewPdf: "slide-previews/Tài liệu-0.pdf",
    minutes: 10,
    description: "Integrated metabolic map connecting glycolysis, TCA cycle, and lipid pathways.",
    outline: ["Interconnecting metabolic nodes", "Regulatory cross-talk", "Substrate flux control"],
    cards: [{ q: "Why use an integrated map?", a: "To trace substrate cross-over between carbohydrate, lipid, and protein pathways." }],
    quiz: { q: "Metabolic regulation ensures...", options: ["Optimal energy flux according to cell needs", "Static unchangeable rates", "No interaction"], answer: 0, explain: "Regulation balances cellular energy supply." }
  },
  {
    id: "health-information-systems",
    title: "Health Information Systems & Storage",
    subject: "health-informatics",
    type: "pptx",
    difficulty: "EASY",
    source: "HIS SLIDES JUDY.pptx",
    previewPdf: "slide-previews/HIS SLIDES JUDY.pdf",
    minutes: 11,
    description: "Hospital info systems, epidemiological surveillance data structures, and cloud storage vs colocation.",
    outline: ["On-premise, colocation & cloud healthcare storage", "Outpatient activity vs surveillance data", "Patient data privacy"],
    cards: [{ q: "Examples of health surveillance data?", a: "Epidemiological monitoring such as disease outbreak reporting." }],
    quiz: { q: "Epidemiological surveillance example:", options: ["Measles surveillance", "Staff shift timetable", "Parking log"], answer: 0, explain: "Disease tracking is epidemiological surveillance." }
  },
  {
    id: "informatics",
    title: "Introduction to Health Informatics",
    subject: "health-informatics",
    type: "pptx",
    difficulty: "EASY",
    source: "Introduction to Health Informatics L2.pptx",
    previewPdf: "slide-previews/Introduction to Health Informatics L2.pdf",
    minutes: 12,
    description: "Intersection of information science, healthcare practice, and digital technology.",
    outline: ["Role of data in clinical decisions", "EHR standards and interoperability", "Data privacy & ethics"],
    cards: [{ q: "What is health informatics?", a: "The field connecting healthcare, computer science, and data management." }],
    quiz: { q: "Central focus of health informatics:", options: ["Responsible healthcare data utilization", "Replacing clinicians", "Deleting paper records"], answer: 0, explain: "Responsible data use improves care quality." }
  },
  {
    id: "neuroscience",
    title: "Essential Neuroscience Textbook",
    subject: "clinical-sciences",
    type: "pdf",
    difficulty: "HARD",
    source: "_OceanofPDF.com_Essential_Neuroscience_4e_-_Allan_Siegel.pdf",
    previewPdf: "_OceanofPDF.com_Essential_Neuroscience_4e_-_Allan_Siegel.pdf",
    minutes: 25,
    description: "Comprehensive textbook on neuroanatomy, neural pathways, motor systems, and brainstem organization.",
    outline: ["Central nervous system anatomy", "Sensory & motor ascending/descending tracts", "Cranial nerves and reflex arcs"],
    cards: [{ q: "Best way to review dense neuroanatomy?", a: "Map structures to functional tracts, then perform active recall." }],
    quiz: { q: "Key approach for studying neuro tracts:", options: ["Link structure to function and self-test", "Passive skimming", "Rereading index"], answer: 0, explain: "Active synthesis builds strong retention." }
  },
  {
    id: "physio-cardiorespiratory",
    title: "Cardiorespiratory Physiotherapy Reference",
    subject: "clinical-sciences",
    type: "pdf",
    difficulty: "HARD",
    source: "_OceanofPDF.com_Cardiorespiratory_Physiotherapy_Adults_and_Paediatrics_5th_Edition_-_Eleanor_Main.pdf",
    previewPdf: "_OceanofPDF.com_Cardiorespiratory_Physiotherapy_Adults_and_Paediatrics_5th_Edition_-_Eleanor_Main.pdf",
    minutes: 30,
    description: "Adult and paediatric cardiorespiratory assessment, airway clearance, ventilation, and clinical management.",
    outline: ["Chest auscultation & imaging interpretation", "Airway clearance techniques", "Paediatric vs adult respiratory mechanics"],
    cards: [{ q: "What anchors respiratory physio reasoning?", a: "Connecting clinical assessment parameters to chosen airway interventions." }],
    quiz: { q: "Clinical reasoning connects...", options: ["Assessment, pathology, intervention & outcome", "Page count only", "Cover graphics"], answer: 0, explain: "Integrating assessment with interventions drives treatment efficacy." }
  },
  {
    id: "physio-foundations",
    title: "Tidy's Physiotherapy Textbook (13th Ed)",
    subject: "clinical-sciences",
    type: "pdf",
    difficulty: "HARD",
    source: "_OceanofPDF.com_TIDYS_PHYSIOTHERAPY_13e_-_Stuart_porter.pdf",
    previewPdf: "_OceanofPDF.com_TIDYS_PHYSIOTHERAPY_13e_-_Stuart_porter.pdf",
    minutes: 28,
    description: "Foundational textbook covering musculoskeletal, neurological, and rehabilitation physiotherapy practices.",
    outline: ["Principles of movement assessment", "Electrotherapy and manual therapy foundations", "Rehabilitation protocols"],
    cards: [{ q: "Effective summary technique?", a: "Explain section concepts in your own words immediately after reading." }],
    quiz: { q: "Post-reading action to verify comprehension:", options: ["Self-explain key concept without notes", "Highlight entire page", "Close eyes and sleep"], answer: 0, explain: "Self-explanation tests active recall." }
  },
  {
    id: "mri-msk",
    title: "MRI of the Musculoskeletal System",
    subject: "clinical-sciences",
    type: "pdf",
    difficulty: "HARD",
    source: "_OceanofPDF.com_MRI_of_the_Musculoskeletal_System_-_Martin_Vahlensieck.pdf",
    previewPdf: "_OceanofPDF.com_MRI_of_the_Musculoskeletal_System_-_Martin_Vahlensieck.pdf",
    minutes: 25,
    description: "Radiological imaging guide for joint anatomy, ligamentous tears, cartilage loss, and bone lesions on MRI.",
    outline: ["T1, T2, and proton density sequence characteristics", "Knee, shoulder, and spine MRI planes", "Pathological signal intensities"],
    cards: [{ q: "First step when interpreting MSK MRI?", a: "Orient anatomical region, imaging plane (axial/sagittal/coronal), and sequence type." }],
    quiz: { q: "Before analyzing lesion signals on MRI:", options: ["Confirm orientation, plane, and sequence type", "Guess immediately", "Ignore anatomy"], answer: 0, explain: "Correct orientation prevents misinterpretation." }
  },
  {
    id: "mri-msk-dup",
    title: "Musculoskeletal MRI Reference (Vol 2)",
    subject: "clinical-sciences",
    type: "pdf",
    difficulty: "HARD",
    source: "_OceanofPDF.com_MRI_of_the_Musculoskeletal_System_-_Martin_Vahlensieck (1).pdf",
    previewPdf: "_OceanofPDF.com_MRI_of_the_Musculoskeletal_System_-_Martin_Vahlensieck (1).pdf",
    minutes: 25,
    description: "Extended clinical MRI atlas for articular cartilage, tendons, and soft tissue imaging.",
    outline: ["Soft tissue contrast evaluation", "Tendinopathy signal changes", "Post-surgical joint imaging"],
    cards: [{ q: "Managing duplicate reference texts?", a: "Set a primary reference for main annotations while using alternate for cross-check." }],
    quiz: { q: "Recommended reference workflow:", options: ["Maintain primary reference with clear bookmarks", "Randomly switch without tracking", "Delete unread"], answer: 0, explain: "Consistent reference tracking prevents confusion." }
  }
];

// Storage keys
const storageKeys = {
  saved: "elvin-htb-saved-v2",
  completed: "elvin-htb-completed-v2",
  contact: "elvin-htb-contact-v2",
  customNotes: "elvin-htb-custom-notes-v2",
  privateNotes: "elvin-htb-private-notes-v2",
  adminPin: "elvin-htb-admin-pin-v2",
  soundEnabled: "elvin-htb-sound-v2",
  matrixEnabled: "elvin-htb-matrix-v2",
  onedriveConfig: "elvin-htb-onedrive-v2",
  xp: "elvin-htb-xp-v2"
};

// Web Audio API Sound Synthesizer
let audioCtx = null;
const readStore = (key, fallback) => {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
  catch { return fallback; }
};

let soundEnabled = readStore(storageKeys.soundEnabled, true);
let matrixEnabled = readStore(storageKeys.matrixEnabled, true);
let saved = new Set(readStore(storageKeys.saved, []));
let completed = new Set(readStore(storageKeys.completed, []));
let customNotes = readStore(storageKeys.customNotes, []);
let privateNotes = readStore(storageKeys.privateNotes, []);
let adminUnlocked = false;
let activeFilter = "all";
let activeTypeFilter = "all";
let searchTerm = "";
let activeResource = initialResources[0];
let toastTimer;
let studySessionSeconds = 25 * 60;
let studyTimerId = null;
let pendingUploadedFile = null;

function playSound(type) {
  if (!soundEnabled) return;
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === "suspended") audioCtx.resume();

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    const now = audioCtx.currentTime;

    if (type === "click") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.05);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === "success") {
      osc.type = "triangle";
      osc.frequency.setValueAtTime(523.25, now);
      osc.frequency.setValueAtTime(659.25, now + 0.08);
      osc.frequency.setValueAtTime(783.99, now + 0.16);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      osc.start(now);
      osc.stop(now + 0.3);
    } else if (type === "unlock") {
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(300, now);
      osc.frequency.exponentialRampToValueAtTime(1200, now + 0.15);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
      osc.start(now);
      osc.stop(now + 0.2);
    }
  } catch (e) { console.warn("Audio Context init skipped:", e); }
}

const getSubject = (id) => subjects.find((subject) => subject.id === id) || subjects[0];
const getAllPublicResources = () => [...initialResources, ...customNotes];
const getAllResources = () => [...initialResources, ...customNotes, ...(adminUnlocked ? privateNotes : [])];
const findResource = (id) => getAllResources().find((resource) => resource.id === id);

function getDirectReadUrl(resource) {
  if (!resource) return "#";
  if (resource.customUrl) return resource.customUrl;
  if (resource.fileDataUrl) return resource.fileDataUrl;
  if (resource.type === "pptx" && resource.previewPdf) {
    return new URL(encodeURI(resource.previewPdf), window.location.href).href;
  }
  if (resource.source) {
    return new URL(encodeURI(resource.source), window.location.href).href;
  }
  return "#";
}

function getSourceUrl(source) {
  return `./${encodeURI(source)}`;
}

const escapeHtml = (text) => String(text || "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2500);
}

function updateCounts() {
  const total = getAllPublicResources().length;
  document.querySelector("#nav-count").textContent = total;
  document.querySelector("#stat-notes").textContent = total;
  document.querySelector("#saved-count").textContent = saved.size;
  document.querySelector("#stat-saved").textContent = `${saved.size} Saved`;
  const progressPct = Math.round((completed.size / Math.max(1, total)) * 100);
  document.querySelector("#stat-progress").textContent = `${progressPct}%`;

  // XP calculation
  const xp = (completed.size * 250) + (saved.size * 50) + (customNotes.length * 150);
  const maxB = 3000;
  const fillPct = Math.min(100, Math.round((xp / maxB) * 100));
  const sidebarXpVal = document.querySelector("#sidebar-xp-val");
  const sidebarXpFill = document.querySelector("#sidebar-xp-fill");
  if (sidebarXpVal) sidebarXpVal.textContent = xp.toLocaleString();
  if (sidebarXpFill) sidebarXpFill.style.width = `${fillPct}%`;

  localStorage.setItem(storageKeys.saved, JSON.stringify([...saved]));
  localStorage.setItem(storageKeys.completed, JSON.stringify([...completed]));
  localStorage.setItem(storageKeys.customNotes, JSON.stringify(customNotes));
  localStorage.setItem(storageKeys.privateNotes, JSON.stringify(privateNotes));
}

function renderSubjects() {
  const subjectNav = document.querySelector("#subject-nav");
  subjectNav.innerHTML = subjects.map((subject) => `
    <button class="subject-item" data-subject="${subject.id}">
      <i class="subject-dot" style="background:${subject.color}"></i>
      ${escapeHtml(subject.name)}
      <span>${getAllPublicResources().filter((item) => item.subject === subject.id).length.toString().padStart(2, "0")}</span>
    </button>
  `).join("");

  document.querySelector("#subject-tiles").innerHTML = subjects.map((subject) => `
    <button class="subject-tile" data-subject="${subject.id}" style="--tile-color:${subject.color};">
      <strong>${escapeHtml(subject.name)}</strong>
      <small>${getAllPublicResources().filter((item) => item.subject === subject.id).length} Modules · ${escapeHtml(subject.short)}</small>
    </button>
  `).join("");
}

function createResourceCard(resource, index) {
  const subject = getSubject(resource.subject);
  const isSaved = saved.has(resource.id);
  const isDone = completed.has(resource.id);
  const directReadUrl = getDirectReadUrl(resource);

  const typeBadgeClass = resource.type === "pptx" ? "badge-pptx" : resource.type === "pdf" ? "badge-pdf" : "badge-docx";
  const typeBadgeText = resource.type === "pptx" ? "SLIDES .PPTX" : resource.type === "pdf" ? "BOOK .PDF" : "OFFICE .DOCX";

  return `
  <article class="resource-card" data-open-resource="${resource.id}" style="--card-color:${subject.color}" tabindex="0" role="button" aria-label="Open ${escapeHtml(resource.title)}">
    <div class="card-top">
      <span class="card-subject"><i style="background:${subject.color}"></i>${escapeHtml(subject.name)}</span>
      <span class="card-badge-type ${typeBadgeClass}">${typeBadgeText}</span>
      <button class="card-bookmark ${isSaved ? "is-saved" : ""}" data-save-resource="${resource.id}" aria-label="${isSaved ? "Remove saved topic" : "Save topic"}" title="${isSaved ? "Remove from review deck" : "Save for review"}">
        ${isSaved ? "◆" : "◇"}
      </button>
    </div>
    <div class="card-number">${String(index + 1).padStart(2, "0")} // ${isDone ? "STATUS: COMPLETED" : `LEVEL: ${resource.difficulty || "MEDIUM"}`}</div>
    <h3 class="card-title">${escapeHtml(resource.title)}</h3>
    <p class="card-description">${escapeHtml(resource.description)}</p>

    <div class="card-actions-row">
      <a class="btn-card-action btn-read-blank" href="${directReadUrl}" target="_blank" rel="noopener noreferrer" data-prevent-card-click="true" title="Open directly in new browser tab">
        ⚡ Read Online (_blank)
      </a>
      <button class="btn-card-action btn-preview-in" type="button" data-open-resource-portal="${resource.id}" data-prevent-card-click="true" title="Preview inside site player">
        👁️ Instant View
      </button>
      ${resource.source ? `<a class="btn-card-action btn-download-file" href="${getSourceUrl(resource.source)}" download data-prevent-card-click="true" title="Download original file">💾 Download</a>` : ""}
    </div>
  </article>`;
}

function matchesResource(resource) {
  const matchesSubject = activeFilter === "all" || resource.subject === activeFilter;
  const matchesType = activeTypeFilter === "all" ||
    (activeTypeFilter === "slides" && resource.type === "pptx") ||
    (activeTypeFilter === "pdf" && resource.type === "pdf") ||
    (activeTypeFilter === "office" && (resource.type === "docx" || resource.custom));

  const query = searchTerm.toLocaleLowerCase();
  const matchesQuery = !query || `${resource.title} ${resource.description} ${resource.source || ""} ${getSubject(resource.subject).name}`.toLocaleLowerCase().includes(query);

  return matchesSubject && matchesType && matchesQuery;
}

function renderLibrary() {
  const filtered = getAllPublicResources().filter(matchesResource);
  document.querySelector("#library-grid").innerHTML = filtered.map((resource, index) => createResourceCard(resource, index)).join("");
  document.querySelector("#results-count").textContent = `${filtered.length} ${filtered.length === 1 ? "MODULE" : "MODULES"}`;
  document.querySelector("#empty-state").hidden = filtered.length > 0;
}

function renderFeatured() {
  const featured = [
    initialResources.find((r) => r.id === "glycolysis"),
    initialResources.find((r) => r.id === "etc"),
    initialResources.find((r) => r.id === "neuroscience")
  ].filter(Boolean);

  document.querySelector("#featured-grid").innerHTML = featured.map((resource, index) => createResourceCard(resource, index)).join("");
  renderPortalGrid();
}

function renderPortalGrid() {
  const featured = [
    initialResources.find((r) => r.id === "glycolysis"),
    initialResources.find((r) => r.id === "proteins"),
    initialResources.find((r) => r.id === "physio-cardiorespiratory")
  ].filter(Boolean);

  document.querySelector("#portal-grid").innerHTML = featured.map((resource) => {
    const subject = getSubject(resource.subject);
    const directReadUrl = getDirectReadUrl(resource);
    return `
    <article class="portal-card" data-open-resource="${resource.id}">
      <span>${escapeHtml(subject.name.toUpperCase())}</span>
      <h3>${escapeHtml(resource.title)}</h3>
      <p>${escapeHtml(resource.description)}</p>
      <div class="portal-meta"><small>${resource.minutes} MIN READ</small><small>${resource.type.toUpperCase()}</small></div>
      <div style="display:flex;gap:8px;margin-top:12px;">
        <a class="btn-card-action btn-read-blank" href="${directReadUrl}" target="_blank" rel="noopener noreferrer" data-prevent-card-click="true">⚡ Read in _blank</a>
        <button class="btn-card-action btn-preview-in" type="button" data-open-resource-portal="${resource.id}" data-prevent-card-click="true">View Inside →</button>
      </div>
    </article>`;
  }).join("");
}

function renderFilters() {
  const options = [{ id: "all", name: "All Disciplines" }, ...subjects];
  document.querySelector("#filter-tabs").innerHTML = options.map((subject) => `
    <button class="filter-tab ${activeFilter === subject.id ? "is-active" : ""}" data-filter="${subject.id}" aria-pressed="${activeFilter === subject.id}">
      ${escapeHtml(subject.name)}
    </button>
  `).join("");
}

function showView(viewName, label) {
  playSound("click");
  if (viewName === "admin") renderAdminGate();
  document.querySelectorAll(".view").forEach((view) => view.classList.toggle("is-visible", view.id === `${viewName}-view`));
  document.querySelectorAll(".nav-item").forEach((button) => button.classList.toggle("is-active", button.dataset.view === viewName || (viewName === "reader" && button.dataset.view === "library")));
  document.querySelector("#breadcrumb-current").textContent = label || ({ home: "Overview", library: "Study Library", reader: activeResource.title, review: "Review Deck", admin: "Admin Terminal", about: "About Terminal" }[viewName]);
  document.querySelector("#sidebar").classList.remove("is-open");
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (viewName === "review") renderReview();
}

function renderReader(resource) {
  activeResource = resource;
  const subject = getSubject(resource.subject);
  const directReadUrl = getDirectReadUrl(resource);

  document.querySelector("#reader-source").textContent = resource.custom ? "SOURCE // ADMIN WORKSPACE CREATION" : `SOURCE // ${resource.source}`;
  document.querySelector("#reader-article").innerHTML = `
    <div class="reader-overline">${escapeHtml(subject.name.toUpperCase())} &nbsp;·&nbsp; CYBER STUDY GUIDE</div>
    <h1>${escapeHtml(resource.title)}</h1>
    <p class="reader-summary">${escapeHtml(resource.description)} Complete outline and recall flashcards attached below.</p>
    <div class="reader-meta">
      <span>${resource.minutes} MIN READ</span><i></i>
      <span>LEVEL: ${resource.difficulty || "MEDIUM"}</span><i></i>
      <span>FORMAT: ${resource.type.toUpperCase()}</span>
    </div>
    <div class="reader-controls">
      <a class="button button-dark htb-btn-primary" href="${directReadUrl}" target="_blank" rel="noopener noreferrer">⚡ Read Full Document in New Tab (_blank)</a>
      <button class="button button-outline" data-toggle-save="${resource.id}">${saved.has(resource.id) ? "◆ Saved in Deck" : "◇ Save to Review Deck"}</button>
      <button class="button button-outline" data-mark-complete="${resource.id}">${completed.has(resource.id) ? "✓ Completed" : "Mark Complete"}</button>
    </div>
    <section class="reader-section" id="overview">
      <h2>Big Picture & Concept Map</h2>
      <p>${escapeHtml(resource.description)} Identify key structural features and metabolic/clinical connections.</p>
    </section>
    <section class="reader-section" id="key-ideas">
      <h2>Core Outline Points</h2>
      <div class="learning-list">
        ${(resource.outline || []).map((item, index) => `<div class="learning-item"><i>${String(index + 1).padStart(2, "0")}</i><span>${escapeHtml(item)}</span></div>`).join("")}
      </div>
    </section>
    ${resource.cards && resource.cards.length ? `
    <section class="reader-section" id="flashcards">
      <h2>Active Recall Flashcard</h2>
      <div class="flashcard" data-flashcard="0" tabindex="0" role="button">
        <span class="flashcard-count">FLASHCARD 01 / ${String(resource.cards.length).padStart(2, "0")}</span>
        <strong class="flashcard-prompt">${escapeHtml(resource.cards[0].q)}</strong>
        <span class="flashcard-content"><span class="flashcard-hint">Tap to reveal answer</span></span>
      </div>
    </section>` : ""}
    ${resource.quiz ? `
    <section class="reader-section" id="check-yourself">
      <h2>Knowledge Test</h2>
      <div class="quiz-stack">
        <div class="quiz-box" data-quiz="${resource.id}-0" data-answer="${resource.quiz.answer}" data-explain="${escapeHtml(resource.quiz.explain)}">
          <span class="quiz-label">QUESTION 01</span>
          <h3>${escapeHtml(resource.quiz.q)}</h3>
          <div class="quiz-options">
            ${resource.quiz.options.map((opt, i) => `<button class="quiz-option" data-quiz-option="${i}">${escapeHtml(opt)}</button>`).join("")}
          </div>
          <p class="quiz-feedback" aria-live="polite"></p>
        </div>
      </div>
    </section>` : ""}
  `;

  document.querySelector("#reader-rail").innerHTML = `
    <div class="reader-rail-title">NOTE MODULE SECTIONS</div>
    <div class="reader-rail-links">
      <button class="rail-link" data-scroll-to="overview">Big Picture</button>
      <button class="rail-link" data-scroll-to="key-ideas">Core Outline</button>
      <button class="rail-link" data-scroll-to="flashcards">Flashcards</button>
      <button class="rail-link" data-scroll-to="check-yourself">Knowledge Test</button>
    </div>
    <div style="margin-top:20px;">
      <a class="button button-outline htb-btn-accent" href="${directReadUrl}" target="_blank" rel="noopener noreferrer" style="width:100%;text-align:center;">⚡ Open in _blank</a>
    </div>
  `;

  showView("reader", resource.title);
}

function renderReview() {
  const review = document.querySelector("#review-content");
  const savedResources = getAllPublicResources().filter((resource) => saved.has(resource.id));
  if (!savedResources.length) {
    review.innerHTML = `
      <div class="empty-review">
        <span class="empty-symbol">◈</span>
        <h2>Your review deck is empty.</h2>
        <p>Save topics from the library deck to review them here.</p>
        <button class="button button-dark htb-btn-primary" data-view="library">Browse Library</button>
      </div>`;
    return;
  }
  review.innerHTML = `
    <div class="review-list">
      ${savedResources.map((resource) => {
        const directReadUrl = getDirectReadUrl(resource);
        return `
        <article class="review-card" style="--tile-color:${getSubject(resource.subject).color}">
          <i></i>
          <div>
            <h3>${escapeHtml(resource.title)}</h3>
            <p>${escapeHtml(getSubject(resource.subject).name)} · ${resource.minutes} min read ${completed.has(resource.id) ? "· Completed" : ""}</p>
          </div>
          <div class="review-card-actions">
            <a class="btn-card-action btn-read-blank" href="${directReadUrl}" target="_blank" rel="noopener noreferrer">⚡ Read (_blank)</a>
            <button data-open-resource="${resource.id}">Study Guide</button>
            <button data-save-resource="${resource.id}">Remove</button>
          </div>
        </article>`;
      }).join("")}
    </div>`;
}

function openResourceInSite(resourceId) {
  playSound("click");
  const resource = findResource(resourceId);
  if (!resource) return;

  const viewer = document.querySelector("#resource-viewer");
  const iframe = document.querySelector("#resource-viewer-iframe");
  const title = document.querySelector("#resource-viewer-title");
  const downloadLink = document.querySelector("#viewer-download");
  const openTabBtn = document.querySelector("#viewer-open-tab");

  const directReadUrl = getDirectReadUrl(resource);
  title.textContent = resource.title;
  openTabBtn.href = directReadUrl;

  if (resource.custom && !resource.fileDataUrl) {
    const bodyHtml = (resource.body || "").split(/\n\s*\n/).map((part) => `<p>${escapeHtml(part).replace(/\n/g, "<br>")}</p>`).join("");
    iframe.src = "";
    iframe.srcdoc = `<!doctype html><html><head><style>body{font-family:sans-serif;padding:24px;line-height:1.8;color:#e2eaf4;background:#0d131d}p{margin:0 0 1em}h1,h2,h3{color:#9fef00}</style></head><body>${bodyHtml}</body></html>`;
    downloadLink.hidden = true;
  } else {
    iframe.srcdoc = "";
    iframe.src = directReadUrl;
    downloadLink.hidden = false;
    downloadLink.href = getSourceUrl(resource.source || "note.pdf");
  }

  viewer.hidden = false;
  document.body.classList.add("modal-open");
}

function closeResourceInSite() {
  playSound("click");
  const viewer = document.querySelector("#resource-viewer");
  const iframe = document.querySelector("#resource-viewer-iframe");
  viewer.hidden = true;
  iframe.src = "";
  iframe.srcdoc = "";
  document.body.classList.remove("modal-open");
}

function toggleSaved(resourceId) {
  if (saved.has(resourceId)) {
    saved.delete(resourceId);
    showToast("Removed from review deck.");
  } else {
    saved.add(resourceId);
    playSound("success");
    showToast("Saved to review deck (+50 XP).");
  }
  updateCounts();
  renderFeatured();
  renderLibrary();
  if (document.querySelector("#reader-view").classList.contains("is-visible")) renderReader(activeResource);
  if (document.querySelector("#review-view").classList.contains("is-visible")) renderReview();
}

function renderAdminGate() {
  const hasPin = Boolean(localStorage.getItem(storageKeys.adminPin));
  document.querySelector("#admin-gate").hidden = adminUnlocked;
  document.querySelector("#admin-workspace").hidden = !adminUnlocked;
  document.querySelector("#admin-gate-title").innerHTML = hasPin ? "Admin <span>Access.</span>" : "Set Up <span>Admin Access.</span>";
  document.querySelector("#admin-access-submit").textContent = hasPin ? "Unlock Admin Terminal" : "Set Security PIN";
  if (adminUnlocked) renderAdminWorkspace();
}

function renderAdminWorkspace() {
  const subjectSelect = document.querySelector("#admin-note-subject");
  subjectSelect.innerHTML = subjects.map((sub) => `<option value="${sub.id}">${escapeHtml(sub.name)}</option>`).join("");

  const noteList = document.querySelector("#admin-note-list");
  const allAdminItems = [...customNotes, ...privateNotes];

  noteList.innerHTML = allAdminItems.length
    ? allAdminItems.map((note) => `
      <article class="admin-entry">
        <div>
          <span>${note.isPrivate ? "🔒 PRIVATE WORKSPACE" : "🌐 PUBLIC LIBRARY"} · ${escapeHtml(getSubject(note.subject).name)}</span>
          <h3>${escapeHtml(note.title)}</h3>
          <p>${escapeHtml(note.description)} ${note.fileName ? `(File: ${escapeHtml(note.fileName)})` : ""}</p>
        </div>
        <div style="display:flex;gap:8px;">
          <a class="btn-card-action btn-read-blank" href="${getDirectReadUrl(note)}" target="_blank" rel="noopener noreferrer">⚡ Read (_blank)</a>
          <button class="admin-delete" type="button" data-delete-note="${note.id}">Delete</button>
        </div>
      </article>
    `).join("")
    : `<p class="admin-empty">No custom projects or uploads yet.</p>`;
}

async function hashAdminPin(pin) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(pin));
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

// OneDrive Instant Backup Handler
async function performOneDriveBackup() {
  const logEl = document.querySelector("#onedrive-log");
  const tokenInput = document.querySelector("#onedrive-client-id");
  const userToken = tokenInput.value.trim();

  logEl.textContent = "Initiating OneDrive backup process...";
  logEl.style.color = "var(--htb-cyan)";

  const backupData = {
    timestamp: new Date().toISOString(),
    site: "Elvin School",
    customNotes: customNotes,
    privateNotes: privateNotes,
    saved: [...saved],
    completed: [...completed]
  };

  const backupJson = JSON.stringify(backupData, null, 2);

  if (userToken) {
    try {
      logEl.textContent = "Uploading to Microsoft Graph API (me/drive/root:/ElvinNotes_Backup.json)...";
      const response = await fetch("https://graph.microsoft.com/v1.0/me/drive/root:/ElvinNotes_Backup.json:/content", {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${userToken}`,
          "Content-Type": "application/json"
        },
        body: backupJson
      });

      if (response.ok) {
        logEl.textContent = "✅ SUCCESS: Backed up to Microsoft OneDrive instantly!";
        logEl.style.color = "var(--htb-green)";
        playSound("success");
        showToast("OneDrive Cloud Backup Complete!");
        return;
      } else {
        logEl.textContent = `OneDrive API Error: HTTP ${response.status}. Fallback local export prepared.`;
      }
    } catch (err) {
      logEl.textContent = `Graph API Connection error. Download offline JSON backup below.`;
    }
  }

  // Fallback: Download JSON backup file directly
  triggerJsonDownload(backupJson, `ElvinNotes_OneDrive_Backup_${Date.now()}.json`);
  logEl.textContent = "💾 Backup JSON file generated and saved locally.";
  logEl.style.color = "var(--htb-green)";
  playSound("success");
  showToast("Backup JSON file exported!");
}

function triggerJsonDownload(content, filename) {
  const blob = new Blob([content], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Global Event Handler
function handleClick(event) {
  // Prevent card click if action buttons clicked
  if (event.target.closest("[data-prevent-card-click]")) return;

  const viewButton = event.target.closest("[data-view]");
  if (viewButton) { event.preventDefault(); showView(viewButton.dataset.view); return; }

  const subjectButton = event.target.closest("[data-subject]");
  if (subjectButton) {
    activeFilter = subjectButton.dataset.subject;
    searchTerm = "";
    document.querySelector("#global-search").value = "";
    renderFilters();
    renderLibrary();
    showView("library", getSubject(activeFilter).name);
    return;
  }

  const filterButton = event.target.closest("[data-filter]");
  if (filterButton) {
    activeFilter = filterButton.dataset.filter;
    renderFilters();
    renderLibrary();
    return;
  }

  const saveButton = event.target.closest("[data-save-resource], [data-toggle-save]");
  if (saveButton) {
    event.stopPropagation();
    toggleSaved(saveButton.dataset.saveResource || saveButton.dataset.toggleSave);
    return;
  }

  const markButton = event.target.closest("[data-mark-complete]");
  if (markButton) {
    const id = markButton.dataset.markComplete;
    if (completed.has(id)) completed.delete(id);
    else { completed.add(id); playSound("success"); }
    updateCounts();
    renderFeatured();
    renderLibrary();
    renderReader(findResource(id));
    showToast(completed.has(id) ? "Topic marked complete! (+250 XP)" : "Status updated.");
    return;
  }

  const portalButton = event.target.closest("[data-open-resource-portal]");
  if (portalButton) {
    event.stopPropagation();
    openResourceInSite(portalButton.dataset.openResourcePortal);
    return;
  }

  const card = event.target.closest("[data-open-resource]");
  if (card) {
    const resource = findResource(card.dataset.openResource);
    if (resource) renderReader(resource);
    return;
  }

  const scrollButton = event.target.closest("[data-scroll-to]");
  if (scrollButton) {
    document.getElementById(scrollButton.dataset.scrollTo)?.scrollIntoView({ behavior: "smooth" });
    return;
  }

  const flashcard = event.target.closest("[data-flashcard]");
  if (flashcard) {
    playSound("click");
    const index = Number(flashcard.dataset.flashcard);
    const answer = flashcard.querySelector(".flashcard-content");
    answer.innerHTML = answer.dataset.revealed === "true"
      ? `<span class="flashcard-hint">Tap to reveal answer</span>`
      : `<span class="flashcard-answer" style="color:var(--htb-green);font-weight:bold;">${escapeHtml(activeResource.cards[index].a)}</span>`;
    answer.dataset.revealed = answer.dataset.revealed === "true" ? "false" : "true";
    return;
  }

  const option = event.target.closest("[data-quiz-option]");
  if (option) {
    const quiz = option.closest("[data-quiz]");
    const answer = Number(quiz.dataset.answer);
    const choice = Number(option.dataset.quizOption);
    if (choice === answer) playSound("success");
    quiz.querySelectorAll("[data-quiz-option]").forEach((b) => {
      b.disabled = true;
      const sel = Number(b.dataset.quizOption);
      if (sel === answer) b.classList.add("is-right");
      else if (sel === choice) b.classList.add("is-wrong");
    });
    quiz.querySelector(".quiz-feedback").textContent = choice === answer ? `Correct! ${quiz.dataset.explain}` : `Incorrect. ${quiz.dataset.explain}`;
    return;
  }

  if (event.target.closest("[data-close-modal]")) { closeContact(); return; }
}

document.addEventListener("click", handleClick);

document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    document.querySelector("#global-search").focus();
  }
  if (event.key === "Escape") {
    closeContact();
    document.querySelector("#sidebar").classList.remove("is-open");
  }
});

// Format Type Filters
document.querySelectorAll("[data-type-filter]").forEach((btn) => {
  btn.addEventListener("click", () => {
    playSound("click");
    document.querySelectorAll("[data-type-filter]").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    activeTypeFilter = btn.dataset.typeFilter;
    renderLibrary();
  });
});

document.querySelector("#global-search").addEventListener("input", (event) => {
  searchTerm = event.target.value.trim();
  activeFilter = "all";
  renderFilters();
  renderLibrary();
  if (searchTerm) showView("library", `Search: ${searchTerm}`);
});

document.querySelector("#clear-search").addEventListener("click", () => {
  searchTerm = "";
  document.querySelector("#global-search").value = "";
  renderLibrary();
  showView("library");
});

document.querySelector("#show-all-subjects").addEventListener("click", () => {
  activeFilter = "all";
  renderFilters();
  renderLibrary();
  showView("library");
});

document.querySelector("#profile-button").addEventListener("click", () => showView("about"));
document.querySelector("#about-open").addEventListener("click", () => showView("about"));
document.querySelector("#about-open-footer").addEventListener("click", () => showView("about"));
document.querySelector("#about-contact").addEventListener("click", openContact);
document.querySelector("#contact-open").addEventListener("click", openContact);
document.querySelector("#mobile-contact").addEventListener("click", openContact);
document.querySelector("#mobile-menu").addEventListener("click", () => document.querySelector("#sidebar").classList.toggle("is-open"));
document.querySelector("#contact-modal").addEventListener("click", (event) => { if (event.target.id === "contact-modal") closeContact(); });

// HUD Toggles
document.querySelector("#sound-toggle").addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  localStorage.setItem(storageKeys.soundEnabled, soundEnabled);
  document.querySelector("#sound-toggle").textContent = soundEnabled ? "🔊 Audio: ON" : "🔇 Audio: OFF";
  showToast(soundEnabled ? "Audio effects enabled." : "Audio effects muted.");
});

document.querySelector("#cyber-matrix-toggle").addEventListener("click", () => {
  matrixEnabled = !matrixEnabled;
  localStorage.setItem(storageKeys.matrixEnabled, matrixEnabled);
  document.querySelector("#cyber-matrix-toggle").textContent = matrixEnabled ? "Matrix: ON" : "Matrix: OFF";
  document.querySelector("#cyber-canvas").style.display = matrixEnabled ? "block" : "none";
});

// Admin Form Submission with MS Office Upload Support
document.querySelector("#admin-access-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const pin = String(new FormData(form).get("pin"));
  const storedPin = localStorage.getItem(storageKeys.adminPin);
  const status = document.querySelector("#admin-access-status");

  try {
    const digest = await hashAdminPin(pin);
    if (!storedPin) {
      localStorage.setItem(storageKeys.adminPin, digest);
      adminUnlocked = true;
      playSound("unlock");
    } else if (digest === storedPin) {
      adminUnlocked = true;
      playSound("unlock");
    } else {
      status.textContent = "PIN incorrect. Try again.";
      return;
    }
    form.reset();
    status.textContent = "Admin Terminal Unlocked.";
    renderAdminGate();
  } catch {
    status.textContent = "PIN setup requires secure context.";
  }
});

// MS Office / PDF File Input Handler
const adminFileInput = document.querySelector("#admin-file-input");
const filePreviewName = document.querySelector("#file-preview-name");

adminFileInput?.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  pendingUploadedFile = file;
  filePreviewName.textContent = `Attached: ${file.name} (${Math.round(file.size / 1024)} KB)`;
  filePreviewName.hidden = false;
  playSound("click");
});

document.querySelector("#admin-note-form").addEventListener("submit", (event) => {
  event.preventDefault();
  if (!adminUnlocked) return;

  const form = event.currentTarget;
  const data = new FormData(form);
  const isPrivate = data.get("workspaceVisibility") === "private";
  const title = String(data.get("title")).trim();
  const subject = String(data.get("subject"));
  const description = String(data.get("description")).trim();
  const body = String(data.get("body")).trim();

  let fileDataUrl = null;
  let fileType = "office";

  if (pendingUploadedFile) {
    fileDataUrl = URL.createObjectURL(pendingUploadedFile);
    if (/\.pptx?$/i.test(pendingUploadedFile.name)) fileType = "pptx";
    else if (/\.pdf$/i.test(pendingUploadedFile.name)) fileType = "pdf";
    else fileType = "docx";
  }

  const outline = body.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);

  const newEntry = {
    id: `custom-${Date.now()}`,
    custom: true,
    isPrivate,
    title,
    subject,
    type: fileType,
    difficulty: "CUSTOM",
    description,
    body: body || description,
    fileName: pendingUploadedFile ? pendingUploadedFile.name : null,
    fileDataUrl: fileDataUrl,
    minutes: Math.max(3, Math.ceil((body.length || 100) / 180)),
    outline: outline.length ? outline : [description],
    cards: [{ q: `Key concept in ${title}?`, a: description }],
    quiz: { q: `Main objective of ${title}:`, options: [description, "Option B", "Option C"], answer: 0, explain: "Created in Admin Workspace." }
  };

  if (isPrivate) {
    privateNotes.unshift(newEntry);
  } else {
    customNotes.unshift(newEntry);
  }

  updateCounts();
  renderSubjects();
  renderAdminWorkspace();
  renderLibrary();

  form.reset();
  pendingUploadedFile = null;
  filePreviewName.hidden = true;

  document.querySelector("#admin-note-status").textContent = isPrivate ? "Added to Private Workspace." : "Published to Public Library!";
  playSound("success");

  // Auto-sync to OneDrive if enabled
  if (document.querySelector("#onedrive-auto-sync")?.checked) {
    performOneDriveBackup();
  }
});

document.querySelector("#admin-note-list").addEventListener("click", (event) => {
  const deleteButton = event.target.closest("[data-delete-note]");
  if (!deleteButton || !adminUnlocked) return;
  const { deleteNote } = deleteButton.dataset;
  customNotes = customNotes.filter((n) => n.id !== deleteNote);
  privateNotes = privateNotes.filter((n) => n.id !== deleteNote);
  saved.delete(deleteNote);
  completed.delete(deleteNote);
  updateCounts();
  renderSubjects();
  renderAdminWorkspace();
  renderLibrary();
  renderReview();
});

document.querySelector("#admin-lock").addEventListener("click", () => {
  adminUnlocked = false;
  renderAdminGate();
});

// OneDrive Backup Button Listeners
document.querySelector("#onedrive-backup-now")?.addEventListener("click", performOneDriveBackup);
document.querySelector("#onedrive-download-json")?.addEventListener("click", () => performOneDriveBackup());

// Contact Form Handler
function openContact() {
  const modal = document.querySelector("#contact-modal");
  modal.hidden = false;
  document.body.classList.add("modal-open");
}

function closeContact() {
  document.querySelector("#contact-modal").hidden = true;
  document.body.classList.remove("modal-open");
}

// Cyber Matrix Canvas Particle Animation
function initMatrixCanvas() {
  const canvas = document.querySelector("#cyber-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const cols = Math.floor(width / 20);
  const ypos = Array(cols).fill(0);

  function matrixStep() {
    if (!matrixEnabled) return;
    ctx.fillStyle = "rgba(10, 13, 20, 0.08)";
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = "#9fef00";
    ctx.font = "12px monospace";

    ypos.forEach((y, index) => {
      const text = String.fromCharCode(Math.floor(Math.random() * 128));
      const x = index * 20;
      ctx.fillText(text, x, y);

      if (y > 100 + Math.random() * 10000) ypos[index] = 0;
      else ypos[index] = y + 20;
    });
  }

  setInterval(matrixStep, 50);
}

// Initial Setup Call
document.querySelector("#today-label").textContent = new Intl.DateTimeFormat(undefined, { weekday: "short", month: "short", day: "numeric" }).format(new Date()).toUpperCase();
renderSubjects();
renderFilters();
renderFeatured();
renderLibrary();
updateCounts();
initMatrixCanvas();