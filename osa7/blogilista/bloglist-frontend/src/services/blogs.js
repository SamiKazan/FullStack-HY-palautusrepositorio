import axios from "axios";
const baseUrl = "/api/blogs";

let token = null;

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  };

  try {
    const response = await axios.post(baseUrl, newObject, config);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const update = async (id, newObject) => {
  const config = {
    headers: { Authorization: token },
  };

  try {
    const response = axios.put(`${baseUrl}/${id}`, newObject, config);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const remove = async (id) => {
  const config = {
    headers: { Authorization: token },
  };

  try {
    const response = axios.delete(`${baseUrl}/${id}`, config);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default { getAll, create, setToken, update, remove };
