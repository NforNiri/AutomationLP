/**
 * Seed script to populate Strapi with default landing page content
 * Run with: STRAPI_TOKEN=your_token node scripts/seed.js
 */

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
        title: "Built for Your Industry",
        subtitle: "See how businesses like yours are saving hours every day",
        cases: [
            {
                label: "Real Estate",
                title: "Automated Lead Qualification",
                description: "Voice AI calls prospects, answers questions, and books viewings—while you focus on closings.",
                stat: "12+ hours saved per week",
                icon: "Home"
            },
            {
                label: "Logistics",
                title: "Smart Dispatch System",
                description: "AI routes deliveries, updates customers, and handles driver coordination automatically.",
                stat: "30% faster deliveries",
                icon: "Truck"
            },
            {
                label: "E-commerce",
                title: "Order Management Bot",
                description: "Automate order confirmations, shipping updates, and customer inquiries across channels.",
                stat: "85% support automation",
                icon: "ShoppingCart"
            }
        ]
    },
    painPoints: {
        title: "Sound Familiar?",
        subtitle: "You're not alone. Here's how we solve it.",
        points: [
            {
                question: "Your team spends hours on data entry and admin tasks?",
                solution: "We build smart automations that handle repetitive work, freeing your team for high-value activities."
            },
            {
                question: "Leads slip through the cracks because follow-up is manual?",
                solution: "Our AI ensures every lead gets immediate, personalized attention—24/7, no delays."
            },
            {
                question: "You're using 5 different tools that don't talk to each other?",
                solution: "We create a unified workflow that connects your entire tech stack seamlessly."
            },
            {
                question: "Generic SaaS solutions don't fit your business?",
                solution: "We build custom solutions tailored to your exact processes and requirements."
            }
        ]
    },
    whyUs: {
        title: "Why Code & Core?",
        subtitle: "Not another SaaS subscription. A custom system built for you.",
        features: [
            {
                name: "Customization",
                generic: "One-size-fits-all templates",
                us: "Built for YOUR workflow"
            },
            {
                name: "Integration",
                generic: "Limited pre-built connectors",
                us: "Deep custom integrations"
            },
            {
                name: "Maintenance",
                generic: "You're on your own",
                us: "We monitor & optimize"
            },
            {
                name: "ROI Timeline",
                generic: "Months to see value",
                us: "Results in weeks"
            }
        ]
    },
    howItWorks: {
        title: "How It Works",
        subtitle: "From idea to automation in 3 simple steps",
        steps: [
            {
                title: "Audit",
                description: "We analyze your workflows and identify automation opportunities (free, no commitment).",
                icon: "Search"
            },
            {
                title: "Build",
                description: "Our team designs and develops your custom AI solution, with your feedback at every stage.",
                icon: "Code"
            },
            {
                title: "Launch",
                description: "We deploy, train your team, and provide ongoing support to ensure everything runs smoothly.",
                icon: "Rocket"
            }
        ]
    },
    benefits: {
        title: "Outcomes, not just software",
        subtitle: "Real results from real clients",
        stats: [
            {
                value: "15+ hrs",
                label: "Saved per week",
                description: "Average time saved per employee after automation",
                icon: "Clock"
            },
            {
                value: "3.2x",
                label: "Faster response",
                description: "Lead response time improvement",
                icon: "Zap"
            },
            {
                value: "94%",
                label: "Task accuracy",
                description: "Reduction in manual errors",
                icon: "Target"
            },
            {
                value: "< 4 weeks",
                label: "To ROI",
                description: "Average time to return on investment",
                icon: "TrendingUp"
            }
        ]
    },
    pricing: {
        title: "Simple, Transparent Pricing",
        subtitle: "No hidden fees. No surprises.",
        tiers: [
            {
                name: "Starter",
                price: "$2,500",
                description: "Perfect for single-process automation",
                features: [
                    { text: "1 automated workflow" },
                    { text: "Up to 2 integrations" },
                    { text: "Basic analytics dashboard" },
                    { text: "Email support" }
                ],
                cta: "Get Started",
                highlight: false
            },
            {
                name: "Growth",
                price: "$6,500",
                description: "For businesses ready to scale",
                features: [
                    { text: "3 automated workflows" },
                    { text: "Unlimited integrations" },
                    { text: "Advanced analytics & reporting" },
                    { text: "Priority support" },
                    { text: "Monthly optimization calls" }
                ],
                cta: "Most Popular",
                highlight: true
            },
            {
                name: "Enterprise",
                price: "Custom",
                description: "Tailored solutions for complex needs",
                features: [
                    { text: "Unlimited workflows" },
                    { text: "Custom AI models" },
                    { text: "Dedicated account manager" },
                    { text: "24/7 support" },
                    { text: "SLA guarantee" }
                ],
                cta: "Contact Sales",
                highlight: false
            }
        ]
    },
    faq: {
        title: "Frequently Asked Questions",
        questions: [
            {
                question: "How long does it take to build an automation?",
                answer: "Most projects go live in 2-4 weeks, depending on complexity. We provide a detailed timeline after the initial audit."
            },
            {
                question: "Do I need technical knowledge?",
                answer: "Not at all. We handle everything from design to deployment. You just describe what you need, and we make it happen."
            },
            {
                question: "What if my needs change?",
                answer: "Our solutions are built to evolve. We offer flexible maintenance plans and can easily add new features as your business grows."
            },
            {
                question: "How secure is my data?",
                answer: "We implement industry-standard encryption and security protocols. Your data stays on your infrastructure—we just connect the dots."
            }
        ]
    },
    cta: {
        title: "Ready to Transform Your Workflow?",
        subtitle: "Book a free audit and discover how much time you could be saving.",
        buttonText: "Schedule Free Audit",
        buttonLink: "#contact"
    }
};

async function seed() {
    const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
    const STRAPI_TOKEN = process.env.STRAPI_TOKEN || '';

    if (!STRAPI_TOKEN) {
        console.error('❌ STRAPI_TOKEN environment variable is required.');
        console.log('Please create an API token in Strapi Admin:');
        console.log('1. Go to http://localhost:1337/admin');
        console.log('2. Settings → API Tokens → Create new API Token');
        console.log('3. Give it "Full Access" permissions');
        console.log('4. Run: STRAPI_TOKEN=your_token_here node scripts/seed.js');
        process.exit(1);
    }

    console.log('🌱 Starting seed process...\n');

    try {
        // Create the landing page (POST for Single Types)
        const response = await fetch(`${STRAPI_URL}/api/landing-page`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${STRAPI_TOKEN}`
            },
            body: JSON.stringify({ data: defaultData })
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Failed to seed data: ${response.status} ${response.statusText}\n${errorText}`);
        }

        const result = await response.json();
        console.log('✅ Landing page data created successfully!\n');
        console.log('Data ID:', result.data?.id || 'N/A');

        console.log('\n🎉 All done! The content has been created and should be auto-published.');
        console.log('Check your admin panel at:', `${STRAPI_URL}/admin`);
        console.log('View the API at:', `${STRAPI_URL}/api/landing-page?populate=deep`);

    } catch (error) {
        console.error('❌ Error seeding data:', error.message);
        process.exit(1);
    }
}

seed();
