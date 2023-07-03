import React, { FC, useEffect, useState } from "react";
import { BlipDetails } from "../../components/BlipDetails";
import { Blip } from "../../types/Blip";
import { Drawer } from "@mantine/core";
import Project from "../../types/Project";
import { GetStaticPaths, GetStaticPropsResult } from "next";
import { importContent } from "../../helpers/DocumentLoading";

interface BlipsPreviewProps {
  projects: Project[];
}

const BlipPreview: FC<BlipsPreviewProps> = ({ projects }) => {
  const [data, setData] = useState<Blip | undefined>();
  console.log("branch:", process.env.BRANCH);
  console.log("deploy url:", process.env.DEPLOY_URL);
  console.log("url: ", process.env.URL);

  if (data?.projectIds)
    data.projects = projects.filter((p) => data?.projectIds.includes(p.slug));

  useEffect(() => {
    window.addEventListener("message", (e: MessageEvent) => {
      setData(e.data);
    });
  }, []);

  return (
    <>
      {(data && (
        <Drawer
          opened={true}
          position="right"
          size="xl"
          onClose={() => {}}
          overlayProps={{ opacity: 0.5, blur: 4 }}
        >
          <div style={{ paddingRight: 48 }}>
            <BlipDetails blip={data} />
          </div>
        </Drawer>
      )) ??
        "No preview data provided"}
    </>
  );
};

export async function getStaticProps(): Promise<
  GetStaticPropsResult<BlipsPreviewProps>
> {
  const projects = await importContent<Project>("projects");

  return { props: { projects } };
}

export default BlipPreview;
