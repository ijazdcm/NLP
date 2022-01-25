import {
  CButton,
  CCard,
  CContainer,
  CCol,
  CRow,
  CModal,
  CFormInput,
  CFormLabel,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CCardImage,
  CModalFooter,
} from '@coreui/react'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CustomTable from 'src/components/customComponent/CustomTable'
import VehicleCapacityApi from '../../../services/SubMaster/VehicleCapacityApi'
const VehicleCapacityTable = () => {
  const [VehicleCapacity, setVehicleCapacity] = useState(false)
  const [rowData, setRowData] = useState([])
  const columns = [
    {
      name: 'S.No',
      selector: (row) => row.sno,
      sortable: true,
      center: true,
    },
    // {
    //   name: 'Creation Date',
    //   selector: (row) => row.Creation_Date,
    //   sortable: true,
    //   center: true,
    // },

    {
      name: 'Vehicle Capacity',
      selector: (row) => row.Vehicle_Capacity,
      left: true,
    },
    // {
    //   name: 'Status',
    //   selector: (row) => row.Status,
    //   center: true,
    // },
    {
      name: 'Action',
      selector: (row) => row.Action,
      center: true,
    },
  ]

  useEffect(() => {
    VehicleCapacityApi.getVehicleCapacity().then((response) => {
      let resData = response.data.data

      console.log(resData)

      let rowDataList = []

      resData.map((data, index) => {
        rowDataList.push({
          sno: index + 1,
          Vehicle_Capacity: data.capacity,
          Action: (
            <span>
              <CButton id={data.id} className="btn btn-danger" color="">
                <i className="fa fa-trash" aria-hidden="true"></i>
              </CButton>
              <CButton id={data.id} className="btn btn-dark" color="white">
                <i className="fa fa-edit" aria-hidden="true"></i>
              </CButton>
            </span>
          ),
        })
      })

      setRowData(rowDataList)
    })
  }, [])

  return (
    <>
      <CContainer className="mt-2">
        <CRow className="mt-3">
          <CCol
            onClick={() => setVehicleCapacity(!VehicleCapacity)}
            className="offset-md-6"
            xs={15}
            sm={15}
            md={6}
            style={{ display: 'flex', justifyContent: 'end' }}
          >
            <CButton
              size="md"
              color="warning"
              // disabled={enableSubmit}
              className="px-3 text-white"
              type="submit"
            >
              <span className="float-start">
                <i className="" aria-hidden="true"></i> &nbsp;New
              </span>
            </CButton>
          </CCol>
        </CRow>
        <CCard className="mt-1">
          <CustomTable columns={columns} data={rowData || ''} />
        </CCard>
      </CContainer>

      {/* Modal Section */}
      <CModal visible={VehicleCapacity} onClose={() => setVehicleCapacity(false)}>
        <CModalHeader>
          <CModalTitle>Division</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow>
            <CCol>
              <CFormLabel htmlFor="inputAddress">Division</CFormLabel>
              <CFormInput size="sm" id="inputAddress" />
            </CCol>
          </CRow>
        </CModalBody>
        <CModalFooter>
          <CButton color="primary" type="submit">
            Save
          </CButton>
        </CModalFooter>
      </CModal>
      {/* Modal Section */}
    </>
  )
}

export default VehicleCapacityTable
