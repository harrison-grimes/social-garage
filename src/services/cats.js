import { handleResponse } from './util';

export async function getCats() {
  try {
    const url = `https://wta-cats.herokuapp.com/cat`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    const cats = await handleResponse(response);
    return cats;
  } catch (err) {
    throw err;
  }
}

export async function deleteCat(id) {
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

export async function createCat(cat) {
  try {
    const url = `https://wta-cats.herokuapp.com/cat`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(cat)
    });
    const newCat = await handleResponse(response);
    return newCat;
  } catch (err) {
    throw err;
  }
}

export async function editCat(cat, id) {
  try {
    const url = `https://wta-cats.herokuapp.com/cat/${id}`;
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(cat)
    });
    console.log(response);
    const editedCat = await handleResponse(response);
    return editedCat;
  } catch (err) {
    throw err;
  }
}
