import { Grid, GridItem } from '@chakra-ui/react'
import { Show } from '@chakra-ui/react'
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import {useState} from 'react';
import { Genre } from './hooks/useGenres';
import PlaformSelector from './components/PlaformSelector';
import { Platform } from './hooks/useGames';



function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  const [selectedPlatform, setSelectedPlatform] = useState<Platform|null>(null);

  console.log(selectedPlatform);
  return (
    <Grid templateAreas={{
      base:`"nav "" main"`,
      lg:`"nav nav""side main"`
    }}
    templateColumns={{
      base:'1fr',
      lg:'200px 1fr'
    }}>
      <GridItem   area='nav'>    <NavBar/>  </GridItem>
      <Show above='lg'>
      <GridItem  area={'side'} paddingX={5}>    <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre)=>setSelectedGenre(genre)}/>  </GridItem>
      </Show>
      <GridItem  area='main'> <PlaformSelector selectedPlatform={selectedPlatform} onSelectPlatform={(platform)=>setSelectedPlatform(platform)}/>   <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre} />  </GridItem>

    </Grid>
  )
}

export default App
