import { render, fireEvent, screen } from '@testing-library/react'

import { Notification } from './Notification'

describe('Notification', () => {
  it('displays a simple notification', () => {
    render(
      <Notification
        title="Updates Available"
        content="A new version is available. Please upgrade for the best experience."
        actionLabel="Update"
        actionCallback={jest.fn()}
      />,
    )

    expect(screen.getByText(/updates available/i)).toBeInTheDocument()
    expect(screen.getByText(/a new version is available/i)).toBeInTheDocument()
    expect(screen.getByRole(/button/i, { name: /update/i })).toBeInTheDocument()
  })

  it('calls actionCallback when the action button is clicked', () => {
    const callback = jest.fn()

    render(
      <Notification
        title="Updates Available"
        content="A new version is available. Please upgrade for the best experience."
        actionLabel="Update"
        actionCallback={callback}
      />,
    )

    fireEvent.click(screen.getByRole(/button/i, { name: /update/i }))

    expect(callback).toHaveBeenCalledTimes(1)
  })
})
