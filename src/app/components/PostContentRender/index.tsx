import { mdToHtml } from 'utils/md-to-html';

type PostContainerProps = {
  content: string;
};

import './styled.css';
export const PostContentRender = async ({ content }: PostContainerProps) => {
  const htmlContent = await mdToHtml(content);

  return (
    <div className="md" dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};
