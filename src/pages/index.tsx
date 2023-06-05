import Head from "next/head";
import { useBlip } from "../hooks/useBlip";
import {
  createStyles,
  Group,
  Button,
  Container,
  TextInput,
  Select,
  Table,
  Header,
} from "@mantine/core";
import { Search } from "tabler-icons-react";
import { FC, useState } from "react";
import { Blip } from "../types/Blip";

const useStyles = createStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    margin: "0 auto",
  },

  searchBar: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    padding: 0,
    gap: "10px",
    marginBottom: "40px",

    "& > *": {
      flexGrow: 1,
    },
  },

  select: {
    maxWidth: "180px",
  },
}));

interface SearchParams {
  term?: string;
  quadrant?: string;
  ring?: string;
  project?: string;
}

const Home = () => {
  const blips = useBlip();

  const [searchParams, setSearchParams] = useState<SearchParams>({});

  return (
    <div>
      <Head>
        <title>My page title</title>
      </Head>
      <HomeHeader />
      <Container>
        <SearchBar />
        <BlipsTable blips={blips} />
      </Container>
    </div>
  );
};

const SearchBar = () => {
  const { classes } = useStyles();

  return (
    <Container className={classes.searchBar}>
      <TextInput
        icon={<Search size="1.1rem" />}
        radius="md"
        size="sm"
        placeholder="Search"
        rightSectionWidth={42}
      />

      <Select
        className={classes.select}
        placeholder="Quadrant"
        radius="md"
        clearable={true}
        data={[
          { value: "react", label: "React" },
          { value: "ng", label: "Angular" },
          { value: "svelte", label: "Svelte" },
          { value: "vue", label: "Vue" },
        ]}
      />
      <Select
        className={classes.select}
        placeholder="Ring"
        radius="md"
        clearable={true}
        data={[
          { value: "react", label: "React" },
          { value: "ng", label: "Angular" },
          { value: "svelte", label: "Svelte" },
          { value: "vue", label: "Vue" },
        ]}
      />
      <Select
        className={classes.select}
        placeholder="Project"
        clearable={true}
        radius="md"
        data={[
          { value: "react", label: "React" },
          { value: "ng", label: "Angular" },
          { value: "svelte", label: "Svelte" },
          { value: "vue", label: "Vue" },
        ]}
      />
    </Container>
  );
};

function HomeHeader() {
  const { classes } = useStyles();

  return (
    <Header height={60} mb="lg">
      <Container className={classes.header}>
        <div>ACN Radar</div>
        <Button
          variant="light"
          color="blue"
          size="xs"
          onClick={() => console.log("Test")}
        >
          Add Blip
        </Button>
      </Container>
    </Header>
  );
}

interface BlipsTableProps {
  blips: Blip[];
}

const BlipsTable: FC<BlipsTableProps> = ({ blips }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Quadrant</th>
          <th>Ring</th>
          <th>Projects</th>
        </tr>
      </thead>
      <tbody>
        {blips.map((blip) => (
          <tr key={blip.title}>
            <td>{blip.title}</td>
            <td>{blip.quadrant}</td>
            <td>{blip.ring}</td>
            <td>{blip.projects}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Home;
