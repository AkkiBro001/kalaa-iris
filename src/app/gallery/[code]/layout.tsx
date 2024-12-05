import Container from "@/components/container/container";
import { ReactNode } from "react";

import { category_menu } from "@/components/gallery/galleryData";

import GalleryMenu from "@/components/gallery/galleryMenu";

type Params = Promise<{ code: string }>;

export default async function layout({
  children,
  params,
}: {
  children: ReactNode;
  params: Params;
}) {
  const { code } = await params;

  return (
    <Container className="p-4 min-h-screen">
      <GalleryMenu code={code} category_menu={category_menu}/>
      <div>{children}</div>
    </Container>
  );
}
