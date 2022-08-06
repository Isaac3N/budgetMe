import React from 'react'
import Article from '../../components/article/Article'

import "./blog.css"
import { Articles } from '../../pages/articlePage/articles'

const Blog = () => {
	
  const size =6
 
  const items = Articles.slice(0, size)
  console.log(items)

  return (
    <div className='budgetme-blog section-padding' id="blog">
      <div className='budgetme-blog-heading'>
        <h1 className='gradient-text'>
          Our Curated Feed to Keep you in the Know 
        </h1>
      </div>
      
      <div className="budgetme-blog-container">
        <div className="budgetme-blog-container-groupB">


        { items.map((a)=>{
          return (

            <Article 
              author ={a.author}
              title={a.title}
              urlToImage={a.urlToImage}
              description={a.description}
              url ={a.url}
              
            />
          )
        })
        }
  
        </div>
      
      </div>
    </div>
  )
}

export default Blog