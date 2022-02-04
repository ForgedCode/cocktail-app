import axios from "axios";
import React, { useState } from "react";
import { randomCtUrl } from "../../cocktail_api/api";
import Card from "../../components/Card/Card";
import { Main } from "./styles";
import { Button } from "../../Styles/reusables";
import { AnimatePresence } from "framer-motion";

const MainPage = () => {
	const [cocktail, setCocktail] = useState(null);
	const [loading, setLoading] = useState(false);

	let getRandomCocktail = async () => {
		if (loading) return;
		setLoading(true);
		await axios.get(randomCtUrl).then((response) => {
			setCocktail(response.data);

			setTimeout(() => {
				setLoading(false);
			}, 3000);
		});
	};

	return (
		<Main>
			<h1>Get your random cocktail recipe</h1>
			<div className='btn__container'>
				<Button
					whileTap={{ scale: 0.8 }}
					onClick={loading ? null : getRandomCocktail}
				>
					Tap!
				</Button>
			</div>
			<AnimatePresence exitBeforeEnter>
				{cocktail ? (
					cocktail.drinks?.map((ct) => (
						<Card
							key={ct.idDrink}
							name={ct.strDrink}
							thumb={ct.strDrinkThumb}
							ingr1={ct.strIngredient1}
							ingr2={ct.strIngredient2}
							ingr3={ct.strIngredient3}
							ingr4={ct.strIngredient4}
							ingr5={ct.strIngredient5}
							ingr6={ct.strIngredient6}
							ingr7={ct.strIngredient7}
							ingr8={ct.strIngredient8}
							ingr9={ct.strIngredient9}
							ingr10={ct.strIngredient10}
							instr={ct.strInstructions}
						/>
					))
				) : (
					<span className='question'>?</span>
				)}
			</AnimatePresence>
		</Main>
	);
};

export default MainPage;
