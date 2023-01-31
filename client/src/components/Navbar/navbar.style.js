import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
`;

export const LeftCotainer = styled.div`
  flex: 30%;
  display: flex;
  /* align-items: center; */
  /* padding-left: 5%; */
`;
export const RightCotainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: flex-end;
  padding-right: 50px;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  color: black;
  font-size: x-large;
  font-family: "Courier New", Courier, monospace;
  text-decoration: none;
  margin: 10px;
`;

export const Logo = styled.img`
  margin: 10px;
  max-width: 180px;
  height: auto;
`;

export const Toggler = styled.button`

`

export const NavbarExtendedContainer = styled.div``;
