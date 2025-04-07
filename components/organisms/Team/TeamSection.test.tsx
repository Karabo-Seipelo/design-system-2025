import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TeamSection from ".";

describe("TeamSection", () => {
  const mockTeam = [
    {
      name: "John Doe",
      role: "Software Engineer",
      imageUrl: "/john-doe.jpg",
      description:
        "John is a skilled software engineer with 5 years of experience.",
    },
    {
      name: "Jane Smith",
      role: "Product Manager",
      imageUrl: "/jane-smith.jpg",
      description:
        "Jane is an experienced product manager who loves building great products.",
    },
  ];

  it("renders the title, subtitle, and description", () => {
    render(
      <TeamSection
        title="Our Team"
        subTitle="Meet the Team"
        description="We are a group of passionate individuals."
        team={mockTeam}
      />,
    );

    expect(screen.getByText("Our Team")).toBeInTheDocument();
    expect(screen.getByText("Meet the Team")).toBeInTheDocument();
    expect(
      screen.getByText("We are a group of passionate individuals."),
    ).toBeInTheDocument();
  });

  it("renders all team members", () => {
    render(
      <TeamSection
        title="Our Team"
        subTitle="Meet the Team"
        description="We are a group of passionate individuals."
        team={mockTeam}
      />,
    );

    mockTeam.forEach((member) => {
      expect(screen.getByText(member.name)).toBeInTheDocument();
      expect(screen.getByText(member.role)).toBeInTheDocument();
      expect(screen.getByText(member.description)).toBeInTheDocument();
    });
  });

  it("does not render subtitle or description if not provided", () => {
    render(
      <TeamSection
        title="Our Team"
        subTitle=""
        description=""
        team={mockTeam}
      />,
    );

    expect(screen.queryByText("Meet the Team")).not.toBeInTheDocument();
    expect(
      screen.queryByText("We are a group of passionate individuals."),
    ).not.toBeInTheDocument();
  });

  it("renders an empty state when no team members are provided", () => {
    render(
      <TeamSection
        title="Our Team"
        subTitle="Meet the Team"
        description="We are a group of passionate individuals."
        team={[]}
      />,
    );

    expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
  });
});
