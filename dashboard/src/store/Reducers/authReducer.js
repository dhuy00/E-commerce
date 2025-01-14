import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../../api/api"
import {jwtDecode} from "jwt-decode"

export const admin_login = createAsyncThunk(
  'auth/admin_login',
  async(info, {rejectWithValue, fulfillWithValue}) => {
    console.log(info)
    try {
      const {data} = await api.post('/admin-login', info, {withCredentials: true})
      localStorage.setItem('accessToken', data.token)
      return fulfillWithValue(data)
    } catch (error) {
    //  console.log(error.response.data)
      return rejectWithValue(error.response.data)
    }
  }
)


export const seller_register = createAsyncThunk(
  'auth/seller_register',
  async(info, {rejectWithValue, fulfillWithValue}) => {
    console.log(info)
    try {
      const {data} = await api.post('/seller-register', info, {withCredentials: true})
      localStorage.setItem('accessToken', data.token);
      return fulfillWithValue(data)
    } catch (error) {
    //  console.log(error.response.data)
      return rejectWithValue(error.response.data)
    }
  }
)


export const get_user_info = createAsyncThunk(
  'auth/get_user_info',
  async(_, {rejectWithValue, fulfillWithValue}) => {
    try {
      const {data} = await api.get('/get-user', {withCredentials: true})
    //  localStorage.setItem('accessToken', data.token)
    //  console.log(data);
      return fulfillWithValue(data)
    } catch (error) {
    //  console.log(error.response.data)
    return rejectWithValue(error.response.data)
    }
  }
)


export const seller_login = createAsyncThunk(
  'auth/seller_login',
  async(info, {rejectWithValue, fulfillWithValue}) => {
    console.log(info)
    try {
      const {data} = await api.post('/seller-login', info, {withCredentials: true})
      localStorage.setItem('accessToken', data.token)
      //console.log(data);
      return fulfillWithValue(data)
    } catch (error) {
    //  console.log(error.response.data)
    return rejectWithValue(error.response.data)
    }
  }
)

const returnRole = (token) => {
  if(token) {
    const decodeToken = jwtDecode(token);
    const expireTime = new Date(decodeToken.exp * 1000)
    if (new Date() > expireTime) {
      localStorage.removeItem('accessToken');
      return ''
    }
    else {
      return decodeToken.role;
    }
  }
  else {
    return '';
  }
}

export const authReducer = createSlice({
  name: 'auth',
  initialState: {
    successMessage: '',
    errorMessage: '',
    loader: false,
    userInfo: {},
    role: returnRole(localStorage.getItem('accessToken')),
    token: localStorage.getItem('accessToken'),
  },
  reducers: {
    clearMessage: (state, _) => {
      state.errorMessage = "";
      state.successMessage = "";
    }
  },
  extraReducers: (builder) => {
    //Admin login
    builder
    .addCase(admin_login.pending, (state, {payload}) => {
      state.loader = true;
    })
    .addCase(admin_login.rejected, (state, {payload}) => {
      state.loader = false;
      state.errorMessage = payload.error;
    })
    .addCase(admin_login.fulfilled, (state, {payload}) => {
      state.loader = false;
      state.successMessage = payload.message;
      state.token = payload.token;
      state.role = returnRole(payload.token);
    })

    //Seller Register
    .addCase(seller_register.pending, (state, {payload}) => {
      state.loader = true;
    })
    .addCase(seller_register.rejected, (state, {payload}) => {
      state.loader = false;
      state.errorMessage = payload.error;
    })
    .addCase(seller_register.fulfilled, (state, {payload}) => {
      state.loader = false;
      state.successMessage = payload.message;
      state.token = payload.token;
      state.role = returnRole(payload.token);
    })

    //Seller login
    builder
    .addCase(seller_login.pending, (state, {payload}) => {
      state.loader = true;
    })
    .addCase(seller_login.rejected, (state, {payload}) => {
      state.loader = false;
      state.errorMessage = payload.error;
    })
    .addCase(seller_login.fulfilled, (state, {payload}) => {
      state.loader = false;
      state.successMessage = payload.message;
      state.token = payload.token;
      state.role = returnRole(payload.token);
    })

    //Get user Info
    .addCase(get_user_info.fulfilled, (state, {payload}) => {
      state.loader = false;
      state.userInfo = payload.userInfo;
    })
    // .addCase(get_user_info.rejected, (state, {payload}) => {
    //   state.loader = false;
    //   state.errorMessage = payload.error;
    // })

  }
})

export const {clearMessage} = authReducer.actions;
export default authReducer.reducer