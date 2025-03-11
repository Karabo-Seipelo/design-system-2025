import Testimonial from "../../Card/Testimonial/index";

export type TestimonialProps = {
  id: string;
  firstName?: string;
  lastName?: string;
  handle?: string;
  testimonial: string;
  avatar: {
    imageUrl: string;
    alt: string;
  };
};

export type TestimonialsProps = {
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
    <div className="flex h-full flex-col items-start px-3 py-12 md:px-4 md:py-16 lg:items-center lg:justify-center lg:px-24 lg:py-24">
      <section className="flex flex-col gap-12 md:gap-16 w-full">
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
        <main className="">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-9 space-y-9">
            {testimonials?.map(
              ({ id, firstName, lastName, handle, testimonial, avatar }) => (
                <Testimonial
                  key={id}
                  firstName={firstName}
                  lastName={lastName}
                  handle={handle}
                  testimonial={testimonial}
                  avatar={avatar}
                  classes="break-inside-avoid"
                />
              ),
            )}
          </div>
        </main>
      </section>
    </div>
  );
};

export default Testimonials;
