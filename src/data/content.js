/* All Redaa website content (English + Arabic). Edit text here. */
const V2030=[["A thriving economy","Supporting industrial growth, local capabilities & diverse opportunities.","اقتصاد مزدهر","دعم النمو الصناعي والقدرات المحلية وتنوع الفرص."],
["A vibrant society","Contributing to better infrastructure & stronger communities.","مجتمع حيوي","الإسهام في بنية تحتية أفضل ومجتمعات أقوى."],
["An ambitious nation","Delivering sustainable solutions for a brighter, more resilient future.","وطن طموح","تقديم حلول مستدامة لمستقبل أكثر إشراقاً ومرونة."]];
const FOCUS=[["Strategic partnerships","Collaborating with global & local partners to unlock opportunities & deliver greater value.","الشراكات الاستراتيجية","التعاون مع شركاء عالميين ومحليين لفتح الفرص وتقديم قيمة أكبر."],
["Innovation & efficiency","Adopting modern technologies & best practices to enhance productivity, quality & reliability.","الابتكار والكفاءة","تبني التقنيات الحديثة وأفضل الممارسات لرفع الإنتاجية والجودة والموثوقية."],
["Sustainable growth","Developing infrastructure & industrial assets for a cleaner, safer & more resilient environment.","النمو المستدام","تطوير بنية تحتية وأصول صناعية لبيئة أنظف وأكثر أماناً ومرونة."],
["Value creation","Delivering projects that contribute to economic growth, stronger communities & a brighter future.","خلق القيمة","تنفيذ مشاريع تسهم في النمو الاقتصادي ومجتمعات أقوى ومستقبل أكثر إشراقاً."]];
const CAPS=[["epc","Engineering, Procurement & Construction","Integrated EPC solutions for industrial, commercial & Oil & Gas projects.","الهندسة والمشتريات والإنشاء","حلول EPC متكاملة للمشاريع الصناعية والتجارية ومشاريع النفط والغاز."],
["civil","Civil & Building Construction","Industrial, commercial, residential, villas, multi-storey buildings & government projects.","الإنشاءات المدنية والمباني","مشاريع صناعية وتجارية وسكنية وفلل ومبانٍ متعددة الطوابق ومشاريع حكومية."],
["mech","Industrial Mechanical","Process piping, static & rotating equipment installation, structural works & plant utilities.","الأعمال الميكانيكية الصناعية","أنابيب العمليات، وتركيب المعدات الثابتة والدوارة، والأعمال الإنشائية، ومرافق المصانع."],
["ei","Electrical & Instrumentation","E&I works, control systems, PLC, DCS, F&G, fiber optics & complete instrumentation solutions.","الكهرباء والأجهزة الدقيقة","أعمال E&I وأنظمة التحكم PLC وDCS وأنظمة الحريق والغاز والألياف البصرية وحلول الأجهزة المتكاملة."],
["om","Operation & Maintenance","Comprehensive O&M services to ensure reliability, efficiency & long-term performance.","التشغيل والصيانة","خدمات تشغيل وصيانة شاملة لضمان الموثوقية والكفاءة والأداء طويل الأمد."],
["sup","Project Support Services","Manpower supply, equipment support, commissioning & start-up, testing & specialized technical services.","خدمات دعم المشاريع","توفير القوى العاملة ودعم المعدات والتشغيل التجريبي والاختبار والخدمات الفنية المتخصصة."],
["trade","Trading","Supply of industrial equipment, materials & related products from global partners.","التجارة","توريد المعدات والمواد الصناعية والمنتجات ذات الصلة من شركاء عالميين."]];

const SECTORS=[
{img:"oilgas",en:{t:"Oil & Gas",i:"Upstream, midstream & downstream facilities delivered with a focus on safety, reliability, quality & efficient execution.",l:[["Process facilities","Design & construction of process units, piping & associated facilities."],["Piping & pipeline works","Process piping, utility piping, pipeline installation & modifications."],["Storage tanks","Fabrication & installation of tanks & terminals."],["GCP, pump stations & wellheads","Gas compression plants, pump stations, wellhead facilities & related infrastructure."],["Electrical & instrumentation","E&I works, control systems, PLC, DCS, SCADA & F&G."],["Maintenance & turnaround","Preventive & corrective maintenance, shutdown & turnaround services."]]},
ar:{t:"النفط والغاز",i:"منشآت المنبع والنقل والمصب، مع التركيز على السلامة والموثوقية والجودة وكفاءة التنفيذ.",l:[["منشآت المعالجة","تصميم وإنشاء وحدات المعالجة والأنابيب والمرافق المرتبطة."],["أعمال الأنابيب وخطوط النقل","أنابيب العمليات والمرافق، وتركيب خطوط الأنابيب وتعديلها."],["خزانات التخزين","تصنيع وتركيب الخزانات والمحطات الطرفية."],["محطات ضغط الغاز والضخ ورؤوس الآبار","محطات ضغط الغاز ومحطات الضخ ومرافق رؤوس الآبار والبنية المرتبطة."],["الكهرباء والأجهزة الدقيقة","أعمال E&I وأنظمة التحكم PLC وDCS وSCADA وأنظمة الحريق والغاز."],["الصيانة والإيقاف الدوري","الصيانة الوقائية والتصحيحية وخدمات الإيقاف والتجديد."]]}},
{img:"petro",en:{t:"Petrochemical",i:"Support across the full project lifecycle, from engineering & construction to commissioning & operations.",l:[["Engineering & procurement","Front-end & detailed engineering with procurement support."],["Construction & installation","Process units, piping, equipment, tanks & associated facilities."],["Mechanical works","Static & rotating equipment installation, alignment & commissioning."],["Testing & commissioning","Pre-commissioning, testing & commissioning for safe start-up & handover."],["Plant maintenance & shutdown","Turnaround & shutdown support to maximize plant availability."],["HSE & quality assurance","Health, safety, environment & quality management to international standards."]]},
ar:{t:"البتروكيماويات",i:"دعم كامل دورة حياة المشروع، من الهندسة والإنشاء إلى التشغيل التجريبي والتشغيل.",l:[["الهندسة والمشتريات","الهندسة الأولية والتفصيلية مع دعم المشتريات."],["الإنشاء والتركيب","وحدات المعالجة والأنابيب والمعدات والخزانات والمرافق المرتبطة."],["الأعمال الميكانيكية","تركيب المعدات الثابتة والدوارة ومحاذاتها وتشغيلها."],["الاختبار والتشغيل التجريبي","التشغيل المسبق والاختبار والتشغيل لبدء آمن وتسليم سلس."],["صيانة المصانع والإيقاف","دعم الإيقاف والتجديد لرفع جاهزية المصنع."],["السلامة وضمان الجودة","إدارة الصحة والسلامة والبيئة والجودة وفق المعايير الدولية."]]}},
{img:"health",en:{t:"Healthcare",i:"Modern, safe & efficient medical facilities, from design to construction, compliant with international standards & client specifications.",l:[["Hospital construction","Hospitals, medical centers & specialized healthcare facilities."],["Specialized medical facilities","ICU, operation theatres, emergency units, laboratories & diagnostic centers."],["MEP & special systems","Mechanical, electrical, plumbing & medical gas systems."],["Renovation & expansion","Upgrading & expanding existing facilities with minimal disruption."]]},
ar:{t:"الرعاية الصحية",i:"منشآت طبية حديثة وآمنة وفعالة من التصميم إلى الإنشاء، وفق المعايير الدولية ومواصفات العميل.",l:[["إنشاء المستشفيات","المستشفيات والمراكز الطبية والمنشآت الصحية المتخصصة."],["المرافق الطبية المتخصصة","العناية المركزة وغرف العمليات والطوارئ والمختبرات ومراكز التشخيص."],["الأنظمة الكهروميكانيكية والخاصة","أنظمة الميكانيكا والكهرباء والسباكة والغازات الطبية."],["التجديد والتوسعة","تطوير المنشآت القائمة وتوسعتها بأقل قدر من التعطيل."]]}},
{img:"elec",en:{t:"Electrical & Instrumentation",i:"Comprehensive E&I solutions for industrial & infrastructure projects, ensuring safe, reliable & efficient operations.",l:[["Power systems","HV, MV & LV distribution, switchgear & voltage conversion."],["Instrumentation systems","Process instrumentation, control systems & field devices."],["Control & automation","PLC, DCS, SCADA & integrated automation."],["Cables & cable trays","Cable routing, termination, tray & support systems."],["Lighting & earthing","Indoor & outdoor lighting, earthing & lightning protection."],["E&I construction","Installation, testing, pre-commissioning & commissioning support."]]},
ar:{t:"الكهرباء والأجهزة الدقيقة",i:"حلول E&I شاملة للمشاريع الصناعية ومشاريع البنية التحتية، لضمان تشغيل آمن وموثوق وفعال.",l:[["أنظمة الطاقة","توزيع الجهد العالي والمتوسط والمنخفض، والمفاتيح الكهربائية، وتحويل الجهد."],["أنظمة الأجهزة الدقيقة","أجهزة العمليات وأنظمة التحكم والأجهزة الميدانية."],["التحكم والأتمتة","أنظمة PLC وDCS وSCADA والأتمتة المتكاملة."],["الكابلات وحوامل الكابلات","تمديد الكابلات وتوصيلها وأنظمة الحوامل والدعامات."],["الإنارة والتأريض","الإنارة الداخلية والخارجية والتأريض والحماية من الصواعق."],["إنشاءات E&I","التركيب والاختبار والتشغيل المسبق ودعم التشغيل."]]}},
{img:"water",en:{t:"Water & Environmental",i:"Sustainable water & environmental solutions for resource efficiency, regulatory compliance & a cleaner environment.",l:[["Desalination plants","Design, engineering & construction of desalination plants."],["Sewage & effluent treatment","STPs & treatment solutions for industrial effluents."],["Drinking & municipal water","Potable, bottled & municipal water treatment systems."],["Ultra pure water","High-purity treatment for industrial & specialized applications."],["Zero liquid discharge","ZLD systems for sustainable water management."],["Sterilizer & UV systems","Disinfection for beverages, food processing, utilities & hospitals."]]},
ar:{t:"المياه والبيئة",i:"حلول مستدامة للمياه والبيئة تحقق كفاءة الموارد والامتثال التنظيمي وبيئة أنظف.",l:[["محطات تحلية المياه","تصميم وهندسة وإنشاء محطات التحلية."],["معالجة مياه الصرف","محطات معالجة الصرف الصحي وحلول معالجة المخلفات الصناعية."],["مياه الشرب والمياه البلدية","أنظمة معالجة مياه الشرب والمعبأة والبلدية."],["المياه فائقة النقاء","معالجة عالية النقاء للتطبيقات الصناعية والمتخصصة."],["محطات صفر تصريف","أنظمة ZLD لإدارة مستدامة للمياه."],["أنظمة التعقيم والأشعة فوق البنفسجية","التعقيم للمشروبات وتصنيع الأغذية والمرافق والمستشفيات."]]}},
{img:"cranes",en:{t:"Construction & Infrastructure",i:"High-quality buildings & civil structures for commercial, industrial, residential & government clients.",l:[["Commercial buildings","Offices, business complexes & commercial facilities."],["Residential & villas","Villas, housing complexes & residential buildings."],["Multi-storey buildings","High-rise & mixed-use developments."],["Government projects","Public buildings & infrastructure."],["Industrial facilities","GCPs, pump stations, wellhead facilities, factories & plants."],["Infrastructure works","Roads, bridges, site development & utilities."]]},
ar:{t:"الإنشاءات والبنية التحتية",i:"مبانٍ ومنشآت مدنية عالية الجودة لعملاء تجاريين وصناعيين وسكنيين وحكوميين.",l:[["المباني التجارية","المكاتب والمجمعات التجارية والمرافق التجارية."],["السكني والفلل","الفلل والمجمعات السكنية والمباني السكنية."],["المباني متعددة الطوابق","الأبراج والمشاريع متعددة الاستخدامات."],["المشاريع الحكومية","المباني العامة والبنية التحتية."],["المنشآت الصناعية","محطات ضغط الغاز ومحطات الضخ ورؤوس الآبار والمصانع."],["أعمال البنية التحتية","الطرق والجسور وتطوير المواقع والمرافق."]]}},
{img:"roads",en:{t:"Roads & Earthworks",i:"Road construction, asphalt paving & excavation for industrial, infrastructure & facility projects.",l:[["Excavation & earthworks","Site clearing, excavation, grading & compaction."],["Asphalt paving","Roads, access ways & internal roads."],["Road construction","Service roads, access roads & hardstands."],["Quality & safety","Built to standard with strict quality & safety control."]]},
ar:{t:"الطرق وأعمال الحفر",i:"إنشاء الطرق والسفلتة وأعمال الحفر للمشاريع الصناعية ومشاريع البنية التحتية والمرافق.",l:[["الحفر وأعمال التربة","تجهيز المواقع والحفر والتسوية والدك."],["السفلتة","الطرق والممرات والطرق الداخلية."],["إنشاء الطرق","طرق الخدمة وطرق الوصول والساحات المعبدة."],["الجودة والسلامة","تنفيذ وفق المواصفات مع رقابة صارمة على الجودة والسلامة."]]}},
{img:"prefab",en:{t:"Prefabricated Facilities",i:"Prefabricated buildings & temporary facilities delivered with speed, efficiency & reliability.",l:[["Workforce camps","Accommodation for large & small teams."],["Site offices","Functional & comfortable site offices."],["Support facilities","Dining, utilities & common facilities."],["Quick deployment","Fast-track installation with minimal disruption."]]},
ar:{t:"المباني الجاهزة",i:"مبانٍ جاهزة ومرافق مؤقتة تُسلَّم بسرعة وكفاءة وموثوقية.",l:[["مخيمات العمال","سكن للفرق الكبيرة والصغيرة."],["مكاتب المواقع","مكاتب مواقع عملية ومريحة."],["المرافق المساندة","مرافق الطعام والخدمات والمرافق المشتركة."],["سرعة التركيب","تركيب سريع بأقل قدر من التعطيل."]]}}
];

const CATS={og:["Oil & Gas","النفط والغاز"],hc:["Healthcare","الرعاية الصحية"],pw:["Power & Utilities","الطاقة والمرافق"],in:["Security & Infrastructure","الأمن والبنية التحتية"]};
const PROJ=[
["og","CRPO 28 & 29 — Jafurah GCP-4 & GCP-7","إنشاء CRPO 28 و29 — محطتا ضغط الغاز GCP-4 وGCP-7 بالجافورة","Jafurah","الجافورة"],
["og","Pump station & MLIV, Master Gas System PK-3 (MLIV 40–49, PS-8, PS-9, PS-10 & BGCS-10)","محطة ضخ وصمامات الخط الرئيسي MLIV — شبكة الغاز الرئيسية PK-3 (MLIV 40–49، PS-8، PS-9، PS-10 وBGCS-10)","Master Gas System","شبكة الغاز الرئيسية"],
["og","Gas compression plant civil works, PK-1 GCPs & PWIS","الأعمال المدنية لمحطات ضغط الغاز PK-1 ونظام PWIS","Jafurah North","شمال الجافورة"],
["og","CMEP works, GCP-1 TCF site office, PK-31","الأعمال المدنية والميكانيكية والكهربائية — مكتب موقع GCP-1 TCF، PK-31","Jafurah","الجافورة"],
["og","Civil plant works for HZEM GCP-4, PK-31","الأعمال المدنية لمحطة HZEM GCP-4، PK-31","Jafurah","الجافورة"],
["hc","Pediatric inpatient ward, 6th floor, Building B-61, DHC","جناح تنويم الأطفال، الطابق السادس، المبنى B-61، مركز الظهران الصحي","Dhahran","الظهران"],
["hc","Low voltage switchgear upgrade, Building 54, Dhahran Health Center","تحديث لوحات الجهد المنخفض، المبنى 54، مركز الظهران الصحي","Dhahran","الظهران"],
["hc","Women & Children Center & Ambulatory Clinic","مركز المرأة والطفل والعيادات الخارجية","Dhahran","الظهران"],
["hc","110 V to 230 V voltage conversion, Johns Hopkins Aramco Healthcare Centre","تحويل الجهد من 110 إلى 230 فولت، مركز جونز هوبكنز أرامكو الطبي","Dhahran","الظهران"],
["in","Aramco security gates at Al Qassim, Turaif, Jizan, Al Jouf & Shaybah","بوابات أمن أرامكو في القصيم وطريف وجازان والجوف والشيبة","Multiple regions","مناطق متعددة"],
["pw","DCC Building, Saudi Electricity Company","مبنى DCC، الشركة السعودية للكهرباء","Makkah","مكة المكرمة"],
["pw","LDC upgrade & DMS Building, Saudi Electricity Company","تطوير LDC ومبنى DMS، الشركة السعودية للكهرباء","Jeddah","جدة"],
["pw","YNGL cogeneration feeder cable conversion, 13.8 kV","تحويل كابلات تغذية التوليد المشترك YNGL بجهد 13.8 كيلوفولت","Yanbu","ينبع"]
];
const PARTNERS=[["ACS","Auto-Control Synergys Industrial Company","Electrical, instrumentation & control","Electrical, instrumentation & control system integration & automation for Oil & Gas, industrial & process sectors.","شركة أوتو كنترول سينرجيز الصناعية","الكهرباء والأجهزة والتحكم","تكامل أنظمة الكهرباء والأجهزة والتحكم والأتمتة لقطاعات النفط والغاز والصناعة والعمليات."],
["CIL","Capacite Infraprojects Limited","Global partner · EPC, India","EPC company with 20+ million sq. ft. of landmark projects across healthcare, commercial, residential, industrial & data centers.","كاباسيت إنفرا بروجكتس المحدودة","شريك عالمي · EPC، الهند","شركة EPC نفذت أكثر من 20 مليون قدم مربع من المشاريع البارزة في الرعاية الصحية والقطاع التجاري والسكني والصناعي ومراكز البيانات."],
["CPL","Carpenter & Paterson Limited","Pipe supports · since 1956","Pipe support solutions & steelwork fabrication, with engineering, design, manufacturing, inspection & technical support.","كاربنتر آند باترسون المحدودة","دعامات الأنابيب · منذ 1956","حلول دعامات الأنابيب وتصنيع الهياكل الفولاذية، مع الهندسة والتصميم والتصنيع والفحص والدعم الفني."],
["CCI","Canadian Crystalline India Limited","Water treatment · since 1969","Manufacturer of water & wastewater treatment, desalination & R.O. plants with 54+ years of experience.","كنديان كريستالين إنديا المحدودة","معالجة المياه · منذ 1969","تصنيع محطات معالجة المياه ومياه الصرف والتحلية والتناضح العكسي بخبرة تتجاوز 54 عاماً."],
["VSE","Vishwa Samudra Engineering","Engineering & infrastructure","Engineering, infrastructure & construction services across a wide spectrum of sectors.","فيشوا سامودرا للهندسة","الهندسة والبنية التحتية","خدمات الهندسة والبنية التحتية والإنشاء عبر طيف واسع من القطاعات."],
["DTE","DeepTech Energy","Oil & Gas, energy & offshore","Engineering, procurement, construction & support services for Oil & Gas, energy & offshore projects.","ديب تك إنرجي","النفط والغاز والطاقة والبحرية","خدمات الهندسة والمشتريات والإنشاء والدعم لمشاريع النفط والغاز والطاقة والمشاريع البحرية."]];
const CLIENTS=[["Saudi Aramco","أرامكو السعودية"],["Johns Hopkins Aramco Healthcare","جونز هوبكنز أرامكو الطبي"],["SABIC","سابك"],["Ma'aden","معادن"],["Saudi Electricity Company","الشركة السعودية للكهرباء"],["National Water Company","شركة المياه الوطنية"],["SWCC","المؤسسة العامة لتحلية المياه المالحة"],["SATORP","ساتورب"],["ACWA Power","أكوا باور"],["International Maritime Industries","العالمية للصناعات البحرية"],["Honeywell","هانيويل"],["Saipem","سايبم"],["Larsen & Toubro","لارسن آند توبرو"]];
const CERTS=[["9001","ISO 9001:2015","Quality Management System","نظام إدارة الجودة"],["14001","ISO 14001:2015","Environmental Management System","نظام الإدارة البيئية"],["45001","ISO 45001:2018","Occupational Health & Safety Management System","نظام إدارة الصحة والسلامة المهنية"]];
const GP=[["Strong revenue growth","Increased project execution & an expanding service scope drive consistent revenue growth.","نمو قوي في الإيرادات","زيادة تنفيذ المشاريع وتوسع نطاق الخدمات يدعمان نمواً مستمراً في الإيرادات."],["Sustainable business model","A diversified project portfolio & long-term client relationships ensure stable growth.","نموذج أعمال مستدام","محفظة مشاريع متنوعة وعلاقات طويلة الأمد مع العملاء تضمن نمواً مستقراً."],["Future outlook","Continued growth supported by a robust pipeline of projects & service opportunities.","آفاق المستقبل","نمو متواصل مدعوم بمجموعة قوية من المشاريع وفرص الخدمات."]];

const SLUG=["oil-gas","petrochemical","healthcare","electrical","water","construction","roads","prefab"];
const SIMG=[["oilgas","towers","piperack"],["petro","refinery","turbine"],["health","about","cranes"],["elec","turbine","capab"],["water","ro","site"],["cranes","scaffold","about"],["roads","underpass","site"],["prefab","warehouse","site"]];
const SREL=[[0,1,2,3,4],[0,1,2,3,4],[5,6,7,8],[6,8,12],[],[5,7,9,10,11],[9],[]];
const PIMG=["towers","piperack","scaffold","site","refinery","health","elec","cranes","capab","underpass","hero","about","turbine"];
const PSEC=[0,0,0,0,0,2,3,2,3,5,5,5,3];
const ICON={
 epc:'<path d="M4 18h16M6 18V9l6-4 6 4v9"/><path d="M10 18v-5h4v5"/>',
 civil:'<rect x="4" y="3" width="10" height="18"/><path d="M14 9h6v12h-6M7 7h4M7 11h4M7 15h4"/>',
 mech:'<path d="M3 10h6v4H3zM9 12h6M15 6h6v12h-6z"/><circle cx="18" cy="12" r="2"/>',
 ei:'<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
 om:'<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z"/>',
 sup:'<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0M16 4a3 3 0 0 1 0 6M21 20a6 6 0 0 0-4-5.6"/>',
 trade:'<path d="M3 4h2l2.4 11h11L21 8H7"/><circle cx="9" cy="19" r="1.5"/><circle cx="17" cy="19" r="1.5"/>'};
const CAPX=[
 ["Integrated EPC solutions","Front-end & detailed engineering","Procurement support","Construction & installation","Testing & commissioning","حلول EPC متكاملة","الهندسة الأولية والتفصيلية","دعم المشتريات","الإنشاء والتركيب","الاختبار والتشغيل التجريبي"],
 ["Industrial & commercial buildings","Residential complexes & villas","Multi-storey buildings","Government projects","Structural works","Architectural finishing","المباني الصناعية والتجارية","المجمعات السكنية والفلل","المباني متعددة الطوابق","المشاريع الحكومية","الأعمال الإنشائية","التشطيبات المعمارية"],
 ["Process piping","Static equipment installation","Rotating equipment installation","Structural steel works","Plant utilities","Storage tanks","أنابيب العمليات","تركيب المعدات الثابتة","تركيب المعدات الدوارة","الهياكل الفولاذية","مرافق المصانع","خزانات التخزين"],
 ["HV, MV & LV power systems","PLC, DCS & SCADA","Fire & gas (F&G) systems","Fiber optics","Cables & cable trays","Lighting & earthing","أنظمة الجهد العالي والمتوسط والمنخفض","أنظمة PLC وDCS وSCADA","أنظمة الحريق والغاز","الألياف البصرية","الكابلات وحواملها","الإنارة والتأريض"],
 ["Operation support","Preventive maintenance","Corrective maintenance","Shutdown & turnaround","دعم التشغيل","الصيانة الوقائية","الصيانة التصحيحية","الإيقاف والتجديد"],
 ["Manpower supply","Equipment support","Commissioning & start-up","Testing","Specialized technical services","توفير القوى العاملة","دعم المعدات","التشغيل وبدء التشغيل","الاختبار","الخدمات الفنية المتخصصة"],
 ["Industrial equipment","Construction & plant materials","Products from global partners","المعدات الصناعية","مواد الإنشاء والمصانع","منتجات من شركاء عالميين"]];
const CAPIMG=["piperack","cranes","capab","elec","turbine","scaffold","warehouse"];
const STEPS=[["Engineering","Front-end & detailed design","الهندسة","التصميم الأولي والتفصيلي"],["Procurement","Global sourcing of equipment & materials","المشتريات","توريد المعدات والمواد عالمياً"],["Construction","Civil, mechanical & E&I installation","الإنشاء","التركيب المدني والميكانيكي والكهربائي"],["Commissioning","Testing, start-up & handover","التشغيل التجريبي","الاختبار وبدء التشغيل والتسليم"],["O&M","Maintenance, shutdowns & turnarounds","التشغيل والصيانة","الصيانة والإيقاف والتجديد"]];
const VALS=[["Quality","High standards in every project","الجودة","معايير عالية في كل مشروع"],["Safety","Zero compromise on safety","السلامة","لا تهاون في السلامة"],["Reliability","Trusted for consistent performance","الموثوقية","ثقة العملاء بأداء ثابت"],["Experience","Skilled team with proven execution","الخبرة","فريق ماهر بقدرة تنفيذ مثبتة"]];
const SLIDES=[["hero","Commercial & government buildings","المباني التجارية والحكومية"],["towers","Oil & Gas facilities","منشآت النفط والغاز"],["elec","Electrical & instrumentation","الكهرباء والأجهزة الدقيقة"],["water","Water & environmental","المياه والبيئة"],["health","Healthcare facilities","منشآت الرعاية الصحية"]];
const CITIES=[["Dammam","الدمام",50.10,26.43,[],1,-1],["Jafurah","الجافورة",49.75,25.05,[0,1,2,3,4],0,1],["Dhahran","الظهران",50.11,26.18,[5,6,7,8],0,1],["Makkah","مكة المكرمة",39.83,21.42,[10],0,1],["Jeddah","جدة",39.19,21.49,[11],0,-1],["Yanbu","ينبع",38.06,24.09,[12],0,-1],["Al Qassim","القصيم",43.97,26.33,[9],0,1],["Turaif","طريف",38.66,31.67,[9],0,1],["Al Jouf","الجوف",40.20,29.97,[9],0,1],["Jizan","جازان",42.55,16.89,[9],0,1],["Shaybah","الشيبة",53.95,22.51,[9],0,-1]];
const KSA=[[34.9,29.4],[36.1,29.2],[36.8,29.9],[37.5,30.3],[38.0,31.5],[39.2,32.2],[40.4,31.9],[42.1,31.1],[44.7,29.2],[46.5,29.1],[47.5,29.0],[48.4,28.5],[48.6,27.9],[49.6,26.9],[50.2,26.2],[50.8,25.3],[50.8,24.7],[51.6,24.2],[52.0,23.0],[52.6,22.9],[55.2,22.7],[55.7,22.0],[55.0,20.0],[52.0,19.0],[49.1,18.6],[48.2,17.4],[47.0,17.0],[46.4,17.2],[45.2,17.4],[44.0,17.4],[43.2,16.7],[42.8,16.4],[42.5,17.5],[41.7,18.5],[40.8,19.8],[39.6,21.0],[39.1,21.8],[38.4,23.6],[37.4,24.8],[36.6,25.9],[35.6,27.3],[34.9,28.1],[34.6,28.4]];

const T={
en:{uLoc:"Dammam, Kingdom of Saudi Arabia",uIso:"ISO 9001 · 14001 · 45001 certified",logoB:"REDAA",logoS:"Developing Company Ltd.",rfp:"Request a proposal",
home:"Home",about:"About",services:"Services",sectors:"Sectors",projects:"Projects",partners:"Partners & clients",contact:"Contact",
fAbout:"An EPC Classification 2 contractor delivering engineering, procurement & construction across the Kingdom of Saudi Arabia since 2012.",fCo:"Company",fSe:"Sectors",fCt:"Head office",
addr:"Building No. 4164, Bilal Bin Rabah Street, Madinat Al Ummal, Dammam, Saudi Arabia",coName:"Redaa Developing Company Ltd.",rights:"All rights reserved.",crL:"C.R.",city:"Dammam",
megaT:"Sector expertise",megaP:"Integrated EPC across eight sectors, delivered to international standards & Aramco requirements.",allSec:"View all sectors",
hero:["Building","today for","a <em>stronger</em>","tomorrow"],heroP:"Integrated engineering, procurement & construction for the Kingdom's industrial, energy, healthcare & infrastructure projects.",heroA:"Explore our services",heroB:"View projects",
q1:"Services",q1b:"End-to-end EPC",q1s:"Seven integrated capabilities",q2:"Sectors",q2b:"Eight industries",q2s:"From Oil & Gas to healthcare",q3:"Projects",q3b:"Proven delivery",q3s:"Aramco, SEC, JHAH & more",q4:"Contact",q4b:"Start a conversation",q4s:"Dammam head office",
introE:"Who we are",introH:"A Saudi EPC contractor built on <em>execution</em>",introP:"Established in 2012 & registered in Dammam, Redaa delivers integrated engineering, procurement & construction for industrial, commercial & Oil & Gas projects. Our 900+ professionals have completed industrial facilities, commercial buildings, villas, multi-storey developments, control centers, cooling systems, booster stations & government projects.",more:"More about Redaa",
k1:"Established",k2:"Professionals",k3:"EPC classification",k4:"ISO certifications",since:"Since",
capE:"What we do",capH:"Capabilities across the <em>project lifecycle</em>",allSvc:"All services",
secE:"Where we work",secH:"Sector <em>expertise</em>",explore:"Explore sector",
prjE:"Our experience",prjH:"Featured <em>projects</em>",allPrj:"All projects",
v30E:"Saudi Vision 2030",v30H:"Contributing to the Kingdom's <em>transformation</em>",v30P:"We support Saudi Vision 2030 by strengthening local capabilities & building sustainable infrastructure & industrial assets.",
cliE:"Trusted by",ctaH:"Planning a project in the Kingdom?",ctaP:"Talk to our team about engineering, procurement, construction or maintenance requirements.",ctaB:"Contact our team",
abE:"About us",abH:"Building today for a stronger tomorrow",abP:"Redaa Developing Company Ltd. is an EPC Classification 2 contracting company in the Kingdom of Saudi Arabia, operating under Commercial Registration No. 2050080690.",
storyE:"Our story",storyH:"From Dammam to <em>the Kingdom's</em> largest operators",
storyP1:"Since 2012, Redaa has grown into an integrated contractor covering civil construction, structural works, architectural finishing, electromechanical systems, electrical & instrumentation, HVAC, plumbing, fire fighting, low current systems & infrastructure works.",
storyP2:"We adhere to international standards & Aramco requirements, & we deliver with a strong focus on quality, safety, reliability & timely execution.",
ceoE:"Message from the CEO",ceoQ:"Through strategic partnerships & a committed team, we aim to build sustainable infrastructure & industrial assets that enable progress.",ceoN:"Majid Mohammed Al Dossary",ceoR:"Chief Executive Officer",
ceo1:"Saudi Arabia is on a transformative journey under Saudi Vision 2030, creating new opportunities for economic diversification, industrial growth & world-class infrastructure.",
ceo2:"At Redaa Developing Company Limited, we are proud to contribute to this national vision by delivering high-quality engineering & construction solutions that support the Kingdom's development goals & create long-term value.",
ceo3:"We focus on strengthening local capabilities, adopting innovative solutions, & maintaining the highest standards of safety, quality & reliability across all our projects.",
ceo4:"As we move forward, we remain dedicated to partnering with our clients, stakeholders & communities to deliver projects that make a positive difference & help achieve the ambitions of Saudi Vision 2030.",
vmE:"Vision & mission",vmH:"What <em>guides</em> us",vK:"Vision",mK:"Mission",
vP:"To be a trusted & preferred engineering, procurement & construction partner in the Kingdom & beyond, recognized for delivering world-class solutions, driving innovation & supporting the goals of Saudi Vision 2030 through sustainable development & long-term value creation.",
mP:"To deliver high-quality engineering, procurement & construction solutions with integrity, safety, efficiency & reliability, contributing to national development, enhancing communities & creating sustainable infrastructure & industrial assets that add lasting value for our clients, partners & society.",
foE:"Focus areas",grE:"Financial growth",grH:"Steady growth, <em>strong pipeline</em>",grP:"Growth reflects strong project execution, operational excellence & the trust of our clients & partners.",
g1:"Initial growth",g2:"Significant increase",g3:"Projected peak",gN:"Year-on-year growth. Scale 0–50%. Striped bar is a projection.",
ceE:"Certifications",ceH:"Certified <em>management systems</em>",
svE:"Services",svH:"Integrated EPC services",svP:"End-to-end engineering, procurement, construction & related services, built on experience, skilled manpower & advanced equipment.",
lcE:"How we deliver",lcH:"One accountable partner, <em>concept to operation</em>",
seH:"Sector expertise",seP:"Eight sectors served by one integrated EPC team, from upstream gas facilities to hospitals & desalination plants.",
ovr:"Overview",svcIn:"Our services in this sector",relP:"Related projects",noRel:"Project references for this sector are available on request.",otherS:"Other sectors",talk:"Discuss a project in this sector",talkP:"Our engineers can review your scope & requirements.",prev:"Previous",next:"Next",
prH:"Major projects",prP:"Complex industrial & infrastructure projects delivered for the Kingdom's leading energy, utility & healthcare operators.",all:"All",srch:"Search by name or location",list:"List",map:"Map",none:"No projects match your search.",
hq:"Head office",pLoc:"Location",pSec:"Category",pSector:"Related sector",pRef:"Reference",viewSec:"View sector",close:"Close",
paH:"Partners & clients",paP:"Strategic partnerships with established companies, & long-term relationships with the Kingdom's leading operators.",ptE:"Global partners",ptH:"Alliances that <em>strengthen our capability</em>",clE:"Clients",clH:"Trusted by <em>leading operators</em>",
coH:"Contact us",coP:"We welcome opportunities to collaborate & deliver innovative solutions for a sustainable & prosperous future.",
phL:"Phone",emL:"Email",wbL:"Website",copy:"Copy",copied:"Copied",fH:"Send an enquiry",fT:"Enquiry type",t1:"Project enquiry",t2:"Partnership",t3:"Supply & trading",t4:"General",
fN:"Full name",fC:"Company",fE:"Email",fP:"Phone",fS:"Sector",pick:"Choose a sector",fM:"Message",fB:"Send enquiry",
fErr:"Please add your name & a valid email address.",fOk:"Thank you. This is a website preview, so the form isn't connected yet. On the live site your enquiry will go to info@alredaa.net.",
findE:"Find us",langTxt:"العربية",projectsN:"projects"},
ar:{uLoc:"الدمام، المملكة العربية السعودية",uIso:"معتمدون بشهادات أيزو 9001 و14001 و45001",logoB:"رداء",logoS:"شركة رداء المطورة المحدودة",rfp:"اطلب عرضاً",
home:"الرئيسية",about:"من نحن",services:"الخدمات",sectors:"القطاعات",projects:"المشاريع",partners:"الشركاء والعملاء",contact:"تواصل معنا",
fAbout:"مقاول مصنف في الدرجة الثانية في مجال الهندسة والمشتريات والإنشاء، يعمل في أنحاء المملكة العربية السعودية منذ 2012.",fCo:"الشركة",fSe:"القطاعات",fCt:"المكتب الرئيسي",
addr:"مبنى رقم 4164، شارع بلال بن رباح، مدينة العمال، الدمام، المملكة العربية السعودية",coName:"شركة رداء المطورة المحدودة",rights:"جميع الحقوق محفوظة.",crL:"س.ت",city:"الدمام",
megaT:"خبراتنا القطاعية",megaP:"خدمات EPC متكاملة في ثمانية قطاعات، وفق المعايير الدولية ومتطلبات أرامكو.",allSec:"جميع القطاعات",
hero:["نبني","اليوم","<em>لغدٍ</em>","أقوى"],heroP:"حلول متكاملة في الهندسة والمشتريات والإنشاء لمشاريع الصناعة والطاقة والرعاية الصحية والبنية التحتية في المملكة.",heroA:"استكشف خدماتنا",heroB:"استعرض المشاريع",
q1:"الخدمات",q1b:"EPC متكامل",q1s:"سبع قدرات متكاملة",q2:"القطاعات",q2b:"ثمانية قطاعات",q2s:"من النفط والغاز إلى الرعاية الصحية",q3:"المشاريع",q3b:"تنفيذ مثبت",q3s:"أرامكو والكهرباء وجونز هوبكنز وغيرها",q4:"تواصل",q4b:"ابدأ الحوار",q4s:"المكتب الرئيسي بالدمام",
introE:"من نحن",introH:"مقاول EPC سعودي قائم على <em>التنفيذ</em>",introP:"تأسست رداء عام 2012 ومقرها الدمام، وتقدم حلولاً متكاملة في الهندسة والمشتريات والإنشاء للمشاريع الصناعية والتجارية ومشاريع النفط والغاز. أنجز فريقنا المكوّن من أكثر من 900 متخصص منشآت صناعية ومبانٍ تجارية وفللاً ومشاريع متعددة الطوابق ومراكز تحكم وأنظمة تبريد ومحطات ضخ ومشاريع حكومية.",more:"المزيد عن رداء",
k1:"سنة التأسيس",k2:"متخصص",k3:"تصنيف EPC",k4:"شهادات أيزو",since:"منذ",
capE:"ماذا نقدم",capH:"قدرات تغطي <em>دورة حياة المشروع</em>",allSvc:"جميع الخدمات",
secE:"أين نعمل",secH:"خبراتنا <em>القطاعية</em>",explore:"استكشف القطاع",
prjE:"خبراتنا",prjH:"مشاريع <em>مختارة</em>",allPrj:"جميع المشاريع",
v30E:"رؤية السعودية 2030",v30H:"نسهم في <em>تحول</em> المملكة",v30P:"ندعم رؤية السعودية 2030 بتعزيز القدرات المحلية وبناء بنية تحتية وأصول صناعية مستدامة.",
cliE:"عملاؤنا",ctaH:"تخطط لمشروع في المملكة؟",ctaP:"تحدث مع فريقنا حول متطلبات الهندسة أو المشتريات أو الإنشاء أو الصيانة.",ctaB:"تواصل مع فريقنا",
abE:"من نحن",abH:"نبني اليوم لغدٍ أقوى",abP:"شركة رداء المطورة المحدودة شركة مقاولات مصنفة في الدرجة الثانية في مجال EPC بالمملكة العربية السعودية، بسجل تجاري رقم 2050080690.",
storyE:"قصتنا",storyH:"من الدمام إلى <em>كبرى الجهات</em> في المملكة",
storyP1:"منذ 2012 أصبحت رداء مقاولاً متكاملاً يغطي الأعمال المدنية والإنشائية والتشطيبات المعمارية والأنظمة الكهروميكانيكية والكهرباء والأجهزة الدقيقة والتكييف والسباكة ومكافحة الحريق وأنظمة التيار الخفيف وأعمال البنية التحتية.",
storyP2:"نلتزم بالمعايير الدولية ومتطلبات أرامكو، ونركز على الجودة والسلامة والموثوقية والتنفيذ في الوقت المحدد.",
ceoE:"كلمة الرئيس التنفيذي",ceoQ:"من خلال الشراكات الاستراتيجية وفريق ملتزم، نسعى إلى بناء بنية تحتية وأصول صناعية مستدامة تدعم التقدم.",ceoN:"ماجد محمد الدوسري",ceoR:"الرئيس التنفيذي",
ceo1:"تمضي المملكة العربية السعودية في رحلة تحول كبرى في ظل رؤية 2030، تفتح آفاقاً جديدة للتنويع الاقتصادي والنمو الصناعي وبنية تحتية بمستوى عالمي.",
ceo2:"نفخر في شركة رداء المطورة المحدودة بالإسهام في هذه الرؤية الوطنية عبر تقديم حلول هندسية وإنشائية عالية الجودة تدعم أهداف التنمية في المملكة وتصنع قيمة طويلة الأمد.",
ceo3:"نركز على تعزيز القدرات المحلية وتبني الحلول المبتكرة والحفاظ على أعلى معايير السلامة والجودة والموثوقية في جميع مشاريعنا.",
ceo4:"ونواصل التزامنا بالشراكة مع عملائنا والمعنيين والمجتمعات لتنفيذ مشاريع تُحدث أثراً إيجابياً وتسهم في تحقيق طموحات رؤية السعودية 2030.",
vmE:"الرؤية والرسالة",vmH:"ما <em>يوجّهنا</em>",vK:"رؤيتنا",mK:"رسالتنا",
vP:"أن نكون الشريك الموثوق والمفضل في الهندسة والمشتريات والإنشاء داخل المملكة وخارجها، معروفين بتقديم حلول عالمية المستوى، ودفع الابتكار، ودعم أهداف رؤية السعودية 2030 عبر التنمية المستدامة وخلق قيمة طويلة الأمد.",
mP:"تقديم حلول هندسية وإنشائية ومشتريات عالية الجودة بنزاهة وسلامة وكفاءة وموثوقية، والإسهام في التنمية الوطنية، وتعزيز المجتمعات، وبناء بنية تحتية وأصول صناعية مستدامة تضيف قيمة دائمة لعملائنا وشركائنا والمجتمع.",
foE:"مجالات التركيز",grE:"النمو المالي",grH:"نمو ثابت <em>ومشاريع واعدة</em>",grP:"يعكس النمو قوة تنفيذ المشاريع والتميز التشغيلي وثقة عملائنا وشركائنا.",
g1:"مرحلة النمو الأولى",g2:"زيادة ملحوظة",g3:"ذروة متوقعة",gN:"نسبة النمو السنوي. المقياس من 0 إلى 50%. العمود المخطط قيمة متوقعة.",
ceE:"الشهادات",ceH:"أنظمة إدارة <em>معتمدة</em>",
svE:"الخدمات",svH:"خدمات EPC متكاملة",svP:"خدمات متكاملة في الهندسة والمشتريات والإنشاء والخدمات المرتبطة، قائمة على الخبرة والكوادر الماهرة والمعدات المتقدمة.",
lcE:"منهجية التنفيذ",lcH:"شريك واحد مسؤول <em>من الفكرة إلى التشغيل</em>",
seH:"خبراتنا القطاعية",seP:"ثمانية قطاعات يخدمها فريق EPC متكامل واحد، من منشآت الغاز إلى المستشفيات ومحطات التحلية.",
ovr:"نظرة عامة",svcIn:"خدماتنا في هذا القطاع",relP:"مشاريع ذات صلة",noRel:"مراجع المشاريع لهذا القطاع متاحة عند الطلب.",otherS:"قطاعات أخرى",talk:"ناقش مشروعاً في هذا القطاع",talkP:"يمكن لمهندسينا مراجعة نطاق عملك ومتطلباتك.",prev:"السابق",next:"التالي",
prH:"أبرز المشاريع",prP:"مشاريع صناعية وبنية تحتية معقدة نُفذت لكبرى جهات الطاقة والمرافق والرعاية الصحية في المملكة.",all:"الكل",srch:"ابحث بالاسم أو الموقع",list:"قائمة",map:"خريطة",none:"لا توجد مشاريع مطابقة للبحث.",
hq:"المكتب الرئيسي",pLoc:"الموقع",pSec:"الفئة",pSector:"القطاع المرتبط",pRef:"المرجع",viewSec:"عرض القطاع",close:"إغلاق",
paH:"الشركاء والعملاء",paP:"شراكات استراتيجية مع شركات راسخة، وعلاقات طويلة الأمد مع كبرى الجهات في المملكة.",ptE:"شركاؤنا العالميون",ptH:"تحالفات <em>تعزز قدراتنا</em>",clE:"العملاء",clH:"موضع ثقة <em>كبرى الجهات</em>",
coH:"تواصل معنا",coP:"نرحب بفرص التعاون وتقديم حلول مبتكرة لمستقبل مستدام ومزدهر.",
phL:"الهاتف",emL:"البريد الإلكتروني",wbL:"الموقع الإلكتروني",copy:"نسخ",copied:"تم النسخ",fH:"أرسل استفسارك",fT:"نوع الاستفسار",t1:"استفسار عن مشروع",t2:"شراكة",t3:"توريد وتجارة",t4:"عام",
fN:"الاسم الكامل",fC:"الشركة",fE:"البريد الإلكتروني",fP:"الهاتف",fS:"القطاع",pick:"اختر القطاع",fM:"الرسالة",fB:"إرسال الاستفسار",
fErr:"يرجى إدخال الاسم وبريد إلكتروني صحيح.",fOk:"شكراً لك. هذه نسخة معاينة من الموقع، لذا النموذج غير مفعّل بعد. في الموقع الفعلي سيصل استفسارك إلى info@alredaa.net.",
findE:"موقعنا",langTxt:"English",projectsN:"مشاريع"}};


/* ---------- additional copy ---------- */
Object.assign(T.en,{menu:"Menu",closeM:"Close",view:"View",open:"Open",scroll:"Scroll to explore",lgHQ:"Head office · Dammam",lgP:"Project locations",
 hEst:"Established",hCR:"Commercial reg.",hIso:"Certified",
 heroL:["Engineering","the Kingdom's","<span class='it'>stronger</span> tomorrow"],
 mani:"Since 2012 we have engineered, procured & built the *facilities* that move the Kingdom forward: *gas* *plants,* *hospitals,* power systems & water infrastructure, delivered to *Aramco* *standards.*",
 hzE:"Sector expertise",hzH:"Eight sectors.<br><span class='it'>One standard.</span>",svE:"Capabilities",svH2:"End-to-end<br><span class='it'>delivery</span>",
 prE:"Selected work",prH2:"Projects that<br><span class='it'>power the Kingdom</span>",mq:["Engineering","Procurement","Construction","Operation & Maintenance"],
 ctaE:"Start a project",ctaH2:"Let's build<br><span class='it'>tomorrow</span>",ctaSub:"Tell us about your scope. Our engineers in Dammam will respond with next steps.",
 gall:"In the field",facts:"Key facts"});
Object.assign(T.ar,{menu:"القائمة",closeM:"إغلاق",view:"عرض",open:"فتح",scroll:"مرر للاستكشاف",lgHQ:"المكتب الرئيسي · الدمام",lgP:"مواقع المشاريع",
 hEst:"التأسيس",hCR:"السجل التجاري",hIso:"معتمدون",
 heroL:["نهندس","مستقبل المملكة","<span class='it'>الأقوى</span>"],
 mani:"منذ 2012 نصمم ونورد ونبني *المنشآت* التي تدفع المملكة إلى الأمام: *محطات* *الغاز* *والمستشفيات* وأنظمة الطاقة والبنية التحتية للمياه، وفق *معايير* *أرامكو.*",
 hzE:"خبراتنا القطاعية",hzH:"ثمانية قطاعات.<br><span class='it'>معيار واحد.</span>",svE:"قدراتنا",svH2:"تنفيذ متكامل<br><span class='it'>من البداية للنهاية</span>",
 prE:"أعمال مختارة",prH2:"مشاريع<br><span class='it'>تمد المملكة بالطاقة</span>",mq:["الهندسة","المشتريات","الإنشاء","التشغيل والصيانة"],
 ctaE:"ابدأ مشروعك",ctaH2:"لنبنِ<br><span class='it'>المستقبل</span>",ctaSub:"حدثنا عن نطاق مشروعك، وسيتواصل معك مهندسونا في الدمام بالخطوات التالية.",
 gall:"من الميدان",facts:"حقائق رئيسية"});


export const NAV=["home","about","services","sectors","projects","partners","contact"];
export const NAVIMG={home:"hero",about:"about",services:"piperack",sectors:"towers",projects:"scaffold",partners:"refinery",contact:"site"};
export {V2030,FOCUS,CAPS,SECTORS,CATS,PROJ,PARTNERS,CLIENTS,CERTS,GP,SLUG,SIMG,SREL,PIMG,PSEC,ICON,CAPX,CAPIMG,STEPS,VALS,CITIES,KSA,T};
