import { useEffect, useState } from "react";
import resepInstance from "../apis/resepInstance";

export const useAxios = (url) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const fetchData = async (params) => {
        try {
            const result = await resepInstance.get(params);
            setResponse(result.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(url);
    }, [null]);

    return { response, error, loading, fetchData };

};