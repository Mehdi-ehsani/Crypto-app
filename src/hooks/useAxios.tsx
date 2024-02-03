import axios from "axios";
import { useState, useEffect } from "react"

type AxiosParams = {
    url: string,
    method?: string
}
export function useAxios(axiosParams: AxiosParams) {
    const [data, setData] = useState<any[]>([])
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchData();
    }, [axiosParams.url]);

    async function fetchData() {
        setLoading(true)
        try {
            const result = await axios.request(axiosParams)
            setData(result.data)
        } catch (error) {
            setError(error as string)
        } finally {
            setLoading(false)
        }
    }

    return [data, error, loading]
}