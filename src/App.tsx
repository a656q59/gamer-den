import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlaformSelector from "./components/PlaformSelector";
import SortSelector from "./components/SortSelector";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav "" main"`,
        lg: `"nav nav""side main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        {" "}
        <NavBar />{" "}
      </GridItem>
      <Show above="lg">
        <GridItem area={"side"} paddingX={5}>
          {" "}
          <GenreList />{" "}
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={5}>
          <GameHeading />

          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlaformSelector />
            </Box>

            <SortSelector />
          </Flex>
        </Box>

        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
