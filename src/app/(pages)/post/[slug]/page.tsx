import { getPost } from 'data/get-posts';

import { ContentPost } from 'app/components/pages/post-page/ContentPost';
import { RecentPost } from 'app/components/pages/post-page/recent-post';

type PostProps = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params: { slug } }: PostProps) {
  const postData = await getPost(`${slug}&populate=*`);

  return (
    <div className="flex flex-col-reverse sm:flex-row container gap-8">
      <RecentPost />
      <ContentPost post={postData} />
    </div>
  );
}
