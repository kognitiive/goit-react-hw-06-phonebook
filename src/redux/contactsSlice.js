import { createSlice, nanoid } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const contactsInitialState = {value: []};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                // if (state.value.find(({name}) => name === action.payload.name)) {
                //     return alert(`${action.payload.name} is already in contacts`);
                // }
                state.value.push(action.payload)
            },
            prepare({ name, number }) {
                return {
                    payload: {
                        name,
                        number,
                        id: nanoid(),
                    }
                }
            }
        },
        deleteContact: {
            reducer(state, action) {
                const index = state.value.findIndex(contact => contact.id === action.payload);
                state.value.splice(index, 1);
            }
        }
    }
})


const persistConfig = {
    key: 'contacts',
    version: 1,
    storage,
}

export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);
export const { addContact, deleteContact } = contactsSlice.actions;