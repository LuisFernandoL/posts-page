import React from "react";

export interface IPostProviderProps {
  children: React.ReactNode;
}

export interface IPost {
  id: number;
  title: string;
  body: string;
}

export interface IPostContext {
  post: IPost[];
  setPost: React.Dispatch<React.SetStateAction<IPost[]>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  postsPage: number;
}
