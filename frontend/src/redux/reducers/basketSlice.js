import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductThunk = createAsyncThunk("/card/get", async () => {
    const res = await axios.get("http://localhost:777/basket")
    return res.data
})

export const postProductThunk = createAsyncThunk("/card/post", async (data) => {
    await axios.post("http://localhost:777/basket", data)
    return data
})

export const deleteProductThunk = createAsyncThunk("/card/delete", async (id) => {
    await axios.delete(`http://localhost:777/basket/${id}`)
    return id
})

const basketSlice = createSlice({
    name: "card",
    initialState: {},
    reducers: {},
    extraReducers: builder => {
        builder

        .addCase(getProductThunk.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
        })

        .addCase(getProductThunk.pending, (state, action) => {
            state.loading = true
        })

        .addCase(getProductThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })

        .addCase(postProductThunk.fulfilled, (state, action) => {
            state.loading = false
            state.data.push(action.payload)
        })

        .addCase(deleteProductThunk.fulfilled, (state, action) => {
            state.loading = true
            state.data.filter((item) => item.id != action.payload)
        })
    }
})

export default basketSlice.reducer