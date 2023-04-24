import React from 'react';
import styles from './MealList.module.css';
import Card from '../UI/Card.js';
import MealItems from './MealItems';

const DUMMY_MEALS = [
  {
    name: 'Baursak',
    id: 'Baursak',
    ingredients: "1 tablespoon yeast, 1/4 cup warm milk, 1/4 cup water, 1 tablespoon sugar, 1 tablespoon butter or vegetable oil, ¼ teaspoon salt, 1 egg, 2 cups flour, 2 cups vegetable oil for frying",
    price: 0.99,
  },
  {
    name: 'Kabartma',
    id: "Kabartma",
    ingredients: "Flour or 1 liter (4.5 water glasses) milk. You can use vanillin with sugar to add flavor to all kinds of pastry, cake and milk puddings.",
    price: 0.99,
  },
  {
    id: "Ukrainian",
    name: "Ukrainian",
    ingredients: "1 cup milk, 1/4 teaspoons active dry yeast (1 packet), 2 Tablespoons sugar, 2 Tablespoons oil (sunflower, avocado, or olive), 3 cups all-purpose flour (380 g), 2 teaspoons salt, 1 egg beaten.",
    price: 0.99,
  },
  {
    id: "Berliner",
    name: 'Berliner',
    ingredients: "1 cup warm milk, tablespoons unsalted butter, 1/4 teaspoons active dry yeast, 1/2 cups cake flour, tablespoons sugar, 1/2 teaspoon salt, 3 egg yolks, Canola oil for frying, ounces jam strawberry, 2 cups powdered sugar",
    price: 0.99,
  },
  {
    id: "Smultring",
    name: 'Smultring',
    ingredients: "2 large eggs, 150 g granulated sugar, 180 ml sour cream, 120 ml heavy cream, 360 g sifted all-purpose flour, 2 teaspoons baking soda, ½ teaspoons ground cardamom, 1 liter vegetable oil or lard “smult” for frying",
    price: 0.99,
  },
  {
    id: "Nun bunches",
    name: 'Nun bunches',
    ingredients: "1/2 cup butter, 1 cup milk, 3/4 cup all purpose flour, 4 eggs, 1 tbsp. granulated sugar",
    price: 0.99,
  },
];

const MealList = (props) => {

  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItems
      id={meal.id}
      key={meal.id}
      name={meal.name}
      ingredients={meal.ingredients}
      price={meal.price}
    />
  ))

  return (
    <div className={styles.meals}>
      <Card>
        <ul>
          {mealList}
        </ul>
      </Card>
    </div>
  )
};

export default MealList;