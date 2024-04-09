import { PostPage } from 'app/types/post';

import { fetchJson } from '../utils/fetch-jason';

export const getAllPosts = async (query = ''): Promise<PostPage> => {
  const url = `${process.env.POSTS_URL}?${query}`;
  const posts = await fetchJson<PostPage>(url);
  return posts;
};
