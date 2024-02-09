import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    items: [],
}

export const basket = createSlice({
    name: 'basket',
    initialState: initialState,
    reducers: {
        addItem: (state, action) => {
            const index = state.items.findIndex((item) => item.name == action.payload.name)
            const newItems = JSON.parse(JSON.stringify(state.items))
            if(index === -1){
                return{
                    items: [...newItems, action.payload]
                }
            } else {
                newItems[index].count = newItems[index].count + 1
                return{
                    items: newItems
                }
            }
        },
        incrementItem: (state, action) => {
            const index = state.items.findIndex((item) => item.name == action.payload)
            const newItems = JSON.parse(JSON.stringify(state.items))
            newItems[index].count = newItems[index].count + 1
                return{
                    items: newItems
                }

        },
        decrementItem: (state, action) => {
            const index = state.items.findIndex((item) => item.name == action.payload)
            const newItems = JSON.parse(JSON.stringify(state.items))
            newItems[index].count === 1 ? newItems.splice(index, 1) : newItems[index].count = newItems[index].count - 1
                return{
                    items: newItems
                }
        },
        removeItem: (state, action) => {
            const index = state.items.findIndex((item) => item.name == action.payload)
            const newItems = JSON.parse(JSON.stringify(state.items))
            newItems.splice(index, 1)
            return{
                items: newItems
            }
        }
    }
})

export const { addItem, incrementItem, decrementItem, removeItem } = basket.actions
export default basket.reducer