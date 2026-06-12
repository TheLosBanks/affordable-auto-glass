import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/ServicePage";
import { SERVICE_CONTENT } from "@/lib/service-content";

export function generateStaticParams() {
  return Object.keys(SERVICE_CONTENT).map((service) => ({ service }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service } = await params;
  const content = SERVICE_CONTENT[service];
  if (!content) return {};
  return {
    title: { absolute: content.metaTitle },
    description: content.metaDescription,
    alternates: { canonical: `/${content.slug}` },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;
  const content = SERVICE_CONTENT[service];
  if (!content) notFound();
  return <ServicePage content={content} />;
}
