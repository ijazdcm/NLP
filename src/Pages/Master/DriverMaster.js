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
<<<<<<< HEAD
    CFormTextarea,
=======
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
} from '@coreui/react'
import { React, useState } from 'react'
import useForm from 'src/Hooks/useForm.js'
import validate from 'src/Validations/FormValidation'


const DriverMaster = () => {
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
                            <CRow >
                                <CCol md={3}>
<<<<<<< HEAD
                                    <CFormLabel htmlFor="dType">
=======
                                    <CFormLabel htmlFor="vehicleType">
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                                        Driver Type*{' '}
                                        {errors.DriverType && (
                                            <span className="help text-danger">{errors.DriverType}</span>
                                        )}
                                    </CFormLabel>

                                    <CFormSelect
                                        size="sm"
<<<<<<< HEAD
                                        name="dType"
                                        id='dType'
=======
                                        name="vehicleType"
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                                        onFocus={onFocus}
                                        onBlur={onBlur}
                                        onChange={handleChange}
                                        value={values.DriverType}
                                        className={`mb-1 ${errors.DriverType && 'is-invalid'}`}
                                        aria-label="Small select example"
                                    >
<<<<<<< HEAD
                                        <option >Select ...</option>
=======
                                        <option value="">Select ...</option>
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a

                                        <option value="1">Own</option>

                                        <option value="2">Contract</option>

                                        <option value="3">Hire</option>
                                    </CFormSelect>
                                </CCol>
                                <CCol md={3}>
<<<<<<< HEAD
                                    <CFormLabel htmlFor="dName">Driver Name*</CFormLabel>
                                    <CFormInput
                                        name="dName"
                                        size="sm"
                                        id="dName"
=======
                                    <CFormLabel htmlFor="vNum">Driver Name*</CFormLabel>
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
                                    <CFormLabel htmlFor="dCode">Driver Code*</CFormLabel>
                                    <CFormInput
                                        name="dCode"
                                        size="sm"
                                        id="dCode"
=======
                                    <CFormLabel htmlFor="vNum">Driver Code*</CFormLabel>
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
                                    <CFormLabel htmlFor="dMob">Driver Mobile Number 1*</CFormLabel>
                                    <CFormInput
                                        name="dMob"
                                        size="sm"
                                        id="dMob"
=======
                                    <CFormLabel htmlFor="vNum">Driver Mobile Number 1*</CFormLabel>
                                    <CFormInput
                                        name="vNum"
                                        size="sm"
                                        id=""
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                                        placeholder=""
                                    />
                                </CCol>
                            </CRow>
                            <CRow className="mb-md-1">
                                <CCol md={3}>
<<<<<<< HEAD
                                    <CFormLabel htmlFor="dMob1">Driver Mobile Number 2*</CFormLabel>
                                    <CFormInput
                                        name="dMob1"
                                        size="sm"
                                        id="dMob1"
=======
                                    <CFormLabel htmlFor="vNum">Driver Mobile Number 2*</CFormLabel>
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
                                    <CFormLabel htmlFor="licence">License Number*</CFormLabel>
                                    <CFormInput
                                        name="licence"
                                        size="sm"
                                        id="licence"
=======
                                    <CFormLabel htmlFor="vNum">License Number*</CFormLabel>
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
                                    <CFormLabel htmlFor="valid">License Valid To*</CFormLabel>
                                    <CFormInput
                                        type="date" size="sm" id="valid" name="valid" placeholder="date"
=======
                                    <CFormLabel >License Valid To*</CFormLabel>
                                    <CFormInput
                                        type="date" size="sm" id="fecha-hasta" name="fecha-hasta" placeholder="date"
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a

                                    />
                                </CCol>
                                <CCol md={3}>
<<<<<<< HEAD
                                    <CFormLabel htmlFor="lFront">
=======
                                    <CFormLabel htmlFor="formFileSm">
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                                        License Copy Front*{' '}
                                        {errors.LicenseCopyFront && (
                                            <span className="help text-danger">{errors.LicenseCopyFront}</span>
                                        )}
                                    </CFormLabel>
                                    <CFormInput
                                        type="file"
<<<<<<< HEAD
                                        name="lFront"
                                        size="sm"
                                        id="lFront"
=======
                                        name="LicenseCopyFront"
                                        size="sm"
                                        id="formFileSm"
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                                    />
                                </CCol>
                            </CRow>
                            <CRow className="mb-md-1">
                                <CCol md={3}>
<<<<<<< HEAD
                                    <CFormLabel htmlFor="lBack">
=======
                                    <CFormLabel htmlFor="formFileSm">
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                                        License Copy Back*{' '}
                                        {errors.LicenseCopyBack && (
                                            <span className="help text-danger">{errors.LicenseCopyBack}</span>
                                        )}
                                    </CFormLabel>
                                    <CFormInput
                                        type="file"
<<<<<<< HEAD
                                        name="lBack"
                                        size="sm"
                                        id="lBack"
                                    />
                                </CCol>
                                <CCol md={3}>
                                    <CFormLabel htmlFor="vStatus">License Validity Status*</CFormLabel>
                                    <CFormInput
                                        name="vStatus"
                                        size="sm"
                                        id="vStatus"
=======
                                        name="LicenseCopyBack"
                                        size="sm"
                                        id="formFileSm"
                                    />
                                </CCol>
                                <CCol md={3}>
                                    <CFormLabel htmlFor="vNum">License Validity Status*</CFormLabel>
                                    <CFormInput
                                        name="vNum"
                                        size="sm"
                                        id=""
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                                        placeholder=""
                                        readOnly
                                    />
                                </CCol>
                                <CCol md={3}>
<<<<<<< HEAD
                                    <CFormLabel htmlFor="AadharCard">
=======
                                    <CFormLabel htmlFor="formFileSm">
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                                        Aadhar Card*{' '}
                                        {errors.AadharCard && (
                                            <span className="help text-danger">{errors.AadharCard}</span>
                                        )}
                                    </CFormLabel>
                                    <CFormInput
                                        type="file"
                                        name="AadharCard"
                                        size="sm"
<<<<<<< HEAD
                                        id="AadharCard"
                                    />
                                </CCol>
                                <CCol md={3}>
                                    <CFormLabel htmlFor="PANCard">
=======
                                        id="formFileSm"
                                    />
                                </CCol>
                                <CCol md={3}>
                                    <CFormLabel htmlFor="formFileSm">
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                                        PAN Card*{' '}
                                        {errors.PANCard && (
                                            <span className="help text-danger">{errors.PANCard}</span>
                                        )}
                                    </CFormLabel>
                                    <CFormInput
                                        type="file"
                                        name="PANCard"
                                        size="sm"
<<<<<<< HEAD
                                        id="PANCard"
=======
                                        id="formFileSm"
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                                    />
                                </CCol>
                            </CRow>
                            <CRow className="mb-md-1">
                                <CCol md={3}>
<<<<<<< HEAD
                                    <CFormLabel htmlFor="DriverPhoto">
=======
                                    <CFormLabel htmlFor="formFileSm">
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                                        Driver Photo*{' '}
                                        {errors.DriverPhoto && (
                                            <span className="help text-danger">{errors.DriverPhoto}</span>
                                        )}
                                    </CFormLabel>
                                    <CFormInput
                                        type="file"
                                        name="DriverPhoto"
                                        size="sm"
<<<<<<< HEAD
                                        id="DriverPhoto"
                                    />
                                </CCol>
                                <CCol md={3}>
                                    <CFormLabel htmlFor="address">Driver Address*</CFormLabel>
                                    <CFormTextarea
                                        name="address"
                                        size="sm"
                                        id="address"
=======
                                        id="formFileSm"
                                    />
                                </CCol>
                                <CCol md={3}>
                                    <CFormLabel htmlFor="vNum">Driver Address*</CFormLabel>
                                    <CFormInput
                                        name="vNum"
                                        size="sm"
                                        id=""
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                                        placeholder=""
                                    />
                                </CCol>
                            </CRow>
                            <CRow className="mb-md-1">

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

export default DriverMaster
