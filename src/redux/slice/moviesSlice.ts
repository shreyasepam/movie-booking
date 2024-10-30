import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IDefaultState, IHTTPCodes } from "../reduxInterface";
import { IMovieAPIResponse } from "../interface/movie";
import axios, { HTTPCodes, myAxios } from "../axios";
import DummyData from "../../dummy/movies.json";

export interface MoviesState extends IDefaultState {
  data?: IMovieAPIResponse | undefined;
}

const initialState: MoviesState = {
  hasData: false,
  hasError: false,
  loading: false,
  data: undefined,
  error: undefined,
};

export const getAllMovies = createAsyncThunk(
  "movie/getAllMovies",
  async (_, { rejectWithValue }) => {
    try {
      return DummyData as IMovieAPIResponse;
      // const response = await myAxios.get<IMovie[]>(`/posts`);
      // if (response && response.data && response.data.length > 0) {
      //   return response.data;
      // } else {
      //   return rejectWithValue(HTTPCodes[204]);
      // }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          const { status } = error.response;
          return rejectWithValue(HTTPCodes[status] || HTTPCodes[500]);
        } else if (error.request) {
          return rejectWithValue(HTTPCodes[503]);
        }
      }
      return rejectWithValue(HTTPCodes[500]);
    }
  }
);

export const moviesSlice = createSlice({
  name: "movie",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getAllMovies.fulfilled,
        (state, action: PayloadAction<IMovieAPIResponse>) => {
          state.loading = false;
          state.hasData = true;
          state.data = action.payload;
          state.error = undefined;
        }
      )
      .addCase(getAllMovies.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.hasError = true;
        state.error = action.payload as IHTTPCodes;
      });
  },
  reducers: {},
});

export default moviesSlice.reducer;
