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
  Text,
  Drawer,
} from "@mantine/core";
import { Search } from "tabler-icons-react";
import { FC, useEffect, useState } from "react";
import { Blip, Quadrants, Rings, allQuadrants, allRings } from "../types/Blip";
import { useDisclosure } from "@mantine/hooks";
import { BlipDetails } from "../components/BlipDetails";
import useProject from "../hooks/useProject";
import Project from "../types/Project";

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
  const projects = useProject();
  const sortedProjects = projects.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  const fragment = typeof window !== "undefined" ? window?.location.hash : null;
  if (fragment) {
    const blip = blips.find((blip) => blip.slug === fragment.slice(1));
    if (blip !== selectedBlip) setSelectedBlip(blip);
  }

  const removeFragment = () => {
    window.location.replace("#");
    history.replaceState({}, "", window.location.href.slice(0, -1));
  };

  console.log(filteredBlips);
  useEffect(() => {
    if (selectedBlip) open();
  }, [selectedBlip]);

  filteredBlips.forEach((element) => {
    element.projects = projects.filter((project) =>
      element.projectIds.includes(project.slug)
    );
  });

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
        {selectedBlip && <BlipDetails blip={selectedBlip} />}
      </Drawer>
      <Container>
        <SearchBar
          projects={sortedProjects}
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
  projects: Project[];
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
        data={projects.map((project) => ({
          value: project.slug,
          label: project.title,
        }))}
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
          component="a"
          target="_blank"
          href="http://localhost:3000/admin/index.html#/collections/blips/new"
          size="xs"
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
              <Text lineClamp={2}>{blip.description}</Text>
            </td>
            <td>{Quadrants[blip.quadrant]}</td>
            <td>{Rings[blip.ring]}</td>
            <td>{blip.projects?.map((project) => project.title).join(", ")}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Home;
