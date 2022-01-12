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
import validate from 'src/Validations/FormValidation'
import { Link } from 'react-router-dom'
import CustomTable from '../../components/customComponent/CustomTable'
const AdvanceHire = () => {
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
              <CRow className="">
                <CCol xs={12} md={3}>
<<<<<<< HEAD
                  <CFormLabel htmlFor="vType">Vehicle Type</CFormLabel>

                  <CFormInput size="sm" id="vType"  readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="vNum">Vehicle Number</CFormLabel>

                  <CFormInput size="sm" id="vNum"  readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="vCap">Vehicle Capacity</CFormLabel>

                  <CFormInput size="sm" id="vCap"  readOnly />
=======
                  <CFormLabel htmlFor="inputAddress">Vehicle Type</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Vehicle Number</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Vehicle Capacity</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                </CCol>

                {/* <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">VA Number</CFormLabel>

<<<<<<< HEAD
                  <CFormInput size="sm" id="inputAddress"  readOnly />
=======
                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                </CCol>
              </CRow>
              <CRow className=""> */}
                <CCol xs={12} md={3}>
<<<<<<< HEAD
                  <CFormLabel htmlFor="dName">Driver Name</CFormLabel>

                  <CFormInput size="sm" id="dName"  readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="dMob">Driver Mobile Number</CFormLabel>

                  <CFormInput size="sm" id="dMob"  readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="gateInDateTime">Gate-In Date & Time</CFormLabel>

                  <CFormInput size="sm" id="gateInDateTime"  readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inspectionDateTime">Vehicle Inspection Date & Time</CFormLabel>

                  <CFormInput size="sm" id="inspectionDateTime"  readOnly />
=======
                  <CFormLabel htmlFor="inputAddress">Driver Name</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Driver Mobile Number</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Gate-In Date & Time</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Vehicle Inspection Date & Time</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                </CCol>
              {/* </CRow>
              <CRow className=""> */}
                <CCol xs={12} md={3}>
<<<<<<< HEAD
                  <CFormLabel htmlFor="verifyDate">Doc. Verification Date & Time</CFormLabel>

                  <CFormInput size="sm" id="verifyDate"  readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="tNum">Tripsheet Number</CFormLabel>

                  <CFormInput size="sm" id="tNum"  readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="shedName">Shed Name</CFormLabel>

                  <CFormInput size="sm" id="shedName"  readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="ownerName">Owner Name</CFormLabel>

                  <CFormInput size="sm" id="ownerName"  readOnly />
=======
                  <CFormLabel htmlFor="inputAddress">Doc. Verification Date & Time</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Tripsheet Number</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Shed Name</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Owner Name</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                </CCol>
              {/* </CRow>
              <CRow className=""> */}
                <CCol xs={12} md={3}>
<<<<<<< HEAD
                  <CFormLabel htmlFor="ownerMob">Owner Cell Number</CFormLabel>

                  <CFormInput size="sm" id="ownerMob"  readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="vCode">Vendor Code</CFormLabel>

                  <CFormInput type="text" size="sm" id="vCode"  readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="cOutstand">Current Outstanding</CFormLabel>

                  <CFormInput type="text" size="sm" id="cOutstand"  readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="advancepayBank">Advance Payment Bank*</CFormLabel>

                  <CFormInput type="text" size="sm" id="advancepayBank" value="432" />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="advancepayDiesel">Advance Payment Diesel*</CFormLabel>

                  <CFormInput type="text" size="sm" id="advancepayDiesel" value="5327" />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="freigthRate">Total Frieght Amount</CFormLabel>

                  <CFormInput type="text" size="sm" id="freigthRate" value="6443" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="actFreight">Actual Freight Amount*</CFormLabel>

                  <CFormInput type="text" size="sm" id="actFreight" value="3543" />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="income">Income Base Freight Amount</CFormLabel>

                  <CFormInput type="text" size="sm" id="income"  />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="sTon">Shipment Tonnage*</CFormLabel>

                  <CFormInput type="text" size="sm" id="sTon"  readOnly />
=======
                  <CFormLabel htmlFor="inputAddress">Owner Cell Number</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Vendor Code</CFormLabel>

                  <CFormInput type="text" size="sm" id="inputAddress" value="" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Current Outstanding</CFormLabel>

                  <CFormInput type="text" size="sm" id="inputAddress" value="" readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Advance Payment Bank*</CFormLabel>

                  <CFormInput type="text" size="sm" id="inputAddress" value="432" />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Advance Payment Diesel*</CFormLabel>

                  <CFormInput type="text" size="sm" id="inputAddress" value="5327" />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Total Frieght Amount</CFormLabel>

                  <CFormInput type="text" size="sm" id="inputAddress" value="6443" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Actual Freight Amount*</CFormLabel>

                  <CFormInput type="text" size="sm" id="inputAddress" value="3543" />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Income Base Freight Amount</CFormLabel>

                  <CFormInput type="text" size="sm" id="inputAddress" value="" />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Shipment Tonnage*</CFormLabel>

                  <CFormInput type="text" size="sm" id="inputAddress" value="" readOnly />
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                </CCol>

                {/* <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="remarks">Applicable Tax*</CFormLabel>
                                    <CFormSelect
                                        size="sm"
                                        // className="mb-3"
                                        aria-label="Small select example"
                                    >
                                        <option hidden>Select ...</option>

                                        <option value="1">TDS</option>

                                        <option value="2">RCM</option>

                                        <option value="2">GST</option>
                                    </CFormSelect>
                                </CCol> */}
                <CCol xs={12} md={3}>
<<<<<<< HEAD
                  <CFormLabel htmlFor="expectDelivery">
=======
                  <CFormLabel htmlFor="inputAddress">
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                    Expected Delivery Date & Time*
                    {errors.AdvancePaymentMode && (
                      <span className="help text-danger">{errors.AdvancePaymentMode}</span>
                    )}
                  </CFormLabel>
<<<<<<< HEAD
                  <CFormInput size="sm" type="datetime-local" id="expectDelivery" />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="remarks">Remarks</CFormLabel>
                  <CFormTextarea id="remarks" rows="1"></CFormTextarea>
=======
                  <CFormInput size="sm" type="datetime-local" id="inputAddress" />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="remarks">Remarks</CFormLabel>
                  <CFormTextarea id="exampleFormControlTextarea1" rows="1"></CFormTextarea>
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
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
