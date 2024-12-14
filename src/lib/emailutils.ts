import { FranchiesFormType } from "@/components/franchise/email-templeate";
import { format } from "date-fns";

export function htmlParser (data: FranchiesFormType) {
   return `
   <h3>Enquiry Details</h3>
   
   <p><b>First Name:</b> ${data.fname}<p>
   <p><b>Last Name:</b> ${data.lname}<p>
   <p><b>Email:</b> ${data.email}<p>
   <p><b>Mobile No.:</b> ${data.mobile}<p>
   <p><b>Country:</b> ${data.country}<p>
   <p><b>State:</b> ${data.state}<p>
   <p><b>City:</b> ${data.city}<p>
   <p><b>How did you hear about us:</b> ${data.source || "-"}<p>
   `
}

export function emailSubject (fname: string, lname: string){
   const date = `${format(new Date(), "dd, MMM yyyy")}`
   return `📝[${fname} ${lname}] Franchise Enquiry: ${date}`
}