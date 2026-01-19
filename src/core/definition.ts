/**
 * Html Plugin Tool Definition
 */

import { HTML_LIBRARIES, LIBRARY_DESCRIPTIONS } from "./types";

export const TOOL_NAME = "renderHtml";

export const TOOL_DEFINITION = {
  type: "function" as const,
  name: TOOL_NAME,
  description:
    "Render a full HTML page with specified library support (Tailwind CSS, D3.js, Three.js, Chart.js, p5.js, or Mermaid). The HTML will be rendered in an isolated iframe.",
  parameters: {
    type: "object" as const,
    properties: {
      title: {
        type: "string",
        description: "Title for the HTML page",
      },
      html: {
        type: "string",
        description:
          "The complete HTML content to render. Should be a full HTML document including DOCTYPE, html, head, and body tags.",
      },
      type: {
        type: "string",
        enum: [...HTML_LIBRARIES],
        description: (() => {
          const validValues = HTML_LIBRARIES.map(
            (lib) => `'${lib}' for ${LIBRARY_DESCRIPTIONS[lib]}`,
          ).join(", ");
          return `The primary library used in this HTML page. Valid values: ${validValues}.`;
        })(),
      },
    },
    required: ["title", "html", "type"],
  },
};

export const SYSTEM_PROMPT = "";
