export enum ORIENTATION {
  LEFT = "left",
  RIGHT = "right",
}

export enum FEATURE_LAYOUT {
  LIST = "list",
  GRID = "grid",
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface FeatureListProps {
  features: Feature[];
  featureLayout: FEATURE_LAYOUT;
}

export interface FeatureImageProps {
  imageUrl: string;
  orientation: ORIENTATION;
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
