import depressedPanda from '../../images/depressedPanda.svg'
import sadPanda from '../../images/sadPanda.svg'
import neutralPanda from '../../images/neutralPanda.svg'
import happyPanda from '../../images/happyPanda.svg'
import superHappyPanda from '../../images/superHappyPanda.svg'

const DailyEmotionCheck = () => {
  return (
    <>
      <h3>How are you feeling today?</h3>
      <div id='emotion-icon-container'>
        <img className='emotion-icon' src={depressedPanda} alt='depressed panda'/>
        <img className='emotion-icon' src={sadPanda} alt='sad panda'/>
        <img className='emotion-icon' src={neutralPanda} alt='ok panda'/>
        <img className='emotion-icon' src={happyPanda} alt='happy panda'/>
        <img className='emotion-icon' src={superHappyPanda} alt='super happy panda'/>
      </div>
      
    </>
  )
}

export default DailyEmotionCheck