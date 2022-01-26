import { NavLinkEl } from './AppNav.styled';

export default function AppNav() {
  return (
    <nav>
      <NavLinkEl exact to="/">
        Home
      </NavLinkEl>
      <NavLinkEl to="/home">Trend movies</NavLinkEl>
      <NavLinkEl to="/movies">Find movie</NavLinkEl>
      <NavLinkEl to="/images">Find image</NavLinkEl>
      <NavLinkEl to="/phonebook">Phone book</NavLinkEl>
      <hr />
    </nav>
  );
}
