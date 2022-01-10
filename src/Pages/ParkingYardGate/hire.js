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
} from '@coreui/react'
import { React, useState } from 'react'
import useForm from 'src/Hooks/useForm'
import validate from 'src/Validations/FormValidation'
import CustomTable from '../../components/customComponent/CustomTable'
const ParkingYardGate = () => {
  const formValues = {
    vehicleType: '',
    OdometerKm: '',
    odometerPhoto: '',
  }

  const { values, errors, handleChange, onFocus, handleSubmit, enableSubmit, onBlur, onClick } =
    useForm(login, validate, formValues)

  function login() {
    alert('No Errors CallBack Called')
  }
  console.log('ctx')
  return (
    <>
      <CContainer>
        <CCard>
          <CTabContent>
            <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={true}>
              <CForm className="container p-3" onSubmit={handleSubmit}>
                <CRow>
                  <CCol md={3}>
                    <CFormLabel htmlFor="vType">
                      Vehicle Type*
                      {errors.vehicleType && (
                        <span className="help text-danger">{errors.vehicleType}</span>
                      )}
                    </CFormLabel>

                    <CFormSelect
                      size="sm"
                      name="vType"
                      onChange={onClick}
                      aria-label="Small select example"
                    >
                      <option value="ownContract">Own or Contract</option>
                      <option value="hire">Hire</option>
                    </CFormSelect>
                  </CCol>

                  <CCol md={3}>
                    <CFormLabel htmlFor="vNum">Vehicle No*</CFormLabel>

                    <CFormInput size="sm" id="vNum" value="" />
                  </CCol>

                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="vCap">Vehicle Capacity*</CFormLabel>

                    <CFormInput size="sm" id="vCap" value="" />
                  </CCol>

                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="dName">Driver Name*</CFormLabel>
                    <CFormInput size="sm" id="driverNme" className="mb-3" value="" />
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="dNum">Driver Mobile No*</CFormLabel>
                    <CFormInput size="sm" id="driverNum" value="" />
                  </CCol>

                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="vBody">
                      Vehicle Body*
                      {errors.vehicleType && (
                        <span className="help text-danger">{errors.vehicleType}</span>
                      )}
                    </CFormLabel>
                    <CFormSelect size="sm" name="vBody" aria-label="Small select example">
                      <option value="open" hidden>
                        Select Body Type
                      </option>
                      <option value="open">Open</option>
                      <option value="closed">Closed</option>
                    </CFormSelect>
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
      </CContainer>
    </>
  )
}

export default ParkingYardGate
