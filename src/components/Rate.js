import React, { Component } from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'

import StarSrc from '../images/rate-star.svg'
import RatedStarSrc from '../images/selected-rate-star.svg'

const Container = styled.div`
  display: flex;
  margin: 20px 0 0 0;
`

const Star = styled.div`
  width: 15px;
  height: 15px;
  background-size: contain;
  background-image: url(${StarSrc});
  background-repeat: no-repeat;
  margin: 0 1px;

  &.active {
    background-image: url(${RatedStarSrc});
  }
`

class Rate extends Component {
  render () {

    const {rate} = this.props

    return (
      <Container>
        {[...Array(5)].map((star, index) => <Star key={index} className={ Math.round(rate) > index ? 'active' : '' } />)}
      </Container>
    )
  }
}

Rate.propTypes = {
  rate: propTypes.number
}

export default Rate