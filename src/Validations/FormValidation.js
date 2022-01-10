export default function validate(values, isTouched) {
  const errors = {}
  if (isTouched.vehicleType && !values.vehicleType) {
    errors.vehicleType = 'required'
  }
  if (isTouched.DefectType && !values.DefectType) {
    errors.DefectType = 'required'
  }
  if (isTouched.DefectType2 && !values.DefectType2) {
    errors.DefectType2 = 'required'
  }
  if (isTouched.OdometerKm && !values.OdometerKm) {
    errors.OdometerKm = 'required'
  }
  return errors
}
