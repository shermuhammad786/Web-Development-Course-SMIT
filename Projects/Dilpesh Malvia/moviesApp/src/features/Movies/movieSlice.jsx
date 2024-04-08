import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../common/apis/MovieApi";
import { APIkey } from "../../common/apis/ApiKey";

export const fetchingAsyncMovies = createAsyncThunk(
    "movies/fetchingAsyncMovies",
    async (term) => {
        // const movieText = "Harry";
        const response = await MovieApi.get(`?apikey=${APIkey}&s=${term}&type=movie`);
        return response.data;
    }
);
export const fetchingAsyncShows = createAsyncThunk(
    "shows/fetchingAsyncShows",
    async (term) => {
        // const SeriesText = "Friends";
        const response = await MovieApi.get(`?apikey=${APIkey}&s=${term}&type=series`);
        return response.data;
    }
);
export const fetchingAsyncMovieAndShowDetail = createAsyncThunk(
    "shows/fetchingAsyncMovieAndShowDetail",
    async (id) => {
        const response = await MovieApi.get(`?apikey=${APIkey}&i=${id}&plot=full`);
        return response.data;
    }
);

const initialState = {
    movies: {},
    shows: {},
    selectedMovieOrShow: {},
};

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        removeSelectedMovie: (state) => {
            state.selectedMovieOrShow = {};
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchingAsyncMovies.pending, () => {
                console.log("pending");
            })
            .addCase(fetchingAsyncMovies.fulfilled, (state, action) => {
                console.log("fetching movies successfully");
                state.movies = action.payload;
            })
            .addCase(fetchingAsyncShows.fulfilled, (state, action) => {
                console.log("fetching series successfully");
                state.shows = action.payload;
            })
            .addCase(fetchingAsyncMovieAndShowDetail.fulfilled, (state, action) => {
                console.log("fetching movie or show successfully");
                state.selectedMovieOrShow = action.payload;
            })
            .addCase(fetchingAsyncMovies.rejected, () => {
                console.log("rejected...");
            });
    },
});

export const { removeSelectedMovie } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getMovieOrShowDetail = (state) => state.movies.selectedMovieOrShow;
export default movieSlice.reducer;




















// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
// import MovieApi from "../../common/apis/MovieApi"
// import { APIkey } from "../../common/apis/ApiKey"


// export const fetchingAsyncMovies = createAsyncThunk(
//     "movies/fetchingAsyncMovies",
//     async () => {
//         const movieText = "Harry";
//         const response = await MovieApi.get(`?apikey=${APIkey}&s=${movieText}&type=movie`)
//         // const data = response.json();
//         // console.log(response, "===>>> response")
//         // dispatch(addMovies(response.data))
//         // console.log(addMovies(), "==>>> addmovies")
//         return response.data
//     }
// )
// const initialState = {
//     movies: {},
// }

// const movieSlice = createSlice({
//     name: "movies",
//     initialState,
//     reducers: {
//         addMovies: (state, { payload }) => {
//             state.movies = payload
//         },
//     },
//     extraReducers: {
//         [fetchingAsyncMovies.pending]: () => {
//             console.log("pending")
//         },
//         [fetchingAsyncMovies.fulfilled]: (state, { payload }) => {
//             console.log("fetching successfully")
//             return { ...state, movies: payload }
//         },
//         [fetchingAsyncMovies.rejected]: () => {
//             console.log("rejected...")
//         }
//     }
// })

// export const { addMovies } = movieSlice.actions;
// export const getAllMovies = state => state.movies.movies;
// export default movieSlice.reducer;