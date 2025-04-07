import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import StatisticsSection from ".";

describe("StatisticsSection", () => {
  const mockStatistics = [
    { statistic: "100+", label: "Projects Completed" },
    { statistic: "50+", label: "Happy Clients" },
  ];

  jest.mock("next/image", () => ({
    __esModule: true,
    default: (
      props: JSX.IntrinsicAttributes &
        React.ImgHTMLAttributes<HTMLImageElement>,
    ) => {
      return <img {...props} />;
    },
  }));

  it("renders the StatisticsSection without optional props", () => {
    render(
      <StatisticsSection
        title="Our Achievements"
        statisticsTitle="Key Metrics"
        statistics={mockStatistics}
      />,
    );

    expect(screen.getByText("Our Achievements")).toBeInTheDocument();
    expect(screen.getByText("Key Metrics")).toBeInTheDocument();
    expect(screen.getByText("100+")).toBeInTheDocument();
    expect(screen.getByText("Projects Completed")).toBeInTheDocument();
    expect(screen.getByText("50+")).toBeInTheDocument();
    expect(screen.getByText("Happy Clients")).toBeInTheDocument();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("applies custom classes to the StatisticsSection", () => {
    render(
      <StatisticsSection
        title="Our Achievements"
        statisticsTitle="Key Metrics"
        statistics={mockStatistics}
        classes="custom-class"
      />,
    );

    expect(screen.getByText("Our Achievements").closest("div")).toHaveClass(
      "custom-class",
    );
  });
});
