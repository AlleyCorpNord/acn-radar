"use client";

import React, { type FC } from "react";
import { Blip, BusinessModel, Quadrants, Rings } from "../types/Blip";
import DOMPurify from "dompurify";
import { marked } from "marked";
import { mangle } from "marked-mangle";
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
  Badge,
} from "@mantine/core";
import { CMSUrl, RepositoryUrl } from "../types/Constants";
import { IconEdit } from "@tabler/icons-react";
import { QuadrantAccessory, RingColor } from "../types/helper";

marked.use(mangle());

interface BlipDetailsProps {
  blip: Blip;
}

export const BlipDetails: FC<BlipDetailsProps> = ({ blip }) => {
  return (
    <Container style={{ height: "100%" }}>
      <Flex direction="column" style={{ height: "100%" }}>
        <Group justify={"space-between"} style={{ marginBottom: 6 }}>
          <Title order={1}>{blip.title}</Title>
          <Flex direction="column" align="flex-end" gap="xs">
            <Group gap="xs">
              {QuadrantAccessory[blip.quadrant]}
              {<Text>{Quadrants[blip.quadrant]}</Text>}
            </Group>
            <Badge variant="filled" color={RingColor[blip.ring]}>
              {Rings[blip.ring]}
            </Badge>
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
        <Space h="md" />
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
        <Space h="md" />

        {blip.businessModel?.length && (
          <Flex direction="column" gap="sm">
            <Title order={3}>Business Model</Title>
            <List withPadding>
              {blip.businessModel?.map((businessModel) => (
                <List.Item key={businessModel}>
                  {BusinessModel[businessModel]}
                </List.Item>
              ))}
            </List>
          </Flex>
        )}
        <Space h="md" />

        {blip.projects?.length && (
          <Flex direction="column" gap="sm" style={{ paddingBottom: 16 }}>
            <Title order={3}>Projects</Title>
            <List withPadding>
              {blip.projects?.map((project) => (
                <List.Item key={project.slug}>{project.title}</List.Item>
              ))}
            </List>
          </Flex>
        )}
        <Stack
          justify="flex-end"
          style={{
            backgroundColor: "#fff",
            position: "sticky",
            paddingBottom: 8,
            paddingTop: 4,
            marginBottom: -16,
            bottom: 0,
          }}
        >
          <Group justify={"space-between"}>
            <Text>
              <a
                href={`${RepositoryUrl}/src/content/blips/${blip.slug}.md`}
                target="_blank"
              >
                Show in GitHub
              </a>
            </Text>
            <Button
              component="a"
              href={`${CMSUrl}/collections/blip/entries/${blip.slug}`}
              target="_blank"
              rightSection={<IconEdit size={18} />}
              size="xs"
            >
              Edit Blip
            </Button>
          </Group>
        </Stack>
      </Flex>
    </Container>
  );
};
