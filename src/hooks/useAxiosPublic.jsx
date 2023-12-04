import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://ims-server-gold.vercel.app'
})

const useAxiosPublic = () => {
    return  axiosPublic;
};

export default useAxiosPublic;