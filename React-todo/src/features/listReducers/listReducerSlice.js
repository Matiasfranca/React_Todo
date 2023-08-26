import { createSlice } from "@reduxjs/toolkit";
import Item from "../../models/Item";

const initialState = {
    value: loadState()
}

function loadState() {
    const state = JSON.parse(localStorage.getItem("it"))
    const li = []
    if (state) state.forEach(element => {
        const item = new Item(element.text)
        item.done = element.done;
        li.push(item);
    })
    return li;
}

export const listReducerSlice = createSlice({
    name: "list",
    initialState,
    reducers: {

        addItem: (state, action) => {
            const item = new Item(action.payload);
            state.value = [...state.value, item]
        },

        onItemDel: (state, action) => {
            state.value = state.value.filter(item => item._id !== action.payload);
        },

        flipDone: (state, action) => {
            state.value = state.value.map(item => {
                if (item._id === action.payload) item.done = !item.done;

                return item
            })
        },
    }
})

export const { addItem, onItemDel, flipDone } = listReducerSlice.actions

export const listValue = (state) => state.list.value;

export default listReducerSlice.reducer