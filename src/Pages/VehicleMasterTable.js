import { CButton, CCard, CContainer, CCol, CRow, CModal, CModalHeader, CModalTitle, CModalBody, CCardImage, CModalFooter } from "@coreui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomTable from "src/components/customComponent/CustomTable";
const VehicleMasterTable = () => {
    const [OdometerPhoto, setOdometerPhoto] = useState(false)
    const [RCCopyFront, setRCCopyFront] = useState(false)
    const [RCCopyBack, setRCCopyBack] = useState(false)
    const [InsuranceCopyBack, setInsuranceCopyBack] = useState(false)
    const [InsuranceCopyFront, setInsuranceCopyFront] = useState(false)
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
            name: 'Vehicle Type',
            selector: (row) => row.Vehicle_Type,
            sortable: true,
            center: true,
        },
        {
            name: 'Vehicle Capacity',
            selector: (row) => row.Vehicle_Capacity,
            sortable: true,
            center: true,
        },
        {
            name: 'Vehicle Body Type',
            selector: (row) => row.Vehicle_Bodytype,
            sortable: true,
            center: true,
        },
        {
            name: 'RC Copy Front',
            selector: (row) => row.RC_Copy_Front,
            sortable: true,
            center: true,
        },
        {
            name: 'RC Copy Back',
            selector: (row) => row.RC_Copy_Back,
            sortable: true,
            center: true,
        },
        {
            name: 'Insurance Copy Front',
            selector: (row) => row.Insuranance_Copy_Front,
            center: true,
        },
        {
            name: ' Insurance Copy Back',
            selector: (row) => row.Insuranance_Copy_Back,
            center: true,
        },
        {
            name: 'Insurance Validity',
            selector: (row) => row.Insurance_Validity,
            center: true,
        },
        {
            name: 'FC Validity',
            selector: (row) => row.FC_Validity,
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
            Vehicle_Type: 'Own',
            Vehicle_Capacity: '15',
            Vehicle_Bodytype: 'Open',
            RC_Copy_Front: (<span><CButton
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
                        <CModalTitle>RC Copy Front</CModalTitle>
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
            RC_Copy_Back: (<span><CButton
                onClick={() => setRCCopyBack(!RCCopyBack)}
                className="w-100 m-0"
                color=""
                size="sm"
                id="inputAddress"
            >
                <span className="float-start">
                    <i className="fa fa-eye" aria-hidden="true"></i> &nbsp;View
                </span>
            </CButton>
                <CModal visible={RCCopyBack} onClose={() => setRCCopyBack(false)}>
                    <CModalHeader>
                        <CModalTitle>RC Copy Back</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CCardImage
                            orientation="top"
                            src=""
                        />
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="secondary" onClick={() => setRCCopyBack(false)}>
                            Close
                        </CButton>
                        <CButton color="primary">Save changes</CButton>
                    </CModalFooter>
                </CModal></span>),
            Insuranance_Copy_Front: (<span><CButton
                onClick={() => setInsuranceCopyFront(!InsuranceCopyFront)}
                className="w-100 m-0"
                color=""
                size="sm"
                id="inputAddress"
            >
                <span className="float-start">
                    <i className="fa fa-eye" aria-hidden="true"></i> &nbsp;View
                </span>
            </CButton>
                <CModal visible={InsuranceCopyFront} onClose={() => setInsuranceCopyFront(false)}>
                    <CModalHeader>
                        <CModalTitle>Insurance Copy Front</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CCardImage
                            orientation="top"
                            src=""
                        />
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="secondary" onClick={() => InsuranceCopyFront(false)}>
                            Close
                        </CButton>
                    </CModalFooter>
                </CModal></span>),
            Insuranance_Copy_Back: (<span><CButton
                onClick={() => setInsuranceCopyBack(!InsuranceCopyBack)}
                className="w-100 m-0"
                color=""
                size="sm"
                id="inputAddress"
            >
                <span className="float-start">
                    <i className="fa fa-eye" aria-hidden="true"></i> &nbsp;View
                </span>
            </CButton>
                <CModal visible={InsuranceCopyBack} onClose={() => setInsuranceCopyBack(false)}>
                    <CModalHeader>
                        <CModalTitle>Insurance Copy Back</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CCardImage
                            orientation="top"
                            src=""
                        />
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="secondary" onClick={() => InsuranceCopyBack(false)}>
                            Close
                        </CButton>
                    </CModalFooter>
                </CModal></span>),
            Insurance_Validity: '10.01.2022',
            FC_Validity: '10.01.2022',
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
                            <Link className="text-white" to="/VehicleMaster">
                                New
                            </Link>
                        </CButton>
                    </CCol>
                </CRow>

            </CContainer>
        </CCard>
    );
}

export default VehicleMasterTable;
