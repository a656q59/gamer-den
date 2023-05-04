import {Text, SimpleGrid} from '@chakra-ui/react';
import useGames, { Platform } from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';
import { GameQuery } from '../App';


interface Props{
   gameQuery:GameQuery
}


const  GameGrid=({gameQuery}:Props)=> {
    const {data,error,isLoading} = useGames(gameQuery);
    const skeletons = [1,2,3,4,5,6];


    if(error) return <Text>{error}</Text>


    return (
          
            <SimpleGrid columns={{sm:1,md:2,lg:3,xl:4}} spacing={6} padding='20px'>
                {isLoading && skeletons.map(skeleton=><GameCardContainer key={skeleton}><GameCardSkeleton /></GameCardContainer>)}
                {data.map((d)=>(
                <GameCardContainer key={d.id}><GameCard  game={d}/></GameCardContainer>
                ))}
            </SimpleGrid>
    );

    
}

export default GameGrid;