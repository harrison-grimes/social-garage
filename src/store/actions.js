import { signup as signupReq, login as loginReq } from '../services/auth';
import { getCars as getCarsReq, deleteCar as deleteCarReq, createCar as createCarReq, editCar as editCatReq } from '../services/cars';

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
      type: 'FETCHING_CARS'
    });
    const cars = await getCarsReq();
    dispatch({
      type: 'FETCH_CARS_SUCCESS',
      cars
    });
    return cars;
  } catch (error) {
    console.error(error);
    dispatch({
      type: 'FETCH_CARS_ERROR'
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
      type: 'FETCHING_CARS'
    });
    await deleteCatReq(id);
    dispatch({
      type: 'DELETE_CAR_SUCCESS',
      id
    });
  } catch (error) {
    dispatch({
      type: 'DELETE_CARS_ERROR'
    });
    if (error.type === 'Unauthenticated') {
      dispatch({
        type: 'LOGOUT'
      });
    }
  }
};

export const createCar = (car) => async dispatch => {
  try {
    dispatch({
      type: 'CREATING_CAR'
    });
    const newCar = await createCarReq(car);
    dispatch({
      type: 'CREATE_CAR_SUCCESS',
      cat: newCar
    });
    return car;
  } catch (error) {
    console.error(error);
    dispatch({
      type: 'CREATE_CARS_ERROR'
    });
    if (error.type === 'Unauthenticated') {
      dispatch({
        type: 'LOGOUT'
      });
    }
  }
};

export const editCar = (id) => async dispatch => {
  try {
    dispatch({
      type: 'EDITING_CAR'
    });
    await editCatReq(id);
    dispatch({
      type: 'EDIT_CAR_SUCCESS',
      id
    });
  } catch (error) {
    dispatch({
      type: 'EDIT_CARS_ERROR'
    });
    if (error.type === 'Unauthenticated') {
      dispatch({
        type: 'LOGOUT'
      });
    }
  }
}
