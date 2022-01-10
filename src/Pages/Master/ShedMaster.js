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
                            <CRow className="">
                                <CCol md={3}>
                                    <CFormLabel htmlFor="vehicleType">
                                        Driver Type*{' '}
                                        {errors.DriverType && (
                                            <span className="help text-danger">{errors.DriverType}</span>
                                        )}
                                    </CFormLabel>

                                    <CFormSelect
                                        size="sm"
                                        name="vehicleType"
                                        onFocus={onFocus}
                                        onBlur={onBlur}
                                        onChange={handleChange}
                                        value={values.DriverType}
                                        className={`mb-1 ${errors.DriverType && 'is-invalid'}`}
                                        aria-label="Small select example"
                                    >
                                        <option value="">Select ...</option>

                                        <option value="1">Select SP</option>

                                    </CFormSelect>
                                </CCol>
                                <CCol md={3}>
                                    <CFormLabel htmlFor="vNum">Shed Name*</CFormLabel>
                                    <CFormInput
                                        name="vNum"
                                        size="sm"
                                        id=""
                                        placeholder=""
                                    />
                                </CCol>
                                <CCol md={3}>
                                    <CFormLabel htmlFor="vNum">Shed Owner Name*</CFormLabel>
                                    <CFormInput
                                        name="vNum"
                                        size="sm"
                                        id=""
                                        placeholder=""
                                    />
                                </CCol>
                                <CCol md={3}>
                                    <CFormLabel htmlFor="vNum">Shed Owner Mobile Number 1*</CFormLabel>
                                    <CFormInput
                                        name="vNum"
                                        size="sm"
                                        id=""
                                        placeholder=""
                                    />
                                </CCol>
                            </CRow>
                            <CRow className="">
                                <CCol md={3}>
                                    <CFormLabel htmlFor="vNum">Shed Owner Mobile Number 2*</CFormLabel>
                                    <CFormInput
                                        name="vNum"
                                        size="sm"
                                        id=""
                                        placeholder=""
                                    />
                                </CCol>
                                <CCol md={3}>
                                    <CFormLabel htmlFor="vNum">Shed Owner Address*</CFormLabel>
                                    <CFormInput
                                        name="vNum"
                                        size="sm"
                                        id=""
                                        placeholder=""
                                    />
                                </CCol>

                                <CCol md={3}>
                                    <CFormLabel htmlFor="formFileSm">
                                        Shed Owner Photo*{' '}
                                        {errors.ShedOwnerPhoto && (
                                            <span className="help text-danger">{errors.ShedOwnerPhoto}</span>
                                        )}
                                    </CFormLabel>
                                    <CFormInput
                                        type="file"
                                        name="ShedOwnerPhoto"
                                        size="sm"
                                        id="formFileSm"
                                    />
                                </CCol>
                                <CCol md={3}>
                                    <CFormLabel htmlFor="vNum">PAN Number</CFormLabel>
                                    <CFormInput
                                        name="vNum"
                                        size="sm"
                                        id=""
                                        placeholder=""
                                    />
                                </CCol>
                            </CRow>
                            <CRow className="">
                            <CCol md={3}>
                                    <CFormLabel htmlFor="vNum">Aadhar Number</CFormLabel>
                                    <CFormInput
                                        name="vNum"
                                        size="sm"
                                        id=""
                                        placeholder=""
                                    />
                                </CCol>
                                <CCol md={3}>
                                    <CFormLabel htmlFor="vNum">GST Number</CFormLabel>
                                    <CFormInput
                                        name="vNum"
                                        size="sm"
                                        id=""
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
