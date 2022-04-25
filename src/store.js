import { createStore } from 'redux';
import { reducer } from './reducer'

const initialState = {
    restaurants: [],
}

export const store = createStore(reducer, initialState);