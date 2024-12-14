import React from 'react'
// import { Markdown } from "@react-email/components";

export type FranchiesFormType = {
    fname: string,
    lname: string, 
    email: string, 
    mobile: string, 
    country: string, 
    state: string, 
    city: string, 
    source?: string}

export default function EmailTemplate({fname, lname, email, mobile, country, state, city, source}: FranchiesFormType) {
  return (
    <div>
  {`## Franchies Enquiry Form Details 
  ---
  ##### First Name: ${fname}
  ##### Last Name: ${lname}
  ##### Email: ${email}
  ##### Mobile No.: ${mobile}
  ##### Country: ${country}
  ##### State: ${state}
  ##### City: ${city}
  ##### How did you hear about us: ${source || "-"} 
    `}
</div>
  )
}
