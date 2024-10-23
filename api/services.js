import axios from "axios"
const API_URL='https://api-colombia.com/api/v1'

//Get infor colombia

export const getColombiaInfo = async () => {
    const response = await axios.get(`${API_URL}/Country/Colombia` )
    return response.data
}

//Get info de regiones de colombia
export const getRegionesColombia = async () => {
    const response = await axios.get(`${API_URL}/Region`);
    return response.data;
}

//Get infor de Region de Colombia
export const getRegionColombia = async id => {
    const response = await axios.get(`${API_URL}/Region/${id}`);
    return response.data;
}