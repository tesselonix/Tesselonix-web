// Animate service cards on page load (staggered)
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".service-card");
  cards.forEach((card, i) => {
    setTimeout(() => {
      card.classList.add("animated");
    }, 120 * i);
  });
});
// Service card expand/collapse for all cards
// Service data structure with detailed information
const serviceData = {
  "custom-software": {
    title: "Custom Software<br>Development",
    subtitle: "Bespoke Applications & Internal Tools",
    description:
      "We build precision-built applications—from internal tools to client portals—engineered for your exact workflow. This moves you beyond the limitations of generic, off-the-shelf products, providing you with a custom-fit system that serves as a true competitive advantage.",
    overview:
      "Most businesses struggle with software that almost fits their needs. Our custom software development service creates tailored solutions that align perfectly with your unique processes and requirements. We architect scalable, maintainable applications that grow with your business, from simple internal tools to complex enterprise systems. Our development process emphasizes user experience, performance, and security, ensuring your custom solution becomes a true competitive advantage. We build applications that are not just functional, but transformative—turning your operational challenges into strategic advantages.",
    technologies: [
      "React/Vue.js",
      "Node.js",
      "Python/Django",
      "PostgreSQL",
      "AWS/Azure",
      "Docker",
      "GraphQL",
      "TypeScript",
    ],
    advantage:
      "Increases operational efficiency by 60-80%, eliminates workflow bottlenecks.",
    features: [
      "Custom workflow automation",
      "Scalable cloud architecture",
      "Modern responsive design",
      "API integration capabilities",
      "Real-time data processing",
      "Advanced security protocols",
    ],
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8 text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 10c-4.418 0-8-1.79-8-4V7c0-2.21 3.582-4 8-4s8 1.79 8 4v7c0 2.21-3.582 4-8 4z"/></svg>',
  },
  "data-analytics": {
    title: "Data & Analytics<br>Platform",
    subtitle: "Business Intelligence & Predictive Analytics",
    description:
      "We focus on transforming raw, scattered data into predictive insights with custom BI dashboards and analytics platforms. Our architects design the data pipelines and warehouses needed to create a single, reliable source of truth, enabling confident, real-time decision-making.",
    overview:
      "Data is your most valuable asset, but only when it's properly organized and analyzed. Our data analytics service transforms chaotic information into actionable insights through custom BI dashboards, predictive models, and automated reporting systems. We build comprehensive data pipelines that collect, clean, and process information from multiple sources, creating a unified view of your business operations that enables confident, data-driven decision making. We design systems that not only show you what happened, but predict what will happen, giving you the foresight to make strategic decisions with confidence.",
    technologies: [
      "Python (Pandas, PySpark)",
      "SQL/NoSQL",
      "Tableau/Power BI",
      "Apache Airflow",
      "AWS Redshift",
      "Snowflake",
      "TensorFlow",
      "R",
    ],
    advantage:
      "Improves decision-making speed by 70%, reduces reporting time by 85%.",
    features: [
      "Real-time dashboard creation",
      "Predictive analytics models",
      "Automated ETL pipelines",
      "Data warehouse architecture",
      "Custom reporting solutions",
      "Machine learning integration",
    ],
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8 text-green-500"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>',
  },
  "tech-it": {
    title: "Technology & IT<br>Services",
    subtitle: "Full-Stack Engineering & Cloud Infrastructure",
    description:
      "We provide full-stack engineering for the modern business. From foundational cloud infrastructure and high-performance applications to world-class UI/UX and ironclad cybersecurity, we deliver the complete spectrum of technical expertise required to build a resilient digital presence.",
    overview:
      "Modern businesses require robust, scalable technology infrastructure to compete effectively. Our comprehensive IT services cover everything from cloud architecture and DevOps automation to cybersecurity and performance optimization. We design and implement enterprise-grade solutions that ensure your technology stack is reliable, secure, and capable of supporting your growth ambitions while maintaining optimal performance and user experience. We build the technological foundation that allows your business to scale without technical limitations.",
    technologies: [
      "AWS/Azure/GCP",
      "Kubernetes",
      "Terraform",
      "CI/CD Pipelines",
      "Microservices",
      "Redis",
      "Elasticsearch",
      "Monitoring Tools",
    ],
    advantage:
      "Reduces infrastructure costs by 40-60%, improves system reliability by 95%.",
    features: [
      "Cloud infrastructure design",
      "DevOps automation",
      "Security implementation",
      "Performance optimization",
      "Disaster recovery planning",
      "24/7 monitoring & support",
    ],
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8 text-yellow-500"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/></svg>',
  },
  "mobile-app": {
    title: "Your Brand, in Their Pocket.",
    subtitle: "Mobile App Development",
    description:
      "We architect and build beautiful, high-performance native apps for iOS & Android that don't just function—they captivate your audience and become an essential part of their daily lives.",
    overview:
      "An app is your most intimate connection to your customer. It lives on their home screen. We believe that space should be earned with a flawless, valuable, and beautiful mobile experience. We build apps that users don't just download—they adopt.\n\nOur end-to-end app development process is built on a foundation of deep user experience (UX) research and robust engineering. We handle everything: from the initial strategy and architectural blueprint to pixel-perfect UI design, clean native coding, rigorous testing, and a seamless launch on the Apple App Store and Google Play Store. We build apps designed to achieve specific business goals, whether it's increasing user engagement, driving mobile commerce, or streamlining a service.",
    technologies: [
      "Swift (iOS)",
      "Kotlin (Android)",
      "Flutter",
      "React Native",
      "Firebase",
      "Node.js",
      "PostgreSQL",
      "AWS Amplify",
    ],
    advantage:
      "Flawless Native Performance: We build apps that are lightning-fast, responsive, and reliable, providing the premium user experience that customers expect.\n\nIntuitive, Award-Winning Design: Our 'blueprint-first' approach ensures your app is not only beautiful but also incredibly easy and enjoyable to use, maximizing user retention.\n\nMeasurable Business Impact: We architect apps that are more than just a presence; they are powerful tools designed to drive key metrics like sales, loyalty, and engagement.",
    features: [
      "End-to-end UX research and strategy",
      "Pixel-perfect UI design",
      "Native iOS & Android development",
      "Cross-platform solutions (Flutter, React Native)",
      "App Store & Google Play launch support",
      "Ongoing maintenance and optimization",
    ],
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8 text-indigo-500"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 2a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2H7zm0 0h10M7 2v20m10-20v20"/></svg>',
  },
  "uiux-design": {
    title: "Intuitive Design, Unforgettable Experience.",
    subtitle: "UI/UX Design & Strategy",
    description:
      "We architect beautiful interfaces (UI) built on a foundation of deep user empathy (UX) to create a seamless, intuitive, and unforgettable digital experience for your customers.",
    overview:
      "Great design is invisible. It's the silent, guiding hand that makes a complex application feel simple and a user's journey feel effortless. Our mission is to architect experiences that are so intuitive, they become a natural extension of your user's intent, building trust and loyalty with every click.\n\nOur user-centric design process is a science. We begin with a deep dive into your user personas and business goals to create a comprehensive UX blueprint. This includes user flow mapping, wireframing, and creating high-fidelity, interactive prototypes. Only once the experience is perfected do we apply the stunning visual layer (UI) that aligns with your brand. This architectural approach ensures your final product is not only beautiful but also strategically engineered to drive user engagement and conversion.",
    technologies: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "Miro",
      "InVision",
      "Zeplin",
      "UserTesting.com",
      "Hotjar",
    ],
    advantage:
      "Increased User Engagement & Retention: We design experiences that are so enjoyable and easy to use that your customers will want to come back again and again.\n\nHigher Conversion Rates: By removing friction and creating a clear path for the user, we design interfaces that make it simple for them to take the actions you want, whether it's a purchase, a sign-up, or an inquiry.\n\nEnhanced Brand Perception & Trust: A professional, beautiful, and seamless application instantly elevates your brand, building credibility and trust with your audience from the very first interaction.",
    features: [
      "User persona research",
      "User flow mapping",
      "Wireframing & prototyping",
      "High-fidelity UI design",
      "Interactive prototypes",
      "Usability testing & analytics",
    ],
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8 text-pink-400"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>',
  },
  "web-app": {
    title: "Digital Flagship, Engineered.",
    subtitle: "Web Application Development",
    description:
      "We go beyond simple websites to architect and build powerful, high-performance web applications that serve as the scalable, operational core of your business.",
    overview:
      "In today's digital economy, a simple website is no longer enough. You need a digital flagship—a powerful, interactive web application that doesn't just represent your brand, but also drives your business. We are the architects who build that engine.\n\nOur architectural approach to web development ensures your application is not just a collection of features, but a cohesive system designed for performance, security, and growth. We specialize in engineering complex, data-driven platforms, including custom internal dashboards, secure client-facing portals, and complete Software as a Service (SaaS) products. We build the digital infrastructure that makes your operations more efficient and your customer's experience unforgettable.",
    technologies: [
      "Python (Django, Flask)",
      "JavaScript (React, Vue.js)",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "AWS",
      "Google Cloud",
      "Docker",
    ],
    advantage:
      "Automated Operations: We build applications that automate your manual workflows, saving your team hundreds of hours and reducing costly human errors.\n\nScalable by Design: Your application is built on a robust foundation that is designed to grow with your business, effortlessly handling increases in users and data.\n\nWorld-Class User Experience: We architect intuitive, beautiful, and lightning-fast interfaces that your team will love to use and your customers will trust.",
    features: [
      "Custom internal dashboards",
      "Secure client-facing portals",
      "SaaS product engineering",
      "Automated workflow systems",
      "Data-driven architecture",
      "Cloud-native deployment",
    ],
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8 text-blue-400"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h16v16H4V4zm2 2v12h12V6H6zm4 4h4v4h-4v-4z"/></svg>',
  },
  "social-media": {
    title: "Beyond the Likes: Social Media That Converts.",
    subtitle: "Strategic Social Media Marketing",
    description:
      "We go beyond simple posting to architect data-driven social media strategies that build your brand's authority, create a loyal community, and convert followers into customers.",
    overview:
      "Posting content is easy. Building a brand is hard. In a world of digital noise, a random post is a wasted opportunity. We believe social media should be your most powerful storytelling tool—a direct line to your audience, architected to deliver the right message, at the right time, to drive a specific, measurable result.\n\nOur approach is uniquely architectural. We don't start with a content calendar; we start with your business goals and your data. We analyze your audience, audit your competition, and design a comprehensive content strategy that positions you as the definitive expert in your field. From creating stunning visuals and compelling copy to managing your community and running targeted ad campaigns, we handle the entire ecosystem to ensure your social media is not a standalone channel, but a powerful, integrated engine for growth.",
    technologies: [
      "Meta Business Suite",
      "LinkedIn Campaign Manager",
      "Hootsuite",
      "Buffer",
      "Sprout Social",
      "Canva",
      "Figma",
      "Google Analytics",
    ],
    advantage:
      "Build Unshakable Brand Authority: We create content that educates, inspires, and solves problems, establishing you as the go-to expert in your industry.\n\nCreate a Loyal, Engaged Community: We foster genuine conversations and build a thriving community of followers who are not just passive viewers, but true fans of your brand.\n\nDrive Measurable Business Results: We focus on what matters. Our strategies are designed to move beyond vanity metrics and generate qualified leads, website traffic, and tangible sales.",
    features: [
      "Audience & competitor analysis",
      "Content strategy & planning",
      "Visual & copy creation",
      "Community management",
      "Ad campaign management",
      "Analytics & reporting",
    ],
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8 text-blue-600"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2V10a2 2 0 012-2h2m2-4h4a2 2 0 012 2v4a2 2 0 01-2 2h-4a2 2 0 01-2-2V6a2 2 0 012-2z"/></svg>',
  },
  "graphic-design": {
    title: "Your Brand, Beautifully Visualized.",
    subtitle: "Strategic Graphic Design",
    description:
      "We go beyond simple logos and layouts to architect a cohesive and stunning visual identity for your brand that builds instant trust and makes you unforgettable.",
    overview:
      "In a visual world, your brand is judged in a fraction of a second. Great design isn't just about looking good; it's about communicating your value instantly and building subconscious trust with your audience. We architect the visual language that tells your story with clarity, professionalism, and impact.\n\nOur design process is rooted in strategy. We start with a deep dive into your brand's mission, values, and target audience to create a complete visual identity system. From your core logo and brand guidelines to stunning marketing collateral, social media graphics, and professional pitch decks, we ensure every single visual touchpoint is consistent, beautiful, and strategically aligned to achieve your business goals. We create the visual foundation for your brand's success.",
    technologies: [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Adobe InDesign",
      "Figma",
      "Canva for Teams",
      "Procreate",
    ],
    advantage:
      "Instant Professional Credibility: High-quality, cohesive design instantly signals that you are a serious, professional, and trustworthy organization.\n\nUnforgettable Brand Recognition: We build a consistent visual language across all your platforms, making your brand instantly recognizable and memorable in a crowded market.\n\nCommunicate Your Value, Instantly: Great design makes complex ideas simple. We create visuals that clearly and powerfully communicate your message, helping you to persuade and convert your audience.",
    features: [
      "Logo & brand identity design",
      "Brand guidelines & systems",
      "Marketing collateral (brochures, flyers, etc.)",
      "Social media graphics",
      "Pitch decks & presentations",
      "Consistent visual language across platforms",
    ],
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8 text-red-400"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8a6 6 0 11-12 0 6 6 0 0112 0zm2 8a6 6 0 00-12 0h12z"/></svg>',
  },
  "digital-marketing": {
    title: "Your Growth, Engineered.",
    subtitle: "Data-Driven Digital Marketing",
    description:
      "We architect full-funnel digital marketing strategies—from SEO to paid ads—that are built on a foundation of deep data analytics to deliver predictable, measurable, and scalable growth.",
    overview:
      "Most digital marketing feels like a gamble. You put money in and hope for the best. We believe in a different approach. We believe marketing should be the most measurable and predictable part of your business—a finely tuned engine for growth, not a slot machine.\n\nOur approach is unique because we architect the entire system. Our data scientists build the dashboards that track your ROI in real-time. Our web developers build the high-conversion landing pages. And our marketers use that integrated infrastructure to run hyper-targeted campaigns. From Search Engine Optimization (SEO) and Content Marketing that builds long-term authority to Pay-Per-Click (PPC) advertising that drives immediate results, we manage the entire ecosystem to ensure every marketing rupee is an investment in your growth.",
    technologies: [
      "Google Ads",
      "Google Analytics",
      "Meta Ads",
      "LinkedIn Ads",
      "Semrush",
      "Ahrefs",
      "HubSpot",
      "Mailchimp",
    ],
    advantage:
      "Radical Transparency & ROI: We build the systems that allow you to see exactly how your marketing spend is impacting your bottom line, moving from vague reports to a clear view of your Return on Investment.\n\nA Fully Integrated Growth Engine: Our marketing strategies are not an isolated service; they are seamlessly integrated with your data analytics and technology stack for a more powerful, cohesive, and effective approach.\n\nData-Driven, Optimized Campaigns: We replace guesswork with data. Every campaign is continuously monitored, analyzed, and optimized to ensure your budget is spent with maximum efficiency to achieve the best possible results.",
    features: [
      "SEO & content marketing",
      "PPC & paid advertising",
      "Conversion-focused landing pages",
      "Real-time analytics dashboards",
      "Email marketing & automation",
      "Integrated campaign management",
    ],
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8 text-green-400"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m4 0h-1v4h-1m-4 0h-1v-4H7m4 0h-1v4h-1"/></svg>',
  },
  "branding-identity": {
    title: "Your Identity, Architected.",
    subtitle: "Branding & Identity Design",
    description:
      "We architect your entire brand identity—from your logo and messaging to your visual language—creating a cohesive and powerful system that makes you the unforgettable, go-to choice in your market.",
    overview:
      "In a noisy world, a memorable brand is a competitive moat. It's the instant recognition and trust that makes a customer choose you over a dozen alternatives. We believe that kind of brand isn't built on a single nice logo; it's engineered as a complete, cohesive identity system.\n\nOur branding process is a deep, strategic partnership. We start by defining your core mission, values, and unique market position. We then translate that strategy into a comprehensive brand identity, including your logo, color palette, typography, and core messaging. We deliver a complete set of brand guidelines that ensures every piece of communication—from your website and social media to your packaging and advertising—is perfectly aligned, professional, and powerful.",
    technologies: [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Figma",
      "Miro",
      "Canva for Teams",
      "Google Fonts",
    ],
    advantage:
      "Stand Out in a Crowded Market: We build a unique and memorable brand that cuts through the noise and differentiates you from the competition.\n\nBuild Trust with Flawless Consistency: A cohesive, professional brand presence across all platforms builds subconscious trust and signals quality to your customers.\n\nIncrease Your Perceived Value & Pricing Power: A strong, premium brand identity allows you to command a higher perceived value in the market, directly impacting your bottom line.",
    features: [
      "Logo & visual identity system",
      "Brand strategy & messaging",
      "Color palette & typography",
      "Comprehensive brand guidelines",
      "Packaging & advertising design",
      "Consistent brand presence across platforms",
    ],
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8 text-yellow-400"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>',
  },
  cybersecurity: {
    title: "Your Digital Fortress, Architected.",
    subtitle: "Proactive Cybersecurity Solutions",
    description:
      "We go beyond simple firewalls to architect proactive, multi-layered security solutions that protect your data, your customers, and your hard-earned reputation from modern threats.",
    overview:
      "In a digital world, trust is your most valuable currency. A single security breach can destroy it in an instant. We believe that world-class security isn't something you bolt on at the end; it's a fundamental principle that must be architected into every line of code and every system from day one.\n\nOur approach to cybersecurity is holistic. We conduct comprehensive vulnerability assessments and penetration testing to identify weaknesses in your current infrastructure. We then engineer a robust, multi-layered defense strategy, implementing everything from secure coding practices and network hardening to employee training and incident response planning. We are your dedicated partners in safeguarding your digital assets and ensuring the long-term resilience of your business.",
    technologies: [
      "OWASP Top 10",
      "Penetration Testing",
      "Vulnerability Scanning",
      "Network Security",
      "Cloud Security (AWS/GCP)",
      "Encryption",
      "Incident Response",
    ],
    advantage:
      "Protect Your Most Valuable Assets: We build a robust defense system to safeguard your critical data, intellectual property, and financial information from unauthorized access and cyber threats.\n\nBuild and Maintain Customer Trust: Demonstrating a strong commitment to security shows your customers that you value their privacy, building the essential trust needed for long-term loyalty.\n\nGain Peace of Mind to Focus on Growth: With a proactive security architecture in place, you can stop worrying about potential threats and focus your energy on what you do best: running and growing your business.",
    features: [
      "Vulnerability assessments",
      "Penetration testing",
      "Multi-layered defense strategy",
      "Secure coding & network hardening",
      "Employee security training",
      "Incident response planning",
    ],
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8 text-cyan-400"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 1c-2.21 0-4 1.79-4 4v1h8v-1c0-2.21-1.79-4-4-4zm0-10C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>',
  },
  "react-native": {
    title: "Twice the Impact, Half the Time.",
    subtitle: "Efficient Cross-Platform Development",
    description:
      "We architect high-performance mobile apps using React Native, allowing you to launch on both iOS and Android from a single codebase, dramatically reducing your time-to-market and development costs.",
    overview:
      "Why build two separate apps when you can architect one brilliant one? In today's competitive landscape, speed to market is everything. React Native is the strategic answer for businesses that need to reach their entire audience on both iOS and Android without the time, cost, and complexity of traditional native development.\n\nOur approach to React Native is centered on a single principle: zero compromise. We leverage the power of the framework to build applications that are virtually indistinguishable from their native counterparts, with fluid animations and responsive performance. Our architectural process ensures your app has a solid foundation, allowing for faster feature rollouts, simplified maintenance, and a consistent, beautiful brand experience across every device.",
    technologies: [
      "React Native",
      "JavaScript",
      "TypeScript",
      "Expo",
      "Redux",
      "Firebase",
      "GraphQL",
      "Node.js",
    ],
    advantage:
      "Accelerated Time-to-Market: Launch your application on both the Apple App Store and Google Play Store simultaneously, capturing your entire market and getting ahead of the competition.\n\nSignificant Cost Reduction: By building from a single, unified codebase, you dramatically reduce your engineering hours and overall project budget by up to 40%.\n\nSimplified Updates & Maintenance: A single codebase means faster updates, easier bug fixes, and a more streamlined process for rolling out new features to all of your users at once.",
    features: [
      "Single codebase for iOS & Android",
      "Native-like performance & animations",
      "Faster feature rollouts",
      "Cost-effective development",
      "Easy maintenance & updates",
      "Consistent brand experience",
    ],
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8 text-sky-400"><circle cx="12" cy="12" r="10" stroke-width="2"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v12m6-6H6"/></svg>',
  },
  ecommerce: {
    title: "The High-Conversion Shopping Experience.",
    subtitle: "Custom E-commerce Development",
    description:
      "We go beyond generic templates to architect custom, high-conversion e-commerce platforms that provide a flawless experience for your customers and a powerful backend for you.",
    overview:
      "Your product is unique. Your brand is unique. Why should your online store be a generic, one-size-fits-all template? We believe your e-commerce platform should be your ultimate competitive advantage—a finely tuned engine for sales, architected to fit your business, not the other way around.\n\nOur architectural approach to e-commerce gives you complete control over the entire customer journey. We design and build everything from a beautiful, lightning-fast storefront and a custom, high-conversion checkout process to a powerful backend for inventory and order management. We seamlessly integrate with your preferred payment gateways, CRMs, and marketing automation tools, creating a single, unified system that works exactly the way you sell.",
    technologies: [
      "WooCommerce",
      "Magento",
      "Shopify (Headless)",
      "Node.js",
      "React",
      "Python (Django)",
      "Stripe",
      "Razorpay",
    ],
    advantage:
      "Maximized Conversion & Revenue: We engineer a frictionless checkout and a persuasive user experience designed to reduce cart abandonment and significantly increase your sales.\n\nA Uniquely Branded Experience: Break free from the limitations of templates. We build a store that is a beautiful and seamless extension of your brand, creating a memorable experience that builds loyalty.\n\nSeamless Operational Integration: We build a central command center for your sales that integrates perfectly with your existing inventory, shipping, and customer management systems for ultimate efficiency.",
    features: [
      "Custom storefront & checkout",
      "Inventory & order management",
      "Payment gateway integration",
      "CRM & marketing automation",
      "Mobile-optimized shopping",
      "Analytics & reporting dashboard",
    ],
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8 text-orange-400"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A2 2 0 007.5 19h9a2 2 0 001.85-1.3L17 13M7 13V6h10v7"/></svg>',
  },
  "ai-automation": {
    title: "The Intelligent Workforce That Never Sleeps.",
    subtitle: "Intelligent Process Automation (IPA)",
    description:
      "We build custom AI-powered automation that goes beyond simple tasks to handle complex, decision-based workflows, freeing your most valuable employees to focus on strategic growth.",
    overview:
      "Your most expensive asset is your team's brainpower. Yet, how much of it is spent on repetitive, manual tasks that a machine could do? We believe automation shouldn't just replace your team—it should elevate them. We build the intelligent systems that handle the busy work, so your people can do the brilliant work.\n\nOur process is to architect a custom AI automation engine that learns your unique business rules and workflows. We go far beyond simple 'if-then' rules to implement machine learning models that can understand context, make decisions, and execute complex processes. This includes building AI-powered chatbots that qualify leads on WhatsApp, systems that can read and process invoices automatically, and custom workflows that can automate customer support, data entry, and report generation, all running 24/7 with perfect precision.",
    technologies: [
      "Python (TensorFlow, Scikit-learn)",
      "Natural Language Processing (NLP)",
      "OpenAI API",
      "Google AI Platform",
      "AWS AI Services",
      "UiPath",
      "Automation Anywhere",
    ],
    advantage:
      "Radical Productivity Boost: We automate the repetitive, time-consuming tasks that drain your team's energy, freeing them to focus on the high-value, strategic work that drives innovation.\n\nEliminate Costly Human Error: Our AI systems execute tasks with perfect precision every single time, eliminating the risk of costly manual errors in your data entry, processing, and reporting.\n\nScale Your Operations, Not Your Headcount: Build an automated workforce that can handle a massive surge in volume without you needing to hire more people, enabling truly scalable and profitable growth.",
    features: [
      "AI-powered chatbots & assistants",
      "Automated document processing",
      "Custom workflow automation",
      "Machine learning-based decisioning",
      "24/7 operation & monitoring",
      "Seamless integration with your stack",
    ],
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8 text-violet-400"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>',
  },
  automation: {
    title: "Automation &<br>Integration",
    subtitle: "Intelligent Process Automation & System Integration",
    description:
      "Our primary goal is eliminating manual work by building intelligent automation and seamlessly connecting your entire software ecosystem. We architect a frictionless operational flow that handles repetitive tasks.",
    overview:
      "Manual processes drain productivity and introduce errors. Our automation and integration services eliminate repetitive tasks through intelligent workflow automation, API integrations, and seamless system connections. We analyze your current processes, identify automation opportunities, and implement solutions that dramatically reduce manual workload while improving accuracy and consistency across your operations. We build the connective tissue that makes your entire software ecosystem work together as one cohesive unit.",
    technologies: [
      "Zapier/Microsoft Power Automate",
      "API Development",
      "RPA Tools",
      "Webhook Systems",
      "Workflow Engines",
      "Integration Platforms",
      "Python Scripts",
      "Azure Logic Apps",
    ],
    advantage:
      "Reduces manual work by 80-90%, eliminates human errors, saves 20+ hours per week.",
    features: [
      "Process workflow automation",
      "Third-party API integration",
      "Data synchronization",
      "Automated reporting",
      "Email & notification systems",
      "Custom integration solutions",
    ],
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8 text-pink-500"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
  },
  "strategic-partnership": {
    title: "Strategic<br>Partnership",
    subtitle: "Long-term Technology Guidance & Support",
    description:
      "Beyond the initial build, we provide ongoing architectural guidance and support to ensure your technology scales with your ambition. We act as your long-term partner, proactively evolving your systems.",
    overview:
      "Technology needs evolve as your business grows. Our strategic partnership service provides ongoing architectural guidance, proactive system evolution, and continuous optimization to ensure your technology infrastructure remains aligned with your business objectives. We act as your extended technology team, providing expert consultation, regular system health checks, and strategic planning to capitalize on new opportunities and overcome emerging challenges. We become your trusted technology advisor, helping you navigate the complex landscape of digital transformation.",
    technologies: [
      "Strategic Planning",
      "Architecture Review",
      "Technology Audits",
      "Performance Monitoring",
      "Security Assessments",
      "Scalability Planning",
      "Innovation Consulting",
      "Best Practices",
    ],
    advantage:
      "Ensures 99.9% system uptime, reduces technical debt by 70%, accelerates feature delivery.",
    features: [
      "Ongoing architectural guidance",
      "Proactive system monitoring",
      "Regular security audits",
      "Performance optimization",
      "Technology roadmap planning",
      "Emergency response support",
    ],
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8 text-purple-500"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>',
  },
};

// Expandable card functionality
document.addEventListener("DOMContentLoaded", function () {
  // Tab toggle logic
  const tabMap = {
    "nav-custom-software": [
      "custom-software",
      "mobile-app",
      "web-app",
      "software-maintenance",
      "ai-automation",
    ],
    "nav-data-analytics": [
      "data-analytics",
      "ai-ml",
      "branding-identity",
      "digital-marketing",
    ],
    "nav-tech-it": [
      "tech-it",
      "cybersecurity",
      "uiux-design",
      "social-media",
      "graphic-design",
      "ecommerce",
      "react-native",
      "other",
    ],
  };
  const tabIds = Object.keys(tabMap);
  const allCards = Array.from(document.querySelectorAll(".expandable-card"));
  tabIds.forEach((tabId) => {
    const btn = document.getElementById(tabId);
    if (btn) {
      btn.addEventListener("click", function () {
        // Remove active from all tabs
        tabIds.forEach((tid) => {
          const b = document.getElementById(tid);
          if (b) b.classList.remove("bg-primary");
        });
        btn.classList.add("bg-primary");
        // Show only cards for this tab
        allCards.forEach((card) => {
          if (tabMap[tabId].includes(card.dataset.service)) {
            card.style.display = "";
          } else {
            card.style.display = "none";
          }
        });
      });
    }
  });
  // Show all cards by default (or only first tab)
  if (tabIds.length > 0) {
    document.getElementById(tabIds[0]).click();
  }

  // Expand/collapse logic for all service cards
  const serviceCards = document.querySelectorAll(".expandable-card");
  serviceCards.forEach((card) => {
    const closeBtn = card.querySelector(".expand-close-btn");
    const details = card.querySelector(".expand-details");
    const serviceType = card.dataset.service;
    function fillExpandDetails() {
      const data = serviceData[serviceType];
      if (!data) return;
      details.innerHTML = `
        <div style="margin-bottom:1.2rem;"><strong>Overview:</strong> ${
          data.overview
        }</div>
        <div style="margin-bottom:1.2rem;"><strong>Technologies:</strong> <span style="display:inline-block;">${data.technologies
          .map((t) => `<span class='tech-tag'>${t}</span>`)
          .join(" ")}</span></div>
        <div style="margin-bottom:1.2rem;"><strong>Advantage:</strong> ${
          data.advantage
        }</div>
        <div><strong>Features:</strong><ul style="margin:0; padding-left:1.2em;">${data.features
          .map((f) => `<li>${f}</li>`)
          .join("")}</ul></div>
      `;
    }
    card.addEventListener("click", function (e) {
      if (
        !card.classList.contains("expanded") &&
        !e.target.classList.contains("expand-close-btn")
      ) {
        // Collapse any other expanded card
        document
          .querySelectorAll(".expandable-card.expanded")
          .forEach((expanded) => {
            expanded.classList.remove("expanded");
            expanded.querySelector(".expand-close-btn").style.display = "none";
            expanded.querySelector(".expand-details").style.display = "none";
          });
        // Add expanded state and animate in
        card.classList.add("expanded");
        card.classList.remove("transform-out");
        card.classList.add("transform-in");
        closeBtn.style.display = "flex";
        fillExpandDetails();
        details.style.display = "block";
        document.body.classList.add("has-expanded-card");
        document.body.style.overflow = "hidden";
      }
    });
    closeBtn.addEventListener("click", function (e) {
      // Animate out then remove expanded state
      card.classList.remove("transform-in");
      card.classList.add("transform-out");
      // wait for animation to finish before fully collapsing
      const onAnimEnd = () => {
        card.classList.remove("expanded");
        closeBtn.style.display = "none";
        details.style.display = "none";
        document.body.classList.remove("has-expanded-card");
        document.body.style.overflow = "";
        card.removeEventListener("animationend", onAnimEnd);
      };
      card.addEventListener("animationend", onAnimEnd);
      e.stopPropagation();
    });
  });
  // Collapse on Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      document.querySelectorAll(".expandable-card.expanded").forEach((card) => {
        // animate out then remove expanded
        const closeBtn = card.querySelector(".expand-close-btn");
        const details = card.querySelector(".expand-details");
        card.classList.remove("transform-in");
        card.classList.add("transform-out");
        const onAnimEndEsc = () => {
          card.classList.remove("expanded");
          if (closeBtn) closeBtn.style.display = "none";
          if (details) details.style.display = "none";
          document.body.classList.remove("has-expanded-card");
          document.body.style.overflow = "";
          card.removeEventListener("animationend", onAnimEndEsc);
        };
        card.addEventListener("animationend", onAnimEndEsc);
      });
    }
  });
  // Collapse if clicking outside any expanded card
  document.addEventListener("mousedown", function (e) {
    document.querySelectorAll(".expandable-card.expanded").forEach((card) => {
      if (!card.contains(e.target)) {
        const closeBtn = card.querySelector(".expand-close-btn");
        const details = card.querySelector(".expand-details");
        // animate out then remove expanded
        card.classList.remove("transform-in");
        card.classList.add("transform-out");
        const onAnimEndOutside = () => {
          card.classList.remove("expanded");
          if (closeBtn) closeBtn.style.display = "none";
          if (details) details.style.display = "none";
          document.body.classList.remove("has-expanded-card");
          document.body.style.overflow = "";
          card.removeEventListener("animationend", onAnimEndOutside);
        };
        card.addEventListener("animationend", onAnimEndOutside);
      }
    });
  });
});
