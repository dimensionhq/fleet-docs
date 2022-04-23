import { Link } from "solid-app-router"

import LinuxCode from "../../../../ci/windows.yaml?raw"
import { CodeBlock } from "./highlight"

const Windows = () => {
  return (
    <div class="col-span-9 min-w-[50%] flex flex-col gap-4 pt-[61px]">
      <h1 class="text-4xl md:text-4xl font-bold">Integrating Fleet with GitHub Windows Runners</h1>
      We've included a sample configuration for a Windows runner using Fleet for builds as well.
      <div class="mt-2">
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