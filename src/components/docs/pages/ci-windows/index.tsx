import { Link } from "solid-app-router"

import LinuxCode from "../../../../ci/windows.yaml?raw"
import { CodeBlock } from "./highlight"

const Windows = () => {
  return (
    <div class="col-span-9 min-w-[50%] flex flex-col gap-4 pt-[61px]">
      <h1 class="text-4xl md:text-6xl font-extrabold">Windows config for github workflows</h1>
      <div class="mt-9">
        <div class="codeblock">
          <CodeBlock code={LinuxCode}>
            {/* {LinuxCode} */}
          </CodeBlock>
        </div>
      </div>
      <div class="w-full mt-9 flex gap-2">
        <Link href="/docs/ci/linux" class="w-full">
          <div class="min-h-fit border p-5 rounded-xl border-red-200 flex flex-col gap-2 hover:border-red-100">
            <h1>Previous: Linux CI/CD</h1>
            <h3>Github workflow for CI/CD on linux</h3>
          </div>
        </Link>
      </div>
    </div >
  )
}

export default Windows