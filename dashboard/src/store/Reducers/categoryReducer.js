import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const category_add = createAsyncThunk(
  'category/category_add',
  async(info, {rejectWithValue, fulfillWithValue}) => {
    console.log(info);
    try {
      const {data} = await api.post('/category-add', info, {withCredentials: true})
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }

)

export const categoryReducer = createSlice({
  name: 'category',
  initialState: {
    successMessage: '',
    errorMessage: '',
    loader: true,
    categoryInfo: [],
  },
  reducers: {
    clearMessage: (state, _) => {
      state.errorMessage = '';
      state.successMessage = '';
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(category_add.pending, (state, {payload}) => {
      state.loader = true;
    })
    .addCase(category_add.rejected, (state, {payload}) => {
      state.loader = false;
      state.errorMessage = payload.error;
    })
    .addCase(category_add.fulfilled, (state, {payload}) => {
      state.loader = false;
      state.successMessage = payload.message;
    })
  }
})

export const {clearMessage} = categoryReducer.actions;
export default categoryReducer.reducer;