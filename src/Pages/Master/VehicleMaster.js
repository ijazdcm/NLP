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

const VehicleMaster = () => {
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
                            <CRow className="mb-md-1">
                                <CCol md={3}>
                                    <CFormLabel htmlFor="vehicleType">
                                        Vehicle Type*{' '}
                                        {errors.vehicleType && (
                                            <span className="help text-danger">{errors.vehicleType}</span>
                                        )}
                                    </CFormLabel>

                                    <CFormSelect
                                        size="sm"
                                        name="vehicleType"
                                        onFocus={onFocus}
                                        onBlur={onBlur}
                                        onChange={handleChange}
                                        value={values.vehicleType}
                                        className={`mb-1 ${errors.vehicleType && 'is-invalid'}`}
                                        aria-label="Small select example"
                                    >
                                        <option value="">Select ...</option>

                                        <option value="1">Own</option>

                                        <option value="2">Contract</option>

                                        <option value="3">Hire</option>
                                    </CFormSelect>
                                </CCol>


                                <CCol md={3}>
                                    <CFormLabel htmlFor="vNum">Vehicle Number*</CFormLabel>
                                    <CFormInput
                                        name="vNum"
                                        size="sm"
                                        id=""
                                        placeholder=""

                                    />
                                </CCol>

                                <CCol md={3}>
                                    <CFormLabel htmlFor="VehicleCapacity">
                                        Vehicle Capacity*{' '}
                                        {errors.VehicleCapacity && (
                                            <span className="help text-danger">{errors.VehicleCapacity}</span>
                                        )}
                                    </CFormLabel>

                                    <CFormSelect
                                        size="sm"
                                        name="VehicleCapacity"
                                        onFocus={onFocus}
                                        onBlur={onBlur}
                                        onChange={handleChange}
                                        value={values.VehicleCapacity}
                                        className={`mb-1 ${errors.VehicleCapacity && 'is-invalid'}`}
                                        aria-label="Small select example"
                                    >
                                        <option value="">Select ...</option>

                                        <option value="1">10</option>

                                        <option value="2">12</option>

                                        <option value="3">19</option>

                                        <option value="4">25</option>

                                        <option value="5">30</option>
                                    </CFormSelect>
                                </CCol>
                                <CCol md={3}>
                                    <CFormLabel htmlFor="VehicleCapacity">
                                        Vehicle Body Type*{' '}
                                        {errors.VehicleBodyType && (
                                            <span className="help text-danger">{errors.VehicleBodyType}</span>
                                        )}
                                    </CFormLabel>
                                    <CFormSelect
                                        size="sm"
                                        name="VehicleBodyType"
                                        onFocus={onFocus}
                                        onBlur={onBlur}
                                        onChange={handleChange}
                                        value={values.VehicleBodyType}
                                        className={`mb-1 ${errors.VehicleBodyType && 'is-invalid'}`}
                                        aria-label="Small select example"
                                    >
                                        <option value="">Select ...</option>

                                        <option value="1">Open</option>

                                        <option value="2">Close</option>
                                    </CFormSelect>
                                </CCol>

                            </CRow>
                            <CRow className="mb-md-1">
                                <CCol md={3}>
                                    <CFormLabel htmlFor="formFileSm">
                                        RC Copy Front*{' '}
                                        {errors.RCCopyFront && (
                                            <span className="help text-danger">{errors.RCCopyFront}</span>
                                        )}
                                    </CFormLabel>
                                    <CFormInput
                                        type="file"
                                        name="RCCopyFront"
                                        size="sm"
                                        id="formFileSm"
                                    />
                                </CCol>
                                <CCol md={3}>
                                    <CFormLabel htmlFor="formFileSm">
                                        RC Copy Back*{' '}
                                        {errors.RCCopyBack && (
                                            <span className="help text-danger">{errors.RCCopyBack}</span>
                                        )}
                                    </CFormLabel>
                                    <CFormInput
                                        type="file"
                                        name="RCCopyBack"
                                        size="sm"
                                        id="formFileSm"
                                    />
                                </CCol>
                                <CCol md={3}>
                                    <CFormLabel htmlFor="formFileSm">
                                        Insurance Copy Front*{' '}
                                        {errors.InsuranceCopyFront && (
                                            <span className="help text-danger">{errors.InsuranceCopyFront}</span>
                                        )}
                                    </CFormLabel>
                                    <CFormInput
                                        type="file"
                                        name="InsuranceCopyFront"
                                        size="sm"
                                        id="formFileSm"
                                    />
                                </CCol>
                                <CCol md={3}>
                                    <CFormLabel htmlFor="formFileSm">
                                        Insurance Copy Back*{' '}
                                        {errors.InsuranceCopyBack && (
                                            <span className="help text-danger">{errors.InsuranceCopyBack}</span>
                                        )}
                                    </CFormLabel>
                                    <CFormInput
                                        type="file"
                                        name="InsuranceCopyBack"
                                        size="sm"
                                        id="formFileSm"
                                    />
                                </CCol>
                            </CRow>
                            <CRow className="mb-md-1">
                                <CCol md={3}>
                                    <CFormLabel>Insurance Validity*</CFormLabel>
                                    <CFormInput
                                        // name="date-input"
                                        // type="date"
                                        // size="sm"
                                        // id="date-input"
                                        // locate="pt-br"
                                        // value=""
                                        // placeholder=""
                                        type="date" size="sm" id="fecha-hasta" name="fecha-hasta" placeholder="date"
                                    />
                                </CCol>
                                <CCol md={3}>
                                    <CFormLabel >FC Validity*</CFormLabel>
                                    <CFormInput
                                        type="date" size="sm" id="fecha-hasta" name="fecha-hasta" placeholder="date"

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

export default VehicleMaster
