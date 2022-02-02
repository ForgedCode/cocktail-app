import React from "react";
import { CocktailCard } from "./styles";
import { cardMotion, fadeIn } from "../../framer/animation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react/cjs/react.development";

const Card = ({
	name,
	key,
	thumb,
	ingr1,
	ingr2,
	ingr3,
	ingr4,
	ingr5,
	ingr6,
	ingr7,
	ingr8,
	ingr9,
	ingr10,
	instr,
}) => {
	const [loaded, setLoaded] = useState(false);

	return (
		<CocktailCard
			variants={cardMotion}
			initial='hidden'
			animate='show'
			exit='exit'
			key={key}
		>
			<motion.div className='img__container'>
				<motion.img
					variants={fadeIn}
					initial='hidden'
					animate={loaded ? "show" : ""}
					style={loaded ? {} : { display: "none" }}
					src={thumb}
					alt={name}
					onLoad={() => setLoaded(true)}
				/>
			</motion.div>

			<motion.h2 variants={fadeIn}>{name}</motion.h2>
			<motion.div variants={fadeIn} className='ingredients'>
				<h3>Ingredients</h3>
				<ul>
					{ingr1 ? <li>{ingr1}</li> : ""}
					{ingr2 ? <li>{ingr2}</li> : ""}
					{ingr3 ? <li>{ingr3}</li> : ""}
					{ingr4 ? <li>{ingr4}</li> : ""}
					{ingr5 ? <li>{ingr5}</li> : ""}
					{ingr6 ? <li>{ingr6}</li> : ""}
					{ingr7 ? <li>{ingr7}</li> : ""}
					{ingr8 ? <li>{ingr8}</li> : ""}
					{ingr9 ? <li>{ingr9}</li> : ""}
					{ingr10 ? <li>{ingr10}</li> : ""}
				</ul>
			</motion.div>
			<motion.div variants={fadeIn} className='instructions'>
				<h3>How to prepare?</h3>
				<p>{instr}</p>
			</motion.div>
		</CocktailCard>
	);
};

export default Card;
