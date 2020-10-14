import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

export function useFetchRecords(search, page) {
    console.log('-------------');
    const [records, setRecords] = useState([]);
    useEffect(() => {
        axios.get("/record/")
            .then(response => {
                setRecords(response.data.results);
            })
    }, [setRecords]);
    return records;
}
