import { DataPost, PostPage } from 'app/types/post';

import { fetchJson } from '../utils/fetch-jason';

export const getPost = async (slug: string | string[]): Promise<DataPost> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${process.env.POSTS_URL}?filters[slug][$eq]=${slugString}`;
  const { data } = await fetchJson<PostPage>(url);
  return data[0];
};
