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
import CustomTable from '../../components/customComponent/CustomTable'
const ParkingYardGate = () => {
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
                {/* <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">VA Number</CFormLabel>

<<<<<<< HEAD
                  <CFormInput size="sm" id="inputAddress"  readOnly />
                </CCol> */}

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="vNum">Vehicle Number</CFormLabel>

                  <CFormInput size="sm" id="vNum"  readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="tNum">Tripsheet Number</CFormLabel>

                  <CFormInput size="sm" id="tNum"  readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="vName">Vendor Name</CFormLabel>

                  <CFormInput size="sm" id="vName"  readOnly />
=======
                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol> */}

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Vehicle Number</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Tripsheet No</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Vendor Name</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                </CCol>
              {/* </CRow>
              <CRow className=""> */}
                <CCol xs={12} md={3}>
<<<<<<< HEAD
                  <CFormLabel htmlFor="vCode">Vendor Code</CFormLabel>

                  <CFormInput size="sm" id="vCode"  readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="dLtr">Diesel Liters</CFormLabel>

                  <CFormInput size="sm" id="dLtr"  readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="invoice">
                    Invoice Number*
                    {errors.invoice && (
                      <span className="help text-danger">{errors.invoice}</span>
                    )}
                  </CFormLabel>
                  <CFormInput
                    name="invoice"
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                    className={`${errors.invoice && 'is-invalid'}`}
                    size="sm"
                    id="invoice"
=======
                  <CFormLabel htmlFor="inputAddress">Vendor Code</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Diesel Liters</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">
                    Invoice No.*
                    {errors.OdometerKm && (
                      <span className="help text-danger">{errors.OdometerKm}</span>
                    )}
                  </CFormLabel>
                  <CFormInput
                    name="OdometerKm"
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                    className={`${errors.OdometerKm && 'is-invalid'}`}
                    size="sm"
                    id="inputAddress"
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                    placeholder="Km on Odometer"
                  />
                </CCol>
                <CCol xs={12} md={3}>
<<<<<<< HEAD
                  <CFormLabel htmlFor="invoiceCopy">
                    Invoice Copy*
                    {errors.invoiceCopy && (
                      <span className="help text-danger">{errors.invoiceCopy}</span>
=======
                  <CFormLabel htmlFor="formFileSm">
                    Invoice Copy*
                    {errors.odometerPhoto && (
                      <span className="help text-danger">{errors.odometerPhoto}</span>
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                    )}
                  </CFormLabel>
                  <CFormInput
                    type="file"
<<<<<<< HEAD
                    name="invoiceCopy"
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                    value={values.invoiceCopy}
                    className={`${errors.invoiceCopy && 'is-invalid'}`}
                    size="sm"
                    id="invoiceCopy"
=======
                    name="odometerPhoto"
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                    value={values.odometerPhoto}
                    className={`${errors.odometerPhoto && 'is-invalid'}`}
                    size="sm"
                    id="formFileSm"
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                  />
                </CCol>
              {/* </CRow>
              <CRow className=""> */}
                <CCol xs={12} md={3}>
<<<<<<< HEAD
                  <CFormLabel htmlFor="dLtr">
                    No. Of Liters*
                    {errors.nLtr && (
                      <span className="help text-danger">{errors.nLtr}</span>
                    )}
                  </CFormLabel>
                  <CFormInput
                    name="dLtr"
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                    className={`${errors.dLtr && 'is-invalid'}`}
                    size="sm"
                    id="dLtr"
=======
                  <CFormLabel htmlFor="inputAddress">
                    No. Of Liters*
                    {errors.OdometerKm && (
                      <span className="help text-danger">{errors.OdometerKm}</span>
                    )}
                  </CFormLabel>
                  <CFormInput
                    name="OdometerKm"
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                    className={`${errors.OdometerKm && 'is-invalid'}`}
                    size="sm"
                    id="inputAddress"
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                    placeholder="Km on Odometer"
                  />
                </CCol>
                <CCol xs={12} md={3}>
<<<<<<< HEAD
                  <CFormLabel htmlFor="rateLtr">
                    Rate Per Liter*
                    {errors.rateLtr && (
                      <span className="help text-danger">{errors.rateLtr}</span>
                    )}
                  </CFormLabel>
                  <CFormInput
                    name="rateLtr"
=======
                  <CFormLabel htmlFor="inputAddress">
                    Rate Per Liter*
                    {errors.OdometerKm && (
                      <span className="help text-danger">{errors.OdometerKm}</span>
                    )}
                  </CFormLabel>
                  <CFormInput
                    name="OdometerKm"
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                    className={`${errors.OdometerKm && 'is-invalid'}`}
                    size="sm"
<<<<<<< HEAD
                    id="rateLtr"
                    placeholder="Km on Odometer"
                  />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="dAmount">Amount</CFormLabel>
                  <CFormInput size="sm" id="dAmount"  readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="bunk">Bunk Reading</CFormLabel>
                  <CFormInput type="file" size="sm" id="bunk"  />
=======
                    id="inputAddress"
                    placeholder="Km on Odometer"
                  />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Amount</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Bunk Reading</CFormLabel>

                  <CFormInput type="file" size="sm" id="inputAddress" value="" />
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
=======

>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
              <CRow className="mt-3">
                <CCol>
                  <CButton
                    size="sm"
                    // disabled={enableSubmit}
                    color="primary"
                    className="text-white"
                    type="submit"
                  >
                    Previous
                  </CButton>
                </CCol>
                <CCol className="offset-md-6  d-md-flex justify-content-end" xs={12} sm={12} md={3}>
                  <CButton
                    size="sm"
                    color="warning"
                    // disabled={enableSubmit}
                    className="mx-3 text-white"
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

export default ParkingYardGate
