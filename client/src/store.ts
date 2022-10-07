import { configureStore } from "@reduxjs/toolkit";
import calendarReducer from "./features/Slices/calendarSlice";
import userReducer from "./features/Slices/userSlice"
import journalReducer from "./features/Slices/journalSlice"

const store = configureStore({
  reducer: {
    calendar: calendarReducer,
    user: userReducer,
    journal: journalReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
