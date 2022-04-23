import { Link } from "solid-app-router"

import LinuxCode from "../../../../ci/linux.yaml?raw"
import { CodeBlock } from "./highlight"

const Linux = () => {
  return (
    <div class="col-span-9 min-w-[50%] flex flex-col gap-4 pt-[61px]">
      <h1 class="text-4xl md:text-4xl font-bold">Integrating Fleet with GitHub Linux Runners</h1>
      Fleet can be integrated with your GitHub CI/CD workflows. We've included a sample configuration for a Linux runner using Fleet for builds.
      <div class="mt-2">
        <div class="codeblock">
          <CodeBlock code={LinuxCode}>
          </CodeBlock>
        </div>
      </div>
      <div class="w-full mt-9 flex gap-2">
        <Link href="/docs/commands/build" class="w-1/2">
          <div class="min-h-fit border p-5 rounded-xl border-red-200 flex flex-col gap-2 hover:border-red-100">
            <h1>Previous: Build</h1>
            <h3>Build your rust project</h3>
          </div>
        </Link>
        <Link href="/docs/commands/run" class="w-1/2">
          <div class="min-h-fit border p-5 rounded-xl border-red-200 flex flex-col gap-2 hover:border-red-100">
            <h1>Next: Windows CI/CD</h1>
            <h3>Github workflow for CI/CD on windows</h3>
          </div>
        </Link>
      </div>
    </div >
  )
}

export default Linux