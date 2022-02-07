export default function ShedMasterValidation(values, isTouched)
{

  const errors = {}

  //vehicle type validation rule
  if (isTouched.ShedType && values.ShedType==="0") {
    errors.ShedType = "Choose ShedType Type"
  }
  if (isTouched.ShedName && !values.ShedName) {
    errors.ShedName = 'Shed Name Required'
  } else if (isTouched.ShedName && !/^[a-zA-Z ]+$/.test(values.ShedName)) {
    errors.ShedName = 'Shed Name only have Letters and space'
  }
  if (isTouched.ShedOwnerName && !values.ShedOwnerName) {
    errors.ShedOwnerName = 'Shed Owner Name is required'
  } else if (isTouched.ShedOwnerName && !/^[a-zA-Z ]+$/.test(values.ShedOwnerName)) {
    errors.ShedOwnerName = 'Shed Owner Name only have Letters and space'
  }
  if (isTouched.ShedOwnerMobileNumber2 && !values.ShedOwnerMobileNumber2) {
    errors.ShedOwnerMobileNumber2 = 'Mobile Number 2 is required'
  } else if (isTouched.ShedOwnerMobileNumber2 && !/^[\d]{10}$/.test(values.ShedOwnerMobileNumber2)) {
    errors.ShedOwnerMobileNumber2 = 'Mobile Number 2 only have 10 Digit Numeric'
  }
  if (isTouched.ShedOwnerMobileNumber1 && !values.ShedOwnerMobileNumber1) {
    errors.ShedOwnerMobileNumber1 = 'Mobile Number 1 is required'
  } else if (isTouched.ShedOwnerMobileNumber2 && !/^[\d]{10}$/.test(values.ShedOwnerMobileNumber1)) {
    errors.ShedOwnerMobileNumber1 = 'Mobile Number 1 only have 10 Digit Numeric'
  }
  if (isTouched.ShedOwnerAddress && !values.ShedOwnerAddress) {
    errors.ShedOwnerAddress = 'Shed Address Required'
  } 
  if (isTouched.ShedOwnerPhoto && !values.ShedOwnerPhoto) {
    errors.ShedOwnerPhoto = "Choose Shed Owner Photo"
  }
  if (isTouched.PANNumber && !values.PANNumber) {
    errors.PANNumber = 'PAN number is required'
  } else if (isTouched.PANNumber && !/^[A-Z]{5}[\d]{4}[A-Z]{1}$/.test(values.PANNumber)) {
    errors.PANNumber = 'PAN number only have 10 digit alpha numeric'
  }
  if (isTouched.AadharNumber && !values.AadharNumber) {
    errors.AadharNumber = 'Aadhar Number is required'
  } else if (isTouched.AadharNumber && !/^[\d]{12}$/.test(values.AadharNumber)) {
    errors.AadharNumber = 'Aadhar Number only have 12 Digit Numeric'
  }
  if (isTouched.GSTNumber && !values.GSTNumber) {
    errors.GSTNumber = 'GST Number is required'
  } else if (isTouched.GSTNumber && !/^[\d]{2}[A-Z]{5}[\d]{4}[A-Z]{1}[\d]{1}[A-Z]{1}[A-Z\d]{1}$/.test(values.GSTNumber)) {
    errors.GSTNumber = 'GST Number only have 15 Digit Numeric'
  }
  return errors
}
