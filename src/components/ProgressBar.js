import React, { Component } from 'react'
import styled from 'styled-components'

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

    const bookProgress = () => {
      if (this.props.shelf === 'read') {
        return '100%';
      } else if (this.props.shelf === 'wantToRead') {
        return '0';
      } else {
        return `${this.props.progress}%`;
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

export default ProgressBar