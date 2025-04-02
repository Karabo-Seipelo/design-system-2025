interface BadgeProps {
  discount: string | number;
  variant?: "default" | "promo";
}

const Badge: React.FC<BadgeProps> = ({ discount, variant = "default" }) => {
  const variantClasses = {
    default: "bg-amber-50 border-amber-200 text-amber-700",
    promo: "bg-green-50 border-green-200 text-green-700",
  };

  return (
    <div
      className={`inline-block  rounded-full border border-solid px-2.5 py-1 text-sm text-center ${variantClasses[variant]}`}
    >
      {`${discount}% off`}
    </div>
  );
};

export default Badge;
