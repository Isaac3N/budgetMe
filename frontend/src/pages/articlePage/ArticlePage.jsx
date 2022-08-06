import React, {useState} from 'react'
import "../../components/blog/blog.css"
import BlogImage from "../../assets/blog.webp"
import "./article-page.css"
import { Article, Navbar } from "../../components/base"
import ReactPaginate from "react-paginate";
import { Articles } from './articles'


const ArticlePage = () => {
 

  const [pageNumber, setPageNumber] = useState(0)
  const articlesPerPage = 10
  const pagesVisited = pageNumber * articlesPerPage

  const displayArticles = Articles.slice(pagesVisited, pagesVisited + articlesPerPage)
    .map((a) =>{
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
  const pageCount = Math.ceil(Articles.length/ articlesPerPage)

  const changePage = ({selected}) => {
    setPageNumber(selected)
  }

  return (
    <div>
      <Navbar/>
      <div className='budgetme-header section-padding' id="home">
        <div className="budgetme-header-content">
          <h1 className="gradient-text">
            The Latest and Trendiest Finance and Economic Articles brought to your Doorstep.
          </h1>
          <p>"The more that you read, the more things you will know. The more that you learn, the more places you’ll go.”-- Dr Seuss</p>
          
        </div>

        <div className="budgetme-header-image">
          <img src={BlogImage} alt="blogging" /> 
        </div>
        
      </div>

      <div className='budgetme-blog-heading section-padding'>
        <h2 className='gradient-text'>
          Articles Scraped and Curated with Love 💙 
        </h2>
      </div>

      <div className="budgetme-blog-container section-padding">

        <div className="budgetme-blog-container-groupB">

            {displayArticles}
            <ReactPaginate 
              previousLabel={"prev"}
              nextLabel={"next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"pagination-buttons"}
              previousLinkClassName={"previous-buttons"}
              nextLinkClassName={"next-button"}
              disabledClassName={"pagination-disabled"}
              activeClassName = {"pagination-active"}
            />
        </div>
      
      </div>

      </div>
  )
}

export default ArticlePage