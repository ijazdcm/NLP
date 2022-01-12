/* eslint-disable prettier/prettier */
import {
    CButton,
    CCard,
    CCol,
    CContainer,
    CForm,
    CFormInput,
    CFormLabel,
    CFormSelect,
    CNav,
    CNavItem,
    CNavLink,
    CRow,
    CTabContent,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
    CTabPane,
    CFormFloating,
    CFormCheck,
    CModal,
    CModalHeader,
    CModalTitle,
    CModalBody,
    CModalFooter,
} from '@coreui/react'
import { React, useState } from 'react'
import useForm from 'src/Hooks/useForm.js'
import validate from 'src/Validations/FormValidation'


const ShedMaster = () => {
    const formValues = {
        vehicleType: '',
        OdometerKm: '',
        odometerPhoto: '',
    }

    const border = {
        borderColor: '#b1b7c1',
    }

    const { values, errors, handleChange, onFocus, handleSubmit, enableSubmit, onBlur } = useForm(
        login,
        validate,
        formValues
    )

    function login() {
        alert('No Errors CallBack Called')
    }

    const [visible, setVisible] = useState(false)
    // document.title=('Vehicle Inspection');
    return (
        <>
            <CCard>
                <CTabContent>
                    <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={true}>
                        <CForm className="row g-3 m-2 p-1" onSubmit={handleSubmit}>
                            <CRow className="mb-md-2">
                                <CCol md={3}>
<<<<<<< HEAD
                                    <CFormLabel htmlFor="dVendor">Diesel Vendor Name*</CFormLabel>
                                    <CFormInput
                                        name="dVendor"
                                        size="sm"
                                        id="dVendor"
=======
                                    <CFormLabel htmlFor="vNum">Diesel Vendor Name*</CFormLabel>
                                    <CFormInput
                                        name="vNum"
                                        size="sm"
                                        id=""
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                                        placeholder=""
                                    />
                                </CCol>
                                <CCol md={3}>
<<<<<<< HEAD
                                    <CFormLabel htmlFor="dCode">Diesel Vendor Code*</CFormLabel>
                                    <CFormInput
                                        name="dCode"
                                        size="sm"
                                        id="dCode"
=======
                                    <CFormLabel htmlFor="vNum">Diesel Vendor Code*</CFormLabel>
                                    <CFormInput
                                        name="vNum"
                                        size="sm"
                                        id=""
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                                        placeholder=""
                                    />
                                </CCol>
                                <CCol md={3}>
<<<<<<< HEAD
                                    <CFormLabel htmlFor="dMob">Diesel Vendor Mobile Number 1*</CFormLabel>
                                    <CFormInput
                                        name="dMob"
                                        size="sm"
                                        id="dMob"
=======
                                    <CFormLabel htmlFor="vNum">Diesel Vendor Mobile Number 1*</CFormLabel>
                                    <CFormInput
                                        name="vNum"
                                        size="sm"
                                        id=""
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                                        placeholder=""
                                    />
                                </CCol>
                                <CCol md={3}>
<<<<<<< HEAD
                                    <CFormLabel htmlFor="dMob1">Diesel Vendor Mobile Number 2*</CFormLabel>
                                    <CFormInput
                                        name="dMob1"
                                        size="sm"
                                        id="dMob1"
=======
                                    <CFormLabel htmlFor="vNum">Diesel Vendor Mobile Number 2*</CFormLabel>
                                    <CFormInput
                                        name="vNum"
                                        size="sm"
                                        id=""
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                                        placeholder=""
                                    />
                                </CCol>
                            </CRow>
                            <CRow className="mb-md-2">
                                <CCol md={3}>
<<<<<<< HEAD
                                    <CFormLabel htmlFor="mail">Diesel Vendor Mail ID*</CFormLabel>
                                    <CFormInput
                                        name="mail"
                                        size="sm"
                                        id="mail"
=======
                                    <CFormLabel htmlFor="vNum">Diesel Vendor Mail ID*</CFormLabel>
                                    <CFormInput
                                        name="vNum"
                                        size="sm"
                                        id=""
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                                        placeholder=""
                                    />
                                </CCol>
                            </CRow>
                            <CRow className="mb-md-2">


                                <CCol
                                    className="pull-right"
                                    xs={12}
                                    sm={12}
                                    md={12}
                                    style={{ display: 'flex', justifyContent: 'flex-end' }}
                                >
                                    <CButton
                                        size="s-lg"
                                        color="warning"
                                        className="mx-1 px-2 text-white"
                                        type="submit"
                                    >
                                        Submit
                                    </CButton>

                                    <CButton
                                        size="s-lg"
                                        color="warning"
                                        className="mx-1 px-2 text-white"
                                        type="submit"
                                    >
                                        Cancel
                                    </CButton>
                                </CCol>
                            </CRow>
                        </CForm>
                    </CTabPane>
                </CTabContent>
            </CCard>
        </>
    )
}

export default ShedMaster
