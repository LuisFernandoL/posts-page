import styled from "styled-components";

export const StyleCard = styled.div<{ isGray: boolean }>`
  display: flex;
  flex-direction: row;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    height: 18rem;
    width: 30rem;
    padding: 2rem;
    box-shadow: 0.2rem 0.2rem 0.5rem 0.4rem rgb(0, 0, 0, 0.25);
    justify-content: space-between;
    background-color: ${(props) =>
      props.isGray ? "rgba(79,79,79, 0.31)" : "white"};
    border-radius: 0.8rem;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      h2 {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 2.4rem;
        padding-bottom: 1.4rem;
        text-align: start;
        width: 100%;
        font-size: 1.8rem;
        font-family: sans-serif;
        font-weight: 500;
      }

      h3 {
        display: flex;
        text-align: justify;
        font-size: 1.4rem;
        font-family: sans-serif;
        font-weight: 500;
        align-items: flex-start;
      }
    }
  }
`;
