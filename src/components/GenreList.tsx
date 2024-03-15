import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

const GenreList = () => {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);

  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading marginBottom={4} fontSize="4xl">
        Genres
      </Heading>
      <List>
        {data?.results.map((d) => (
          <ListItem key={d.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(d.image_background)}
                objectFit="cover"
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={d.id === selectedGenreId ? "bold" : "normal"}
                onClick={() => setSelectedGenreId(d.id)}
                fontSize="lg"
                variant="link"
              >
                {d.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
