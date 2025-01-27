import { IPost } from "../../Provider/@types";
import { StyleCard } from "./style";

interface IPostProps {
  post: IPost;
  isGray: boolean;
}

export const PostCard = ({ post, isGray }: IPostProps) => {
  return (
    <StyleCard isGray={isGray}>
      <div>
        <li>
          <h2>{post.title}</h2>
          <h3>{post.body}</h3>
        </li>
      </div>
    </StyleCard>
  );
};
