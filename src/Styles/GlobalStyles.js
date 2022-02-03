import { createGlobalStyle } from "styled-components";
import { v, b, t, color } from "./variables";

export const GlobalStyle = createGlobalStyle`
    

    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
        font-family: 'Poppins', sans-serif;
        color: ${color.grey};
        overflow-x: hidden;
    }

    ul {
        list-style: none;
    }

    h1 {
        font-size: 3rem;
        text-align: center;
        font-weight: bold;
        text-transform: uppercase;
        margin-bottom: ${v.mediumDist};
		letter-spacing: 0.3rem;
    }
    
    @media (max-width: 400px) {
        body {
            font-size: 1.4rem;
        }

        h1 {
            font-size: 2rem;
            margin-bottom: ${v.smallDist};
        }
    }
`;
