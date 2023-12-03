import { useEffect, useState } from "react";




const useShop = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect( () => {
        fetch('http://localhost:5000/items')
        .then(res => res.json())
        .then(data => {
            setItems(data);
            setLoading(false);
        })
    }, [])

    return [items, loading]
   

}

export default useShop;