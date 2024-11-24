import React from 'react'

export default function FooterBar() {
  return (
    <div className='p-4 border-t border-hairlineColor xs:text-left text-center'>
      <span>&copy; copyright {new Date().getFullYear()} Kalaa Iris, All right reserved.</span>
    </div>
  )
}
