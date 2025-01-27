import { useContext } from "react";
import { PostContext } from "../../Provider/PostContext";
import { PostCard } from "../CardPosts";
import { StyleList, StyleButtons } from "./style";
import { Container } from "../../Style/global";

export const ListPost = () => {
  const { post, page, setPage, postsPage } = useContext(PostContext);

  const totalPages = post.length / 9;
  const totalPageNumber =
    totalPages === parseInt(totalPages.toString())
      ? totalPages
      : parseInt(totalPages.toString()) + 1;

  const nextPage = () => {
    if (page < totalPageNumber) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <Container>
      <StyleList>
        <h2 className="tittle">Lista de postes</h2>
        <ul>
          {post
            .slice((page - 1) * postsPage, page * postsPage)
            .map((post, index) => (
              <PostCard key={post.id} post={post} isGray={index % 2 === 1} />
            ))}
        </ul>
      </StyleList>
      <StyleButtons>
        <button onClick={prevPage} disabled={page === 1} className="buttonPrev">
          Anterior
        </button>
        <button
          onClick={nextPage}
          disabled={page === totalPageNumber}
          className="buttonNext"
        >
          Próximo
        </button>
      </StyleButtons>
    </Container>
  );
};
