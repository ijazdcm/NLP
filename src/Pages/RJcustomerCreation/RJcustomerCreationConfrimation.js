import {
  CButton,
  CCard,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
  CTabContent,
  CTabPane,
<<<<<<< HEAD
  CFormSelect
=======
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
} from '@coreui/react'
import React from 'react'
import { Link } from 'react-router-dom'

<<<<<<< HEAD
const RJcustomerCreationConfirmation = () => {
  return (
    <>
       <CCard>
=======
const RJcustomerCreationConfrimation = () => {
  return (
    <>
      <CCard>
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
        <CTabContent>
          <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={true}>
            <CForm className="container p-3">
              <CRow className="">
                <CCol xs={12} md={3}>
<<<<<<< HEAD
                  <CFormLabel htmlFor="cName">Customer Name</CFormLabel>
                  <CFormInput size="sm" id="cName"  readOnly/>
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="cMob">Customer Mobile Number</CFormLabel>
                  <CFormInput size="sm" id="cMob"  readOnly/>
=======
                  <CFormLabel htmlFor="inputAddress">Customer Name</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Customer Mobile Number</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">PAN Card Attatchment</CFormLabel>
                  <CButton
                    // onClick={() => setAdharVisible(!adharvisible)}
                    className="w-100 m-0"
                    color="info"
                    size="sm"
                    id="inputAddress"
                  >
                    <span className="float-start">
                      <i className="fa fa-eye" aria-hidden="true"></i> &nbsp;View
                    </span>
                    <span className="float-end">
                      <i
                        className="fa fa-trash"
                        aria-hidden="true"
                        // onMouseOver={changeBackground}
                        // onMouseLeave={changeBackground1}
                      ></i>
                    </span>
                  </CButton>
                </CCol>
                <CCol xs={12} md={3}>
<<<<<<< HEAD
                  <CFormLabel htmlFor="panCard">PAN Number</CFormLabel>
                  <CFormInput size="sm" id="panCard"  readOnly/>
                </CCol>
              </CRow>
              <CRow className="">
              <CCol xs={12} md={3}>
=======
                  <CFormLabel htmlFor="inputAddress">PAN Number</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>
              </CRow>
              <CRow className="">
                <CCol xs={12} md={3}>
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                  <CFormLabel htmlFor="inputAddress">Aadhar Card</CFormLabel>
                  <CButton
                    // onClick={() => setAdharVisible(!adharvisible)}
                    className="w-100 m-0"
                    color="info"
                    size="sm"
                    id="inputAddress"
                  >
                    <span className="float-start">
                      <i className="fa fa-eye" aria-hidden="true"></i> &nbsp;View
                    </span>
                    <span className="float-end">
                      <i
                        className="fa fa-trash"
                        aria-hidden="true"
                        // onMouseOver={changeBackground}
                        // onMouseLeave={changeBackground1}
                      ></i>
                    </span>
                  </CButton>
                </CCol>
                <CCol xs={12} md={3}>
<<<<<<< HEAD
                  <CFormLabel htmlFor="aadharCard">Aadhar Number</CFormLabel>
                  <CFormInput size="sm" id="aadharCard"  readOnly/>
=======
                  <CFormLabel htmlFor="inputAddress">Aadhar Number</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Bank Passbook</CFormLabel>
                  <CButton
                    // onClick={() => setAdharVisible(!adharvisible)}
                    className="w-100 m-0"
                    color="info"
                    size="sm"
                    id="inputAddress"
                  >
                    <span className="float-start">
                      <i className="fa fa-eye" aria-hidden="true"></i> &nbsp;View
                    </span>
                    <span className="float-end">
                      <i
                        className="fa fa-trash"
                        aria-hidden="true"
                        // onMouseOver={changeBackground}
                        // onMouseLeave={changeBackground1}
                      ></i>
                    </span>
                  </CButton>
                </CCol>
                <CCol xs={12} md={3}>
<<<<<<< HEAD
              <CFormLabel htmlFor="bankName">Bank Name</CFormLabel>
              <CFormInput size="sm" id="bankName"  readOnly/>
            </CCol>
              </CRow>
              <CRow className="">
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="bankBranch">Bank Branch</CFormLabel>
                  <CFormInput size="sm" id="bankBranch"  readOnly/>
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="ifscCode">Bank IFSC Code</CFormLabel>
                  <CFormInput size="sm" id="ifscCode"  readOnly/>
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="bankAccount">Bank Account Number</CFormLabel>
                  <CFormInput size="sm" id="bankAccount"  readOnly/>
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="Street">Street Name</CFormLabel>

                  <CFormInput size="sm" id="Street"  readOnly/>
=======
                  <CFormLabel htmlFor="inputAddress">Bank Name</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>
              </CRow>
              <CRow className="">
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Bank Branch</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Bank IFCS Code</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Bank Account Number</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Street Name</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                </CCol>
              </CRow>
              <CRow className="">
                <CCol xs={12} md={3}>
<<<<<<< HEAD
                  <CFormLabel htmlFor="Area">Area Name</CFormLabel>
                  <CFormInput size="sm" id="Area"  readOnly/>
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="City">City</CFormLabel>
                  <CFormInput size="sm" id="City"  readOnly/>
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="District">District</CFormLabel>
                  <CFormInput size="sm" id="District"  readOnly/>
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="State">State</CFormLabel>
                  <CFormInput size="sm" id="State"  readOnly/>
=======
                  <CFormLabel htmlFor="inputAddress">Area Name</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">City</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">District</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">State</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                </CCol>
              </CRow>
              <CRow className="">
                <CCol xs={12} md={3}>
<<<<<<< HEAD
                  <CFormLabel htmlFor="postalCode">Postal Code</CFormLabel>
                  <CFormInput size="sm" id="postalCode"  readOnly/>
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="Region">Region</CFormLabel>
                  <CFormInput size="sm" id="Region" value="Auto" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="GST">GST Number</CFormLabel>
                  <CFormInput size="sm" id="GST"  readOnly/>
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="Payment">Payment Terms</CFormLabel>
                  <CFormInput size="sm" id="Payment"  readOnly/>
=======
                  <CFormLabel htmlFor="inputAddress">Postal Code</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Region</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="Auto" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">GST Number</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Payment Terms</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                </CCol>
              </CRow>

              <CRow className="">
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Remarks</CFormLabel>
<<<<<<< HEAD
                  <CFormInput size="sm" id="inputAddress"  readOnly/>
=======
                  <CFormInput size="sm" id="inputAddress" value=""  />
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
                    type="button"
                  >
<<<<<<< HEAD
                    <Link to="/RJcustomerCreationApprovalHome"> Previous</Link>
=======
                    <Link to="/RJcustomerCreationConfrimationHome"> Previous</Link>
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                  </CButton>
                </CCol>
                <CCol className="offset-md-6 d-md-flex justify-content-end" xs={12} sm={12} md={3}>
                  <CButton
                    size="sm"
                    color="warning"
                    // disabled={enableSubmit}
                    className="mx-3 px-3 text-white"
                    type="submit"
                  >
                    Approve
                  </CButton>
                  <CButton
                    size="sm"
                    // disabled={enableSubmit}
                    color="warning"
                    className="px-3 text-white"
                    type="submit"
                  >
                    Reject
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

<<<<<<< HEAD
export default RJcustomerCreationConfirmation
=======
export default RJcustomerCreationConfrimation
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
