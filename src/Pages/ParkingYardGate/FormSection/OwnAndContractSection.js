import { CCol, CFormInput, CFormLabel, CFormSelect } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import ParkingYardGateService from "src/Service/ParkingYardGate/ParkingYardGateService"
const OwnAndContractSection = ({errors,onFocus,onBlur,handleChange,values}) => {


  const [vehicleByType, setVehicleByType] = useState([])

  useEffect(()=>{

    ParkingYardGateService.getVehiclebyType(values.vehicleType).then(res=>{

      setVehicleByType(res.data.data)

    })

  },[values.vehicleType])


  return (
    <>
      <CCol xs={12} md={3}>
        <CFormLabel htmlFor="vNum">
          Vehicle Number*
          {errors.vNum && <span className="small text-danger">{errors.vNum}</span>}
        </CFormLabel>
        <CFormSelect
          size="sm"
          name="vNum"
          id="vNum"
          maxLength={10}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={handleChange}
          value={values.vNum || ''}
          className={`${errors.vNum && 'is-invalid'}`}
          aria-label="Small select example"
        >
          <option value="" hidden selected>
            Select...
          </option>
          {vehicleByType.map(({ vehicle_id, vehicle_number }) => {
                    return (
                      <>
                        <option key={vehicle_id} value={vehicle_id}>
                          {vehicle_number}
                        </option>
                      </>
                    )
                  })}
        </CFormSelect>
      </CCol>

      <CCol xs={12} md={3}>
        <CFormLabel htmlFor="vCap">Vehicle Capacity In MTS*</CFormLabel>
        <CFormInput size="sm" id="vCap" name="vCap" value={values.vCap} readOnly />
      </CCol>

      <CCol xs={12} md={3}>
        <CFormLabel htmlFor="dName">
          Driver Name* {errors.dName && <span className="small text-danger">{errors.dName}</span>}
        </CFormLabel>
        <CFormSelect
          size="sm"
          name="dName"
          id="dName"
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={handleChange}
          value={values.dName || ''}
          className={`${errors.dName && 'is-invalid'}`}
          aria-label="Small select example"
        >
          <option hidden selected>
            Select...
          </option>
          <option value="1">Kumar</option>
          <option value="2">Kannan</option>
        </CFormSelect>
      </CCol>

      <CCol xs={12} md={3}>
        <CFormLabel htmlFor="dNum">
          Driver Contact Number*
          {errors.dNum && <span className="small text-danger">{errors.dNum}</span>}
        </CFormLabel>
        <CFormInput
          size="sm"
          name="dNum"
          maxLength={10}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={handleChange}
          value={values.dNum || ''}
        />
      </CCol>

      <CCol xs={12} md={3}>
        <CFormLabel htmlFor="odoKm">
          Odometer KM* {errors.odoKm && <span className="small text-danger">{errors.odoKm}</span>}
        </CFormLabel>
        <CFormInput
          size="sm"
          name="odoKm"
          id="odoKm"
          maxLength={6}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={handleChange}
          value={values.odoKm || ''}
        />
      </CCol>

      <CCol xs={12} md={3}>
        <CFormLabel htmlFor="odoImg">
          Odometer Photo*{' '}
          {errors.odoImg && <span className="small text-danger">{errors.odoImg}</span>}
        </CFormLabel>
        <CFormInput
          type="file"
          name="odoImg"
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={handleChange}
          value={values.odoImg}
          className={`${errors.odoImg && 'is-invalid'}`}
          size="sm"
          id="odoImg"
        />
      </CCol>
    </>
  )
}

export default OwnAndContractSection
