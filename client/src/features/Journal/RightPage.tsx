import React from 'react'

const RightPage = () => {
  const handleSave = (e: any) => {
    console.log(e)
  }

  return (
    <div id='rightpage'>
      <div id='journal-date'>PlaceHolder Date</div>
      <form id='diary-input-container' onSubmit={handleSave}>
        <label htmlFor='diary-input'></label>
        <textarea id='diary-input'/>
      </form>
    </div>
  )
}

export default RightPage