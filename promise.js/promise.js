import axios from 'axios'

export const getDataFromApi = async (url)=>{
    return await axios.get(url)
}