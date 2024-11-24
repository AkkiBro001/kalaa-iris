export default function SubTitle({text}: {text:string}) {
  return (
    <section className="flex flex-col my-6 gap-2 w-fit">
        <h3 className="text-center text-xl md:text-2xl font-bold tracking-wide text-white uppercase">
          {text}
        </h3>
        <span className="w-full h-1 bg-primaryColor"></span>
    </section>
  )
}
