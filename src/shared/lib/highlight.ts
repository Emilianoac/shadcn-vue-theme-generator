import hljs from "highlight.js/lib/core";
import "highlight.js/styles/tokyo-night-dark.css";
import xml from "highlight.js/lib/languages/xml";
import typescript from "highlight.js/lib/languages/typescript";
import javascript from "highlight.js/lib/languages/javascript";
import css from "highlight.js/lib/languages/css";
import hljsDefineVue from "@/shared/lib/utils/hljs-vue";

hljs.registerLanguage("xml", xml);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("css", css);
hljs.registerLanguage("vue", hljsDefineVue);

export default hljs;
