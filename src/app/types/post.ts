export type PostID = number;

export type AttributesBase = {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type Data = {
  id: PostID;
  attributes: AttributesBase;
};

export type PostAuthor = {
  data: Data;
};

export type PostCategory = {
  data: {
    id: PostID;
    attributes: AttributesBase & {
      color:
        | 'default'
        | 'primary'
        | 'secondary'
        | 'success'
        | 'warning'
        | 'danger';
    };
  }[];
};
export type PostCoverFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
};

export type PostCover = {
  data: {
    id: PostID;
    attributes: {
      alternativeText: string;
      caption: null;
      width: number;
      height: number;
      formats: {
        thumbnail: PostCoverFormat;
        small: PostCoverFormat;
        medium: PostCoverFormat;
        large: PostCoverFormat;
      };
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: null;
      provider: string;
      provider_metadata: {
        public_id: string;
        resource_type: string;
      };
      createdAt: string;
      updatedAt: string;
    };
  };
};

export type DataPost = {
  id: PostID;
  attributes: {
    title: string;
    content: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    cover: PostCover;
    author: PostAuthor;
    categories: PostCategory;
    shortDescription: string;
  };
};

export type MetaPost = {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
};

export type PostPage = {
  data: DataPost[];
  meta: MetaPost;
};
