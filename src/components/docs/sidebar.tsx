import { Link, useLocation } from "solid-app-router"
import { For } from "solid-js"
import Logo from "../../assets/logo.svg"

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
const Sidebar = () => {
    const location = useLocation()


    return (
        <div class="w-[30%] min-h-screen relative">
            <div class="flex-col h-full gap-12 hidden md:flex max-w-[240px] px-[7px] border-r border-[#5B3F33] absolute w-[240px]">
                <img src={Logo} class="m-6" alt="" width={'97px'} />
                <div class="flex flex-col gap-8 p-2 max-w-[240px]">
                    <For each={menu}>
                        {index => (
                            <div class="gap-2 flex flex-col">
                                <h1 class="font-bold text-[13px] leading-[150%]">{index.name}</h1>
                                <div class="flex flex-col gap-2">
                                    <For each={index.contents}>
                                        {content => (
                                            <Link href={content.href}>
                                                <div style={{
                                                    background: location.pathname == content.href ? '#3D281E' : '',
                                                }} class="text-[15px] px-4 py-[6px] leading-[22px] mi-w-[240px] hover:bg-[#3D291E] rounded-lg transition-all">
                                                    {content.name}
                                                </div>
                                            </Link>
                                        )}
                                    </For>
                                </div>
                            </div>
                        )}
                    </For>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;