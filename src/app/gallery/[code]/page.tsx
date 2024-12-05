import Container from "@/components/container/container"
import GalleryCard from "@/components/gallery/galleryCard"
import { all_effects, selected_gallery } from "@/components/gallery/galleryData"
import GalleryHeader from "@/components/gallery/galleryHeader"

type Params = Promise<{ code: string }>

export default async function GalleryDetailsPage({params}: { params: Params }) {
  
  const {code} = (await params)

  const gallery = selected_gallery(code)

  if(gallery?.short_code === "all"){
    gallery.effects = all_effects
  }
  
  return (
    <section>
      <Container className='p-4 min-h-screen'>

      <GalleryHeader title={`${(gallery?.name || "")} (${gallery?.effects?.length})`} img={gallery?.img}/>

      <section className="grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-4 pb-5 px-1 gap-5 lg:gap-8">
          {gallery?.effects.map(effect => <GalleryCard key={effect.short_code} name={effect.name} short_code={effect.short_code} img={effect.img}/>)}
      </section>
      </Container>
    </section>
  )
}
