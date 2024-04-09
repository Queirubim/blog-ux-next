import { getAllPosts } from 'data/get-all-posts';

import { CardPost } from 'app/components/CardPost';
import { Pagination } from 'app/components/Pagination';
import { Section } from 'app/components/Section';
export const AllPostSection = async () => {
  const { data: posts, meta } = await getAllPosts(
    'populate=*&sort=id:desc&pagination[page]=1&pagination[pageSize]=3',
  );
  return (
    <Section title="All blog posts">
      <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-8 gap-y-11 border-b-2 border-neutral-400 pb-11">
        {posts.map((post) => (
          <CardPost key={post.id} post={post} />
        ))}
      </div>
      <Pagination total={meta.pagination.pageCount} />
    </Section>
  );
};
