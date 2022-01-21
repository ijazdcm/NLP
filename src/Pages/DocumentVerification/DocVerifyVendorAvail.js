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
  CFormCheck,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CFormTextarea,
} from '@coreui/react'
import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import useForm from 'src/Hooks/useForm.js'
import validate from 'src/Utils/Validation'
import CustomTable from '../../components/customComponent/CustomTable'

const DocVerifyVendorAvail = () => {
  const formValues = {
    panNum: '',
    license: '',
    rcFront: '',
    rcFront: '',
    rcBack: '',
    insurance: '',
    insuranceValid: '',
    TDSfront: '',
    TDSback: '',
    transportShed: '',
    shedName: '',
    ownershipTrans: '',
    shedownerMob: '',
    shedownerWhatsapp: '',
    freigthRate: '',
  }

  const { values, errors, handleChange, onFocus, handleSubmit, enableSubmit, onBlur } = useForm(
    login,
    validate,
    formValues
  )

  function login() {
    alert('No Errors CallBack Called')
  }

  const [visible, setVisible] = useState(false)

  // document.title=('Vehicle Inspection');
  return (
    <>
      <CCard>
        <CTabContent className="m-0 p-0">
          <CNav variant="pills" layout="justified">
            <CNavItem>
              <CNavLink href="#" active>
                <h5>Hire Vehicle (Vendor Available)</h5>
              </CNavLink>
            </CNavItem>
          </CNav>
          <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={true}>
            <CForm className="container p-3" onSubmit={handleSubmit}>
              <CRow className="">
                <CCol md={3}>
                  <CFormLabel htmlFor="vType">Vehicle Type</CFormLabel>
                  <CFormInput name="vType" size="sm" id="vType" value="Hire" readOnly />
                </CCol>

                <CCol md={3}>
                  <CFormLabel htmlFor="vNum">Vehicle Number</CFormLabel>
                  <CFormInput name="vNum" size="sm" id="vNum" value="TNAD123465" readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="vCap">Vehicle Capacity In MTS</CFormLabel>
                  <CFormInput name="vCap" size="sm" id="vCap" value="10" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="dName">Driver Name</CFormLabel>
                  <CFormInput name="dName" size="sm" id="dName" value="Naga Raj" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="dNum">Driver Contact Number</CFormLabel>
                  <CFormInput name="dNum" size="sm" id="dNum" value="9135362456" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="gateInDateTime">Gate-In Date & Time</CFormLabel>
                  <CFormInput
                    name="gateInDateTime"
                    size="sm"
                    id="gateInDateTime"
                    value="21 Sep 2021 12:00:00 PM"
                    readOnly
                  />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inspectionDateTime">Inspection Date & Time</CFormLabel>
                  <CFormInput
                    name="inspectionDateTime"
                    size="sm"
                    id="inspectionDateTime"
                    value="21 Sep 2021 12:00:00 PM"
                    readOnly
                  />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="panNum">
                    PAN Card Number*{' '}
                    {errors.panNum && <span className="small text-danger">{errors.panNum}</span>}
                  </CFormLabel>
                  <CFormSelect
                    size="sm"
                    id="panNum"
                    className={`${errors.panNum && 'is-invalid'}`}
                    name="panNum"
                    value={values.panNum || ''}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                  >
                    <option hidden>Select...</option>
                    <option value="0">ABCD123F</option>
                    <option value="1">QWER789D</option>
                    <option value="2">ASAS3DFS</option>
                  </CFormSelect>
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="VCode">Vendor Code</CFormLabel>
                  <CFormInput name="VCode" size="sm" id="VCode" value="20009" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="ownerName">Owner Name</CFormLabel>
                  <CFormInput
                    name="ownerName"
                    size="sm"
                    id="ownerName"
                    value="Mari Muthu"
                    readOnly
                  />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="ownerMob">Owner Mobile Number</CFormLabel>
                  <CFormInput name="ownerMob" size="sm" id="ownerMob" value="9132657894" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="aadhar">Aadhar Number</CFormLabel>
                  <CFormInput name="aadhar" size="sm" id="aadhar" value="506980963214" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="bankAcc">Bank Account Number</CFormLabel>
                  <CFormInput
                    name="bankAcc"
                    size="sm"
                    id="bankAcc"
                    value="SBI506980963214"
                    readOnly
                  />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="license">
                    License Copy*{' '}
                    {errors.license && <span className="small text-danger">{errors.license}</span>}
                  </CFormLabel>
                  <CFormInput
                    type="file"
                    size="sm"
                    id="license"
                    className={`${errors.license && 'is-invalid'}`}
                    name="license"
                    value={values.license || ''}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                  />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="rcFront">
                    RC Copy - Front*{' '}
                    {errors.rcFront && <span className="small text-danger">{errors.rcFront}</span>}
                  </CFormLabel>
                  <CFormInput
                    type="file"
                    size="sm"
                    id="rcFront"
                    className={`${errors.rcFront && 'is-invalid'}`}
                    name="rcFront"
                    value={values.rcFront || ''}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                  />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="rcBack">
                    RC Copy - Back*{' '}
                    {errors.rcBack && <span className="small text-danger">{errors.rcBack}</span>}
                  </CFormLabel>
                  <CFormInput
                    type="file"
                    size="sm"
                    id="rcBack"
                    className={`${errors.rcBack && 'is-invalid'}`}
                    name="rcBack"
                    value={values.rcBack || ''}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                  />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="insurance">
                    Insurance Copy*{' '}
                    {errors.insurance && (
                      <span className="small text-danger">{errors.insurance}</span>
                    )}
                  </CFormLabel>
                  <CFormInput
                    type="file"
                    size="sm"
                    id="insurance"
                    className={`${errors.insurance && 'is-invalid'}`}
                    name="insurance"
                    value={values.insurance || ''}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                  />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="insuranceValid">
                    Insurance Validity*
                    {errors.insuranceValid && (
                      <span className="small text-danger">{errors.insuranceValid}</span>
                    )}
                  </CFormLabel>
                  <CFormSelect
                    size="sm"
                    id="insuranceValid"
                    className={`${errors.insuranceValid && 'is-invalid'}`}
                    name="insuranceValid"
                    value={values.insuranceValid || ''}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                  >
                    <option value="" hidden selected>
                      Select...
                    </option>
                    <option value="1">Valid</option>
                    <option value="0">Invalid</option>
                  </CFormSelect>
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="TDSfront">
                    TDS Declaration Form - Front*
                    {errors.TDSfront && (
                      <span className="small text-danger">{errors.TDSfront}</span>
                    )}
                  </CFormLabel>
                  <CFormInput
                    type="file"
                    size="sm"
                    id="TDSfront"
                    className={`${errors.TDSfront && 'is-invalid'}`}
                    name="TDSfront"
                    value={values.TDSfront || ''}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                  />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="TDSback">
                    TDS Declaration Form - Back*{' '}
                    {errors.TDSback && <span className="small text-danger">{errors.TDSback}</span>}
                  </CFormLabel>
                  <CFormInput
                    type="file"
                    size="sm"
                    id="TDSback"
                    className={`${errors.TDSback && 'is-invalid'}`}
                    name="TDSback"
                    value={values.TDSback || ''}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                  />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="transportShed">
                    Transporter Shed Sheet*{' '}
                    {errors.transportShed && (
                      <span className="small text-danger">{errors.transportShed}</span>
                    )}
                  </CFormLabel>
                  <CFormInput
                    type="file"
                    size="sm"
                    id="transportShed"
                    className={`${errors.transportShed && 'is-invalid'}`}
                    name="transportShed"
                    value={values.transportShed || ''}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                  />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="shedName">
                    Shed Name*
                    {errors.shedName && (
                      <span className="small text-danger">{errors.shedName}</span>
                    )}
                  </CFormLabel>
                  <CFormSelect
                    size="sm"
                    id="shedName"
                    className={`${errors.shedName && 'is-invalid'}`}
                    name="shedName"
                    value={values.shedName || ''}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                  >
                    <option hidden>Select...</option>
                    <option value="0">Select SP</option>
                  </CFormSelect>
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="ownershipTrans">
                    Ownership Transfer Form*
                    {errors.ownershipTrans && (
                      <span className="small text-danger">{errors.ownershipTrans}</span>
                    )}{' '}
                  </CFormLabel>
                  <CFormInput
                    type="file"
                    id="ownershipTrans"
                    className={`${errors.ownershipTrans && 'is-invalid'}`}
                    name="ownershipTrans"
                    value={values.ownershipTrans || ''}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                  />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="shedownerMob">
                    Shed Mobile Number*
                    {errors.shedownerMob && (
                      <span className="small text-danger">{errors.shedownerMob}</span>
                    )}{' '}
                  </CFormLabel>
                  <CFormInput
                    type="text"
                    id="shedownerMob"
                    className={`${errors.shedownerMob && 'is-invalid'}`}
                    name="shedownerMob"
                    value={values.shedownerMob || ''}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                  />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="shedownerWhatsapp">
                    Shed WhatsApp Number
                    {errors.shedownerWhatsapp && (
                      <span className="small text-danger">{errors.shedownerWhatsapp}</span>
                    )}{' '}
                  </CFormLabel>
                  <CFormInput
                    type="text"
                    id="shedownerWhatsapp"
                    className={`${errors.shedownerWhatsapp && 'is-invalid'}`}
                    name="shedownerWhatsapp"
                    value={values.shedownerWhatsapp || ''}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                  />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="freigthRate">
                    Freight Rate Per Ton*
                    {errors.freigthRate && (
                      <span className="small text-danger">{errors.freigthRate}</span>
                    )}{' '}
                  </CFormLabel>
                  <CFormInput
                    type="text"
                    id="freigthRate"
                    className={`${errors.freigthRate && 'is-invalid'}`}
                    name="freigthRate"
                    value={values.freigthRate || ''}
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
                  <Link to="/DocsVerify">
                    <CButton
                      md={9}
                      size="sm"
                      color="primary"
                      disabled=""
                      className="text-white"
                      type="submit"
                    >
                      Previous
                    </CButton>
                  </Link>
                </CCol>

                <CCol
                  className=""
                  xs={12}
                  sm={12}
                  md={3}
                  style={{ display: 'flex', justifyContent: 'flex-end' }}
                >
                  <CButton
                    size="sm"
                    color="warning"
                    disabled=""
                    className="mx-3 px-3 text-white"
                    type="submit"
                  >
                    Accept
                  </CButton>
                  <CButton
                    size="sm"
                    // disabled={enableSubmit}
                    color="warning"
                    className="px-3 text-white"
                    type="submit"
                  >
                    Reject
                  </CButton>
                </CCol>
              </CRow>
            </CForm>
          </CTabPane>
        </CTabContent>
      </CCard>

      {/* Modal Area */}
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Odometer Photo</CModalTitle>
        </CModalHeader>

        <CModalBody>
          <img
            src="https://media-exp1.licdn.com/dms/image/C560BAQEhfRQblzW2Jw/company-logo_200_200/0/1597849191912?e=2159024400&v=beta&t=GfooSG4SaLjwT3-7D7uTYkhI_3ZT8q64wR-d0e_Ti_s"
            alt=""
          />
        </CModalBody>

        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
        </CModalFooter>
      </CModal>
      {/* Modal Area */}
    </>
  )
}

export default DocVerifyVendorAvail
