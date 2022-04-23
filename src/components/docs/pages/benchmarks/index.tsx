import { Link } from "solid-app-router"
import CleanBuilds from "../../../../assets/clean-builds.png"

const Benchmarks = () => {
    return (
        <div class="col-span-9 min-w-[50%] flex flex-col gap-4 pt-[61px]">
            <h1 class="text-4xl md:text-6xl font-extrabold">Benchmarks</h1>
            <h1 class="text-2xl md:text-4xl mt-7">
                Clean Builds
            </h1>
            <h4>Clean builds - When you compile your app for the first time</h4>
            <img class="w-1/2" src={CleanBuilds} alt="" />
            <div class="w-full mt-9 flex gap-2">
                <Link href="/docs/start/getting-started" class="w-1/2">
                    <div class="min-h-fit border p-5 rounded-xl border-red-200 flex flex-col gap-2 hover:border-red-100">
                        <h1>Previous: Get Started</h1>
                        <h3>Install turbo</h3>
                    </div>
                </Link>
                <Link href="/docs/commands/run" class="w-1/2">
                    <div class="min-h-fit border p-5 rounded-xl border-red-200 flex flex-col gap-2 hover:border-red-100">
                        <h1>Next: Help</h1>
                        <h3>Help command in the cli</h3>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Benchmarks