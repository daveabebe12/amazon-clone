import React from 'react'
import CategoryCard from './categoryCard'
import {categoryInfo} from './categoryFullInfo'
import classes from './category.module.css'

function Category() {
  return (
    <section className={classes.category_container}>
      {
        categoryInfo.map((infos) => (
          <CategoryCard key={infos.name} data={infos} />
        ))
      }
    </section>
  )
}

export default Category; 