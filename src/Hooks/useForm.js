import { useState, useEffect } from 'react'

const useForm = (callback, validate, formValues) => {
  const [values, setValues] = useState(formValues);
  const [errors, setErrors] = useState({});
  const [isTouched, setIsTouched] = useState({});
  const [screenTyp, setscreenTyp] = useState('ownContract');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [enableSubmit, setEnableSubmit] = useState(true)

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback()
    }
  }, [errors])

  const chechFormFieldMatchs = () => {
    if (Object.keys(formValues).length === Object.keys(isTouched).length) {
      setEnableSubmit(false)
    } else {
      setEnableSubmit(true)
    }
  }

  const handleSubmit = (event) => {
    if (event) event.preventDefault()
    setIsSubmitting(true)
    setErrors(validate(values, isTouched, isSubmitting))
  }

  const handleChange = (event) => {
    event.persist();
    setIsTouched((isTouched) => ({ ...isTouched, [event.target.name]: true }))
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  }

  const onFocus = (event) => {
    event.persist()
    setIsTouched((isTouched) => ({ ...isTouched, [event.target.name]: true }))
    chechFormFieldMatchs()
  }

  const onBlur = (event) => {
    event.persist()
    setIsSubmitting(false)
    setIsTouched((isTouched) => ({ ...isTouched, [event.target.name]: true }))
    setErrors(validate(values, isTouched))
    chechFormFieldMatchs()
  }



  const onClick = (event) => {
    const yardType = event.target.value;
    yardType === 'hire'
      ? setscreenTyp(yardType)
      : setscreenTyp(yardType);

    console.log(yardType);

  }

  return {
    handleChange,
    handleSubmit,
    onFocus,
    isTouched,
    values,
    errors,
    enableSubmit,
    onBlur,
    onClick
  }
}

export default useForm
