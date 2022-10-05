import axios from "axios";
const baseUrl = '/api/tea'

const fetchTeas = async (teaSearchTerm) => {
    const response = await axios.get(`${baseUrl}/${teaSearchTerm}`)
    return response.data
}


export default { fetchTeas }