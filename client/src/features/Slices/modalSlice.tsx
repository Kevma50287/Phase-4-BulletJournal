import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ModalState } from '../../types/ModalType'

const initialState:ModalState = {
  isModalOpen: false
} 

export const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers:{
    toggleModal: (state) => {
        console.log('2')
        state.isModalOpen = !state.isModalOpen
    }
  }
})

export const {toggleModal} = modalSlice.actions

export default modalSlice.reducer