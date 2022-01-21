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
import { Link } from 'react-router-dom'
import useForm from 'src/Hooks/useForm'
import validate from 'src/Utils/Validation'
import CustomTable from '../../components/customComponent/CustomTable'

const VehicleMaintainence = () => {
  const [outSide, setoutSide] = useState(false)
  const formValues = {
    maintenenceType: '',
    maintenenceBy: '',
    workOrder: '',
    vendorName: '',
    MaintenanceStart: '',
    MaintenanceEnd: '',
  }

  const { values, errors, handleChange, onFocus, handleSubmit, enableSubmit, onBlur } = useForm(
    login,
    validate,
    formValues
  )

  function login() {
    alert('No Errors CallBack Called')
  }

  // document.title=('Vehicle Maintainence');

  return (
    <>
      <CCard>
        <CTabContent>
          <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={true}>
            <CForm className="container p-3" onSubmit={handleSubmit}>
              <CRow>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="vNum">Vehicle No*</CFormLabel>

                  <CFormInput size="sm" id="vNum" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="dName">
                    Driver Name*
                    {errors.dName && <span className="small text-danger">{errors.dName}</span>}
                  </CFormLabel>
                  <CFormSelect
                    size="sm"
                    id="dName"
                    className={`${errors.dName && 'is-invalid'}`}
                    name="dName"
                    value={values.dName || ''}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                  >
                    <option value="" hidden selected>
                      Select ...
                    </option>
                    <option value="1" onClick={() => setoutSide(false)}>
                      Kumar
                    </option>
                    <option value="2" onClick={() => setoutSide(true)}>
                      Raj
                    </option>
                  </CFormSelect>
                </CCol>
                <CCol md={3}>
                  <CFormLabel htmlFor="maintenenceType">
                    Maintenance Type *{' '}
                    {errors.maintenenceType && (
                      <span className="small text-danger">{errors.maintenenceType}</span>
                    )}
                  </CFormLabel>

                  <CFormSelect
                    size="sm"
                    id="maintenenceType"
                    className={`${errors.maintenenceType && 'is-invalid'}`}
                    name="maintenenceType"
                    value={values.maintenenceType || ''}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                  >
                    <option value="" hidden selected>
                      Select Maintenance Type
                    </option>
                    <option value="scheduled">Scheduled Maintenance</option>
                    <option value="breakDown">Break Down Maintnenence</option>
                  </CFormSelect>
                </CCol>
                <CCol className="mb-3" md={3}>
                  <CFormLabel htmlFor="maintenenceBy">
                    Maintenance By *
                    {errors.maintenenceBy && (
                      <span className="small text-danger">{errors.maintenenceBy}</span>
                    )}
                  </CFormLabel>
                  <CFormSelect
                    size="sm"
                    id="maintenenceBy"
                    className={`${errors.maintenenceBy && 'is-invalid'}`}
                    name="maintenenceBy"
                    value={values.maintenenceBy || ''}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                  >
                    <option value="" hidden selected>
                      Select Maintenance By
                    </option>
                    <option value="inHouse" onClick={() => setoutSide(false)}>
                      Inhouse
                    </option>
                    <option value="outSide" onClick={() => setoutSide(true)}>
                      Outside
                    </option>
                  </CFormSelect>
                </CCol>
                <CCol className="mb-3" md={3}>
                  <CFormLabel htmlFor="workOrder">
                    Work Order *
                    {errors.workOrder && (
                      <span className="small text-danger">{errors.workOrder}</span>
                    )}
                  </CFormLabel>
                  <CFormSelect
                    size="sm"
                    id="workOrder"
                    className={`${errors.workOrder && 'is-invalid'}`}
                    name="workOrder"
                    value={values.workOrder || ''}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                  >
                    <option value="" hidden selected>
                      Select...
                    </option>
                    <option value="inHouse" onClick={() => setoutSide(false)}>
                      Select-LP
                    </option>
                  </CFormSelect>
                </CCol>
                <CCol className="mb-3" md={3}>
                  <CFormLabel htmlFor="vendorName">
                    Vendor Name *
                    {errors.vendorName && (
                      <span className="small text-danger">{errors.vendorName}</span>
                    )}
                  </CFormLabel>
                  <CFormSelect
                    size="sm"
                    id="vendorName"
                    className={`${errors.vendorName && 'is-invalid'}`}
                    name="vendorName"
                    value={values.vendorName || ''}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                  >
                    <option value="" hidden selected>
                      Select...
                    </option>
                    <option onClick={() => setoutSide(false)}>Select-LP</option>
                  </CFormSelect>
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="MaintenanceStart">
                    Maintainence Start Date & Time*
                    {errors.MaintenanceStart && (
                      <span className="small text-danger">{errors.MaintenanceStart}</span>
                    )}
                  </CFormLabel>

                  <CFormInput
                    size="sm"
                    id="MaintenanceStart"
                    className={`${errors.MaintenanceStart && 'is-invalid'}`}
                    name="MaintenanceStart"
                    value={values.MaintenanceStart || ''}
                    type="datetime-local"
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                  />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="MaintenanceEnd">
                    Maintainence End Date & Time*
                    {errors.MaintenanceEnd && (
                      <span className="small text-danger">{errors.MaintenanceEnd}</span>
                    )}
                  </CFormLabel>

                  <CFormInput
                    size="sm"
                    id="MaintenanceEnd"
                    className={`${errors.MaintenanceEnd && 'is-invalid'}`}
                    name="MaintenanceEnd"
                    value={values.MaintenanceEnd || ''}
                    type="datetime-local"
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

              <CRow>
                <CCol>
                  <CButton
                    md={6}
                    size="sm"
                    color="primary"
                    disabled=""
                    className="text-white"
                    type="submit"
                  >
                    Previous
                  </CButton>
                </CCol>

                <CCol
                  className=""
                  xs={12}
                  sm={12}
                  md={5}
                  style={{ display: 'flex-sm', justifyContent: 'right' }}
                >
                  <CButton
                    size="sm"
                    color="warning"
                    disabled=""
                    className="mx-3 text-white"
                    type="button"
                    hidden={outSide}
                  >
                    Force End
                  </CButton>
                  <CButton
                    size="sm"
                    color="warning"
                    disabled=""
                    className="mx-3 text-white"
                    type="button"
                    hidden={outSide}
                  >
                    Maintenence End
                  </CButton>
                  <CButton
                    size="sm"
                    color="warning"
                    disabled=""
                    className="mx-3 text-white"
                    type="button"
                    hidden={outSide}
                  >
                    Maintenence Start
                  </CButton>

                  <CButton
                    size="sm"
                    color="warning"
                    disabled=""
                    className="mx-3 text-white"
                    type="button"
                    hidden={!outSide}
                  >
                    Gate Out
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

export default VehicleMaintainence
