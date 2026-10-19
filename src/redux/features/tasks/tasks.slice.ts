import { createSlice } from "@reduxjs/toolkit";


interface initialState {
   title: string,
   description: string,
   priority: string,
   status: string
}

const initialState: initialState[] = []
const tasksSlice = createSlice({
   name: "tasks",
   initialState,
   reducers: {}
})

export default tasksSlice.reducer;