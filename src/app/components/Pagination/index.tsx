'use client';
import { Button, Pagination as PaginationUi } from '@nextui-org/react';
import { useState } from 'react';

import { ArrowLeft, ArrowRight } from 'lucide-react';

type PaginationProps = {
  total: number;
};

export const Pagination = ({ total }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex items-center my-4 gap-2">
      <Button
        size="sm"
        variant="light"
        startContent={<ArrowLeft />}
        onPress={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
      >
        Previous
      </Button>
      <PaginationUi
        classNames={{
          item: 'bg-transparent [&[data-hover=true]:not([data-active=true])]:bg-neutral-300 dark:[&[data-hover=true]:not([data-active=true])]:bg-gray-950',
          cursor:
            'bg-[#F9F5FF]/60 text-purpleDate dark:text-black dark:bg-neutral-300',
        }}
        className="justify-center mx-auto"
        total={total}
        color="default"
        boundaries={3}
        page={currentPage}
        onChange={setCurrentPage}
      />
      <Button
        size="sm"
        variant="light"
        endContent={<ArrowRight />}
        onPress={() =>
          setCurrentPage((prev) => (prev < total ? prev + 1 : prev))
        }
      >
        Next
      </Button>
    </div>
  );
};
