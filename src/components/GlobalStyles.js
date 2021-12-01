import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    margin:0;
    padding: 0;
    box-sizing: border-box
}
html {
    &::-webkit-scrollbar {
        width: 0.5rem;
    };
    &::-webkit-scrollbar-thumb {
        background-color: #00fff5;
    };
    &::-webkit-scrollbar-track {
        background: #fafafa;
    }
}
body {
    font-family: 'Poppins', sans-serif;
    width: 100%;
    background-color:#222831
}
h2 {
    font-size:3rem;
    font-family: 'Play', sans-serif;
    color: #f8f8f8;

}
h3 {
    font-size: 1.3rem;
    color: #222831;
    padding:1rem 0.5rem;
    display:inline
}
p {
    font-size: 0.8rem;
    line-height:200%;
    color: #8C92AC;
    font-weight:100;
}
a {
    text-decoration:none;
    color: #222831
}
img {
    display:block
}
`;
