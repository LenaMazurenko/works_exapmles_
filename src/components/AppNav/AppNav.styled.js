import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavLinkEl = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: #3b332a;
  font-size: 18px;

  &.active {
    color: red;
  }
`;
