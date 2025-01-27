// Ad types
export type Region = {
  id: number;
  slug: string;
  region_name: string;
};

export type Category = {
  slug: string;
  category_id: number;
  category_name: string;
};

export type SubCategory = {
  slug: string;
  category_id: number;
  sub_category_id: number;
  sub_category_name: string;
};

export type Profile = {
  id: string;
  bio: string;
  birthday: string;
  is_admin: boolean;
  username: string;
  gender_id: number;
  region_id: number;
  avatar_url: string;
  age_visible: boolean;
  contact_sms: string;
  sms_visible: boolean;
  contact_email: string;
  contact_phone: string;
  email_visible: boolean;
  phone_visible: boolean;
};

export type AdImage = {
  image_url: string;
};

export type Ad = {
  uuid: string;
  title: string;
  description: string;
  slug: string;
  region: Region;
  ad_images?: AdImage[];
  ad_categories: Category;
  ad_sub_categories: SubCategory;
  profile: Profile;
};

export type FetchRandomAdsResponse = {
  ads: Ad[];
  error: Error | null;
};

// Articles
export interface Article {
  id: number;
  Slug: string;
  Topic: string;
  Author: string;
  Title: string;
  Summary: string;
  "Body Text": string;
  RT: string | null;
  Image: ArticleImage;
  updatedAt: string;
  createdAt: string;
}
export interface ArticleImage {
  id: number;
  alt: string;
  prefix: string;
  updatedAt: string;
  createdAt: string;
  url: string;
  thumbnailURL: string;
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
  focalX: number;
  focalY: number;
  sizes: {
    thumbnail: {
      url: string;
      width: number;
      height: number;
      mimeType: string;
      filesize: number;
      filename: string;
    };
  };
}
