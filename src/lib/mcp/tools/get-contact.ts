import { defineTool } from "@lovable.dev/mcp-js";
import { CONTACT } from "../content";

export default defineTool({
  name: "get_contact",
  title: "Get contact details",
  description:
    "Return the public contact details for Mateusz Wojtera (freelance web developer): phone, email and website.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(CONTACT, null, 2) }],
    structuredContent: { contact: CONTACT },
  }),
});
