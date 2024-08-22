import path from 'node:path'
import {defineConfig, presetUno, transformerDirectives} from "unocss";
import {fileURLToPath} from 'node:url'

const projectRoot = path.dirname(fileURLToPath(import.meta.url))
const workspaceRoot = path.resolve(projectRoot, '../..')

console.log({projectRoot, workspaceRoot})

const config = defineConfig({
  presets: [
    presetUno(),
  ],
  transformers: [
    transformerDirectives(),
  ],
  content: {
    filesystem: [
      `${projectRoot}/src/**/*.{tsx,html}`,
      `${workspaceRoot}/packages/ui-*/src/**/*.{tsx,html}`
    ]
  }
})

export default config
