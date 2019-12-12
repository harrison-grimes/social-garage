import { signup as signupReq, login as loginReq } from '../services/auth';
import { getCats as getCatsReq, deleteCat as deleteCatReq, createCat as createCatReq, editCat as editCatReq } from '../services/cats';

export const signup = payload => async dispatch => {
  try {
    dispatch({
      type: 'AUTH_START'
    });
    const user = await signupReq(payload);
    dispatch({
      type: 'AUTH',
      user
    });
  } catch (error) {
    dispatch({
      type: 'AUTH_FAIL'
    });
  }
};

export const login = payload => async dispatch => {
  try {
    dispatch({
      type: 'AUTH_START'
    });
    const user = await loginReq(payload);
    dispatch({
      type: 'AUTH',
      user
    });
  } catch (error) {
    dispatch({
      type: 'AUTH_FAIL'
    });
  }
};

export const logout = () => dispatch => {
  dispatch({
    type: 'LOGOUT'
  });
};

export const getCats = () => async dispatch => {
  try {
    dispatch({
      type: 'FETCHING_CATS'
    });
    const cats = await getCatsReq();
    dispatch({
      type: 'FETCH_CATS_SUCCESS',
      cats
    });
    return cats;
  } catch (error) {
    console.error(error);
    dispatch({
      type: 'FETCH_CATS_ERROR'
    });
    if (error.type === 'Unauthenticated') {
      dispatch({
        type: 'LOGOUT'
      });
    }
  }
};

export const deleteCat = (id) => async dispatch => {
  try {
    dispatch({
      type: 'FETCHING_CATS'
    });
    await deleteCatReq(id);
    dispatch({
      type: 'DELETE_CAT_SUCCESS',
      id
    });
  } catch (error) {
    dispatch({
      type: 'DELETE_CATS_ERROR'
    });
    if (error.type === 'Unauthenticated') {
      dispatch({
        type: 'LOGOUT'
      });
    }
  }
};

export const createCat = (cat) => async dispatch => {
  try {
    dispatch({
      type: 'CREATING_CAT'
    });
    const newCat = await createCatReq(cat);
    dispatch({
      type: 'CREATE_CAT_SUCCESS',
      cat: newCat
    });
    return cat;
  } catch (error) {
    console.error(error);
    dispatch({
      type: 'CREATE_CATS_ERROR'
    });
    if (error.type === 'Unauthenticated') {
      dispatch({
        type: 'LOGOUT'
      });
    }
  }
};

export const editCat = (id) => async dispatch => {
  try {
    dispatch({
      type: 'EDITING_CAT'
    });
    await editCatReq(id);
    dispatch({
      type: 'EDIT_CAT_SUCCESS',
      id
    });
  } catch (error) {
    dispatch({
      type: 'EDIT_CATS_ERROR'
    });
    if (error.type === 'Unauthenticated') {
      dispatch({
        type: 'LOGOUT'
      });
    }
  }
}
