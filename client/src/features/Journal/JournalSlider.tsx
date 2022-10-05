import React, { useState } from 'react';
 import { JournalSliderData } from './JournalSliderData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import { useAppSelector } from '../../hooks';
import JournalImage from '../../Journal.png'
import { useNavigate } from 'react-router-dom';

// interface props {
//     journals: {image:string}[]
// }

const JournalSlider = () => {
    const navigate = useNavigate()
     const [current, setCurrent] = useState(0);
     const journals = useAppSelector(state => state.user.journals)
    const navigateToEntry = (slide:any) => {
        const journal_id = slide.id
        navigate(`/${journal_id}/journal_entries/1`)
    }

     const length = journals.length 
     
     /*check if current = length - 1 */
      
     const nextSlide = () => {
         setCurrent(current === length - 1 ? 0 : current + 1)
        };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1 )
    }

     if(!Array.isArray(journals) || journals.length <= 0) {
        return null;
     }

    return (
        <section className='slider'>
            <FaArrowAltCircleLeft className = "left-arrow" onClick = {prevSlide} />
            <FaArrowAltCircleRight className='right-arrow' onClick ={nextSlide} /> 
            {journals.map((slide, index) => {
                return (
                    <div 
                        className = {index === current ? 'slide active' : 'slide'}
                        key = {index}
                        onClick = {() => navigateToEntry(slide)}
                    >
                        {index === current && ( 
                        <img src={JournalImage} alt="random" className='ex-image' /> 
                        )}
                    </div>
                );
            })}
        </section>
    );
}


export default JournalSlider 