import { Link } from "solid-app-router"
import { For } from "solid-js"
import runRows from "../../../../utils/run"

const Run = () => {
    return (
        <div class="col-span-9 min-w-[50%] flex flex-col gap-4 pt-[61px]">
            <h1 class="text-6xl font-extrabold">Run</h1>
            <h3 class="text-2xl mt-7">Run a new cargo project with fleet</h3>
            <div class="rounded-xl bg-brown-200 w-full max-h-fit p-5">
                {">"} fleet run
            </div>
            <h3 class="text-2xl mt-7">Display help menu</h3>
            <div class="rounded-xl bg-brown-200 w-full max-h-fit p-5">
                {">"} fleet run --help
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
                    <For each={runRows}>
                        {(row) => (
                            <tr>
                                <td>{row.arguments}</td>
                                <td>{row.description}</td>
                            </tr>
                        )}
                    </For>
                </tbody>
            </table>
            <Link class="mt-9" href="/docs/start/benchmarks">
                <div class="w-full min-h-fit border p-5 rounded-xl border-red-200 flex flex-col gap-2 hover:border-red-100">
                    <h1>Next: Benchmarks</h1>
                    <h3>Benchmarks for fleet</h3>
                </div>
            </Link>
        </div >
    )
}

export default Run