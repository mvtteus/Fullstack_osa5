import React from 'react'
import Togglable from './Togglable'
import PropTypes from  'prop-types'

const blogFormRef = React.createRef()

const BlogForm = ({ createBlog, setErrorMessage }) => {
  return (
    <div>
      <Togglable id = "newBlogToggle" buttonLabel='new blog' ref={blogFormRef}>
        <h2>Create new</h2>
        <form id = "d" onSubmit={() => {createBlog({ title: document.getElementById('a').value, author:document.getElementById('b').value, url: document.getElementById('c').value })
          setErrorMessage(`${document.getElementById('a').value} ${document.getElementById('b').value} added`)
          setTimeout(() => {setErrorMessage(null)}, 5000)}}>
          <div>
          title:
            <input
              type="text"
              id = "a"
            />
          </div>
          <div>
          author:
            <input
              type="text"
              id = "b"
            />
          </div>
          <div>
          url:
            <input
              type="text"
              id = "c"
            />
          </div>
          <button type="submit">create</button>
        </form>
      </Togglable>
    </div>
  )
}

BlogForm.propTypes = {
  createBlog: PropTypes.func.isRequired,
  setErrorMessage: PropTypes.func.isRequired
}

export default BlogForm