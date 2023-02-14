import React, {Component} from "react";
import CategoryList from "./CategoryList";
import CategoryDescription from "./CategoryDescription";
import Meal from "./Meal";
import {useEffect, useState} from 'react';

function App() {
    const [categories, setCategories] = useState([]);
    const [currentCategory, setCurrentCategory] = useState([]);
    let [categoryDesc] = useState([]);
    let [currentMeal] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/categories')
            .then(res => res.json().then(data => {
                console.log(data.categories)
                setCategories(data.categories)
                setCurrentCategory(data.categories[0].strCategoryDescription)
                console.log(data.categories[0])
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

        fetch('http://localhost:8000/mealByName?name='+searchString)
        .then(res => res.json().then(data => {
            //setCurrentMeal(data)
        }))

        return currentMeal;
    }

    // console.log(categories);

    return (
        <div className="App">
            <h1>Meal-Finder</h1>
            <h3>Select a Category:</h3>
            <select value={currentCategory} onChange={(e) => handleChangeCategory(e)}
                    id={"selectCategory"}><CategoryList categories={categories}/></select>
            <CategoryDescription category={currentCategory}/>

            <input id="searchMeal" type="text" onChange={(e) => searchForMeal(e) }></input>
            <Meal meal={currentMeal}></Meal>
        </div>
    );

}

export default App;