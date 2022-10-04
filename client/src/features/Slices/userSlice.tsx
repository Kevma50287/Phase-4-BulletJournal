import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserState } from '../../types/UserType'

const initialState:UserState = {
  id: null,
  email: null,
  username: null,
  journals: []
}

