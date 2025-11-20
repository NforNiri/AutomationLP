const { createStrapi } = require('@strapi/strapi');

// Import default data from bootstrap
const defaultData = {
    hero: {
        title: "AI Automations That Actually Work",
        subtitle: "Stop wasting time on repetitive tasks. We build custom AI solutions that integrate seamlessly with your existing systems—no fluff, just results.",
        ctaText: "Book Free Audit",
        ctaLink: "#contact",
        secondaryCtaText: "See How It Works",
        secondaryCtaLink: "#process",
        badgeText: "Trusted by 50+ businesses"
    },
    socialProof: {
        title: "Trusted by businesses like yours.",
        clients: [
            { name: "TechCorp" },
            { name: "DataFlow" },
            { name: "AutoSys" },
            { name: "CloudBase" },
            { name: "LogiTrack" },
            { name: "PropHub" }
        ]
    },
    useCases: {
        title: "What We Automate",
        description: "Real results, measurable ROI, zero corporate fluff.",
        cases: [
            {
                title: "Data Entry \u0026 Processing",
                description: "Extract, validate, and route data automatically—no more spreadsheets",
                icon: "FileText"
            },
            {
                title: "Customer Support",
                description: "AI chatbots that actually help—escalate only when needed",
                icon: "MessageSquare"
            },
            {
                title: "Scheduling \u0026 Booking",
                description: "Let AI handle calendars while you focus on growth",
                icon: "Calendar"
            },
            {
                title: "Document Processing",
                description: "Parse invoices, receipts, contracts—instantly and accurately",
                icon: "File"
            },
            {
                title: "Email Management",
                description: "Smart filters, auto-replies, and intelligent sorting",
                icon: "Mail"
            },
            {
                title: "Sales Lead Qualification",
                description: "Score and route leads automatically based on your criteria",
                icon: "Target"
            }
        ]
    },
    painPoints: {
        title: "The Real Cost of Manual Work",
        description: "Every minute spent on repetitive tasks is a minute lost to growth.",
        items: [
            {
                problem: "Your team is drowning in admin work instead of selling or building",
                solution: "Automate data entry, scheduling, and routine communications"
            },
            {
                problem: "Human errors in data entry cost you money and credibility",
                solution: "AI processes data with 99.9% accuracy, 24/7"
            },
            {
                problem: "Hiring more people for repetitive tasks isn't scalable",
                solution: "One automation can replace 3-5 full-time equivalents"
            },
            {
                problem: "You're too busy fixing problems to prevent them",
                solution: "AI spots patterns and prevents issues before they happen"
            }
        ]
    },
    whyUs: {
        title: "Why Choose Us?",
        description: "We're not a consultancy. We're builders who get it done.",
        reasons: [
            {
                title: "We build, not advise",
                description: "No 50-page PowerPoints. Just working code integrated into your systems.",
                icon: "Code"
            },
            {
                title: "Fast implementation",
                description: "Most automations live in 2-4 weeks, not months.",
                icon: "Zap"
            },
            {
                title: "Pay for results",
                description: "We scope projects clearly: fixed price, fixed scope, fixed timeline.",
                icon: "CheckCircle"
            },
            {
                title: "Built for SMBs",
                description: "No enterprise bloat. Solutions designed for teams of 5-50.",
                icon: "Users"
            }
        ]
    },
    howItWorks: {
        title: "How It Works",
        description: "From idea to automation in 4 simple steps.",
        steps: [
            {
                stepNumber: 1,
                title: "Free Audit",
                description: "We analyze your workflows and identify the highest-ROI automations"
            },
            {
                stepNumber: 2,
                title: "Scoping \u0026 Pricing",
                description: "Get a clear roadmap with fixed pricing—no surprises"
            },
            {
                stepNumber: 3,
                title: "Build \u0026 Integrate",
                description: "We build the automation and integrate it into your existing tools"
            },
            {
                stepNumber: 4,
                title: "Train \u0026 Support",
                description: "Your team gets trained, and we provide ongoing support"
            }
        ]
    },
    benefits: {
        title: "What You'll Gain",
        description: "Tangible results, not vague promises.",
        items: [
            {
                title: "Save 10-20 hours/week per employee",
                description: "Time redirected to high-value work",
                icon: "Clock"
            },
            {
                title: "Eliminate 90% of data entry errors",
                description: "Accurate, reliable data you can trust",
                icon: "Shield"
            },
            {
                title: "Scale without hiring",
                description: "Handle 3x the work with your current team",
                icon: "TrendingUp"
            },
            {
                title: "ROI in 3-6 months",
                description: "Most automations pay for themselves quickly",
                icon: "DollarSign"
            }
        ]
    },
    pricing: {
        title: "Simple, Transparent Pricing",
        description: "No hidden fees. No monthly subscriptions. Just one-time builds.",
        tiers: [
            {
                name: "Starter Automation",
                price: "$2,500",
                description: "Single workflow automation",
                features: [
                    "One automated workflow",
                    "Integration with 2-3 tools",
                    "Basic training session",
                    "30 days support"
                ],
                ctaText: "Get Started",
                ctaLink: "#contact",
                highlighted: false
            },
            {
                name: "Growth Package",
                price: "$7,500",
                description: "Multiple workflows + integrations",
                features: [
                    "3-5 automated workflows",
                    "Integration with 5-7 tools",
                    "Comprehensive training",
                    "90 days support",
                    "Priority implementation"
                ],
                ctaText: "Most Popular",
                ctaLink: "#contact",
                highlighted: true
            },
            {
                name: "Custom Enterprise",
                price: "Custom",
                description: "Tailored solutions for complex needs",
                features: [
                    "Unlimited workflows",
                    "Full system integration",
                    "Dedicated support",
                    "Ongoing optimization",
                    "Custom SLAs"
                ],
                ctaText: "Contact Us",
                ctaLink: "#contact",
                highlighted: false
            }
        ]
    },
    faq: {
        title: "Frequently Asked Questions",
        questions: [
            {
                question: "Do I need technical knowledge?",
                answer: "Nope. We handle all the technical heavy lifting. You just tell us what you want automated."
            },
            {
                question: "How long does implementation take?",
                answer: "Most projects go live in 2-4 weeks. Complex integrations may take 6-8 weeks."
            },
            {
                question: "What if something breaks?",
                answer: "We include support with every build and offer extended maintenance plans."
            },
            {
                question: "Can you integrate with my existing tools?",
                answer: "Yes. We work with popular platforms (Slack, Google Workspace, HubSpot, etc.) and can build custom integrations."
            },
            {
                question: "Is there a monthly fee?",
                answer: "No recurring fees for the automation itself. Optional: ongoing support plans available."
            }
        ]
    },
    cta: {
        title: "Ready to Stop Wasting Time?",
        description: "Book a free 30-minute audit. We'll show you exactly which tasks to automate first.",
        ctaText: "Book Free Audit",
        ctaLink: "#contact",
        secondaryText: "No sales pitch. Just honest advice."
    }
};

async function reseed() {
    try {
        console.log('🌱 Re-seeding landing page data...\n');
        const strapi = await createStrapi({ distDir: './dist' }).load();

        const uid = 'api::landing-page.landing-page';

        // Delete existing entry
        const existing = await strapi.documents(uid).findFirst();
        if (existing) {
            console.log('Deleting existing entry:', existing.documentId);
            await strapi.documents(uid).delete({ documentId: existing.documentId });
            console.log('✅ Deleted\n');
        }

        // Create new entry with all data
        console.log('Creating new entry with full data...');
        const created = await strapi.documents(uid).create({
            data: defaultData
        });

        console.log('✅ CREATED!');
        console.log('Document ID:', created.documentId);
        console.log('Has hero?', !!created.hero);
        console.log('Hero title:', created.hero?.title);

        process.exit(0);
    } catch (error) {
        console.error('❌ Error:', error.message);
        console.error(error);
        process.exit(1);
    }
}

reseed();
