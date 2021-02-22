import React from 'react'
import { FaBeer } from '@react-icons/all-files/fa/FaBeer'

import Button from './Button/Button'

function App() {
  return (
    <div className="App">
      <Button isFullWidth={true} display={'block'} color={'primary'}>
        SAVE
      </Button>
      <Button startIcon={<FaBeer />} style={{ marginTop: '1rem' }} color={'primary'}>
        SAVE
      </Button>
      <Button style={{ marginTop: '1rem' }} display={'block'} size={'sm'} color={'primary'}>
        SAVE
      </Button>
      <Button style={{ marginTop: '1rem' }} display={'block'} size={'md'} color={'primary'}>
        SAVE
      </Button>
      <Button style={{ marginTop: '1rem' }} display={'block'} size={'lg'} color={'danger'}>
        SAVE
      </Button>
      <Button
        isRounded={true}
        style={{ marginTop: '1rem' }}
        display={'block'}
        size={'xl'}
        color={'warning'}
      >
        SAVE
      </Button>
      <Button style={{ marginTop: '1rem' }} display={'block'} size={'xl'} color={'light'}>
        SAVE
      </Button>
      <Button disabled={true} style={{ marginTop: '1rem' }} display={'block'} size={'md'}>
        disabled
      </Button>
    </div>
  )
}

export default App
