import { CButton, CCard, CContainer, CCol, CRow, CModal, CFormInput, CFormLabel, CModalHeader, CModalTitle, CModalBody, CCardImage, CModalFooter } from "@coreui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomTable from "src/components/customComponent/CustomTable";
const DesignationTable = () => {
    const [VehicleCapacity, setVehicleCapacity] = useState(false)
    const columns = [
        {
            name: 'S.No',
            selector: (row) => row.sno,
            sortable: true,
            center: true,
        },
        {
            name: 'Creation Date',
            selector: (row) => row.Creation_Date,
            sortable: true,
            center: true,
        },


        {
            name: 'Designation',
            selector: (row) => row.Designation,
            center: true,
        },
        {
            name: 'Status',
            selector: (row) => row.Status,
            center: true,
        },
        {
            name: 'Action',
            selector: (row) => row.Action,
            center: true,
        },

    ]

    const data = [
        {
            sno: 1,
            Creation_Date: '12.12.2021',
            Designation: 'Executive',
            Status: <span className="badge rounded-pill bg-info">Active</span>,
            Action: (<span>
                <CButton className="btn btn-danger" color="">
                    <i className="fa fa-trash" aria-hidden="true"></i>
                </CButton>
                <CButton className="btn btn-dark" color="white">
                    <i className="fa fa-edit" aria-hidden="true"></i>
                </CButton>
            </span>
            ),
        },
    ]

    return (

        <CCard className="mt-4">
            <CContainer className="mt-2">
                <CustomTable columns={columns} data={data} />
                <hr></hr>
                <CRow className="mt-3">
                    <CCol
                        onClick={() => setVehicleCapacity(!VehicleCapacity)}
                        className="offset-md-6"
                        xs={15}
                        sm={15}
                        md={6}
                        style={{ display: 'flex', justifyContent: 'end' }}
                    >
                        <CButton
                            size="sm"
                            color="warning"
                            // disabled={enableSubmit}
                            className="px-3 text-white"
                            type="submit"
                        >

                            <span className="float-start">
                                <i className="" aria-hidden="true"></i> &nbsp;New
                            </span>
                        </CButton>
                        <CModal visible={VehicleCapacity} onClose={() => setVehicleCapacity(false)}>
                            <CModalHeader>
                                <CModalTitle>Designation</CModalTitle>
                            </CModalHeader>
                            <CModalBody>
                                <CRow>
                                    <CCol>
                                        <CFormLabel htmlFor="inputAddress">
                                        Designation
                                        </CFormLabel>
                                        <CFormInput size="sm" id="inputAddress" value="" />
                                    </CCol>
                                </CRow>
                            </CModalBody>
                            <CModalFooter>
                                <CButton color="primary">Save</CButton>
                            </CModalFooter>
                        </CModal>
                    </CCol>
                </CRow>
            </CContainer>
        </CCard>
    );
}

export default DesignationTable;
