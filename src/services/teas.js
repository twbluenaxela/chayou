import axios from "axios";
const baseUrl = 'http://localhost:3003/api/tea'

const fetchTeas = async (teaSearchTerm) => {
    const response = await axios.get(`${baseUrl}/${teaSearchTerm}`)
    return response.data
}


export default { fetchTeas }