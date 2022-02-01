import { CCol, CFormInput, CFormLabel, CFormSelect } from '@coreui/react'
import React from 'react'
const PartySection = ({errors,onFocus,onBlur,handleChange,values}) => {
  return (
    <>
      <CCol xs={12} md={3}>
        <CFormLabel htmlFor="vNum">
          Vehicle Number*
          {errors.vNum && <span className="small text-danger">{errors.vNum}</span>}
        </CFormLabel>
        <CFormInput
          size="sm"
          name="vNum"
          id="vNum"
          maxLength={10}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={handleChange}
          value={values.vNum}
        />
      </CCol>

      <CCol xs={12} md={3}>
        <CFormLabel htmlFor="pName">
          Party Name*
          {errors.pName && <span className="small text-danger">{errors.pName}</span>}
        </CFormLabel>
        <CFormInput
          size="sm"
          name="pName"
          id="pName"
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={handleChange}
          value={values.pName}
        />
      </CCol>

      <CCol xs={12} md={3}>
        <CFormLabel htmlFor="vCap">
          Vehicle Capacity In MTS*{' '}
          {errors.vCap && <span className="small text-danger">{errors.vCap}</span>}
        </CFormLabel>
        <CFormSelect
          size="sm"
          name="vCap"
          className=""
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={handleChange}
          aria-label="Small select example"
        >
          <option value="" hidden selected>
            Select...
          </option>
          <option value="10">10</option>
          <option value="12">12</option>
          <option value="19">19</option>
          <option value="25">25</option>
          <option value="30">30</option>
        </CFormSelect>
      </CCol>

      <CCol xs={12} md={3}>
        <CFormLabel htmlFor="dName">
          Driver Name* {errors.dName && <span className="small text-danger">{errors.dName}</span>}
        </CFormLabel>
        <CFormInput
          size="sm"
          name="dName"
          id="dName"
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={handleChange}
          value={values.dName}
        />
      </CCol>

      <CCol xs={12} md={3}>
        <CFormLabel htmlFor="dNum">
          Driver Contact Number*{' '}
          {errors.dNum && <span className="small text-danger">{errors.dNum}</span>}
        </CFormLabel>
        <CFormInput
          size="sm"
          name="dNum"
          id="dNum"
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={handleChange}
          value={values.dNum}
        />
      </CCol>

      <CCol xs={12} md={3}>
        <CFormLabel htmlFor="vBody">
          Vehicle Body*
          {errors.vBody && <span className="small text-danger">{errors.vBody}</span>}
        </CFormLabel>
        <CFormSelect
          size="sm"
          name="vBody"
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={handleChange}
          className=""
          aria-label="Small select example"
        >
          <option hidden>Select...</option>
          <option value="1">Open</option>
          <option value="2">Closed</option>
        </CFormSelect>
      </CCol>
    </>
  )
}

export default PartySection
