# Pricing Component

The `Pricing` component is a versatile and customizable pricing table designed for displaying various pricing plans and their details.

## Features

- **Tabbed navigation** for different subscription tiers
- **Display of multiple pricing plans** with details
- **Customizable buttons and features**
- **Responsive design** for mobile and desktop

## Props

### PricingProps

- `title` (string): The title of the pricing section
- `subTitle` (string): The subtitle of the pricing section
- `description` (string): The description of the pricing section
- `featureTitle` (string): The title of the features section
- `features` (string[]): An array of features for the pricing section (optional)
- `prices` (Price[]): An array of pricing plans

### Price

- `tag` (string): An optional tag for the pricing plan
- `price` (string): The price of the plan
- `description` (string): The description of the plan
- `priceType` (string): The type of pricing (e.g., "Pay once, use it forever")
- `buttons` (Button[]): An array of buttons for the pricing plan

### Button

- `label` (string): The label of the button
- `primary` (boolean): Indicates if the button is primary

## Usage

```typescript
<Pricing
  title="Pay as you need"
  subTitle="One time purchase"
  description="We offer one-time purchases with credits, for you to use as needed. Always active."
  featureTitle="Unlock creativity once, enjoy forever"
  features={[
    "128 available credits for all images",
    "Up to 3 users",
    "24 hour response time",
    "Advanced analytics",
  ]}
  prices={[
    {
      tag: "Popular",
      price: "$699",
      description: "Prices in USD",
      priceType: "Pay once, use it forever. No strings attached.",
      buttons: [{ label: "Buy now", primary: true }],
    },
  ]}
/>
```
