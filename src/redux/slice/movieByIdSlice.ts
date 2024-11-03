import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IDefaultState, IHTTPCodes } from "../reduxInterface";
import { IMovie } from "../interface/movie";
import axios, { HTTPCodes, myAxios } from "../axios";
// import DummyData from "../../dummy/movies.json";

export interface MoviesState extends IDefaultState {
  data?: IMovie | undefined;
}

const initialState: MoviesState = {
  hasData: false,
  hasError: false,
  loading: false,
  data: undefined,
  error: undefined,
};

export const getMovieById = createAsyncThunk<
  IMovie | undefined,
  { id: string }
>("movieById/getMovieById", async ({ id }, { rejectWithValue }) => {
  try {
    // const datas = DummyData as IMovieAPIResponse;
    // return datas?.results?.find((x) => x.id === parseInt(id));

    const response = await myAxios.get<IMovie>(`/movie/${id}?language=en-US`);
    if (response && response.data) {
      return response.data;
    } else {
      return rejectWithValue(HTTPCodes[204]);
    }
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
});

export const movieByIdSlice = createSlice({
  name: "movieById",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getMovieById.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getMovieById.fulfilled,
        (state, action: PayloadAction<IMovie | undefined>) => {
          state.loading = false;
          state.hasData = true;
          state.data = action.payload;
          state.error = undefined;
        }
      )
      .addCase(getMovieById.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.hasError = true;
        state.error = action.payload as IHTTPCodes;
      });
  },
  reducers: {},
});

export default movieByIdSlice.reducer;
