import { DataPost } from 'app/types/post';

import { CardPost } from 'app/components/CardPost';
import { Section } from 'app/components/Section';

type RecentPostsProps = {
  posts: DataPost[];
};

export const RecentPosts = ({ posts }: RecentPostsProps) => {
  return (
    <Section title="Recent blog posts">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Post1 */}
          <CardPost
            post={posts[0]}
            cnCover="md:h-[400px] lg:h-[300px]"
            cnCard="lg:min-w-[50%]"
          />
          <div className="flex flex-col gap-8">
            {/* // Post2 */}
            <CardPost
              post={posts[1]}
              cnCard="md:flex-row"
              cnImage="mb-0 md:min-h-[400px] lg:min-h-[260px]"
              cnCover="md:w-[50%]"
              externalLink={true}
            />
            {/* // Post3 */}
            <CardPost
              post={posts[2]}
              cnCard="md:flex-row"
              cnImage="mb-0 md:min-h-[400px] lg:min-h-[260px]"
              cnCover="md:w-[50%] "
              externalLink={true}
            />
          </div>
        </div>
        {/* Post4 */}

        <CardPost post={posts[5]} cnCover="md:h-[400px]" />
      </div>
    </Section>
  );
};
