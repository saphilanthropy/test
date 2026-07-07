// Per-locale content for the homepage. English strings mirror the original
// site; Spanish strings are taken from the site's own Weglot translation
// (the SPANISH_… reference export). Image/href values are shared across
// locales; only text differs.

import { A } from "./siteData";

const IMAGES = {
  heroGazaFoodWater: `${A}/hero-gaza-food-water.jpg`,
  heroWaterAid: `${A}/hero-water-aid.jpg`,
  heroSudan: `${A}/hero-sudan.jpg`,
  heroMasjid: `${A}/hero-masjid.jpg`,
  heroOrphans: `${A}/hero-orphans.jpg`,
  heroZakat: `${A}/hero-zakat.jpg`,
  getReports: `${A}/get-reports.jpg`,
  getVolunteer: `${A}/get-volunteer.jpg`,
  getAppeals: `${A}/get-appeals.jpg`,
  getInstagram: `${A}/get-instagram.jpg`,
};

const SOCIAL = [
  { label: "Facebook", href: "https://www.facebook.com/matwproject.US/", icon: `${A}/social-facebook.svg` },
  { label: "Instagram", href: "https://www.instagram.com/matw_projectamerica", icon: `${A}/social-instagram.svg` },
  { label: "TikTok", href: "https://www.tiktok.com/@matw_projectusa", icon: `${A}/social-tiktok.svg` },
  { label: "YouTube", href: "https://www.youtube.com/@matw_projectamerica", icon: `${A}/social-youtube.svg` },
];

const LANGUAGES = [
  { label: "English", locale: "en", href: "/" },
  { label: "Français", locale: "fr", href: "/" },
  { label: "العربية", locale: "ar", href: "/" },
  { label: "Español", locale: "es", href: "/es" },
  { label: "Deutsch", locale: "de", href: "/" },
  { label: "Nederlands", locale: "nl", href: "/" },
];

const COPYRIGHT =
  "MATW PROJECT USA, A 501(C)(3) ORGANIZATION, 2461 EISENHOWER AVE 2ND FL, ALEXANDRIA, VA 22314, EIN: 92-1915834 © 2016–2026 MUSLIMS AROUND THE WORLD PROJECT (MATW)";

// ---------------------------------------------------------------------------
// ENGLISH
// ---------------------------------------------------------------------------
const en = {
  code: "en",
  meta: {
    title: "Muslim Charity | Islamic Charity | 100% Donation Policy | MATW Project",
    description:
      "MATW Project is a Muslim charity delivering food, water, medical aid and shelter to those in need worldwide, with a 100% donation policy on Zakat.",
  },
  nav: {
    brand: "MATW Project",
    donate: "Donate",
    phone: "1-800-718-2427",
    hours: "10am–8pm",
    langLabel: "EN",
    languages: LANGUAGES,
    quickIcons: { zakat: "Zakat", meals: "Sudan Hot Meals" },
    menus: [
      {
        label: "Give Now",
        items: [
          { label: "Give Zakat", href: "/zakat" },
          { label: "Palestine", href: "/gaza-emergency", children: [
            { label: "Gaza Hospital Rebuild", href: "/gaza-hospital-rebuild" },
            { label: "Gaza Food and Water Aid", href: "/gaza-food-water" },
            { label: "Build a Water Well in Gaza", href: "/gaza-water-well" },
            { label: "Gaza Emergency Appeal", href: "/crisis-and-emergencies/palestine" },
            { label: "Orphans in Gaza", href: "/appeals/palestine-emergency" },
          ] },
          { label: "Sudan", href: "/sudan-crisis", children: [
            { label: "Sudan Emergency", href: "/sudan-crisis" },
            { label: "Sudan Orphans", href: "/appeals/sudan-orphans" },
          ] },
          { label: "Emergency Appeals", href: "/", children: [
            { label: "Sudan Emergency", href: "/sudan-crisis" },
            { label: "Lebanon Appeal", href: "/lebanon-appeal" },
            { label: "Special Case Programs", href: "/special-cases" },
            { label: "All Appeals", href: "/matw-appeals" },
          ] },
          { label: "Countries In Crisis", href: "/crisis-and-emergencies/countries-in-crisis" },
          { label: "Orphans", href: "/orphans-of-ummah", children: [
            { label: "Gaza Orphans", href: "/appeals/palestine-emergency" },
            { label: "Support Orphans of the Ummah", href: "/orphans-of-ummah" },
            { label: "Lebanon Orphan and Medical Center", href: "/appeals/north-lebanon-orphan" },
          ] },
          { label: "Sadaqah Jariyah", href: "/sadaqah-jariyah", children: [
            { label: "Build a Water Well", href: "/sadaqah-jariyah/build-a-water-well" },
            { label: "Build a Masjid", href: "/sadaqah-jariyah/build-a-masjid" },
            { label: "Loved One's Legacy", href: "/loved-ones-legacy" },
            { label: "Health", href: "/sadaqah-jariyah/health" },
            { label: "Income Generation", href: "/sadaqah-jariyah/sustainable" },
            { label: "All Sadaqah Jariyah Appeals", href: "/sadaqah-jariyah" },
          ] },
          { label: "Food and Water Projects", href: "/food-and-water-aid" },
          { label: "Water Aid", href: "/water-aid" },
        ],
      },
      { label: "Zakat", items: [
        { label: "Give Zakat", href: "/zakat" },
        { label: "Zakat Calculator", href: "/zakat-calculator" },
      ] },
      { label: "Islamic Giving", items: [
        { label: "Zakat", href: "/zakat" },
        { label: "Sadaqah Jariyah", href: "/sadaqah-jariyah" },
        { label: "Sacrifice", href: "/aqiqah" },
      ] },
      { label: "Amanah", items: [
        { label: "Automated Jummah Giving", href: "/jummah-giving" },
        { label: "Regular Giving", href: "/subscription" },
      ] },
      { label: "About Us", items: [
        { label: "Ali Banat – Our Founder", href: "/ali-banat" },
        { label: "Volunteer", href: "/volunteer" },
        { label: "Contact", href: "/contact" },
        { label: "Instagram", href: "https://instagram.com/matw_project" },
      ] },
    ],
  },
  announcement: [
    "Gaza: Rebuild What Was Lost — Learn More",
    "Urgently Provide Food and Water to Gaza — Give Now",
  ],
  quickDonate: {
    oneTime: "One-time",
    monthly: "Monthly",
    amountPlaceholder: "Amount",
    button: "Quick Donate",
    redirecting: "Redirecting…",
    mostNeeded: "Most Needed Now",
    programs: ["Most Needed Now", "Gaza Emergency", "Sudan Emergency", "Zakat", "Sadaqah Jariyah", "Water Aid"],
  },
  hero: [
    { label: "Gaza Food & Water Aid", href: "/gaza-food-water", img: IMAGES.heroGazaFoodWater },
    { label: "Water Aid", href: "/water-aid", img: IMAGES.heroWaterAid },
    { label: "Sudan Crisis", href: "/sudan-crisis", img: IMAGES.heroSudan },
    { label: "Build a Masjid", href: "/sadaqah-jariyah/build-a-masjid", img: IMAGES.heroMasjid },
    { label: "Orphans of the Ummah", href: "/orphans-of-ummah", img: IMAGES.heroOrphans },
    { label: "Zakat", href: "/zakat", img: IMAGES.heroZakat },
  ],
  urgent: {
    title: "Urgent Appeals",
    subtitle: "Food, water and shelter are urgently needed by families in Gaza and Sudan right now.",
    donorsSuffix: "Donors have donated",
    appeals: [
      { title: "Pay your Zakat to Gaza", desc: "Zakat is an obligatory charity given annually by every able muslim, purifying their wealth and earning rewards from Allah SWT.", cta: "PAY YOUR ZAKAT TO GAZA", href: "/appeals/pay-your-zakat-to-gaza", donors: "41,132", img: IMAGES.heroZakat },
      { title: "Sudan Emergency Appeal", desc: "The conflict in Sudan has displaced millions, leaving families without access to food, shelter, or medical care. MATW is responding with urgent relief.", cta: "DONATE NOW", href: "/sudan-crisis", donors: "32,360", img: IMAGES.heroSudan },
      { title: "Gaza Still Starves", desc: "As the conflict in Gaza continues to escalate, so too does the damage, loss, destruction, and displacement that has become the harsh reality for countless families.", cta: "DONATE NOW", href: "/crisis-and-emergencies/palestine", donors: "41,122", img: IMAGES.heroGazaFoodWater },
      { title: "Build a Water Well in Gaza Fund", desc: "Support the construction of water wells in Gaza, each designed to provide clean, reliable water to more than 15,000 people every day.", cta: "DONATE NOW", href: "/gaza-water-well", donors: "18,904", img: IMAGES.heroWaterAid },
    ],
  },
  legacy: {
    year1: "2016",
    lead1: "A legacy of compassion, born from one man's vision.",
    year2: "2024",
    lead2: "Fast forward eight years, Muslims Around The World (MATW) now serves the ummah on a global scale — delivering life-saving aid to over 19 million people across 24 countries.",
  },
  video: {
    lead: "Ali Banat",
    rest: ", his Life, his Legacy, his Impact.",
    cta: "Learn More About Ali Banat",
  },
  getInvolved: {
    titlePre: "Get ",
    titleHighlight: "involved",
    titlePost: " today!",
    subtitle: "Build your legacy with MATW! Create a meaningful impact in this world and the hereafter through voluntary work, compassionate donations, and staying connected.",
    cards: [
      { title: "VIEW OUR REPORTS", cta: "LEARN MORE", href: "/annual-reports", img: IMAGES.getReports },
      { title: "VOLUNTEER WITH US", cta: "SIGN UP", href: "/volunteer", img: IMAGES.getVolunteer },
      { title: "ALL APPEALS", cta: "VIEW ALL APPEALS", href: "/all-appeals", img: IMAGES.getAppeals },
      { title: "FOLLOW US ON INSTAGRAM", cta: "STAY CONNECTED", href: "https://www.instagram.com/matw_project/", img: IMAGES.getInstagram },
    ],
  },
  trust: {
    badges: [
      { label: "100% Secure Checkout", src: `${A}/badge-secure.svg` },
      { label: "We Protect Your Privacy", src: `${A}/badge-privacy.svg` },
    ],
  },
  footer: {
    columns: [
      { heading: "About Us", links: [
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
      ] },
      { heading: "Quick Links", links: [
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
      ] },
      { heading: "Resources & Information", links: [
        { label: "FAQs", href: "/faq" },
        { label: "Scams & Phishing", href: "/phishing-scams" },
        { label: "Annual Reports", href: "/annual-reports" },
        { label: "Privacy Policies", href: "/privacypolicy" },
        { label: "Complaints Handling Policy", href: "#" },
        { label: "Our Policies", href: "/policies" },
        { label: "Opt-out", href: "/opt-out" },
        { label: "Refunds", href: "/pdf/refundpolicy-pdf-usa.pdf" },
      ] },
    ],
    socialHeading: "Join our social media",
    social: SOCIAL,
    countryHeading: "Muslim Charity - (USA)",
    countries: [
      { label: "Muslim Charity - (UK)", href: "https://matwproject.org.uk/" },
      { label: "Muslim Charity - (Global)", href: "https://matwproject.org/" },
      { label: "Muslim Charity - (USA)", href: "https://matwprojectusa.org/", current: true },
      { label: "Muslim Charity - (Canada)", href: "https://matwprojectca.org/" },
      { label: "Muslim Charity - (Middle East)", href: "https://matwprojectme.org/" },
      { label: "Muslim Charity - (France)", href: "https://matwprojectfr.org/" },
      { label: "Muslim Charity - (Singapore)", href: "https://matwprojectsgp.org/" },
      { label: "Muslim Charity - (Malaysia)", href: "https://matwprojectmys.org/" },
      { label: "Muslim Charity - (Indonesia)", href: "https://matwprojectid.org/" },
    ],
    copyright: COPYRIGHT,
  },
  donatePages: {
    successTitle: "Thank you for your donation",
    successBody: "Your generosity is changing lives, insha'Allah. A receipt has been sent to your email by Stripe. May Allah accept your sadaqah and reward you abundantly.",
    cancelTitle: "Your donation was cancelled",
    cancelBody: "No payment was taken. If you changed your mind, you can start again any time — every contribution helps families in need.",
    back: "Back to Home",
  },
};

// ---------------------------------------------------------------------------
// SPANISH (from the site's own translation)
// ---------------------------------------------------------------------------
const es = {
  code: "es",
  meta: {
    title: "Organización benéfica musulmana | Caridad islámica | Política de donación del 100 % | Proyecto MATW",
    description:
      "El Proyecto MATW es una organización benéfica musulmana que entrega alimentos, agua, asistencia médica y refugio a quienes lo necesitan en todo el mundo, con una política de donación del 100 % en el zakat.",
  },
  nav: {
    brand: "Proyecto MATW",
    donate: "Donar",
    phone: "1-800-718-2427",
    hours: "De 10:00 a 20:00",
    langLabel: "ES",
    languages: LANGUAGES,
    quickIcons: { zakat: "Zakat", meals: "Comidas calientes Sudán" },
    menus: [
      {
        label: "Donar ahora",
        items: [
          { label: "Paga el zakat", href: "/zakat" },
          { label: "Palestina", href: "/gaza-emergency", children: [
            { label: "Reconstrucción del hospital de Gaza", href: "/gaza-hospital-rebuild" },
            { label: "Ayuda alimentaria y de agua para Gaza", href: "/gaza-food-water" },
            { label: "Construye un pozo de agua en Gaza", href: "/gaza-water-well" },
            { label: "Llamamiento de emergencia para Gaza", href: "/crisis-and-emergencies/palestine" },
            { label: "Los huérfanos de Gaza", href: "/appeals/palestine-emergency" },
          ] },
          { label: "Sudán", href: "/sudan-crisis", children: [
            { label: "Emergencia en Sudán", href: "/sudan-crisis" },
            { label: "Huérfanos de Sudán", href: "/appeals/sudan-orphans" },
          ] },
          { label: "Llamamientos de emergencia", href: "/", children: [
            { label: "Emergencia en Sudán", href: "/sudan-crisis" },
            { label: "Llamamiento para el Líbano", href: "/lebanon-appeal" },
            { label: "Programas para casos especiales", href: "/special-cases" },
            { label: "Todas las apelaciones", href: "/matw-appeals" },
          ] },
          { label: "Países en crisis", href: "/crisis-and-emergencies/countries-in-crisis" },
          { label: "Huérfanos", href: "/orphans-of-ummah", children: [
            { label: "Los huérfanos de Gaza", href: "/appeals/palestine-emergency" },
            { label: "Apoya a los huérfanos de la umma", href: "/orphans-of-ummah" },
            { label: "Centro Médico y de Huérfanos del Líbano", href: "/appeals/north-lebanon-orphan" },
          ] },
          { label: "Sadaqah jariyah", href: "/sadaqah-jariyah", children: [
            { label: "Construir un pozo de agua", href: "/sadaqah-jariyah/build-a-water-well" },
            { label: "Construir una mezquita", href: "/sadaqah-jariyah/build-a-masjid" },
            { label: "El legado de un ser querido", href: "/loved-ones-legacy" },
            { label: "Salud", href: "/sadaqah-jariyah/health" },
            { label: "Generación de ingresos", href: "/sadaqah-jariyah/sustainable" },
            { label: "Todas las campañas de sadaqah jariyah", href: "/sadaqah-jariyah" },
          ] },
          { label: "Proyectos de Alimentación y Agua", href: "/food-and-water-aid" },
          { label: "Ayuda para el agua", href: "/water-aid" },
        ],
      },
      { label: "Zakat", items: [
        { label: "Paga el zakat", href: "/zakat" },
        { label: "Calculadora del zakat", href: "/zakat-calculator" },
      ] },
      { label: "La caridad en el Islam", items: [
        { label: "Zakat", href: "/zakat" },
        { label: "Sadaqah jariyah", href: "/sadaqah-jariyah" },
        { label: "Sacrificio", href: "/aqiqah" },
      ] },
      { label: "Amanah", items: [
        { label: "Donaciones automáticas para la Jummah", href: "/jummah-giving" },
        { label: "Donaciones periódicas", href: "/subscription" },
      ] },
      { label: "Quiénes somos", items: [
        { label: "Ali Banat – Nuestro fundador", href: "/ali-banat" },
        { label: "Voluntario", href: "/volunteer" },
        { label: "Contacto", href: "/contact" },
        { label: "Instagram", href: "https://instagram.com/matw_project" },
      ] },
    ],
  },
  announcement: [
    "Gaza: reconstruye lo que se perdió — Más información",
    "Hay que suministrar comida y agua a Gaza con carácter de urgencia — Dona ahora",
  ],
  quickDonate: {
    oneTime: "Una vez",
    monthly: "Mensual",
    amountPlaceholder: "Importe",
    button: "Donar rápidamente",
    redirecting: "Redirigiendo…",
    mostNeeded: "Lo más necesario ahora mismo",
    programs: ["Lo más necesario ahora mismo", "Emergencia en Gaza", "Emergencia en Sudán", "Zakat", "Sadaqah jariyah", "Ayuda para el agua"],
  },
  hero: [
    { label: "Ayuda alimentaria y de agua para Gaza", href: "/gaza-food-water", img: IMAGES.heroGazaFoodWater },
    { label: "Ayuda para el agua", href: "/water-aid", img: IMAGES.heroWaterAid },
    { label: "Emergencia en Sudán", href: "/sudan-crisis", img: IMAGES.heroSudan },
    { label: "Construir una mezquita", href: "/sadaqah-jariyah/build-a-masjid", img: IMAGES.heroMasjid },
    { label: "Los huérfanos de la umma", href: "/orphans-of-ummah", img: IMAGES.heroOrphans },
    { label: "Zakat", href: "/zakat", img: IMAGES.heroZakat },
  ],
  urgent: {
    title: "Llamamientos urgentes",
    subtitle: "Las familias de Gaza y Sudán necesitan urgentemente comida, agua y refugio en estos momentos.",
    donorsSuffix: "Los donantes han donado",
    appeals: [
      { title: "Paga tu zakat a Gaza", desc: "El zakat es una limosna obligatoria que todo musulmán con medios debe entregar anualmente, con el fin de purificar su patrimonio y obtener la recompensa de Alá SWT.", cta: "PAGA TU ZAKAT A GAZA", href: "/appeals/pay-your-zakat-to-gaza", donors: "41,132", img: IMAGES.heroZakat },
      { title: "Llamamiento de emergencia para Sudán", desc: "El conflicto en Sudán ha provocado el desplazamiento de millones de personas, dejando a muchas familias sin acceso a alimentos, refugio ni atención médica. MATW está respondiendo con ayuda de emergencia.", cta: "HAZ UNA DONACIÓN AHORA", href: "/sudan-crisis", donors: "32,360", img: IMAGES.heroSudan },
      { title: "Gaza sigue pasando hambre", desc: "A medida que el conflicto en Gaza sigue agravándose, también lo hacen los daños, las pérdidas, la destrucción y los desplazamientos, que se han convertido en la cruda realidad de innumerables familias.", cta: "HAZ UNA DONACIÓN AHORA", href: "/crisis-and-emergencies/palestine", donors: "41,122", img: IMAGES.heroGazaFoodWater },
      { title: "Fondo para la construcción de un pozo de agua en Gaza", desc: "Apoya la construcción de tres pozos de agua en Gaza, cada uno diseñado para proporcionar agua limpia y fiable a más de 15 000 personas cada día.", cta: "HAZ UNA DONACIÓN AHORA", href: "/gaza-water-well", donors: "18,904", img: IMAGES.heroWaterAid },
    ],
  },
  legacy: {
    year1: "2016",
    lead1: "La visión de Ali Banat era clara: crear un legado para ayudar a todos los musulmanes necesitados del mundo.",
    year2: "2024",
    lead2: "Ocho años después, «Muslims Around The World» (MATW) presta ahora servicio a la umma a escala mundial, entregando ayuda vital a más de 19 millones de personas en 24 países.",
  },
  video: {
    lead: "Ali Banat",
    rest: ": su vida, su legado, su influencia.",
    cta: "Más información sobre Ali Banat",
  },
  getInvolved: {
    titlePre: "Únete ",
    titleHighlight: "hoy",
    titlePost: " mismo",
    subtitle: "¡Deja tu huella con MATW! Deja una huella significativa en este mundo y en el más allá a través del voluntariado, las donaciones solidarias y el mantenimiento del contacto.",
    cards: [
      { title: "CONSULTA NUESTROS INFORMES", cta: "MÁS INFORMACIÓN", href: "/annual-reports", img: IMAGES.getReports },
      { title: "HACER VOLUNTARIADO CON NOSOTROS", cta: "REGÍSTRATE", href: "/volunteer", img: IMAGES.getVolunteer },
      { title: "TODAS LAS CAMPAÑAS", cta: "VER TODAS LAS CAMPAÑAS", href: "/all-appeals", img: IMAGES.getAppeals },
      { title: "SÍGUENOS EN INSTAGRAM", cta: "MANTENTE CONECTADO", href: "https://www.instagram.com/matw_project/", img: IMAGES.getInstagram },
    ],
  },
  trust: {
    badges: [
      { label: "Pago 100 % seguro", src: `${A}/badge-secure.svg` },
      { label: "Protegemos tu privacidad", src: `${A}/badge-privacy.svg` },
    ],
  },
  footer: {
    columns: [
      { heading: "Quiénes somos", links: [
        { label: "Quiénes somos", href: "/about-us" },
        { label: "Acerca de Ali Banat", href: "/ali-banat" },
        { label: "Nuestro compromiso", href: "/purpose" },
        { label: "RGPD", href: "/gdpr" },
        { label: "Voluntario", href: "/volunteer" },
        { label: "Contacto", href: "/contact" },
        { label: "Donaciones periódicas", href: "/subscription" },
        { label: "Descarga nuestra aplicación", href: "https://onelink.to/xq5p5w" },
        { label: "Ofertas y licitaciones", href: "https://tender.matwproject.org/Tender/projects" },
        { label: "Portal de suscripciones", href: "/cancel" },
        { label: "Recauda fondos con MATW", href: "/fundraising" },
      ] },
      { heading: "Enlaces rápidos", links: [
        { label: "Distribución en directo", href: "/live-on-field" },
        { label: "Calculadora del zakat", href: "/zakat-calculator" },
        { label: "Portal para donantes", href: "https://donor-care.prod.matwproject.org/" },
        { label: "Da la sadaqa", href: "/sadaqah" },
        { label: "Construir un pozo", href: "/sadaqah-jariyah/build-a-water-well" },
        { label: "Construir una mezquita", href: "/sadaqah-jariyah/build-a-masjid" },
        { label: "Haz una donación a Palestina", href: "/crisis-and-emergencies/palestine" },
        { label: "Haz una donación para Gaza", href: "/crisis-and-emergencies/palestine" },
        { label: "Donación de un pozo de agua", href: "/sadaqah-jariyah/build-a-water-well" },
        { label: "Duas", href: "/duas" },
        { label: "Horarios de oración", href: "/namaz-times" },
        { label: "Sadaqah jariyah", href: "/sadaqah-jariyah" },
        { label: "Política de donación del 100 % del zakat", href: "/100-zakat-donation-policy" },
      ] },
      { heading: "Recursos e información", links: [
        { label: "Preguntas frecuentes", href: "/faq" },
        { label: "Estafas y suplantación de identidad", href: "/phishing-scams" },
        { label: "Informes anuales", href: "/annual-reports" },
        { label: "Políticas de privacidad", href: "/privacypolicy" },
        { label: "Política de gestión de reclamaciones", href: "#" },
        { label: "Nuestras políticas", href: "/policies" },
        { label: "Exclusión voluntaria", href: "/opt-out" },
        { label: "Reembolsos", href: "/pdf/refundpolicy-pdf-usa.pdf" },
      ] },
    ],
    socialHeading: "Síguenos en las redes sociales",
    social: SOCIAL,
    countryHeading: "Organización benéfica musulmana - (EE. UU.)",
    countries: [
      { label: "Organización benéfica musulmana - (Reino Unido)", href: "https://matwproject.org.uk/" },
      { label: "Organización benéfica musulmana - (Internacional)", href: "https://matwproject.org/" },
      { label: "Organización benéfica musulmana - (EE. UU.)", href: "https://matwprojectusa.org/", current: true },
      { label: "Organización benéfica musulmana - (Canadá)", href: "https://matwprojectca.org/" },
      { label: "Organización benéfica musulmana - (Oriente Medio)", href: "https://matwprojectme.org/" },
      { label: "Organización benéfica musulmana - (Francia)", href: "https://matwprojectfr.org/" },
      { label: "Organización benéfica musulmana - (Singapur)", href: "https://matwprojectsgp.org/" },
      { label: "Organización benéfica musulmana - (Malasia)", href: "https://matwprojectmys.org/" },
      { label: "Organización benéfica musulmana - (Indonesia)", href: "https://matwprojectid.org/" },
    ],
    copyright: COPYRIGHT,
  },
  donatePages: {
    successTitle: "Gracias por tu donación",
    successBody: "Tu generosidad está cambiando vidas, insha'Allah. Stripe ha enviado un recibo a tu correo electrónico. Que Alá acepte tu sadaqah y te recompense con abundancia.",
    cancelTitle: "Tu donación fue cancelada",
    cancelBody: "No se realizó ningún cargo. Si has cambiado de opinión, puedes empezar de nuevo en cualquier momento: cada aportación ayuda a las familias necesitadas.",
    back: "Volver al inicio",
  },
};

const CONTENT = { en, es };

export function getContent(locale = "en") {
  return CONTENT[locale] || CONTENT.en;
}

export const locales = Object.keys(CONTENT);
