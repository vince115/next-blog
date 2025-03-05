import { fetchFromStrapi } from "@/utils/fetch";

export default async function BlogPage() {
  const posts = await fetchFromStrapi("blog-posts");

  return (
    <div>
      <h1>部落格</h1>
      {posts.data.map((post) => (
        <div key={post.id}>
          <h2>{post.attributes.title}</h2>
          <p>{post.attributes.content.substring(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
}
