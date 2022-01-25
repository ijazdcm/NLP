// Created By Mariavanaraj
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
  CModalFooter,
  CAlert,
} from '@coreui/react'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useForm from 'src/Hooks/useForm'
import validate from 'src/Utils/Validation'
import CustomTable from 'src/components/customComponent/CustomTable'
// import DivisionApi from '../../../Services/SubMaster/DivisionApi'
import PreviousLoadDetailsApi from 'src/services/SubMaster/PreviousLoadDetailsApi'

const PreviousLoadDetails = () => {
  const [modal, setModal] = useState(false)
  const [rowData, setRowData] = useState([])
  const [save, setSave] = useState(true)
  const [success, setSuccess] = useState('')
  const [editId, setEditId] = useState('')
  const [update, setUpdate] = useState('')
  const [deleted, setDeleted] = useState('')
  const [error, setError] = useState('')

  const formValues = {
    PreviousLoadDetails: '',
  }
  // =================== Validation ===============
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
  // =================== Validation ===============

  /*                    */

  // =================== CRUD =====================
  const Create = (e) => {
    e.preventDefault()
    let createValues = { previous_load_details: values.previous_load_details }
    PreviousLoadDetailsApi.createPreviousLoadDetails(createValues)
      .then((response) => {
        setSuccess('New Previous Load Details Added Successfully')
      })
      .catch((error) => {
        setError(error.response.data.errors.previous_load_details[0])
      })
  }

  const Edit = (id) => {
    setSave(false)
    setEditId('')
    PreviousLoadDetailsApi.getPreviousLoadDetailsById(id).then((response) => {
      let editData = response.data.data
      setModal(true)
      values.previous_load_details = editData.previous_load_details
      setEditId(id)
    })
  }

  const Update = (id) => {
    let updateValues = { previous_load_details: values.previous_load_details }
    console.log(updateValues, id)
    PreviousLoadDetailsApi.updatePreviousLoadDetails(updateValues, id)
      .then((response) => {
        setSuccess('Previous Load Details Updated Successfully')
      })
      .catch((error) => {
        setError(error.response.data.errors.previous_load_details[0])
      })
  }

  const Delete = (id) => {
    alert('Are you Sure ?')
    PreviousLoadDetailsApi.deletePreviousLoadDetails(id).then((response) => {
      setDeleted('PreviousLoadDetails Removed Successfully')
      alert(deleted)
    })
  }

  useEffect(() => {
    PreviousLoadDetailsApi.getPreviousLoadDetails().then((response) => {
      let viewData = response.data.data
      let rowDataList = []
      viewData.map((data, index) => {
        rowDataList.push({
          sno: index + 1,
          PreviousLoadDetails: data.previous_load_details,
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
  // ============ CRUD =====================
  /*                    */
  // ============ Column Header Data =======
  const columns = [
    {
      name: 'S.No',
      selector: (row) => row.sno,
      sortable: true,
      center: true,
    },

    {
      name: 'PreviousLoadDetails',
      selector: (row) => row.PreviousLoadDetails,
      sortable: true,
      left: true,
    },

    {
      name: 'Action',
      selector: (row) => row.Action,
      center: true,
    },
  ]
  // =================== Column Header Data =======

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
              onClick={() => setModal(!modal)}
            >
              <span className="float-start">
                <i className="" aria-hidden="true"></i> &nbsp;New
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
          <CModalTitle>Previous Load Details</CModalTitle>
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

              <CFormLabel htmlFor="previous_load_details">
              Previous Load Details*{' '}
                {errors.previous_load_details && <span className="small text-danger">{errors.previous_load_details}</span>}
              </CFormLabel>
              <CFormInput
                size="sm"
                id="previous_load_details"
                maxLength={40}
                className={`${errors.previous_load_details && 'is-invalid'}`}
                name="previous_load_details"
                value={values.previous_load_details || ''}
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={handleChange}
                aria-label="Small select example"
              />
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

export default PreviousLoadDetails

// {
//   name: 'Creation Date',
//   selector: (row) => row.Creation_Date,
//   sortable: true,
//   center: true,
// },

// {
//   name: 'Status',
//   selector: (row) => row.Status,
//   center: true,
// },
