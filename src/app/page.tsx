import { Title } from './components/Title';

import { RecentPosts } from './pages/blog-page/RecentPosts';

export default function Home() {
  return (
    <>
      <Title title="ALLAN" />
      <RecentPosts />
    </>
  );
}
