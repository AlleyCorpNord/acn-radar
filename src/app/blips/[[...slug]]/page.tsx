import {  Blip } from '../../../types/Blip'
import Project from '../../../types/Project'
import BlipsPageContent from './BlipsPageContent'
import { importContent } from '../../../helpers/DocumentLoading'

export default async function BlipsPage() {
  const blips = await importContent<Blip>("blips");
  const projects = await importContent<Project>("projects");

  return <BlipsPageContent blips={blips} projects={projects} />;
}

export async function generateStaticParams() {
  const blips = await importContent<Blip>("blips");

  return blips.map((blip) => ({
    slug: [blip.slug],
  }))
}

export const dynamicParams = true;