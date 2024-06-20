import './App.css'
import { Typography } from '@mui/material'
import { theme } from './theme'

function App() {
  return (
    <div className='App'>
      <Typography
        variant='body2'
        color={theme.palette.sidebar.dark}
        sx={{ color: theme.palette.sidebar.main }}>
        Edit <code>src/App.js</code> and save to reload.
      </Typography>
      <a
        className='App-link'
        href='https://reactjs.org'
        target='_blank'
        rel='noopener noreferrer'>
        Learn React
      </a>
    </div>
  )
}

export default App
