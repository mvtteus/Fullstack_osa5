import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import BlogForm from './BlogForm'

test('funktio kutsutaan oikeilla tiedoilla', () => {
  const createBlog = jest.fn()
  const component = render(
    <BlogForm createBlog={createBlog} />
  )
  const button = component.getByText('new blog')
  fireEvent.click(button)

  const form = component.container.querySelector('#d')
  const title = component.container.querySelector('#a')
  const author = component.container.querySelector('#b')
  const url = component.container.querySelector('#c')


  fireEvent.change(title, {
    target: { value: 'namnam' }
  })
  fireEvent.change(author, {
    target: { value: 'pullaa' }
  })
  fireEvent.change(url, {
    target: { value: 'namnam.com' }
  })
  fireEvent.submit(form)

  expect(createBlog.mock.calls.length).toBe(1)
  expect(createBlog.mock.results).toBe(42)
})