# @gui-chat-plugin/html

[![npm version](https://badge.fury.io/js/%40gui-chat-plugin%2Fhtml.svg)](https://www.npmjs.com/package/@gui-chat-plugin/html)

A render HTML plugin for [MulmoChat](https://github.com/receptron/MulmoChat).

## Overview

This plugin renders HTML content in an isolated iframe. It supports various libraries including Tailwind CSS, D3.js, Three.js, p5.js, and Mermaid for diagrams.

## Installation

```bash
yarn add @gui-chat-plugin/html
```

## Usage

### Vue Implementation (for MulmoChat)

```typescript
// In src/tools/index.ts
import HtmlPlugin from "@gui-chat-plugin/html/vue";

const pluginList = [
  // ... other plugins
  HtmlPlugin,
];

// In src/main.ts
import "@gui-chat-plugin/html/style.css";
```

### Core Only (Framework-agnostic)

```typescript
import { pluginCore, TOOL_NAME, HTML_LIBRARIES } from "@gui-chat-plugin/html";
```

## Package Exports

| Export | Description |
|--------|-------------|
| `@gui-chat-plugin/html` | Core (framework-agnostic) |
| `@gui-chat-plugin/html/vue` | Vue implementation |
| `@gui-chat-plugin/html/style.css` | Tailwind CSS styles |

## Supported Libraries

- `tailwind` - Tailwind CSS for utility-first styling
- `d3.js` - D3.js for data-driven visualizations
- `three.js` - Three.js for 3D graphics and WebGL
- `p5.js` - p5.js for creative coding and generative art
- `mermaid` - Mermaid for diagrams and flowcharts

## Test Prompts

1. "Create a bar chart using D3.js"
2. "Make a 3D rotating cube with Three.js"
3. "Draw a flowchart with Mermaid showing a login process"
4. "Create an animated pattern using p5.js"

## Development

```bash
yarn install
yarn dev        # Start dev server
yarn build      # Build
yarn typecheck  # Type check
yarn lint       # Lint
```

## License

MIT
