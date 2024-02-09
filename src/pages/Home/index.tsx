import { useEffect, useState, createContext } from "react";
import dashboardRequests from "../../utils/requests/devices";
import Sidebar from "../../components/Sidebar";

import { Cards, Container, Description, Header, Title } from "./styles";
import Card from "../../components/Card";
import Device from "../../utils/interfaces/dashboard";
import Loading from "../../components/Loading";

export const themeContext = createContext({});

export default function Home() {
   const [dashboardAllData, setDashboardAllData] = useState<Device[]>();
   const [dashboardOnData, setDashboardOnData] = useState<Device[]>();
   const [dashboardOffData, setDashboardOffData] = useState<Device[]>();
   const [dashboardWarningData, setDashboardWarningData] = useState<Device[]>();
   const [dashboardCriticalData, setDashboardCriticalData] = useState<Device[]>();
   const [dashboardLastReportData, setDashboardLastReportData] = useState<Device[]>();
   const [dashboardBadConfigData, setDashboardBadConfigData] = useState<Device[]>();

   const [combinedData, setcombinedData] = useState<Device[]>();



   const [isLoading, setIsLoading] = useState<boolean>(false);

   useEffect(() => {
      getDashboardData();
    }, []);

  async function getDashboardData() {
   setIsLoading(true);

   const dataAll = await dashboardRequests.getAll();
   const dataOn = await dashboardRequests.getOn();
   const dataOff = await dashboardRequests.getOff();
   const dataWarning = await dashboardRequests.getWarning();
   const dataCritical = await dashboardRequests.getCritical();
   const dataLastReport = await dashboardRequests.getLastReport();
   const dataBadConfig = await dashboardRequests.getBadConfig();

   setIsLoading(false);

   setDashboardAllData(dataAll);
   setDashboardOnData(dataOn);
   setDashboardOffData(dataOff);
   setDashboardWarningData(dataWarning);
   setDashboardCriticalData(dataCritical);
   setDashboardLastReportData(dataLastReport);
   setDashboardBadConfigData(dataBadConfig);
 }

 async function ButtonHandler() {
  let reason = prompt('Motivo do chamado:')
  let text;
  if (reason == null || reason === "") {
    alert("Chamado cancelado")
  } else {
    alert("Seu chamado foi aberto!");
  }
  return text
 }

  return (
    <>
      <Sidebar />

      <Container>
        <Header>
          <Title>Dashboard: Análise de Aparelhos Home Care</Title>

          <Description>
            Análises de aparelhos que emitem dados para API
          </Description>
        </Header>

        {isLoading ? (
          <Loading width="100px" height="100px" />
        ) : (
          <Cards>
          <Card
            gridArea="lastReport"
            title="Total de aquipamentos ativos nos ultimos 30min"
            textInformation={{
              label: "Equipamentos ",
              data: dashboardLastReportData
                ? `${dashboardLastReportData.length}`
                : "Informação não identificada",
            }}
          />


          <Card
            gridArea="WarningDevices"
            title="Equipamentos em warning (24h sem reportar)"
            textInformation={{
              label: "Equipamentos ",
              data: dashboardWarningData
                ? `${dashboardWarningData.length}`
                : "Informação não identificada",
            }}
          />

          <Card
            gridArea="CriticalDevices"
            title="Equipamentos em critical (+24h sem reportar)"
            textInformation={{
              label: "Equipamentos ",
              data: dashboardCriticalData
                ? `${dashboardCriticalData.length}`
                : "Informação não identificada",
            }}
          />

        <Card
            gridArea="actions"
            title="Equipamentos mal configurados"
            onClick={ButtonHandler}
            button={true}
            textInformation={{
              label: "Equipamentos ",
              data: dashboardBadConfigData
                ? `${dashboardBadConfigData.length}`
                : "Informação não identificada",
            }}
          />

          <Card
            gridArea="OnDevices"
            title="Dispositivos Ligados e Desligados"
            chartInformation={[
              { name: "Ligados", total: dashboardOnData ?  `${dashboardOnData.length}` : "Informação não identificada"},
              { name: "Desligados", total: dashboardOnData ?  `${dashboardOffData?.length}` : "Informação não identificada"},
            ]}
          />
        </Cards>
        )}
      </Container>
    </>
  );
}
