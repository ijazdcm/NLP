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
  CFormTextarea
} from '@coreui/react'
import { React, useState } from 'react'
import useForm from 'src/Hooks/useForm'
import validate from 'src/Validations/FormValidation'
import CustomTable from '../../components/customComponent/CustomTable'
<<<<<<< HEAD
const VehicleAssignmentConsumer = () => {
=======
const ParkingYardGate = () => {
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
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
                  <CFormLabel htmlFor="OdometerKM">Odometer KM</CFormLabel>

                  <CFormInput size="sm" id="OdometerKM"  readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="odoImg">Odometer Photo</CFormLabel>

                  {/* <CFormInput size="sm" id="inputAddress"  readOnly /> */}
=======
                  <CFormLabel htmlFor="inputAddress">Driver Name</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Driver Mobile Number</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Odometer KM</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Odometer Photo</CFormLabel>

                  {/* <CFormInput size="sm" id="inputAddress" value="" readOnly /> */}
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                  <CButton
                    // onClick={() => setVisible(!visible)}
                    className="w-100"
                    color="info"
                    size="sm"
<<<<<<< HEAD
                    id='odoImg'
=======
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                  >
                    <span className="float-start">
                      <i className="fa fa-eye" aria-hidden="true"></i> &nbsp;View
                    </span>
                  </CButton>
                </CCol>
              {/* </CRow>

              <CRow className=""> */}
                <CCol xs={12} md={3}>
<<<<<<< HEAD
                  <CFormLabel htmlFor="gateInDateTime">Gate-In Time</CFormLabel>

                  <CFormInput size="sm" id="gateInDateTime"  readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inspectionDateTime">Inspection Time</CFormLabel>

                  <CFormInput size="sm" id="inspectionDateTime"  readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="verifyDate">Doc. Verify Time</CFormLabel>

                  <CFormInput size="sm" id="verifyDate"  readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="tNum">Tripsheet Number</CFormLabel>

                  <CFormInput size="sm" id="tNum"  readOnly />
=======
                  <CFormLabel htmlFor="inputAddress">Gate-In Time</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Inspection Time</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Doc. Verify Time</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Tripsheet Number</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                </CCol>
              {/* </CRow>
              <CRow className=""> */}
                <CCol xs={12} md={3}>
<<<<<<< HEAD
                  <CFormLabel htmlFor="shedName">Shed Name</CFormLabel>

                  <CFormInput size="sm" id="shedName"  readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="ownerName">Owner Name</CFormLabel>

                  <CFormInput size="sm" id="ownerName"  readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="ownerMob">Owner Mobile Number</CFormLabel>

                  <CFormInput size="sm" id="ownerMob"  readOnly />
=======
                  <CFormLabel htmlFor="inputAddress">Shed Name</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Owner Name</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Owner Mobile Number</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="remarks">Remarks*</CFormLabel>
                  <CFormTextarea
                    name="remarks"
<<<<<<< HEAD
                    id="remarks"
=======
                    id="exampleFormControlTextarea1"
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                    rows="1"
                  ></CFormTextarea>
                </CCol>
              </CRow>

<<<<<<< HEAD
              <br />
              <CTable>
                <CTableHead style={{ backgroundColor: '#4d3227', color: 'white' }}>
                  <CTableRow>
                    <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                      S.No
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                      SO No
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                      SO Date & Time
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                      Delivery No
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                      Delivery Date
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                      City
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                      Customer
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                      Route
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                      TL
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                      QTY in Tons
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                      Calling Plan
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                      Action
                    </CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell>1</CTableDataCell>
                    <CTableDataCell>637534</CTableDataCell>
                    <CTableDataCell>13.12.2021</CTableDataCell>
                    <CTableDataCell>635437</CTableDataCell>
                    <CTableDataCell>13.12.2021</CTableDataCell>
                    <CTableDataCell>Chennai</CTableDataCell>
                    <CTableDataCell>SSS</CTableDataCell>
                    <CTableDataCell>Trichy</CTableDataCell>
                    <CTableDataCell>Ram</CTableDataCell>
                    <CTableDataCell>23</CTableDataCell>
                    <CTableDataCell>Monday</CTableDataCell>
                    <CTableDataCell>
                      <span className="float-start" color="danger">
                        <CButton className="btn btn-danger" color="">
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </CButton>
                        <CButton className="btn btn-dark" color="white">
                          <i className="fa fa-edit" aria-hidden="true"></i>
                        </CButton>
                      </span>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>2</CTableDataCell>
                    <CTableDataCell>980567</CTableDataCell>
                    <CTableDataCell>14.12.2021</CTableDataCell>
                    <CTableDataCell>635437</CTableDataCell>
                    <CTableDataCell>14.12.2021</CTableDataCell>
                    <CTableDataCell>Thanjavor</CTableDataCell>
                    <CTableDataCell>SSS</CTableDataCell>
                    <CTableDataCell>Trichy</CTableDataCell>
                    <CTableDataCell>Ram</CTableDataCell>
                    <CTableDataCell>20</CTableDataCell>
                    <CTableDataCell>Tuesday</CTableDataCell>
                    <CTableDataCell>
                      <span className="float-start" color="danger">
                        <CButton className="btn btn-danger" color="">
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </CButton>
                        <CButton className="btn btn-dark" color="white">
                          <i className="fa fa-edit" aria-hidden="true"></i>
                        </CButton>
                      </span>
                    </CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
              <CRow className="mt-3">
                <CCol>
                  <CButton size="sm" color="primary" className="text-white" type="button">
                    Previous
                  </CButton>
                </CCol>

                <CCol
                  className="offset-md-7"
=======
              <CRow className="mt-2">
                <CCol>
                  <CButton
                    size="sm"
                    color="primary"
                    // disabled={enableSubmit}
                    className="px-3 text-white"
                    type="submit"
                  >
                    Previous
                  </CButton>
                </CCol>
                <CCol
                  className="offset-md-6"
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
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
                    // disabled={enableSubmit}
                    color="warning"
                    className="px-3 text-white"
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

<<<<<<< HEAD
export default VehicleAssignmentConsumer
=======
export default ParkingYardGate
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
