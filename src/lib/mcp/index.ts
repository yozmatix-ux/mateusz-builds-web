import { defineMcp } from "@lovable.dev/mcp-js";
import getContactTool from "./tools/get-contact";
import listServicesTool from "./tools/list-services";
import listProjectsTool from "./tools/list-projects";
import getProjectTool from "./tools/get-project";
import listFaqTool from "./tools/list-faq";

export default defineMcp({
  name: "mateusz-builds-websites",
  title: "Mateusz Builds Websites",
  version: "0.1.0",
  instructions:
    "Public tools for the portfolio site of Mateusz Wojtera, a freelance web developer working in Polish. Use `list_services` for the offer and pricing, `list_projects` and `get_project` for the demonstration projects (concept work, not client projects), `list_faq` for common questions, and `get_contact` for phone, email and website.",
  tools: [getContactTool, listServicesTool, listProjectsTool, getProjectTool, listFaqTool],
});
