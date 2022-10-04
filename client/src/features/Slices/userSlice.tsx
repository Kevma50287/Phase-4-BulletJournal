import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserState } from '../../types/UserType'

const initialState:UserState = {
  id: null,
  email: null,
  username: null,
  journals: [],
  first_name:null,
  last_name:null,
  phone_number:null
}

export const userSlice = createSlice({
  name:"user",
  initialState: initialState,
  reducers:{
    setUser: (state, action: PayloadAction<UserState>) => {
      const payload = action.payload
      state.id = payload.id
      state.email = payload.email
      state.username = payload.username
      state.first_name = payload.first_name
      state.last_name = payload.last_name
      state.phone_number = payload.phone_number
      state.journals = payload.journals
    }
  }
})

export const {setUser} = userSlice.actions
export default userSlice.reducer
