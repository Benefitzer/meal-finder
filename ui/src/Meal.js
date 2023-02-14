import React from 'react'

export default function Meal({ meal }) {
    return (
        <div>
            <h4>{meal.strMeal}</h4>
            <img src={meal.strMealThumb} width="460" height="345"></img>
            <br />
        </div>


    )


}
