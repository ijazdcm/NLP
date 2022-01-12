import InputMask from 'react-input-mask'
export const InputValid = (e) => {
  const { name, value } = e.target
  let val = ''
  switch (name) {
    case 'vNum': //vehicle Number
      break
    case 'dName': //Driver Name
      val = value.charAt(0).toUpperCase() + value.slice(1)
      break
    case 'dNum' && 'odoKm': //Driver Contact Number & Odometer Km
      val = value.test(/[^\d]/g, '')
      break
    case 'pName': //Party Name
      // val = !/[^a-zA-Z]/.test(string) ? string.charAt(0).toUpperCase() + string.slice(1) : string
      break
    // case 'dNum': //Driver Contact Number
    //   val = e.target.value.replace(/[^\d]/g, '')
    //   break
    // case 'dNum': //Driver Contact Number
    //   val = e.target.value.replace(/[^\d]/g, '')
    //   break
    // case 'dNum': //Driver Contact Number
    //   val = e.target.value.replace(/[^\d]/g, '')
    //   break
    // case 'dNum': //Driver Contact Number
    //   val = e.target.value.replace(/[^\d]/g, '')
    //   break
    // case 'dNum': //Driver Contact Number
    //   val = e.target.value.replace(/[^\d]/g, '')
    //   break
    // case 'dNum': //Driver Contact Number
    //   val = e.target.value.replace(/[^\d]/g, '')
    //   break
    // case 'dNum': //Driver Contact Number
    //   val = e.target.value.replace(/[^\d]/g, '')
    //   break
    // case 'dNum': //Driver Contact Number
    //   val = e.target.value.replace(/[^\d]/g, '')
    //   break
    // case 'dNum': //Driver Contact Number
    //   val = e.target.value.replace(/[^\d]/g, '')
    //   break
    // case 'dNum': //Driver Contact Number
    //   val = e.target.value.replace(/[^\d]/g, '')
    //   break
    // case 'dNum': //Driver Contact Number
    //   val = e.target.value.replace(/[^\d]/g, '')
    //   break
    default:
      val = value
  }
  return val
}
