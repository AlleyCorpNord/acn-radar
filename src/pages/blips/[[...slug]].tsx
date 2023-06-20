import Head from "next/head";
import { SearchParams, useBlipsFilter } from "../../hooks/useBlipsFilter";
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
  Grid,
  Space,
  Group,
  Badge,
  Title,
} from "@mantine/core";
import {
  Code,
  GoGame,
  HelicopterLanding,
  Radar,
  Search,
  Tool,
} from "tabler-icons-react";
import { FC, ReactNode, useEffect, useState } from "react";
import {
  Blip,
  Quadrants,
  Rings,
  allQuadrants,
  allRings,
} from "../../types/Blip";
import { useDisclosure } from "@mantine/hooks";
import { BlipDetails } from "../../components/BlipDetails";
import Project from "../../types/Project";
import { marked } from "marked";
import { mangle } from "marked-mangle";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticPropsResult } from "next";
import { importContent } from "../../helpers/DocumentLoading";
import { CMSUrl } from "../../types/Constants";
import Image from "next/image";
import logo from "../../assets/acn-full-logo.png";
import { SelectItem } from "../../components/SelectOption";
import { BadgeSelectItem } from "../../components/BadgeSelectOption";

marked.setOptions({ headerIds: false });
marked.use(mangle());

const useStyles = createStyles(() => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    margin: "0 auto",
  },
}));

interface BlipsHomeProps {
  blips: Blip[];
  projects: Project[];
}

export const BlipsHome: FC<BlipsHomeProps> = ({ blips, projects }) => {
  const [selectedBlip, setSelectedBlip] = useState<Blip | null>();
  const [opened, { open, close }] = useDisclosure(false);
  const [searchParams, setSearchParams] = useState<SearchParams>({});
  const filteredBlips = useBlipsFilter(blips, searchParams);
  const sortedProjects = projects.sort((a, b) =>
    a.title.localeCompare(b.title)
  );
  const router = useRouter();
  const selectedSlug = router.query.slug?.[0];

  if (selectedSlug) {
    const blip = blips.find((blip) => blip.slug === selectedSlug);
    if (blip && blip !== selectedBlip) setSelectedBlip(blip);
  }

  const removeFragment = () => {
    router.replace(router.pathname, "", { shallow: true });
  };

  useEffect(() => {
    if (selectedBlip) {
      open();
      router.replace(router.pathname, selectedBlip.slug, { shallow: true });
    }
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
        size="xl"
      >
        {selectedBlip && <BlipDetails blip={selectedBlip} />}
      </Drawer>
      <Container>
        <SearchBar
          projects={sortedProjects}
          searchParams={searchParams}
          onChange={setSearchParams}
        />
        <Space h="lg" />
        <BlipsTable blips={filteredBlips} onClick={setSelectedBlip} />
        {filteredBlips.length === 0 && (
          <Text mt="lg" align="center">
            No blips found
          </Text>
        )}
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
  const quadrantData = allQuadrants.map((quadrant) => ({
    value: quadrant,
    label: Quadrants[quadrant],
    accessory: QuadrantAccessory[quadrant],
  }));

  const ringData = allRings.map((ring) => ({
    value: ring,
    label: Rings[ring],
    color: RingColor[ring],
  }));

  return (
    <Grid columns={24}>
      <Grid.Col span="auto">
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
      </Grid.Col>

      <Grid.Col span={8}>
        <Select
          placeholder="Quadrant"
          radius="md"
          clearable={true}
          itemComponent={SelectItem}
          data={quadrantData}
          value={searchParams.quadrant}
          onChange={(value) => onChange({ ...searchParams, quadrant: value })}
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <Select
          placeholder="Ring"
          radius="md"
          clearable={true}
          itemComponent={BadgeSelectItem}
          data={ringData}
          value={searchParams.ring}
          onChange={(value) => onChange({ ...searchParams, ring: value })}
        />
      </Grid.Col>
      <Grid.Col span={4}>
        <Select
          placeholder="Project"
          clearable={true}
          radius="md"
          data={projects.map((project) => ({
            value: project.slug,
            label: project.title,
          }))}
          value={searchParams.project}
          onChange={(value) => onChange({ ...searchParams, project: value })}
        />
      </Grid.Col>
    </Grid>
  );
};

function HomeHeader() {
  const { classes } = useStyles();

  return (
    <Header height={60} mb="lg">
      <Container className={classes.header}>
        <div>
          <Group>
            <Image src={logo} height={35} alt="AlleyCorp Nord Logo" />
            <Title color="brand" order={3}>
              Tech Radar
            </Title>
          </Group>
        </div>
        <Button
          color="brand"
          component="a"
          target="_blank"
          rightIcon={<Radar size="1.1rem" />}
          href={`${CMSUrl}/collections/blip/new`}
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
            onClick={() => onClick?.(blip)}
            style={{ cursor: "pointer" }}
          >
            <td>{blip.title}</td>
            <td style={{ maxWidth: "220px" }}>
              <Text lineClamp={2}>
                <div
                  style={{ marginTop: "-16px", marginBottom: "-16px" }}
                  dangerouslySetInnerHTML={{
                    __html: marked(blip.description),
                  }}
                />
              </Text>
            </td>
            <td>
              {
                <Group spacing="xs">
                  {QuadrantAccessory[blip.quadrant]} {Quadrants[blip.quadrant]}
                </Group>
              }
            </td>
            <td>
              {
                <Badge variant="filled" color={RingColor[blip.ring]}>
                  {Rings[blip.ring]}
                </Badge>
              }
            </td>
            <td>{blip.projects?.map((project) => project.title).join(", ")}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default BlipsHome;

export async function getStaticProps(): Promise<
  GetStaticPropsResult<BlipsHomeProps>
> {
  const blips = await importContent<Blip>("blips");
  const projects = await importContent<Project>("projects");

  return { props: { blips, projects } };
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          slug: [],
        },
      },
    ],
    fallback: "blocking",
  };
};

export const QuadrantAccessory: Record<keyof typeof Quadrants, ReactNode> = {
  tools: <Tool size="1.2rem" />,
  platforms: <HelicopterLanding size="1.2rem" />,
  "languages-and-frameworks": <Code size="1.2rem" />,
  techniques: <GoGame size="1.2rem" />,
};

export const RingColor: Record<keyof typeof Rings, string> = {
  adopt: "green",
  trial: "violet",
  assess: "gray",
  hold: "red",
};
