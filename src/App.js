import React, { useState, Component } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';

import SearchBar from './components/SearchBar';
import TeamSource from './api/TeamSource';
import TeamListCard from './components/TeamCardList';

function App() {

  const [state, setState] = useState({
    results: []
  });

  const onSearch = async (text) => {
    const results = await TeamSource.get()
    setState(prevState => {
      return {...prevState, results:results}
    })
  }

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        {/* <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid> */}
        <h2>Football App</h2>
        <SearchBar onSearch={onSearch} />
        <TeamListCard results={state.results}/>
      </Box>
    </ChakraProvider>
  );
}

export default App;
