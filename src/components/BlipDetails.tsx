import React, { type FC } from "react";
import { Blip, Quadrants, Rings } from "../types/Blip";
import DOMPurify from "dompurify";
import { marked } from "marked";
import {
  Button,
  Container,
  Group,
  List,
  Space,
  Flex,
  Stack,
  Text,
  Title,
} from "@mantine/core";

interface BlipDetailsProps {
  blip: Blip;
}

export const BlipDetails: FC<BlipDetailsProps> = ({ blip }) => {
  return (
    <Container>
      <Group position="apart">
        <Title order={1}>{blip.title}</Title>
        <Flex direction="column" align="flex-end">
          <Text>{Quadrants[blip.quadrant]}</Text>
          <Text>{Rings[blip.ring]}</Text>
        </Flex>
      </Group>
      {blip.link && (
        <Text>
          <a href={blip.link} target="_blank">
            {blip.link}
          </a>
        </Text>
      )}

      <Space h="md" />
      <Stack spacing="xl">
        {blip.description && (
          <Flex direction="column" gap="sm">
            <Title order={3}>Description</Title>
            <Text>
              <div
                style={{ marginTop: "-16px", marginBottom: "-16px" }}
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(marked(blip.description)),
                }}
              />
            </Text>
          </Flex>
        )}

        {blip.opinion && (
          <Flex direction="column" gap="sm">
            <Title order={3}>Opinion</Title>
            <Text>
              <div
                style={{ marginTop: "-16px", marginBottom: "-16px" }}
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(marked(blip.opinion)),
                }}
              />
            </Text>
          </Flex>
        )}

        {blip.projects?.length && (
          <Flex direction="column" gap="sm">
            <Title order={3}>Projects</Title>
            <List withPadding>
              {blip.projects?.map((project) => (
                <List.Item key={project}>{project}</List.Item>
              ))}
            </List>
          </Flex>
        )}
        <Group position="apart" style={{}}>
          <Text>
            <a
              href={`https://github.com/AlleyCorpNord/acn-radar/tree/redesign/src/content/blips/${blip.slug}.md`}
              target="_blank"
            >
              Show in GitHub
            </a>
          </Text>
          <Button
            component="a"
            href="http://localhost:3000/admin/index.html#/collections/blips/entries/medplum"
            target="_blank"
            color="green"
            size="xs"
          >
            Edit Blip
          </Button>
        </Group>
      </Stack>
    </Container>
  );
};
