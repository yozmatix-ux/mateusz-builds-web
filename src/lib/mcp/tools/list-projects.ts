import { defineTool } from "@lovable.dev/mcp-js";
import { DEMO_PROJECTS, PROJECTS_NOTE } from "../content";

export default defineTool({
  name: "list_projects",
  title: "List demo projects",
  description:
    "Return the demonstration website projects shown in the portfolio, with slug, category and short description. These are concept projects, not client work.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const projects = DEMO_PROJECTS.map(({ slug, title, category, description, url }) => ({
      slug,
      title,
      category,
      description,
      url,
    }));
    const payload = { projects, note: PROJECTS_NOTE };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
