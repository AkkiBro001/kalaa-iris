import AboutUsHeader from '@/components/aboutus/about-us-header'
import Container from '@/components/container/container'
import React from 'react'
import FAQs from './faqs'
import CommonHeader from '@/components/commonHeader'

export default function AboutUs() {
  return (
    <div>
      <AboutUsHeader />
      <Container className='p-6'>
        <section className='text-base md:text-lg'>
          <p className='mb-6'>We believe that the eyes are not just windows to the soul, but canvases that hold intricate stories
        waiting to be told. We are a passionate team of photographers, engineers and artists dedicated to
        capturing the breathtaking beauty and individuality of the iris, one snapshot at a time.</p>
        
        <p className='mb-6'>With a deep appreciation for the unique patterns, colors, and textures that grace each iris, we have
        embarked on a creative journey to showcase the remarkable artistry within our own biology. Our
        specialized equipment and expertise allow us to delve into the details that often remain unseen,
        turning the ordinary into extraordinary.</p>
        
        <p className='mb-6'>Our mission extends beyond photography; it&#39;s about celebrating the essence of every individual.
        Each iris reflects a journey, a personality, a history, and we are honored to preserve these personal
        narratives through our lens. Whether you&#39;re seeking a striking visual memory or an artistic
        masterpiece, Kalaa Iris is here to transform your eye into a work of unique art.</p>
        
        <p className='mb-6'>Join us in discovering the world of Kalaa Iris – where art, science, engineering and emotion converge
        to celebrate the magic that lies within your gaze.</p>
        </section>
        <CommonHeader title='FAQs' className='capitalize mt-12 mb-8' id="faqs"/>
        <FAQs />
      </Container>
    </div>
  )
}
