import books from '../api/books';
import { 
    SIGN_IN,
    SIGN_OUT,
    ADD_BOOK,
    FETCH_BOOK,
    FETCH_BOOKS,

    DELETE_BOOK,
    EDIT_BOOK
    } from './types';
import history from '../history';

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT,
    };
};

export const addBook = (formValues) => async (dispatch, getState) => {
    const { userId } = getState().auth
    const response = await books.post(`/books`, { ...formValues, userId });
    
    dispatch({ type: ADD_BOOK, payload: response.data});
}

export const fetchBook = (id) => async (dispatch) => {

    const response = await books.get(`/books/${id}`);
    
    dispatch({ type: FETCH_BOOK, payload: response.data})
}

export const fetchBooks = () => async (dispatch) => {

    const response = await books.get(`/books`);
    
    dispatch({ type: FETCH_BOOKS, payload: response.data})
}

export const editBook = (id, formValues) => async dispatch => {
    const response = await books.put(`/books/${id}`, formValues);

    dispatch({ type: EDIT_BOOK, payload: response.data})
}

export const deleteBook = (id) => async dispatch => {
    await books.delete(`/books/${id}`);

    dispatch({ type: DELETE_BOOK, payload: id});
    history.push('/');
}