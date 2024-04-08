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
    loading: true,
};

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        removeSelectedMovie: (state) => {
            state.selectedMovieOrShow = {};
        },
        loadings: (state) => {
            state.loading = true
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchingAsyncMovies.pending, (state) => {
                console.log("pending");
                state.loading = true
                console.log(state.loading, ">>> state loading true")
            })
            .addCase(fetchingAsyncMovies.fulfilled, (state, action) => {
                console.log("fetching movies successfully");
                state.movies = action.payload;
                state.loading = false;
                console.log(state.loading, ">>> state loading false")
            })
            .addCase(fetchingAsyncShows.fulfilled, (state, action) => {
                console.log("fetching series successfully");
                state.shows = action.payload;
                state.loading = false;
            })
            .addCase(fetchingAsyncMovieAndShowDetail.fulfilled, (state, action) => {
                console.log("fetching movie or show successfully");
                state.selectedMovieOrShow = action.payload;
                // console.log(state.loading , ">>> state loading false")
            })
            .addCase(fetchingAsyncMovies.rejected, (state) => {
                console.log("rejected...");
                state.loading = false;
            });
    },
});

export const { removeSelectedMovie } = movieSlice.actions;
export const { loadings } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getMovieOrShowDetail = (state) => state.movies.selectedMovieOrShow;
// export const loadings = (state) => state.movies.loading;
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