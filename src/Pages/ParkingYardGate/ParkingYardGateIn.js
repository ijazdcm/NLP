/* eslint-disable prettier/prettier */
import {
  CButton,
  CCard,
  CCardBody,
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
  CFormTextarea,
} from '@coreui/react'
import { React, useState } from 'react'
import useFormValid from 'src/Hooks/useFormValidate'
import validate from 'src/Validations/FormValidation'
import CustomTable from '../../components/customComponent/CustomTable'

const ParkingYardGate = () => {
  // States
  const [hire, setHire] = useState(false)

  // Form Validations
  const { values, errors, handleChange, onFocus, handleSubmit, enableSubmit, onBlur, onClick } =
    useFormValid(login, validate, formValues)

  const formValues = {
    vehicleType: '',
    OdometerKm: '',
    odometerPhoto: '',
  }

  function login() {
    alert('No Errors CallBack Called')
  }

  const columns = [
    {
      name: 'S.No',
      selector: (row) => row.sno,
      sortable: true,
      center: true,
    },
    {
      name: 'VA No',
      selector: (row) => row.VA_No,
      sortable: true,
      center: true,
    },
    {
      name: 'Tripsheet No',
      selector: (row) => row.Tripsheet_No,
      sortable: true,
      center: true,
    },
    {
      name: 'Vehicle Type',
      selector: (row) => row.Vehicle_Type,
      sortable: true,
      center: true,
    },
    {
      name: 'Vehicle No',
      selector: (row) => row.Vehicle_No,
      sortable: true,
      center: true,
    },
    {
      name: 'Driver Name',
      selector: (row) => row.Driver_Name,
      sortable: true,
      center: true,
    },
    {
      name: 'Waiting At',
      selector: (row) => row.Waiting_At,
      sortable: true,
      center: true,
    },
    {
      name: 'Screen Duration',
      selector: (row) => row.Screen_Duration,
      center: true,
    },
    {
      name: ' Overall Duration',
      selector: (row) => row.Overall_Duration,
      center: true,
    },
    {
      name: 'Action',
      selector: (row) => row.Action,
      center: true,
    },
  ]

  const data = [
    {
      id: 1,
      sno: 1,
      VA_No: 12000,
      Tripsheet_No: 102556,
      Vehicle_Type: 'own',
      Vehicle_No: 'TN45AT8417',
      Driver_Name: 'Saravana',
      Waiting_At: <span className="badge rounded-pill bg-info">DI Creation</span>,
      Screen_Duration: '0 Hrs 07 Mins',
      Overall_Duration: '0 Hrs 55 Mins',
      Action: (
        <CButton className="badge text-white" color="warning">
          Vehicle Insp
        </CButton>
      ),
    },
    {
      id: 2,
      sno: 2,
      VA_No: 12070,
      Tripsheet_No: 102501,
      Vehicle_Type: 'contract',
      Vehicle_No: 'TN54AT8417',
      Driver_Name: 'David',
      Waiting_At: <span className="badge rounded-pill bg-info">Waiting</span>,
      Screen_Duration: '0 Hrs 07 Mins',
      Overall_Duration: '0 Hrs 55 Mins',
      Action: (
        <CButton className="badge text-white" color="warning">
          Gate In
        </CButton>
      ),
    },
    {
      id: 3,
      sno: 3,
      VA_No: 12018,
      Tripsheet_No: 102501,
      Vehicle_Type: 'Hire',
      Vehicle_No: 'TN54CT8417',
      Driver_Name: 'Alvin',
      Waiting_At: <span className="badge rounded-pill bg-info">Ts Creation</span>,
      Screen_Duration: '1 Hrs 07 Mins',
      Overall_Duration: '2 Hrs 55 Mins',
      Action: (
        <CButton className="badge text-white" color="warning">
          Gate Out
        </CButton>
      ),
    },
  ]

  return (
    <>
      <CContainer>
        <CCard>
          <CForm className="container p-3" onSubmit={handleSubmit}>
            <CRow className="">
              <CCol md={3}>
                <CFormLabel htmlFor="vType">
                  Vehicle Type*
                  {errors.vehicleType && (
                    <span className="help text-danger">{errors.vehicleType}</span>
                  )}
                </CFormLabel>

                <CFormSelect size="sm" name="vType" aria-label="Small select example">
                  <option value="" hidden selected>
                    Select..
                  </option>
                  <option value="own" onClick={() => setHire(false)}>
                    Own
                  </option>
                  <option value="contract" onClick={() => setHire(false)}>
                    Contract
                  </option>
                  <option value="hire" onClick={() => setHire(true)}>
                    Hire
                  </option>
                  <option value="hire" onClick={() => setHire(true)}>
                    Party Vehicle
                  </option>
                </CFormSelect>
              </CCol>

              <CCol md={3}>
                <CFormLabel htmlFor="vNum">
                  Vehicle Number*
                  {errors.vNum && <span className="help text-danger">{errors.vNum}</span>}
                </CFormLabel>
                {hire ? (
                  <CFormInput name="vNum" size="sm" id="inputAddress" value="" />
                ) : (
                  <CFormSelect size="sm" name="vNum" className="" aria-label="Small select example">
                    <option hidden>Select...</option>

                    <option value="1">TN45AT8614</option>

                    <option value="2">TN45AT8612</option>

                    <option value="3">TN45AT9687</option>
                  </CFormSelect>
                )}
              </CCol>

              <CCol xs={12} md={3}>
                <CFormLabel htmlFor="vCap">Vehicle Capacity In MTS*</CFormLabel>
                {hire ? (
                  <CFormSelect size="sm" name="vCap" className="" aria-label="Small select example">
                    <option hidden>Select...</option>
                    <option value="10">10</option>
                    <option value="12">12</option>
                    <option value="19">19</option>
                    <option value="25">25</option>
                    <option value="30">30</option>
                  </CFormSelect>
                ) : (
                  <CFormInput name="vCap" size="sm" id="inputAddress" value="" readOnly />
                )}
              </CCol>

              <CCol xs={12} md={3}>
                <CFormLabel htmlFor="dName">Driver Name*</CFormLabel>
                {hire ? (
                  <CFormInput name="dName" size="sm" id="inputAddress" value="" />
                ) : (
                  <CFormSelect
                    name="dName"
                    size="sm"
                    className=""
                    aria-label="Small select example"
                  >
                    <option hidden>Select...</option>
                    <option value="1">Mari Muthu</option>
                    <option value="2">Mani Kandan</option>
                    <option value="3">Velu Chamy</option>
                  </CFormSelect>
                )}
              </CCol>
            </CRow>

            <CRow>
              <CCol xs={12} md={3}>
                <CFormLabel htmlFor="dMob">Driver Contact Number*</CFormLabel>
                <CFormInput name="dMob" size="sm" id="inputAddress" value="" readOnly={!hire} />
              </CCol>

              <CCol xs={12} md={3} hidden={hire}>
                <CFormLabel htmlFor="odoMeter">
                  Odometer KM*{' '}
                  {errors.OdometerKm && (
                    <span className="help text-danger">{errors.OdometerKm}</span>
                  )}
                </CFormLabel>
                <CFormInput
                  name="odoMeter"
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onChange={handleChange}
                  className={`${errors.OdometerKm && 'is-invalid'}`}
                  size="sm"
                  id="inputAddress"
                  placeholder=""
                />
              </CCol>

              <CCol xs={12} md={3} hidden={hire}>
                <CFormLabel htmlFor="odoImg">
                  Odometer Photo*{' '}
                  {errors.odometerPhoto && (
                    <span className="help text-danger">{errors.odometerPhoto}</span>
                  )}
                </CFormLabel>
                <CFormInput
                  type="file"
                  name="odoImg"
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onChange={handleChange}
                  value={values.odometerPhoto}
                  className={`${errors.odometerPhoto && 'is-invalid'}`}
                  size="sm"
                  id="formFileSm"
                />
              </CCol>

              <CCol xs={12} md={3} hidden={!hire}>
                <CFormLabel htmlFor="vBody">Vehicle Body*</CFormLabel>
                <CFormSelect name="vBody" size="sm" className="" aria-label="Small select example">
                  <option hidden>Select...</option>
                  <option value="open">Open</option>
                  <option value="closed">Closed</option>
                </CFormSelect>
              </CCol>
              <CCol xs={12} md={3}>
                <CFormLabel htmlFor="remarks">Remarks</CFormLabel>
                <CFormTextarea id="exampleFormControlTextarea1" rows="1"></CFormTextarea>
              </CCol>
            </CRow>

            <CRow className="mt-1">
              <CCol
                className="d-md-flex justify-content-end"
                xs={12}
                sm={12}
                md={12}
                // style={{ display: 'flex', justifyContent: 'flex-end' }}
              >
                <CButton
                  size="sm"
                  color="warning"
                  // disabled={enableSubmit}
                  className="mx-1 text-white"
                  type="submit"
                >
                  Wait OutSide
                </CButton>
                {hire}
                <CButton
                  size="sm"
                  // disabled={enableSubmit}
                  color="warning"
                  className="mx-1 text-white"
                  type="submit"
                >
                  Gate In
                </CButton>
              </CCol>
            </CRow>
          </CForm>
        </CCard>
        <CCard className="mt-3">
          <CContainer className="mt-2">
            <CustomTable columns={columns} data={data} />
          </CContainer>
        </CCard>
      </CContainer>
    </>
  )
}
export default ParkingYardGate
