import React from 'react'
import Meal from "./Meal";

export default function MealList({ meals }) {
    return (
        meals.map(meal => {
            return <Meal meal={meal} />
        })

    )
}
