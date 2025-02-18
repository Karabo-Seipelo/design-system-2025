import type { Meta, StoryObj } from '@storybook/react';
import PricingTier from '.';

const meta = {
    title: 'Marketing/PricingTier',
    component: PricingTier,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof PricingTier>;

export default meta;
type Story = StoryObj<typeof meta>;

const basicPlanFeatures = [
    "Standard quality images",
    "Limited to personal use",
    "Email support"
]

const standardPlanFeatures = [
    "Expanded library with more diverse abstract images",
    "High-resolution images available",
    "Suitable for commercial use",
    "Priority email support",
    "Advanced analytics"
]

const premiumPlanFeatures = [
    "Full access to the entire image library, including exclusive content",
    "Highest quality images, including premium collections",
    "Commercial and resale rights",
    "Dedicated customer support line",
    "24/7 support response time",
    "Advanced analytics and insights"
]

const basicPlan = (price: string, billedAt: string) => ({
    plan: "Basic Plan",
    description: "Access to a curated selection of abstract images",
    price,
    billedAt,
    features: basicPlanFeatures,
    buttons: [
        {
            label: "Buy now",
            primary: false
        }
    ],
});

const standardPlan = (price: string, billedAt: string) => ({
    highlight: true,
    tag: "Most popular",
    plan: "Standard Plan",
    price,
    description: "Next-level Integrations, priced economically",
    billedAt,
    features: standardPlanFeatures,
    buttons: [
        {
            label: "Buy now",
            primary: true
        }
    ],
})

const premiumPlan = (price: string, billedAt: string) => ({
    plan: "Premium Plan",
    price,
    description: "Experience limitless living for power users",
    billedAt,
    features: premiumPlanFeatures,
    buttons: [
        {
            label: "Buy now",
            primary: false
        }
    ],
});

export const Tiers: Story = {
    args: {
        title: 'Fit for all your needs',
        description: 'Pick the plan that suits you today and step up as your demands grow - our flexible options have your journey mapped out.',
        subTitle: 'Pricing Tiers',
        featureTitle: "Unlock creativity once, enjoy forever",
        features: [
            "128 available credits for all images",
            "Up to 3 users",
            "24 hour response time",
            "Advanced analytics"
        ],
        tiers: [
            {
                subscription: "Monthly",
                prices: [
                    basicPlan("$9.99", "Billed monthly"),
                    standardPlan("$19.99", "Billed monthly"),
                    premiumPlan("$29.99", "Billed monthly")
                ]
            },
            {
                subscription: "Annually",
                prices: [
                    basicPlan("$6.99", "Billed annually ($84)"),
                    standardPlan("$15.99", "Billed annually ($192)"),
                    premiumPlan("$25.99", "Billed annually ($312)")
                ]
            },
        ]
    }
};