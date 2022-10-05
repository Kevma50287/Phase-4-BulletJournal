import depressedPanda from '../../images/depressedPanda.svg'
import sadPanda from '../../images/sadPanda.svg'
import neutralPanda from '../../images/neutralPanda.svg'
import happyPanda from '../../images/happyPanda.svg'
import superHappyPanda from '../../images/superHappyPanda.svg'
import EmotionButton from './EmotionButton'
import uuid from 'react-uuid'

interface EmotionCheckProps {
  setEmotion:Function
  currentEmotion:string
}
const DailyEmotionCheck = ({setEmotion, currentEmotion}:EmotionCheckProps) => {
  const pandas = [depressedPanda, sadPanda, neutralPanda, happyPanda, superHappyPanda]
  const pandasArray = pandas.map((panda) => {
    const aPanda = panda
    return (
      <EmotionButton key={uuid()} image={aPanda} setEmotion={setEmotion} currentEmotion={currentEmotion} />
    )
  })

  return (
    <>
      <h3>How are you feeling today?</h3>
      <div id='all-emotions-container'>
        {pandasArray}
      </div>
      
    </>
  )
}

export default DailyEmotionCheck