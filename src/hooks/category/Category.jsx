import React from 'react'
import './category.scss'


const Category = ({img, text}) => {

    return (
        <section class="container-category">
            <div className="category-background">
                <img src={img} alt="" />
            </div>
            <div className="category-text">
                <h2>{text}</h2>
            </div>
        </section>
    )
}

export default Category
