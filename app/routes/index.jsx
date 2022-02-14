import { Link, useLoaderData } from "remix";

import { getPosts } from "../post";

export const loader = () => {
  return getPosts();
};

export default function Index() {
  const posts = useLoaderData(loader);

  return (
    <div className="flex flex-col">
      <div className="flex h-screen w-full justify-between items-center px-16">
        <div className="flex flex-col items-end justify-center w-1/2">
          <div className="flex flex-col justify-center items-start">
            <h1 className="mb-3 text-7xl font-decorative">Reclaim Antiquity</h1>
            <h2 className="text-lg text-gray-700 tracking-wide font-decorative">Inspiring history of antique items available to reclaim in the present</h2>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-1/2">
          <img src="hero.png" alt="hero" className="w-3/4 h-max object-cover object-center" />
        </div>
      </div>
      <div className="flex flex-col px-16 mt-20">
        <div className="text-7xl font-decorative mb-8">The Latest</div>
        <div className="flex flex-col space-y-4 ml-8">
          {posts.map(post => (
            post && <Link key={post.slug} className="font-decorative text-lg hover:underline" to={post.slug}>{post.title}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
