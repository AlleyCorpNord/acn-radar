import { Container, Group, MantineProvider, Text, Title } from "@mantine/core";
import Link from "next/link";

const Home = () => {
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
