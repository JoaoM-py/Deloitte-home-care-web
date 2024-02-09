import logo from "../../assets/images/logo.png"
import exit from "../../assets/images/exit.png"
import { Container, Header, Logo, NavbarImage, NavbarSpan } from "./styles";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  async function handleExit() {
    navigate("/");
  }
  
    return (
        <Container>
        <Header>
          <Logo src={logo} alt="logo" />
        </Header>
        <NavbarSpan onClick={handleExit}>
          <NavbarImage src={exit} alt="sair" />
          Sair
        </NavbarSpan>
      </Container>
    );
  }