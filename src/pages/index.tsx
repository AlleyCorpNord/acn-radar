import Head from "next/head";
import { SearchParams, useBlip } from "../hooks/useBlip";
import {
  createStyles,
  Button,
  Container,
  TextInput,
  Select,
  Table,
  Header,
  Drawer,
} from "@mantine/core";
import { Search } from "tabler-icons-react";
import { FC, useEffect, useState } from "react";
import { Blip, Quadrants, Rings, allQuadrants, allRings } from "../types/Blip";
import { useDisclosure } from "@mantine/hooks";

const useStyles = createStyles(() => ({
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

const Home = () => {
  const [selectedBlip, setSelectedBlip] = useState<Blip | null>();
  const [opened, { open, close }] = useDisclosure(false);
  const [searchParams, setSearchParams] = useState<SearchParams>({});
  const [blips, filteredBlips] = useBlip(searchParams);

  const fragment = typeof window !== "undefined" ? window?.location.hash : null;
  if (fragment) {
    const blip = blips.find((blip) => blip.slug === fragment.slice(1));
    if (blip !== selectedBlip) setSelectedBlip(blip);
  }

  const removeFragment = () => {
    window.location.replace("#");
    history.replaceState({}, "", window.location.href.slice(0, -1));
  };

  useEffect(() => {
    if (selectedBlip) open();
  }, [selectedBlip]);

  // list all projects, removing duplicates and sorting alphabetically
  const projects = blips
    .flatMap((blip) => blip.projects)
    .filter(
      (project, index, self) => project && self.indexOf(project) === index
    )
    .sort((a, b) => a.localeCompare(b));

  return (
    <div>
      <Head>
        <title>ACN Radar</title>
      </Head>
      <HomeHeader />
      <Drawer
        opened={opened}
        onClose={() => {
          setTimeout(() => {
            setSelectedBlip(null);
          }, 200);
          removeFragment();
          close();
        }}
        position="right"
        size="lg"
      >
        {selectedBlip && (
          <>
            <h2>{selectedBlip.title}</h2>
            <div>test</div>
          </>
        )}
      </Drawer>
      <Container>
        <SearchBar
          projects={projects}
          searchParams={searchParams}
          onChange={setSearchParams}
        />
        <BlipsTable
          blips={filteredBlips}
          onClick={(blip) => {
            setSelectedBlip(blip);
          }}
        />
      </Container>
    </div>
  );
};

interface SearchBarProps {
  projects: string[];
  searchParams: SearchParams;
  onChange: (searchParams: SearchParams) => void;
}

const SearchBar: FC<SearchBarProps> = ({
  projects,
  searchParams,
  onChange,
}) => {
  const { classes } = useStyles();

  const quadrantData = allQuadrants.map((quadrant) => ({
    value: quadrant,
    label: Quadrants[quadrant],
  }));

  const ringData = allRings.map((ring) => ({
    value: ring,
    label: Rings[ring],
  }));

  return (
    <Container className={classes.searchBar}>
      <TextInput
        icon={<Search size="1.1rem" />}
        radius="md"
        size="sm"
        placeholder="Search"
        rightSectionWidth={42}
        value={searchParams.term ?? ""}
        onChange={(event) =>
          onChange({ ...searchParams, term: event.currentTarget.value })
        }
      />

      <Select
        className={classes.select}
        placeholder="Quadrant"
        radius="md"
        clearable={true}
        data={quadrantData}
        value={searchParams.quadrant}
        onChange={(value) =>
          onChange({ ...searchParams, quadrant: value as string })
        }
      />
      <Select
        className={classes.select}
        placeholder="Ring"
        radius="md"
        clearable={true}
        data={ringData}
        value={searchParams.ring}
        onChange={(value) =>
          onChange({ ...searchParams, ring: value as string })
        }
      />
      <Select
        className={classes.select}
        placeholder="Project"
        clearable={true}
        radius="md"
        data={projects.map((project) => ({ value: project, label: project }))}
        value={searchParams.project}
        onChange={(value) =>
          onChange({ ...searchParams, project: value as string })
        }
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
  onClick?: (blip: Blip) => void;
}

const BlipsTable: FC<BlipsTableProps> = ({ blips, onClick }) => {
  return (
    <Table highlightOnHover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Quadrant</th>
          <th>Ring</th>
          <th>Projects</th>
        </tr>
      </thead>
      <tbody>
        {blips.map((blip) => (
          <tr
            key={blip.title}
            onClick={() => onClick(blip)}
            style={{ cursor: "pointer" }}
          >
            <td>{blip.title}</td>
            <td style={{ maxWidth: "220px" }}>
              <div
                style={{
                  maxHeight: "3.5em",
                  overflow: "hidden",
                }}
              >
                {blip.description}
              </div>
            </td>
            <td>{Quadrants[blip.quadrant]}</td>
            <td>{Rings[blip.ring]}</td>
            <td>{blip.projects?.join(", ")}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Home;
