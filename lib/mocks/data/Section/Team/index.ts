import { TeamSectionProps } from "$/Section/Team";

export const TeamArgs: TeamSectionProps = {
  title: "Meet our team",
  subTitle: "Team",
  description:
    "From skilled designers to tech-savvy developers, each member brings a unique perspective and expertise to the table.",
  team: [
    {
      name: "John Jackson",
      role: "Founder & CEO",
      imageUrl: "/joe.jpg",
      description:
        "Joe leads with a strategic vision for innovation and growth. With a passion for combining artistry with technology, he drives our mission to deliver cutting-edge solutions.",
    },
    {
      name: "Ash Karter",
      role: "Founder & CEO",
      imageUrl: "/ash.png",
      description:
        "Ash brings financial acumen and a keen eye for detail to our operations. Her leadership ensures sustainable growth and operational excellence.",
    },
    {
      name: "Farias Amed",
      role: "Front End AI Engineer",
      imageUrl: "/farias.png",
      description:
        "Farias is at the forefront of AI-driven design, developing interfaces that blend intuitive usability with advanced functionality.",
    },
    {
      name: "Sarah Haust",
      role: "Dev Ops",
      imageUrl: "/sarah.png",
      description:
        "Sarah orchestrates our development pipelines with precision, ensuring seamless deployment cycles and system reliability.",
    },
  ],
};
