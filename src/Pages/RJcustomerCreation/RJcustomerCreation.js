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
                </CCol>
              </CRow>
              <CRow className="">
                <CCol xs={12} md={3}>
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
                </CCol>
              </CRow>
              <CRow className="">
                <CCol xs={12} md={3}>
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
                </CCol>
              </CRow>
              <CRow className="">
                <CCol xs={12} md={3}>
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
                </CCol>
              </CRow>

              <CRow className="">
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Remarks</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" />
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
