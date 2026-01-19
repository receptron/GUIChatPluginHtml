/**
 * Html Plugin - Core (Framework-agnostic)
 */

// Export plugin-specific types
export type { HtmlArgs, HtmlToolData, HtmlLibraryType } from "./types";
export { HTML_LIBRARIES, LIBRARY_DESCRIPTIONS } from "./types";

// Export plugin definition
export { TOOL_NAME, TOOL_DEFINITION, SYSTEM_PROMPT } from "./definition";

// Export plugin utilities
export { executeRenderHtml, pluginCore } from "./plugin";
