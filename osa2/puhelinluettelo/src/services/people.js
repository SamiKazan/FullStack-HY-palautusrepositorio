import axios from 'axios'
const baseUrl = '/api/persons'


const getAll = () => {
    console.log(baseUrl)
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const add = personObject => {
    const request = axios.post(baseUrl, personObject)
    return request.then(response => response.data)
}

const remove = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

export default { getAll, add, remove, update }