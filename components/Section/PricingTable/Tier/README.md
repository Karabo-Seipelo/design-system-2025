## Introduction

The Pricing Tier component is a versatile and customizable pricing table desgined for displaying various pricing subscription plans and their details.

## Features

- Tabbed navigation for different subscription tiers
- Display of multiple pricing plans with details
- Customizable buttons and features
- Responsive design for mobile and desktop

## Props

- title (string): The title of the pricing tier
- subTitle (string): The subtitle of the pricing tier
- description (string): The description of the pricing tier
- featureTitle (string): The title of the features section
- features (string[]): An array of features for the pricing tier (optional)
- tiers (Tier[]): An array of pricing tiers (optional)

```typescript
<Pricing
  title="Fit for all your needs"
  subTitle="Pricing Tiers"
  description="Pick the plan that suits you today and step up as your demands grow - our flexible options have your journey mapped out."
  featureTitle="Unlock creativity once, enjoy forever"
  features={[
    "128 available credits for all images",
    "Up to 3 users",
    "24 hour response time",
    "Advanced analytics",
  ]}
  tiers={[
    {
      subscription: "Monthly",
      prices: [
        {
          plan: "Basic Plan",
          description: "Access to a curated selection of abstract images",
          price: "$9.99",
          billedAt: "Billed monthly",
          features: [
            "Standard quality images",
            "Limited to personal use",
            "Email support",
          ],
          buttons: [{ label: "Buy now", primary: false }],
        },
        {
          tag: "Most popular",
          plan: "Standard Plan",
          price: "$19.99",
          description: "Next-level Integrations, priced economically",
          billedAt: "Billed monthly",
          features: [
            "Expanded library with more diverse abstract images",
            "High-resolution images available",
            "Suitable for commercial use",
            "Priority email support",
            "Advanced analytics",
          ],
          buttons: [{ label: "Buy now", primary: true }],
        },
        {
          plan: "Premium Plan",
          price: "$29.99",
          description: "Experience limitless living for power users",
          billedAt: "Billed monthly",
          features: [
            "Full access to the entire image library, including exclusive content",
            "Highest quality images, including premium collections",
            "Commercial and resale rights",
            "Dedicated customer support line",
            "24/7 support response time",
            "Advanced analytics and insights",
          ],
          buttons: [{ label: "Buy now", primary: false }],
        },
      ],
    },
    {
      subscription: "Annually",
      prices: [
        {
          plan: "Basic Plan",
          description: "Access to a curated selection of abstract images",
          price: "$6.99",
          billedAt: "Billed annually ($84)",
          features: [
            "Standard quality images",
            "Limited to personal use",
            "Email support",
          ],
          buttons: [{ label: "Buy now", primary: false }],
        },
        {
          tag: "Most popular",
          plan: "Standard Plan",
          price: "$15.99",
          description: "Next-level Integrations, priced economically",
          billedAt: "Billed annually ($192)",
          features: [
            "Expanded library with more diverse abstract images",
            "High-resolution images available",
            "Suitable for commercial use",
            "Priority email support",
            "Advanced analytics",
          ],
          buttons: [{ label: "Buy now", primary: true }],
        },
        {
          plan: "Premium Plan",
          price: "$25.99",
          description: "Experience limitless living for power users",
          billedAt: "Billed annually ($312)",
          features: [
            "Full access to the entire image library, including exclusive content",
            "Highest quality images, including premium collections",
            "Commercial and resale rights",
            "Dedicated customer support line",
            "24/7 support response time",
            "Advanced analytics and insights",
          ],
          buttons: [{ label: "Buy now", primary: false }],
        },
      ],
    },

  ]}
/>
```

## Customization

The Pricing Tier component can be customized by passing in different props to the component. The component can be customized by changing the title, subtitle, description, features, and pricing tiers.

## Dependencies

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [@headlessui/react](https://headlessui.dev/react/)
