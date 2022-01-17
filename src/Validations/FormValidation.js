export default function validate(values, isTouched) {
  const errors = {}

  // Parking Yard Gate In
  if (!values.vType && isTouched.vType) {
    errors.vType = 'Required'
  }

  if (!values.vNum && isTouched.vNum) {
    errors.vNum = 'Required'
  }
  // else if (!(values.vNum.length == 10)) {
  //   errors.vNum = 'Min 10 Digits'
  // } else {
  //   errors.vNum = ''
  // }

  if (!values.dName && isTouched.dName) {
    errors.dName = 'Required'
  }

  if (!values.dNum && isTouched.dNum) {
    errors.dNum = 'Required'
  }
  // else if (values.dNum > 10) {
  //   errors.vNum = 'Min 10 Digits'
  // }

  if (isTouched.vBody && !values.vBody) {
    errors.vBody = 'Required'
  }
  if (isTouched.vCap && !values.vCap) {
    errors.vCap = 'Required'
  }
  if (isTouched.odoKm && !values.odoKm) {
    errors.odoKm = 'Required'
  }

  if (isTouched.pName && !values.pName) {
    errors.pName = 'Required'
  }

  // Vehicle Inspection
  if (isTouched.truckClean && !values.truckClean) {
    errors.truckClean = 'Required'
  }
  if (isTouched.badSmell && !values.badSmell) {
    errors.badSmell = 'Required'
  }
  if (isTouched.insectVevils && !values.insectVevils) {
    errors.insectVevils = 'Required'
  }
  if (isTouched.tarSRF && !values.tarSRF) {
    errors.tarSRF = 'Required'
  }
  if (isTouched.tarNon && !values.tarNon) {
    errors.tarNon = 'Required'
  }
  if (isTouched.tarInsectVevils && !values.tarInsectVevils) {
    errors.tarInsectVevils = 'Required'
  }
  if (isTouched.trkPlat && !values.trkPlat) {
    errors.trkPlat = 'Required'
  }
  if (isTouched.prevLoad && !values.prevLoad) {
    errors.prevLoad = 'Required'
  }
  if (isTouched.vFitLoad && !values.vFitLoad) {
    errors.vFitLoad = 'Required'
  }
  // Common Remarks
  if (isTouched.remarks && !values.remarks) {
    errors.remarks = 'Required'
  }
  console.log(errors)
  return errors
}
