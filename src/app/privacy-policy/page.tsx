import Container from '@/components/container/container'
import React from 'react'

export default function PrivacyPolicy() {
  return (
    <Container  className='p-6'>
        <div>
        <h1 className='text-2xl md:text-3xl text-center my-8 text-primaryColor'>Privacy Policy</h1>

        <h3 className='text-[1.25rem] md:text-[1.35rem] my-2'>Who we are ?</h3>
        <p className='mb-5 text-gray-400'>Our website address is: https://kalaairis.com.</p>

        <h3 className='text-[1.25rem] md:text-[1.35rem] my-2'>What personal data we collect and why we collect it</h3>
        <p className='mb-5 text-gray-400'>When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.</p>
        <p className='mb-5 text-gray-400'>An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.</p>

        {/* Our Commitment to Privacy */}
        <h2 className='text-xl md:text-2xl my-6'>Our Commitment to Privacy</h2>
        <p className='mb-5 text-gray-400'>Your privacy is important to us. To better protect your privacy we provide this notice explaining our online information practices and the choices you can make about the way your information is collected and used. To make this notice easy to find, we make it available on our homepage and at every point where personally identifiable information may be requested.</p>
        

        {/* Media */}
        <h2 className='text-xl md:text-2xl my-6'>Media</h2>
        <p className='mb-5 text-gray-400'>If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.</p>


        {/* The Information We Collect */}
        <h2 className='text-xl md:text-2xl my-6'>The Information We Collect</h2>
        <p className='mb-5 text-gray-400'>On some pages, you can order products, make requests, and register to receive materials. The types of personal information collected at these pages are:</p>
        <ul className='text-gray-400 list-disc ml-4'>
            <li>Name</li>
            <li>Address</li>
            <li>E-mail address</li>
            <li>Phone number</li>
        </ul>


        {/* How We Use Information */}
        <h2 className='text-xl md:text-2xl my-6'>How We Use Information</h2>
        <p className='mb-5 text-gray-400'>We use the information you provide about yourself when placing an order only to complete that order. We do not share this information with outside parties except to the extent necessary to complete that order.</p>
        <p className='mb-5 text-gray-400'>We use return e-mail addresses to answer the e-mail we receive. Such addresses are not used for any other purpose and are not shared with outside parties.</p>
        <p className='mb-5 text-gray-400'>You can register with our website if you would like to receive our newsletter as well as updates on our new products and services. Information you submit on our website will not be used for this purpose unless you fill out the registration form.</p>
        <p className='mb-5 text-gray-400'>Finally, we never use or share the personally identifiable information provided to us online in ways unrelated to the ones described above without also providing you an opportunity to opt out or otherwise prohibit such unrelated uses.</p>


        {/* Cookies */}
        <h2 className='text-xl md:text-2xl my-6'>Cookies</h2>
        <p className='mb-5 text-gray-400'>If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.</p>
        <p className='mb-5 text-gray-400'>If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.</p>
        <p className='mb-5 text-gray-400'>When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.</p>
        <p className='mb-5 text-gray-400'>If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.</p>


        {/* Embedded content from other websites */}
        <h2 className='text-xl md:text-2xl my-6'>Embedded content from other websites</h2>
        <p className='mb-5 text-gray-400'>Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.</p>

        <p className='mb-5 text-gray-400'>These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.</p>
        


        </div>
    </Container>
  )
}
