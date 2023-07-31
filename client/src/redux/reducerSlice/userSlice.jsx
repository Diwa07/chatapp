import { createSlice } from '@reduxjs/toolkit';
//redux -> user: u

const initialState = {
    role: "",
    email: "",
    name: "",
    token: "",
    _id: ""
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUserDetails: (state, action) => {
        const { name, role, email, _id , token } = action.payload;
    
      return {
        ...state,
        token, _id, role, name, email
      }
    },
    REMOVE_USER_DETAILS_LOGOUT:  (state, action) => {
        return {
          ...initialState
          
        }
     },
  },
});




export const { addUserDetails , REMOVE_USER_DETAILS_LOGOUT} = userSlice.actions;
export default userSlice.reducer;