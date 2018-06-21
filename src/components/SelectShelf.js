import React from 'react'
import styled from 'styled-components'

import arrow from '../images/arrow-down.png'
import {Context} from '../Provider'

const Select = styled.select`
  min-width: 105px;
  font-family: 'Spectral', serif;
  -webkit-appearance: none;
  font-size: 14px;
  margin: 10px 10px 5px 10px;
  color: #4F4F4F;
  padding: 2px 18px 2px 9px;
  border: 1px solid #DDDDDD;
  box-sizing: border-box;
  border-radius: 50px;
  background-color: transparent;
  background-size: 7px;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position: 90% center;
`

const SelectShelf = (props) => {
  return (
    <Context.Consumer>
      {(context) => {
        return (
          <Select
            value={props.value}
            onChange={(event) => context.updateShelf(event.target.value, props.book)}
            >
            <option value="" disabled defaultValue>Add to...</option>
            <option value="none">None</option>
            <option value="currentlyReading">Reading</option>
            <option value="wantToRead">To Read</option>
            <option value="read">Completed</option>
          </Select>
        )
      }}
    </Context.Consumer>
  )
}

export default SelectShelf