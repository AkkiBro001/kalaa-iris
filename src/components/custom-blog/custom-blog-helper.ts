import Blog_3 from "./Blog-3"

export function get_custom_blog(blog_id: string) {
    switch(blog_id) {
        case "3": return Blog_3
        default: return null
    }
}
