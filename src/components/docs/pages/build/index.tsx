import { Link } from "solid-app-router"
import { For } from "solid-js"
import buildRows from "../../../../utils/build"
import runRows from "../../../../utils/run"

const Build = () => {
    return (
        <div class="col-span-9 min-w-[50%] flex flex-col gap-4 pt-[61px]">
            <h1 class="text-6xl font-extrabold">Build</h1>
            <h3 class="text-2xl mt-7">To build a cargo project with Fleet:</h3>
            <div class="rounded-xl bg-brown-200 w-full max-h-fit p-5">
                {">"} fleet build
            </div>
            <h3 class="text-2xl mt-7">Display help menu</h3>
            <div class="rounded-xl bg-brown-200 w-full max-h-fit p-5">
                {">"} fleet build --help
            </div>
            <h3 class="text-2xl mt-7">Arguments accepted</h3>
            <table>
                <thead>
                    <tr >
                        <th>Argument</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <For each={buildRows}>
                        {(row) => (
                            <tr>
                                <td>{row.arguments}</td>
                                <td>{row.description}</td>
                            </tr>
                        )}
                    </For>
                </tbody>
            </table>
            <div class="w-full mt-9 flex gap-2">
                <Link href="/docs/commands/run" class="w-1/2">
                    <div class="min-h-fit border p-5 rounded-xl border-red-200 flex flex-col gap-2 hover:border-red-100">
                        <h1>Previous: Run</h1>
                        <h3>Run your rust project</h3>
                    </div>
                </Link>
                <Link href="/docs/ci/linux" class="w-1/2">
                    <div class="min-h-fit border p-5 rounded-xl border-red-200 flex flex-col gap-2 hover:border-red-100">
                        <h1>Next: Linux CI/CD</h1>
                        <h3>Github workflow for CI/CD on linux</h3>
                    </div>
                </Link>
            </div>
        </div >
    )
}

export default Build