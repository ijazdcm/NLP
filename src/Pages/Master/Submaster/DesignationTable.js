import {
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
import React, { useState, useEffect, useReducer } from 'react'
import { Link } from 'react-router-dom'
import useForm from 'src/Hooks/useForm'
import validate from 'src/Utils/Validation'
import CustomTable from 'src/components/customComponent/CustomTable'
import DesignationApi from '../../../Services/SubMaster/DesignationApi'
const DesignationTable = () => {
  const initialState = {
    modal: false,
    deleteModal: false,
    rowData: [],
    save: true,
    success: '',
    editId: '',
    deleteId: '',
    update: '',
    deleted: '',
    error: '',
  }
  const [state, setState] = useReducer(
    (state, updates) => ({
      ...state,
      ...updates,
    }),
    initialState
  )

  const formValues = {
    designation: '',
  }

  // Designation
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
    let createValues = { designation_name: values.designation }
    DesignationApi.createDivision(createValues)
      .then((response) => {
        // setSuccess('New Division Added Successfully')
        setState({ success: 'New Division Added Successfully' })
      })
      .catch((error) => {
        setState({ error: error.response.data.errors.designation_name[0] })
        setTimeout(() => {
          setState({ error: '' })
          // setError('')
        }, 1000)
      })
  }

  const Edit = (id) => {
    // setSave(false)
    // setEditId('')
    setState({ save: false, editId: '' })
    DesignationApi.getDivisionById(id).then((response) => {
      let editData = response.data.data
      setState({ modal: '' })
      // setModal(true)
      values.designation = editData.designation
      // setEditId(id)
      setState({ editId: id })
    })
  }

  const Update = (id) => {
    let updateValues = { designation_name: values.designation }
    console.log(updateValues, id)
    DesignationApi.updateDivision(updateValues, id)
      .then((response) => {
        // setSuccess('Division Updated Successfully')
        setState({ success: 'Division Updated Successfully' })
      })
      .catch((error) => {
        // setError(error.response.data.errors.designation_name[0])
        setState({ error: error.response.data.errors.designation_name[0] })
        setTimeout(() => {
          setState({ error: '' })
          // setError('')
        }, 1000)
      })
  }

  const Delete = () => {
    DesignationApi.deleteDivision(initialState.deleteId).then((response) => {
      // setDeleted('Division Removed Successfully')
      // setDeleteId('')
      setState({ deleted: 'Division Removed Successfully' })
      setState({ deleteId: '' })
    })
    // setTimeout(() => setDeleteModal(false), 500)
    setTimeout(() => setState({ deleteModal: false }), 500)
  }

  useEffect(() => {
    DesignationApi.getDesignation().then((response) => {
      let viewData = response.data.data
      let rowDataList = []
      viewData.map((data, index) => {
        rowDataList.push({
          sno: index + 1,
          Designation: data.designation,
          Action: (
            <div className="d-flex justify-content-space-between">
              <CButton
                size="sm"
                color="danger"
                shape="rounded"
                id={data.id}
                onClick={() => {
                  // setDeleteId(data.id)
                  // setDeleteModal(true)
                  setState({ deleteId: data.id })
                  setState({ deleteModal: true })
                }}
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
      // setRowData(rowDataList)

      setState({ rowData: rowDataList })

      // console.log(rowDataList)
      console.log(initialState.rowData)

      setTimeout(() => {
        // setSuccess('')
        // setUpdate('')
        // setDeleted('')
        setState({ success: '', update: '', deleted: '' })
      }, 1500)
    })
  }, [
    initialState.modal,
    initialState.save,
    initialState.success,
    initialState.update,
    initialState.deleted,
  ])

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
      name: 'Designation',
      selector: (row) => row.Designation,
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
              onClick={() => {
                values.designation = ''
                setState({ success: '', update: '', deleted: '', error: '', modal: false })
                // setSuccess('')
                // setUpdate('')
                // setError('')
                // setDeleted('')
                // setModal(!modal)
              }}
            >
              <span className="float-start">
                <i className="" aria-hidden="true"></i> &nbsp;New
              </span>
            </CButton>
          </CCol>
        </CRow>
        <CCard className="mt-1">
          <CustomTable columns={columns} data={initialState.rowData || ''} />
        </CCard>
      </CContainer>

      {/* View & Edit Modal Section */}
      <CModal visible={initialState.modal} onClose={() => setState({ modal: false })}>
        <CModalHeader>
          <CModalTitle>Division</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow>
            <CCol>
              {initialState.update && (
                <CAlert color="primary" data-aos="fade-down" dismissible>
                  {initialState.update}
                </CAlert>
              )}
              {initialState.success && (
                <CAlert color="success" data-aos="fade-down" dismissible>
                  {initialState.success}
                </CAlert>
              )}
              {initialState.error && (
                <CAlert color="danger" data-aos="fade-down" dismissible>
                  {initialState.error}
                </CAlert>
              )}

              <CFormLabel htmlFor="designation">
                Division*{' '}
                {errors.designation && (
                  <span className="small text-danger">{errors.designation}</span>
                )}
              </CFormLabel>
              <CFormInput
                size="sm"
                id="designation"
                maxLength={4}
                className={`${errors.designation && 'is-invalid'}`}
                name="designation"
                value={values.designation || ''}
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={handleChange}
                aria-label="Small select example"
              />
            </CCol>
          </CRow>
        </CModalBody>
        <CModalFooter>
          <CButton
            onClick={(e) => (initialState.save ? Create(e) : Update(initialState.editId))}
            color="primary"
          >
            {initialState.save ? 'Save' : 'Update'}
          </CButton>
        </CModalFooter>
      </CModal>
      {/* View & Edit Modal Section */}

      {/* Delete Modal Section */}
      <CModal visible={initialState.deleteModal} onClose={() => setState({ deleteModal: false })}>
        <CModalHeader>
          <CModalTitle className="h4">Confirm To Delete</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow>
            <CCol>
              <CFormLabel htmlFor="designation">Are you sure want to Delete </CFormLabel>
            </CCol>
          </CRow>
          {initialState.deleted && (
            <CAlert color="danger" dismissible>
              {initialState.deleted}
            </CAlert>
          )}
        </CModalBody>
        <CModalFooter>
          <CButton onClick={() => Delete()} color="danger">
            YES
          </CButton>
          <CButton onClick={() => setState({ deleteModal: false })} color="primary">
            NO
          </CButton>
        </CModalFooter>
      </CModal>
      {/* Delete Modal Section */}
    </>
  )
}

export default DesignationTable
