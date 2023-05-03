import { Button, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url';



interface Props{
    onSelectGenre:(genre:Genre) =>void;
    selectedGenre:Genre|null
}


const  GenreList=({selectedGenre, onSelectGenre}:Props) =>{
    const {data, isLoading,error} =useGenres();
    if(error) return null;
    if(isLoading) return <Spinner/>
    return (
        <List>
            {data.map(d=><ListItem key={d.id} paddingY='5px'>
                <HStack>
                    <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(d.image_background)}/>
                    <Button fontWeight={d.id===selectedGenre?.id?'bold':'normal'} onClick={()=>onSelectGenre(d)} fontSize='lg' variant='link'>{d.name}</Button>
                </HStack>
                </ListItem>)}
        </List>
    );
}

export default GenreList;