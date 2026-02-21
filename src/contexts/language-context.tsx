                                                  "use client"
import { createContext, useContext, useState, useEffect } from "react"
import type React from "react"

export type Language = "en" | "fa" | "ps"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

// Comprehensive translations
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    "header.home": "Home",
    "header.about": "About Us",
    "header.aboutOverview": "Overview",
    "header.aboutMissionVision": "Mission & Vision",
    "header.aboutCoreValues": "Core Values",
    "header.aboutBackground": "Our Team",
    "header.programs": "Programs",
    "header.news": "News",
    "header.videos": "Videos",
    "header.media": "Media",
    "header.impact": "Impact",
    "header.contact": "Contact",
    "header.donate": "Donate Now",
    "header.orgName": "Beyond Borders Empowerment",
    "header.regNumber": "",
    "header.donateShort": "Donate",

    // Hero Section
    "hero.badge": "",
    "hero.title1": "Empowering Girls",
    "hero.title2": "Helping Communities",
    "hero.title3": "Transforming Lives",
    "hero.description":
      "Beyond Borders Empowerment (BBE) is a women-led, non-profit organisation dedicated to fostering systemic change in marginalized communities. By centering women, youth, and children as agents of their own development, BBE addresses entrenched inequities arising from conflict, poverty, and social exclusion. Through an integrated portfolio of initiatives—including inclusive quality education, equitable healthcare access, economic empowerment, and context-driven innovation—BBE cultivates sustainable pathways for resilience, social transformation, sustainability, and long-term community prosperity.",
    "hero.supportMission": "Support Our Mission",
    "hero.getInvolved": "Get Involved",
    "hero.learnMore": "Learn More",
    "hero.livesImpacted": "Lives Impacted",
    "hero.imageAlt": "BBE Community Support",

    // About Section
    "about.title": "About Beyond Borders Empowerment",
    "about.subtitle": "Organizational Background",
    "about.storyTitle": "Organizational Background",
    "about.storyText1":
      "Beyond Borders Empowerment (BBE) is a registered nonprofit organization founded in early 2023 by a dedicated team of professionals, including educators, university professors, writers, medical doctors, journalists, human rights defenders, and legal experts. BBE is built on the philosophy and principles of human rights, social justice, respect for human dignity, and collective efforts to foster growth and empowerment. At BBE, we work tirelessly towards sustainable outcomes, and we believe in the principle that \"we teach our communities to fish, instead of giving them a fish.\" We are confident that such self-sufficiency and sustainability can only be achieved by ensuring equal rights and opportunities for all, enabling everyone to reach their maximum potential and make a difference — including women and girls, who make up half of the population.",
    "about.storyText2":
      "That said, we prioritize not only meeting immediate needs but also fostering long-term sustainable development by equipping marginalized communities with the resources necessary for self-reliance. Since our founding, we have stood firmly committed to empowering marginalized communities by providing access to quality education, fostering economic independence through entrepreneurship and employment, and supporting access to essential healthcare, as well as providing humanitarian aid during crises. Through sustainable, community-led initiatives, we strive to close social gaps and equip individuals to become agents of lasting change.",
    "about.teamText": "Dedicated team of professionals",
    "about.missionTitle": "Our Mission",
    "about.missionText":
      "Our mission is to empower marginalized communities, particularly women and girls, by providing access to quality education, fostering economic independence through entrepreneurship, creating employment opportunities, and delivering essential humanitarian aid.",
    "about.visionTitle": "Our Vision",
    "about.visionText":
      "We envision a future where geographical and social barriers no longer dictate an individual's potential. We strive for a world where every girl and woman has the opportunity to achieve her dreams and contribute to a more equitable society.",
    "about.valuesTitle": "Our Core Values",
    "about.valuesSubtitle": "The principles that guide everything we do",
    "about.inclusiveness": "Inclusiveness",
    "about.inclusivenessDesc": "Fostering inclusiveness for marginalized groups",
    "about.sustainability": "Sustainability",
    "about.sustainabilityDesc": "Creating long-term, sustainable impacts",
    "about.accountability": "Accountability",
    "about.accountabilityDesc": "Operating with transparency and integrity",
    "about.empowerment": "Community Empowerment",
    "about.empowermentDesc": "Building local capacity and ownership",
    "about.dignity": "Respect for Dignity",
    "about.dignityDesc": "Treating every individual with respect",

    // Programs Section
    "programs.title": "Our Programs",
    "programs.subtitle": "Comprehensive programs designed to create lasting impact in communities",
    "programs.education": "Education Programs",
    "programs.educationDesc": "Bridging the education gap through virtual and in-person learning",
    "programs.healthcare": "Healthcare Support",
    "programs.healthcareDesc": "Comprehensive mental and physical health services",
    "programs.economic": "Economic Empowerment",
    "programs.economicDesc": "Fostering entrepreneurship and financial independence",
    "programs.orphans": "Bright Futures: Our Orphan Support Program",
    "programs.orphansDesc": "Comprehensive care and education for vulnerable children",
    "programs.rights": "Human Rights Advocacy",
    "programs.rightsDesc": "Promoting social justice and documenting violations",
    "programs.emergency": "Emergency Aid",
    "programs.emergencyDesc": "Immediate humanitarian assistance and recovery support",
    "programs.refugeeSupport": "Refugee Support Program",
    "programs.refugeeSupportDesc": "Standing in solidarity with refugees in the UK through community gatherings and empowerment sessions",

    // Program Features
    "programs.virtualClasses": "Virtual English and computer classes",
    "programs.onGroundSchools": "Three on-ground schools",
    "programs.stemEducation": "STEM education",
    "programs.certifiedPrograms": "Certified programs",
    "programs.mobileHealthClinics": "Mobile health clinics",
    "programs.mentalHealthCounseling": "Mental health counseling",
    "programs.healthcareCapacity": "Healthcare capacity building",
    "programs.emergencyMedical": "Emergency medical support",
    "programs.businessTraining": "Business training",
    "programs.microfinanceAccess": "Microfinance access",
    "programs.freelancePlatforms": "Freelance platforms",
    "programs.technicalSkills": "Technical skills training",
    "programs.educationalSupport": "Educational support",
    "programs.nutritionalPrograms": "Nutritional programs",
    "programs.skillsTraining": "Skills training",
    "programs.emotionalSupport": "Emotional support",
    "programs.rightsWorkshops": "Rights education workshops",
    "programs.documentationEfforts": "Documentation efforts",
    "programs.communityAdvocacy": "Community advocacy",
    "programs.policyResearch": "Policy research",
    "programs.foodShelter": "Food and shelter",
    "programs.medicalSupplies": "Medical supplies",
    "programs.disasterResponse": "Disaster response",
    "programs.recoveryPlanning": "Recovery planning",

    // News Section
    "news.title": "Latest News & Updates",
    "news.subtitle": "Stay updated with our latest initiatives, achievements, and impact stories",
    "news.featured": "Featured",
    "news.readMore": "Read More",
    "news.readFull": "Read Full Article",
    "news.viewAll": "View All News",
    "news.minRead": "min read",
    "news.education": "Education",
    "news.partnership": "Partnership",
    "news.healthcare": "Healthcare",
    "news.skillsTraining": "Skills Training",
    "news.emergencyAid": "Emergency Aid",
    "news.economicEmpowerment": "Economic Empowerment",
    "news.showLess": "Show Less",
    "news.fullArticle": "Full Article",
    "news.backToNews": "Back to News",
    "news.latest": "Latest Updates",
    "news.moreNews": "More News",
    "news.likeArticle": "Like Article",
    "news.shareArticle": "Share Article",
    "news.shareOn": "Share on",
    "news.copyLink": "Copy Link",
    "news.linkCopied": "Link Copied!",

    // Videos Section
    "videos.title": "Our Impact in Action",
    "videos.subtitle": "Watch our journey of empowerment through these inspiring videos",
    "videos.featured": "Featured Video",
    "videos.watchNow": "Watch Now",
    "videos.moreVideos": "More Videos",
    "videos.viewAll": "View All Videos",
    "videos.showLess": "Show Less",
    "videos.views": "views",

    // Donation Section
    "donate.title": "Make a Difference Today",
    "donate.subtitle":
      "Your donation directly impacts lives. Choose how you'd like to support our mission of empowering communities and transforming lives.",
    "donate.impact25": "Provides one month of virtual English classes for a student",
    "donate.impact50": "Supports educational materials for 5 students in our on-ground schools",
    "donate.impact100": "Funds a complete entrepreneurship training program for one woman",
    "donate.mostPopular": "Most Popular",
    "donate.chooseAmount": "Choose Your Donation",
    "donate.everyContribution": "Every contribution makes a meaningful difference in someone's life",
    "donate.oneTime": "One-Time Donation",
    "donate.oneTimeDesc": "Make an immediate impact with a single donation",
    "donate.monthly": "Monthly Giving",
    "donate.monthlyDesc": "Provide sustained support with recurring donations",
    "donate.selectAmount": "Select Amount",
    "donate.customAmount": "Enter custom amount",
    "donate.specificProgram": "Support a Specific Program (Optional)",
    "donate.donorInfo": "Donor Information",
    "donate.firstName": "First Name",
    "donate.lastName": "Last Name",
    "donate.email": "Email Address",
    "donate.phone": "Phone Number",
    "donate.address": "Address",
    "donate.paymentMethod": "Payment Method",
    "donate.cardNumber": "Card Number",
    "donate.expiryMonth": "Expiry Month",
    "donate.expiryYear": "Expiry Year",
    "donate.anonymous": "Make this donation anonymous",
    "donate.newsletter": "Subscribe to our newsletter for updates on our impact",
    "donate.giftAid":
      "I am a UK taxpayer and would like BBE to reclaim Gift Aid on my donation (adds 25% to your donation at no cost to you)",
    "donate.summary": "Donation Summary",
    "donate.amount": "Donation Amount",
    "donate.processingFee": "Processing Fee",
    "donate.giftAidAmount": "Gift Aid (25%)",
    "donate.totalImpact": "Total Impact",
    "donate.completeDonation": "Complete Donation",
    "donate.secureEncrypted": "Your donation is secure and encrypted",
    "donate.taxDeductible":
      "Beyond Borders Empowerment is a registered charity. Your donation is tax-deductible where applicable.",
    "donate.donationType": "Donation Type",
    "donate.creditDebitCard": "Credit/Debit Card",
    "donate.paypal": "PayPal",
    "donate.bankTransfer": "Bank Transfer",
    "donate.cvv": "CVV",
    "donate.whereNeeded": "Where Most Needed",
    "donate.currentGoals": "Current Fundraising Goals",
    "donate.goalsSubtitle": "Help us reach our targets for maximum impact",
    "donate.virtualEducationExpansion": "Virtual Education Expansion",
    "donate.mobileHealthClinic": "Mobile Health Clinic",
    "donate.funded": "funded",
    "donate.helpReachStudents": "Help us reach 500 more students",
    "donate.bringingHealthcare": "Bringing healthcare to remote areas",

    // Impact Section
    "impact.title": "Our Impact So Far",
    "impact.subtitle": "Making a measurable difference in communities across Afghanistan and beyond",
    "impact.girlsBenefiting": "Girls Benefiting from Programs",
    "impact.studentsVirtual": "Students in Virtual Classes",
    "impact.orphansSupported": "Orphaned Children Supported",
    "impact.provincesReached": "Provinces Reached",

    // Testimonials Section
    "testimonials.title": "Success Stories",
    "testimonials.subtitle": "Real stories from the communities we serve",
    "testimonials.clickToReadMore": "Click to read more",
    "testimonials.quote1":
      "The virtual English classes have opened new opportunities for me. I can now communicate with people from around the world.",
    "testimonials.name1": "Fatima",
    "testimonials.role1": "Student, Virtual Education Program",
    "testimonials.quote2":
      "Thanks to the business training, I was able to start my own small enterprise and support my family.",
    "testimonials.name2": "Mariam",
    "testimonials.role2": "Entrepreneur, Economic Empowerment Program",
    "testimonials.quote3":
      "The support we received during difficult times gave us hope and the strength to continue our education.",
    "testimonials.name3": "Ahmad",
    "testimonials.role3": "Student, On-ground School",

    // CTA Section
    "cta.title": "Join Our Mission",
    "cta.subtitle":
      "Your support can help break barriers and uplift marginalized communities. Together, we can build a brighter, more inclusive future where every girl has the opportunity to learn, grow, and thrive.",
    "cta.donate": "Donate",
    "cta.donateDesc": "Fund critical programs",
    "cta.volunteer": "Volunteer",
    "cta.volunteerDesc": "Share your skills",
    "cta.partner": "Partner",
    "cta.partnerDesc": "Collaborate with us",
    "cta.makeDonation": "Make a Donation",
    "cta.volunteerWith": "Volunteer With Us",
    "cta.partnerWith": "Partner With Us",

    // Contact Section
    "contact.title": "Get In Touch",
    "contact.subtitle": "Ready to make a difference? Contact us today.",
    "contact.info": "Contact Information",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.website": "Website",
    "contact.offices": "Office Locations",
    "contact.mainOffice": "Main Office (UK)",
    "contact.countryOffice": "Country Office (Afghanistan)",
    "contact.sendMessage": "Send us a Message",
    "contact.messageDesc": "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
    "contact.subject": "Subject",
    "contact.message": "Your Message",
    "contact.sendBtn": "Send Message",

    // Footer
    "footer.tagline": "Empowering Girls • Helping Communities • Transforming Lives",
    "footer.description":
      "Dedicated to promoting human rights, improving healthcare conditions, and providing access to education in vulnerable regions, with a special focus on empowering women and girls in Afghanistan.",
    "footer.supportUs": "Support Us",
    "footer.goFundMe": "Go Fund Me",
    "footer.ourPrograms": "Our Programs",
    "footer.virtualEducation": "Virtual Education",
    "footer.virtualEducationStat": "400+ students across Afghanistan",
    "footer.orphanSupport": "Orphan Support",
    "footer.orphanSupportStat": "110 children in Kabul orphanages",
    "footer.womenEmpowerment": "Women Empowerment",
    "footer.womenEmpowermentStat": "11 women startups supported",
    "footer.emergencyRelief": "Emergency Relief",
    "footer.emergencyReliefStat": "20+ families assisted",
    "footer.followOurJourney": "Follow Our Journey",
    "footer.copyrightLine": "© 2025 Beyond Borders Empowerment Foundation",
    "footer.registrationLine": "Registered in England and Wales | Charity Registration: 15570506",
    "footer.companiesHouse": "Companies House",
    "footer.quickLinks": "Quick Links",
    "footer.getInvolved": "Get Involved",
    "footer.volunteer": "Volunteer",
    "footer.partner": "Partner",
    "footer.newsletter": "Newsletter",
    "footer.copyright": " 2025 Beyond Borders Empowerment. All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",

    // Publications
    "publications.title": "Publications",
    "publications.subtitle": "Explore our annual reports, student library, and narratives from our community",
    "publications.annualReports": "Annual Reports",
    "publications.financialReports": "Financial Reports",
    "publications.financialReportsDesc": "Comprehensive financial statements and transparency reports detailing our use of funds and resources.",
    "publications.narrativeReports": "Narrative Reports",
    "publications.narrativeReportsDesc": "Detailed accounts of our programs, impact stories, and achievements throughout the year.",
    "publications.downloadReports": "Download Reports",
    "publications.libraryTitle": "Books/Student Library",
    "publications.libraryDesc": "Our student library provides access to educational resources, books, and learning materials to support students in their academic journey. We curate collections that are relevant to our programs and accessible to students across different regions.",
    "publications.libraryNote": "Library resources are available to all enrolled students. Contact us for access information.",
    "publications.narrativesTitle": "Students' Narratives",
    "publications.narrativesDesc": "Read powerful stories from our students sharing their journeys, challenges, achievements, and how our programs have impacted their lives. These narratives reflect the resilience, determination, and hope that drive our community forward.",
    "publications.narrativesNote": "Student narratives are shared with permission and celebrate the voices of our community members.",
  },

  fa: {
    // Header - Persian/Farsi
    "header.home": "خانه",
    "header.about": "درباره ما",
    "header.aboutOverview": "نمای کلی",
    "header.aboutMissionVision": "ماموریت و چشم‌انداز",
    "header.aboutCoreValues": "ارزش‌های اصلی",
    "header.aboutBackground": "تیم ما",
    "header.programs": "برنامه‌ها",
    "header.news": "اخبار",
    "header.videos": "ویدیوها",
    "header.media": "رسانه",
    "header.impact": "تأثیر",
    "header.contact": "تماس",
    "header.donate": "کمک مالی",
    "header.orgName": "توانمندسازی فراتر از مرزها",
    "header.regNumber": "",
    "header.donateShort": "کمک",

    // Hero Section
    "hero.badge": "",
    "hero.title1": "توانمندسازی دختران",
    "hero.title2": "کمک به جوامع",
    "hero.title3": "تغییر زندگی‌ها",
    "hero.description":
      "توانمندسازی فراتر از مرزها به ترویج حقوق بشر، بهبود شرایط بهداشتی و دسترسی به آموزش در مناطق آسیب‌پذیر اختصاص دارد، با تمرکز ویژه بر توانمندسازی زنان و دختران در افغانستان.",
    "hero.supportMission": "از ماموریت ما حمایت کنید",
    "hero.getInvolved": "مشارکت کنید",
    "hero.learnMore": "بیشتر بدانید",
    "hero.livesImpacted": "زندگی‌های تحت تأثیر",

    // About Section
    "about.title": "درباره توانمندسازی فراتر از مرزها",
    "about.subtitle":
      "در اوایل سال ۲۰۲۳ توسط تیمی متعهد از متخصصان شامل معلمان، پزشکان، روزنامه‌نگاران و مدافعان حقوق بشر تأسیس شد.",
    "about.storyTitle": "داستان ما",
    "about.storyText1":
      "توانمندسازی فراتر از مرزها بر اساس اصول حقوق بشر، عدالت اجتماعی و احترام به کرامت انسانی تأسیس شده است. ما معتقدیم که یک جامعه نمی‌تواند به رشد و توسعه پایدار دست یابد بدون اینکه حقوق و فرصت‌های برابر برای همه، به ویژه برای زنان که نیمی از جمعیت را تشکیل می‌دهند، تضمین کند.",
    "about.storyText2":
      "سازمان ما به طور خاص متعهد به توانمندسازی زنان و دختران در افغانستان و سایر مناطق کم‌برخوردار است و اطمینان حاصل می‌کند که آنها به آموزش، مراقبت‌های بهداشتی و فرصت‌های اقتصادی دسترسی داشته باشند.",
    "about.teamText": "تیم متعهد متخصصان",
    "about.missionTitle": "ماموریت ما",
    "about.missionText":
      "ماموریت ما توانمندسازی جوامع حاشیه‌نشین، به ویژه زنان و دختران، از طریق ارائه دسترسی به آموزش با کیفیت، تقویت استقلال اقتصادی از طریق کارآفرینی، ایجاد فرصت‌های شغلی و ارائه کمک‌های انسان‌دوستانه ضروری است.",
    "about.visionTitle": "چشم‌انداز ما",
    "about.visionText":
      "دیدن افغانستان و سایر مناطقی که با چالش‌های مشابه روبرو هستند به عنوان مکان‌هایی که هر فرد دسترسی برابر به آموزش، سلامت، فرصت‌های اقتصادی و توسعه پایدار دارد، صرف نظر از جنسیت، نژاد، پیشینه یا زبان.",
    "about.valuesTitle": "ارزش‌های اصلی ما",
    "about.valuesSubtitle": "اصولی که همه کارهای ما را راهنمایی می‌کند",
    "about.inclusiveness": "فراگیری",
    "about.inclusivenessDesc": "تقویت فراگیری برای گروه‌های حاشیه‌نشین",
    "about.sustainability": "پایداری",
    "about.sustainabilityDesc": "ایجاد تأثیرات بلندمدت و پایدار",
    "about.accountability": "پاسخگویی",
    "about.accountabilityDesc": "عمل با شفافیت و صداقت",
    "about.empowerment": "توانمندسازی جامعه",
    "about.empowermentDesc": "ایجاد ظرفیت و مالکیت محلی",
    "about.dignity": "احترام به کرامت",
    "about.dignityDesc": "رفتار محترمانه با هر فرد",

    // Programs Section
    "programs.title": "برنامه‌های ما",
    "programs.subtitle": "برنامه‌های جامع طراحی شده برای ایجاد تأثیر ماندگار در جوامع",
    "programs.education": "برنامه‌های آموزشی",
    "programs.educationDesc": "پر کردن شکاف آموزشی از طریق یادگیری مجازی و حضوری",
    "programs.healthcare": "پشتیبانی بهداشتی",
    "programs.healthcareDesc": "خدمات جامع سلامت روان و جسمی",
    "programs.economic": "توانمندسازی اقتصادی",
    "programs.economicDesc": "تقویت کارآفرینی و استقلال مالی",
    "programs.orphans": "آینده‌های روشن: برنامه حمایت از یتیمان ما",
    "programs.orphansDesc": "مراقبت و آموزش جامع برای کودکان آسیب‌پذیر",
    "programs.rights": "حمایت از حقوق بشر",
    "programs.rightsDesc": "ترویج عدالت اجتماعی و مستندسازی تخلفات",
    "programs.emergency": "کمک‌های اضطراری",
    "programs.emergencyDesc": "کمک‌های فوری انسان‌دوستانه و پشتیبانی بازسازی",
    "programs.refugeeSupport": "Refugee Support Program",
    "programs.refugeeSupportDesc": "Standing in solidarity with refugees in the UK through community gatherings and empowerment sessions",

  },

  ps: {
    // Programs Section
    "programs.title": "زموږ پروګرامونه",
    "programs.subtitle": "شامل پروګرامونه چې په ټولنو کې د تلپاتې اغیزې رامینځته کولو لپاره ډیزاین شوي",
    "programs.education": "د زده کړې پروګرامونه",
    "programs.educationDesc": "د مجازی او حضوري زده کړې له لارې د زده کړې تشه ډکول",
    "programs.healthcare": "د روغتیا پاملرنې ملاتړ",
    "programs.healthcareDesc": "د رواني او فزیکي روغتیا جامع خدمات",
    "programs.economic": "اقتصادي پیاوړتیا",
    "programs.economicDesc": "د سوداګرۍ او مالي خپلواکۍ پیاوړتیا",
    "programs.orphans": "روښانه راتلونکې: زموږ د یتیمانو د ملاتړ پروګرام",
    "programs.orphansDesc": "د زیان منونکو ماشومانو لپاره جامع پاملرنه او زده کړه",
    "programs.rights": "د بشري حقونو ملاتړ",
    "programs.rightsDesc": "د ټولنیز عدالت ته وده ورکول او د سرغړونو مستند کول",
    "programs.emergency": "د بیړنیو مرستو",
    "programs.emergencyDesc": "فوري بشردوستانه مرستې او د بیارغونې ملاتړ",
    "programs.refugeeSupport": "Refugee Support Program",
    "programs.refugeeSupportDesc": "Standing in solidarity with refugees in the UK through community gatherings and empowerment sessions",

    // Program Features
    "programs.virtualClasses": "مجازی انګلیسي او کمپیوټر ټولګي",
    "programs.onGroundSchools": "درې حضوري ښوونځي",
    "programs.stemEducation": "د STEM زده کړه",
    "programs.certifiedPrograms": "تصدیق شوي پروګرامونه",
    "programs.mobileHealthClinics": "د ګرځنده روغتیا کلینیکونه",
    "programs.mentalHealthCounseling": "د رواني روغتیا مشوره",
    "programs.healthcareCapacity": "د روغتیا پاملرنې ظرفیت رامینځته کول",
    "programs.emergencyMedical": "د بیړني طبي ملاتړ",
    "programs.businessTraining": "د سوداګرۍ روزنه",
    "programs.microfinanceAccess": "د کوچني مالي تمویل ته لاسرسی",
    "programs.freelancePlatforms": "د آزاد کار پلیټ فارمونه",
    "programs.technicalSkills": "د تخنیکي مهارتونو روزنه",
    "programs.educationalSupport": "د زده کړې ملاتړ",
    "programs.nutritionalPrograms": "د تغذیې پروګرامونه",
    "programs.skillsTraining": "د مهارتونو روزنه",
    "programs.emotionalSupport": "احساساتي ملاتړ",
    "programs.rightsWorkshops": "د حقونو د زده کړې ورکشاپونه",
    "programs.documentationEfforts": "د مستند کولو هڅې",
    "programs.communityAdvocacy": "د ټولنې ملاتړ",
    "programs.policyResearch": "د پالیسۍ څیړنه",
    "programs.foodShelter": "خواړه او سرپناه",
    "programs.medicalSupplies": "طبي توکي",
    "programs.disasterResponse": "د ناورین ځواب",
    "programs.recoveryPlanning": "د بیارغونې پلان جوړونه",

    // News Section
    "news.title": "وروستي خبرونه او تازه معلومات",
    "news.subtitle": "زموږ د وروستیو نوښتونو، لاسته راوړنو او اغیزو کیسو څخه خبر اوسئ",
    "news.featured": "ځانګړی",
    "news.readMore": "نور ولولئ",
    "news.readFull": "بشپړه مقاله ولولئ",
    "news.viewAll": "ټول خبرونه وګورئ",
    "news.minRead": "دقیقې لوستل",
    "news.education": "زده کړه",
    "news.partnership": "ملګرتیا",
    "news.healthcare": "روغتیا پالنه",
    "news.skillsTraining": "د مهارتونو روزنه",
    "news.emergencyAid": "د بیړنیو مرستو",
    "news.economicEmpowerment": "اقتصادي پیاوړتیا",
    "news.showLess": "لږ وښایاست",
    "news.fullArticle": "بشپړه مقاله",
    "news.backToNews": "خبرونو ته بیرته",
    "news.latest": "وروستي تازه معلومات",
    "news.moreNews": "نور خبرونه",
    "news.likeArticle": "د مقالې خوښول",
    "news.shareArticle": "د مقالې شریکول",
    "news.shareOn": "شریکول په",
    "news.copyLink": "لینک کاپي کړئ",
    "news.linkCopied": "لینک کاپي شو!",

    // Videos Section
    "videos.title": "زموږ اغیزه په عمل کې",
    "videos.subtitle": "د دې الهام بخښونکو ویډیوګانو له لارې زموږ د پیاوړتیا سفر وګورئ",
    "videos.featured": "ځانګړې ویډیو",
    "videos.watchNow": "اوس وګورئ",
    "videos.moreVideos": "نورې ویډیوګانې",
    "videos.viewAll": "ټولې ویډیوګانې وګورئ",
    // "news.showLess": "لږ وښایاست",
    "videos.views": "لیدونه",

    // Donation Section
    "donate.title": "نن ورځ بدلون راولئ",
    "donate.subtitle":
      "ستاسو مرسته مستقیم ژوند اغیزمن کوي. غوره کړئ چې تاسو څنګه غواړئ د ټولنو د پیاوړتیا او د ژوند د بدلون لپاره زموږ د ماموریت ملاتړ وکړئ.",
    "donate.impact25": "د یو زده کونکي لپاره د یوې میاشتې مجازی انګلیسي ټولګي چمتو کوي",
    "donate.impact50": "زموږ په حضوري ښوونځیو کې د 5 زده کونکو لپاره د زده کړې موادو ملاتړ کوي",
    "donate.impact100": "د یوې میرمنې لپاره د سوداګرۍ بشپړ روزنیز پروګرام تمویلوي",
    "donate.mostPopular": "ډیر مشهور",
    "donate.chooseAmount": "خپله مرسته غوره کړئ",
    "donate.everyContribution": "هره مرسته د یو چا په ژوند کې د پام وړ بدلون راولي",
    "donate.oneTime": "یو ځل مرسته",
    "donate.oneTimeDesc": "د یوې واحدې مرستې سره فوري اغیزه وکړئ",
    "donate.monthly": "میاشتنۍ مرسته",
    "donate.monthlyDesc": "د تکراري مرستو سره دوامداره ملاتړ چمتو کړئ",
    "donate.selectAmount": "مقدار وټاکئ",
    "donate.customAmount": "دودیز مقدار دننه کړئ",
    "donate.specificProgram": "د یو ځانګړي پروګرام ملاتړ وکړئ (اختیاري)",
    "donate.donorInfo": "د مرسته کونکي معلومات",
    "donate.firstName": "نوم",
    "donate.lastName": "تخلص",
    "donate.email": "بریښنالیک ادرس",
    "donate.phone": "د تلیفون شمیره",
    "donate.address": "پته",
    "donate.paymentMethod": "د تادیې طریقه",
    "donate.cardNumber": "د کارت شمیره",
    "donate.expiryMonth": "د ختمیدو میاشت",
    "donate.expiryYear": "د ختمیدو کال",
    "donate.anonymous": "دا مرسته پټه کړئ",
    "donate.newsletter": "زموږ د اغیزې په اړه د تازه معلوماتو لپاره زموږ خبر پاڼه کې ګډون وکړئ",
    "donate.giftAid":
      "زه د انګلستان مالیه ورکوونکی یم او غواړم چې BBE زما د مرستې ډالۍ مرسته بیرته ترلاسه کړي (ستاسو مرستې ته 25٪ اضافه کوي پرته له کوم لګښت څخه)",
    "donate.summary": "د مرستې لنډیز",
    "donate.amount": "د مرستې مقدار",
    "donate.processingFee": "د پروسس فیس",
    "donate.giftAidAmount": "د ډالۍ مرسته (25٪)",
    "donate.totalImpact": "ټوله اغیزه",
    "donate.completeDonation": "مرسته بشپړه کړئ",
    "donate.secureEncrypted": "ستاسو مرسته خوندي او کوډ شوې ده",
    "donate.taxDeductible":
      "د پولو څخه هاخوا پیاوړتیا یوه ثبت شوې خیریه اداره ده. ستاسو مرسته د مالیې وړ ده چیرې چې پلي کیږي.",
    "donate.donationType": "د مرستې ډول",
    "donate.creditDebitCard": "د کریډیټ / ډیبیټ کارت",
    "donate.paypal": "پی پال",
    "donate.bankTransfer": "بانکي لیږد",
    "donate.cvv": "CVV",
    "donate.whereNeeded": "هغه ځای کې چې ډیره اړتیا ده",
    "donate.currentGoals": "د اوسني بسپنې راټولولو موخې",
    "donate.goalsSubtitle": "له موږ سره مرسته وکړئ ترڅو د اعظمي اغیزې لپاره خپلو موخو ته ورسیږو",
    "donate.virtualEducationExpansion": "د مجازی زده کړې پراختیا",
    "donate.mobileHealthClinic": "د ګرځنده روغتیا کلینیک",
    "donate.funded": "تمویل شوی",
    "donate.helpReachStudents": "له موږ سره مرسته وکړئ ترڅو 500 نورو زده کونکو ته ورسیږو",
    "donate.bringingHealthcare": "لرې پرتو سیمو ته د روغتیا پاملرنې راوړل",

    // Impact Section
    "impact.title": "تر دې دمه زموږ اغیزه",
    "impact.subtitle": "په ټول افغانستان او له هغې هاخوا په ټولنو کې د اندازه کولو وړ بدلون رامینځته کول",
    "impact.girlsBenefiting": "نجونې د پروګرامونو څخه ګټه پورته کوي",
    "impact.studentsVirtual": "زده کونکي په مجازی ټولګیو کې",
    "impact.orphansSupported": "د یتیمو ماشومانو ملاتړ شوی",
    "impact.provincesReached": "ولایتونو ته رسیدلی",

    // Testimonials Section
    "testimonials.title": "د بریا کیسې",
    "testimonials.subtitle": "د هغو ټولنو ریښتینې کیسې چې موږ یې خدمت کوو",
    "testimonials.clickToReadMore": "د نور لوستلو لپاره کلیک وکړئ",
    "testimonials.quote1":
      "مجازی انګلیسي ټولګیو ما ته نوې فرصتونه پرانیستي دي. زه اوس کولی شم د نړۍ له ګوټ ګوټ څخه له خلکو سره اړیکه ونیسم.",
    "testimonials.name1": "فاطمه",
    "testimonials.role1": "زده کونکی، د مجازی زده کړې پروګرام",
    "testimonials.quote2":
      "د سوداګرۍ روزنې څخه مننه، زه وتوانیدم چې خپله کوچنۍ سوداګري پیل کړم او د خپلې کورنۍ ملاتړ وکړم.",
    "testimonials.name2": "مریم",
    "testimonials.role2": "سوداګره، د اقتصادي پیاوړتیا پروګرام",
    "testimonials.quote3":
      "هغه ملاتړ چې موږ په سختو وختونو کې ترلاسه کړ، موږ ته یې هیله او د زده کړې د دوام لپاره ځواک راکړ.",
    "testimonials.name3": "احمد",
    "testimonials.role3": "زده کونکی، حضوري ښوونځی",

    // CTA Section
    "cta.title": "زموږ ماموریت سره یوځای شئ",
    "cta.subtitle":
      "ستاسو ملاتړ کولی شي د خنډونو په ماتولو او د حاشیه ای ټولنو په لوړولو کې مرسته وکړي. په ګډه، موږ کولی شو یو روښانه، ډیر ټول شموله راتلونکی جوړ کړو چیرې چې هره انجلۍ د زده کړې، ودې او پرمختګ فرصت ولري.",
    "cta.donate": "مرسته وکړئ",
    "cta.donateDesc": "د مهمو پروګرامونو تمویل",
    "cta.volunteer": "رضاکار",
    "cta.volunteerDesc": "خپل مهارتونه شریک کړئ",
    "cta.partner": "شریک",
    "cta.partnerDesc": "له موږ سره همکاري وکړئ",
    "cta.makeDonation": "مرسته وکړئ",
    "cta.volunteerWith": "له موږ سره رضاکار شئ",
    "cta.partnerWith": "له موږ سره شریک شئ",

    // Contact Section
    "contact.title": "اړیکه ونیسئ",
    "contact.subtitle": "د بدلون راوستلو ته چمتو یاست؟ نن ورځ له موږ سره اړیکه ونیسئ.",
    "contact.info": "د اړیکې معلومات",
    "contact.phone": "تلیفون",
    "contact.email": "بریښنالیک",
    "contact.website": "ویب پاڼه",
    "contact.offices": "د دفتر ځایونه",
    "contact.mainOffice": "اصلي دفتر (انګلستان)",
    "contact.countryOffice": "د هیواد دفتر (افغانستان)",
    "contact.sendMessage": "پیغام واستوئ",
    "contact.messageDesc": "موږ خوښ یو چې ستاسو څخه واورو. موږ ته پیغام واستوئ او موږ به ژر تر ژره ځواب ووایو.",
    "contact.subject": "موضوع",
    "contact.message": "ستاسو پیغام",
    "contact.sendBtn": "پیغام واستوئ",

    // Footer
    "footer.tagline": "د نجونو پیاوړتیا • د ټولنو سره مرسته • د ژوند بدلون",
    "footer.description":
      "د بشري حقونو ته وده ورکولو، د روغتیایي شرایطو ښه کولو، او په زیان منونکو سیمو کې زده کړو ته د لاسرسي چمتو کولو ته وقف شوی، په افغانستان کې د میرمنو او نجونو پیاوړتیا ته ځانګړې پاملرنه سره.",
    "footer.supportUs": "زموږ ملاتړ وکړئ",
    "footer.goFundMe": "ګو فنډ می",
    "footer.ourPrograms": "زموږ پروګرامونه",
    "footer.virtualEducation": "مجازی زده کړه",
    "footer.virtualEducationStat": "۴۰۰+ زده کوونکي په ټول افغانستان کې",
    "footer.orphanSupport": "د یتیمانو ملاتړ",
    "footer.orphanSupportStat": "۱۱۰ ماشومان د کابل یتیمخانو کې",
    "footer.womenEmpowerment": "د ښځو پیاوړتیا",
    "footer.womenEmpowermentStat": "۱۱ د ښځو سوداګرۍ ملاتړ شوې",
    "footer.emergencyRelief": "بیړنۍ مرستې",
    "footer.emergencyReliefStat": "۲۰+ کورنۍ مرسته ترلاسه کړه",
    "footer.followOurJourney": "زموږ سفر تعقیب کړئ",
    "footer.copyrightLine": "© 2025 د پولو څخه هاخوا پیاوړتیا بنسټ",
    "footer.registrationLine": "په انګلستان او وېلز کې ثبت | د خیریه ثبت: 15570506",
    "footer.companiesHouse": "کمپنۍ هاوس",
    "footer.quickLinks": "چټک لینکونه",
    "footer.getInvolved": "ګډون وکړئ",
    "footer.volunteer": "رضاکار",
    "footer.partner": "شریک",
    "footer.newsletter": "خبر پاڼه",
    "footer.copyright": " 2025 د پولو څخه هاخوا پیاوړتیا. ټول حقونه خوندي دي.",
    "footer.privacy": "د محرمیت پالیسي",
    "footer.terms": "د خدماتو شرایط",

    // Publications
    "publications.title": "خپرونې",
    "publications.subtitle": "زموږ کلني راپورونه، د زده کوونکو کتابتون، او د ټولنې کیسې وګورئ",
    "publications.annualReports": "کلني راپورونه",
    "publications.financialReports": "مالي راپورونه",
    "publications.financialReportsDesc": "د مالي شفافیت او د سرچینو/بودجې د کارولو جامع راپورونه.",
    "publications.narrativeReports": "روایتي راپورونه",
    "publications.narrativeReportsDesc": "د پروګرامونو، اغیزو کیسو او لاسته راوړنو مفصل راپورونه.",
    "publications.downloadReports": "راپورونه ډاونلوډ کړئ",
    "publications.libraryTitle": "کتابتون / د زده کوونکو منابع",
    "publications.libraryDesc": "زموږ د زده کوونکو کتابتون ښوونیزو منابعو، کتابونو او د زده کړې موادو ته لاسرسی برابروي.",
    "publications.libraryNote": "منابع د ټولو ثبت شویو زده کوونکو لپاره شته. د لاسرسي لپاره اړیکه ونیسئ.",
    "publications.narrativesTitle": "د زده کوونکو کیسې",
    "publications.narrativesDesc": "د زده کوونکو پیاوړې کیسې ولولئ چې څنګه زموږ پروګرامونو د دوی پر ژوند اغیز کړی.",
    "publications.narrativesNote": "کیسې د اجازې سره شریکېږي او د ټولنې غږونه لمانځي.",
  },
}

interface LanguageProviderProps {
  children: React.ReactNode
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(
    (typeof localStorage !== "undefined" && (localStorage.getItem("language") as Language)) || "en",
  )

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("language", language)
    }
  }, [language])

  const isRTL = language === "fa" || language === "ps"

  const t = (key: string) => {
    return translations[language][key] || translations["en"][key] || key
  }

  const value = { language, setLanguage, t, isRTL }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
