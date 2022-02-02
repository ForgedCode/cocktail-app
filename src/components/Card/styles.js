import styled from "styled-components";
import { motion } from "framer-motion";
import { v, color, b } from "../../Styles/variables";

export const CocktailCard = styled(motion.div)`
	max-width: 900px;
	width: 100%;
	min-height: 70vh;
	background: ${color.green};
	padding: ${v.mediumDist};
	border-radius: 5px;

	.ingredients {
		margin-bottom: ${v.xLargeDist};
	}

	@media ${b.medium} {
		padding: 3rem;
	}

	@media ${b.large} {
		padding: 5rem;
	}

	.img__container {
		text-align: center;
		min-height: 30rem;
	}

	img {
		max-width: 300px;
		border-radius: 10px;
	}

	h2 {
		text-align: center;
		margin: ${v.mediumDist} 0;
		font-family: "Merienda", cursive;
	}

	h3 {
		margin-bottom: ${v.smallDist};
		font-size: 2.2rem;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;

		li {
			background: ${color.lightGreen};
			padding: 0.5rem 1rem;
			border-radius: 25px;
		}
	}
`;
