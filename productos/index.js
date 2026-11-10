/* ==========================================================
   AUGUSSEP · Scripts (mismo archivo en las tres páginas)
   ========================================================== */

/* ---------- CONFIGURACIÓN (editar aquí y copiar a las 3 carpetas) ---------- */
// WhatsApp: código de país + número, sin "+" ni espacios.
// Tomado del saco de harina (943 591 748). Cámbialo si el número de ventas es otro.
const WHATSAPP_NUMBER = "51943591748";

// Rutas de las fichas técnicas en PDF (relativas a la carpeta de cada página).
// Si se dejan vacías, el botón dice "Pedir ficha técnica" y abre WhatsApp.
const SHEETS = {
  harina: "../fichas/ficha-tecnica-harina-de-pescado.pdf",
  aceite: "../fichas/ficha-tecnica-aceite-de-pescado.pdf",
};

/* ---------- Traducciones (el español se toma del propio HTML) ---------- */
const EN = {
  "skip": "Skip to content", "nav.menu": "Menu",
  "nav.home": "Home", "nav.aboutLong": "About us", "nav.products": "Products", "nav.cta": "Get a quote",

  "hero.kicker": "Comercializadora Marítima Augussep",
  "hero.t1": "Nourishing thousands", "hero.t2": "with the best", "hero.t3": "of the Peruvian sea",
  "hero.cta1": "Get a quote now", "hero.cta2": "View products",
  "hero.caption": "The Humboldt Current runs north along the Peruvian coast: cold water that sustains one of the most productive fisheries on the planet. The map marks Peru's main ports.",
  "b1.a": "Guaranteed", "b1.b": "quality", "b2.a": "Greater", "b2.b": "safety", "b3.a": "100% Peruvian", "b3.b": "product", "b4.a": "Eco-friendly", "b4.b": "company",

  "about.kicker": "About us",
  "about.title": "A Peruvian company selling what it knows: the sea off its coast",
  "about.text": "Comercializadora Marítima Augussep E.I.R.L. was founded on August 20, 2020. Since then we have supplied companies that want to raise the quality of their balanced feed with Peruvian fishery inputs. We are an eco-friendly company, committed to caring for the Peruvian sea our products come from.",
  "about.more": "Learn more",
  "about.mission.title": "Our mission",
  "about.mission.text": "To offer Peruvian sea products of the highest quality, meet our customers' expectations and earn their trust in the domestic and international market.",

  "prod.title": "Discover our products",
  "prod.sub": "We sell wholesale to feed mills for aquaculture, poultry, swine and pet food. Ask for the technical sheet before buying and check it against your formulation.",
  "p1.name": "Fish meal", "p2.name": "Fish oil",
  "card.wholesale": "Wholesale", "card.more": "Learn more", "card.quote": "Get a quote",

  "proc.title": "From the sea to your plant", "proc.sub": "Four stages, and at each one you know what you are getting.",
  "s1.t": "Origin", "s1.d": "Raw material caught in the Peruvian sea.",
  "s2.t": "Production", "s2.d": "Processing focused on preserving nutrients and purity.",
  "s3.t": "Quality control", "s3.d": "Batch analysis and a technical sheet so you decide with data.",
  "s4.t": "Dispatch", "s4.d": "Delivery within Peru and shipping to international destinations.",

  "faq.title": "Frequently asked questions", "faq.sub": "Can't find your answer?", "faq.ask": "Ask us on WhatsApp",
  "q1": "What is the minimum order?", "a1": "It depends on the product and destination. Enter your estimated volume in the form and we will confirm the conditions.",
  "q2": "Can I see the technical sheet before buying?", "a2": "Yes. You can find it on the Products page or request it with your quote.",
  "q3": "Do you take international orders?", "a3": "Yes. We serve domestic and international markets. Enter the destination country and city in the form.",
  "q4": "How do I receive my quote?", "a4": "We reply on WhatsApp with the conditions for your order.",

  "ab.kicker": "About us", "ab.t1": "We bring the best", "ab.t2": "of the Peruvian sea", "ab.t3": "to the whole world",
  "ab.who.title": "Who are we?",
  "ab.who.text": "Comercializadora Marítima Augussep is a company founded on August 20, 2020. Since then we have been nourishing thousands with products of the best quality, and we supply our fishery products to companies that want to boost their own quality. We are also an eco-friendly company: we work with care for the Peruvian sea that everything we do depends on. That is how we bring the best of the sea to the whole world.",
  "ab.mis.title": "Our mission",
  "ab.mis.text": "To offer Peruvian sea products of the highest quality, meeting our customers' expectations and earning the loyalty of the domestic and international market. In this way, we bring nutrition from the Peruvian sea to the whole world.",
  "ab.prod.title": "Our products",
  "trust.title": "Why trust Augussep?",
  "trust.text": "Because we guarantee that our products are among the best on the market. That is why we share our technical sheets, so you can decide well and choose the quality of our products for your company.",
  "trust.cta": "View technical sheet",

  "pr.kicker": "Our products", "pr.t1": "The best of the sea", "pr.t2": "in our products", "pr.cta": "View products",
  "h.b1": "Plenty of nutrients, proteins and vitamins for excellent animal development.",
  "h.b2": "100% Peruvian product with the quality and purity your animals need.",
  "h.b3": "Contains the richest source of Omega 3, which helps animals achieve better stability and balance.",
  "h.b4": "Visible effectiveness through better growth and digestive balance.",
  "a.text": "Fish oil is a dietary source of omega 3 fatty acids. The body needs omega 3 fatty acids for many functions, from muscle activity to cell growth.",
  "ficha.h": "Fish meal technical sheet", "ficha.a": "Fish oil technical sheet",
  "spec.title": "Technical specifications", "spec.param": "Parameter", "spec.value": "Value",
  "spec.protein": "Protein", "spec.fat": "Fat", "spec.moisture": "Moisture", "spec.grade": "Commercial grade",
  "spec.omega": "Omega 3 (EPA + DHA)", "spec.acidity": "Acidity", "spec.peroxide": "Peroxide value", "spec.pack": "Packaging",
  "h.b5": "Available in three grades: Super Prime, Prime and Standard, in 50 kg bags.",
  "fh.sub": "Peruvian fish meal, 100% fish, in three commercial grades according to protein content.",
  "fh.protein": "Minimum protein", "fh.dig90": "Min. digestibility 90%", "fh.dig85": "Min. digestibility 85%", "fh.dig80": "Min. digestibility 80%",
  "fh.std": "Standard", "fh.cap": "Chemical, nutritional and sensory characteristics by grade",
  "fh.comp": "Component", "fh.unit": "Unit", "fh.limit": "Limit", "fh.min": "Min.", "fh.max": "Max.",
  "fh.chem": "Chemical characteristics", "fh.nutri": "Nutritional characteristics", "fh.sens": "Sensory characteristics",
  "fh.sand": "Sand", "fh.salt": "Salt and sand", "fh.ffa": "Free fatty acids", "fh.tbvn": "Total volatile basic nitrogen",
  "fh.hist": "Histamine", "fh.antiox": "Antioxidant", "fh.digest": "Digestibility", "fh.mink": "Mink, 0.2%",
  "fh.color": "Color", "fh.smell": "Odor", "fh.texture": "Texture", "fh.green": "Greenish", "fh.brown": "Dark brown", "fh.char": "Characteristic", "fh.powder": "Powder",
  "fh.pack.t": "Presentation and packaging", "fh.pack.d": "New white laminated polypropylene bags, labeled with company information, weight and lot number. The red circle indicates the presence of antioxidant.",
  "fh.life.t": "Shelf life", "fh.life.v": "6 months", "fh.life.d": "From the date of manufacture. Preserved with ANTAC PLUS A-20 BTA antioxidant to delay fat oxidation.",
  "fh.store.t": "Storage", "fh.store.v": "600 bags per stack", "fh.store.d": "On a polypropylene base, covered with laminated polypropylene sheets, in a clean, dry place protected from contamination.",
  "fh.ship.t": "Transport", "fh.ship.v": "600–700 bags per truck", "fh.ship.d": "On a truck platform, with the load covered by a polypropylene layer to protect it from the environment.",
  "prod.sheet": "Download technical sheet (PDF)", "prod.sheetAsk": "Request technical sheet",

  "quote.title": "Request your quote", "quote.text": "Fill in the details and review the message. When you send it, WhatsApp opens with your request already written.",
  "quote.preview": "This is how your message will arrive",
  "f.who": "Your details", "f.what": "Your order",
  "f.company": "Company", "f.name": "Full name", "f.email": "Email", "f.phone": "Phone or WhatsApp", "f.product": "Product", "f.both": "Both",
  "f.volume": "Estimated volume (t)", "f.dest": "Destination country and city", "f.msg": "Message (optional)", "f.submit": "Send via WhatsApp",
  "err.required": "This field is required.", "err.email": "Enter a valid email, for example name@company.com.",

  "foot.tag": "Fish meal and fish oil from the Peruvian sea, wholesale.", "foot.nav": "Navigation", "foot.contact": "Contact",
  "foot.mission": "Our mission", "foot.products": "Our products", "foot.quote": "Get a quote",

  "msg.hello": "Hello, I would like a quote from Augussep:",
  "msg.sheet": "Hello, I would like the technical sheet for:",
  "msg.check": "Check the highlighted fields.", "msg.opened": "WhatsApp opened in a new tab with your request.",
  "msg.placeholder": "(complete the form)",
};
const ZH = {
  "skip": "跳至内容",
  "nav.menu": "菜单",
  "nav.home": "首页",
  "nav.aboutLong": "关于我们",
  "nav.products": "产品",
  "nav.cta": "立即询价",
  "hero.kicker": "Comercializadora Marítima Augussep",
  "hero.t1": "以秘鲁海洋的精华",
  "hero.t2": "滋养千家万户",
  "hero.t3": "",
  "hero.cta2": "查看产品",
  "hero.cta1": "立即询价",
  "b1.a": "品质",
  "b1.b": "有保证",
  "b2.a": "更高",
  "b2.b": "安全性",
  "b3.a": "100%",
  "b3.b": "秘鲁产品",
  "b4.a": "企业",
  "b4.b": "环保友好",
  "hero.caption": "洪堡寒流沿秘鲁海岸由南向北流动：这股冷水孕育了全球最富饶的渔场之一。图中标出秘鲁主要港口。",
  "about.kicker": "关于我们",
  "about.title": "一家秘鲁企业，经营它最了解的东西：家乡海岸的大海",
  "about.text": "Comercializadora Marítima Augussep E.I.R.L. 成立于 2020 年 8 月 20 日。自成立以来，我们为希望以秘鲁渔业原料提升配合饲料品质的企业供货。我们是一家环保友好型企业，致力于保护孕育我们产品的秘鲁海洋。",
  "about.more": "了解更多",
  "about.mission.title": "我们的使命",
  "about.mission.text": "提供最高品质的秘鲁海洋产品，满足客户期望，赢得国内及国际市场的信任。",
  "prod.title": "了解我们的产品",
  "prod.sub": "我们向水产养殖、家禽、生猪及宠物饲料厂批发供货。购买前请索取技术规格书，并与您的配方进行比对。",
  "p1.name": "鱼粉",
  "p2.name": "鱼油",
  "card.wholesale": "批发销售",
  "card.more": "了解更多",
  "card.quote": "立即询价",
  "proc.title": "从大海到您的工厂",
  "proc.sub": "四个环节，每一步您都清楚自己收到的是什么。",
  "s1.t": "原产地",
  "s1.d": "原料捕捞自秘鲁海域。",
  "s2.t": "生产",
  "s2.d": "加工过程注重保留营养与纯度。",
  "s3.t": "质量控制",
  "s3.d": "逐批分析并提供技术规格书，让您依据数据做决定。",
  "s4.t": "发货",
  "s4.d": "秘鲁境内交货，并可装船运往国际目的地。",
  "faq.title": "常见问题",
  "faq.sub": "没有找到答案？",
  "faq.ask": "通过 WhatsApp 咨询我们",
  "q1": "最低起订量是多少？",
  "a1": "视产品和目的地而定。请在表格中填写预计数量，我们会确认具体条件。",
  "q2": "购买前可以查看技术规格书吗？",
  "a2": "可以。您可以在产品页面找到，也可以在询价时一并索取。",
  "q3": "你们接受国际订单吗？",
  "a3": "接受。我们服务国内及国际市场。请在表格中填写目的国家和城市。",
  "q4": "我如何收到报价？",
  "a4": "我们会通过 WhatsApp 回复您订单的具体条件。",
  "quote.title": "提交询价",
  "quote.text": "填写信息并确认消息内容。发送后将打开 WhatsApp，您的询价内容已自动写好。",
  "quote.preview": "您的消息将以此形式发送",
  "f.who": "您的信息",
  "f.company": "公司",
  "err.required": "此项为必填项。",
  "f.name": "姓名",
  "f.email": "电子邮箱",
  "err.email": "请输入有效的邮箱，例如 name@company.com。",
  "f.phone": "电话或 WhatsApp",
  "f.what": "您的订单",
  "f.product": "产品",
  "f.both": "两者都要",
  "f.volume": "预计数量（吨）",
  "f.dest": "目的国家和城市",
  "f.msg": "留言（选填）",
  "f.submit": "通过 WhatsApp 发送",
  "foot.tag": "秘鲁海洋出产的鱼粉和鱼油，批发供应。",
  "foot.nav": "导航",
  "foot.mission": "我们的使命",
  "foot.products": "我们的产品",
  "foot.quote": "立即询价",
  "foot.contact": "联系方式",
  "ab.kicker": "关于我们",
  "ab.t1": "将秘鲁海洋",
  "ab.t2": "最好的产品",
  "ab.t3": "带给全世界",
  "ab.who.title": "我们是谁？",
  "ab.who.text": "Comercializadora Marítima Augussep 成立于 2020 年 8 月 20 日。自成立以来，我们致力于以最优质的产品滋养千家万户，并将我们的渔业产品供应给希望提升自身品质的企业。我们也是一家环保友好型企业，在经营中爱护我们赖以生存的秘鲁海洋。就这样，我们把大海最好的产品带给全世界。",
  "ab.mis.title": "我们的使命",
  "ab.mis.text": "提供最高品质的秘鲁海洋产品，满足客户期望，赢得国内及国际市场的忠诚。以此将秘鲁海洋的营养带给全世界。",
  "trust.title": "为什么选择信赖 Augussep？",
  "trust.text": "因为我们保证我们的产品是市场上最好的产品之一。因此我们公开技术规格书，帮助您做出正确判断，为您的企业选择我们的优质产品。",
  "trust.cta": "查看技术规格书",
  "ab.prod.title": "我们的产品",
  "pr.kicker": "我们的产品",
  "pr.t1": "大海的精华",
  "pr.t2": "尽在我们的产品",
  "pr.cta": "查看产品",
  "h.b1": "富含营养、蛋白质和维生素，助力动物良好生长发育。",
  "h.b2": "100% 秘鲁产品，具备动物所需的品质与纯度。",
  "h.b3": "含有丰富的 Omega 3 来源，有助于动物更好的稳定与平衡。",
  "h.b4": "生长更好、消化更平衡，效果看得见。",
  "h.b5": "提供三个等级：特级（Súper Prime）、优级（Prime）和标准级（Estándar），50 公斤袋装。",
  "ficha.h": "鱼粉技术规格书",
  "ficha.a": "鱼油技术规格书",
  "fh.sub": "秘鲁鱼粉，100% 鱼源，按蛋白质含量分为三个商业等级。",
  "fh.protein": "最低蛋白质",
  "fh.dig90": "最低消化率 90%",
  "fh.dig85": "最低消化率 85%",
  "fh.dig80": "最低消化率 80%",
  "fh.std": "标准级",
  "fh.cap": "各等级的化学、营养及感官指标",
  "fh.comp": "成分",
  "fh.unit": "单位",
  "fh.limit": "限值",
  "fh.chem": "化学指标",
  "fh.min": "最低",
  "fh.max": "最高",
  "fh.sand": "砂分",
  "fh.salt": "盐分和砂分",
  "fh.ffa": "游离脂肪酸",
  "fh.tbvn": "挥发性盐基总氮",
  "fh.hist": "组胺",
  "fh.antiox": "抗氧化剂",
  "fh.nutri": "营养指标",
  "fh.digest": "消化率",
  "fh.mink": "水貂法，0.2%",
  "fh.sens": "感官指标",
  "fh.color": "颜色",
  "fh.green": "偏绿",
  "fh.brown": "深棕色",
  "fh.smell": "气味",
  "fh.char": "特有气味",
  "fh.texture": "质地",
  "fh.powder": "粉状",
  "fh.pack.t": "规格与包装",
  "fh.pack.d": "全新白色覆膜聚丙烯编织袋，标有公司信息、重量和批号。红色圆点表示已添加抗氧化剂。",
  "fh.life.t": "保质期",
  "fh.life.v": "6 个月",
  "fh.life.d": "自生产之日起计算。添加 ANTAC PLUS A-20 BTA 抗氧化剂以延缓油脂氧化。",
  "fh.store.t": "储存",
  "fh.store.v": "每垛 600 袋",
  "fh.store.d": "置于聚丙烯垫底之上，覆盖覆膜聚丙烯篷布，存放于清洁、干燥、无污染的场所。",
  "fh.ship.t": "运输",
  "fh.ship.v": "每车 600–700 袋",
  "fh.ship.d": "使用平板卡车运输，货物覆盖聚丙烯篷布以防环境影响。",
  "prod.sheet": "下载技术规格书（PDF）",
  "prod.sheetAsk": "索取技术规格书",
  "a.text": "鱼油是 Omega 3 脂肪酸的膳食来源。从肌肉活动到细胞生长，身体的许多功能都需要 Omega 3 脂肪酸。",
  "spec.title": "技术规格",
  "spec.param": "参数",
  "spec.value": "数值",
  "spec.protein": "蛋白质",
  "spec.fat": "脂肪",
  "spec.moisture": "水分",
  "spec.grade": "商业等级",
  "spec.omega": "Omega 3（EPA + DHA）",
  "spec.acidity": "酸度",
  "spec.peroxide": "过氧化值",
  "spec.pack": "包装规格",
  "msg.hello": "您好，我想向 Augussep 询价：",
  "msg.sheet": "您好，我想索取以下产品的技术规格书：",
  "msg.check": "请检查标记的字段。",
  "msg.opened": "已在新标签页中打开 WhatsApp，询价内容已写好。",
  "msg.placeholder": "（请填写表格）"
};
// Ficha técnica del aceite de pescado
Object.assign(EN, {
  "a.b1": "Acidulated fish oil, 100% anchovy.",
  "a.b2": "Delivered in 200 kg drums or in tanker trucks.",
  "a.b3": "Shelf life of 6 months from the date of manufacture.",
  "fa.sub": "Acidulated fish oil, 100% anchovy, an ingredient for animal feed.",
  "fa.range": "Range",
  "fa.maxNote": "Maximum",
  "fa.solids": "Solids",
  "fa.perox": "Peroxides",
  "fa.cap": "Chemical and sensory characteristics of fish oil",
  "fa.acidulated": "Acidulated oil",
  "fa.proc.t": "How it is obtained",
  "fa.proc.d": "Acidulated oil is obtained from fish sludge and acid oil, in five stages:",
  "fa.s1.t": "Heating",
  "fa.s1.d": "To 90 °C with indirect steam.",
  "fa.s2.t": "Acidulation",
  "fa.s2.d": "Addition of H₂SO₄ at 0.05% per ton, with constant stirring.",
  "fa.s3.t": "Settling and decanting",
  "fa.s3.d": "Rest for half an hour and decanting of the sulfates.",
  "fa.s4.t": "Washing",
  "fa.s4.d": "With hot water at 70–80 °C until all sulfates are removed (2 to 3 washes).",
  "fa.s5.t": "Neutralization",
  "fa.s5.d": "Until the oil reaches a neutral pH.",
  "fa.pack.v": "200 kg per drum",
  "fa.pack.d": "Packed in 200 kg drums or in tanker trucks.",
  "fa.life.d": "Recommended consumption period, counted from the date of manufacture.",
  "fa.ship.v": "Drums or tanker trucks",
  "fa.ship.d": "On a truck platform, with the drums covered by a polypropylene layer to protect them from the environment."
});
Object.assign(ZH, {
  "a.b1": "酸化鱼油，100% 鳀鱼原料。",
  "a.b2": "以 200 公斤铁桶或罐车交付。",
  "a.b3": "自生产之日起保质期 6 个月。",
  "fa.sub": "酸化鱼油，100% 鳀鱼原料，用作动物饲料原料。",
  "fa.range": "范围",
  "fa.maxNote": "最高",
  "fa.solids": "固体杂质",
  "fa.perox": "过氧化物",
  "fa.cap": "鱼油的化学及感官指标",
  "fa.acidulated": "酸化油",
  "fa.proc.t": "生产方式",
  "fa.proc.d": "酸化鱼油以鱼油渣和酸油为原料，经五个步骤制得：",
  "fa.s1.t": "加热",
  "fa.s1.d": "用间接蒸汽加热至 90 °C。",
  "fa.s2.t": "酸化",
  "fa.s2.d": "按每吨 0.05% 的比例加入 H₂SO₄，并持续搅拌。",
  "fa.s3.t": "静置与倾析",
  "fa.s3.d": "静置半小时，倾析去除硫酸盐。",
  "fa.s4.t": "水洗",
  "fa.s4.d": "用 70–80 °C 热水洗涤，直至完全去除硫酸盐（洗 2 至 3 次）。",
  "fa.s5.t": "中和",
  "fa.s5.d": "将油调至中性 pH。",
  "fa.pack.v": "每桶 200 公斤",
  "fa.pack.d": "采用每桶 200 公斤的铁桶或罐车包装。",
  "fa.life.d": "建议食用期限，自产品生产之日起计算。",
  "fa.ship.v": "铁桶或罐车",
  "fa.ship.d": "使用平板卡车运输，铁桶覆盖聚丙烯篷布以防环境影响。"
});

const ES = {
  "msg.hello": "Hola, quisiera cotizar con Augussep:",
  "msg.sheet": "Hola, quisiera la ficha técnica de:",
  "prod.sheetAsk": "Pedir ficha técnica",
  "msg.check": "Revisa los campos marcados.", "msg.opened": "Se abrió WhatsApp en una pestaña nueva con tu solicitud.",
  "msg.placeholder": "(completa el formulario)",
};
let lang = "es";
const DICTS = { en: EN, zh: ZH };
const HTML_LANG = { es: "es", en: "en", zh: "zh-CN" };
const t = (key) => (DICTS[lang] ? DICTS[lang][key] : ES[key]) ?? ES[key] ?? key;

function cacheSpanish() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const k = el.dataset.i18n;
    if (!(k in ES)) ES[k] = el.textContent.trim();
  });
}

function applyLang(next) {
  lang = next;
  document.documentElement.lang = HTML_LANG[next] || next;
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === next)));
  try { localStorage.setItem("augussep-lang", next); } catch (e) {}
  updatePreview();
}

function setupLang() {
  cacheSpanish();
  document.querySelectorAll("[data-lang]").forEach((b) => b.addEventListener("click", () => applyLang(b.dataset.lang)));
  let saved = null;
  try { saved = localStorage.getItem("augussep-lang"); } catch (e) {}
  const nav = (navigator.language || "").toLowerCase();
  if (!saved && nav.startsWith("en")) saved = "en";
  if (!saved && nav.startsWith("zh")) saved = "zh";
  if (saved === "en" || saved === "zh") applyLang(saved);
}

/* ---------- WhatsApp y fichas técnicas ---------- */
const waUrl = (text) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

function setupWhatsApp() {
  document.querySelectorAll("[data-wa]").forEach((el) => {
    el.href = waUrl(el.dataset.wa);
    el.target = "_blank";
    el.rel = "noopener noreferrer";
  });
}

function setupSheets() {
  document.querySelectorAll("[data-sheet]").forEach((el) => {
    const key = el.dataset.sheet;
    if (SHEETS[key]) {
      el.href = SHEETS[key];
      el.setAttribute("download", "");
      return;
    }
    const productName = () => t(key === "harina" ? "p1.name" : "p2.name");
    el.dataset.i18n = "prod.sheetAsk";
    el.textContent = ES["prod.sheetAsk"];
    el.target = "_blank";
    el.rel = "noopener noreferrer";
    el.href = waUrl(`${t("msg.sheet")} ${productName()}`);
    el.addEventListener("click", () => { el.href = waUrl(`${t("msg.sheet")} ${productName()}`); });
  });
}

/* ---------- Formulario de cotización ---------- */
let form, preview;

function buildMessage(placeholder = false) {
  const d = Object.fromEntries(new FormData(form));
  const productKey = { harina: "p1.name", aceite: "p2.name", ambos: "f.both" }[d.product];
  const rows = [
    ["f.company", d.company], ["f.name", d.name], ["f.email", d.email], ["f.phone", d.phone],
    ["f.product", t(productKey)], ["f.volume", d.volume], ["f.dest", d.dest], ["f.msg", d.msg],
  ]
    .filter(([, v]) => v && String(v).trim())
    .map(([k, v]) => `• ${t(k)}: ${String(v).trim()}`);
  const body = rows.length > 1 || !placeholder ? rows.join("\n") : `${rows.join("\n")}\n${t("msg.placeholder")}`;
  return `${t("msg.hello")}\n\n${body}`;
}

function updatePreview() {
  if (preview && form) preview.textContent = buildMessage(true);
}

function validate() {
  let ok = true;
  form.querySelectorAll("input[required]").forEach((input) => {
    const valid = input.value.trim() !== "" && input.checkValidity();
    input.closest(".field").classList.toggle("is-invalid", !valid);
    input.setAttribute("aria-invalid", String(!valid));
    if (!valid && ok) { input.focus(); ok = false; }
  });
  return ok;
}

function selectProduct(value) {
  const radio = form && form.querySelector(`input[name="product"][value="${value}"]`);
  if (radio) { radio.checked = true; updatePreview(); }
}

function setupForm() {
  form = document.getElementById("quote-form");
  preview = document.getElementById("wa-preview");
  if (!form) return;
  const status = document.getElementById("form-status");

  // Botones "Cotizar ahora" de cada producto: preseleccionan el producto
  document.querySelectorAll("[data-product]").forEach((btn) =>
    btn.addEventListener("click", () => selectProduct(btn.dataset.product))
  );

  form.addEventListener("input", (e) => {
    const field = e.target.closest(".field");
    if (field && field.classList.contains("is-invalid") && e.target.value.trim() && e.target.checkValidity()) {
      field.classList.remove("is-invalid");
      e.target.setAttribute("aria-invalid", "false");
    }
    updatePreview();
  });
  form.addEventListener("change", updatePreview);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    status.classList.remove("is-ok");
    if (!validate()) { status.textContent = t("msg.check"); return; }
    window.open(waUrl(buildMessage()), "_blank", "noopener");
    status.textContent = t("msg.opened");
    status.classList.add("is-ok");
  });

  updatePreview();
}

/* ---------- Menú y encabezado ---------- */
function setupUI() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("nav");
  const header = document.querySelector(".site-header");
  const kicker = document.querySelector(".hero__kicker");

  // Encabezado transparente sobre la portada; se vuelve azul al llegar al texto
  const onScroll = () => {
    const limit = kicker ? kicker.getBoundingClientRect().top + window.scrollY - header.offsetHeight - 8 : 8;
    header.classList.toggle("is-solid", window.scrollY > Math.max(limit, 8) || nav.classList.contains("is-open"));
  };
  const close = () => { nav.classList.remove("is-open"); toggle.setAttribute("aria-expanded", "false"); onScroll(); };

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    onScroll();
  });
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);

  document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
}

document.addEventListener("DOMContentLoaded", () => {
  setupSheets();
  setupLang();
  setupWhatsApp();
  setupForm();
  setupUI();
});
