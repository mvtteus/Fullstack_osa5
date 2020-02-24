import React, { useState } from 'react'

const Blog = ({ blog, update }) => {
  const [show, setShow] = useState(false)
  const clickToShow = () => {
    setShow(!show)
  }

  if (show) {
    return (
      <div className = 'blog'>
        <div> {blog.title} {blog.author} <button onClick = {() => {clickToShow()}}> hide </button>
          <p>
            {blog.url} <br />  likes: {blog.likes} <button onClick = {() => {update(blog.id, { title: blog.title, author: blog.author, likes: blog.likes+1, url: blog.url })}}> like </button> <br /> {blog.user} <br />
          </p>
          <button> remove </button>
        </div>
      </div>
    )
  }
  return (
    <div>
      <p> {blog.title} {blog.author} <button onClick = {() => {clickToShow()}}> view </button> </p>
    </div>
  )
}

export default Blog
