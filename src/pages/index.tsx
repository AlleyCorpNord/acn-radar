import { Container, Group, MantineProvider, Text, Title } from "@mantine/core";
import Link from "next/link";
import { redirect } from "next/navigation";

const Home = () => {
  redirect("/blips");

  return (
    <Container>
      <Title>Home</Title>
      <Group>
        <Link href={"/blips"}>
          <Text>Blips</Text>
        </Link>
        <Link href="/projects">
          <Text>Projects</Text>
        </Link>
      </Group>
    </Container>
  );
};

export default Home;
