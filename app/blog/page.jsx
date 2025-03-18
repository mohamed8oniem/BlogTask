import ClientBlogList from '../components/ClientBlogList';

const page = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return (
    <section>
      <ClientBlogList initialPosts={posts} />
    </section>
  );
};

export default page;
