import React from 'react'
import "./article.css"

const Article = ({imgUrl, date, title}) => {
  return (
    <div className='budgetme-blog-container-article'>
      <div className='budgetme-blog-container-article-image'>
        <img src={imgUrl} alt="blogimage"/> 
      </div>
      <div className="budgetme-blog-container-article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article </p>
      </div>
    </div>
  )
}

export default Article