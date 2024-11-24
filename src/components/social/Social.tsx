import Title from "../title/title"
import { socialData } from "./SocialData"
import { IoShareSocialSharp } from "react-icons/io5";

function Social() {
  return (
    <div className="px-4 mb-8">
      <Title title="Follow Us On" icon={IoShareSocialSharp}/>

      <section className="flex flex-wrap flex-col xs:flex-row justify-center gap-8">
        {
            socialData.map(social => (
                <a href={social.link} key={social.id} className="flex gap-4 lg:text-2xl text-xl items-center hover:text-primaryColor opacity-75">
                    <social.icon className="text-3xl lg:text-4xl"/>
                    <span>{social.title}</span>
                </a>
            ))
        }
      </section>
    </div>
  )
}

export default Social
