import React, { Component } from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'

const Container = styled.div`
  width: 200px;
  height: 3px;
  background-color: #EEE;
  position: relative;
  display: block;
`

const Progress = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${props => props.shelf === 'read' ? '#219653' : '#888888' };
`

class ProgressBar extends Component {
  
  render () {

    const { shelf, progress } = this.props

    const bookProgress = () => {
      if (shelf === 'read') {
        return '100%';
      } else if (shelf === 'wantToRead') {
        return '0';
      } else {
        return `${progress}%`;
      }
    }

    return (
      <Container>
        <Progress
          style={{
            width: bookProgress()
          }}
          {...this.props}
        />
      </Container>
    )
  }
}

ProgressBar.propTypes = {
  shelf: propTypes.string,
  progress: propTypes.number
}

export default ProgressBar