// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";




const useShop = () => {
    const axiosPublic = useAxiosPublic();
    // const [items, setItems] = useState([]);
    // const [loading, setLoading] = useState(true);
    // useEffect( () => {
    //     fetch('http://localhost:5000/items')
    //     .then(res => res.json())
    //     .then(data => {
    //         setItems(data);
    //         setLoading(false);
    //     })
    // }, [])

    const {data: item = [], isPending: loading, refetch } = useQuery({
        queryKey: ['item'],
        queryFn: async() =>{
            const res = await axiosPublic.get('/items');
            console.log(res);
            return res.data;
        }
    })

    return [item, loading, refetch]
   

}

export default useShop;