import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create a slice of state
const counterSlice = createSlice({
    name: 'counter',
    initialState: { count: 0 },
    reducers: {
        increment: state => {
            state.count += 1;
        },
        decrement: state => {
            state.count -= 1;
        }
    }
});

// Export actions to use in components
export const { increment, decrement } = counterSlice.actions;

// Create and configure the store
export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
});

// Define RootState and AppDispatch types for use in components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
