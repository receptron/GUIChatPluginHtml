/**
 * Html Plugin Core (Framework-agnostic)
 */

import type { ToolPluginCore, ToolContext, ToolResult } from "gui-chat-protocol";
import type { HtmlArgs, HtmlToolData } from "./types";
import { HTML_LIBRARIES } from "./types";
import { TOOL_DEFINITION, SYSTEM_PROMPT } from "./definition";

// Re-export for convenience
export { TOOL_NAME, TOOL_DEFINITION, SYSTEM_PROMPT } from "./definition";

/**
 * Execute the renderHtml function
 */
export const executeRenderHtml = async (
  _context: ToolContext,
  args: HtmlArgs,
): Promise<ToolResult<HtmlToolData>> => {
  const { html, type, title } = args;

  // Validate type
  if (!HTML_LIBRARIES.includes(type)) {
    throw new Error(
      `Invalid library type: ${type}. Must be one of: ${HTML_LIBRARIES.join(", ")}`,
    );
  }

  return {
    message: `Rendered HTML page: ${title} (using ${type})`,
    title,
    data: { html, type },
    instructions:
      "Acknowledge that the HTML page has been created and is displayed to the user.",
  };
};

// Core Plugin (without UI components)
export const pluginCore: ToolPluginCore<HtmlToolData, unknown, HtmlArgs> = {
  toolDefinition: TOOL_DEFINITION,
  execute: executeRenderHtml,
  generatingMessage: "Rendering HTML page...",
  waitingMessage:
    "Tell the user that the HTML page was created and will be presented shortly.",
  isEnabled: () => true,
  systemPrompt: SYSTEM_PROMPT,
};
