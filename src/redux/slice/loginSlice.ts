import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface LoginState {
  phone?: string;
  name?: string;
  email?: string;
  isLoggedIn?: boolean;
  modelMode?: "login" | "profile";
  isOpen?: boolean;
}

const initialState: LoginState = {
  isLoggedIn: false,
  phone: "",
  email: "",
  name: "",
  modelMode: "login",
  isOpen: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoginModal: (state, action: PayloadAction<LoginState>) => {
      state.isOpen = action.payload.isOpen;
      state.modelMode = state.isLoggedIn ? "profile" : "login";
    },
    setUserDetails: (state, action: PayloadAction<LoginState>) => {
      state.isLoggedIn = true;
      state.phone = action.payload.phone;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.isOpen = false;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.phone = "";
      state.email = "";
      state.name = "";
      state.modelMode = "login";
      state.isOpen = false;
    },
  },
});

export const { setUserDetails, logout, setLoginModal } = loginSlice.actions;

export default loginSlice.reducer;
