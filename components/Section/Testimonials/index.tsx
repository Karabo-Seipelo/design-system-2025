import Testimonial from "../../Card/Testimonial/index";
import { v4 as uuidv4 } from "uuid";

type TestimonialProps = {
  firstName?: string;
  lastName?: string;
  handle?: string;
  testimonial: string;
  avatar: {
    imageUrl: string;
    alt: string;
  };
};

type TestimonialsProps = {
  title: string;
  subTitle: string;
  description: string;
  testimonials: TestimonialProps[];
};

const Testimonials = ({
  title,
  subTitle,
  description,
  testimonials,
}: TestimonialsProps) => {
  return (
    <div className="w-full rounded bg-white shadow-sm md:rounded-md md:shadow-md lg:shadow-lg">
      <div className="flex h-full flex-col imtes-start px-3 py-12 md:px-4 md:py-16 lg:items-center lg:justify-center lg:px-24 lg:py-24">
        <section className="flex flex-col gap-12 md:gap-16">
          <header className="flex flex-col items-center justify-center text-center">
            {subTitle && (
              <small className="text-xl font-semibold text-indigo-700 pb-4">
                {subTitle}
              </small>
            )}
            {title && (
              <h1 className="text-3xl md:text-5xl font-semibold text-neutral-900 pb-4">
                {title}
              </h1>
            )}
            {description && (
              <p className="font-normal text-lg text-neutral-600 md:text-wrap md:text-center md:text-xl">
                {description}
              </p>
            )}
          </header>
          <main className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-8">
            <div className="flex flex-col gap-12 self-stretch w-full md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-3">
              {testimonials?.map(
                ({ firstName, lastName, handle, testimonial, avatar }) => (
                  <Testimonial
                    key={uuidv4()}
                    firstName={firstName}
                    lastName={lastName}
                    handle={handle}
                    testimonial={testimonial}
                    avatar={avatar}
                  />
                ),
              )}
            </div>
          </main>
        </section>
      </div>
    </div>
  );
};

export default Testimonials;
