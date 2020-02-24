import React, { useState } from 'react'
import blogService from '../services/blogs'
import PropTypes from  'prop-types'

const Button = ({ setUser }) => {
  return (
    <button onClick = {() => {setUser(null); window.localStorage.clear()}}> logout </button>
  )
}

const Blog = ({ blog }) => {
  const [show, setShow] = useState(false)
  const clickToShow = () => {
    setShow(!show)
  }
  if (show) {
    return (
      <div className = 'blog'>
        <div> {blog.title} {blog.author} <button onClick = {() => {clickToShow()}}> hide </button>
          <p>
            {blog.url} <br />  likes: {blog.likes} <button onClick = {() => {blogService.update(blog.id, { title: blog.title, author: blog.author, likes: blog.likes+1, url: blog.url })}}> like </button> <br /> {blog.user.name} <br />
          </p>
          <button onClick = {() => {blogService.remove(blog.id)}}> remove </button>
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

const BlogList = ({ blogs, user, setUser }) => {

  const sorter = (i, j) => {
    return i.likes > j.likes ? -1 : (i.likes < j.likes ? 1 : 0)
  }

  return (
    <div>
      <h2>Blogs</h2>
      <h3>{user.name} logged in</h3>
      <p>
        {user.name} logged in <Button setUser = {setUser}/>
      </p>
      {blogs.sort(sorter).map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </div>
  )
}

BlogList.propTypes = {
  user: PropTypes.object.isRequired,
  setUser: PropTypes.func.isRequired
}

export default BlogList