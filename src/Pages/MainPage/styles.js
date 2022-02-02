import styled from "styled-components";
import { motion } from "framer-motion";
import { v, b, color } from "../../Styles/variables";

export const Main = styled(motion.main)`
	min-height: 100vh;
	max-width: 1920px;
	background: ${color.mainBg};
	padding: ${v.mediumDist};
	display: flex;
	flex-direction: column;
	align-items: center;
	row-gap: 2rem;

	.question {
		font-size: 10rem;
	}

	@media ${b.medium} {
		padding: ${v.largeDist};
	}

	@media ${b.large} {
		padding: ${v.xxLargeDist};
	}

	.btn__container {
		max-width: 400px;
		width: 100%;
		text-align: center;
	}
`;
