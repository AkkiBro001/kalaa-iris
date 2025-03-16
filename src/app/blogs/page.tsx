import { blog_data } from "@/components/blogCard/blog-data";
import BlogCard from "@/components/blogCard/blogCard";
import Container from "@/components/container/container";


export default function BlogsPage() {
  return (
    <Container>
      <section className="blog grid lg:grid-cols-2 pt-8 pb-20 px-4 gap-4">

        {
          blog_data.map(blog => <BlogCard key={blog.id} {...blog}/>)
        }

      
    </section>
    </Container>
  )
}
