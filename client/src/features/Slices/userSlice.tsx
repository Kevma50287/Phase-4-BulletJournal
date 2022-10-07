import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserState } from '../../types/UserType'

const initialState: UserState = {
  id: 0,
  email: "",
  username: "",
  journals: [{ id: 0, name: "" }],
  first_name: "",
  last_name: "",
  phone_number: "",
  primary_journal_id: 0,
  friends: [],
  recent_mood: "",
  profile_picture: ""
}

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      const payload = action.payload
      state.id = payload.id
      state.email = payload.email
      state.username = payload.username
      state.first_name = payload.first_name
      state.last_name = payload.last_name
      state.phone_number = payload.phone_number
      state.journals = payload.journals
      state.primary_journal_id = payload.primary_journal_id
      state.friends = payload.friends
      state.recent_mood = payload.recent_mood
      state.profile_picture = payload.profile_picture
    },
    addJournal: (state, action: PayloadAction<{ id: number, name: string }>) => {
      state.journals.push(action.payload)
    }
  }
})

export const { setUser, addJournal } = userSlice.actions
export default userSlice.reducer
