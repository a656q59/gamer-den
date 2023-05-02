import {Text, SimpleGrid} from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import useData from '../hooks/useData';


const  GameGrid=()=> {
    const {data,error,isLoading} = useGames();
    const skeletons = [1,2,3,4,5,6];
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{sm:1,md:2,lg:3,xl:5}} spacing={10} padding='20px'>
                {isLoading && skeletons.map(skeleton=><GameCardContainer><GameCardSkeleton key={skeleton}/></GameCardContainer>)}
                {data.map((d)=>(
                <GameCardContainer><GameCard key={d.id} game={d}/></GameCardContainer>
                ))}
            </SimpleGrid>
        </>
    );
}

export default GameGrid;