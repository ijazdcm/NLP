/* eslint-disable prettier/prettier */
import CIcon from '@coreui/icons-react'
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
import { cilInput, cilDescription, cilCheckCircle, cilCog } from '@coreui/icons'

import { React, useState } from 'react'
import useForm from 'src/Hooks/useForm.js'
import validate from 'src/Utils/Validation'
import CustomTable from '../../components/customComponent/CustomTable'
import { Link } from 'react-router-dom'

const FIScreen = () => {
  const formValues = {
    vNum: '',
    tripNum: '',
    docNum: '',
    docType: '',
    internalNum: '',
    amount: '',
    narration: '',
    division: '',
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
          <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={true}>
            <CForm className="container p-3" onSubmit={handleSubmit}>
              <CRow className="">
                <CCol
                  className=""
                  xs={12}
                  sm={12}
                  md={12}
                  style={{ display: 'flex', justifyContent: 'flex-end' }}
                >
                  <CButton
                    size="sm"
                    // disabled={enableSubmit}
                    color="warning"
                    className="px-3 text-white"
                    type="submit"
                  >
                    Import File
                  </CButton>
                </CCol>
              </CRow>
              <CRow className="">
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="vNum">
                    Vehicle Number*{' '}
                    {errors.vNum && <span className="small text-danger">{errors.vNum}</span>}
                  </CFormLabel>
                  <CFormSelect
                    size="sm"
                    id="vNum"
                    className={`${errors.vNum && 'is-invalid'}`}
                    name="vNum"
                    value={values.vNum || ''}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                  >
                    <option value={''} hidden selected>
                      Select...
                    </option>
                    <option value="0">TN57AT5467</option>
                    <option value="1">TN57AT2123</option>
                  </CFormSelect>
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="tripNum">
                    Trip Sheet Number*{' '}
                    {errors.tripNum && <span className="small text-danger">{errors.tripNum}</span>}
                  </CFormLabel>
                  <CFormSelect
                    size="sm"
                    id="tripNum"
                    className={`${errors.tripNum && 'is-invalid'}`}
                    name="tripNum"
                    value={values.tripNum || ''}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                  >
                    <option value={''} hidden selected>
                      Select...
                    </option>
                    <option value="0">OMD051221021</option>
                    <option value="1">CTT111221121</option>
                  </CFormSelect>
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="docNum">
                    Document Number*{' '}
                    {errors.docNum && <span className="small text-danger">{errors.docNum}</span>}
                  </CFormLabel>
                  <CFormSelect
                    size="sm"
                    id="docNum"
                    className={`${errors.docNum && 'is-invalid'}`}
                    name="docNum"
                    value={values.docNum || ''}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                  >
                    <option hidden>Select...</option>
                    <option value="0">673246</option>
                    <option value="1">684365</option>
                  </CFormSelect>
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="docType">Document Type* </CFormLabel>
                  <CFormInput type="text" name="docType" size="sm" id="docType" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="internalNum">
                    Internal Order Number*{' '}
                    {errors.internalNum && (
                      <span className="small text-danger">{errors.internalNum}</span>
                    )}
                  </CFormLabel>
                  <CFormSelect
                    size="sm"
                    id="internalNum"
                    className={`${errors.internalNum && 'is-invalid'}`}
                    name="internalNum"
                    value={values.internalNum || ''}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                  >
                    <option hidden>Select...</option>
                    <option value="0">8346366364</option>
                    <option value="1">1267542324</option>
                  </CFormSelect>
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="amount">
                    Amount*{' '}
                    {errors.amount && <span className="small text-danger">{errors.amount}</span>}
                  </CFormLabel>
                  <CFormInput
                    type="text"
                    size="sm"
                    id="amount"
                    className={`${errors.amount && 'is-invalid'}`}
                    name="amount"
                    value={values.amount || ''}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                  />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="narration">
                    Narration*{' '}
                    {errors.narration && (
                      <span className="small text-danger">{errors.narration}</span>
                    )}
                  </CFormLabel>
                  <CFormInput
                    type="text"
                    size="sm"
                    id="narration"
                    className={`${errors.narration && 'is-invalid'}`}
                    name="narration"
                    value={values.narration || ''}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                  />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="division">Division*</CFormLabel>
                  <CFormInput type="text" name="division" size="sm" id="division" readOnly />
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
                    // disabled={enableSubmit}
                    color="warning"
                    className="px-3 text-white"
                    type="submit"
                  >
                    Submit
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

export default FIScreen
