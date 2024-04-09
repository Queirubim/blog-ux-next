import { formatDate } from 'utils/formate-date';

type DateProps = {
  date: string;
  author: string;
};
export const DataHeader = ({ author, date }: DateProps) => {
  return (
    <samp className="text-purpleDate font-semibold">
      {`${author} • ${formatDate(date)}`}
    </samp>
  );
};
