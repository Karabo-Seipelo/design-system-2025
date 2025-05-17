export type Orientation = "left" | "right";

export type Layout = "list" | "grid";

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface FeatureListProps {
  features: Feature[];
  featureLayout: Layout;
}

export interface FeatureImageProps {
  imageUrl: string;
  orientation: Orientation;
}

export interface FeatureHeaderProps {
  title: string;
  subTitle: string;
  description: string;
}

export interface FeatureContentProps
  extends Partial<FeatureListProps>,
    Partial<FeatureImageProps> {}

export interface FeatureSectionProps
  extends FeatureContentProps,
    FeatureHeaderProps {}
