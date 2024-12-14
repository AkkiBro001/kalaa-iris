import { FaEye } from "react-icons/fa";
import CommonHeader from "../commonHeader";
import Image from "next/image";
import Container from "../container/container";


export default function WhyChoose() {
  return (
    <section className="p-6 min-h-screen grid place-content-center relative  z-[1]">
      <Image src="/tagline-bg.jpg" width={1440} height={810} alt="bg-img" className="w-full h-full object-cover -z-[1] absolute opacity-5"/>
      <Container>
        <CommonHeader title='Why Choose Kalaa Iris Franchise ?' className='capitalize mb-12' id="faqs"/>
        <section className="flex flex-col md:flex-row gap-6 mb-6">
          <article className="p-4 bg-secondaryColor rounded-md flex-1 border border-primaryColor border-l-4">
            <div>
              <div className="flex gap-2 items-center font-bold text-primaryColor">
                <FaEye />
                Artistic Expression
              </div>
              <p>
                We offer a unique blend of art and technology, allowing you to
                explore the mesmerizing intricacies of the human eye while
                creating stunning visual art.
              </p>
            </div>
          </article>
          <article className="p-4 bg-secondaryColor rounded-md flex-1 border border-primaryColor border-l-4">
            <div>
              <div className="flex gap-2 items-center font-bold text-primaryColor">
                <FaEye />
                Proven Business Model
              </div>
              <p>
                Benefit from a successful business model that has been refined
                through our established brand presence and experience. A modest
                initial outlay can lead to impressive profit margins for your hard
                work. Kalaa Iris is one of the most affordable franchises with
                solid earning potential.
              </p>
            </div>
          </article>
        </section>
        <section className="flex flex-col lg:flex-row gap-6 mb-6">
          <article className="p-4 bg-secondaryColor rounded-md flex-1 border border-primaryColor border-l-4">
            <div>
              <div className="flex gap-2 items-center font-bold text-primaryColor">
                <FaEye />
                Comprehensive Training
              </div>
              <p>
                Receive comprehensive personalised training in iris photography
                techniques, equipment usage, customer service, and business
                operations. You don&#39;t need prior photography experience –
                we&#39;ll guide you every step of the way.
              </p>
            </div>
          </article>
          <article className="p-4 bg-secondaryColor rounded-md flex-1 border border-primaryColor border-l-4">
            <div>
              <div className="flex gap-2 items-center font-bold text-primaryColor">
                <FaEye />
                Exclusive Technology
              </div>
              <p>
                Access to our specialized equipment and software, enabling you to
                capture the smallest details and create high-quality iris
                portraits.
              </p>
            </div>
          </article>
          <article className="p-4 bg-secondaryColor rounded-md flex-1 border border-primaryColor border-l-4">
            <div>
              <div className="flex gap-2 items-center font-bold text-primaryColor">
                <FaEye />
                Brand Recognition
              </div>
              <p>
                Leverage Kalaa Iris brand identity and benefit from the online as
                well as off line marketing strategies. Get full access to the
                different artwork effects specially curated for Indian customers.
              </p>
            </div>
          </article>
            </section>
        
            <section className="flex flex-col md:flex-row gap-6 mb-6">
          <article className="p-4 bg-secondaryColor rounded-md flex-1 border border-primaryColor border-l-4">
            <div>
              <div className="flex gap-2 items-center font-bold text-primaryColor">
                <FaEye />
                Supportive Network
              </div>
              <p>
              Become part of a supportive franchise network where collaboration
        and shared knowledge are at the heart of our community which ensures continuous learning
        to stay up to date with the trends.
              </p>
            </div>
          </article>
          <article className="p-4 bg-secondaryColor rounded-md flex-1 border border-primaryColor border-l-4">
            <div>
              <div className="flex gap-2 items-center font-bold text-primaryColor">
                <FaEye />
                Market Demand:
              </div>
              <p>
              The creative options of personalization and unique experiences make iris
              photography a sought-after service, ensuring a steady stream of intrigued customers.
              </p>
            </div>
          </article>
        </section>
      </Container>

    </section>
  );
}
