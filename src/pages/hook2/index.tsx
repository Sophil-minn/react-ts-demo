import React from 'react'
import Box from './Box'
import Box2 from './Box2'
import PrevCount from './PrevCount'
import ScrollView from './ScrollView'

function index() {
  return (
    <div>
      <Box />
      <h3>Box2</h3>
      <Box2 />
      <h3>PrevCount</h3>
      <PrevCount />
      <h3>ScrollView</h3>
      <ScrollView row={'row'} />
    </div>
  )
}

export default index