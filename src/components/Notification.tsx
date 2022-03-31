import { Box, Button, Flex, Stack, StackDivider, Text, useColorModeValue } from '@chakra-ui/react'

interface Props {
  title: string
  content: string
  actionLabel: string
  actionCallback: () => unknown
}

export const Notification = ({
  title,
  content,
  actionLabel,
  actionCallback,
}: Props): JSX.Element => (
  <Box
    as="section"
    pt={{ base: '4', md: '8' }}
    pb={{ base: '12', md: '24' }}
    px={{ base: '4', md: '8' }}
  >
    <Flex direction="row-reverse">
      <Box
        bg="bg-surface"
        width={{ base: 'full', sm: 'md' }}
        boxShadow={useColorModeValue('md', 'md-dark')}
        borderRadius="lg"
      >
        <Stack direction="row" divider={<StackDivider />} spacing="0">
          <Box p="4">
            <Stack spacing="1">
              <Text fontSize="sm" fontWeight="medium">
                {title}
              </Text>
              <Text fontSize="sm" color="muted">
                {content}
              </Text>
            </Stack>
          </Box>
          <Stack justify="space-evenly" minW="24" divider={<StackDivider />} spacing="0">
            <Button variant="link" size="sm" colorScheme="blue" onClick={() => actionCallback()}>
              {actionLabel}
            </Button>
            <Button variant="link" size="sm">
              Close
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Flex>
  </Box>
)
