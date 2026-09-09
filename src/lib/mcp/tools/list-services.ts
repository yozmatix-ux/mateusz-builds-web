import { defineTool } from "@lovable.dev/mcp-js";
import { PACKAGES, PRICING_NOTE, SERVICES } from "../content";

export default defineTool({
  name: "list_services",
  title: "List services and pricing",
  description:
    "Return the offered website services (business card site, company site, landing page, online shop, custom project) with their starting prices and pricing packages.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const payload = { services: SERVICES, packages: PACKAGES, note: PRICING_NOTE };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
