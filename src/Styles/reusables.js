import styled from "styled-components";
import { motion } from "framer-motion";
import { v, t, color } from "./variables";

export const Button = styled(motion.button)`
	background: ${color.green};
	outline: none;
	border: none;
	width: 150px;
	font-family: "Merienda", cursive;
	font-size: 2rem;
	text-transform: uppercase;
	border-radius: 5px;
	color: ${color.grey};
	padding: ${v.smallDist} ${v.largeDist};
	transition: ${t.fastSp};
	cursor: pointer;

	&:hover {
		box-shadow: rgba(18, 98, 112, 0.5) 5px 5px, rgba(18, 98, 112, 0.1) 10px 10px;
	}
`;
