import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IDefaultState, IHTTPCodes } from "../reduxInterface";
import axios, { HTTPCodes, myAxios } from "../axios";
import GenreData from "../../dummy/genre.json";
import LanguageData from "../../dummy/languages.json";
import { IMovieGenre, IMovieLanguage } from "../interface/movieMeta";
import { movieObjectMapper } from "../config";

type MovieMetaData = {
  genres: Record<string, string | number> | undefined;
  languages: Record<string, string | number> | undefined;
};

export interface MovieMetaState extends IDefaultState {
  data?: MovieMetaData | undefined;
}

const initialState: MovieMetaState = {
  hasData: false,
  hasError: false,
  loading: false,
  data: undefined,
  error: undefined,
};

export const getMovieMeta = createAsyncThunk(
  "movieMeta/getMovieMeta",
  async (_, { rejectWithValue }) => {
    try {
      const _genres = GenreData as IMovieGenre[];
      const _languages = LanguageData as IMovieLanguage[];
      let genres = {};
      let languages = {};
      if (_genres.length > 0) {
        genres = movieObjectMapper(_genres, "id", "name");
      }
      if (_languages.length > 0) {
        languages = movieObjectMapper(_languages, "iso_639_1", "english_name");
      }

      return {
        genres,
        languages,
      };
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

export const movieMetaSlice = createSlice({
  name: "movieMeta",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getMovieMeta.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getMovieMeta.fulfilled,
        (state, action: PayloadAction<MovieMetaData | undefined>) => {
          state.loading = false;
          state.hasData = true;
          state.data = action.payload;
          state.error = undefined;
        }
      )
      .addCase(getMovieMeta.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.hasError = true;
        state.error = action.payload as IHTTPCodes;
      });
  },
  reducers: {},
});

export default movieMetaSlice.reducer;
