import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTk0NTg5YmZiZGYzMjRhNDYxNTVmYWZlZWE5ZGRmYiIsInN1YiI6IjYyNzQ3M2Y5OGMzMTU5MDA1MmFiYThmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GKYaLjad_sNNh12oNGigwpk3YFyFyNbv1TbvJFEL_Ro"

const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: `Bearer ${token}` 
    }
})

export const api = {
    get(endpoint){
      return axiosInstance.get(endpoint)
    },
    post(endpoint, body){
        return axiosInstance.post(endpoint, body)
    }
    
}