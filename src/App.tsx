import { Grid, GridItem } from '@chakra-ui/react'
import { Show } from '@chakra-ui/react'
import NavBar from './components/NavBar';


function App() {

  return (
    <Grid templateAreas={{
      base:`"nav "" main"`,
      lg:`"nav nav""side main"`
    }}>
      <GridItem   area='nav'>    <NavBar/>  </GridItem>
      <Show above='lg'>
      <GridItem  bg='pink.300' area={'side'}>    Side  </GridItem>
      </Show>
      <GridItem  bg='dodgerblue' area='main'>    Main  </GridItem>

    </Grid>
  )
}

export default App
