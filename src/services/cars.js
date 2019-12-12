import { handleResponse } from './util';

export async function getCars() {
  try {
    const url = `https://socialgarage.herokuapp.com/car`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    const cars = await handleResponse(response);
    return cars;
  } catch (err) {
    throw err;
  }
}

export async function deleteCar(id) {
  try {
    const url = `https://wta-cats.herokuapp.com/cat/${id}`;
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    console.log(response);
  } catch (err) {
    throw err;
  }
}

export async function createCar(car) {
  try {
    const url = `https://socialgarage.herokuapp.com/car`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(car)
    });
    const newCar = await handleResponse(response);
    return newCar;
  } catch (err) {
    throw err;
  }
}

export async function editCat(car, id) {
  try {
    const url = `https://socialgarage.herokuapp.com/car/${id}`;
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(car)
    });
    console.log(response);
    const editedCat = await handleResponse(response);
    return editedCar;
  } catch (err) {
    throw err;
  }
}
