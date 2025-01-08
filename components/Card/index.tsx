import React from 'react';
import Image from 'next/image';

export interface TestimonialCardProps {
    /** User's name */
    name: string;
    /** User's handle */
    handle: string;
    /** User's testimonial */
    testimonial: string;
    /** User's avatar */
    avatar: AvatarProps;
};

export interface AvatarProps {
  imageUrl: string;
  alt: string;
  classes?: string;
}

const Avatar = ({ imageUrl, alt, classes }: AvatarProps) => <Image src={imageUrl} className={classes} alt={alt} width={12} height={12} />;


const TestimonialCard = ( {
    handle,
    name,
    testimonial,
    avatar,
}: TestimonialCardProps) => {
    return (
        <div className="md:w-[340px] flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-4 self-stretch">
            <div className="w-12 h-12">
                <Avatar imageUrl={avatar.imageUrl} alt={name} classes="w-12 h-12 object-cover" />
            </div>
            <div className="flex flex-col gap-px grow">
                <span className="font-semibold text-lg text-justify text-neutral-900">{name}</span>
                <span className="font-normal text-sm text-neutral-600">{handle}</span>
            </div>
            </div>
            <span className="font-normal text-base text-neutral-600">{testimonial}</span>
        </div>
    );
}

export default TestimonialCard;