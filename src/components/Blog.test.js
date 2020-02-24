import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'

const blog = {
  title: 'ayayayay',
  author: 'iivari',
  likes: 1,
  url: 'huu.com'
}

test('renderöi titlen ja authorin muttei muita tietoja', () => {
  const component = render(
    <Blog blog={blog} />
  )
  expect(component.container).toHaveTextContent(
    'ayayayay', 'iivari'
  )
  expect(component.container).not.toHaveTextContent(
    'huu.com'
  )
})

test('näyttää urlin ja liket kun nappia on painettu', async () => {

  const component = render(
    <Blog blog={blog} />
  )
  const button = component.getByText('view')
  fireEvent.click(button)

  expect(component.container).toHaveTextContent(
    'likes: 1', 'huu.com'
  )
})

test('kaksi klikkausta like-nappiin kutsuu sitä kahdesti', async () => {

  const mockHandler = jest.fn()

  const component = render(
    <Blog blog={blog} update = {mockHandler}/>
  )
  const button = component.getByText('view')
  fireEvent.click(button)

  const buttonTwo = component.getByText('like')
  fireEvent.click(buttonTwo)
  fireEvent.click(buttonTwo)

  expect(mockHandler.mock.calls.length).toBe(2)
})


