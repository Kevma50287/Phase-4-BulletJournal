import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import { useAppDispatch, useAppSelector } from '../../hooks';
import JournalImage from '../../Journal.png'
import { useNavigate } from 'react-router-dom';
import { setCurrentJournalId, setJournalEntries } from '../Slices/journalSlice';
import axios from 'axios';
import { useOutletContext } from 'react-router-dom';
import './JournalSlider.scss'
import { addJournal } from '../Slices/userSlice';
// interface props {
//     journals: {image:string}[]
// }


const JournalSlider = () => {
  const dispatch = useAppDispatch();
  const journalState = useAppSelector((state) => state.journal);
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const journals = useAppSelector((state) => state.user.journals);
  const showModal: any = useOutletContext();
  const [inputName, setInputName] = useState("");
  const [anyErrors, setAnyErrors] = useState([]);

  const fetchEntries = async (id: number) => {
    const cookieString = document.cookie.split("jwt=")[1];
    const res = await axios.get(
      `http://localhost:3000/journals/${id}/journal_entries`,
      {
        headers: {
          Authorization: `Bearer ${cookieString}`,
        },
      }
    );
    const journal_entries = res.data;
    dispatch(setJournalEntries(journal_entries));
    //return the length of journal entries to use for navigation
    return journal_entries.length;
  };

  const navigateToEntry = async (slide: any) => {
    const journal_id = slide.id;
    showModal[1](false)
    //If the id clicked is not the primary journal, update the primary journal and make a new fetch
    if (slide.id !== journalState.currentJournalId) {
      dispatch(setCurrentJournalId(slide.id));
      const length = await fetchEntries(slide.id);
      navigate(`./${journal_id}/journal_entries/${length}`);
    } else {
      const lastEntry = journalState.journal_entries.length;
      navigate(`./${journal_id}/journal_entries/${lastEntry}`);
    }
    //Else we will navigate to the last entry of the journal
  };

  const length = journals.length;

  /*check if current = length - 1 */

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(journals) || journals.length <= 0) {
    return null;
  }

  // POST REQUEST
  const handleFormModal = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cookieString = document.cookie.split("jwt=")[1];
    try {
      //Axios.HTTPMethod(URL, Object, {headers:{}}) => Object Data
      const response = await axios.post(
        "http://localhost:3000/journals",
        { name: inputName },
        {
          headers: {
            Authorization: `Bearer ${cookieString}`,
          },
        }
      )
      const data = response.data
      dispatch(addJournal({ id: data.id, name: data.name }))
      showModal[1](!showModal[0])
    } catch (err: any) {
      setAnyErrors(err.response.data.errors);
    }
  };

  //DELETE REQUEST - MAKE TRASHCAN APPEAR

  //PATCH

  const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target.value);
  };

  return (
    <div className="journal-container">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {journals.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
            onClick={() => navigateToEntry(slide)}
          >
            {index === current && (
              <img
                className="journal-display"
                src={JournalImage}
                alt="random"
              />
            )}
          </div>
        );
      })}
      <div className="journal-form-div">
        <div>
          {showModal[0] ? (
            <form onSubmit={handleFormModal}>
              <div className="modal-stuff">Journal Name</div>
              <input
                className="modal-input"
                onChange={(e) => handleTextInput(e)}
                required
                type="text"
              />
            </form>
          ) : null}
        </div>
      </div>
    </div>
  );
};


export default JournalSlider





// toggle true or false if popup 