import styled from "styled-components";



export const StyleList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: baseline;

    .tittel{
        font-size: 2.4rem;
        font-family: sans-serif;
    }

    ul{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        padding: 2rem;
        gap: 2rem;
    }
`


export const StyleButtons = styled.div`

    display: flex;
    flex-direction: row;
    gap: 2rem;
    height: 4rem;
    align-items: center;

    .buttonPrev{
        display: flex;
        align-items: center;
        height: 3rem;
        background-color: rgb(14, 192, 14);
        font-size: 1.2rem;
        border: none;
        border-radius: 0.8rem;
        font-family: sans-serif;
        font-weight: 400;
    }

    .buttonNext{
        display: flex;
        align-items: center;
        height: 3rem;
        background-color: rgb(54, 169, 236);
        font-size: 1.2rem;
        border: none;
        border-radius: 0.8rem;
        font-family: sans-serif;
        font-weight: 400;
    }

`