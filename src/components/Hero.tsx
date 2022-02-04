import { Flex, Heading } from '@chakra-ui/react'

export const Hero = ({ title }: { title: string }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    height="100vh"
    bgClip="text"
    maxWidth={1000}
    marginX="auto"
    color="primary"
  >
    <Heading fontSize="3vw" textAlign="center">{title}</Heading>
  </Flex>
)

Hero.defaultProps = {
  title: 'Example of Chakra UI + Figma tokens export',
}
