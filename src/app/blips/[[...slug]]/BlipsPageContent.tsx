'use client'
import {
  Badge,
  Button,
  Container, Drawer,
  Grid,
  Group,
  Select, Space,
  Table, Text,
  TextInput,
  Title,
} from '@mantine/core'
import styles from './blips.module.css'
import Image from 'next/image'
import logo from './logo.png'
import { IconRadar, IconSearch } from '@tabler/icons-react'
import { CMSUrl } from '../../../types/Constants'
import { FC, Fragment, useEffect, useState } from 'react'
import { allQuadrants, allRings, Blip, Quadrants, Rings } from '../../../types/Blip'
import { QuadrantAccessory, RingColor } from '../../../types/helper'
import Project from '../../../types/Project'
import { SearchParams, useBlipsFilter } from '../../../hooks/useBlipsFilter'
import { getFirstParagraphText } from '../../../helpers/Parsers'
import { marked } from 'marked'
import Head from 'next/head'
import { BlipDetails } from '../../../components/BlipDetails'
import { useDisclosure } from '@mantine/hooks'
import { useParams, useRouter } from 'next/navigation'
import { mangle } from 'marked-mangle'

marked.use(mangle());

interface BlipsPageContentProps {
  blips: Blip[];
  projects: Project[];
}

export default function BlipsPageContent({ blips, projects }: BlipsPageContentProps) {
  const [selectedBlip, setSelectedBlip] = useState<Blip | undefined>();
  const [opened, { open, close }] = useDisclosure(false);

  const [searchParams, setSearchParams] = useState<SearchParams>({});
  const filteredBlips = useBlipsFilter(blips, searchParams);
  filteredBlips.forEach((element) => {
    element.projects = projects.filter((project) =>
      element.projectIds.includes(project.slug)
    );
  });
  const sortedProjects = projects.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  const params = useParams<{ slug?: string[] }>()
  useEffect(() => {
    if (params?.slug) {
      const blip = blips.find((blip) => blip.slug === params?.slug?.[0]);
      if (blip?.slug !== selectedBlip?.slug) {
        setSelectedBlip(blip);
      }
    }
  }, [params]);

  const removeFragment = () => {
    setSelectedBlip(undefined);
    history.pushState(null, '', `/blips`)
  };

  return (
    <Fragment>
      <Head>
        <title>ACN Radar</title>
      </Head>
      <HomeHeader />
      <BlipDrawer onClose={removeFragment} blip={selectedBlip}/>
      <Container size={"lg"} pb={'xl'}>
        <SearchBar
          projects={sortedProjects}
          searchParams={searchParams}
          onChange={setSearchParams}
        />
        <Space h="lg" />
        <BlipsTable blips={filteredBlips} onClick={(blip) => {
          setSelectedBlip(blip);
          history.pushState(null, '', `/blips/${blip.slug}`)
        }} />
        {filteredBlips.length === 0 && (
          <Text mt="lg" style={{ textAlign: 'center'}}>
            No blips found
          </Text>
        )}
      </Container>
    </Fragment>
  );
}

function BlipDrawer({ blip, onClose }: { blip?: Blip, onClose: () => void }) {
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    if (blip) {
      open();
    } else {
      close();
    }
  }, [blip]);

  return (
    <Drawer.Root
      opened={opened}
      onClose={onClose}
      position="right"
      size="xl"
    >
      <Drawer.Overlay blur={4} backgroundOpacity={0.5} />
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.CloseButton />
        </Drawer.Header>
        <Drawer.Body>
          {blip && <BlipDetails blip={blip} />}
        </Drawer.Body>
      </Drawer.Content>
    </Drawer.Root>
  );
}

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
          leftSection={<IconSearch size={18} />}
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

      <Grid.Col span={6}>
        <Select
          placeholder="Quadrant"
          radius="md"
          clearable={true}
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
  return (
    <Title mb="lg" className={styles.title}>
      <Container className={styles.header} size={'lg'}>
        <Group gap={0}>
          <Image
            src={logo}
            width={150}
            alt="AlleyCorp Nord Logo"
          />
          <Title style={{
            color: 'var(--mantine-color-brand-filled)'
          }} order={3}>
            Tech Radar
          </Title>
        </Group>
        <Button
          color="brand"
          component="a"
          target="_blank"
          rightSection={<IconRadar size={18} />}
          href={`${CMSUrl}/collections/blip/new`}
          size="xs"
        >
          Add Blip
        </Button>
      </Container>
    </Title>
  );
}


interface BlipsTableProps {
  blips: Blip[];
  onClick?: (blip: Blip) => void;
}

const BlipsTable: FC<BlipsTableProps> = ({ blips, onClick }) => {
  return (
    <Table highlightOnHover horizontalSpacing={'sm'} verticalSpacing={"sm"}>
      <colgroup>
        <col/>
        <col style={{width: "80%"}} />
        <col/>
        <col/>
        <col style={{width: "20%"}}/>
      </colgroup>
      <Table.Thead>
        <Table.Tr>
          <th>Title</th>
          <th>Description</th>
          <th>Quadrant</th>
          <th>Ring</th>
          <th>Projects</th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {blips.map((blip) => (
          <Table.Tr
            key={blip.title}
            onClick={() => onClick?.(blip)}
            style={{ cursor: "pointer"  }}
          >
            <Table.Td>{blip.title}</Table.Td>
            <Table.Td style={{ maxWidth: "220px" }}>
              <Text lineClamp={2} style={{fontSize: 'var(--mantine-font-size-sm)'}} dangerouslySetInnerHTML={{
                __html: getFirstParagraphText(marked(blip.description)),
              }} />
            </Table.Td>
            <Table.Td>
              {
                <Group gap={'xs'} wrap={'nowrap'}>
                  {QuadrantAccessory[blip.quadrant]}
                  <Text size={'sm'}>{Quadrants[blip.quadrant]}</Text>
                </Group>
              }
            </Table.Td>
            <Table.Td>
              {
                <Badge variant="filled" color={RingColor[blip.ring]}>
                  {Rings[blip.ring]}
                </Badge>
              }
            </Table.Td>
            <Table.Td>
              <Projects projects={blip.projects} />
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};

function Projects({ projects }: { projects: Project[] | undefined }) {
  if (!projects?.length) {
    return null;
  }

  if (projects.length <= 4) {
    return (
      <>
        {projects
          .map((project) => project.title.replace(/ /g, "\u00A0"))
          .join(", ")}
      </>
    );
  }

  return (
    <>
      {projects
        .slice(0, 3)
        .map((project) => project.title.replace(/ /g, "\u00A0"))
        .join(", ")}{" "}
      and {projects.length - 3} more.
    </>
  );
}