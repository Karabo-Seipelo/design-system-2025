import Page from "$/Page";
import content from "#/content.json";
import Navbar from "$/NavBar";

export default function About() {
  const { navigation } = content;
  return (
    <Page>
      {navigation && <Navbar {...navigation} />}
      <h1>Pricing</h1>
    </Page>
  );
}
