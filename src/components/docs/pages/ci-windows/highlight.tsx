import cc from "classcat";

import Prism from "prismjs";
import "prismjs/components/prism-yaml";
import "prismjs/components/prism-css";
import "prismjs/themes/prism-okaidia.css";

export const highlight = (code) =>
  Prism.highlight(code, Prism.languages.yaml, "yaml");


export const CodeBlock = (props) => {
  const highlightedCode = highlight(props.code)
  return (
    <div class={cc(["w-full lg:flex-1 lg:min-w-1/2", props.class])}>
      <pre
        class={
          "text-sm text-white rounded-lg overflow-x-hidden" +
          "overflow-auto max-h-[80vh]"
        }
      >
        <code class="inline-block p-5 rounded-xl min-w-100 bg-gray-800" innerHTML={highlightedCode} />
      </pre>
    </div>
  );
};
