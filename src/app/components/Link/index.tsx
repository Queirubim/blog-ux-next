import NextLink from 'next/link';
import { ComponentProps } from 'react';

import { cn } from 'lib/merge';

type LinkProps = ComponentProps<typeof NextLink>;

export const HeaderLink = ({ className, children, ...props }: LinkProps) => {
  return (
    <NextLink
      className={cn(
        'flex relative hoverLinkEffect items-center text-md font-light transition-colors',
        className,
      )}
      {...props}
    >
      {children}
    </NextLink>
  );
};
