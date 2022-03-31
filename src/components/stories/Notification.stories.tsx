import { Story } from '@ladle/react'
import { ComponentProps } from 'react'

import { Notification } from '../Notification'

export const Default: Story<ComponentProps<typeof Notification>> = (args) => (
  <Notification {...args} />
)

Default.args = {
  title: 'Updates Available',
  content: 'A new version is available. Please upgrade for the best experience.',
  actionLabel: 'Update',
  actionCallback: () => alert('update button clicked'),
}
