import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: all 0.3s ease;
  background-color: ${({ scrolled }) => (scrolled ? '#0F1624' : 'transparent')};
  box-shadow: ${({ scrolled }) => (scrolled ? '0 10px 30px -10px rgba(2, 12, 27, 0.7)' : 'none')};

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }    
`;

export const Span = styled.span` 
  font-size: 2rem;
`;

export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-items: center;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;

export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  display: flex;
  justify-content: center;
  align-items: center;
  
  li {
    margin: 0 1.5rem;
    list-style-type: none;
  }
  
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 1 / 3 / 6;
    width: 100%;
    margin-right: 0;
    
    li {
      margin: 0 0.5rem;
    }
  }
`;

export const Div3 = styled.div`
  grid-area: 1 / 3 / 2 / 4;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 3 / 1 / 4 / 6;
    width: 100%;
    justify-content: center;
    gap: 0.5rem;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

// Mobile Menu
export const MobileIcon = styled.div`
  display: none;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    color: white;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    width: 100%;
    height: ${({ isOpen }) => (isOpen ? '100vh' : '0')};
    position: absolute;
    top: 80px;
    left: 0;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    transition: all 0.5s ease;
    background: #0F1624;
    z-index: 5;
    padding: ${({ isOpen }) => (isOpen ? '2rem 0' : '0')};
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;

// Social Icons 
export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;