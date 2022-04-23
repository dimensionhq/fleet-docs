import { Link } from "solid-app-router"

const GettingStarted = () => {
    return (
        <div class="col-span-9 min-w-[50%] flex flex-col gap-4 pt-[61px]">
            <h1 class="text-6xl font-extrabold">Get Started</h1>
            <h3 class="text-2xl mt-7">Installing fleet is easy!</h3>
            <div class="rounded-xl bg-brown-200 w-full max-h-fit p-5">
                {">"} curl -L get.fleet.rs | sh
            </div>
            <Link class="mt-9" href="/docs/start/benchmarks">
                <div class="w-full min-h-fit border p-5 rounded-xl border-red-200 flex flex-col gap-2 hover:border-red-100">
                    <h1>Next: Benchmarks</h1>
                    <h3>Benchmarks for fleet</h3>
                </div>
            </Link>
        </div>
    )
}

export default GettingStarted