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
        <div className="z-index-1 py-4 px-3">
            <div className="d-flex justify-content-between  pb-3">
                <span>
                    All records
                </span>
                <span>
                    Total 5 records
                </span>
            </div>
            <MDBRow className="pb-3">
                <MDBCol md="6">
                    <MDBInput type="text" hint="search" icon="search" />
                </MDBCol>
                <MDBCol md="1" className="md-form offset-md-4">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input pull-right" id="post" />
                        <label className="custom-control-label cursor-pointer" for="post">Show post</label>
                    </div>
                </MDBCol>
                <MDBCol md="1" className="md-form">
                    <div className="custom-control custom-checkbox ml-3 pull-right">
                        <input type="checkbox" className="custom-control-input" id="shop" />
                        <label className="custom-control-label cursor-pointer" for="shop">Show shop</label>
                    </div>
                </MDBCol>
            </MDBRow>
            <br/>
            <br/>
            <MDBDataTable striped bordered hover small
                data={data}
                searching={false}
                sorting={false}
                paging={false}
                className="px-3"
            />
        </div>
    );
}
