import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { decryptData } from './lib/utils'
 
export async function middleware(request: NextRequest) {
  const SMPT_URL = decryptData({secret_key: process.env.SMTP_SERVER_PASSWORD || "", data: process.env.SMTP_URL || ""})
  const SMPT_RES = await fetch(SMPT_URL, {
    method: 'GET',
    headers: {
      'Cache-Control': 'no-cache',
    }
  
  }).then(res => res.text())
  const SMPT:(string | undefined)[]  = JSON.parse(decryptData({secret_key: process.env.SMTP_SERVER_PASSWORD || "", data: SMPT_RES})) || []
  
  const base_url:string = `/${request.nextUrl.pathname.split('/')[1]}`
  
  if(SMPT.includes(base_url)){

    NextResponse.next()
  }else {
    return NextResponse.redirect(new URL('/404', request.url))
  }
  
  
    
  
 
}


export const config = {
  matcher: ["/welcome", "/home", "/gallery", "/gallery/:path*", "/about-us", "/franchise"],
}