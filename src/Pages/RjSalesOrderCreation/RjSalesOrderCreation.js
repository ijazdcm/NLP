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
              <CRow>
                <CCol xs={12} md={3}>
<<<<<<< HEAD
                  <CFormLabel htmlFor="vNum">Vehicle Number*</CFormLabel>
                  <CFormSelect size="sm" aria-label="Small select example" id='vNum'>
=======
                  <CFormLabel htmlFor="inputAddress">Vehicle Number*</CFormLabel>
                  <CFormSelect size="sm" aria-label="Small select example">
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                    <option hidden>Select...</option>

                    <option value="1">TN45AT8614</option>

                    <option value="2">TN45AT8612</option>

                    <option value="3">TN45AT9687</option>
                  </CFormSelect>
                </CCol>

                <CCol xs={12} md={3}>
<<<<<<< HEAD
                  <CFormLabel htmlFor="tNum">Tripsheet Number</CFormLabel>

                  <CFormInput size="sm" id="tNum"  readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="Payment">
=======
                  <CFormLabel htmlFor="inputAddress">Tripsheet Number</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                    Payment Terms
                    {errors.Payment && <span className="help text-danger">{errors.Payment}</span>}
                  </CFormLabel>
                  <CFormSelect
                    size="sm"
                    name="Payment"
<<<<<<< HEAD
                    id='Payment'
=======
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                    value={values.Payment}
                    className={`${errors.Payment && 'is-invalid'}`}
                    aria-label="Small select example"
                  >
<<<<<<< HEAD
                    <option  hidden>
=======
                    <option value="" hidden>
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                      Select...
                    </option>
                    <option value="1">Shed</option>
                    <option value="2">To pay</option>
                  </CFormSelect>
                </CCol>
                {values.Payment == 2 && (
                  <CCol xs={12} md={3}>
<<<<<<< HEAD
                    <CFormLabel htmlFor="cName">To Pay Customer Name</CFormLabel>
                    <CFormInput size="sm" id="cName"  />
=======
                    <CFormLabel htmlFor="inputAddress">To Pay Customer Name</CFormLabel>
                    <CFormInput size="sm" id="inputAddress" value="" />
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                  </CCol>

                )}
                {values.Payment == 2 && (
                  <CCol xs={12} md={3}>
<<<<<<< HEAD
                    <CFormLabel htmlFor="cMob">Customer Mobile Number</CFormLabel>
                    <CFormInput size="sm" id="cMob"  />
=======
                    <CFormLabel htmlFor="inputAddress">Customer Mobile Number</CFormLabel>
                    <CFormInput size="sm" id="inputAddress" value="" />
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                  </CCol>
                )}
                {values.Payment == 2 && (
                  <CCol xs={12} md={3}>
<<<<<<< HEAD
                    <CFormLabel htmlFor="cPAN">Customer PAN Number</CFormLabel>
                    <CFormInput size="sm" id="cPAN"  />
                  </CCol>
                )}
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="sPAN">Shed PAN Number</CFormLabel>
                  <CFormInput size="sm" id="sPAN"  />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="sAadhar">Shed Aadhar Number*</CFormLabel>
                  <CFormInput size="sm" id="sAadhar"  />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="shedName">Shed Name*</CFormLabel>

                  <CFormSelect size="sm" id='shedName' aria-label="Small select example">
=======
                    <CFormLabel htmlFor="inputAddress">Customer PAN Number</CFormLabel>
                    <CFormInput size="sm" id="inputAddress" value="" />
                  </CCol>
                )}
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Shed PAN Number</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Shed Aadhar Number*</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Shed Name*</CFormLabel>

                  <CFormSelect size="sm" aria-label="Small select example">
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                    <option hidden>Select...</option>

                    <option value="1">North</option>

                    <option value="2">East</option>

                    <option value="3">South</option>
                  </CFormSelect>
                </CCol>
                <CCol xs={12} md={3}>
<<<<<<< HEAD
                  <CFormLabel htmlFor="mType">Material Type*</CFormLabel>
                  <CFormSelect size="sm" id='mType' aria-label="Small select example">
=======
                  <CFormLabel htmlFor="inputAddress">Material Type*</CFormLabel>
                  <CFormSelect size="sm" aria-label="Small select example">
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                    <option hidden>Select...</option>

                    <option value="1">Vegetable</option>

                    <option value="2">Grocery</option>

                    <option value="3">Engg. Spares</option>
                  </CFormSelect>
                </CCol>

                <CCol xs={12} md={3}>
<<<<<<< HEAD
                  <CFormLabel htmlFor="Mdescription">Material Description*</CFormLabel>
                  <CFormInput size="sm" id="Mdescription"  />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="HSNcode">HSN Code</CFormLabel>

                  <CFormInput size="sm" id="HSNcode"  readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="uom">UOM*</CFormLabel>
                  <CFormSelect size="sm" id='uom' aria-label="Small select example">
=======
                  <CFormLabel htmlFor="inputAddress">Material Description*</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">HSN Code</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">UOM*</CFormLabel>
                  <CFormSelect size="sm" aria-label="Small select example">
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                    <option hidden>Select...</option>

                    <option value="1">select</option>

                    <option value="2">select Lp</option>
                  </CFormSelect>
                </CCol>

                <CCol xs={12} md={3}>
<<<<<<< HEAD
                  <CFormLabel htmlFor="ordQty">
                    Order Qty Tons*
                    {errors.ordQty && (
                      <span className="help text-danger">{errors.ordQty}</span>
=======
                  <CFormLabel htmlFor="inputAddress">
                    Order Qty. Tons*
                    {errors.OdometerKm && (
                      <span className="help text-danger">{errors.OdometerKm}</span>
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                    )}
                  </CFormLabel>
                  <CFormInput
                    name="Order Qty"
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                    className={`${errors.OdometerKm && 'is-invalid'}`}
                    size="sm"
<<<<<<< HEAD
                    id="ordQty"
=======
                    id="inputAddress"
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                    placeholder=""
                  />
                </CCol>

                <CCol xs={12} md={3}>
<<<<<<< HEAD
                  <CFormLabel htmlFor="frightincome">
                    Freight Income*
                    {errors.frightincome && (
                      <span className="help text-danger">{errors.frightincome}</span>
                    )}
                  </CFormLabel>
                  <CFormInput
                    name="frightincome"
=======
                  <CFormLabel htmlFor="inputAddress">
                    Freight Income*
                    {errors.OdometerKm && (
                      <span className="help text-danger">{errors.OdometerKm}</span>
                    )}
                  </CFormLabel>
                  <CFormInput
                    name="Order Qty"
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                    className={`${errors.OdometerKm && 'is-invalid'}`}
                    size="sm"
<<<<<<< HEAD
                    id="frightincome"
=======
                    id="inputAddress"
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                    placeholder=""
                  />
                </CCol>

                <CCol xs={12} md={3}>
                  {/* <CFormLabel htmlFor="inputAddress">Advance Amount*</CFormLabel> */}
<<<<<<< HEAD
                  <CFormLabel htmlFor="advanceAmount">Advance Amount*</CFormLabel> {/* Changed */}
                  <CFormInput size="sm" id="advanceAmount"  />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="lastDelivery">Last Delivery Point*</CFormLabel>
                  <CFormSelect size="sm" id='lastDelivery' aria-label="Small select example">
=======
                  <CFormLabel htmlFor="inputAddress">Advance Amount*</CFormLabel> {/* Changed */}
                  <CFormInput size="sm" id="inputAddress" value="" />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Last Delivery Point*</CFormLabel>
                  <CFormSelect size="sm" aria-label="Small select example">
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                    <option hidden>Select...</option>

                    <option value="1">select</option>

                    <option value="2">select Lp</option>
                  </CFormSelect>
                </CCol>
                <CCol xs={12} md={3}>
<<<<<<< HEAD
                  <CFormLabel htmlFor="emptyLoad">Empty Load KM*</CFormLabel>

                  <CFormInput size="sm" id="emptyLoad"  />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="loadPoint">Loading Point*</CFormLabel>
                  <CFormInput size="sm" id="loadPoint"  />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="unloading">Unloading Point*</CFormLabel>
                  <CFormSelect size="sm" id='unloading' aria-label="Small select example">
=======
                  <CFormLabel htmlFor="inputAddress">Empty Load KM*</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="" />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Loading Point*</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Unloading Point*</CFormLabel>
                  <CFormSelect size="sm" aria-label="Small select example">
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                    <option hidden>Select...</option>

                    <option value="1">select</option>

                    <option value="2">select Lp</option>
                  </CFormSelect>
                </CCol>
                <CCol xs={12} md={3}>
<<<<<<< HEAD
                  <CFormLabel htmlFor="emptyUnload">Empty Km After Unload*</CFormLabel>

                  <CFormInput size="sm" id="emptyUnload"  />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="expectDelivery">
                    Expected Delivery Date & Time*
                    {errors.expectDelivery && <span className="help text-danger">{errors.expectDelivery}</span>}
                  </CFormLabel>
                  <CFormInput size="sm" type="datetime-local" id="expectDelivery" />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="expectReturn">
                    Expected Return Date & Time*
                    {errors.expectReturn && <span className="help text-danger">{errors.expectReturn}</span>}
                  </CFormLabel>
                  <CFormInput size="sm" type="datetime-local" id="expectReturn" />
=======
                  <CFormLabel htmlFor="inputAddress">Empty Km After Unload*</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="" />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">
                    Expected Delivery Date & Time*
                    {errors.AdvancePaymentMode && <span className="help text-danger">{errors.AdvancePaymentMode}</span>}
                  </CFormLabel>
                  <CFormInput size="sm" type="datetime-local" id="inputAddress" />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">
                    Expected Return Date & Time*
                    {errors.AdvancePaymentMode && <span className="help text-danger">{errors.AdvancePaymentMode}</span>}
                  </CFormLabel>
                  <CFormInput size="sm" type="datetime-local" id="inputAddress" />
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="remarks">Remarks</CFormLabel>
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

              <CRow className="mt-3">
                <CCol className="" xs={12} sm={9} md={3}>
                  <CButton
                    size="sm"
                    color="primary"
                    // disabled={enableSubmit}
                    className="text-white"
                    type="submit"
                  >
                    Previous
                  </CButton>
                </CCol>

                <CCol
                  className="offset-md-6"
                  xs={12}
                  sm={9}
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
export default ParkingYardGate
