import {
  Card,
  CardBody,
  CardHeader,
  Chip,
  Link,
  Image,
} from '@nextui-org/react';

import { DataPost } from 'app/types/post';
import { cn } from 'lib/merge';
import { ArrowUpRight } from 'lucide-react';

import { DataHeader } from '../DataHeader';

type CardPostProps = {
  post: DataPost;
  cnCard?: string;
  cnImage?: string;
  cnCover?: string;
  externalLink?: boolean;
};

export const CardPost = ({
  post,
  cnCard,
  cnImage,
  cnCover,
  externalLink = false,
}: CardPostProps) => {
  const postAttr = post.attributes;
  const img = postAttr.cover.data.attributes;
  return (
    <Card
      radius="none"
      shadow="none"
      className={cn('bg-transparent gap-4 items-start', cnCard)}
    >
      <CardHeader className={cn(`p-0 overflow-hidden`, cnCover)}>
        <Image
          radius="none"
          width={'100%'}
          alt={img.alternativeText}
          className={cn(
            `object-cover mb-3 overflow-hidden object-center`,
            cnImage,
          )}
          src={img.url}
        />
      </CardHeader>
      <CardBody className="p-0">
        <DataHeader
          author={postAttr.author.data.attributes.name}
          date={postAttr.createdAt}
        />
        <Link
          color="foreground"
          className="text-xl font-bold py-3 flex items-center justify-between"
          href={`/post/${postAttr.slug}`}
        >
          {postAttr.title}
          {externalLink && (
            <samp>
              <ArrowUpRight />
            </samp>
          )}
        </Link>
        <p className="mb-6 line-clamp-4 text-sm text-gray-500">
          {postAttr.shortDescription}
        </p>
        <div className="flex gap-4 flex-wrap">
          {postAttr.categories.data.map((category, i) => (
            <Chip
              key={`${category.attributes.name}-${i}`}
              variant="flat"
              color={category.attributes.color}
            >
              {category.attributes.name}
            </Chip>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};
