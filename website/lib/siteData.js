// Content extracted from the original matwprojectusa.org homepage.
// Links are kept as the original site paths so the structure matches 1:1.

export const giveNowMenu = [
  { label: "Give Zakat", href: "/zakat" },
  {
    label: "Palestine",
    href: "/gaza-emergency",
    children: [
      { label: "Gaza Hospital Rebuild", href: "/gaza-hospital-rebuild" },
      { label: "Gaza Food and Water Aid", href: "/gaza-food-water" },
      { label: "Build a Water Well in Gaza", href: "/gaza-water-well" },
      { label: "Gaza Emergency Appeal", href: "/crisis-and-emergencies/palestine" },
      { label: "Orphans in Gaza", href: "/appeals/palestine-emergency" },
    ],
  },
  {
    label: "Sudan",
    href: "/sudan-crisis",
    children: [
      { label: "Sudan Emergency", href: "/sudan-crisis" },
      { label: "Sudan Orphans", href: "/appeals/sudan-orphans" },
    ],
  },
  {
    label: "Emergency Appeals",
    href: "/",
    children: [
      { label: "Sudan Emergency", href: "/sudan-crisis" },
      { label: "Lebanon Appeal", href: "/lebanon-appeal" },
      { label: "Special Case Programs", href: "/special-cases" },
      { label: "All Appeals", href: "/matw-appeals" },
    ],
  },
  { label: "Countries In Crisis", href: "/crisis-and-emergencies/countries-in-crisis" },
  {
    label: "Orphans",
    href: "/orphans-of-ummah",
    children: [
      { label: "Gaza Orphans", href: "/appeals/palestine-emergency" },
      { label: "Support Orphans of the Ummah", href: "/orphans-of-ummah" },
      { label: "Lebanon Orphan and Medical Center", href: "/appeals/north-lebanon-orphan" },
    ],
  },
  {
    label: "Sadaqah Jariyah",
    href: "/sadaqah-jariyah",
    children: [
      { label: "Build a Water Well", href: "/sadaqah-jariyah/build-a-water-well" },
      { label: "Build a Masjid", href: "/sadaqah-jariyah/build-a-masjid" },
      { label: "Loved One's Legacy", href: "/loved-ones-legacy" },
      { label: "Health", href: "/sadaqah-jariyah/health" },
      { label: "Income Generation", href: "/sadaqah-jariyah/sustainable" },
      { label: "Orphans", href: "/sadaqah-jariyah/orphans" },
      { label: "All Sadaqah Jariyah Appeals", href: "/sadaqah-jariyah" },
    ],
  },
  { label: "Food and Water Projects", href: "/food-and-water-aid" },
  { label: "Water Aid", href: "/water-aid" },
];

export const primaryMenus = [
  { label: "Give Now", items: giveNowMenu },
  {
    label: "Zakat",
    items: [
      { label: "Give Zakat", href: "/zakat" },
      { label: "Zakat Calculator", href: "/zakat-calculator" },
    ],
  },
  {
    label: "Islamic Giving",
    items: [
      { label: "Zakat", href: "/zakat" },
      { label: "Sadaqah Jariyah", href: "/sadaqah-jariyah" },
      { label: "Sacrifice", href: "/aqiqah" },
    ],
  },
  {
    label: "Amanah",
    items: [
      { label: "Automated Jummah Giving", href: "/jummah-giving" },
      { label: "Regular Giving", href: "/subscription" },
    ],
  },
  {
    label: "About Us",
    items: [
      { label: "Ali Banat – Our Founder", href: "/ali-banat" },
      { label: "Volunteer", href: "/volunteer" },
      { label: "Contact", href: "/contact" },
      { label: "Instagram", href: "https://instagram.com/matw_project" },
    ],
  },
];

export const presetAmounts = ["$65", "$150", "$200", "$500"];

export const urgentAppeals = [
  {
    title: "Pay your Zakat to Gaza",
    desc: "Zakat is an obligatory charity given annually by every able muslim, purifying their wealth and earning rewards from Allah SWT.",
    cta: "PAY YOUR ZAKAT TO GAZA",
    href: "/appeals/pay-your-zakat-to-gaza",
    donors: "41,122",
  },
  {
    title: "Sudan Emergency Appeal",
    desc: "The conflict in Sudan has displaced millions, leaving families without access to food, shelter, or medical care. MATW is responding with urgent relief.",
    cta: "DONATE NOW",
    href: "/sudan-crisis",
    donors: "32,353",
  },
  {
    title: "Gaza Still Starves",
    desc: "As the conflict in Gaza continues to escalate, so too does the damage, loss, destruction, and displacement that has become the harsh reality for countless families.",
    cta: "DONATE NOW",
    href: "/crisis-and-emergencies/palestine",
    donors: "41,122",
  },
  {
    title: "Build a Water Well in Gaza Fund",
    desc: "Provide a sustainable source of clean water to families in Gaza with a life-changing water well built in your name or a loved one's.",
    cta: "DONATE NOW",
    href: "/gaza-water-well",
    donors: "18,904",
  },
];

export const heroSlides = [
  { label: "Gaza Food & Water Aid", href: "/gaza-food-water" },
  { label: "Water Aid", href: "/water-aid" },
  { label: "Sudan Crisis", href: "/sudan-crisis" },
  { label: "Build a Masjid", href: "/sadaqah-jariyah/build-a-masjid" },
  { label: "Orphans of the Ummah", href: "/orphans-of-ummah" },
  { label: "Zakat", href: "/zakat" },
];

export const getInvolved = [
  { title: "VIEW OUR REPORTS", cta: "LEARN MORE", href: "/annual-reports" },
  { title: "VOLUNTEER WITH US", cta: "SIGN UP", href: "/volunteer" },
  { title: "ALL APPEALS", cta: "VIEW ALL APPEALS", href: "/all-appeals" },
  { title: "FOLLOW US ON INSTAGRAM", cta: "STAY CONNECTED", href: "https://www.instagram.com/matw_project/" },
];

export const footerColumns = [
  {
    heading: "About Us",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "About Ali Banat", href: "/ali-banat" },
      { label: "Purpose", href: "/purpose" },
      { label: "GDPR", href: "/gdpr" },
      { label: "Volunteer", href: "/volunteer" },
      { label: "Contact", href: "/contact" },
      { label: "Regular Giving", href: "/subscription" },
      { label: "Download Our App", href: "https://onelink.to/xq5p5w" },
      { label: "Bids & Tenders", href: "https://tender.matwproject.org/Tender/projects" },
      { label: "Subscriptions Portal", href: "/cancel" },
      { label: "Fundraise with MATW", href: "/fundraising" },
    ],
  },
  {
    heading: "Quick Links",
    links: [
      { label: "Live Distribution", href: "/live-on-field" },
      { label: "Zakat Calculator", href: "/zakat-calculator" },
      { label: "Donor Portal", href: "https://donor-care.prod.matwproject.org/" },
      { label: "Give Sadaqah", href: "/sadaqah" },
      { label: "Build a Well", href: "/sadaqah-jariyah/build-a-water-well" },
      { label: "Build a Mosque", href: "/sadaqah-jariyah/build-a-masjid" },
      { label: "Donate to Palestine", href: "/crisis-and-emergencies/palestine" },
      { label: "Donate to Gaza", href: "/crisis-and-emergencies/palestine" },
      { label: "Water Well Donation", href: "/sadaqah-jariyah/build-a-water-well" },
      { label: "Duas", href: "/duas" },
      { label: "Namaz Times", href: "/namaz-times" },
      { label: "Sadaqah Jariyah", href: "/sadaqah-jariyah" },
      { label: "100% Zakat Donation Policy", href: "/100-zakat-donation-policy" },
    ],
  },
  {
    heading: "Resources & Information",
    links: [
      { label: "FAQs", href: "/faq" },
      { label: "Scams & Phishing", href: "/phishing-scams" },
      { label: "Annual Reports", href: "/annual-reports" },
      { label: "Privacy Policies", href: "/privacypolicy" },
      { label: "Complaints Handling Policy", href: "#" },
      { label: "Our Policies", href: "/policies" },
      { label: "Opt-out", href: "/opt-out" },
      { label: "Refunds", href: "/pdf/refundpolicy-pdf-usa.pdf" },
    ],
  },
];

export const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/matwproject.US/" },
  { label: "Instagram", href: "https://www.instagram.com/matw_projectamerica" },
  { label: "TikTok", href: "https://www.tiktok.com/@matw_projectusa" },
  { label: "YouTube", href: "https://www.youtube.com/@matw_projectamerica" },
];

export const countrySites = [
  { label: "Muslim Charity - (UK)", href: "https://matwproject.org.uk/" },
  { label: "Muslim Charity - (Global)", href: "https://matwproject.org/" },
  { label: "Muslim Charity - (USA)", href: "https://matwprojectusa.org/", current: true },
  { label: "Muslim Charity - (Canada)", href: "https://matwprojectca.org/" },
  { label: "Muslim Charity - (Middle East)", href: "https://matwprojectme.org/" },
  { label: "Muslim Charity - (France)", href: "https://matwprojectfr.org/" },
  { label: "Muslim Charity - (Singapore)", href: "https://matwprojectsgp.org/" },
  { label: "Muslim Charity - (Malaysia)", href: "https://matwprojectmys.org/" },
  { label: "Muslim Charity - (Indonesia)", href: "https://matwprojectid.org/" },
];
