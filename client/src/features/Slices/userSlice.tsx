import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserState } from '../../types/UserType'

const initialState:UserState = {
  id: null,
  email: null,
  username: null,
  journals: []
}

export const userSlice = createSlice({
  name:"user",
  initialState: initialState,
  reducers:{
    setUser: (state, action: PayloadAction<UserState>) => {
      state = action.payload
    }
  }
})

export const {setUser} = userSlice.actions
export default userSlice.reducer
