import {configureStore} from '@reduxjs/toolkit'
import authReducer from './components/slices/authSlice'
import userReducer from './components/slices/userSlice'
import photoReducer from './components/slices/photoSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    photo: photoReducer
  }
})