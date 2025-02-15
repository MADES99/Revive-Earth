import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const Phone = () => {
    const [phone, setPhone ] = useState('')
    const [displayPhone, setDisplayPhone] = useState('')
  return (
    <div>
        <PhoneInput
            country='ng'
            value={phone}
            onChange={(value) => setPhone(value)}
            onBlur={() => setDisplayPhone(phone)}
        />
    </div>
  )
}

export default Phone