import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { CategoryMenuProps } from "./galleryData";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  code: string;
  category_menu: CategoryMenuProps[];
};

export default function GalleryMenu({ code, category_menu }: Props) {
  return (
    <section className="mt-8 mb-10">
      <Tabs defaultValue={code} className="w-full md:block hidden">
        <TabsList className={`grid w-full grid-cols-7`}>
          {category_menu.map((category) => (
            <Link
              href={`/gallery/${category.short_code}`}
              key={category.short_code}
              className="w-full"
            >
              <TabsTrigger value={category.short_code} className="w-full">
                {category.name} ({category.count})
              </TabsTrigger>
            </Link>
          ))}
        </TabsList>
      </Tabs>

      <Select defaultValue={code}>
        <SelectTrigger className="w-full max-w-[500px] mx-auto md:hidden bg-secondaryColor">
          <SelectValue placeholder="Select a fruit" defaultValue="banana" />
        </SelectTrigger>
        <SelectContent className="bg-secondaryColor text-white">
          {category_menu.map((category) => (
              <Link
                href={`/gallery/${category.short_code}`}
                key={category.short_code}
              >
            <SelectItem value={category.short_code} >
                {category.name} ({category.count})
            </SelectItem>
              </Link>
          ))}
        </SelectContent>
      </Select>
    </section>
  );
}
