import styled from 'styled-components';
import backgroundImg from "../../assets/images/BG.jpg"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
  font-family: 'Arial', sans-serif;
  color: #F9FEFF;
`;

export const Button = styled.button`
  padding: 12px 24px;
  font-size: 18px;
  font-family: 'Arial', sans-serif;
  background-color: #020202;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2c030b;
  }
`;