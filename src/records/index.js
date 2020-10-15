import React from 'react';

import { useFetchRecords } from './hooks';

export function Records() {
    const records = useFetchRecords();
    return (
        <div>
            <span>
                Records
            </span>
            <div>
                <input />
            </div>
            <div>
                {records.map(record => (<span>{record.id}</span>))}
            </div>
        </div>
    );
}
