import React from 'react'
import { render, screen } from '@testing-library/react'
import HomePage from '../pages/home'

describe('HomePage', () => {
  it('renders logo and content', () => {
    render(<HomePage />)
    expect(screen.getByAltText('Logo image')).toBeInTheDocument()
    expect(screen.getByText(/Electron/)).toBeInTheDocument()
    expect(screen.getByText(/Next.js/)).toBeInTheDocument()
  })
})
