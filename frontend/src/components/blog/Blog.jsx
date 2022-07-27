import React from 'react'
import Article from '../../components/article/Article'

import "./blog.css"
import { blog01, blog02, blog03, blog04, blog05 } from './imports'

const Blog = () => {
  return (
    <div className='gpt3__blog section-padding' id="blog">
      <div className='gpt3__blog-heading'>
        <h1 className='gradient-text'>
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog01} date="Sep 19 2022" title=" GPT-3 and Open AI is the future. Let us explore how it is built!"/>
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={blog02} date="Sep 19 2022" title=" GPT-3 and Open AI is the future. Let us explore how it is built!"/> 
          <Article imgUrl={blog03} date="Sep 19 2022" title=" GPT-3 and Open AI is the future. Let us explore how it is built!"/> 
          <Article imgUrl={blog04} date="Sep 19 2022" title=" GPT-3 and Open AI is the future. Let us explore how it is built!"/>
          <Article imgUrl={blog05} date="Sep 19 2022" title=" GPT-3 and Open AI is the future. Let us explore how it is built!"/> 
        </div>
      </div>
    </div>
  )
}

export default Blog