import {
  CButton,
  CCard,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CRow,
  CTabContent,
  CTabPane,
} from '@coreui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const RJcustomerCreation = () => {
  return (
    <>
      <CCard>
        <CTabContent>
          <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={true}>
            <CForm className="container p-3">
              <CRow className="">
                <CCol xs={12} md={3}>
<<<<<<< HEAD
                  <CFormLabel htmlFor="cName">Customer Name</CFormLabel>
                  <CFormInput size="sm" id="cName"  />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="cMob">Customer Mobile Number</CFormLabel>
                  <CFormInput size="sm" id="cMob"  />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="panCardattachment">PAN Card Attatchment</CFormLabel>
                  <CFormInput size="sm" type="file" id="panCardattachment"  />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="panCard">PAN Number</CFormLabel>
                  <CFormInput size="sm" id="panCard"  />
=======
                  <CFormLabel htmlFor="inputAddress">Customer Name</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Customer Mobile Number</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">PAN Card Attatchment</CFormLabel>
                  <CFormInput size="sm" type="file" id="inputAddress" value="" />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">PAN Number</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" />
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                </CCol>
              </CRow>
              <CRow className="">
                <CCol xs={12} md={3}>
<<<<<<< HEAD
                  <CFormLabel htmlFor="AadharCopy">Aadhar Card</CFormLabel>
                  <CFormInput size="sm" type="file" id="AadharCopy"  />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="aadharCard">Aadhar Number</CFormLabel>
                  <CFormInput size="sm" id="aadharCard"  />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="bankPass">Bank Passbook</CFormLabel>
                  <CFormInput size="sm" type="file" id="bankPass"  />
                </CCol>
                <CCol xs={12} md={3}>
              <CFormLabel htmlFor="bankName">Bank Name</CFormLabel>
              <CFormSelect
                    size="sm"
                    name="bankName"
                    className=""
                    id='bankName'
                    aria-label="Small select example"
                  >
                    <option hidden>Select...</option>
                    <option value="0">Select SP</option>
                  </CFormSelect>
            </CCol>
              </CRow>
              <CRow className="">
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="bankBranch">Bank Branch</CFormLabel>
                  <CFormInput size="sm" id="bankBranch"  />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="ifscCode">Bank IFSC Code</CFormLabel>
                  <CFormInput size="sm" id="ifscCode"  />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="bankAccount">Bank Account Number</CFormLabel>
                  <CFormInput size="sm" id="bankAccount"  />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="Street">Street Name</CFormLabel>

                  <CFormInput size="sm" id="Street"  />
=======
                  <CFormLabel htmlFor="inputAddress">Aadhar Card</CFormLabel>
                  <CFormInput size="sm" type="file" id="inputAddress" value="" />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Aadhar Number</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Bank Passbook</CFormLabel>
                  <CFormInput size="sm" type="file" id="inputAddress" value="" />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Bank Name</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="" />
                </CCol>
              </CRow>
              <CRow className="">
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Bank Branch</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Bank IFSC Code</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Bank Account Number</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Street Name</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="" />
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                </CCol>
              </CRow>
              <CRow className="">
                <CCol xs={12} md={3}>
<<<<<<< HEAD
                  <CFormLabel htmlFor="Area">Area Name</CFormLabel>
                  <CFormInput size="sm" id="Area"  />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="City">City</CFormLabel>
                  <CFormInput size="sm" id="City"  />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="District">District</CFormLabel>
                  <CFormInput size="sm" id="District"  />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="State">State</CFormLabel>
                  <CFormInput size="sm" id="State"  />
=======
                  <CFormLabel htmlFor="inputAddress">Area Name</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">City</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">District</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">State</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" />
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                </CCol>
              </CRow>
              <CRow className="">
                <CCol xs={12} md={3}>
<<<<<<< HEAD
                  <CFormLabel htmlFor="postalCode">Postal Code</CFormLabel>
                  <CFormInput size="sm" id="postalCode"  />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="Region">Region</CFormLabel>
                  <CFormInput size="sm" id="Region" value="Auto" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="GST">GST Number</CFormLabel>
                  <CFormInput size="sm" id="GST"  />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="Payment">Payment Terms</CFormLabel>
                  <CFormInput size="sm" id="Payment"  />
=======
                  <CFormLabel htmlFor="inputAddress">Postal Code</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Region</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="Auto" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">GST Number</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Payment Terms</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" />
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                </CCol>
              </CRow>

              <CRow className="">
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Remarks</CFormLabel>
<<<<<<< HEAD
                  <CFormInput size="sm" id="inputAddress"  />
=======
                  <CFormInput size="sm" id="inputAddress" value="" />
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
                    <Link to="/RJcustomerCreationHome"> Previous</Link>
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
                    Submit
                  </CButton>
                  {/* <CButton
                    size="sm"
                    // disabled={enableSubmit}
                    color="warning"
                    className="px-3 text-white"
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

export default RJcustomerCreation
