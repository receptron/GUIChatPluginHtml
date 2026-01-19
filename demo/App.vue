<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
    <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">
      Html Plugin Demo
    </h1>

    <div class="space-y-4">
      <button
        @click="renderHtml"
        class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Render Sample HTML
      </button>

      <div
        v-if="result"
        class="max-w-4xl bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden"
      >
        <div class="p-4">
          <Preview :result="result" />
        </div>
        <div class="h-96">
          <View :selectedResult="result" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { ToolResult } from "gui-chat-protocol/vue";
import type { HtmlToolData } from "../src/core/types";
import { plugin, View, Preview } from "../src/vue";

const result = ref<ToolResult<HtmlToolData> | null>(null);

const sampleHtml = `<!DOCTYPE html>
<html>
<head>
  <title>Sample Page</title>
  <style>
    body {
      background: linear-gradient(to right, #8b5cf6, #ec4899);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
    }
    .card {
      background: white;
      border-radius: 12px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
      padding: 32px;
      max-width: 400px;
    }
    h1 {
      color: #1f2937;
      font-size: 24px;
      margin-bottom: 16px;
    }
    p { color: #4b5563; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Hello World!</h1>
    <p>This is a sample HTML page rendered by the Html plugin.</p>
  </div>
</body>
</html>`;

const renderHtml = async () => {
  const context = {};
  result.value = await plugin.execute(context, {
    title: "Sample Page",
    html: sampleHtml,
    type: "tailwind",
  });
};
</script>
