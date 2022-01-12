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
} from '@coreui/react'
import { React, useState, useContext } from 'react'
import useForm from 'src/Hooks/useForm'
import validate from 'src/Validations/FormValidation'
import CustomTable from '../../components/customComponent/CustomTable'
const ParkingYardGate = () => {
  const ctx = useContext()

  console.log('ctx')

  const formValues = {
    vehicleType: '',
    OdometerKm: '',
    odometerPhoto: '',
  }

  const { values, errors, handleChange, onFocus, handleSubmit, enableSubmit, onBlur } = useForm(
    login,
    validate,
    formValues
  )

  function login() {
    alert('No Errors CallBack Called')
  }
  return (
    <>
      <CCard>
        <CTabContent>
          <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={true}>
            <CForm className="container p-3" onSubmit={handleSubmit}>
              <CRow>
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
                    className={`mb-3 ${errors.vehicleType && 'is-invalid'}`}
                    aria-label="Small select example"
                  >
<<<<<<< HEAD
                    <option >Select Vehicle Types</option>
=======
                    <option value="">Select Vehicle Types</option>
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a

                    <option value="1">Own</option>

                    <option value="2">Contract</option>

                    <option value="3">Hire</option>
                  </CFormSelect>
                </CCol>

                <CCol md={3}>
                  <CFormLabel htmlFor="inputAddress">Vehicle No*</CFormLabel>
                  <CFormSelect size="sm" className="mb-3" aria-label="Small select example">
                    <option hidden>Select Vehicle No</option>

                    <option value="1">TN45AT8614</option>

                    <option value="2">TN45AT8612</option>

                    <option value="3">TN45AT9687</option>
                  </CFormSelect>
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Vehicle Capacity*</CFormLabel>

<<<<<<< HEAD
                  <CFormInput size="sm" id="inputAddress"  readOnly />
=======
                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Driver Name*</CFormLabel>
                  <CFormSelect size="sm" className="mb-3" aria-label="Small select example">
                    <option hidden>Select Driver</option>

                    <option value="1">Mari Muthu</option>

                    <option value="2">Mani Kandan</option>

                    <option value="3">Velu Chamy</option>
                  </CFormSelect>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Driver Cell No*</CFormLabel>
<<<<<<< HEAD
                  <CFormInput size="sm" id="inputAddress"  readOnly />
=======
                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">
                    Odometer Km*{' '}
                    {errors.OdometerKm && (
                      <span className="help text-danger">{errors.OdometerKm}</span>
                    )}
                  </CFormLabel>
                  <CFormInput
                    name="OdometerKm"
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                    className={`${errors.OdometerKm && 'is-invalid'}`}
                    size="sm"
                    id="inputAddress"
                    placeholder="Km on Odometer"
                  />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="formFileSm">
                    Odometer Photo*{' '}
                    {errors.odometerPhoto && (
                      <span className="help text-danger">{errors.odometerPhoto}</span>
                    )}
                  </CFormLabel>
                  <CFormInput
                    type="file"
                    name="odometerPhoto"
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                    value={values.odometerPhoto}
                    className={`${errors.odometerPhoto && 'is-invalid'}`}
                    size="sm"
                    id="formFileSm"
                  />
                </CCol>
                <CCol
                  xs={12}
                  md={3}
                  className="mt-3 pt-1"
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                ></CCol>
              </CRow>
              <CRow>
                <CCol
                  className="mt-3 offset-md-9 py-2"
                  xs={12}
                  sm={12}
                  md={3}
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <CButton
                    size="sm"
                    color="warning"
                    disabled={enableSubmit}
                    className="mx-3 text-white"
                    type="submit"
                  >
                    Wait OutSide
                  </CButton>
                  <CButton
                    size="sm"
                    disabled={enableSubmit}
                    color="warning"
                    className="mx-3 text-white"
                    type="submit"
                  >
                    Gate In
                  </CButton>
                </CCol>
              </CRow>
            </CForm>
          </CTabPane>
        </CTabContent>
      </CCard>
      <CCard className="mt-4">
        <CContainer className="mt-2">
          <CustomTable />
        </CContainer>
      </CCard>
    </>
  )
}

export default ParkingYardGate
