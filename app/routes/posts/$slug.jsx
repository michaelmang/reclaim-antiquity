import { useLoaderData } from "remix";

import { getPost } from "~/post";

export const loader = ({ params }) => {
  return getPost(params.slug);
};

export default function PostSlug() {
  const post = useLoaderData();
  const style = { height: 'calc(100vh - 64px)' };
  return (
    <div className="flex flex-col items-center p-16 w-full" style={style}>
      <div className="flex flex-col max-w-screen-sm w-full">
        <h1 className="font-decorative text-7xl mb-4">{post.title}</h1>
        <div className="flex flex-col" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
  );
}
