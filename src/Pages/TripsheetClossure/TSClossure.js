/* eslint-disable prettier/prettier */
import {
  CButton,
  CCard,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CTableCaption,
  CFormSelect,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CModal,
  CModalHeader,
  CModalTitle,
  CTabPane,
  CModalBody,
  CModalFooter,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CFormFloating,
  CNavbar,
  CTableRow,
  CFormTextarea,
} from '@coreui/react'
import { React, useEffect, useState } from 'react'
// import Select from 'react-select';
// import CModal from '@coreui/react/src/components/modal/CModal'
import useForm from 'src/Hooks/useForm'
import validate from 'src/Validations/FormValidation'
import CustomTable from '../../components/customComponent/CustomTable'

const TSClossure = () => {
  const formValues = {
    vehicleType: '',
    OdometerKm: '',
  }

  const { values, errors, handleChange, onFocus, handleSubmit, enableSubmit, onBlur } = useForm(
    login,
    validate,
    formValues
  )

  function login() {
    alert('No Errors CallBack Called')
  }

  const [mainKey, setMainKey] = useState(1)
  const [activeKey, setActiveKey] = useState(1)
  const [activeKey_2, setActiveKey_2] = useState(1)
  const [visible, setVisible] = useState(false)
  const [visible1, setVisible1] = useState(false)
  const [adharvisible, setAdharVisible] = useState(false)
  const [adhardel, setAdhardel] = useState(false)
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ]
  const [deliveryNumber, setSelectedDeliveryNumber] = useState([])

  const selecthandleChange = (e) => {
    console.log(e.value)
    // setSelectedDeliveryNumber({[...deliveryNumber, e.value]});
  }

  useEffect(() => {
    console.log(deliveryNumber)
  }, [deliveryNumber])
  return (
    <>
      <CCard className="p-1">
        <CNav variant="tabs" role="tablist">
          <CNavItem>
            <CNavLink
              href="javascript:void(0);"
              active={mainKey === 1}
              onClick={() => setMainKey(1)}
            >
              For Hire Vehicle
            </CNavLink>
          </CNavItem>

          <CNavItem>
            <CNavLink
              href="javascript:void(0);"
              active={mainKey === 2}
              onClick={() => setMainKey(2)}
            >
              For Own & Contract Vehicle
            </CNavLink>
          </CNavItem>
        </CNav>

        <CTabContent className="p-3">
          <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={mainKey === 1}>
            <CNav variant="tabs" role="tablist">
              <CNavItem>
                <CNavLink
                  href="javascript:void(0);"
                  active={activeKey === 1}
                  onClick={() => setActiveKey(1)}
                >
                  General Information
                </CNavLink>
              </CNavItem>

              <CNavItem>
                <CNavLink
                  href="javascript:void(0);"
                  active={activeKey === 2}
                  onClick={() => setActiveKey(2)}
                >
                  FJ Information
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink
                  href="javascript:void(0);"
                  active={activeKey === 4}
                  onClick={() => setActiveKey(4)}
                >
                  STO Information
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink
                  href="javascript:void(0);"
                  active={activeKey === 7}
                  onClick={() => setActiveKey(7)}
                >
                  Freight
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink
                  href="javascript:void(0);"
                  active={activeKey === 5}
                  onClick={() => setActiveKey(5)}
                >
                  Diesel Information
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink
                  href="javascript:void(0);"
                  active={activeKey === 6}
                  onClick={() => setActiveKey(6)}
                >
                  Return
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink
                  href="javascript:void(0);"
                  active={activeKey === 3}
                  onClick={() => setActiveKey(3)}
                >
                  Expenses / Income
                </CNavLink>
              </CNavItem>
            </CNav>

            <CTabContent>
              <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>
                <CRow className="mt-2">
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">VA Number</CFormLabel>
                    <CFormInput size="sm" id="inputAddress" value="RMIASR182100000024" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Tripsheet Number</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="700012" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Vehicle Number</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="TN48DE3902" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Vehicle Capacity</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="10 TON" readOnly />
                  </CCol>
                </CRow>

                <CRow className="">
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Vehicle Type</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="Own" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Driver Name</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="NAGARAJ" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Driver Cell Number</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="8525097921" readOnly />
                  </CCol>

                  {/* <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Odometer Opening KM</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="189736" readOnly />
                  </CCol> */}
                  {/* </CRow>
                <CModal visible={visible} onClose={() => setVisible(false)}>
                  <CModalHeader onClose={() => setVisible(false)}>
                    <CModalTitle>Modal title</CModalTitle>
                  </CModalHeader>
                  <CModalBody>
                    <h2>Odometer Photo View</h2>
                  </CModalBody>
                  <CModalFooter>
                    <CButton color="primary" onClick={() => setVisible(false)}>
                      Close
                    </CButton>
                  </CModalFooter>
                </CModal>
                <CModal visible={visible1} onClose={() => setVisible1(false)}>
                  <CModalHeader onClose={() => setVisible1(false)}>
                    <CModalTitle>Modal title</CModalTitle>
                  </CModalHeader>
                  <CModalBody>
                    <h2>Invoice Copy View</h2>
                  </CModalBody>
                  <CModalFooter>
                    <CButton color="primary" onClick={() => setVisible1(false)}>
                      Close
                    </CButton>
                  </CModalFooter>
                </CModal>
                <CRow className="">
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Odometer Opening Photo</CFormLabel>
                    <div className="d-grid gap-2">
                      <CButton
                        className="text-justify"
                        color="info"
                        size="sm"
                        onClick={() => setVisible(!visible)}
                      >
                        <span className="float-start">
                          <i className="fa fa-eye"></i> &nbsp; View
                        </span>
                      </CButton>
                    </div>
                  </CCol> */}

                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Gate-In Date & Time</CFormLabel>

                    <CFormInput
                      size="sm"
                      id="inputAddress"
                      value="21 Sep 2021 12:00:00 PM"
                      readOnly
                    />
                  </CCol>
                </CRow>
                <CRow className="">
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Vehicle Inspection Date & Time</CFormLabel>

                    <CFormInput
                      size="sm"
                      id="inputAddress"
                      value="21 Sep 2021 12:00:00 PM"
                      readOnly
                    />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Doc. Verification Date & Time</CFormLabel>

                    <CFormInput
                      size="sm"
                      id="inputAddress"
                      value="21 Sep 2021 12:00:00 PM"
                      readOnly
                    />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Shed Name</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="AAAAA" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Owner Name</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="BBBBB" readOnly />
                  </CCol>
                </CRow>
                <CRow className="">
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Owner Cell Number</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="1234567890" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Gate Out Date & Time</CFormLabel>

                    <CFormInput
                      size="sm"
                      id="inputAddress"
                      value="21 Sep 2021 02:00:00 PM"
                      readOnly
                    />
                  </CCol>
                </CRow>
              </CTabPane>

              <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 2}>
                <CRow className="mt-2" hidden>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Shipment Number</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="1234" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Invoice Number</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="123456" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Customer Number</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="111111" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Delivery Date & Time</CFormLabel>

                    <CFormInput size="sm" type="datetime-local" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">FJ POD Copy</CFormLabel>
                    <CFormInput type="file" name="fjPod1" size="sm" id="formFileSm" />

                    {/* <CFormInput size="sm" id="inputAddress" value=" " readOnly /> */}
                  </CCol>
                  <CCol md={2}>
                    <CFormLabel htmlFor="DefectType">
                      Defect Type*{' '}
                      {errors.DefectType && (
                        <span className="help text-danger">{errors.DefectType}</span>
                      )}
                    </CFormLabel>

                    <CFormSelect
                      size="sm"
                      name="DefectType"
                      onFocus={onFocus}
                      onBlur={onBlur}
                      onChange={handleChange}
                      value={values.DefectType}
                      className={`${errors.DefectType && 'is-invalid'}`}
                      aria-label="Small select example"
                    >
                      <option value="" hidden selected>
                        Select...
                      </option>
                      <option value="1">Shortage</option>
                      <option value="2">Rain Damage</option>
                      <option value="3">Sales Diversion</option>
                      <option value="4">Sales Return</option>
                      <option value="4">Halting</option>
                    </CFormSelect>
                  </CCol>
                  <CCol xs={12} md={2} hidden>
                    <CFormLabel htmlFor="inputAddress">Defect Type</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" readOnly />
                  </CCol>
                </CRow>
                <CRow className="" hidden>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Shipment Number</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="1234" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Invoice Number</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="123459" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Customer Number</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="444444" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Delivery Date & Time</CFormLabel>

                    <CFormInput size="sm" type="datetime-local" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">FJ POD Copy</CFormLabel>
                    <CFormInput type="file" name="fjPod2" size="sm" id="formFileSm" />

                    {/* <CFormInput size="sm" id="inputAddress" value=" " readOnly /> */}
                  </CCol>
                  <CCol md={2}>
                    <CFormLabel htmlFor="DefectType2">
                      Defect Type*{' '}
                      {errors.DefectType2 && (
                        <span className="help text-danger">{errors.DefectType2}</span>
                      )}
                    </CFormLabel>

                    <CFormSelect
                      size="sm"
                      name="DefectType2"
                      onFocus={onFocus}
                      onBlur={onBlur}
                      onChange={handleChange}
                      value={values.DefectType2}
                      className={`mb-3 ${errors.DefectType2 && 'is-invalid'}`}
                      aria-label="Small select example"
                    >
                      <option value="" hidden selected>
                        Select...
                      </option>
                      <option value="1">Shortage</option>
                      <option value="2">Rain Damage</option>
                      <option value="3">Sales Diversion</option>
                      <option value="4">Sales Return</option>
                      <option value="4">Halting</option>
                    </CFormSelect>
                  </CCol>
                  <CCol xs={12} md={2} hidden>
                    <CFormLabel htmlFor="inputAddress">Defect Type</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" readOnly />
                  </CCol>
                </CRow>
              </CTabPane>
              <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 4}>
                <CRow className="mt-2" hidden>
                  <CCol md={2}>
                    <CFormLabel htmlFor="DefectType">
                      STO Delivery Number{' '}
                      {errors.STONo && <span className="help text-danger">{errors.STONo}</span>}
                    </CFormLabel>
                    <CFormInput size="sm" id="inputAddress" value="15487126" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">From Location</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">To Location</CFormLabel>

                    <CFormInput size="sm" type="" id="inputAddress" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Freight Amount</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" type="" value="12344" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Delivery Date and Time</CFormLabel>

                    <CFormInput size="sm" type="datetime-local" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">POD Copy</CFormLabel>
                    <CFormInput type="file" name="fjPod1" size="sm" id="formFileSm" />

                    {/* <CFormInput size="sm" id="inputAddress" value=" " readOnly /> */}
                  </CCol>
                </CRow>
              </CTabPane>
              <br />
              <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 7}>
                <CTable caption="top" hover>
                  <CTableHead style={{ backgroundColor: '#4d3227', color: 'white' }}>
                    <CTableRow>
                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        Load Tonnage
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        Total Freight Amount
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        Advance in Diesel
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        Advance in Bank
                      </CTableHeaderCell>

                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        Total Advance
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        Balance
                      </CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>

                  <CTableBody>
                    <CTableRow>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" Value="15" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" Value="25000" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" Value="" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" Value="20000" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" Value="20000" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" Value="5000" readOnly />
                      </CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                </CTable>
              </CTabPane>
              <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 5}>
                <CRow className="mt-2" hidden>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Diesel Vendor</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Diesel Liter</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Rate Per Liter</CFormLabel>

                    <CFormInput size="sm" type="" id="inputAddress" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Total Amount</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" type="" value="" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Invoice Date & Time</CFormLabel>

                    <CFormInput
                      size="sm"
                      id="inputAddress"
                      type="datetime-local"
                      value=""
                      readOnly
                    />
                  </CCol>
                  {!adhardel && (
                    <CCol xs={12} md={2}>
                      <CFormLabel htmlFor="inputAddress">
                        Invoice Copy
                        {errors.vehicleType && (
                          <span className="help text-danger">{errors.vehicleType}</span>
                        )}
                      </CFormLabel>
                      <CButton
                        // onClick={() => setAdharVisible(!adharvisible)}
                        className="w-100 m-0"
                        color="info"
                        size="sm"
                        id="inputAddress"
                      >
                        <span
                          className="float-start"
                          onClick={() => setAdharVisible(!adharvisible)}
                        >
                          <i className="fa fa-eye" aria-hidden="true"></i> &nbsp;View
                        </span>
                        <span
                          className="float-end"
                          onClick={() => {
                            if (window.confirm('Are you sure to remove this file?')) {
                              setAdhardel(true)
                            }
                          }}
                        >
                          <i
                            className="fa fa-trash"
                            aria-hidden="true"
                            // onMouseOver={changeBackground}
                            // onMouseLeave={changeBackground1}
                          ></i>
                        </span>
                      </CButton>
                    </CCol>
                  )}
                  {adhardel && (
                    <CCol xs={12} md={3}>
                      <CFormLabel htmlFor="AadharCard">Aadhar Card*</CFormLabel>
                      <CFormInput type="file" name="AadharCard" size="sm" id="" />
                    </CCol>
                  )}
                </CRow>
              </CTabPane>
              <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 6}>
                <CRow className="mt-2" hidden>
                  <CCol md={2}>
                    <CFormLabel htmlFor="DefectType">
                      Shipment Number{' '}
                      {errors.DriverName && (
                        <span className="help text-danger">{errors.DriverName}</span>
                      )}
                    </CFormLabel>
                    <CFormSelect
                      size="sm"
                      name="DefectType"
                      onFocus={onFocus}
                      onBlur={onBlur}
                      onChange={handleChange}
                      value={values.DriverName}
                      className={`${errors.DriverName && 'is-invalid'}`}
                      aria-label="Small select example"
                    >
                      <option value="" hidden selected>
                        Select...
                      </option>
                      <option value="1">11111</option>
                      <option value="2">22222</option>
                      <option value="3">33333</option>
                    </CFormSelect>
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="DefectType">
                      Delivery Number{' '}
                      {errors.DriverName && (
                        <span className="help text-danger">{errors.DriverName}</span>
                      )}
                    </CFormLabel>
                    <CFormSelect
                      size="sm"
                      name="DefectType"
                      onFocus={onFocus}
                      onBlur={onBlur}
                      onChange={handleChange}
                      value={values.DriverName}
                      className={`${errors.DriverName && 'is-invalid'}`}
                      aria-label="Small select example"
                    >
                      <option value="" hidden selected>
                        Select...
                      </option>
                      <option value="1">11111</option>
                      <option value="2">22222</option>
                      <option value="3">33333</option>
                    </CFormSelect>
                  </CCol>

                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="DefectType">
                      Return To{' '}
                      {errors.DriverName && (
                        <span className="help text-danger">{errors.DriverName}</span>
                      )}
                    </CFormLabel>
                    <CFormSelect
                      size="sm"
                      name="DefectType"
                      onFocus={onFocus}
                      onBlur={onBlur}
                      onChange={handleChange}
                      value={values.DriverName}
                      className={`${errors.DriverName && 'is-invalid'}`}
                      aria-label="Small select example"
                    >
                      <option value="" hidden selected>
                        Select...
                      </option>
                      <option value="1">NLFD</option>
                      <option value="2">NLFA</option>
                      <option value="3">NLCD</option>
                      <option value="4">NLMD</option>
                      <option value="5">NLDV</option>
                    </CFormSelect>
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Retun QTY in Tons</CFormLabel>

                    <CFormInput size="sm" type="" id="inputAddress" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Return Rate Per Ton</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" type="" value="" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Return Freight Amount</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" type="" />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Diverted POD</CFormLabel>
                    <CFormInput type="file" name="fjPod1" size="sm" id="formFileSm" />

                    {/* <CFormInput size="sm" id="inputAddress" value=" " readOnly /> */}
                  </CCol>
                </CRow>
              </CTabPane>
              <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 3}>
                <CTable caption="top" style={{ height: '75vh' }} hover>
                  <CTableCaption style={{ color: 'maroon' }}>Expenses</CTableCaption>

                  <CTableHead style={{ backgroundColor: '#4d3227', color: 'white' }}>
                    <CTableRow>
                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        S.No
                      </CTableHeaderCell>

                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        Type
                      </CTableHeaderCell>

                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        FJ Delivery
                      </CTableHeaderCell>

                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        RJ Delivery
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        STO Delivery
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        Total
                      </CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>

                  <CTableBody>
                    <CTableRow>
                      <CTableHeaderCell scope="row"></CTableHeaderCell>
                      <CTableDataCell>Division</CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" Value="NLFD" id="inputAddress" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" Value="NLFD" id="inputAddress" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" Value="NLFD" id="inputAddress" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" Value="NLFD" id="inputAddress" readOnly />
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">1</CTableHeaderCell>
                      <CTableDataCell>Unloading Charges (Excess)*</CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                    </CTableRow>

                    <CTableRow>
                      <CTableHeaderCell scope="row">2</CTableHeaderCell>
                      <CTableDataCell>Subdelivery Charges*</CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                    </CTableRow>

                    <CTableRow>
                      <CTableHeaderCell scope="row">3</CTableHeaderCell>
                      <CTableDataCell>Weighment Charges*</CTableDataCell>

                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                    </CTableRow>

                    <CTableRow>
                      <CTableHeaderCell scope="row">4</CTableHeaderCell>
                      <CTableDataCell>Freight Charges</CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" value="2500" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" value="2000" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" value="2500" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" value="2000" readOnly />
                      </CTableDataCell>
                    </CTableRow>

                    <CTableRow>
                      <CTableHeaderCell scope="row">5</CTableHeaderCell>
                      <CTableDataCell>Stock Diversion / Return Charges*</CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" readOnly />
                      </CTableDataCell>
                    </CTableRow>

                    <CTableRow>
                      <CTableHeaderCell scope="row">6</CTableHeaderCell>
                      <CTableDataCell>Halting Charges*</CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                </CTable>
                <CTable caption="top" style={{ height: '30vh' }} hover>
                  <CTableCaption style={{ color: 'maroon' }}>Income</CTableCaption>
                  <CTableHead style={{ backgroundColor: '#4d3227', color: 'white' }}>
                    <CTableRow>
                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        S.No
                      </CTableHeaderCell>

                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        Type
                      </CTableHeaderCell>

                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        FJ Delivery
                      </CTableHeaderCell>

                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        RJ Delivery
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        STO Delivery
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        Total
                      </CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>

                  <CTableBody>
                    <CTableRow>
                      <CTableHeaderCell scope="row">1</CTableHeaderCell>
                      <CTableDataCell>Base Freight</CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" value="Auto" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" value="Auto" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" value="Auto" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" value="Auto" readOnly />
                      </CTableDataCell>
                    </CTableRow>

                    <CTableRow>
                      <CTableHeaderCell scope="row">2</CTableHeaderCell>
                      <CTableDataCell>Additional Freight</CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                </CTable>
                <CTable caption="top" style={{ height: '40vh' }} hover>
                  <CTableCaption style={{ color: 'maroon' }}>Profit and Loss</CTableCaption>
                  <CTableHead style={{ backgroundColor: '#4d3227', color: 'white' }}>
                    <CTableRow>
                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        S.No
                      </CTableHeaderCell>

                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        Type
                      </CTableHeaderCell>

                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        FJ Delivery
                      </CTableHeaderCell>

                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        RJ Delivery
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        STO Delivery
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        Total
                      </CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>

                  <CTableBody>
                    <CTableRow>
                      <CTableHeaderCell scope="row">1</CTableHeaderCell>
                      <CTableDataCell>Income</CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" readOnly />
                      </CTableDataCell>
                    </CTableRow>

                    <CTableRow>
                      <CTableHeaderCell scope="row">2</CTableHeaderCell>
                      <CTableDataCell>Expense</CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" readOnly />
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">3</CTableHeaderCell>
                      <CTableDataCell>Profit and Loss</CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" readOnly />
                      </CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                </CTable>
                <CTable caption="top" style={{ height: '40vh' }} hover>
                  <CTableCaption style={{ color: 'maroon' }}>Others</CTableCaption>
                  <CTableHead style={{ backgroundColor: '#4d3227', color: 'white' }}>
                    <CTableRow>
                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        S.No
                      </CTableHeaderCell>

                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        Type
                      </CTableHeaderCell>

                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        FJ Delivery
                      </CTableHeaderCell>

                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        RJ Delivery
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        STO Delivery
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        Total
                      </CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>

                  <CTableBody>
                    <CTableRow>
                      <CTableHeaderCell scope="row">1</CTableHeaderCell>
                      <CTableDataCell>Halt Days*</CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">2</CTableHeaderCell>
                      <CTableDataCell>Attachment 1</CTableDataCell>
                      <CTableDataCell>
                        <CFormInput type="file" name="divortedPod" size="sm" id="formFileSm" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput type="file" name="divortedPod" size="sm" id="formFileSm" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput type="file" name="divortedPod" size="sm" id="formFileSm" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput type="file" name="divortedPod" size="sm" id="formFileSm" />
                      </CTableDataCell>
                    </CTableRow>

                    <CTableRow>
                      <CTableHeaderCell scope="row">3</CTableHeaderCell>
                      <CTableDataCell>Attachment 2</CTableDataCell>
                      <CTableDataCell>
                        <CFormInput type="file" name="divortedPod" size="sm" id="formFileSm" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput type="file" name="divortedPod" size="sm" id="formFileSm" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput type="file" name="divortedPod" size="sm" id="formFileSm" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput type="file" name="divortedPod" size="sm" id="formFileSm" />
                      </CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                </CTable>
                <CRow className="mt-2">
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="remarks">Remarks*</CFormLabel>
                    <CFormTextarea
                      name="remarks"
                      id="exampleFormControlTextarea1"
                      rows="1"
                    ></CFormTextarea>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol
                    className="offset-md-9"
                    xs={12}
                    sm={12}
                    md={3}
                    // style={{ display: 'flex', justifyContent: 'space-between' }}
                    style={{ display: 'flex', flexDirection: 'row-reverse', cursor: 'pointer' }}
                  >
                    <CButton
                      size="sm"
                      color="warning"
                      // disabled={enableSubmit}
                      className="mx-3 text-white"
                      // className="align-self-end ml-auto"
                      type="submit"
                    >
                      Close Tripsheet
                    </CButton>
                  </CCol>
                </CRow>
              </CTabPane>
            </CTabContent>
          </CTabPane>

          <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={mainKey === 2}>
            <CNav variant="tabs" role="tablist">
              <CNavItem>
                <CNavLink
                  href="javascript:void(0);"
                  active={activeKey_2 === 1}
                  onClick={() => setActiveKey_2(1)}
                >
                  General Information
                </CNavLink>
              </CNavItem>

              <CNavItem>
                <CNavLink
                  href="javascript:void(0);"
                  active={activeKey_2 === 2}
                  onClick={() => setActiveKey_2(2)}
                >
                  FJ & RJ Information
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink
                  href="javascript:void(0);"
                  active={activeKey_2 === 4}
                  onClick={() => setActiveKey_2(4)}
                >
                  STO Information
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink
                  href="javascript:void(0);"
                  active={activeKey_2 === 5}
                  onClick={() => setActiveKey_2(5)}
                >
                  Diesel Information
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink
                  href="javascript:void(0);"
                  active={activeKey_2 === 8}
                  onClick={() => setActiveKey_2(8)}
                >
                  Gate Pass
                </CNavLink>
              </CNavItem>
              <CNavItem></CNavItem>
              <CNavItem>
                <CNavLink
                  href="javascript:void(0);"
                  active={activeKey_2 === 6}
                  onClick={() => setActiveKey_2(6)}
                >
                  Return
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink
                  href="javascript:void(0);"
                  active={activeKey_2 === 3}
                  onClick={() => setActiveKey_2(3)}
                >
                  Expenses / Income
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink
                  href="javascript:void(0);"
                  active={activeKey_2 === 7}
                  onClick={() => setActiveKey_2(7)}
                >
                  Advance
                </CNavLink>
              </CNavItem>
            </CNav>

            <CTabContent>
              <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey_2 === 1}>
                <CRow className="mt-2">
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">VA Number</CFormLabel>
                    <CFormInput size="sm" id="inputAddress" value="RMIASR182100000024" readOnly />
                  </CCol>

                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Tripsheet Number</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="700012" readOnly />
                  </CCol>

                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Vehicle Number</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="TN48DE3902" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Vehicle Capacity</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="10 TON" readOnly />
                  </CCol>
                </CRow>

                <CRow className="">
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Vehicle Type</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="Own" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Driver Name</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="NAGARAJ" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Driver Mobile Number</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="8525097921" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Odometer Opening KM</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="189736" readOnly />
                  </CCol>
                </CRow>

                <CRow className="">
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Odometer Opening KM</CFormLabel>

                    <div className="d-grid gap-2">
                      <CButton
                        className="text-justify"
                        color="info"
                        size="sm"
                        onClick={() => setVisible(!visible)}
                      >
                        <span className="float-start">
                          <i className="fa fa-eye"></i> &nbsp; View
                        </span>
                      </CButton>
                    </div>
                  </CCol>
                  {/* <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Gate-In Time</CFormLabel>

                    <CFormInput
                      size="sm"
                      id="inputAddress"
                      value="21 Sep 2021 12:00:00 PM"
                      readOnly
                    />
                  </CCol> */}
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Inspection Time</CFormLabel>

                    <CFormInput
                      size="sm"
                      id="inputAddress"
                      value="21 Sep 2021 12:00:00 PM"
                      readOnly
                    />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Doc. Verify Time</CFormLabel>

                    <CFormInput
                      size="sm"
                      id="inputAddress"
                      value="21 Sep 2021 12:00:00 PM"
                      readOnly
                    />
                  </CCol>

                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Gate Out Date & Time</CFormLabel>

                    <CFormInput
                      size="sm"
                      id="inputAddress"
                      value="21 Sep 2021 02:00:00 PM"
                      readOnly
                    />
                  </CCol>

                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Gate-In Time</CFormLabel>

                    <CFormInput
                      size="sm"
                      id="inputAddress"
                      value="24 Sep 2021 12:00:00 PM"
                      readOnly
                    />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Closing KM</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="198625" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Odometer Closing KM</CFormLabel>

                    <div className="d-grid gap-2">
                      <CButton
                        className="text-justify"
                        color="info"
                        size="sm"
                        onClick={() => setVisible(!visible)}
                      >
                        <span className="float-start">
                          <i className="fa fa-eye"></i> &nbsp; View
                        </span>
                      </CButton>
                    </div>
                  </CCol>

                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Trip KM</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="8889" readOnly />
                  </CCol>

                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Budgeted KM</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="8800" />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Actual KM</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="8880" />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Diff. KM</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="80" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Idle Hrs</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="4" />
                  </CCol>

                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Budged Mileage</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="5" />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Actual Mileage</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="4" />
                  </CCol>

                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Diff. Mileage</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="1" readOnly />
                  </CCol>
                </CRow>

                {/* <CRow className="">
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Total Diesel Consume</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="2" readOnly />
                  </CCol>
                </CRow> */}
              </CTabPane>
              <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey_2 === 2}>
                <CRow className="mt-2" hidden>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Shipment Number</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="123456" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Invoice Number</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="126788" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Customer Number</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="111111" readOnly />
                  </CCol>

                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Delivery Date & Time</CFormLabel>

                    <CFormInput size="sm" type="datetime-local" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Unloading Charges</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">FJ POD Copy</CFormLabel>
                    <CFormInput type="file" name="fjPod1" size="sm" id="formFileSm" />

                    {/* <CFormInput size="sm" id="inputAddress" value=" " readOnly /> */}
                  </CCol>
                  <CCol md={2}>
                    <CFormLabel htmlFor="DefectType">
                      Defect Type*{' '}
                      {errors.DefectType && (
                        <span className="help text-danger">{errors.DefectType}</span>
                      )}
                    </CFormLabel>

                    <CFormSelect
                      size="sm"
                      name="DefectType"
                      onFocus={onFocus}
                      onBlur={onBlur}
                      onChange={handleChange}
                      value={values.DefectType}
                      className={`${errors.DefectType && 'is-invalid'}`}
                      aria-label="Small select example"
                    >
                      <option value="">Select Types</option>

                      <option value="1">Unloading Charges</option>

                      <option value="2">Subdelivery Charges</option>

                      <option value="3">Halting Charges</option>

                      <option value="4">Low Tonnage</option>
                    </CFormSelect>
                  </CCol>
                  <CCol xs={12} md={2} hidden>
                    <CFormLabel htmlFor="inputAddress">Defect Type</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" readOnly />
                  </CCol>
                </CRow>
                <CRow className="mt-2" hidden>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Shipment Number</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="123456" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Invoice Number</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="126789" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Customer Number</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="111111" readOnly />
                  </CCol>

                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Delivery Date & Time</CFormLabel>

                    <CFormInput size="sm" type="datetime-local" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Unloading Charges</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">FJ POD Copy</CFormLabel>
                    <CFormInput type="file" name="fjPod1" size="sm" id="formFileSm" />

                    {/* <CFormInput size="sm" id="inputAddress" value=" " readOnly /> */}
                  </CCol>
                  <CCol md={2}>
                    <CFormLabel htmlFor="DefectType">
                      Defect Type*{' '}
                      {errors.DefectType && (
                        <span className="help text-danger">{errors.DefectType}</span>
                      )}
                    </CFormLabel>

                    <CFormSelect
                      size="sm"
                      name="DefectType"
                      onFocus={onFocus}
                      onBlur={onBlur}
                      onChange={handleChange}
                      value={values.DefectType}
                      className={`${errors.DefectType && 'is-invalid'}`}
                      aria-label="Small select example"
                    >
                      <option value="">Select Types</option>

                      <option value="1">Unloading Charges</option>

                      <option value="2">Subdelivery Charges</option>

                      <option value="3">Halting Charges</option>

                      <option value="4">Low Tonnage</option>
                    </CFormSelect>
                  </CCol>
                  <CCol xs={12} md={2} hidden>
                    <CFormLabel htmlFor="inputAddress">Defect Type</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" readOnly />
                  </CCol>
                </CRow>
                <CRow className="mt-2" hidden>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Shipment Number</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="123456" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Invoice Number</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="126790" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Customer Number</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="333333" readOnly />
                  </CCol>

                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Delivery Date & Time</CFormLabel>

                    <CFormInput size="sm" type="datetime-local" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Unloading Charges</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">FJ POD Copy</CFormLabel>
                    <CFormInput type="file" name="fjPod1" size="sm" id="formFileSm" />

                    {/* <CFormInput size="sm" id="inputAddress" value=" " readOnly /> */}
                  </CCol>
                  <CCol md={2}>
                    <CFormLabel htmlFor="DefectType">
                      Defect Type*{' '}
                      {errors.DefectType && (
                        <span className="help text-danger">{errors.DefectType}</span>
                      )}
                    </CFormLabel>

                    <CFormSelect
                      size="sm"
                      name="DefectType"
                      onFocus={onFocus}
                      onBlur={onBlur}
                      onChange={handleChange}
                      value={values.DefectType}
                      className={`${errors.DefectType && 'is-invalid'}`}
                      aria-label="Small select example"
                    >
                      <option value="">Select Types</option>

                      <option value="1">Unloading Charges</option>

                      <option value="2">Subdelivery Charges</option>

                      <option value="3">Halting Charges</option>

                      <option value="4">Low Tonnage</option>
                    </CFormSelect>
                  </CCol>
                  <CCol xs={12} md={2} hidden>
                    <CFormLabel htmlFor="inputAddress">Defect Type</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" readOnly />
                  </CCol>
                </CRow>
                <CRow className="mt-2" hidden>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Shipment Number</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="123456" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Invoice Number</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="126791" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Customer Number</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="222222" readOnly />
                  </CCol>

                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Delivery Date & Time</CFormLabel>

                    <CFormInput size="sm" type="datetime-local" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Unloading Charges</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">FJ POD Copy</CFormLabel>
                    <CFormInput type="file" name="fjPod1" size="sm" id="formFileSm" />

                    {/* <CFormInput size="sm" id="inputAddress" value=" " readOnly /> */}
                  </CCol>
                  <CCol md={2}>
                    <CFormLabel htmlFor="DefectType">
                      Defect Type*{' '}
                      {errors.DefectType && (
                        <span className="help text-danger">{errors.DefectType}</span>
                      )}
                    </CFormLabel>

                    <CFormSelect
                      size="sm"
                      name="DefectType"
                      onFocus={onFocus}
                      onBlur={onBlur}
                      onChange={handleChange}
                      value={values.DefectType}
                      className={`${errors.DefectType && 'is-invalid'}`}
                      aria-label="Small select example"
                    >
                      <option value="">Select Types</option>

                      <option value="1">Unloading Charges</option>

                      <option value="2">Subdelivery Charges</option>

                      <option value="3">Halting Charges</option>

                      <option value="4">Low Tonnage</option>
                    </CFormSelect>
                  </CCol>
                  <CCol xs={12} md={2} hidden>
                    <CFormLabel htmlFor="inputAddress">Defect Type</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" readOnly />
                  </CCol>
                </CRow>
                <hr />
                <CRow className="mb-md-1" hidden>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">RJ SO Number</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="1234762" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Customer Number</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="1123661" readOnly />
                  </CCol>
                  {/* <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress" >Opening KM</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Closing KM</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Running KM</CFormLabel>

                    <CFormInput htmlFor="inputAddress" readOnly />
                  </CCol> */}
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Delivery Date & Time</CFormLabel>

                    <CFormInput size="sm" type="datetime-local" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Unloading Charges</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">RJ POD Copy</CFormLabel>
                    <CFormInput type="file" name="fjPod1" size="sm" id="formFileSm" />

                    {/* <CFormInput size="sm" id="inputAddress" value=" " readOnly /> */}
                  </CCol>
                  <CCol md={2}>
                    <CFormLabel htmlFor="DefectType">
                      Defect Type*{' '}
                      {errors.DefectType && (
                        <span className="help text-danger">{errors.DefectType}</span>
                      )}
                    </CFormLabel>

                    <CFormSelect
                      size="sm"
                      name="DefectType"
                      onFocus={onFocus}
                      onBlur={onBlur}
                      onChange={handleChange}
                      value={values.DefectType}
                      className={`${errors.DefectType && 'is-invalid'}`}
                      aria-label="Small select example"
                    >
                      <option value="">Select Types</option>

                      <option value="1">Unloading Charges</option>

                      <option value="2">Subdelivery Charges</option>

                      <option value="3">Halting Charges</option>

                      <option value="4">Low Tonage</option>
                    </CFormSelect>
                  </CCol>
                  <CCol xs={12} md={2} hidden>
                    <CFormLabel htmlFor="inputAddress">Defect Type</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" readOnly />
                  </CCol>
                </CRow>
              </CTabPane>
              <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey_2 === 4}>
                <CRow className="mt-2" hidden>
                  <CCol md={2}>
                    <CFormLabel htmlFor="DefectType">
                      STO Delivery Number{' '}
                      {errors.STONo && <span className="help text-danger">{errors.STONo}</span>}
                    </CFormLabel>
                    <CFormInput size="sm" id="inputAddress" value="15487126" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">From Location</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">To Location</CFormLabel>

                    <CFormInput size="sm" type="" id="inputAddress" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Freight Amount</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" type="" value="" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Delivery Date and Time</CFormLabel>

                    <CFormInput size="sm" type="datetime-local" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">POD Copy</CFormLabel>
                    <CFormInput type="file" name="fjPod1" size="sm" id="formFileSm" />

                    {/* <CFormInput size="sm" id="inputAddress" value=" " readOnly /> */}
                  </CCol>
                  <CCol md={2}>
                    <CFormLabel htmlFor="DefectType">
                      Driver Name{' '}
                      {errors.DriverName && (
                        <span className="help text-danger">{errors.DriverName}</span>
                      )}
                    </CFormLabel>
                    <CFormSelect
                      size="sm"
                      name="DefectType"
                      onFocus={onFocus}
                      onBlur={onBlur}
                      onChange={handleChange}
                      value={values.DriverName}
                      className={`${errors.DriverName && 'is-invalid'}`}
                      aria-label="Small select example"
                    >
                      <option value="" hidden selected>
                        Select...
                      </option>
                      <option value="1">11111</option>
                      <option value="2">22222</option>
                      <option value="3">33333</option>
                    </CFormSelect>
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Expense To Be Capture</CFormLabel>

                    <CTableDataCell scope="row">
                      <input type="checkbox" name="name2" />
                    </CTableDataCell>
                  </CCol>
                </CRow>

                <CButton color="primary">Add</CButton>
                <hr />
                <CRow className="mt-2" hidden>
                  <CCol md={2}>
                    <CFormLabel htmlFor="DefectType">
                      STO Delivery Number{' '}
                      {errors.STONo && <span className="help text-danger">{errors.STONo}</span>}
                    </CFormLabel>
                    <CFormInput size="sm" id="inputAddress" value="15487126" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">From Location</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">To Location</CFormLabel>

                    <CFormInput size="sm" type="" id="inputAddress" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Freight Amount</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" type="" value="" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Delivery Date and Time</CFormLabel>

                    <CFormInput size="sm" type="datetime-local" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">POD Copy</CFormLabel>
                    <CFormInput type="file" name="fjPod1" size="sm" id="formFileSm" />

                    {/* <CFormInput size="sm" id="inputAddress" value=" " readOnly /> */}
                  </CCol>
                  <CCol md={2}>
                    <CFormLabel htmlFor="DefectType">
                      Driver Name{' '}
                      {errors.DriverName && (
                        <span className="help text-danger">{errors.DriverName}</span>
                      )}
                    </CFormLabel>
                    <CFormSelect
                      size="sm"
                      name="DefectType"
                      onFocus={onFocus}
                      onBlur={onBlur}
                      onChange={handleChange}
                      value={values.DriverName}
                      className={`${errors.DriverName && 'is-invalid'}`}
                      aria-label="Small select example"
                    >
                      <option value="" hidden selected>
                        Select...
                      </option>
                      <option value="1">11111</option>
                      <option value="2">22222</option>
                      <option value="3">33333</option>
                    </CFormSelect>
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Expense To Be Capture</CFormLabel>

                    <CTableDataCell scope="row">
                      <input type="checkbox" name="name2" />
                    </CTableDataCell>
                  </CCol>
                </CRow>
                <CButton color="primary">Add</CButton>
                <hr />
              </CTabPane>
              <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey_2 === 5}>
                <CRow className="mt-2" hidden>
                  <CCol xs={12} md={3}>
                    <CFormLabel
                      htmlFor="inputAddress"
                      style={{
                        backgroundColor: '#4d3227',
                        color: 'white',
                      }}
                    >
                      Diesel Filling :{' '}
                    </CFormLabel>
                  </CCol>
                </CRow>
                <CRow className="mt-2" hidden>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Diesel Vendor</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Diesel Liter</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="" />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Rate Per Liter</CFormLabel>

                    <CFormInput size="sm" type="" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Total Amount</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" type="" value="" readOnly />
                  </CCol>
                  {!adhardel && (
                    <CCol xs={12} md={2}>
                      <CFormLabel htmlFor="inputAddress">
                        Invoice Copy
                        {errors.vehicleType && (
                          <span className="help text-danger">{errors.vehicleType}</span>
                        )}
                      </CFormLabel>
                      <CButton
                        // onClick={() => setAdharVisible(!adharvisible)}
                        className="w-100 m-0"
                        color="info"
                        size="sm"
                        id="inputAddress"
                      >
                        <span
                          className="float-start"
                          onClick={() => setAdharVisible(!adharvisible)}
                        >
                          <i className="fa fa-eye" aria-hidden="true"></i> &nbsp;View
                        </span>
                        <span
                          className="float-end"
                          onClick={() => {
                            if (window.confirm('Are you sure to remove this file?')) {
                              setAdhardel(true)
                            }
                          }}
                        >
                          <i
                            className="fa fa-trash"
                            aria-hidden="true"
                            // onMouseOver={changeBackground}
                            // onMouseLeave={changeBackground1}
                          ></i>
                        </span>
                      </CButton>
                    </CCol>
                  )}
                  {adhardel && (
                    <CCol xs={12} md={3}>
                      <CFormLabel htmlFor="AadharCard">Aadhar Card*</CFormLabel>
                      <CFormInput type="file" name="AadharCard" size="sm" id="" />
                    </CCol>
                  )}
                  <CCol md={2}>
                    <CFormLabel htmlFor="DefectType">
                      Driver Name{' '}
                      {errors.DriverName && (
                        <span className="help text-danger">{errors.DriverName}</span>
                      )}
                    </CFormLabel>
                    <CFormSelect
                      size="sm"
                      name="DefectType"
                      onFocus={onFocus}
                      onBlur={onBlur}
                      onChange={handleChange}
                      value={values.DriverName}
                      className={`${errors.DriverName && 'is-invalid'}`}
                      aria-label="Small select example"
                    >
                      <option value="" hidden selected>
                        Select...
                      </option>
                      <option value="1">11111</option>
                      <option value="2">22222</option>
                      <option value="3">33333</option>
                    </CFormSelect>
                  </CCol>
                </CRow>
                <CRow className="mt-2" hidden>
                  <CCol md={2}>
                    <CFormLabel htmlFor="DefectType">
                      Registered Vendor{' '}
                      {errors.DriverName && (
                        <span className="help text-danger">{errors.DriverName}</span>
                      )}
                    </CFormLabel>
                    <CFormSelect
                      size="sm"
                      name="DefectType"
                      onFocus={onFocus}
                      onBlur={onBlur}
                      onChange={handleChange}
                      value={values.DriverName}
                      className={`${errors.DriverName && 'is-invalid'}`}
                      aria-label="Small select example"
                    >
                      <option value="" hidden selected>
                        Select...
                      </option>
                      <option value="1">11111</option>
                      <option value="2">22222</option>
                      <option value="3">33333</option>
                    </CFormSelect>
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Diesel Liter</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="" />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Rate Per Liter</CFormLabel>

                    <CFormInput size="sm" type="" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Total Amount</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" type="" value="" readOnly />
                  </CCol>
                  {!adhardel && (
                    <CCol xs={12} md={2}>
                      <CFormLabel htmlFor="inputAddress">
                        Invoice Number
                        {errors.vehicleType && (
                          <span className="help text-danger">{errors.vehicleType}</span>
                        )}
                      </CFormLabel>
                      <CButton
                        // onClick={() => setAdharVisible(!adharvisible)}
                        className="w-100 m-0"
                        color="info"
                        size="sm"
                        id="inputAddress"
                      >
                        <span
                          className="float-start"
                          onClick={() => setAdharVisible(!adharvisible)}
                        >
                          <i className="fa fa-eye" aria-hidden="true"></i> &nbsp;View
                        </span>
                        <span
                          className="float-end"
                          onClick={() => {
                            if (window.confirm('Are you sure to remove this file?')) {
                              setAdhardel(true)
                            }
                          }}
                        >
                          <i
                            className="fa fa-trash"
                            aria-hidden="true"
                            // onMouseOver={changeBackground}
                            // onMouseLeave={changeBackground1}
                          ></i>
                        </span>
                      </CButton>
                    </CCol>
                  )}
                  {adhardel && (
                    <CCol xs={12} md={3}>
                      <CFormLabel htmlFor="AadharCard">Aadhar Card*</CFormLabel>
                      <CFormInput type="file" name="AadharCard" size="sm" id="" />
                    </CCol>
                  )}
                  <CCol md={2}>
                    <CFormLabel htmlFor="DefectType">
                      Driver Name{' '}
                      {errors.DriverName && (
                        <span className="help text-danger">{errors.DriverName}</span>
                      )}
                    </CFormLabel>
                    <CFormSelect
                      size="sm"
                      name="DefectType"
                      onFocus={onFocus}
                      onBlur={onBlur}
                      onChange={handleChange}
                      value={values.DriverName}
                      className={`${errors.DriverName && 'is-invalid'}`}
                      aria-label="Small select example"
                    >
                      <option value="" hidden selected>
                        Select...
                      </option>
                      <option value="1">11111</option>
                      <option value="2">22222</option>
                      <option value="3">33333</option>
                    </CFormSelect>
                  </CCol>
                </CRow>
                <CRow className="mt-2" hidden>
                  <CCol md={2}>
                    <CFormLabel htmlFor="inputAddress">Unregistered Vendor</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="" />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Diesel Liter</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="" />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Rate Per Liter</CFormLabel>

                    <CFormInput size="sm" type="" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Total Amount</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" type="" value="" readOnly />
                  </CCol>
                  {!adhardel && (
                    <CCol xs={12} md={2}>
                      <CFormLabel htmlFor="inputAddress">
                        Invoice Number
                        {errors.vehicleType && (
                          <span className="help text-danger">{errors.vehicleType}</span>
                        )}
                      </CFormLabel>
                      <CButton
                        // onClick={() => setAdharVisible(!adharvisible)}
                        className="w-100 m-0"
                        color="info"
                        size="sm"
                        id="inputAddress"
                      >
                        <span
                          className="float-start"
                          onClick={() => setAdharVisible(!adharvisible)}
                        >
                          <i className="fa fa-eye" aria-hidden="true"></i> &nbsp;View
                        </span>
                        <span
                          className="float-end"
                          onClick={() => {
                            if (window.confirm('Are you sure to remove this file?')) {
                              setAdhardel(true)
                            }
                          }}
                        >
                          <i
                            className="fa fa-trash"
                            aria-hidden="true"
                            // onMouseOver={changeBackground}
                            // onMouseLeave={changeBackground1}
                          ></i>
                        </span>
                      </CButton>
                    </CCol>
                  )}
                  {adhardel && (
                    <CCol xs={12} md={3}>
                      <CFormLabel htmlFor="AadharCard">Aadhar Card*</CFormLabel>
                      <CFormInput type="file" name="AadharCard" size="sm" id="" />
                    </CCol>
                  )}
                  <CCol md={2}>
                    <CFormLabel htmlFor="DefectType">
                      Driver Name{' '}
                      {errors.DriverName && (
                        <span className="help text-danger">{errors.DriverName}</span>
                      )}
                    </CFormLabel>
                    <CFormSelect
                      size="sm"
                      name="DefectType"
                      onFocus={onFocus}
                      onBlur={onBlur}
                      onChange={handleChange}
                      value={values.DriverName}
                      className={`${errors.DriverName && 'is-invalid'}`}
                      aria-label="Small select example"
                    >
                      <option value="" hidden selected>
                        Select...
                      </option>
                      <option value="1">11111</option>
                      <option value="2">22222</option>
                      <option value="3">33333</option>
                    </CFormSelect>
                  </CCol>
                </CRow>

                <CRow className="mt-2" hidden>
                  <CCol xs={12} md={2}>
                    <CFormLabel
                      htmlFor="inputAddress"
                      style={{
                        backgroundColor: '#4d3227',
                        color: 'white',
                      }}
                    ></CFormLabel>
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Total Diesel Liter</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Average Rate Per Liter</CFormLabel>

                    <CFormInput size="sm" type="" id="inputAddress" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Total Diesel Amount</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" type="" value="" readOnly />
                  </CCol>
                </CRow>
                <hr />
                <CRow className="mt-2" hidden>
                  <CCol xs={12} md={3}>
                    <CFormLabel
                      htmlFor="inputAddress"
                      style={{
                        backgroundColor: '#4d3227',
                        color: 'white',
                      }}
                    >
                      Diesel Consumption & Runnnig KM :{' '}
                    </CFormLabel>
                  </CCol>
                </CRow>
                <CRow className="mt-2" hidden>
                  <CCol md={2}>
                    <CFormLabel htmlFor="DefectType">
                      Forward Journey Number{' '}
                      {errors.STONo && <span className="help text-danger">{errors.STONo}</span>}
                    </CFormLabel>
                    <CFormInput size="sm" id="inputAddress" value="15487126" readOnly />
                  </CCol>

                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Diesel Consumption QTY</CFormLabel>

                    <CFormInput size="sm" type="" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Average Rate/Liter</CFormLabel>

                    <CFormInput size="sm" type="" id="inputAddress" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Total Diesel Amount</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" type="" value="" readOnly />
                  </CCol>

                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Opening KM</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Closing KM</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Running KM</CFormLabel>

                    <CFormInput size="sm" htmlFor="inputAddress" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Load Tonnage</CFormLabel>

                    <CFormInput size="sm" htmlFor="inputAddress" readOnly />
                  </CCol>
                </CRow>
                <CRow className="mt-2" hidden>
                  <CCol md={2}>
                    <CFormLabel htmlFor="DefectType">
                      Return Journey Number{' '}
                      {errors.STONo && <span className="help text-danger">{errors.STONo}</span>}
                    </CFormLabel>
                    <CFormInput size="sm" id="inputAddress" value="15423426" readOnly />
                  </CCol>

                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Diesel Consumption QTY</CFormLabel>

                    <CFormInput size="sm" type="" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Average Rate/Liter</CFormLabel>

                    <CFormInput size="sm" type="" id="inputAddress" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Total Diesel Amount</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" type="" value="" readOnly />
                  </CCol>

                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Opening KM</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Closing KM</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Running KM</CFormLabel>

                    <CFormInput size="sm" htmlFor="inputAddress" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Load Tonnage</CFormLabel>

                    <CFormInput size="sm" htmlFor="inputAddress" readOnly />
                  </CCol>
                </CRow>
                <CRow className="mt-2" hidden>
                  <CCol md={2}>
                    <CFormLabel htmlFor="DefectType">
                      STO Delivery Number{' '}
                      {errors.STONo && <span className="help text-danger">{errors.STONo}</span>}
                    </CFormLabel>
                    <CFormInput size="sm" id="inputAddress" value="15487126" readOnly />
                  </CCol>

                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Diesel Consumption QTY</CFormLabel>

                    <CFormInput size="sm" type="" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Average Rate/Liter</CFormLabel>

                    <CFormInput size="sm" type="" id="inputAddress" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Total Diesel Amount</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" type="" value="" readOnly />
                  </CCol>

                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Opening KM</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Closing KM</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Running KM</CFormLabel>

                    <CFormInput size="sm" htmlFor="inputAddress" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Load Tonnage</CFormLabel>

                    <CFormInput size="sm" htmlFor="inputAddress" readOnly />
                  </CCol>
                </CRow>
              </CTabPane>
              <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey_2 === 6}>
                <CRow className="mt-2" hidden>
                  <CCol md={2}>
                    <CFormLabel htmlFor="DefectType">
                      Shipment Number{' '}
                      {errors.DriverName && (
                        <span className="help text-danger">{errors.DriverName}</span>
                      )}
                    </CFormLabel>
                    <CFormSelect
                      size="sm"
                      name="DefectType"
                      onFocus={onFocus}
                      onBlur={onBlur}
                      onChange={handleChange}
                      value={setSelectedDeliveryNumber}
                      className={`${errors.DriverName && 'is-invalid'}`}
                      aria-label="Small select example"
                    >
                      <option value="" hidden selected>
                        Select...
                      </option>
                      <option value="1">11111</option>
                      <option value="2">22222</option>
                      <option value="3">33333</option>
                    </CFormSelect>
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="DefectType">
                      Delivery Number{' '}
                      {errors.DriverName && (
                        <span className="help text-danger">{errors.DriverName}</span>
                      )}
                    </CFormLabel>
                    <CFormSelect
                      size="sm"
                      name="DefectType"
                      onFocus={onFocus}
                      onBlur={onBlur}
                      onChange={handleChange}
                      value={setSelectedDeliveryNumber}
                      className={`${errors.DriverName && 'is-invalid'}`}
                      aria-label="Small select example"
                    >
                      <option value="" hidden selected>
                        Select...
                      </option>
                      <option value="1">11111</option>
                      <option value="2">22222</option>
                      <option value="3">33333</option>
                    </CFormSelect>
                  </CCol>

                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="DefectType">
                      Return To{' '}
                      {errors.DriverName && (
                        <span className="help text-danger">{errors.DriverName}</span>
                      )}
                    </CFormLabel>
                    <CFormSelect
                      size="sm"
                      name="DefectType"
                      onFocus={onFocus}
                      onBlur={onBlur}
                      onChange={handleChange}
                      value={values.DriverName}
                      className={`${errors.DriverName && 'is-invalid'}`}
                      aria-label="Small select example"
                    >
                      <option value="" hidden selected>
                        Select...
                      </option>
                      <option value="1">NLFD</option>
                      <option value="2">NLFA</option>
                      <option value="3">NLCD</option>
                      <option value="4">NLMD</option>
                      <option value="5">NLDV</option>
                    </CFormSelect>
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Return QTY in Tons</CFormLabel>

                    <CFormInput size="sm" type="" id="inputAddress" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Return Rate Per Ton</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" type="" value="" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Return Freight Amount</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" type="" />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Diverted POD</CFormLabel>
                    <CFormInput type="file" name="fjPod1" size="sm" id="formFileSm" />

                    {/* <CFormInput size="sm" id="inputAddress" value=" " readOnly /> */}
                  </CCol>
                </CRow>
              </CTabPane>
              <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey_2 === 8}>
                <CRow className="mt-2" hidden>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="DefectType">
                      Gate Pass Type{' '}
                      {errors.DriverName && (
                        <span className="help text-danger">{errors.DriverName}</span>
                      )}
                    </CFormLabel>
                    <CFormSelect
                      size="sm"
                      name="DefectType"
                      onFocus={onFocus}
                      onBlur={onBlur}
                      onChange={handleChange}
                      value={values.DriverName}
                      className={`${errors.DriverName && 'is-invalid'}`}
                      aria-label="Small select example"
                    >
                      <option value="" hidden selected>
                        Select...
                      </option>
                      <option value="1">Returnable</option>
                      <option value="2">Non Returnable</option>
                    </CFormSelect>
                  </CCol>
                  <CCol md={2}>
                    <CFormLabel htmlFor="DefectType">
                      Gate Pass Number{' '}
                      {errors.DriverName && (
                        <span className="help text-danger">{errors.DriverName}</span>
                      )}
                    </CFormLabel>
                    <CFormSelect
                      size="sm"
                      name="DefectType"
                      onFocus={onFocus}
                      onBlur={onBlur}
                      onChange={handleChange}
                      value={values.DriverName}
                      className={`${errors.DriverName && 'is-invalid'}`}
                      aria-label="Small select example"
                    >
                      <option value="" hidden selected>
                        Select...
                      </option>
                      <option value="1">11111</option>
                      <option value="2">22222</option>
                      <option value="3">33333</option>
                    </CFormSelect>
                  </CCol>

                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">From Loacation</CFormLabel>

                    <CFormInput size="sm" type="" id="inputAddress" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">To Loacation</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" type="" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Freight Amount</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" type="" />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Attachment</CFormLabel>
                    <CFormInput type="file" name="fjPod1" size="sm" id="formFileSm" />

                    {/* <CFormInput size="sm" id="inputAddress" value=" " readOnly /> */}
                  </CCol>
                </CRow>
              </CTabPane>
              <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey_2 === 3}>
                <CTable caption="top" hover style={{ height: '150vh' }}>
                  <CTableCaption style={{ color: 'maroon' }}>Expenses</CTableCaption>
                  <br />
                  <CTableHead
                    style={{
                      backgroundColor: '#4d3227',
                      color: 'white',
                    }}
                  >
                    <CTableRow>
                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        S.No
                      </CTableHeaderCell>

                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        Type
                      </CTableHeaderCell>

                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        FJ Delivery
                      </CTableHeaderCell>

                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        RJ Delivery
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        STO Delivery
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        Total
                      </CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>

                  <CTableBody>
                    <CTableRow>
                      <CTableHeaderCell scope="row"></CTableHeaderCell>
                      <CTableDataCell>Division</CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" Value="NLFD" id="inputAddress" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" Value="NLFD" id="inputAddress" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" Value="NLFD" id="inputAddress" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" Value="NLFD" id="inputAddress" readOnly />
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">1</CTableHeaderCell>
                      <CTableDataCell>Halting Charges</CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                    </CTableRow>

                    <CTableRow>
                      <CTableHeaderCell scope="row">2</CTableHeaderCell>
                      <CTableDataCell>Toll Amount</CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" value="2500" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" value="2000" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" value="2500" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" value="2000" readOnly />
                      </CTableDataCell>
                    </CTableRow>

                    <CTableRow>
                      <CTableHeaderCell scope="row">3</CTableHeaderCell>
                      <CTableDataCell>Bata</CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                    </CTableRow>

                    <CTableRow>
                      <CTableHeaderCell scope="row">4</CTableHeaderCell>
                      <CTableDataCell>Municipal Charges</CTableDataCell>

                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                    </CTableRow>

                    <CTableRow>
                      <CTableHeaderCell scope="row">5</CTableHeaderCell>
                      <CTableDataCell>Registerd Diesel Amount</CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" readOnly />
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">6</CTableHeaderCell>
                      <CTableDataCell>Enroute Diesel Amount</CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" readOnly />
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">7</CTableHeaderCell>
                      <CTableDataCell>Port Entry Fee</CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                    </CTableRow>

                    <CTableRow>
                      <CTableHeaderCell scope="row">8</CTableHeaderCell>
                      <CTableDataCell>Misc Charges</CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                    </CTableRow>

                    <CTableRow>
                      <CTableHeaderCell scope="row">9</CTableHeaderCell>
                      <CTableDataCell>Fine Amount</CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                    </CTableRow>

                    <CTableRow>
                      <CTableHeaderCell scope="row">10</CTableHeaderCell>
                      <CTableDataCell>Subdelivery Charges</CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                    </CTableRow>

                    <CTableRow>
                      <CTableHeaderCell scope="row">11</CTableHeaderCell>
                      <CTableDataCell>Maintenance Cost</CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                    </CTableRow>

                    <CTableRow>
                      <CTableHeaderCell scope="row">12</CTableHeaderCell>
                      <CTableDataCell>Loading Charges</CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">13</CTableHeaderCell>
                      <CTableDataCell>Unloading Charges</CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" readOnly />
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">14</CTableHeaderCell>
                      <CTableDataCell>Tarpaulin Charges</CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                    </CTableRow>

                    <CTableRow>
                      <CTableHeaderCell scope="row">15</CTableHeaderCell>
                      <CTableDataCell>Weighment Charges</CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                    </CTableRow>

                    <CTableRow>
                      <CTableHeaderCell scope="row">16</CTableHeaderCell>
                      <CTableDataCell>Low Tonage Charges </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">16</CTableHeaderCell>
                      <CTableDataCell>Stock Diversion / Return Charges* </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" readOnly />
                      </CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                </CTable>
                <CTable caption="top" hover style={{ height: '30vh' }}>
                  <CTableCaption style={{ color: 'maroon' }}>Income</CTableCaption>
                  <CTableHead style={{ backgroundColor: '#4d3227', color: 'white' }}>
                    <CTableRow>
                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        S.No
                      </CTableHeaderCell>

                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        Type
                      </CTableHeaderCell>

                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        FJ Delivery
                      </CTableHeaderCell>

                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        RJ Delivery
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        STO Delivery
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        Total
                      </CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>

                  <CTableBody>
                    <CTableRow>
                      <CTableHeaderCell scope="row">1</CTableHeaderCell>
                      <CTableDataCell>Base Freight</CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" value="Auto" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" value="Auto" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" value="Auto" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" value="Auto" readOnly />
                      </CTableDataCell>
                    </CTableRow>

                    <CTableRow>
                      <CTableHeaderCell scope="row">2</CTableHeaderCell>
                      <CTableDataCell>Additional Freight</CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                </CTable>
                <CTable caption="top" hover style={{ height: '40vh' }}>
                  <CTableCaption style={{ color: 'maroon' }}>Profit and Loss</CTableCaption>
                  <CTableHead style={{ backgroundColor: '#4d3227', color: 'white' }}>
                    <CTableRow>
                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        S.No
                      </CTableHeaderCell>

                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        Type
                      </CTableHeaderCell>

                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        FJ Delivery
                      </CTableHeaderCell>

                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        RJ Delivery
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        STO Delivery
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        Total
                      </CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    <CTableRow>
                      <CTableHeaderCell scope="row">1</CTableHeaderCell>
                      <CTableDataCell>Expense</CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" readOnly />
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">2</CTableHeaderCell>
                      <CTableDataCell>Income</CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" readOnly />
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">3</CTableHeaderCell>
                      <CTableDataCell>Profit and Loss</CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" value="Auto" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" value="Auto" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" value="Auto" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" value="Auto" readOnly />
                      </CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                </CTable>
                <CTable caption="top" hover style={{ height: '40vh' }}>
                  <CTableCaption style={{ color: 'maroon' }}>Others</CTableCaption>
                  <CTableHead style={{ backgroundColor: '#4d3227', color: 'white' }}>
                    <CTableRow>
                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        S.No
                      </CTableHeaderCell>

                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        Type
                      </CTableHeaderCell>

                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        FJ Delivery
                      </CTableHeaderCell>

                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        RJ Delivery
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        STO Delivery
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        Total
                      </CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>

                  <CTableBody>
                    <CTableRow>
                      <CTableHeaderCell scope="row">1</CTableHeaderCell>
                      <CTableDataCell>Halt Days*</CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput size="sm" id="inputAddress" />
                      </CTableDataCell>
                    </CTableRow>

                    <CTableRow>
                      <CTableHeaderCell scope="row">2</CTableHeaderCell>
                      <CTableDataCell>Attachment 1</CTableDataCell>
                      <CTableDataCell>
                        <CFormInput type="file" name="divortedPod" size="sm" id="formFileSm" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput type="file" name="divortedPod" size="sm" id="formFileSm" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput type="file" name="divortedPod" size="sm" id="formFileSm" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput type="file" name="divortedPod" size="sm" id="formFileSm" />
                      </CTableDataCell>
                    </CTableRow>

                    <CTableRow>
                      <CTableHeaderCell scope="row">3</CTableHeaderCell>
                      <CTableDataCell>Attachment 2</CTableDataCell>
                      <CTableDataCell>
                        <CFormInput type="file" name="divortedPod" size="sm" id="formFileSm" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput type="file" name="divortedPod" size="sm" id="formFileSm" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput type="file" name="divortedPod" size="sm" id="formFileSm" />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput type="file" name="divortedPod" size="sm" id="formFileSm" />
                      </CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                </CTable>
              </CTabPane>
              <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey_2 === 7}>
                <CTable caption="top" hover>
                  <CTableHead style={{ backgroundColor: '#4d3227', color: 'white' }}>
                    <CTableRow>
                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        S.No
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        Type
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        FJ Delivery
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        RJ Delivery
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        STO Delivery
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col" style={{ color: 'white' }}>
                        Total
                      </CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>

                  <CTableBody>
                    <CTableRow>
                      <CTableHeaderCell scope="row">1</CTableHeaderCell>
                      <CTableDataCell>Advance Amount</CTableDataCell>
                      <CTableDataCell>
                        <CFormInput type="" name="divortedPod" size="sm" id="formFileSm" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput type="" name="divortedPod" size="sm" id="formFileSm" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput type="" name="divortedPod" size="sm" id="formFileSm" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput type="" name="divortedPod" size="sm" id="formFileSm" readOnly />
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">2</CTableHeaderCell>
                      <CTableDataCell>RJ Recipt Amount</CTableDataCell>
                      <CTableDataCell>
                        <CFormInput type="" name="divortedPod" size="sm" id="formFileSm" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput type="" name="divortedPod" size="sm" id="formFileSm" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput type="" name="divortedPod" size="sm" id="formFileSm" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput type="" name="divortedPod" size="sm" id="formFileSm" readOnly />
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">3</CTableHeaderCell>
                      <CTableDataCell>Total Amount</CTableDataCell>
                      <CTableDataCell>
                        <CFormInput type="" name="divortedPod" size="sm" id="formFileSm" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput type="" name="divortedPod" size="sm" id="formFileSm" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput type="" name="divortedPod" size="sm" id="formFileSm" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput type="" name="divortedPod" size="sm" id="formFileSm" readOnly />
                      </CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                      <CTableHeaderCell scope="row">4</CTableHeaderCell>
                      <CTableDataCell>Balance</CTableDataCell>
                      <CTableDataCell>
                        <CFormInput type="" name="divortedPod" size="sm" id="formFileSm" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput type="" name="divortedPod" size="sm" id="formFileSm" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput type="" name="divortedPod" size="sm" id="formFileSm" readOnly />
                      </CTableDataCell>
                      <CTableDataCell>
                        <CFormInput type="" name="divortedPod" size="sm" id="formFileSm" readOnly />
                      </CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                </CTable>
                <CRow className="mt-2">
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="remarks">Remarks*</CFormLabel>
                    <CFormTextarea
                      name="remarks"
                      id="exampleFormControlTextarea1"
                      rows="1"
                    ></CFormTextarea>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol
                    className="offset-md-9"
                    xs={12}
                    sm={12}
                    md={3}
                    // style={{ display: 'flex', justifyContent: 'space-between' }}
                    style={{ display: 'flex', flexDirection: 'row-reverse', cursor: 'pointer' }}
                  >
                    <CButton
                      size="sm"
                      color="warning"
                      // disabled={enableSubmit}
                      className="mx-3 text-white"
                      // className="align-self-end ml-auto"
                      type="submit"
                    >
                      Close Tripsheet
                    </CButton>
                  </CCol>
                </CRow>
              </CTabPane>
            </CTabContent>
          </CTabPane>
        </CTabContent>
      </CCard>
    </>
  )
}
export default TSClossure
