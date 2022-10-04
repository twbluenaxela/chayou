import axios from "axios";
const baseUrl = 'http://localhost:3003/api/category'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const getTeaCategory = async (teaCategory) => {
    const response = await axios.get(`${baseUrl}/${teaCategory}`)
    return response.data
}

export default { getAll, getTeaCategory }