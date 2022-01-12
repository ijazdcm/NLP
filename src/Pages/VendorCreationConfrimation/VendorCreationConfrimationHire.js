import {
  CButton,
  CCard,
  CCardImage,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
  CFormTextarea,
} from '@coreui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useForm from 'src/Hooks/useForm'
<<<<<<< HEAD
import VendorRequesrValidation from 'src/Validations/VendorCreation/VendorRequestValidation'

const VendorCreationConfirmation = () => {
=======
import VendorRequestValidation from 'src/Validations/VendorCreation/VendorRequestValidation'
const VendorCreationApproval = () => {
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
  const formValues = {
    vehicleType: '',
    OdometerKm: '',
    odometerPhoto: '',
  }
  const [adharvisible, setAdharVisible] = useState(false)
  const [BankPassbook, setBankPassbook] = useState(false)
  const [PanCard, setPanCard] = useState(false)
<<<<<<< HEAD

=======
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
  const [Licence, setLicence] = useState(false)
  const [RcFront, setRcFront] = useState(false)
  const [RcBank, setRcBank] = useState(false)
  const [Insurance, setInsurance] = useState(false)
  const [TransporterShedSheet, setTransporterShedSheet] = useState(false)
  const [TDSFormFront, setTDSFormFront] = useState(false)
  const [TDSFormBack, setTDSFormBack] = useState(false)
<<<<<<< HEAD
  const [pandel, setPandel] = useState(false)
  const [licensedel, setLicensedel] = useState(false)
  const [rccopybackdel, setRccopybackdel] = useState(false)
  const [rccopyfrontdel, setRccopyfrontdel] = useState(false)
  const [adhardel, setAdhardel] = useState(false)
  const [passbookdel, setPassbookdel] = useState(false)
  const [tssdel, setTssdel] = useState(false)
  const [insurencedel, setInsurencedel] = useState(false)
  const [tdsfrontdel, setTdsfrontdel] = useState(false)
  const [tdsbackdel, setTdsbackdel] = useState(false)
  const { values, errors, handleChange, onFocus, handleSubmit, enableSubmit, onBlur } = useForm(
    login,
    VendorRequesrValidation,
    formValues
  )

  // function changeBackground(e) {
  //   e.target.style.color = 'red'
  // }
  // function changeBackground1(e) {
  //   e.target.style.color = '#4d3227'
  // }

=======
  const { values, errors, handleChange, onFocus, handleSubmit, enableSubmit, onBlur } = useForm(
    login,
    VendorRequestValidation,
    formValues
  )

>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
  function login() {
    alert('No Errors CallBack Called')
  }
  return (
    <>
      <CCard>
        <CForm className="container p-3" onSubmit={handleSubmit}>
          {/*Row One ------------------------- */}
          <CRow className="">
            <CCol xs={12} md={3}>
<<<<<<< HEAD
              <CFormLabel htmlFor="shedName">
                Shed Name
                {errors.shedName && (
                  <span className="help text-danger">{errors.shedName}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="shedName"  readOnly />
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="ownerName">
=======
              <CFormLabel htmlFor="inputAddress">
                Shed Name
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="inputAddress" value="" readOnly />
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="inputAddress">
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                Owner Name
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
<<<<<<< HEAD
              <CFormInput size="sm" id="ownerName"  readOnly />
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="shedownerMob">
                Shed Mobile Number
                {errors.shedownerMob && (
                  <span className="help text-danger">{errors.shedownerMob}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="shedownerMob" readOnly />
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="shedownerWhatsapp">
                Shed Whatsapp Number
                {errors.shedownerWhatsapp && (
                  <span className="help text-danger">{errors.shedownerWhatsapp}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="shedownerWhatsapp" readOnly />
=======
              <CFormInput size="sm" id="inputAddress" value="" readOnly />
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="inputAddress">
                Shed Mobile Number
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="inputAddress" readOnly />
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="inputAddress">
                Shed Whatsapp Number
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="inputAddress" readOnly />
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
            </CCol>
          </CRow>
          {/* Row One------------------------- */}
          {/* Row Two------------------------- */}
          <CRow className="">
            <CCol xs={12} md={3}>
<<<<<<< HEAD
              <CFormLabel htmlFor="panCardattachment">
                PAN Card Attatchment
                {errors.panCardattachment && (
                  <span className="help text-danger">{errors.panCardattachment}</span>
=======
              <CFormLabel htmlFor="inputAddress">
                PAN Card Attatchment
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                )}
              </CFormLabel>
              <CButton
                // onClick={() => setAdharVisible(!adharvisible)}
                className="w-100 m-0"
                color="info"
                size="sm"
<<<<<<< HEAD
                id="panCardattachment"
=======
                id="inputAddress"
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
              >
                <span className="float-start" onClick={() => setAdharVisible(!adharvisible)}>
                  <i className="fa fa-eye" aria-hidden="true"></i> &nbsp;View
                </span>
<<<<<<< HEAD
                <span
                  className="float-end"
                  onClick={() => {
                    if (window.confirm('Are you sure to remove this file?')) {
                      setAdhardel(true)
                    }
                  }}
                >
=======
                <span className="float-end">
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
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
              <CFormLabel htmlFor="panCard">
                PAN Card Number*
                {errors.panCard && (
                  <span className="help text-danger">{errors.panCard}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="panCard"  readOnly/>
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="AadharCopy">
                Aadhar Card Copy
                {errors.AadharCopy && (
                  <span className="help text-danger">{errors.AadharCopy}</span>
=======
              <CFormLabel htmlFor="inputAddress">
                PAN Card Number*
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="inputAddress" value="" readOnly />
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="inputAddress">
                Aadhar Card Attachemnt
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                )}
              </CFormLabel>
              <CButton
                // onClick={() => setAdharVisible(!adharvisible)}
                className="w-100 m-0"
                color="info"
                size="sm"
<<<<<<< HEAD
                id="AadharCopy"
=======
                id="inputAddress"
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
              >
                <span className="float-start" onClick={() => setAdharVisible(!adharvisible)}>
                  <i className="fa fa-eye" aria-hidden="true"></i> &nbsp;View
                </span>
<<<<<<< HEAD
                <span
                  className="float-end"
                  onClick={() => {
                    if (window.confirm('Are you sure to remove this file?')) {
                      setAdhardel(true)
                    }
                  }}
                >
=======
                <span className="float-end">
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
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
              <CFormLabel htmlFor="aadharCard">
                Aadhar Card Number
                {errors.aadharCard && (
                  <span className="help text-danger">{errors.aadharCard}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="aadharCard"  readOnly/>
=======
              <CFormLabel htmlFor="inputAddress">
                Aadhar Card Number
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="inputAddress" value="" readOnly />
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
            </CCol>
          </CRow>
          {/* Row Two------------------------- */}
          {/* Row Three------------------------- */}
          <CRow className="">
            <CCol xs={12} md={3}>
<<<<<<< HEAD
              <CFormLabel htmlFor="license">
                License Copy
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.license}</span>
=======
              <CFormLabel htmlFor="inputAddress">
                License Copy
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                )}
              </CFormLabel>
              <CButton
                // onClick={() => setLicence(!PanCard)}
                className="w-100 m-0"
                color="info"
                size="sm"
<<<<<<< HEAD
                id="license"
=======
                id="inputAddress"
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
              >
                <span className="float-start" onClick={() => setLicence(!PanCard)}>
                  <i className="fa fa-eye" aria-hidden="true"></i> &nbsp;View
                </span>
<<<<<<< HEAD
                <span
                  className="float-end"
                  onClick={() => {
                    if (window.confirm('Are you sure to remove this file?')) {
                      setLicensedel(true)
                    }
                  }}
                >
=======
                <span className="float-end">
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </span>
              </CButton>
            </CCol>
            <CCol xs={12} md={3}>
<<<<<<< HEAD
              <CFormLabel htmlFor="rcFront">
                RC Copy -Front
                {errors.rcFront && (
                  <span className="help text-danger">{errors.rcFront}</span>
=======
              <CFormLabel htmlFor="inputAddress">
                RC Copy -Front
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                )}
              </CFormLabel>
              <CButton
                // onClick={() => setRcFront(!RcFront)}
                className="w-100 m-0"
                color="info"
                size="sm"
<<<<<<< HEAD
                id="rcFront"
=======
                id="inputAddress"
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
              >
                <span className="float-start" onClick={() => setRcFront(!RcFront)}>
                  <i className="fa fa-eye" aria-hidden="true"></i> &nbsp;View
                </span>
<<<<<<< HEAD
                <span
                  className="float-end"
                  onClick={() => {
                    if (window.confirm('Are you sure to remove this file?')) {
                      setRccopyfrontdel(true)
                    }
                  }}
                >
=======
                <span className="float-end">
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </span>
              </CButton>
            </CCol>
            <CCol xs={12} md={3}>
<<<<<<< HEAD
              <CFormLabel htmlFor="rcBack">
                RC Copy Back
                {errors.rcBack && (
                  <span className="help text-danger">{errors.rcBack}</span>
=======
              <CFormLabel htmlFor="inputAddress">
                RC Copy Back
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                )}
              </CFormLabel>
              <CButton
                // onClick={() => setRcBank(!RcBank)}
                className="w-100 m-0"
                color="info"
                size="sm"
<<<<<<< HEAD
                id="rcBack"
=======
                id="inputAddress"
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
              >
                <span className="float-start" onClick={() => setRcBank(!RcBank)}>
                  <i className="fa fa-eye" aria-hidden="true"></i> &nbsp;View
                </span>
<<<<<<< HEAD
                <span
                  className="float-end"
                  onClick={() => {
                    if (window.confirm('Are you sure to remove this file?')) {
                      setRccopybackdel(true)
                    }
                  }}
                >
=======
                <span className="float-end">
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </span>
              </CButton>
            </CCol>
            <CCol xs={12} md={3}>
<<<<<<< HEAD
              <CFormLabel htmlFor="insurance">
                Insurance Copy
                {errors.insurance && (
                  <span className="help text-danger">{errors.insurance}</span>
=======
              <CFormLabel htmlFor="inputAddress">
                Insurance Copy
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                )}
              </CFormLabel>
              <CButton
                // onClick={() => setInsurance(!Insurance)}
                className="w-100 m-0"
                color="info"
                size="sm"
<<<<<<< HEAD
                id="insurance"
=======
                id="inputAddress"
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
              >
                <span className="float-start" onClick={() => setInsurance(!Insurance)}>
                  <i className="fa fa-eye" aria-hidden="true"></i> &nbsp;View
                </span>
<<<<<<< HEAD
                <span
                  className="float-end"
                  onClick={() => {
                    if (window.confirm('Are you sure to remove this file?')) {
                      setInsurencedel(true)
                    }
                  }}
                >
=======
                <span className="float-end">
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </span>
              </CButton>
            </CCol>
          </CRow>
<<<<<<< HEAD
          {/* Row Four------------------------- */}
          <CRow className="">
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="transportShed">
                Transporter Shed Sheet
                {errors.transportShed && (
                  <span className="help text-danger">{errors.transportShed}</span>
=======
          {/* Row Three------------------------- */}
          {/* Row Four------------------------- */}
          <CRow className="">
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="inputAddress">
                Transporter Shed Sheet
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                )}
              </CFormLabel>
              <CButton
                // onClick={() => setTransporterShedSheet(!TransporterShedSheet)}
                className="w-100 m-0"
                color="info"
                size="sm"
<<<<<<< HEAD
                id="transportShed"
=======
                id="inputAddress"
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
              >
                <span
                  className="float-start"
                  onClick={() => setTransporterShedSheet(!TransporterShedSheet)}
                >
                  <i className="fa fa-eye" aria-hidden="true"></i> &nbsp;View
                </span>

<<<<<<< HEAD
                <span
                  className="float-end"
                  onClick={() => {
                    if (window.confirm('Are you sure to remove this file?')) {
                      setTssdel(true)
                    }
                  }}
                >
=======
                <span className="float-end">
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </span>
              </CButton>
            </CCol>
            <CCol xs={12} md={3}>
<<<<<<< HEAD
              <CFormLabel htmlFor="bankPass">
                Bank Pass Book
                {errors.bankPass && (
                  <span className="help text-danger">{errors.bankPass}</span>
=======
              <CFormLabel htmlFor="inputAddress">
                Bank Pass Book
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                )}
              </CFormLabel>
              <CButton
                // onClick={() => setTDSFormFront(!TDSFormFront)}
                className="w-100 m-0"
                color="info"
                size="sm"
<<<<<<< HEAD
                id="bankPass"
=======
                id="inputAddress"
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
              >
                <span className="float-start" onClick={() => setTDSFormFront(!TDSFormFront)}>
                  <i className="fa fa-eye" aria-hidden="true"></i> &nbsp;View
                </span>

<<<<<<< HEAD
                <span
                  className="float-end"
                  onClick={() => {
                    if (window.confirm('Are you sure to remove this file?')) {
                      setTdsfrontdel(true)
                    }
                  }}
                >
=======
                <span className="float-end">
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </span>
              </CButton>
            </CCol>
            <CCol xs={12} md={3}>
<<<<<<< HEAD
              <CFormLabel htmlFor="bankName">Bank Name</CFormLabel>
              <CFormInput type="text" name="bankName" size="sm" id="bankName" readOnly/>                 
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="bankBranch">Bank Branch</CFormLabel>
              <CFormInput type="text" name="bankBranch" size="sm" id="bankBranch" readOnly/>
=======
              <CFormLabel htmlFor="TransporterShedSheet">Bank Name</CFormLabel>
              <CFormInput type="Text" name="TransporterShedSheet" size="sm" id="" readOnly />
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="TransporterShedSheet">Bank Branch</CFormLabel>
              <CFormInput type="text" name="TransporterShedSheet" size="sm" id="" readOnly />
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
            </CCol>
          </CRow>
          {/* Row Four------------------------- */}
          {/* Row Five------------------------- */}
          <CRow className="">
            <CCol xs={12} md={3}>
<<<<<<< HEAD
              <CFormLabel htmlFor="ifscCode">Bank IFSC Code</CFormLabel>
              <CFormInput type="text" name="ifscCode" size="sm" id="ifscCode" readOnly/>
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="bankAccount">
                Bank Account Number*
                {errors.bankAccount && (
                  <span className="help text-danger">{errors.bankAccount}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="bankAccount"  readOnly/>
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="bankaccountholderName">
                Bank Account Holder Name*
                {errors.bankaccountholderName && (
                  <span className="help text-danger">{errors.bankaccountholderName}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="bankaccountholderName"  readOnly/>
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="Street">
                Street
                {errors.Street && (
                  <span className="help text-danger">{errors.Street}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="Street"  readOnly/>
=======
              <CFormLabel htmlFor="TransporterShedSheet">Bank IFSC Code</CFormLabel>
              <CFormInput type="text" name="TransporterShedSheet" size="sm" id="" readOnly />
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="inputAddress">
                Bank Account Number*
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="inputAddress" value="" readOnly />
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="inputAddress">
                Bank Account Holder Name*
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="inputAddress" value="" readOnly />
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="inputAddress">
                Street
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="inputAddress" value="" readOnly />
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
            </CCol>
          </CRow>
          {/* Row Five------------------------- */}
          {/* Row Six------------------------- */}
          <CRow className="">
            <CCol xs={12} md={3}>
<<<<<<< HEAD
              <CFormLabel htmlFor="Area">
                Area
                {errors.Area && (
                  <span className="help text-danger">{errors.Area}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="Area"  readOnly/>
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="City">
                City
                {errors.City && (
                  <span className="help text-danger">{errors.City}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="City"  readOnly/>
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="District">
                District
                {errors.District && (
                  <span className="help text-danger">{errors.District}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="District"  readOnly/>
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="State">
                State
                {errors.State && (
                  <span className="help text-danger">{errors.State}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="State"  readOnly/>
=======
              <CFormLabel htmlFor="inputAddress">
                Area
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="inputAddress" value="" readOnly />
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="inputAddress">
                City
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="inputAddress" value="" readOnly />
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="inputAddress">
                District
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="inputAddress" value="" readOnly />
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="inputAddress">
                State
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="inputAddress" value="" readOnly />
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
            </CCol>
          </CRow>
          {/* Row Six------------------------- */}
          {/* Row Seven------------------------- */}
          <CRow className="">
            <CCol xs={12} md={3}>
<<<<<<< HEAD
              <CFormLabel htmlFor="postalCode">
                Postal Code
                {errors.postalCode && (
                  <span className="help text-danger">{errors.postalCode}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="postalCode"  readOnly/>
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="Region">
                Region
                {errors.Region && (
                  <span className="help text-danger">{errors.Region}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="Region"  readOnly/>
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="TDSfront">
                TDS Declaration Form Front
                {errors.TDSfront && (
                  <span className="help text-danger">{errors.TDSfront}</span>
                )}
              </CFormLabel>
              <CButton
                // onClick={() => setTransporterShedSheet(!TransporterShedSheet)}
                className="w-100 m-0"
                color="info"
                size="sm"
                id="TDSfront"
              >
                <span
                  className="float-start"
                  onClick={() => setTransporterShedSheet(!TransporterShedSheet)}
                >
                  <i className="fa fa-eye" aria-hidden="true"></i> &nbsp;View
                </span>

                <span
                  className="float-end"
                  onClick={() => {
                    if (window.confirm('Are you sure to remove this file?')) {
                      setTssdel(true)
                    }
                  }}
                >
=======
              <CFormLabel htmlFor="inputAddress">
                Postal Code
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="inputAddress" value="" readOnly />
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="inputAddress">
                Region
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="inputAddress" value="" readOnly />
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="inputAddress">
                TDS Declaration Form Front
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CButton
                // onClick={() => setTDSFormFront(!TDSFormFront)}
                className="w-100 m-0"
                color="info"
                size="sm"
                id="inputAddress"
              >
                <span className="float-start" onClick={() => setTDSFormFront(!TDSFormFront)}>
                  <i className="fa fa-eye" aria-hidden="true"></i> &nbsp;View
                </span>

                <span className="float-end">
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </span>
              </CButton>
            </CCol>
            <CCol xs={12} md={3}>
<<<<<<< HEAD
              <CFormLabel htmlFor="TDSback">
                TDS Declaration Form Back
                {errors.TDSback && (
                  <span className="help text-danger">{errors.TDSback}</span>
                )}
              </CFormLabel>
              <CButton
                // onClick={() => setTransporterShedSheet(!TransporterShedSheet)}
                className="w-100 m-0"
                color="info"
                size="sm"
                id="TDSback"
              >
                <span
                  className="float-start"
                  onClick={() => setTransporterShedSheet(!TransporterShedSheet)}
                >
                  <i className="fa fa-eye" aria-hidden="true"></i> &nbsp;View
                </span>

                <span
                  className="float-end"
                  onClick={() => {
                    if (window.confirm('Are you sure to remove this file?')) {
                      setTssdel(true)
                    }
                  }}
                >
=======
              <CFormLabel htmlFor="inputAddress">
                TDS Declaration Form Back
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CButton
                // onClick={() => setTDSFormFront(!TDSFormFront)}
                className="w-100 m-0"
                color="info"
                size="sm"
                id="inputAddress"
              >
                <span className="float-start" onClick={() => setTDSFormFront(!TDSFormFront)}>
                  <i className="fa fa-eye" aria-hidden="true"></i> &nbsp;View
                </span>

                <span className="float-end">
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </span>
              </CButton>
            </CCol>
          </CRow>
          {/* Row Seven------------------------- */}

          {/* Row Eight------------------------- */}
          <CRow className="">
<<<<<<< HEAD
          <CCol xs={12} md={3}>
              <CFormLabel htmlFor="GSTreg">
                GST Registeration
                {errors.GSTreg && (
                  <span className="help text-danger">{errors.GSTreg}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="GSTreg"  readOnly/>
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="GST">
                GST Registration Number*
                {errors.GST && (
                  <span className="help text-danger">{errors.GST}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="GST"  readOnly/>
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="GSTtax">
                GST Tax Code
                {errors.GSTtax && (
                  <span className="help text-danger">{errors.GSTtax}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="GSTtax"  readOnly />
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="Payment">
                Payment Terms 3Days
                {errors.Payment && (
                  <span className="help text-danger">{errors.Payment}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="Payment"  readOnly />
=======
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="inputAddress">
                GST Registeration
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="inputAddress" value="" readOnly />
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="inputAddress">
                GST Registration Number*
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="inputAddress" value="" readOnly />
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="inputAddress">
                GST Tax Code
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="inputAddress" value="" readOnly />
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="inputAddress">
                Payment Terms 3Days
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="inputAddress" value="" readOnly />
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
            </CCol>
          </CRow>
          {/* Row Eight------------------------- */}
          {/* Row Nine------------------------- */}
          <CRow className="">
            <CCol xs={12} md={3}>
<<<<<<< HEAD
              <CFormLabel htmlFor="remarks">
                Remarks
                {errors.remarks && (
                  <span className="help text-danger">{errors.remarks}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="remarks"  readOnly />
=======
              <CFormLabel htmlFor="inputAddress">
                Remarks
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="inputAddress" value="" readOnly />
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
            </CCol>
          </CRow>
          {/* Row Nine------------------------- */}
          <CRow className="mb-md-1">
            <CCol className="" xs={12} sm={12} md={3}>
              <CButton size="sm" color="primary" className="text-white" type="button">
                <Link className="text-white" to="/VendorCreationHome">
                  Previous
                </Link>
              </CButton>
            </CCol>
            <CCol className="offset-md-6 d-md-flex justify-content-end" xs={12} sm={12} md={3}>
<<<<<<< HEAD
            <CButton size="sm" color="warning" className="mx-3 px-3 text-white" type="submit">
            Approved
              </CButton>
              <CButton size="sm" color="warning" className="mx-3 px-3 text-white" type="submit">
              Reject
=======
              <CButton size="sm" color="warning" className="mx-3 px-3 text-white" type="submit">
                Approved
              </CButton>
              <CButton size="sm" color="warning" className="mx-3 px-3 text-white" type="submit">
                Reject
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
              </CButton>
            </CCol>
          </CRow>
          {/* Row Eight------------------------- */}
        </CForm>
      </CCard>
<<<<<<< HEAD

      {/* Modal Area  */}

      <CModal visible={adharvisible} onClose={() => setAdharVisible(false)}>
        <CModalHeader>
          <CModalTitle>Aadhar Card</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CCardImage
            orientation="top"
            src="https://dmv.ny.gov/sites/default/files/resize/styles/panopoly_image_original/public/old_dl_for_sample_docs-653x325.png?itok=a8hCofjR"
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setAdharVisible(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>

      {/* *********************************************************** */}

      <CModal visible={BankPassbook} onClose={() => setBankPassbook(false)}>
        <CModalHeader>
          <CModalTitle>Bank Passbook</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CCardImage
            orientation="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8_NeahwoKut3zeWbVAhUWS59XaqVah0mYMotQ08scOqWrXWsZy39GGRedOzSV1Ao8qk&usqp=CAU"
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setAdharVisible(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>

      {/* *********************************************************** */}

      <CModal visible={TDSFormBack} onClose={() => setTDSFormBack(false)}>
        <CModalHeader>
          <CModalTitle>TDS Declaration Form Back</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CCardImage
            orientation="top"
            src=""
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setTDSFormBack(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>

      {/* *********************************************************** */}

      <CModal visible={PanCard} onClose={() => setPanCard(false)}>
        <CModalHeader>
          <CModalTitle>Pan Card</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CCardImage
            orientation="top"
            src=""
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setPanCard(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>

      {/* *********************************************************** */}

      <CModal visible={Licence} onClose={() => setLicence(false)}>
        <CModalHeader>
          <CModalTitle>Pan Card</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CCardImage
            orientation="top"
            src=""
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setLicence(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>

      {/* *********************************************************** */}

      <CModal visible={RcFront} onClose={() => setRcFront(false)}>
        <CModalHeader>
          <CModalTitle>Pan Card</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CCardImage
            orientation="top"
            src=""
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setRcFront(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>

      {/* *********************************************************** */}

      <CModal visible={Insurance} onClose={() => setInsurance(false)}>
        <CModalHeader>
          <CModalTitle>Insurance</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CCardImage
            orientation="top"
            src=""
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setInsurance(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>

      {/* *********************************************************** */}

      <CModal visible={TransporterShedSheet} onClose={() => setTransporterShedSheet(false)}>
        <CModalHeader>
          <CModalTitle>Transporter Shed Sheet</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CCardImage
            orientation="top"
            src=""
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setTransporterShedSheet(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>

      {/* *********************************************************** */}

      <CModal visible={RcBank} onClose={() => setRcBank(false)}>
        <CModalHeader>
          <CModalTitle>Rc Copy Back</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CCardImage
            orientation="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8_NeahwoKut3zeWbVAhUWS59XaqVah0mYMotQ08scOqWrXWsZy39GGRedOzSV1Ao8qk&usqp=CAU"
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setRcBank(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>

      {/* *********************************************************** */}

      <CModal visible={TDSFormFront} onClose={() => setTDSFormFront(false)}>
        <CModalHeader>
          <CModalTitle>TDS Declaration Fomr</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CCardImage
            orientation="top"
            src=""
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setTDSFormFront(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>

      {/* *********************************************************** */}
      {/* *********************************************************** */}
      {/* *********************************************************** */}

      {/* Modal Area */}
=======
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
    </>
  )
}

<<<<<<< HEAD
export default VendorCreationConfirmation
=======
export default VendorCreationApproval
>>>>>>> bdc8ecd054b9a1532c72a49db280bd4faa8dde0a
