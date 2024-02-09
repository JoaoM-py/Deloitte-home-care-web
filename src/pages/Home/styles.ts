import styled from "styled-components";

export const Container = styled.div`
  background: #f4f4f4;
  height: 100vh;
  margin-left: 8rem;
  padding: 2.25rem;
  overflow-y: auto;
`;

export const Header = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 1.5rem;
  color: #333333;

  &:before {
    content: "";
    background: url("https://raw.githubusercontent.com/The-Bugger-Ducks/owl-partners-web/b562845db34d3c7ea408cfed95a09dc72f78ba0c/src/assets/icons/big-menu.svg")
      no-repeat;
    width: 2rem;
    height: 2rem;
    float: left;
    margin: 0 8px 0 0;
  }
`;

export const Description = styled.h1`
  font-weight: 500;
  font-size: 1rem;
  color: #666666;
`;

export const Cards = styled.main`
  margin: 3rem 0 0 0;
  display: grid;
  gap: 2rem;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "lastReport actions "
    "CriticalDevices WarningDevices"
    "OnDevices OnDevices";
`;