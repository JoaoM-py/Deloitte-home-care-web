import Device from "../../utils/interfaces/device";
import Button from "../Button";
import { Container, InnerContainer, Title, Data, Label } from "./styles";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";
  
  interface Props {
    gridArea:
      | "lastReport"
      | "WarningDevices"
      | "CriticalDevices"
      | "OnDevices"
      | "OffDevices"
      | "actions";
    title: string;
    textInformation?: { label: string; data: string };
    chartInformation?: { name: string; total: string}[];
    button?: boolean
    onClick?: () => void;
    
}


export default function Card({
    gridArea,
    title,
    textInformation,
    chartInformation,
    button,
    onClick,
  }: Props) {
 
    return (
      <Container gridArea={gridArea}>
      <Title>{title}</Title>

      {textInformation && (
        <InnerContainer>
          <Data>{textInformation.data}</Data>
          <Label>{textInformation.label}</Label>
        </InnerContainer>
      )}

      {button && (
            <Button onClick={onClick}>Abrir Chamado</Button>
          )}

      {chartInformation && (
        <InnerContainer>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={chartInformation}
              margin={{ top: 32, right: 16, left: 0, bottom: 16 }}
            >
              <CartesianGrid strokeDasharray="3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="total" fill="#82ca9d" />

            </BarChart>
          </ResponsiveContainer>
        </InnerContainer>
      )}
    </Container>
    );
  }