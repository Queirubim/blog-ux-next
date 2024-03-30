import {
  Card,
  CardBody,
  CardHeader,
  Chip,
  Link,
  Image,
} from '@nextui-org/react';
// import Image from 'next/image';

import { cn } from 'lib/merge';
// import { ArrowUpRight } from 'lucide-react';

type CardPostProps = {
  cnCard?: string;
  cnImage?: string;
};

export const CardPost = ({ cnCard, cnImage }: CardPostProps) => {
  return (
    <Card
      radius="none"
      shadow="none"
      className={cn(cnCard, 'bg-transparent gap-4')}
    >
      <CardHeader className={cn(cnImage, `p-0`)}>
        <Image
          radius="none"
          width={'100%'}
          alt="astronauta cultivando"
          className="object-cover mb-3 overflow-hidden"
          src="photo.png"
        />
      </CardHeader>
      <CardBody className="p-0">
        <samp className="text-purpleDate font-semibold text-lg">
          Sunday | 1 Jan 2023
        </samp>
        <Link
          isExternal
          color="foreground"
          className="text-xl font-bold py-3"
          href="https://github.com/nextui-org/nextui"
        >
          UX review presentations
        </Link>
        <p className="mb-6">
          How do you create compelling presentations that wow your colleagues
          and impress your managers? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Nam molestiae soluta placeat at esse, impedit
          officiis nostrum, magni laudantium labore libero eaque veritatis
          mollitia nobis, accusamus tenetur facere beatae aliquam?
        </p>
        <div className="flex gap-4">
          <Chip variant="flat" color="secondary">
            Tech
          </Chip>
          <Chip variant="flat" color="success">
            Notice
          </Chip>
          <Chip variant="flat" color="warning">
            Communication
          </Chip>
        </div>
      </CardBody>
    </Card>
  );
};
