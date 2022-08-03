import styled from "styled-components";

import { Link } from "@/components/common";
import wonderLogo from "@/assets/img/wonder-logo.svg";

const StyledNavbar = styled.nav`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  top: 0;
  left: 0;
  width: 100%;
  color: var(--color-light);
  grid-gap: 6rem;
  padding: 2rem 1rem;
  user-select: none;
  z-index: var(--navbar-index);
`;

const NavLink = styled(Link)<{ order?: number; disabled?: boolean }>`
  text-transform: uppercase;
  order: ${({ order }) => order ?? "initial"};

  ${({ disabled }) =>
    disabled &&
    `
    pointer-events: none;
    opacity: .6;
  `}
`;

const WonderLogo = styled(Link)`
  display: flex;
  order: 3;
`;

const navLinks = [
  {
    name: "lore",
    url: "/lore",
  },
  {
    name: "team",
    url: "/team",
    disabled: true,
  },
  {
    name: "portfolio",
    url: "/portfolio",
    disabled: true,
  },
  {
    name: "join us",
    url: "/joinus",
    disabled: true,
  },
];

interface NavbarProps {}

export const Navbar = ({}: NavbarProps) => (
  <StyledNavbar>
    <WonderLogo to="/">
      <img src={wonderLogo} alt="Wonderland logo" />
    </WonderLogo>

    {navLinks.map((link, i) => (
      <NavLink
        to={link.url}
        order={i + 1}
        key={link.name}
        disabled={link.disabled}
      >
        {link.name}
      </NavLink>
    ))}
  </StyledNavbar>
);
