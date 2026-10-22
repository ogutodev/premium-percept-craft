import { defineMcp } from "@lovable.dev/mcp-js";
import getContactInfo from "./tools/get-contact-info";
import listSolutions from "./tools/list-solutions";
import listCaseStudies from "./tools/list-case-studies";

export default defineMcp({
  name: "visionary-canvas",
  title: "Visionary Canvas",
  version: "0.1.0",
  instructions:
    "Public information about TRÍADE, a creative marketing and video production studio in Geneva: services by business goal, case studies and contact details.",
  tools: [getContactInfo, listSolutions, listCaseStudies],
});
