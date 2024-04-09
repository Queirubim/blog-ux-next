import { getAllPosts } from 'data/get-all-posts';

import { CardPost } from 'app/components/CardPost';
export const RecentPost = async () => {
  const { data: posts } = await getAllPosts(
    'populate=*&sort=id:desc&pagination[page]=1&pagination[pageSize]=6',
  );
  return (
    <>
      <div className="flex flex-col md:max-w-[350px] gap-y-11 h-full mt-2">
        {posts.map((post) => (
          <CardPost key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};
