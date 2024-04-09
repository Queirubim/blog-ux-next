import { Chip, Image } from '@nextui-org/react';

import { DataPost } from 'app/types/post';

import { DataHeader } from 'app/components/DataHeader';
import { NewsletterForm } from 'app/components/NewsletterForm/inedx';
import { PostContentRender } from 'app/components/PostContentRender';

type ContentPostProps = {
  post: DataPost;
};

export const ContentPost = async ({ post }: ContentPostProps) => {
  const {
    attributes: { content, title, cover, createdAt, author, categories },
  } = post;

  const coverImage = cover.data.attributes;

  return (
    <div className="max-w-[936px]">
      <DataHeader date={createdAt} author={author.data.attributes.name} />
      <h1 className="text-4xl font-bold py-2">{title}</h1>
      <Image
        radius="none"
        alt={coverImage.alternativeText}
        src={coverImage.url}
        width={'100%'}
        className="object-cover"
      />
      <PostContentRender content={content} />
      <div className="flex gap-2 items-center flex-wrap">
        <p className="font-bold text-purpleDate">
          {author.data.attributes.name}
        </p>
        |
        {categories.data.map((category) => (
          <Chip
            key={category.id}
            variant="flat"
            color={category.attributes.color}
          >
            {category.attributes.name}
          </Chip>
        ))}
      </div>
      <NewsletterForm />
    </div>
  );
};
