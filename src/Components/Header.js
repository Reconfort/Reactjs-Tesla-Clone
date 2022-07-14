import React from 'react'
import styled from 'styled-components'
import {CgMenuLeft, CgClose} from 'react-icons/cg'
import { useState } from 'react';

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <Container>

      <a href=''>
        <img src="/images/logo.svg" alt=''/>
      </a>

      <Menu>
        <a href='#'>Modal S</a>
        <a href='#'>Modal 3</a>
        <a href='#'>Modal X</a>
        <a href='#'>Modal Y</a>
      </Menu>

      <RightMenu>
        <a href='#'>Shop </a>
        <a href='#'>Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)}/>
      </RightMenu>
      
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)}/>
        </CloseWrapper>
        <li><a href='#'>Model S</a></li>
        <li><a href='#'>Model 3</a></li>
        <li><a href='#'>Model X</a></li>
        <li><a href='#'>Model Y</a></li>
        <li><a href='#'>Exsiting Inventory</a></li>
        <li><a href='#'>Used Inventory</a></li>
        <li><a href='#'>Trade-in</a></li>
        <li><a href='#'>CyberTruck</a></li>
        <li><a href='#'>Roadster</a></li>
        <li><a href='#'>Semi</a></li>
        <li><a href='#'>Utilities</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container= styled.div`
  min-height: 60px;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  margin: 5px 5rem;
  border:1px solid rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  background-color: white;
  @media (max-width: 768px) {
    margin: 5px 10px;
  }

`

const Menu= styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex:1;
  a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display :none ;
  }
  
  `
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a{
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`

const CustomMenu = styled(CgMenuLeft)`
  cursor: pointer;
  transform: scale(1.2);
`

const BurgerNav = styled.ul`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin:8px 6rem 10px 0;
  border-radius: 20px 20px 20px 20px;
  transform: ${props =>  props.show ? 'translateX(0)' : 'translateX(200%)'};
  transition: transform 0.5s ease-in-out;
  li{
    transition: ease-in-out 0.5s;
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a{
      font-weight: 600;
      
    }
    @media (max-width:768px) {
      margin:8px 1rem 10px 0;
  }
  }

`
const CloseWrapper =styled.div`
  display: flex;
  justify-content: flex-end;
`

const CustomClose =styled(CgClose)`
  cursor: pointer;
`