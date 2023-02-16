import {useState, useEffect} from 'react'

export const useFetch = (url) => {
    const [products, setProduct] = useState();

    useEffect(() => {
        async function FetchProducs() {
            let resp = await fetch(url).then(resp => resp.json());
            setProduct(resp)
        }

        FetchProducs();

    }, [url])

    return products;
}
