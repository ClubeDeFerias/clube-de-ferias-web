import React from 'react';
import '../../index.css';

import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';

import { minorCardBlog } from '../../constants';

import { TextAtom } from './TextAtom';
import { BackgroundImageAtom } from './BackgroundImageAtom';

type Props = {
    className?: string;
}

export const SlideShowBlogAtom = ({ className }: Props) => {
    return (
        <div className={className}>
            <Slide transitionDuration={250}>
                {
                    minorCardBlog.map((element, index) => (
                        <div className="each-slide-effect" key={index} >
                            <BackgroundImageAtom
                                className={`flex items-center text-center rounded-xl m-2 justify-between h-36 w-96`}
                                image={element.image}
                            >
                            <TextAtom
                                children
                                className="w-full text-white font-bold text-sm"
                                text={element.title}
                            />
                            </BackgroundImageAtom>
                        </div>
                    ))
                }
            </Slide>
        </div>
    );
};