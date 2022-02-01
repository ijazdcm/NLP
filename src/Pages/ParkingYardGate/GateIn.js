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

import { React, useState, useEffect } from 'react'
import useForm from 'src/Hooks/useForm'
import validate from 'src/Utils/Validation'
import CustomTable from '../../components/customComponent/CustomTable'


import VehicleTypeService from 'src/Service/SmallMaster/Vehicles/VehicleTypeService'
import VehicleCapacityService from 'src/Service/SmallMaster/Vehicles/VehicleCapacityService'
import VehicleBodyTypeService from 'src/Service/SmallMaster/Vehicles/VehicleBodyTypeService'
import OwnAndContractSection from './FormSection/OwnAndContractSection'
import HireSection from './FormSection/HireSection'
import PartySection from './FormSection/PartySection'

const ParkingYardGate = () => {
  const [hire, setHire] = useState(false)
  const [api, setApi] = useState({})

  const [vehicleType, setVehicleType] = useState([])
  const [vehicleCapacity, setVehicleCapacity] = useState([])
  const [vehicleBody, setVehicleBody] = useState([])

  const formValues = {
    vehicleType: '',
    vehicleNumber: '',
    vehicleCap: '',
    driverName: '',
    driverNum: '',
    odometerKm: '',
    odometerImg: '',
    partyName: '',
    vehicleBody: '',
  }

  const { values, errors, handleChange, onFocus, enableSubmit, onBlur } = useForm(
    login,
    validate,
    formValues
  )

  function login() {
    // alert('No Errors CallBack Called')
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
      name: 'Driver Nam',
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

  useEffect(() => {
    //section for getting vehicle type from database
    VehicleTypeService.getVehicleTypes().then((res) => {
      setVehicleType(res.data.data)
    })

    //section for getting vehicle capacity from database
    VehicleCapacityService.getVehicleCapacity().then((res) => {
      setVehicleCapacity(res.data.data)
    })

    VehicleBodyTypeService.getVehicleBody().then((res) => {
      setVehicleBody(res.data.data)
    })
  }, [])





  return (
    <>
      <CContainer>
        <CCard>
          <CForm className="container p-3">
            <CRow className="">
              <CCol md={3}>
                <CFormLabel htmlFor="vehicleType">
                  Vehicle Type*{' '}
                  {errors.vehicleType && (
                    <span className="small text-danger">{errors.vehicleType}</span>
                  )}
                </CFormLabel>
                <CFormSelect
                  size="sm"
                  name="vehicleType"
                  id="vehicleType"
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onChange={handleChange}
                  value={values.vehicleType}
                  className={`${errors.vehicleType && 'is-invalid'}`}
                  aria-label="Small select example"
                >
                  <option value="0">Select ...</option>
                  {vehicleType.map(({ id, type }) => {
                    return (
                      <>
                        <option key={id} value={id}>
                          {type}
                        </option>
                      </>
                    )
                  })}
                </CFormSelect>
              </CCol>
              {(values.vehicleType == 2 || values.vehicleType == 1) && (
                <OwnAndContractSection
                  errors={errors}
                  onBlur={onBlur}
                  handleChange={handleChange}
                  values={values}
                />
              )}
              {values.vehicleType == 3 && (
                <HireSection
                  errors={errors}
                  onBlur={onBlur}
                  handleChange={handleChange}
                  values={values}
                />
              )}
              {values.vehicleType == 4 && (
                <PartySection
                  errors={errors}
                  onBlur={onBlur}
                  handleChange={handleChange}
                  values={values}
                />
              )}
              <CCol xs={12} md={3}>
                <CFormLabel htmlFor="remarks">Remarks</CFormLabel>
                <CFormTextarea name="remarks" id="remarks" rows="1"></CFormTextarea>
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
