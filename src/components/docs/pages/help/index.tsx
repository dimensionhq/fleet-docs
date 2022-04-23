import { Link } from "solid-app-router"
import { For } from "solid-js"
import helpRows from "../../../../utils/help"

const Build = () => {
    return (
        <div class="col-span-9 min-w-[50%] flex flex-col gap-4 pt-[61px]">
            <h1 class="text-6xl font-extrabold">Help</h1>
            <h3 class="text-2xl mt-7">To show the help menu for any command:</h3>
            <div class="rounded-xl bg-brown-200 w-full max-h-fit p-5">
                {">"} fleet [command] --help
            </div>
            <h3 class="text-2xl mt-7">Display a help menu</h3>
            <div class="rounded-xl bg-brown-200 w-full max-h-fit p-5">
                {">"} fleet --help
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
                    <For each={helpRows}>
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
                <Link href="/docs/start/benchmarks" class="w-1/2">
                    <div class="min-h-fit border p-5 rounded-xl border-red-200 flex flex-col gap-2 hover:border-red-100">
                        <h1>Next: Benchmarks</h1>
                        <h3>Benchmarks for fleet</h3>
                    </div>
                </Link>
                <Link href="/docs/commands/run" class="w-1/2">
                    <div class="min-h-fit border p-5 rounded-xl border-red-200 flex flex-col gap-2 hover:border-red-100">
                        <h1>Next: Run</h1>
                        <h3>Run your Rust project</h3>
                    </div>
                </Link>
            </div>
        </div >
    )
}

export default Build