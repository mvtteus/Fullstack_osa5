describe('Blog app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3001/api/testing/reset')
    cy.visit('http://localhost:3000')
  })

  it('Login from is shown', function() {
    cy.get('#loginForm').contains('username')
    cy.get('#loginForm').contains('password')
  })
})

describe('When logged in', function() {
  beforeEach(function() {
    const user = {
      name: 'matti',
      username: 'matti',
      password: 'matti'
    }
    cy.request('POST', 'http://localhost:3001/api/users/', user)
    cy.login({ username: 'matti', password: 'matti' })
    cy.get('#username').type('matti')
    cy.get('#password').type('matti')
    cy.get('#loginButton').click()
  })

  it('A blog can be created', function() {
    cy.contains('new blog').click()
    cy.get('#a').type('a blog created by cypress')
    cy.get('#b').type('cypress')
    cy.get('#c').type('cypress.fi')

    cy.contains('create').click()

    cy.contains('a blog created by cypress')
  })
})

describe('A blog can be liked and removed', function() {
  it('A blog can be liked', function() {
    cy.contains('view').click()
    cy.contains('like').click()
    cy.contains('likes: 1')
  })

  it('A blog can be removed', function () {
    cy.contains('remove').click()
    cy.should('not.contain', 'a blog created by cypress')
  })
})

describe('Login',function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3001/api/testing/reset')
    const user = {
      name: 'matti',
      username: 'matti',
      password: 'matti'
    }
    cy.request('POST', 'http://localhost:3001/api/users/', user)
    cy.visit('http://localhost:3000')
  })

  it('succeeds with correct credentials', function() {
    cy.get('#username').type('matti')
    cy.get('#password').type('matti')
    cy.get('#loginButton').click()

    cy.contains('matti logged in')
  })

  it('fails with wrong credentials', function() {
    cy.get('#username').type('marko')
    cy.get('#password').type('wrong')
    cy.get('#loginButton').click()

    cy.contains('wrong username or password!')
  })
})
