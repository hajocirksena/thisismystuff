import React from 'react'
import { render } from '@testing-library/react'
import AddButton from './AddButton'
import { BrowserRouter as Router } from 'react-router-dom'

test('renders AddButton', () => {
  const { getByAltText } = render(
    <Router>
      <AddButton />
    </Router>
  )
  const button = getByAltText('add item')
  expect(button).toBeInTheDocument()
})
