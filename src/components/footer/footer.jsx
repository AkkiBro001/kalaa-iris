import React from 'react'

export default function FooterBar() {
  return (
    <div className='p-4 border-t border-hairlineColor'>
      <span>&copy; copyright {new Date().getFullYear()}, All right reserved.</span>
    </div>
  )
}
