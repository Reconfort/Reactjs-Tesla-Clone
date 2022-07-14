import React from 'react'
import styled from "styled-components"
import Section from './Section'

const Home = () => {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touches Delivery"
        backgroundImg="model-s.jpg"
        leftBtnOrder="Customer Order"
        rightBtnOrder="Exisitng inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touches Delivery"
        backgroundImg="model-y.jpg"
        leftBtnOrder="Customer Order"
        rightBtnOrder="Exisitng inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touches Delivery"
        backgroundImg="model-3.jpg"
        leftBtnOrder="Customer Order"
        rightBtnOrder="Exisitng inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touches Delivery"
        backgroundImg="model-x.jpg"
        leftBtnOrder="Customer Order"
        rightBtnOrder="Exisitng inventory"
      />
      <Section
        title="Lower Cost Solar Panels in america"
        description="Money-back Guarantee"
        backgroundImg="solar-panel.jpg"
        leftBtnOrder="Order now"
        rightBtnOrder="Learn more"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar Roofs cost less than new roof"
        backgroundImg="solar-roof.jpg"
        leftBtnOrder="Order now"
        rightBtnOrder="Learn more"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnOrder="Shop now"
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
  height:100vh; 
 `