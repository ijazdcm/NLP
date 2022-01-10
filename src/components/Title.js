import React, { useEffect, useState } from 'react'
import { AppHeaderDropdown } from '.'

const Title = () => {
  const [header, setHeader] = useState('Naga Logistics Division')

  useEffect(() => {
    dom[0] ? setHeader(dom[0].getAttribute('title')) : console.log(false)
  })

  const dom = document.getElementsByClassName('nav-link active')

  return (
    <>
      <h3 className="text-info text-center">{header}</h3>
    </>
  )
}

export default Title
