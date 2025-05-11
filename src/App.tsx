import './App.css'
import { Grid, GridItem } from '@chakra-ui/react'
import Nav from './components/Nav'

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        md: `"nav nav" "aside main"`,
      }}
      gridTemplateColumns={{ base: '1fr', md: '200px 1fr' }}
      gridTemplateRows={{ base: 'auto auto', md: 'auto 1fr' }}
      gap={2}
      p={4}
    >
      <GridItem area="nav">
        <Nav />
      </GridItem>

      {/* Aside only shows on md and up using Chakra's responsive style props */}
      <GridItem
        area="aside"
        bg="gold"
        display={{ base: 'none', md: 'block' }}
      >
        ASIDE
      </GridItem>

      <GridItem area="main" bg="dodgerblue">
        MAIN
      </GridItem>
    </Grid>

    
  )
}

export default App

