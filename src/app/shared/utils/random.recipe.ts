import { CategoryType } from '../types';
import { concatenateArrays } from './concat.arrays';
import recipes from '../../../assets/recipes.json';

const categories: Array<CategoryType> = [
  {
    key: 'desserts',
    recipes: concatenateArrays(
      recipes.cakes,
      recipes.frozen_treats,
      recipes.puddings
    ),
  },
  {
    key: 'beverages',
    recipes: concatenateArrays(
      recipes.smoothies,
      recipes.drinks,
      recipes.milkshakes
    ),
  },
];

export function getRandomRecipe(): { category: string; id: string } {
  const randomCategory: number = Math.round(Math.random());
  const randomRecipe: number = Math.floor(
    Math.random() * categories[randomCategory].recipes.length
  );
  return {
    category: categories[randomCategory].key,
    id: categories[randomCategory].recipes[randomRecipe].id,
  };
}
