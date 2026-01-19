/**
 * Html Plugin - Vue Implementation
 */

import "../style.css";

import type { ToolPlugin } from "gui-chat-protocol/vue";
import type { HtmlArgs, HtmlToolData } from "../core/types";
import { pluginCore } from "../core/plugin";
import View from "./View.vue";
import Preview from "./Preview.vue";

export const plugin: ToolPlugin<HtmlToolData, unknown, HtmlArgs> = {
  ...pluginCore,
  viewComponent: View,
  previewComponent: Preview,
};

// Re-export types
export type { HtmlArgs, HtmlToolData, HtmlLibraryType } from "../core/types";
export { HTML_LIBRARIES, LIBRARY_DESCRIPTIONS } from "../core/types";

// Re-export utilities
export {
  TOOL_NAME,
  TOOL_DEFINITION,
  SYSTEM_PROMPT,
  executeRenderHtml,
  pluginCore,
} from "../core/plugin";

export { View, Preview };

// Default export for MulmoChat compatibility
export default { plugin };
