// Created By Alwin
import {
  CForm,
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
  CInputGroupText,
  CFormCheck,
  CModalFooter,
  CAlert,
} from '@coreui/react'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useForm from 'src/Hooks/useForm'
import validate from 'src/Utils/Validation'
import CustomTable from 'src/components/customComponent/CustomTable'
import MaterialDescriptionApi from 'src/services/SubMaster/MaterialDescriptionApi'

const MaterialDescriptionTable = () => {
  const [modal, setModal] = useState(false)
  const [radio, setRadio] = useState(false)
  const [rowData, setRowData] = useState([])
  const [save, setSave] = useState(true)
  const [success, setSuccess] = useState('')
  const [editId, setEditId] = useState('')
  const [update, setUpdate] = useState('')
  const [deleted, setDeleted] = useState('')
  const [error, setError] = useState('')

  const checkRadio = (param) => {
    if (param == 'enab') {
      values.material_description = ''
      setRadio(false)
      setModal(!modal)
    } else {
      setModal(true)
      setRadio(true)
    }
  }

  const formValues = {
    material_description: '',
  }

  const {
    values,
    errors,
    handleChange,
    onFocus,
    handleSubmit,
    enableSubmit,
    onBlur,
    onClick,
    onKeyUp,
  } = useForm(login, validate, formValues)

  function login() {
    // alert('No Errors CallBack Called')
  }

  const Create = (e) => {
    e.preventDefault()
    let createValues = { material_description: values.material_description }
    MaterialDescriptionApi.createMaterialDescription(createValues)
      .then((response) => {
        setSuccess('New Material Description Added Successfully')
      })
      .catch((error) => {
        setError(error.response.data.errors.material_description[0])
      })
  }

  const Edit = (id) => {
    setSave(false)
    setEditId('')
    MaterialDescriptionApi.getMaterialDescriptionById(id).then((response) => {
      let editData = response.data.data
      // setModal(true)
      checkRadio('unab')
      values.material_description = editData.material_description
      values.material_description_status = editData.status
      if (editData.status == '1') {
        document.getElementById('mds_1').checked = true
      } else {
        document.getElementById('mds_0').checked = true
      }
      setEditId(id)
    })
  }

  const Update = (id) => {
    let updateValues = {
      material_description: values.material_description,
      material_description_status: parseInt(values.material_description_status),
    }
    console.log(updateValues, id)
    MaterialDescriptionApi.updateMaterialDescription(updateValues, id)
      .then((response) => {
        setSuccess('Material Description Updated Successfully')
      })
      .catch((error) => {
        setError(error.response.data.errors.material_description[0])
      })
  }

  const Delete = (id) => {
    if (confirm('Are you sure to delete?') == true) {
      MaterialDescriptionApi.deleteMaterialDescription(id).then((response) => {
        setDeleted('Material Description Removed Successfully')
      })
    }
  }

  useEffect(() => {
    MaterialDescriptionApi.getMaterialDescription().then((response) => {
      let viewData = response.data.data
      let rowDataList = []
      viewData.map((data, index) => {
        rowDataList.push({
          sno: index + 1,
          // CreationDate: data.creation_date,
          CreationDate: data.creation_date.substring(0, 10),
          MaterialDescription: data.material_description,
          Status: (
            <span className="badge rounded-pill bg-info">
              {data.status == '1' ? 'Active' : 'In Active'}
            </span>
          ),
          // data.status,
          Action: (
            <div className="d-flex justify-content-space-between">
              <CButton
                size="sm"
                color="danger"
                shape="rounded"
                id={data.id}
                onClick={() => Delete(data.id)}
                className="m-1"
              >
                {/* Delete */}
                <i className="fa fa-trash" aria-hidden="true"></i>
              </CButton>
              <CButton
                size="sm"
                color="secondary"
                shape="rounded"
                id={data.id}
                onClick={() => Edit(data.id)}
                className="m-1"
              >
                {/* Edit */}
                <i className="fa fa-edit" aria-hidden="true"></i>
              </CButton>
            </div>
          ),
        })
      })
      setRowData(rowDataList)

      setTimeout(() => {
        setSuccess('')
        setUpdate('')
        setError('')
        setDeleted('')
      }, 1500)
    })
  }, [modal, save, success, update, deleted])

  const columns = [
    {
      name: 'S.No',
      selector: (row) => row.sno,
      sortable: true,
      center: true,
    },
    {
      name: 'Creation Date',
      selector: (row) => row.CreationDate,
      sortable: true,
      center: true,
    },
    {
      name: 'Material Description',
      selector: (row) => row.MaterialDescription,
      sortable: true,
      left: true,
    },
    {
      name: 'Status',
      selector: (row) => row.Status,
      center: true,
    },
    {
      name: 'Action',
      selector: (row) => row.Action,
      center: true,
    },
  ]

  return (
    <>
      <CContainer className="mt-2">
        <CRow className="mt-3">
          <CCol
            className="offset-md-6"
            xs={15}
            sm={15}
            md={6}
            style={{ display: 'flex', justifyContent: 'end' }}
          >
            <CButton
              size="md"
              color="warning"
              className="px-3 text-white"
              onClick={() => checkRadio('enab')}
              // onClick={() => setModal(!modal)}
            >
              <span className="float-start">
                <i className="" aria-hidden="true"></i> &nbsp;New Material Description
              </span>
            </CButton>
          </CCol>
        </CRow>

        <CCard className="mt-3">
          <CustomTable columns={columns} data={rowData || ''} />
        </CCard>
      </CContainer>

      {/* Modal Section */}
      <CModal visible={modal} onClose={() => setModal(false)}>
        <CModalHeader>
          <CModalTitle>Material Description</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow>
            <CCol>
              {update && (
                <CAlert color="primary" dismissible>
                  {update}
                </CAlert>
              )}
              {success && (
                <CAlert color="success" dismissible>
                  {success}
                </CAlert>
              )}
              {error && (
                <CAlert color="danger" dismissible>
                  {error}
                </CAlert>
              )}

              <CFormLabel htmlFor="material_description">
                MaterialDescription*{' '}
                {errors.material_description && (
                  <span className="small text-danger">{errors.material_description}</span>
                )}
              </CFormLabel>
              <CFormInput
                size="sm"
                id="material_description"
                maxLength={20}
                className={`${errors.material_description && 'is-invalid'}`}
                name="material_description"
                value={values.material_description || ''}
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={handleChange}
                aria-label="Small select example"
              />

              {radio && (
                <div className="mt-2">
                  <CFormLabel htmlFor="material_description_status">
                    Material Description Status*{' '}
                    {/* {errors.material_description && (
                  <span className="small text-danger">{errors.material_description}</span>
                )} */}
                  </CFormLabel>
                  {/* <div style={{ display: 'flex' }}> */}
                  <CFormCheck
                    type="radio"
                    size="sm"
                    value="1"
                    id="mds_1"
                    name="material_description_status"
                    label="Active"
                    onChange={handleChange}
                    defaultChecked={false}
                  />
                  <CFormCheck
                    type="radio"
                    size="sm"
                    value="0"
                    id="mds_0"
                    name="material_description_status"
                    label="In Active"
                    onChange={handleChange}
                    defaultChecked={false}
                  />
                  {/* </div> */}
                </div>
              )}
            </CCol>
          </CRow>
        </CModalBody>
        <CModalFooter>
          <CButton onClick={(e) => (save ? Create(e) : Update(editId))} color="primary">
            {save ? 'Save' : 'Update'}
          </CButton>
        </CModalFooter>
      </CModal>
      {/* Modal Section */}
    </>
  )
}

export default MaterialDescriptionTable
