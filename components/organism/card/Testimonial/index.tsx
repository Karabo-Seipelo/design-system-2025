import Avatar from "$/atoms/avatar";

export interface TestimonialCardProps {
  /** User's name */
  firstName?: string;
  lastName?: string;
  /** User's handle */
  handle?: string;
  /** User's testimonial */
  testimonial: string;
  /** User's avatar */
  avatar: {
    imageUrl: string;
    alt: string;
  };
  classes?: string;
}

export interface AvatarProps {
  imageUrl: string;
  classes?: string;
  alt: string;
}

const TestimonialCard = ({
  handle,
  firstName,
  lastName,
  testimonial,
  avatar,
  classes = "",
}: TestimonialCardProps) => {
  return (
    <div
      className={`flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md ${classes}`}
    >
      <header className="flex items-center gap-4 self-stretch">
        {avatar?.imageUrl && avatar?.alt && (
          <Avatar
            src={avatar.imageUrl}
            alt={`${firstName && lastName ? firstName + " " + lastName : "unknown user"}`}
            classes="w-12 h-12 object-cover rounded-full"
          />
        )}
        <div className="flex flex-col gap-px grow">
          <span className="font-semibold text-lg text-justify text-neutral-900">{`${firstName && lastName ? firstName + " " + lastName : "unknown user"}`}</span>
          {handle && (
            <span className="font-normal text-sm text-neutral-600">
              {handle}
            </span>
          )}
        </div>
      </header>
      <blockquote className="font-normal text-base text-neutral-600">
        {testimonial}
      </blockquote>
    </div>
  );
};

export default TestimonialCard;
