import { defineTool } from "@lovable.dev/mcp-js";
import { FAQ } from "../content";

export default defineTool({
  name: "list_faq",
  title: "List FAQ",
  description:
    "Return the frequently asked questions and answers about pricing, timelines, hosting, shops, payments and the quoting process.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const faq = FAQ.map(({ q, a }) => ({ question: q, answer: a }));
    return {
      content: [{ type: "text", text: JSON.stringify({ faq }, null, 2) }],
      structuredContent: { faq },
    };
  },
});
