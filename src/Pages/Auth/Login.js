import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCardImage,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormSelect,
  CImage,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { useDispatch, useSelector } from 'react-redux'
import logo from 'src/assets/logo/masterlogo.jpg'
import AuthService from 'src/Service/Auth/AuthService'
import authConstant from 'src/redux/Auth/AuthConstant'
import loginRequest from 'src/redux/Auth/AuthAction'
import LocalStorageService from 'src/Service/LocalStoage'
const Login = () => {
  const dispatch = useDispatch()
   const [state,setState]=useState({
     username:"",
     password:"",
     error:""

   })

   const handleLogin=(e)=>
   {

    e.preventDefault()

        AuthService.login(state) .then(res=> {
          if(res.status==200)
          {
           LocalStorageService.setLocalstorage('auth_token',res.data.token)
           window.location.href="/dashboard"
          }

        }).catch((error)=>{
         if(error.response.status==401)
         {
           console.log(error.response.data.message);
          setState({...state,error:error.response.data.message})
         }
        })

   }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={12}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <img src={logo} className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt=""/>
                </CCardBody>
              </CCard>
              <CCard className="p-4">
                <CCardBody className="mt-5">
                 <CForm className="text-center" onSubmit={handleLogin}>
                   <div className="d-flex justify-content-around">
                   <CImage rounded thumbnail src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGq3esvd2vR31jkhoULZUGIoCZcjjMJRIT0G1HpW6AyRjUWqebVB0RLCzGXjrC-CbQ9A4&usqp=CAU" width={150} height={150} />
                   <h2 className='mt-5' >NAGA LOGISTICS PRO</h2>
                   </div>
                    <p className="text-medium-emphasis mt-4">ADMIN & USER LOGIN</p>
                     <div className="container">
                     {state.error && <div className="text-danger">{state.error}</div>}
                      <div className="row">
                        <div className="col-md-8 offset-md-2">
                        <CInputGroup className="mb-4">
                          <CInputGroupText>
                            <CIcon icon={cilUser} />
                          </CInputGroupText>
                        <CFormInput placeholder="Username" value={state.username}  onChange={(e)=>setState({...state,username:e.target.value})} />
                        </CInputGroup>
                        <CInputGroup className="mb-4">
                          <CInputGroupText>
                            <CIcon icon={cilLockLocked} />
                          </CInputGroupText>
                          <CFormInput
                            type="password"
                            placeholder="Password"
                            value={state.password}
                            onChange={(e)=>setState({...state,password:e.target.value})}
                          />
                        </CInputGroup>
                        </div>
                      </div>
                      <div className="row">
                        <div className="float-right">
                        <CButton type='submit' color="primary" className="px-4">
                            Login
                          </CButton>
                        </div>
                      </div>
                     </div>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
