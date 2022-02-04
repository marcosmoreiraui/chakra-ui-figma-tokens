import {
   Button,
} from '@chakra-ui/react'

import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'

const Index = () => (
  <Container height="100vh">
    <Hero />
    <Main>
        <Button>Hola</Button>
    </Main>
  </Container>
)

export default Index
