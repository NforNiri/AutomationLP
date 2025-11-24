export interface StrapiResponse<T> {
    data: {
        id: number;
        attributes: T;
    } | null;
    meta: {
        pagination?: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}

export interface HeroSection {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
    secondaryCtaText: string;
    secondaryCtaLink: string;
    badgeText: string;
}

export interface SocialProofSection {
    title: string;
    clients: { name: string; logo?: string | { url?: string } }[];
}

export interface UseCase {
    id: string;
    label: string;
    title: string;
    description: string;
    stat: string;
    icon: string; // Lucide icon name
    illustration?: string | { url?: string };
}

export interface UseCasesSection {
    title: string;
    subtitle: string;
    cases: UseCase[];
}

export interface PainPoint {
    id: number;
    question: string;
    solution: string;
    customIcon?: string | { url?: string };
}

export interface PainPointsSection {
    title: string;
    subtitle: string;
    points: PainPoint[];
}

export interface FeatureComparison {
    name: string;
    generic: string;
    us: string;
}

export interface WhyUsSection {
    title: string;
    subtitle: string;
    features: FeatureComparison[];
}

export interface ProcessStep {
    id: string;
    title: string;
    description: string;
    icon: string;
    image?: string | { url?: string };
}

export interface HowItWorksSection {
    title: string;
    subtitle: string;
    steps: ProcessStep[];
}

export interface BenefitStat {
    id: number;
    value: string;
    label: string;
    description: string;
    icon: string;
}

export interface BenefitsSection {
    title: string;
    subtitle: string;
    stats: BenefitStat[];
}

export interface PricingTier {
    name: string;
    price: string;
    description: string;
    features: { text: string }[];
    cta: string;
    highlight: boolean;
}

export interface PricingSection {
    title: string;
    subtitle: string;
    tiers: PricingTier[];
}

export interface FAQItem {
    question: string;
    answer: string;
}

export interface FAQSection {
    title: string;
    questions: FAQItem[];
}

export interface CTASection {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
}

export interface LandingPageData {
    hero: HeroSection;
    socialProof: SocialProofSection;
    useCases: UseCasesSection;
    painPoints: PainPointsSection;
    whyUs: WhyUsSection;
    howItWorks: HowItWorksSection;
    benefits: BenefitsSection;
    pricing: PricingSection;
    faq: FAQSection;
    cta: CTASection;
}
