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
  CFormTextarea,
} from '@coreui/react'
import { React, useState } from 'react'
import useForm from 'src/Hooks/useForm'
import validate from 'src/Utils/Validation'
import { Link } from 'react-router-dom'
import CustomTable from '../../components/customComponent/CustomTable'
const AdvanceHire = () => {
  const formValues = {
    advancepayBank: '',
    advancepayDiesel: '',
    actFreight: '',
    incomeFreight: '',
    expectDelivery: '',
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
              <CRow className="">
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="vType">Vehicle Type</CFormLabel>

                  <CFormInput size="sm" id="vType" readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="vNum">Vehicle Number</CFormLabel>

                  <CFormInput size="sm" id="vNum" readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="vCap">Vehicle Capacity</CFormLabel>

                  <CFormInput size="sm" id="vCap" readOnly />
                </CCol>

                {/* <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">VA Number</CFormLabel>

                  <CFormInput size="sm" id="inputAddress"  readOnly />
                </CCol>
              </CRow>
              <CRow className=""> */}
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="dName">Driver Name</CFormLabel>

                  <CFormInput size="sm" id="dName" readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="dMob">Driver Mobile Number</CFormLabel>

                  <CFormInput size="sm" id="dMob" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="gateInDateTime">Gate-In Date & Time</CFormLabel>

                  <CFormInput size="sm" id="gateInDateTime" readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inspectionDateTime">
                    Vehicle Inspection Date & Time
                  </CFormLabel>

                  <CFormInput size="sm" id="inspectionDateTime" readOnly />
                </CCol>
                {/* </CRow>
              <CRow className=""> */}
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="verifyDate">Doc. Verification Date & Time</CFormLabel>

                  <CFormInput size="sm" id="verifyDate" readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="tNum">Tripsheet Number</CFormLabel>

                  <CFormInput size="sm" id="tNum" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="shedName">Shed Name</CFormLabel>

                  <CFormInput size="sm" id="shedName" readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="ownerName">Owner Name</CFormLabel>

                  <CFormInput size="sm" id="ownerName" readOnly />
                </CCol>
                {/* </CRow>
              <CRow className=""> */}
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="ownerMob">Owner Cell Number</CFormLabel>

                  <CFormInput size="sm" id="ownerMob" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="vCode">Vendor Code</CFormLabel>

                  <CFormInput type="text" size="sm" id="vCode" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="cOutstand">Current Outstanding</CFormLabel>

                  <CFormInput type="text" size="sm" id="cOutstand" readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="advancepayBank">
                    Advance Payment Bank*{' '}
                    {errors.advancepayBank && (
                      <span className="small text-danger">{errors.advancepayBank}</span>
                    )}
                  </CFormLabel>

                  <CFormInput
                    type="text"
                    size="sm"
                    id="advancepayBank"
                    className={`${errors.advancepayBank && 'is-invalid'}`}
                    name="advancepayBank"
                    value={values.advancepayBank || ''}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                  />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="advancepayDiesel">
                    Advance Payment Diesel*{' '}
                    {errors.advancepayDiesel && (
                      <span className="small text-danger">{errors.advancepayDiesel}</span>
                    )}
                  </CFormLabel>

                  <CFormInput
                    type="text"
                    size="sm"
                    id="advancepayDiesel"
                    className={`${errors.advancepayDiesel && 'is-invalid'}`}
                    name="advancepayDiesel"
                    value={values.advancepayDiesel || ''}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                  />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="totFrieght">Total Frieght Amount</CFormLabel>

                  <CFormInput type="text" size="sm" id="freigthRate" value="6443" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="actFreight">
                    Actual Freight Amount*{' '}
                    {errors.actFreight && (
                      <span className="small text-danger">{errors.actFreight}</span>
                    )}
                  </CFormLabel>

                  <CFormInput
                    type="text"
                    size="sm"
                    id="actFreight"
                    className={`${errors.actFreight && 'is-invalid'}`}
                    name="actFreight"
                    value={values.actFreight || ''}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                  />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="incomeFreight">
                    Income Base Freight Amount{' '}
                    {errors.incomeFreight && (
                      <span className="small text-danger">{errors.incomeFreight}</span>
                    )}
                  </CFormLabel>

                  <CFormInput
                    type="text"
                    size="sm"
                    id="incomeFreight"
                    className={`${errors.incomeFreight && 'is-invalid'}`}
                    name="incomeFreight"
                    value={values.incomeFreight || ''}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                  />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="sTon">Shipment Tonnage*</CFormLabel>

                  <CFormInput type="text" size="sm" id="sTon" readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="expectDelivery">
                    Expected Delivery Date & Time*{' '}
                    {errors.expectDelivery && (
                      <span className="small text-danger">{errors.expectDelivery}</span>
                    )}
                  </CFormLabel>
                  <CFormInput
                    type="text"
                    size="sm"
                    id="expectDelivery"
                    className={`${errors.expectDelivery && 'is-invalid'}`}
                    name="expectDelivery"
                    value={values.expectDelivery || ''}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                  />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="remarks">Remarks</CFormLabel>
                  <CFormTextarea id="remarks" rows="1"></CFormTextarea>
                </CCol>
              </CRow>

              <CRow className="mt-3">
                <CCol>
                  <CButton
                    size="sm"
                    color="primary"
                    // disabled={enableSubmit}
                    className="px-3 text-white"
                    type="submit"
                  >
                    <Link className="text-white" to="/AdvancePayment">
                      Previous
                    </Link>
                  </CButton>
                </CCol>
                <CCol
                  className="offset-md-6"
                  xs={12}
                  sm={12}
                  md={3}
                  style={{ display: 'flex', justifyContent: 'end' }}
                >
                  <CButton
                    size="sm"
                    color="warning"
                    // disabled={enableSubmit}
                    className="mx-3 px-3 text-white"
                    type="submit"
                  >
                    Submit
                  </CButton>
                  <CButton
                    size="sm"
                    color="warning"
                    // disabled={enableSubmit}
                    className="mx-3 px-3 text-white"
                    type="submit"
                  >
                    Reject
                  </CButton>
                  {/* <CButton
                                        size="sm"
                                        // disabled={enableSubmit}
                                        color="warning"
                                        className="mx-3 px-3 text-white"
                                        type="submit"
                                    >
                                        Cancel
                                    </CButton> */}
                </CCol>
              </CRow>
            </CForm>
          </CTabPane>
        </CTabContent>
      </CCard>
    </>
  )
}

export default AdvanceHire
