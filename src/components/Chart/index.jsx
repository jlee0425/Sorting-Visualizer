import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import Container from '@material-ui/core/Container'

import AnimatedChart from './animatedChart'
import RegularChart from './regularChart'

import { UPDATE_ARRAY } from '../../redux/actionTypes'
import { bubbleSort } from '../../algorithms/bubbleSort'
import { heapSort } from '../../algorithms/heapSort'
import { insertionSort } from '../../algorithms/insertionSort'
import { mergeSort } from '../../algorithms/mergeSort'
import { quickSort } from '../../algorithms/quickSort'

const Chart = () => {
  const arr = useSelector(state => state.arr)
  const algorithm = useSelector(state => state.algorithm, shallowEqual)
  const isSorting = useSelector(state => state.isSorting)

  const dispatch = useDispatch()
  const maxHeight = arr.length * 20

  if (isSorting) {
    const animations = bubbleSort(arr)
    console.log(animations)
  }
  return (
    <Container
      style={{
        width: '100%',
        height: '700px',
        background: '#E5F2E5',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'flex-end'
      }}
    >
      {!isSorting ? (
        <RegularChart data={arr} />
      ) : (
        <RegularChart data={arr} />
        // <AnimatedChart original={arr} animation={animations} />
      )}
    </Container>
  )
}

export default Chart
