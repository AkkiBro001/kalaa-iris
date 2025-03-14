import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"

export default function Blog_Created_By() {
  return (
    <section className="flex gap-4 items-center">
      <Avatar className="size-12">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>

    <div>
        <p className="font-bold">Abhishekh Verma</p>
        <p className="text-sm opacity-60">25th Feb 2025</p>
    </div>
    </section>
  )
}
