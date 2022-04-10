import React from "react";
import {
  AnalyticsCardContainer,
  ChartSection,
  ChartWrapper,
  ChartTools,
  LeftTopSection,
  ChartName,
  PercentageBtn,
  PercentageBtnText,
  RightTopSection,
  HighPriority,
  Indicator,
  HighPriorityText,
  FilterButton,
  VerticalDivider,
  ButtonText,
  CalendarIcon,
  CardSection,
  Card,
  ResponseTime,
  TimeStamp,
} from "./analyticsCard.styles";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Spacer } from "../spacer/spacer.component";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      suggestedMax: 50,
    },
    // x: {
    //   beginAtZero: true,
    //   suggestedMax: 420
    // },
    // ticks: {
    //   stepSize: 100
    // },
  },

  maintainAspectRatio: false,
  elements: {
    backgroundColor: "teal",
    borderWidth: "5px",
    borderColor: "green",
    line: {
      borderWidth: 2,
    },
  },
  plugins: {
    legend: {
      display: false,
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
    tick: {},
  },
};

export const AnalyticsCard = ({
  chartName,
  chartData,
  cardName,
  timeStamp,
}) => {
  return (
    <AnalyticsCardContainer>
      <ChartSection>
        <ChartTools>
          <LeftTopSection>
            <ChartName>{chartData.chartName}</ChartName>
            <PercentageBtn>
              <PercentageBtnText>+4.14%</PercentageBtnText>
            </PercentageBtn>
          </LeftTopSection>
          <RightTopSection>
            <HighPriority>
              <Indicator color={chartData.datasets[0].borderColor} />
              <HighPriorityText>High Priority</HighPriorityText>
            </HighPriority>

            <VerticalDivider />

            <FilterButton>
              <ButtonText>This Month</ButtonText>
              <CalendarIcon />
            </FilterButton>
          </RightTopSection>
        </ChartTools>
        <ChartWrapper>
          <Line
            data={chartData}
            options={options}
            redraw={true}
            height={"100%"}
          />
        </ChartWrapper>
      </ChartSection>
      <CardSection>
        <Card flexDirection="column">
          <ResponseTime>{chartData.cardName}</ResponseTime>
          <Spacer />
          <TimeStamp>30 Mins</TimeStamp>
        </Card>
        <Spacer size="small" />
        <Card flexDirection="column">
          <ResponseTime>Response Time</ResponseTime>
          <Spacer />
          <TimeStamp>1 Hour 30 Mins</TimeStamp>
        </Card>
      </CardSection>
    </AnalyticsCardContainer>
  );
};
