import { Link, useLocation } from "solid-app-router"
import { For } from "solid-js"
import Logo from "../../assets/logo.svg"
import Benchmarks from "../../components/docs/pages/benchmarks"
import Build from "../../components/docs/pages/build"
import GettingStarted from "../../components/docs/pages/getting-started"
import Run from "../../components/docs/pages/run"
import Sidebar from "../../components/docs/sidebar"

const menu = [
    {
        name: "Start Here",
        contents: [
            {
                name: "Get started",
                href: "/docs/start/getting-started"
            },
            {
                name: "Benchmarks",
                href: "/docs/start/benchmarks"
            }
        ]
    },
    {
        name: "Commands",
        contents: [
            {
                name: "Run",
                href: "/docs/commands/run"
            },
            {
                name: "Build",
                href: "/docs/commands/build"
            }
        ]
    }
]

const resolveElement = (path: string) => {
    if (path == "/docs/start/getting-started") {
        return <GettingStarted />
    } else if (path == "/docs/start/benchmarks") {
        return <Benchmarks />
    } else if (path == "/docs/commands/run") {
        return <Run />
    } else if (path == "/docs/commands/build") {
        return <Build />
    } else {
        return (
            <div class="col-span-9 min-w-[50%] flex flex-col gap-4 pt-[61px]">
                <Link class="mt-9" href="/docs/start/getting-started">
                    <div class="w-full min-h-fit border p-5 rounded-xl border-red-200 flex flex-col gap-2 hover:border-red-100 items-center">
                        <h1 class="text-7xl">404</h1>
                        <h3>Page not found</h3>
                    </div>
                </Link>
            </div>
        )
    }
}

const Id = () => {
    return (
        <div class="flex w-full min-h-screen text-white pb-10">
            <Sidebar />
            {resolveElement(useLocation().pathname)}
            <div class="w-[20%] bg-black min-h-fit pt-[61px]">
                <h1>On this page</h1>
            </div>
        </div>
    )
}

export default Id;