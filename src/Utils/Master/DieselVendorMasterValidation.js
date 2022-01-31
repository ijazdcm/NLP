export default function DieselVendorMasterValidation(values, isTouched) {
  const errors = {}

  //Diesel Vendor Name Validation Rule
  if (isTouched.dieselVendorName && !values.dieselVendorName) {
    errors.dieselVendorName = 'Diesel Vendor Name is required'
  }

  //Diesel Vendor Code Validation Rule
  if (isTouched.dieselVendorCode && !values.dieselVendorCode) {
    errors.dieselVendorCode = 'Diesel Vendor Code is required'
  }

  //Diesel Vendor Mobile Number 1 Validation Rule
  if (isTouched.dieselVendorMobile1 && !values.dieselVendorMobile1) {
    errors.dieselVendorMobile1 = 'Diesel Vendor Mobile Number 1 is required'
  }

  //Diesel Vendor Mobile Number 2 Validation Rule
  if (isTouched.dieselVendorMobile2 && !values.dieselVendorMobile2) {
    errors.dieselVendorMobile2 = 'Diesel Vendor Mobile Number 2 is required'
  }

  //Diesel Vendor Mail-ID Validation Rule
  if (isTouched.dieselVendorMail && !values.dieselVendorMail) {
    errors.dieselVendorMail = 'Diesel Vendor Mail-Id is required'
  }

  return errors
}
