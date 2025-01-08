import React from 'react';
import Image from 'next/image';

const BlogCard = () => {
    return (
        <div className='w-[340px] flex flex-col bg-white rounded-lg'>
            <div className="flex flex-col gap-3 self-stretch px-4 py-6">
                <header className="flex flex-col gap-2 self-stretch">
                    <div className="inline-flex items-center bg-green-50 px-2 py-0.5 rounded-full border border-solid border-green-200 font-normal text-sm text-center text-green-70">
                        <span className="font-normal text-sm text-center text-green-700">Interior</span>
                    </div>
                    <h5 className="font-semibold text-lg text-neutral-900">Top 5 Living Room Inspirations</h5>
                </header>
                <article className="flex flex-col gap-6 self-stretch font-medium text-base text-neutral-600">
                Curated vibrants colors for your living, make it pop &amp; calm in the same time.
                </article>
                <button className="flex justify-left items-center gap-1.5 rounded font-medium text-base text-indigo-700">Read more</button>
            </div>
        </div>
    );
};

export default BlogCard;

