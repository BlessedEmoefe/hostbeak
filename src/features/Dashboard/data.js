import { colors } from "../../infrastructure/theme/colors";

export const ChartData = [
  {
    chartName: "Average Response Time",
    cardName: "Average Response Time",
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        label: "Dataset 1",
        data: [10, 18, 48, 8, 42, 32, 45, 12],
        // color: "#ff6600",
        borderColor: colors.orange,
        backgroundColor: "#fff",
      },
    ],
  },
  {
    chartName: "Replies per resolution",
    cardName: "Average Replies",
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        label: "Dataset 1",
        data: [10, 18, 48, 8, 42, 32, 45, 12],
        // color: "#ff6600",
        borderColor: colors.blue,
        backgroundColor: "#fff",
      },
    ],
  },
  {
    chartName: "Average resolution time",
    cardName: "Average Resolution Rate",
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        label: "Dataset 1",
        data: [10, 18, 48, 8, 42, 32, 45, 12],
        // color: "#ff6600",
        borderColor: colors.pink,
        backgroundColor: "#fff",
      },
    ],
  },
  {
    chartName: "First contact resolution rate",
    cardName: "Average Contact Rate",
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        label: "Dataset 1",
        data: [10, 18, 48, 8, 42, 32, 45, 12],
        // color: "#ff6600",
        borderColor: colors.lightBlue,
        backgroundColor: "#fff",
      },
    ],
  },
];
