import React from 'react';
import {
    MDBCol,
    MDBRow,
    MDBDataTable,
    MDBInput,
} from 'mdbreact';

import { useFetchRecords } from './hooks';
import { columns } from './utils';

export function Records() {
    const records = useFetchRecords();
    const data = {
        columns,
        rows: records,
    }
    return (
        <div className="z-index-1 pt-4 px-3">
            <MDBRow>
                <MDBCol md="6">
                    <MDBInput type="text" hint="search" />
                </MDBCol>
                <MDBCol md="2" className="offset-md-2">
                    <input type="checkbox" class="custom-control-input" id="post" />
                    <label class="custom-control-label" for="post">Post</label>
                </MDBCol>
                <MDBCol md="2">
                    <input type="checkbox" class="custom-control-input" id="shop" />
                    <label class="custom-control-label" for="shop">Shop</label>
                </MDBCol>
            </MDBRow>
            <br/>
            <br/>
            <MDBDataTable striped bordered hover small
                data={data}
                searching={false}
                sorting={false}
                paging={false}
            />
        </div>
    );
}
