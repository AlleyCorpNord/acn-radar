import { Container, Group, MantineProvider, Text, Title } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home = () => {
  const { push } = useRouter();

  useEffect(() => {
    push("/blips");
  }, []);

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
