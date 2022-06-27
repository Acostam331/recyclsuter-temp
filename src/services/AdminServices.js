import axios from 'axios';

const BASE_URL = 'https://recycluster.social';

export const getStats = async (token) => {
  let response = {};
  try {
    response = await axios({
      method: 'GET',
      baseURL: BASE_URL,
      url: '/stats',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log(error);
  } finally {
    console.log(response);
    return response;
  }
};

export const getUser = async (user) => {
  let response = {};
  try {
    response = await axios({
      method: 'GET',
      baseURL: BASE_URL,
      url: `/users/${user}`,
    });
  } catch (error) {
    console.log(error);
  } finally {
    console.log(response);
    return response;
  }
};

export const createUser = async (username, email, phone, pass) => {
  let response = {};
  try {
    response = await axios({
      method: 'POST',
      baseURL: BASE_URL,
      url: '/users',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        username: username,
        email: email,
        phone: phone,
        password: pass,
      },
    });
  } catch (error) {
    console.log(error);
  } finally {
    console.log(response);
    return response;
  }
};
