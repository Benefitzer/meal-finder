import React, { Component } from "react";
import CategoryList from "./CategoryList";
import CategoryDescription from "./CategoryDescription";
import MealList from "./MealList";
import Meal from "./Meal";
import { useEffect, useState } from 'react';

function App() {
    const [categories, setCategories] = useState([]);
    const [currentCategory, setCurrentCategory] = useState([]);
    let [categoryDesc] = useState([]);
    let [currentMeals, setCurrentMeals] = useState([]);
    let [randomMeal, setRandomMeal] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/categories')
            .then(res => res.json().then(data => {
                console.log(data.categories)
                setCategories(data.categories)
                setCurrentCategory(data.categories[0].strCategoryDescription)
                console.log(data.categories[0])
            }))
        fetch('http://localhost:8000/mealByName?name=' + "")
            .then(res => res.json().then(data => {
                setCurrentMeals(data.meals)
            }))

        fetch('http://localhost:8000/randomMeal')
            .then(res => res.json().then(data => {
                console.log(data)
                setRandomMeal(data.meals[0])
            }))
    }, []);


    function handleChangeCategory(e) {
        console.log(e.target.value + ' ' + JSON.stringify(e.target.value))
        setCurrentCategory(e.target.value);
        categoryDesc = e.target.value;
        console.log(currentCategory)
        return currentCategory;
    }

    function searchForMeal(e) {
        console.log(e.target.value + ' ' + JSON.stringify(e.target.value))
        let searchString = e.target.value;

        fetch('http://localhost:8000/mealByName?name=' + searchString)
            .then(res => res.json().then(data => {
                setRandomMeal(data.meals[0])
            }))

        return currentMeals;
    }

    function nextRandomMeal(e) {
        fetch('http://localhost:8000/randomMeal')
            .then(res => res.json().then(data => {
                console.log(data)
                setRandomMeal(data.meals[0])
            }))

        return randomMeal;
    }

    return (
        <div className="App">
            <h1>Meal-Finder</h1>
            <h3>Meal Recommendation:</h3>
            <input type="button" value="Next" onClick={(e) => nextRandomMeal(e)}></input>
            <Meal meal={randomMeal} />
            <h3>Select a Category:</h3>
            <select value={currentCategory} onChange={(e) => handleChangeCategory(e)}
                id={"selectCategory"}><CategoryList categories={categories} /></select>
            <CategoryDescription category={currentCategory} />

            <h3>Search a Meal:</h3>
            <input id="searchMeal" type="text" onChange={(e) => searchForMeal(e)}></input>
            <br />
            <MealList meals={currentMeals} />
        </div>
    );

}

export default App;