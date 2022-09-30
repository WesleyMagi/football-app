import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';

import SearchBar from './components/SearchBar';
import TeamSource from './api/TeamSource';
import TeamListCard from './components/TeamCardList';

function App() {

  const [state, setState] = useState({
    results: []
  });
  const [APIData, setAPIData] = useState([])

  const onSearch = async (text) => {
    const results = await TeamSource.get()
    setState(prevState => {
      return {...prevState, results:results}
    })
  }

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <h2>Football App</h2>
        <SearchBar onSearch={onSearch} />
        <TeamListCard results={state.results}/>
      </Box>
    </ChakraProvider>
  );
}

export default App;
