import React from 'react'
import { IconButton, Paper } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

const SearchBar = () => {

  const [itemSearch, setItemSearch] = useState('')

  return (
    <Paper
      component='form'
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
      }}
    >
      <input
        className='search-bar'
        placeholder='Search...'
        value={itemSearch}
        onChange={(e) => {setItemSearch(e.target.value)}}
      />
      <IconButton type='submit' sx={{ p: '10px', color: 'black' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default SearchBar