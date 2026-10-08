const subjects = [
  { id: "biochemistry", name: "Biochemistry", color: "#efaa96", short: "Molecules, pathways & the chemistry of life" },
  { id: "health-informatics", name: "Health informatics", color: "#9ecfc2", short: "Information, technology & better care" },
  { id: "clinical-sciences", name: "Clinical & human sciences", color: "#b7b1d8", short: "The nervous system, movement & imaging" },
];

const resources = [
  { id: "carbohydrates", title: "Carbohydrates & their chemistry", subject: "biochemistry", source: "Lecture 3;Carbohydrates.pptx", minutes: 12, description: "Get to know the structures and roles of the body's key carbohydrates.", outline: ["Monosaccharides and their building blocks", "Disaccharides and glycosidic bonds", "How carbohydrate structure relates to function"], cards: [{ q: "What is a monosaccharide?", a: "A single sugar unit that cannot be hydrolyzed into a simpler carbohydrate." }, { q: "What kind of bond links two sugar units?", a: "A glycosidic bond, formed between hydroxyl groups as a water molecule is released." }], quiz: { q: "What links two monosaccharide units?", options: ["A peptide bond", "A glycosidic bond", "A phosphodiester bond"], answer: 1, explain: "A glycosidic bond joins sugar units in a carbohydrate." } },
  { id: "micromolecules", title: "Micromolecules: the small essentials", subject: "biochemistry", source: "Lecture 4;Micromolecules.pptx", minutes: 8, description: "A clear starting point for the small molecules that support life.", outline: ["Recognize common small biological molecules", "Connect molecular structure to function", "Use this vocabulary as a foundation for metabolism"], cards: [{ q: "Why learn the building blocks before the pathways?", a: "Recognizing the small molecules makes the transformations in metabolic pathways easier to follow." }], quiz: { q: "A useful first step when studying a metabolic pathway is to identify…", options: ["The molecules entering and leaving each step", "Only the final product", "The page number of each reaction"], answer: 0, explain: "Tracking inputs and outputs helps reveal how the pathway works as a whole." } },
  { id: "molecular-genetics", title: "Molecular biology & genetics", subject: "biochemistry", source: "Lecture 6;Molecular & Genetics.pptx", minutes: 10, description: "Explore how molecular information is organized and passed on.", outline: ["The molecular basis of genetic information", "How nucleic acids store and convey information", "The relationship between genes and cellular function"], cards: [{ q: "What is the broad role of DNA?", a: "DNA stores hereditary information that cells use as instructions for biological function." }], quiz: { q: "Which molecule is the primary long-term store of hereditary information in human cells?", options: ["DNA", "Glycogen", "Triglyceride"], answer: 0, explain: "DNA is the cell's principal hereditary information store." } },
  { id: "enzymes", title: "Enzymes: catalysts at work", subject: "biochemistry", source: "Lecture 7; Enzymes.pptx", minutes: 9, description: "Understand how biological catalysts help reactions happen.", outline: ["What enzymes do in biological systems", "How substrate and active site fit together", "How reaction rate can be influenced"], cards: [{ q: "What is the role of an enzyme in a reaction?", a: "An enzyme is a biological catalyst: it lowers activation energy and increases reaction rate without being consumed." }], quiz: { q: "What happens to an enzyme after it catalyzes a reaction?", options: ["It is consumed in the reaction", "It can participate again", "It becomes the final product"], answer: 1, explain: "A catalyst is not consumed by the reaction it helps." } },
  { id: "glycolysis", title: "Glycolysis & glucose pathways", subject: "biochemistry", source: "glucolysis ,Frutose,galactosegluconeogenesis and PPP patway.pptx", minutes: 18, description: "Follow the glucose story from first steps to connected pathways.", outline: ["Trace the major stages of glycolysis", "Notice where the pathway uses or produces energy", "Relate glucose metabolism to gluconeogenesis and the pentose phosphate pathway"], cards: [{ q: "Where does glycolysis occur in a eukaryotic cell?", a: "In the cytosol." }, { q: "What is the major three-carbon end product of glycolysis?", a: "Pyruvate. Depending on the cell and conditions, pyruvate can enter different metabolic routes." }], quiz: { q: "Where in the cell does glycolysis take place?", options: ["Cytosol", "Mitochondrial matrix only", "Nucleus"], answer: 0, explain: "Glycolysis takes place in the cytosol." } },
  { id: "fatty-acids", title: "Fatty-acid biosynthesis", subject: "biochemistry", source: "Fatty Acids(Biosynthesis).pptx", minutes: 13, description: "Learn how cells assemble fatty-acid chains and why that matters.", outline: ["Recognize the purpose of fatty-acid synthesis", "Track how a carbon chain grows", "Relate fatty acids to storage and cellular structure"], cards: [{ q: "What does fatty-acid biosynthesis build?", a: "Fatty-acid chains from smaller carbon units. Their products contribute to lipid storage and membrane-related molecules." }], quiz: { q: "Fatty-acid biosynthesis is primarily a process of…", options: ["Building a carbon chain", "Breaking down a protein", "Copying DNA"], answer: 0, explain: "Biosynthesis builds fatty-acid carbon chains from smaller precursors." } },
  { id: "proteins", title: "Proteins & amino-acid metabolism", subject: "biochemistry", source: "Proteins and Amino acid Metabolism.pptx", minutes: 16, description: "Connect amino-acid building blocks with protein structure and metabolism.", outline: ["Understand amino acids as protein building blocks", "Connect peptide bonds with protein chains", "Review how amino acids participate in metabolism"], cards: [{ q: "What bond links amino acids in a protein chain?", a: "A peptide bond, linking the amino group of one amino acid to the carboxyl group of another." }, { q: "What is the basic building block of a protein?", a: "An amino acid." }], quiz: { q: "What is the basic building block of a protein?", options: ["A fatty acid", "An amino acid", "A nucleotide"], answer: 1, explain: "Proteins are polymers assembled from amino acids." } },
  { id: "tca", title: "The TCA cycle", subject: "biochemistry", source: "TCA.pptx", minutes: 11, description: "Place a central energy-producing cycle into the bigger picture.", outline: ["Understand the TCA cycle's role in metabolism", "Follow the cycle from acetyl-CoA to regenerated oxaloacetate", "See how reduced carriers connect the cycle to oxidative phosphorylation"], cards: [{ q: "What two-carbon unit enters the TCA cycle by joining oxaloacetate?", a: "Acetyl-CoA, which condenses with oxaloacetate to form citrate." }], quiz: { q: "Which molecule combines with acetyl-CoA to begin a turn of the TCA cycle?", options: ["Oxaloacetate", "Glucose", "Lactate"], answer: 0, explain: "Acetyl-CoA combines with oxaloacetate to form citrate." } },
  { id: "etc", title: "The electron transport chain", subject: "biochemistry", source: "Electron Transport Chain lecture.pptx", minutes: 14, description: "See how electron transfer connects to the production of ATP.", outline: ["Trace electron flow through the respiratory chain", "Relate proton pumping to the electrochemical gradient", "Connect chemiosmosis with ATP synthesis"], cards: [{ q: "What powers ATP synthase during oxidative phosphorylation?", a: "The proton-motive force across the inner mitochondrial membrane." }, { q: "What is oxygen's role at the end of the electron transport chain?", a: "Oxygen accepts electrons and protons to form water." }], quiz: { q: "In the electron transport chain, oxygen serves as the…", options: ["Final electron acceptor", "Starting carbohydrate", "Enzyme that forms glucose"], answer: 0, explain: "Oxygen receives electrons at the end of the respiratory chain." } },
  { id: "tca-reference", title: "Metabolism: connecting the pathways", subject: "biochemistry", source: "Tài liệu-0.pptx", minutes: 10, description: "A supporting set of course slides for connecting metabolic themes.", outline: ["Use this course resource alongside the named pathway lectures", "Identify recurring molecules and metabolic connections", "Check slide headings for your lecturer's specific learning emphasis"], cards: [{ q: "When should you consult a supporting slide set?", a: "Use it alongside the dedicated lecture topic and check its slide headings to identify the specific course emphasis." }], quiz: { q: "What should guide your use of a supporting course slide deck?", options: ["Its lecture headings and course context", "Its file size alone", "The first slide only"], answer: 0, explain: "The slide headings and course context show how a supporting set fits your learning." } },
  { id: "health-information-systems", title: "Health information systems & data storage", subject: "health-informatics", source: "HIS SLIDES JUDY.pptx", minutes: 11, description: "Explore how health information systems store information and organize health data.", outline: ["Compare on-premises, colocation, and cloud storage", "Recognize examples of health activity data, such as outpatient and antenatal attendance", "Distinguish epidemiological surveillance from semi-permanent facility data"], cards: [{ q: "Name two health data categories described in the lecture slides.", a: "Examples include activity data, epidemiological surveillance data, and semi-permanent data such as facility staffing or population targets." }], quiz: { q: "Which is an example of epidemiological surveillance data listed in the slides?", options: ["Measles surveillance", "Facility staffing", "Outpatient attendance"], answer: 0, explain: "The slides list measles surveillance as an epidemiological surveillance example." } },
  { id: "informatics", title: "Introduction to health informatics", subject: "health-informatics", source: "Introduction to Health Informatics L2.pptx", minutes: 12, description: "Explore how health information and technology support care.", outline: ["Describe the role of information in health systems", "Consider how information technology supports health services", "Explore questions of data quality, access, and responsible use"], cards: [{ q: "What does health informatics broadly bring together?", a: "Health information, information science, and technology to support health practice and services." }], quiz: { q: "Which is a central concern in health informatics?", options: ["Using health information responsibly", "Replacing all clinical judgement", "Eliminating patient records"], answer: 0, explain: "Responsible handling and use of health information is central to the field." } },
  { id: "neuroscience", title: "Essential neuroscience", subject: "clinical-sciences", source: "_OceanofPDF.com_Essential_Neuroscience_4e_-_Allan_Siegel.pdf", minutes: 15, description: "A textbook reference for the organization and function of the nervous system.", outline: ["Review the nervous system's major structures", "Build a foundation for neural signaling and function", "Use the textbook as a reference alongside course notes"], cards: [{ q: "How can you make a large neuroscience chapter easier to review?", a: "Break it into structure, function, and key terms, then test yourself on the connections." }], quiz: { q: "Which review approach is most useful for a dense reference chapter?", options: ["Structure it into concepts, then self-test", "Reread without pausing", "Memorize page numbers first"], answer: 0, explain: "Active recall organized around concepts is more useful than unstructured rereading." } },
  { id: "physio-cardiorespiratory", title: "Cardiorespiratory physiotherapy", subject: "clinical-sciences", source: "_OceanofPDF.com_Cardiorespiratory_Physiotherapy_Adults_and_Paediatrics_5th_Edition_-_Eleanor_Main.pdf", minutes: 14, description: "An adult and paediatric reference for cardiorespiratory physiotherapy.", outline: ["Consult sections relevant to your current course topic", "Compare assessment and treatment considerations", "Use the text as a reference, and verify details with your lecturer"], cards: [{ q: "What helps you compare physiotherapy approaches across patient groups?", a: "Compare the assessment goal, patient context, intervention choice, and how outcomes are evaluated." }], quiz: { q: "When reviewing a clinical reference, what should you connect?", options: ["Assessment, context, intervention, and outcome", "Only the chapter title", "The cover design and index"], answer: 0, explain: "Connecting assessment and patient context to the intervention and outcome supports useful clinical reasoning." } },
  { id: "physio-foundations", title: "Physiotherapy practice & foundations", subject: "clinical-sciences", source: "_OceanofPDF.com_TIDYS_PHYSIOTHERAPY_13e_-_Stuart_porter.pdf", minutes: 13, description: "A broad physiotherapy reference to support course revision.", outline: ["Find the reference sections that match your learning goals", "Connect foundational concepts with assessment and intervention", "Make a short summary in your own words after each section"], cards: [{ q: "What is a useful habit after reading a physiotherapy section?", a: "Summarize its key idea in your own words, then relate it to an assessment or intervention context." }], quiz: { q: "After reading a section, which action best checks your understanding?", options: ["Explain its central idea in your own words", "Highlight every sentence", "Memorize its page count"], answer: 0, explain: "Explaining a concept in your own words is a quick check of understanding." } },
  { id: "mri", title: "Musculoskeletal MRI", subject: "clinical-sciences", source: "_OceanofPDF.com_MRI_of_the_Musculoskeletal_System_-_Martin_Vahlensieck.pdf", minutes: 15, description: "An imaging reference for musculoskeletal anatomy and MRI appearances.", outline: ["Use the reference to study region by region", "Link anatomy with imaging planes and appearances", "Compare images with your course material and teaching notes"], cards: [{ q: "What makes anatomy and imaging easier to connect?", a: "Study the anatomy in the same region and plane as the image, then identify visible structures systematically." }], quiz: { q: "When reviewing an MRI region, what is a sound first step?", options: ["Orient to the anatomy and imaging plane", "Start by guessing a diagnosis", "Ignore the image orientation"], answer: 0, explain: "Knowing the plane and anatomy gives context before interpreting an image." } },
  { id: "mri-duplicate", title: "Musculoskeletal MRI: second copy", subject: "clinical-sciences", source: "_OceanofPDF.com_MRI_of_the_Musculoskeletal_System_-_Martin_Vahlensieck (1).pdf", minutes: 15, description: "A second copy of the musculoskeletal MRI reference in your collection.", outline: ["Compare this copy with your primary reference", "Keep the version you prefer for annotations", "Use topic and page references to return to important examples"], cards: [{ q: "How can you manage two copies of the same reference?", a: "Choose a primary copy for study, check that both open correctly, and keep notes anchored to chapter or page references." }], quiz: { q: "What is a practical way to handle duplicate reference files?", options: ["Choose a primary copy and keep references consistent", "Study both without noting which is which", "Delete one without checking"], answer: 0, explain: "A single primary copy keeps notes and page references consistent." } },
];

const storageKeys = { saved: "elvin-school-saved-v1", completed: "elvin-school-completed-v1", contact: "elvin-school-contact-v1" };
const readStore = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } };
let saved = new Set(readStore(storageKeys.saved, []));
let completed = new Set(readStore(storageKeys.completed, []));
let activeFilter = "all";
let searchTerm = "";
let activeResource = resources[0];
let toastTimer;

const getSubject = (id) => subjects.find((subject) => subject.id === id);
const getSourceUrl = (source) => encodeURIComponent(source).replaceAll("%2F", "/");
const escapeHtml = (text) => String(text).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2300);
}

function updateCounts() {
  document.querySelector("#nav-count").textContent = resources.length;
  document.querySelector("#stat-notes").textContent = resources.length;
  document.querySelector("#saved-count").textContent = saved.size;
  document.querySelector("#stat-saved").textContent = `${saved.size} saved`;
  document.querySelector("#stat-progress").textContent = `${Math.round((completed.size / resources.length) * 100)}%`;
  localStorage.setItem(storageKeys.saved, JSON.stringify([...saved]));
  localStorage.setItem(storageKeys.completed, JSON.stringify([...completed]));
}

function renderSubjects() {
  const subjectNav = document.querySelector("#subject-nav");
  subjectNav.innerHTML = subjects.map((subject) => `<button class="subject-item" data-subject="${subject.id}"><i class="subject-dot" style="background:${subject.color}"></i>${escapeHtml(subject.name)}<span>${resources.filter((item) => item.subject === subject.id).length.toString().padStart(2, "0")}</span></button>`).join("");
  document.querySelector("#subject-tiles").innerHTML = subjects.map((subject, index) => `<button class="subject-tile" data-subject="${subject.id}" style="--tile-color:${subject.color}"><span class="subject-num">0${index + 1} / SUBJECT</span><span class="tile-arrow">↗</span><strong>${escapeHtml(subject.name)}</strong><small>${resources.filter((item) => item.subject === subject.id).length} study resources · ${escapeHtml(subject.short)}</small></button>`).join("");
}

function createResourceCard(resource, index) {
  const subject = getSubject(resource.subject);
  const isSaved = saved.has(resource.id);
  const isDone = completed.has(resource.id);
  return `<article class="resource-card" data-open-resource="${resource.id}" style="--card-color:${subject.color}" tabindex="0" role="button" aria-label="Open ${escapeHtml(resource.title)}">
    <div class="card-top"><span class="card-subject"><i></i>${escapeHtml(subject.name)}</span><button class="card-bookmark ${isSaved ? "is-saved" : ""}" data-save-resource="${resource.id}" aria-label="${isSaved ? "Remove saved topic" : "Save topic"}" title="${isSaved ? "Remove from review deck" : "Save for review"}">${isSaved ? "◆" : "◇"}</button></div>
    <div class="card-number">${String(index + 1).padStart(2, "0")} / ${isDone ? "COMPLETED" : "STUDY NOTE"}</div>
    <h3 class="card-title">${escapeHtml(resource.title)}</h3><p class="card-description">${escapeHtml(resource.description)}</p>
    <div class="card-foot"><span>${resource.minutes} MIN READ</span><span class="card-open">↗</span></div>
  </article>`;
}

function matchesResource(resource) {
  const matchesSubject = activeFilter === "all" || resource.subject === activeFilter;
  const query = searchTerm.toLocaleLowerCase();
  const matchesQuery = !query || `${resource.title} ${resource.description} ${resource.source} ${getSubject(resource.subject).name}`.toLocaleLowerCase().includes(query);
  return matchesSubject && matchesQuery;
}

function renderLibrary() {
  const filtered = resources.filter(matchesResource);
  document.querySelector("#library-grid").innerHTML = filtered.map((resource) => createResourceCard(resource, resources.indexOf(resource))).join("");
  document.querySelector("#results-count").textContent = `${filtered.length} ${filtered.length === 1 ? "RESOURCE" : "RESOURCES"}`;
  document.querySelector("#empty-state").hidden = filtered.length > 0;
}

function renderFeatured() {
  const featured = [resources.find((resource) => resource.id === "glycolysis"), resources.find((resource) => resource.id === "etc"), resources.find((resource) => resource.id === "informatics")];
  document.querySelector("#featured-grid").innerHTML = featured.map((resource, index) => createResourceCard(resource, index)).join("");
}

function renderFilters() {
  const options = [{ id: "all", name: "All resources" }, ...subjects];
  document.querySelector("#filter-tabs").innerHTML = options.map((subject) => `<button class="filter-tab ${activeFilter === subject.id ? "is-active" : ""}" data-filter="${subject.id}" aria-pressed="${activeFilter === subject.id}">${escapeHtml(subject.name)}</button>`).join("");
}

function showView(viewName, label) {
  document.querySelectorAll(".view").forEach((view) => view.classList.toggle("is-visible", view.id === `${viewName}-view`));
  document.querySelectorAll(".nav-item").forEach((button) => button.classList.toggle("is-active", button.dataset.view === viewName || (viewName === "reader" && button.dataset.view === "library")));
  document.querySelector("#breadcrumb-current").textContent = label || ({ home: "Overview", library: "Study library", reader: activeResource.title, review: "Review deck", about: "About Elvin School" }[viewName]);
  document.querySelector("#sidebar").classList.remove("is-open");
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (viewName === "review") renderReview();
}

function renderReader(resource) {
  activeResource = resource;
  const subject = getSubject(resource.subject);
  document.querySelector("#reader-source").textContent = `SOURCE  /  ${resource.source}`;
  document.querySelector("#reader-article").innerHTML = `
    <div class="reader-overline">${escapeHtml(subject.name.toUpperCase())} &nbsp;·&nbsp; A CLEAR STUDY GUIDE</div>
    <h1>${escapeHtml(resource.title)}</h1><p class="reader-summary">${escapeHtml(resource.description)} This guide gives you a clear starting structure; use the original course material for its full explanations and lecturer-specific detail.</p>
    <div class="reader-meta"><span>${resource.minutes} MIN READ</span><i></i><span>${resource.outline.length} KEY IDEAS</span><i></i><span>${resource.cards.length} FLASHCARD${resource.cards.length === 1 ? "" : "S"}</span></div>
    <div class="reader-controls"><button class="button button-outline" data-toggle-save="${resource.id}">${saved.has(resource.id) ? "◆ Saved to review" : "◇ Save for review"}</button><button class="button button-outline" data-open-source="${resource.id}">Open original notes ↗</button><button class="button button-dark" data-mark-complete="${resource.id}">${completed.has(resource.id) ? "✓ Completed" : "Mark complete"}</button></div>
    <section class="reader-section" id="overview"><h2>Start with the big picture.</h2><p>${escapeHtml(resource.description)} Before diving into details, take a moment to identify the main idea, then look for how the smaller pieces connect.</p></section>
    <section class="reader-section" id="key-ideas"><h2>Key ideas to follow.</h2><p>Use these as a reading path through your original material. Pause after each one and explain it in your own words.</p><div class="learning-list">${resource.outline.map((item, index) => `<div class="learning-item"><i>${String(index + 1).padStart(2, "0")}</i><span>${escapeHtml(item)}</span></div>`).join("")}</div></section>
    <section class="reader-section" id="flashcards"><h2>Try a quick recall.</h2><p>Tap a card to reveal the answer. Try to say it out loud before you turn it over.</p><div class="flashcard" data-flashcard="0" tabindex="0" role="button" aria-label="Reveal flashcard answer"><span class="flashcard-count">FLASHCARD 01 / ${String(resource.cards.length).padStart(2, "0")}</span><strong class="flashcard-prompt">${escapeHtml(resource.cards[0].q)}</strong><span class="flashcard-content"><span class="flashcard-hint">Tap to reveal ↗</span></span></div></section>
    <section class="reader-section" id="check-yourself"><h2>Check your understanding.</h2><p>Choose an answer to see a little feedback.</p><div class="quiz-box" data-quiz="${resource.id}"><span class="quiz-label">ONE QUICK QUESTION</span><h3>${escapeHtml(resource.quiz.q)}</h3><div class="quiz-options">${resource.quiz.options.map((option, index) => `<button class="quiz-option" data-quiz-option="${index}">${escapeHtml(option)}</button>`).join("")}</div><p class="quiz-feedback" aria-live="polite"></p></div></section>
    <section class="reader-section" id="original"><h2>Continue with the original.</h2><div class="source-callout"><p>This study guide is a companion, not a substitute for your source material. Open the original lecture or reference to review the full diagrams, explanations, and course-specific detail.</p></div><button class="button button-dark source-open-button" data-open-source="${resource.id}">Open ${resource.source.toLowerCase().endsWith(".pdf") ? "reference book" : "lecture slides"} <span>↗</span></button></section>`;
  document.querySelector("#reader-rail").innerHTML = `<div class="reader-rail-title">IN THIS NOTE</div><div class="reader-rail-links">${[["overview", "The big picture"], ["key-ideas", "Key ideas"], ["flashcards", "Flashcards"], ["check-yourself", "Quick check"], ["original", "Original notes"]].map(([id, label]) => `<button class="rail-link" data-scroll-to="${id}">${label}</button>`).join("")}</div><div class="rail-tip"><span>✳</span><p>Try explaining one idea from memory before you move to the next.</p></div>`;
  document.querySelector("#reader-article").querySelector("[data-quiz]").dataset.answer = String(resource.quiz.answer);
  document.querySelector("#reader-article").querySelector("[data-quiz]").dataset.explain = resource.quiz.explain;
  showView("reader", resource.title);
}

function renderReview() {
  const review = document.querySelector("#review-content");
  const savedResources = resources.filter((resource) => saved.has(resource.id));
  if (!savedResources.length) {
    review.innerHTML = `<div class="empty-review"><span class="empty-symbol">◈</span><h2>Your review deck is ready.</h2><p>Save a topic from the library to keep it close for your next study session.</p><button class="button button-dark" data-view="library">Find something to study <span>↗</span></button></div>`;
    return;
  }
  review.innerHTML = `<div class="review-list">${savedResources.map((resource) => `<article class="review-card" style="--tile-color:${getSubject(resource.subject).color}"><i></i><div><h3>${escapeHtml(resource.title)}</h3><p>${escapeHtml(getSubject(resource.subject).name)} · ${resource.minutes} min read ${completed.has(resource.id) ? "· Completed" : ""}</p></div><div class="review-card-actions"><button data-open-resource="${resource.id}">Study ↗</button><button data-save-resource="${resource.id}" aria-label="Remove ${escapeHtml(resource.title)}">Remove</button></div></article>`).join("")}</div>`;
}

function toggleSaved(resourceId) {
  if (saved.has(resourceId)) { saved.delete(resourceId); showToast("Removed from your review deck."); }
  else { saved.add(resourceId); showToast("Saved to your review deck."); }
  updateCounts(); renderFeatured(); renderLibrary();
  if (document.querySelector("#reader-view").classList.contains("is-visible")) renderReader(activeResource);
  if (document.querySelector("#review-view").classList.contains("is-visible")) renderReview();
}

function openSource(resourceId) {
  const resource = resources.find((item) => item.id === resourceId);
  if (!resource) return;
  window.open(getSourceUrl(resource.source), "_blank", "noopener,noreferrer");
}

function openContact() {
  const contact = readStore(storageKeys.contact, { email: "", phone: "" });
  const modal = document.querySelector("#contact-modal");
  const form = document.querySelector("#contact-form");
  form.elements.email.value = contact.email || "";
  form.elements.phone.value = contact.phone || "";
  document.querySelector("#contact-saved").hidden = !contact.email && !contact.phone;
  updateContactLinks(contact);
  modal.hidden = false;
  document.body.classList.add("modal-open");
  form.elements.email.focus();
}

function updateContactLinks(contact) {
  const whatsapp = document.querySelector("#whatsapp-link");
  const email = document.querySelector("#email-link");
  const phoneDigits = (contact.phone || "").replace(/\D/g, "");
  whatsapp.hidden = phoneDigits.length < 7;
  whatsapp.href = phoneDigits.length >= 7 ? `https://wa.me/${phoneDigits}` : "#";
  email.hidden = !contact.email;
  email.href = contact.email ? `mailto:${encodeURIComponent(contact.email)}` : "mailto:";
  email.textContent = contact.email ? `Write to ${contact.email} ↗` : "";
}

function closeContact() {
  document.querySelector("#contact-modal").hidden = true;
  document.body.classList.remove("modal-open");
}

function handleClick(event) {
  const viewButton = event.target.closest("[data-view]");
  if (viewButton) { event.preventDefault(); showView(viewButton.dataset.view); return; }
  const subjectButton = event.target.closest("[data-subject]");
  if (subjectButton) { activeFilter = subjectButton.dataset.subject; searchTerm = ""; document.querySelector("#global-search").value = ""; renderFilters(); renderLibrary(); showView("library", getSubject(activeFilter).name); return; }
  const filterButton = event.target.closest("[data-filter]");
  if (filterButton) { activeFilter = filterButton.dataset.filter; renderFilters(); renderLibrary(); return; }
  const saveButton = event.target.closest("[data-save-resource], [data-toggle-save]");
  if (saveButton) { event.stopPropagation(); toggleSaved(saveButton.dataset.saveResource || saveButton.dataset.toggleSave); return; }
  const markButton = event.target.closest("[data-mark-complete]");
  if (markButton) { const id = markButton.dataset.markComplete; completed.has(id) ? completed.delete(id) : completed.add(id); updateCounts(); renderFeatured(); renderLibrary(); renderReader(resources.find((resource) => resource.id === id)); showToast(completed.has(id) ? "Nice work. Topic marked complete." : "Completion status updated."); return; }
  const sourceButton = event.target.closest("[data-open-source]");
  if (sourceButton) { openSource(sourceButton.dataset.openSource); return; }
  const card = event.target.closest("[data-open-resource]");
  if (card) { const resource = resources.find((item) => item.id === card.dataset.openResource); if (resource) renderReader(resource); return; }
  const scrollButton = event.target.closest("[data-scroll-to]");
  if (scrollButton) { document.getElementById(scrollButton.dataset.scrollTo)?.scrollIntoView({ behavior: "smooth" }); return; }
  const flashcard = event.target.closest("[data-flashcard]");
  if (flashcard) { const index = Number(flashcard.dataset.flashcard); const answer = flashcard.querySelector(".flashcard-content"); answer.innerHTML = answer.dataset.revealed === "true" ? `<span class="flashcard-hint">Tap to reveal ↗</span>` : `<span class="flashcard-answer">${escapeHtml(activeResource.cards[index].a)}</span>`; answer.dataset.revealed = answer.dataset.revealed === "true" ? "false" : "true"; return; }
  const option = event.target.closest("[data-quiz-option]");
  if (option) { const quiz = option.closest("[data-quiz]"); const answer = Number(quiz.dataset.answer); const choice = Number(option.dataset.quizOption); quiz.querySelectorAll("[data-quiz-option]").forEach((button) => { button.disabled = true; const selected = Number(button.dataset.quizOption); if (selected === answer) button.classList.add("is-right"); else if (selected === choice) button.classList.add("is-wrong"); }); quiz.querySelector(".quiz-feedback").textContent = choice === answer ? `That's right. ${quiz.dataset.explain}` : `Not quite. ${quiz.dataset.explain}`; return; }
  if (event.target.closest("[data-close-modal]")) { closeContact(); return; }
}

document.addEventListener("click", handleClick);
document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); document.querySelector("#global-search").focus(); }
  if (event.key === "Escape") { closeContact(); document.querySelector("#sidebar").classList.remove("is-open"); }
  if ((event.key === "Enter" || event.key === " ") && event.target.matches("[data-open-resource], [data-flashcard]")) { event.preventDefault(); event.target.click(); }
});

document.querySelector("#global-search").addEventListener("input", (event) => {
  searchTerm = event.target.value.trim();
  activeFilter = "all";
  renderFilters(); renderLibrary();
  if (searchTerm) showView("library", `Search: ${searchTerm}`);
  else if (document.querySelector("#library-view").classList.contains("is-visible")) showView("library");
});
document.querySelector("#clear-search").addEventListener("click", () => { searchTerm = ""; document.querySelector("#global-search").value = ""; renderLibrary(); showView("library"); });
document.querySelector("#show-all-subjects").addEventListener("click", () => { activeFilter = "all"; renderFilters(); renderLibrary(); showView("library"); });
document.querySelector("#profile-button").addEventListener("click", () => showView("about"));
document.querySelector("#about-open").addEventListener("click", () => showView("about"));
document.querySelector("#about-open-footer").addEventListener("click", () => showView("about"));
document.querySelector("#about-contact").addEventListener("click", openContact);
document.querySelector("#contact-open").addEventListener("click", openContact);
document.querySelector("#mobile-contact").addEventListener("click", openContact);
document.querySelector("#mobile-menu").addEventListener("click", () => document.querySelector("#sidebar").classList.toggle("is-open"));
document.querySelector("#contact-modal").addEventListener("click", (event) => { if (event.target.id === "contact-modal") closeContact(); });
document.querySelector("#contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const contact = { email: String(data.get("email")).trim(), phone: String(data.get("phone")).trim() };
  localStorage.setItem(storageKeys.contact, JSON.stringify(contact));
  updateContactLinks(contact);
  document.querySelector("#contact-saved").hidden = false;
  showToast("Contact details saved on this device.");
});

document.querySelector("#today-label").textContent = new Intl.DateTimeFormat(undefined, { weekday: "short", month: "short", day: "numeric" }).format(new Date()).toUpperCase();
const heroPhoto = document.querySelector(".hero-art-photo");
heroPhoto.addEventListener("load", () => { if (heroPhoto.naturalWidth > 0) heroPhoto.closest(".hero-art").classList.add("has-image"); });
heroPhoto.addEventListener("error", () => heroPhoto.remove());
if (heroPhoto.complete && heroPhoto.naturalWidth > 0) heroPhoto.closest(".hero-art").classList.add("has-image");
renderSubjects(); renderFilters(); renderFeatured(); renderLibrary(); updateCounts();