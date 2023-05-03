import { Grid, GridItem, HStack } from '@chakra-ui/react'
import { Show } from '@chakra-ui/react'
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import {useState} from 'react';
import { Genre } from './hooks/useGenres';
import PlaformSelector from './components/PlaformSelector';
import { Platform } from './hooks/useGames';
import SortSelector from './components/SortSelector';


export interface GameQuery{
  genre:Genre|null;
  platform:Platform|null;
  sortOrder:string;
}



function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  const [selectedPlatform, setSelectedPlatform] = useState<Platform|null>(null);

  const[gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
 
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
      <GridItem  area={'side'} paddingX={5}>    <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre)=>setGameQuery({...gameQuery, genre})}/>  </GridItem>
      </Show>
      <GridItem  area='main'> 
      <HStack spacing={5} paddingLeft={5} marginBottom={5}>
        <PlaformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform)=>setGameQuery({...gameQuery, platform})}/>  
        <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder)=>setGameQuery({...gameQuery, sortOrder})}/>
      </HStack>   
      <GameGrid gameQuery={gameQuery}/>  </GridItem>

    </Grid>
  )
}

export default App
