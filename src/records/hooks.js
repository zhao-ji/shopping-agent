import { useState, useEffect } from 'react';
import api from "../utils";

export function useFetchRecords(search, page) {
    const [records, setRecords] = useState([]);
    useEffect(() => {
        api.get("/record/")
            .then(response => {
                setRecords(response.data.results);
            })
    }, [setRecords]);
    return records;
}
