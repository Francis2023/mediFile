import React, {useState,useEffect} from 'react';


export default function useGetData(url) {
    const [data, setData] = useState([]) 
    const [loading, setLoading] = useState(false)
    const [anError, setAnError] = useState(false)

    useEffect(() => {

        setLoading(true)
        fetch(url)
            .then((response) => {
                setData(response.data)
                setLoading(false)
            })
            .catch(() => {
                setAnError(true)
                setLoading(false)
            })
    },[])

    return[data, loading, anError]
}

