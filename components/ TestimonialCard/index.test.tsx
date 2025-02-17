/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
import TestimonialCard, { TestimonialCardProps } from './index';
import { JSX } from 'react/jsx-runtime';


jest.mock('next/image', () => ({
    __esModule: true,
    default: (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLImageElement> & React.ImgHTMLAttributes<HTMLImageElement>) => {
        return <img {...props} />;
    },
}));

describe('TestimonialCard', () => {
    let defaultProps: React.JSX.IntrinsicAttributes & TestimonialCardProps;
    
    beforeAll(() => {
        defaultProps = {
            firstName: 'John',
            lastName: 'Doe',
            handle: '@johndoe',
            testimonial: 'This is a great product!',
            avatar: {
                imageUrl: '/path/to/avatar.jpg',
                alt: 'John Doe',
            }
        };
    });
    
    it('renders the testimonial card with all props', () => {
        const { getByText, getByAltText } = render(<TestimonialCard {...defaultProps} />);
        
        expect(getByText('John Doe')).toBeInTheDocument();
        expect(getByText('@johndoe')).toBeInTheDocument();
        expect(getByText('This is a great product!')).toBeInTheDocument();
        expect(getByAltText('John Doe')).toBeInTheDocument();
    });

    it('renders the testimonial card without handle', () => {
        const propsWithoutHandle = { ...defaultProps, handle: undefined };
        const { getByText, queryByText } = render(<TestimonialCard {...propsWithoutHandle} />);
        
        expect(getByText('John Doe')).toBeInTheDocument();
        expect(queryByText('@johndoe')).not.toBeInTheDocument();
        expect(getByText('This is a great product!')).toBeInTheDocument();
    });

    it('renders the testimonial card with unknown user when name is not provided', () => {
        const propsWithoutName = { ...defaultProps, firstName: undefined, lastName: undefined };
        const { getByText, getByAltText } = render(<TestimonialCard {...propsWithoutName} />);
        
        expect(getByText('unknown user')).toBeInTheDocument();
        expect(getByAltText('unknown user')).toBeInTheDocument();
        expect(getByText('This is a great product!')).toBeInTheDocument();
    });

    it.skip('renders the testimonial card with custom avatar classes', () => {
        const customAvatarProps = { ...defaultProps, avatar: { ...defaultProps.avatar, classes: 'custom-class' } };
        const { container } = render(<TestimonialCard {...customAvatarProps} />);
        
        expect(container.querySelector('.custom-class')).toBeInTheDocument();
    });
});