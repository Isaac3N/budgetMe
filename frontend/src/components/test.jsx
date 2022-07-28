import React, {useState, useEffect} from 'react'
import Article from "../components/article/Article"
import axios from "axios"
import "../components/blog/blog.css"
import Box from "@mui/material/Box"
import LinearProgress from "@mui/material/LinearProgress"




const Blog = () => {
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
  const size =6
  const items = articles.slice(0, size)
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

        { (articles !== []) ?  items.map((a)=>{
          return (

            <Article 
              author ={a.author}
              title={a.title}
              urlToImage={a.urlToImage}
              description={a.description}
              url ={a.url}
              
            />
          )
        }):
          (<Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>)
        }
  
        </div>
      
      </div>
    </div>
  )
}

export default Blog