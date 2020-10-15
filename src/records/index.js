import React from 'react';
import { MDBDataTable } from 'mdbreact';

import { useFetchRecords } from './hooks';

export function Records() {
    const records = useFetchRecords();
    const data = {
        columns: [
            {
                label: 'ID',
                field: 'id',
                sort: 'asc',
                width: 20
            },
            {
                label: 'Time',
                field: 'created_at',
                sort: 'asc',
                width: 50
            },
            {
                label: 'Price',
                field: 'total_price',
                sort: 'asc',
                width: 50
            },
            {
                label: 'Quantity',
                field: 'quantity',
                sort: 'asc',
                width: 50
            },
            {
                label: 'Note',
                field: 'note',
                sort: 'asc',
                width: 50
            },
            {
                label: 'Buyer',
                field: 'buyer',
                sort: 'asc',
                width: 50
            },
            {
                label: 'SKU',
                field: 'sku',
                sort: 'asc',
                width: 50
            },
        ],
        rows: records,
    }
    return (
        <div className="z-index-1 pt-4 px-3">
            <MDBDataTable
                striped bordered
                data={data}
            />
        </div>
    );
}
