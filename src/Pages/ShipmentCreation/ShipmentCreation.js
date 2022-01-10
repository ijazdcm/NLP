/* eslint-disable prettier/prettier */
import {
    CButton,
    CCard,
    CCol,
    CContainer,
    CForm,
    CFormInput,
    CFormLabel,
    CTableCaption,
    CFormSelect,
    CNav,
    CNavItem,
    CNavLink,
    CRow,
    CTabContent,
    CModal,
    CModalHeader,
    CModalTitle,
    CTabPane,
    CModalBody,
    CModalFooter,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CFormFloating,
    CNavbar,
    CTableRow,
    CFormTextarea,
    CCardImage,
} from '@coreui/react'
import { React, useState } from 'react'
// import CModal from '@coreui/react/src/components/modal/CModal'
import useForm from 'src/Hooks/useForm'
import validate from 'src/Validations/FormValidation'
import CustomTable from '../../components/customComponent/CustomTable'
import { Link } from 'react-router-dom'

const Shipment = () => {
    const formValues = {
        vehicleType: '',
        OdometerKm: '',
    }
    const [OdometerPhoto, setOdometerPhoto] = useState(false)
    const { values, errors, handleChange, onFocus, handleSubmit, enableSubmit, onBlur } = useForm(
        login,
        validate,
        formValues
    )

    function login() {
        alert('No Errors CallBack Called')
    }

    const [mainKey, setMainKey] = useState(1)
    const [activeKey, setActiveKey] = useState(1)
    const [activeKey_2, setActiveKey_2] = useState(1)
    const [visible, setVisible] = useState(false)
    const [visible1, setVisible1] = useState(false)

    return (
        <>
            <CCard className="p-1">
                <CNav variant="tabs" role="tablist">
                    <CNavItem>
                        <CNavLink
                            className="btn btn-sm"
                            href="javascript:void(0);"
                            active={activeKey === 1}
                            onClick={() => setActiveKey(1)}
                        >
                            Open Delivery
                        </CNavLink>
                    </CNavItem>

                    <CNavItem>
                        <CNavLink
                            className="btn btn-sm"
                            href="javascript:void(0);"
                            active={activeKey === 2}
                            onClick={() => setActiveKey(2)}
                        >
                            Shipment Information
                        </CNavLink>
                    </CNavItem>
                </CNav>
                <CTabContent>
                    <CTabPane role="tabpanel" aria-labelledby="" visible={activeKey === 1}>
                        <CRow>
                            <CCol
                                className="mt-2 offset-md-9"
                                xs={12}
                                sm={12}
                                md={3}
                                // style={{ display: 'flex', justifyContent: 'space-between' }}
                                style={{ display: 'flex', flexDirection: 'row-reverse', cursor: 'pointer' }}
                            >
                                <CButton
                                    onClick={() => setOdometerPhoto(!OdometerPhoto)}
                                    color="warning"
                                    className="mx-3 text-white"
                                    size="sm"
                                    id="inputAddress"
                                >
                                    <span className="float-start">
                                        <i className="" aria-hidden="true"></i> &nbsp;Assign Truck
                                    </span>
                                </CButton>
                                <CModal visible={OdometerPhoto} onClose={() => setOdometerPhoto(false)}>
                                    <CModalHeader>
                                        <CModalTitle>Assign Truck</CModalTitle>
                                    </CModalHeader>
                                    <CModalBody>
                                        <CRow className="">
                                            <CCol>
                                                <CFormLabel htmlFor="inputAddress">
                                                    Truck No
                                                    {errors.vehicleType && <span className="help text-danger">{errors.vehicleType}</span>}
                                                </CFormLabel>
                                                <CFormSelect size="sm" className="mb-3" aria-label="Small select example">
                                                    <option hidden>Select ...</option>

                                                    <option value="1">TN45AT8614</option>

                                                    <option value="2">TN45AT8612</option>

                                                    <option value="3">TN45AT9687</option>
                                                </CFormSelect>
                                            </CCol>
                                            <CCol>
                                                <CFormLabel htmlFor="inputAddress">
                                                    Truck Capacity
                                                    {errors.vehicleType && <span className="help text-danger">{errors.vehicleType}</span>}
                                                </CFormLabel>
                                                <CFormInput size="sm" id="inputAddress" value="" readOnly />
                                            </CCol>
                                        </CRow>
                                        <CRow className="">
                                            <CCol>
                                                <CFormLabel htmlFor="inputAddress">
                                                    Truck Type
                                                    {errors.vehicleType && <span className="help text-danger">{errors.vehicleType}</span>}
                                                </CFormLabel>
                                                <CFormInput size="sm" id="inputAddress" value="" readOnly />
                                            </CCol>
                                            <CCol>
                                                <CFormLabel htmlFor="inputAddress">
                                                    Driver Name
                                                    {errors.vehicleType && <span className="help text-danger">{errors.vehicleType}</span>}
                                                </CFormLabel>
                                                <CFormInput size="sm" id="inputAddress" value="" readOnly />
                                            </CCol>

                                        </CRow>
                                        <CRow>
                                            <CCol>
                                                <CFormLabel htmlFor="inputAddress">
                                                    Driver Mobile Number
                                                    {errors.vehicleType && <span className="help text-danger">{errors.vehicleType}</span>}
                                                </CFormLabel>
                                                <CFormInput size="sm" id="inputAddress" value="" readOnly />
                                            </CCol>
                                            <CCol>

                                            </CCol>
                                        </CRow>
                                    </CModalBody>
                                    <CModalFooter>
                                        <CButton color="primary">Save</CButton>
                                    </CModalFooter>
                                </CModal>
                            </CCol>
                        </CRow>
                        <CTable>
                            <CTableHead style={{ backgroundColor: '#4d3227', color: 'white' }}>
                                <CTableRow>
                                    <CTableHeaderCell scope="col" style={{ color: 'white' }}>#</CTableHeaderCell>
                                    <CTableHeaderCell scope="col" style={{ color: 'white' }}>S.No</CTableHeaderCell>
                                    <CTableHeaderCell scope="col" style={{ color: 'white' }}>SO No</CTableHeaderCell>
                                    <CTableHeaderCell scope="col" style={{ color: 'white' }}>SO Date & Time</CTableHeaderCell>
                                    <CTableHeaderCell scope="col" style={{ color: 'white' }}>Delivery No</CTableHeaderCell>
                                    <CTableHeaderCell scope="col" style={{ color: 'white' }}>Delivery Date</CTableHeaderCell>
                                    <CTableHeaderCell scope="col" style={{ color: 'white' }}>City</CTableHeaderCell>
                                    <CTableHeaderCell scope="col" style={{ color: 'white' }}>Customer</CTableHeaderCell>
                                    <CTableHeaderCell scope="col" style={{ color: 'white' }}>Route</CTableHeaderCell>
                                    <CTableHeaderCell scope="col" style={{ color: 'white' }}>TL</CTableHeaderCell>
                                    <CTableHeaderCell scope="col" style={{ color: 'white' }}>QTY in Tons</CTableHeaderCell>
                                    <CTableHeaderCell scope="col" style={{ color: 'white' }}>Calling Plan</CTableHeaderCell>
                                    <CTableHeaderCell scope="col" style={{ color: 'white' }}>Action</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                <CTableRow>
                                    <CTableDataCell scope="row"><input type="checkbox" name="name2" /></CTableDataCell>
                                    <CTableDataCell>1</CTableDataCell>
                                    <CTableDataCell>637534</CTableDataCell>
                                    <CTableDataCell>13.12.2021</CTableDataCell>
                                    <CTableDataCell>635437</CTableDataCell>
                                    <CTableDataCell>13.12.2021</CTableDataCell>
                                    <CTableDataCell>Chennai</CTableDataCell>
                                    <CTableDataCell>SSS</CTableDataCell>
                                    <CTableDataCell>Trichy</CTableDataCell>
                                    <CTableDataCell>Ram</CTableDataCell>
                                    <CTableDataCell>23</CTableDataCell>
                                    <CTableDataCell>Monday</CTableDataCell>
                                    <CTableDataCell>
                                        <CButton
                                            onClick={() => setVisible(!visible)}
                                            className="text-white"
                                            color="warning"
                                            size="sm"

                                        >
                                            <span className="float-start">
                                                <i className="fa fa-eye" aria-hidden="true"></i> &nbsp;View
                                            </span>
                                        </CButton>
                                        <CModal visible={visible} onClose={() => setVisible(false)}>
                                            <CModalHeader>
                                                <CModalTitle>Sales Order</CModalTitle>
                                            </CModalHeader>
                                            <CModalBody>
                                            </CModalBody>

                                            <CModalFooter>
                                                <CButton color="secondary" onClick={() => setVisible(false)}>
                                                    Close
                                                </CButton>
                                            </CModalFooter>
                                        </CModal>
                                    </CTableDataCell>
                                </CTableRow>
                                <CTableRow>
                                    <CTableDataCell scope="row"><input type="checkbox" name="" /></CTableDataCell>
                                    <CTableDataCell>2</CTableDataCell>
                                    <CTableDataCell>980567</CTableDataCell>
                                    <CTableDataCell>14.12.2021</CTableDataCell>
                                    <CTableDataCell>635437</CTableDataCell>
                                    <CTableDataCell>14.12.2021</CTableDataCell>
                                    <CTableDataCell>Thanjavor</CTableDataCell>
                                    <CTableDataCell>SSS</CTableDataCell>
                                    <CTableDataCell>Trichy</CTableDataCell>
                                    <CTableDataCell>Ram</CTableDataCell>
                                    <CTableDataCell>20</CTableDataCell>
                                    <CTableDataCell>Tuesday</CTableDataCell>
                                    <CTableDataCell><CButton
                                        onClick={() => setVisible(!visible)}
                                        className="text-white"
                                        color="warning"
                                        size="sm"

                                    >
                                        <span className="float-start">
                                            <i className="fa fa-eye" aria-hidden="true"></i> &nbsp;View
                                        </span>
                                    </CButton>
                                        <CModal visible={visible} onClose={() => setVisible(false)}>
                                            <CModalHeader>
                                                <CModalTitle>Sales Order</CModalTitle>
                                            </CModalHeader>
                                            <CModalBody>
                                            </CModalBody>

                                            <CModalFooter>
                                                <CButton color="secondary" onClick={() => setVisible(false)}>
                                                    Close
                                                </CButton>
                                            </CModalFooter>
                                        </CModal></CTableDataCell>
                                </CTableRow>
                            </CTableBody>
                        </CTable>
                        {/* <CRow>
                            <CCol
                                className="mt-2 offset-md-9"
                                xs={12}
                                sm={12}
                                md={3}
                                // style={{ display: 'flex', justifyContent: 'space-between' }}
                                style={{ display: 'flex', flexDirection: 'row-reverse', cursor: 'pointer' }}
                            >
                                <CButton
                                    size="S-lg"
                                    color="warning"
                                    className="mx-3 text-white"
                                    // className="align-self-end ml-auto"
                                    type="submit"
                                >
                                    Submit
                                </CButton>

                            </CCol>
                        </CRow> */}
                    </CTabPane>
                </CTabContent>
                <CTabContent><br />
                    <CTabPane role="tabpanel" aria-labelledby="" visible={activeKey === 2}>
                        <CTable>
                            <CTableHead style={{ backgroundColor: '#4d3227', color: 'white' }}>
                                <CTableRow>
                                    <CTableHeaderCell scope="col" style={{ color: 'white' }}>S.no</CTableHeaderCell>
                                    <CTableHeaderCell scope="col" style={{ color: 'white' }}>VA No</CTableHeaderCell>
                                    <CTableHeaderCell scope="col" style={{ color: 'white' }}>Shipment No</CTableHeaderCell>
                                    <CTableHeaderCell scope="col" style={{ color: 'white' }}>Trip Sheet No</CTableHeaderCell>
                                    <CTableHeaderCell scope="col" style={{ color: 'white' }}>Truck No</CTableHeaderCell>
                                    <CTableHeaderCell scope="col" style={{ color: 'white' }}>Action</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>

                            <CTableBody>
                                <CTableRow>
                                    <CTableDataCell scope="row">1</CTableDataCell>
                                    <CTableDataCell>1789</CTableDataCell>
                                    <CTableDataCell>6547234</CTableDataCell>
                                    <CTableDataCell>637534</CTableDataCell>
                                    <CTableDataCell>TN57AT6789</CTableDataCell>
                                    <CTableDataCell><CButton color="warning" size="sm" className="mx-3 text-white"><Link className="text-white" to="/VehicleAssignmentFoods">
                                        Show
                                    </Link></CButton></CTableDataCell>
                                </CTableRow>
                            </CTableBody>
                        </CTable>
                        {/* <CRow>
                            <CCol
                                className="mt-2 offset-md-9"
                                xs={12}
                                sm={12}
                                md={3}
                                // style={{ display: 'flex', justifyContent: 'space-between' }}
                                style={{ display: 'flex', flexDirection: 'row-reverse', cursor: 'pointer' }}
                            >
                                <CButton
                                    size="S-lg"
                                    color="warning"
                                    className="mx-3 text-white"
                                    // className="align-self-end ml-auto"
                                    type="submit"
                                >
                                    Submit
                                </CButton>

                            </CCol>
                        </CRow> */}
                    </CTabPane>
                </CTabContent>
            </CCard>
        </>
    )
}

export default Shipment