import { CButton, CCard, CContainer, CCol, CRow, CModal, CModalHeader, CModalTitle, CModalBody, CCardImage, CModalFooter } from "@coreui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomTable from "src/components/customComponent/CustomTable";
const UserLoginMasterTable = () => {
    const [DriverPhoto, setDriverPhoto] = useState(false)
    const [RCCopyFront, setRCCopyFront] = useState(false)
    const [RCCopyBack, setRCCopyBack] = useState(false)
    const [InsuranceCopyBack, setInsuranceCopyBack] = useState(false)
    const [PANNumber, setPANNumber] = useState(false)
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
            name: 'User Name',
            selector: (row) => row.User_Name,
            sortable: true,
            center: true,
        },
        {
            name: 'Division',
            selector: (row) => row.Division,
            sortable: true,
            center: true,
        },
        {
            name: 'Department',
            selector: (row) => row.Department,
            sortable: true,
            center: true,
        },
        {
            name: 'Designation',
            selector: (row) => row.Designation,
            sortable: true,
            center: true,
        },
        {
            name: 'Serial No',
            selector: (row) => row.Serial_No,
            sortable: true,
            center: true,
        },
        {
            name: 'User ID',
            selector: (row) => row.User_ID,
            center: true,
        },
        {
            name: ' User Mobile Number',
            selector: (row) => row.User_Mobile_Number,
            center: true,
        },
        {
            name: 'User Mail ID',
            selector: (row) => row.User_Mail_ID,
            center: true,
        },
        {
            name: 'User Photo',
            selector: (row) => row.User_Photo,
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
            User_Name: 'Ramesh',
            Division: 'NLLD',
            Department: 'Maintenance',
            Designation: 'Executive',
            Serial_No: '9813793',
            User_ID: '1234',
            User_Mobile_Number: '9813792723',
            User_Mail_ID: 'Ram@gmail.com',
            User_Photo: (<span><CButton
                onClick={() => setRCCopyFront(!RCCopyFront)}
                className="w-100 m-0"
                color=""
                size="sm"
                id="inputAddress"
            >
                <span className="float-start">
                    <i className="fa fa-eye" aria-hidden="true"></i> &nbsp;View
                </span>
            </CButton>
                <CModal visible={RCCopyFront} onClose={() => setRCCopyFront(false)}>
                    <CModalHeader>
                        <CModalTitle>User Photo</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CCardImage
                            orientation="top"
                            src=""
                        />
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="secondary" onClick={() => setRCCopyFront(false)}>
                            Close
                        </CButton>
                        <CButton color="primary">Save changes</CButton>
                    </CModalFooter>
                </CModal></span>),
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
                            <Link className="text-white" to="/UserLoginMaster">
                                New
                            </Link>
                        </CButton>
                    </CCol>
                </CRow>

            </CContainer>
        </CCard>
    );
}

export default UserLoginMasterTable;
