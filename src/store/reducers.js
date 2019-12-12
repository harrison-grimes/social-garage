import { logout } from '../services/util';

if (localStorage.getItem('user') === 'undefined') {
  localStorage.removeItem('user');
}
const initialUser = localStorage.getItem('user');
const initialState = {
  isFetching: false,
  user: initialUser ? JSON.parse(initialUser) : null
};

const rootReducer = (state = initialState, action) => {
  console.log('action:', action);
  if (!localStorage.getItem('user')) {
    localStorage.removeItem('token');
  }
  switch (action.type) {
    case 'AUTH':
      return {
        ...state,
        user: action.user,
        isFetching: false,
        errMsg: undefined
      };
    case 'AUTH_START':
      return { ...state, isFetching: true };
    case 'AUTH_FAIL':
      return { ...state, isFetching: false, errMsg: 'Invalid Credentials' };
    case 'FETCHING_CARS':
      return { ...state, isFetching: true };
    case 'CREATING_CAR':
      return { ...state, isFetching: true};
    case 'EDITING_CAR':
      return {...state, isFetching: true};
    case 'FETCH_CARS_SUCCESS':
      return {
        ...state,
        isFetching: false,
        cars: action.cars,
        errMsg: undefined
      };
    case 'DELETE_CAR_SUCCESS':
      return {
        ...state,
        isFetching: false,
        cars: state.cars.filter(car => car._id !== action.id),
        errMsg: undefined
      };
    case 'CREATE_CAR_SUCCESS':
      return {
        ...state,
        isFetching: false,
        cars: [...state.cars, action.car],
        errMsg: undefined
      };
    case 'EDIT_CAR_SUCCES':
      return {
        ...state,
        isFetching: false,
        cats: state.cars.filter(car => car._id !== action.id),
        errMsg: undefined
      };
    case 'CREATE_CAR_ERROR':
      return { ...state, isFetching: false, errMsg: 'Error creating car' };
    case 'FETCH_CATS_ERROR':
      return { ...state, isFetching: false, errMsg: 'Error getting cars' };
    case 'EDIT_CAT_ERROR':
      return { ...state, isFetching: false, errMsg: 'Error editing this car'};
    case 'LOGOUT':
      logout();
      return { ...state, user: null };
    default:
      return state;
  }
};

export default rootReducer;
