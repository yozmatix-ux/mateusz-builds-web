import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { DEMO_PROJECTS, PROJECTS_NOTE } from "../content";

export default defineTool({
  name: "get_project",
  title: "Get demo project",
  description:
    "Return the full details of one demonstration project by its slug (forma-studio, north-coffee, domforma).",
  inputSchema: {
    slug: z.string().describe("Project slug, e.g. 'north-coffee'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const project = DEMO_PROJECTS.find((p) => p.slug === slug.trim().toLowerCase());
    if (!project) {
      throw new ToolError(
        `Unknown project '${slug}'. Available slugs: ${DEMO_PROJECTS.map((p) => p.slug).join(", ")}.`,
      );
    }
    const payload = { project, note: PROJECTS_NOTE };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
