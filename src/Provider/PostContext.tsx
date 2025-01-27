import { createContext, useEffect, useState } from "react";
import { IPost, IPostContext, IPostProviderProps } from "./@types";
import { api } from "../Components/Service/api";

export const PostContext = createContext({} as IPostContext);

export const PostProvider = ({ children }: IPostProviderProps) => {
  const [post, setPost] = useState<IPost[]>([]);
  const [page, setPage] = useState(1)
  const postsPage = 9;

  useEffect(() => {
    const loadPost = async () => {
      try {
        const { data } = await api.get<IPost[]>("/posts");
        setPost(data);
      } catch {}
    };
    loadPost();
  }, []);

  return (
    <PostContext.Provider value={{ post, setPost, page, setPage, postsPage }}>
      {children}
    </PostContext.Provider>
  );
};
