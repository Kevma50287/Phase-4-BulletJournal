import React, { useState } from 'react';
 import { JournalSliderData } from './JournalSliderData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import { useAppDispatch, useAppSelector } from '../../hooks';
import JournalImage from '../../Journal.png'
import { useNavigate } from 'react-router-dom';
import { setCurrentJournalId, setJournalEntries } from '../Slices/journalSlice';
import axios from 'axios';
import { useOutletContext } from 'react-router-dom';
import { display } from '@mui/system';
// interface props {
//     journals: {image:string}[]
// }


const JournalSlider = () => {
    const dispatch = useAppDispatch()
    const journalState = useAppSelector(state => state.journal)
    const navigate = useNavigate()
    const [current, setCurrent] = useState(0);
    const journals = useAppSelector(state => state.user.journals)
    const showModal:any = useOutletContext()
    console.log(showModal[0])
    const [inputName, setInputName] = useState('')
     

     




    const fetchEntries = async (id:number) => {
        const cookieString = document.cookie.split('jwt=')[1]
        const res = await axios.get(`http://localhost:3000/journals/${id}/journal_entries`, {
            headers: {
                Authorization: `Bearer ${cookieString}`
            }
        })
        const journal_entries = res.data
        dispatch(setJournalEntries(journal_entries))
        //return the length of journal entries to use for navigation
        return journal_entries.length
    }


    const navigateToEntry = async (slide:any) => {
        const journal_id = slide.id
        //If the id clicked is not the primary journal, update the primary journal and make a new fetch
        if (slide.id !== journalState.currentJournalId){
            dispatch(setCurrentJournalId(slide.id))
            const length = await fetchEntries(slide.id)
            navigate(`./${journal_id}/journal_entries/${length}`)
        } else {
            const lastEntry = journalState.journal_entries.length
            navigate(`./${journal_id}/journal_entries/${lastEntry}`)
        }
        //Else we will navigate to the last entry of the journal
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

     const handleFormModal = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        

     }

     const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target.value)
  }

     



    return (
        <section className='slider'>
          
                {showModal[0] ? <form onSubmit={handleFormModal} >
                <div className="modal-label">Journal Name</div>
                   <input onChange={(e) => handleTextInput(e)}
                    required 
                    type ="text"

                      />
                </form> 
                  :
                null}

          
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





// toggle true or false if popup 