import { MetadataRoute } from "next";
import questions from "@/assets/questions";
import {
  questionWithIds as questionsTeil2,
  regions,
} from "@/assets/questions_teil_2";
import { encodeRegion, generateSlug } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://buergerfit.kanini.top";

  // 1. Static Pages
  const staticPages = [
    "",
    "/analytics",
    "/mock-test",
    "/privacy",
    "/select-region",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // 2. Common Questions: /learn/{slug}
  const commonQuestionEntries = questions.map((q) => ({
    url: `${baseUrl}/learn/${generateSlug(q.id, q.question.de)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // 3. Regional Questions: /learn/{region}/{slug}
  const regionalQuestionEntries = regions.flatMap((region, regionIndex) => {
    const regionSlug = encodeRegion(region);
    const startIndex = regionIndex * 10;
    const regionalQuestions = questionsTeil2.slice(startIndex, startIndex + 10);

    return regionalQuestions.map((q) => ({
      url: `${baseUrl}/learn/${regionSlug}/${generateSlug(q.id, q.question.de)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  });

  return [...staticPages, ...commonQuestionEntries, ...regionalQuestionEntries];
}

export const dynamic = "force-static";
