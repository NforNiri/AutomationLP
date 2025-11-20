import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsBenefitStat extends Struct.ComponentSchema {
  collectionName: 'components_elements_benefit_stats';
  info: {
    displayName: 'BenefitStat';
    icon: 'chart-line';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface ElementsClient extends Struct.ComponentSchema {
  collectionName: 'components_elements_clients';
  info: {
    displayName: 'Client';
    icon: 'user';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface ElementsFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_faq_items';
  info: {
    displayName: 'FAQItem';
    icon: 'question';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface ElementsFeatureComparison extends Struct.ComponentSchema {
  collectionName: 'components_elements_feature_comparisons';
  info: {
    displayName: 'FeatureComparison';
    icon: 'check-square';
  };
  attributes: {
    generic: Schema.Attribute.String;
    name: Schema.Attribute.String;
    us: Schema.Attribute.String;
  };
}

export interface ElementsFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_feature_items';
  info: {
    displayName: 'FeatureItem';
    icon: 'check';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface ElementsPainPoint extends Struct.ComponentSchema {
  collectionName: 'components_elements_pain_points';
  info: {
    displayName: 'PainPoint';
    icon: 'frown';
  };
  attributes: {
    question: Schema.Attribute.String;
    solution: Schema.Attribute.Text;
  };
}

export interface ElementsPricingTier extends Struct.ComponentSchema {
  collectionName: 'components_elements_pricing_tiers';
  info: {
    displayName: 'PricingTier';
    icon: 'tag';
  };
  attributes: {
    cta: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'elements.feature-item', true>;
    highlight: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    name: Schema.Attribute.String;
    price: Schema.Attribute.String;
  };
}

export interface ElementsProcessStep extends Struct.ComponentSchema {
  collectionName: 'components_elements_process_steps';
  info: {
    displayName: 'ProcessStep';
    icon: 'layer-group';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ElementsUseCase extends Struct.ComponentSchema {
  collectionName: 'components_elements_use_cases';
  info: {
    displayName: 'UseCase';
    icon: 'briefcase';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
    stat: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsBenefits extends Struct.ComponentSchema {
  collectionName: 'components_sections_benefits';
  info: {
    displayName: 'Benefits';
    icon: 'thumbs-up';
  };
  attributes: {
    stats: Schema.Attribute.Component<'elements.benefit-stat', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCta extends Struct.ComponentSchema {
  collectionName: 'components_sections_ctas';
  info: {
    displayName: 'CTA';
    icon: 'bullhorn';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsFaq extends Struct.ComponentSchema {
  collectionName: 'components_sections_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'question-circle';
  };
  attributes: {
    questions: Schema.Attribute.Component<'elements.faq-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
    icon: 'crown';
  };
  attributes: {
    badgeText: Schema.Attribute.String;
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    secondaryCtaLink: Schema.Attribute.String;
    secondaryCtaText: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsHowItWorks extends Struct.ComponentSchema {
  collectionName: 'components_sections_how_it_works';
  info: {
    displayName: 'HowItWorks';
    icon: 'cogs';
  };
  attributes: {
    steps: Schema.Attribute.Component<'elements.process-step', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsPainPoints extends Struct.ComponentSchema {
  collectionName: 'components_sections_pain_points';
  info: {
    displayName: 'PainPoints';
    icon: 'exclamation-circle';
  };
  attributes: {
    points: Schema.Attribute.Component<'elements.pain-point', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsPricing extends Struct.ComponentSchema {
  collectionName: 'components_sections_pricings';
  info: {
    displayName: 'Pricing';
    icon: 'dollar-sign';
  };
  attributes: {
    subtitle: Schema.Attribute.Text;
    tiers: Schema.Attribute.Component<'elements.pricing-tier', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsSocialProof extends Struct.ComponentSchema {
  collectionName: 'components_sections_social_proofs';
  info: {
    displayName: 'SocialProof';
    icon: 'users';
  };
  attributes: {
    clients: Schema.Attribute.Component<'elements.client', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsUseCases extends Struct.ComponentSchema {
  collectionName: 'components_sections_use_cases';
  info: {
    displayName: 'UseCases';
    icon: 'laptop-code';
  };
  attributes: {
    cases: Schema.Attribute.Component<'elements.use-case', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsWhyUs extends Struct.ComponentSchema {
  collectionName: 'components_sections_why_uses';
  info: {
    displayName: 'WhyUs';
    icon: 'balance-scale';
  };
  attributes: {
    features: Schema.Attribute.Component<'elements.feature-comparison', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.benefit-stat': ElementsBenefitStat;
      'elements.client': ElementsClient;
      'elements.faq-item': ElementsFaqItem;
      'elements.feature-comparison': ElementsFeatureComparison;
      'elements.feature-item': ElementsFeatureItem;
      'elements.pain-point': ElementsPainPoint;
      'elements.pricing-tier': ElementsPricingTier;
      'elements.process-step': ElementsProcessStep;
      'elements.use-case': ElementsUseCase;
      'sections.benefits': SectionsBenefits;
      'sections.cta': SectionsCta;
      'sections.faq': SectionsFaq;
      'sections.hero': SectionsHero;
      'sections.how-it-works': SectionsHowItWorks;
      'sections.pain-points': SectionsPainPoints;
      'sections.pricing': SectionsPricing;
      'sections.social-proof': SectionsSocialProof;
      'sections.use-cases': SectionsUseCases;
      'sections.why-us': SectionsWhyUs;
    }
  }
}
