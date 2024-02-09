import { useNavigate } from "react-router-dom";
import { Container, Button, Title } from "./styles";





export default function Init() {
    const navigate = useNavigate();

    async function handleDashboardClick(){
            navigate("/home");
    }
    return (
        <Container>
          <Title>Bem-vindo ao Sistema de Dashboard de Aparelhos Home Care</Title>
          <Button onClick={handleDashboardClick}>Acessar Dashboard</Button>
        </Container>
      );
    
}