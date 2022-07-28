import React from 'react'
import "./article.css"
import { RWebShare } from "react-web-share";
import {AiOutlineShareAlt} from "react-icons/ai"

const Article = ({ title, description, url, urlToImage, publishedAt, author }) => {
  return (
    <div className='budgetme-blog-container-article'>
      <div className='budgetme-blog-container-article-image'>
        <img src={urlToImage} alt="blogimage"/> 
      </div>
      <div className="budgetme-blog-container-article-content">
        <div>
          <div >
            <p>{publishedAt}</p><p>Author:{author}</p>
          </div>
          <h3 className='gradient-text'>{title}</h3>
          <h5>{description}</h5>

        </div>
        <a target="_blank" rel="noreferrer"  href={url}>Read Full Article</a>
        <div>
          <RWebShare
            data={{
              text: description,
              url: url,
              title: title,
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <AiOutlineShareAlt size={27} color='white'/>
          </RWebShare>
      </div>
      </div>
    </div>
  )
}

export default Article