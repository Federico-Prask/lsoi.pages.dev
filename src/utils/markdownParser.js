import { marked } from 'marked'
import hljs from 'highlight.js'

// 配置Marked
marked.setOptions({
  highlight: (code, lang) => {
    return hljs.highlightAuto(code, [lang]).value
  },
  breaks: true,
  gfm: true
})

export const parseMarkdown = (content) => {
  return marked.parse(content)
}