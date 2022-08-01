import React, {useState, useEffect} from 'react'
import "../../components/blog/blog.css"
import BlogImage from "../../assets/blog.webp"
import "./article-page.css"
import axios from "axios"
import { Article, Navbar } from "../../components/base"
import ReactPaginate from "react-paginate";


const ArticlePage = () => {
 
  const [articles, setArticles] = useState([]);
	useEffect(() => {
		const getArticles = async () => {
			const response = await axios.get(
				"https://newsapi.org/v2/everything?q=finance&sortBy=popularity&apiKey=e7b43ea17cb241cbaf20d6049e24c812"
			);
			console.log(response);
			setArticles(response.data.articles);
		};
		getArticles();
	}, []);  
  const [pageNumber, setPageNumber] = useState(0)
  const articlesPerPage = 10
  const pagesVisited = pageNumber * articlesPerPage

  const displayArticles = articles.slice(pagesVisited, pagesVisited + articlesPerPage)
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
  const pageCount = Math.ceil(articles.length/ articlesPerPage)

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
          Articles Curated with Love 💙 (but mostly newsapi.org)
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
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName = {"paginationActive"}
            />
        </div>
      
      </div>

      </div>
  )
}

export default ArticlePage