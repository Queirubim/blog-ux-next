import { getAllPosts } from 'data/get-all-posts';

import { AllPostSection } from './components/pages/blog-page/AllPostSection';
import { RecentPosts } from './components/pages/blog-page/RecentPosts';
import { Title } from './components/Title';

export default async function Home() {
  const { data: posts } = await getAllPosts(
    'populate=*&sort=id:desc&pagination[page]=1&pagination[pageSize]=6',
  );

  return (
    <>
      <Title title="THE BLOG" />
      <RecentPosts posts={posts} />
      <AllPostSection />
    </>
  );
}
