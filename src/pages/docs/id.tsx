import { Link, useLocation } from "solid-app-router"
import { createSignal, For, Show } from "solid-js"
import Logo from "../../assets/logo.svg"
import Benchmarks from "../../components/docs/pages/benchmarks"
import Build from "../../components/docs/pages/build"
import GettingStarted from "../../components/docs/pages/getting-started"
import Linux from "../../components/docs/pages/ci-linux"
import Run from "../../components/docs/pages/run"
import Sidebar, { menu } from "../../components/docs/sidebar"
import Windows from "../../components/docs/pages/ci-windows"
import Help from "../../components/docs/pages/help"


const resolveElement = (path: string) => {
    if (path == "/docs/start/getting-started") {
        return <GettingStarted />
    } else if (path == "/docs/start/benchmarks") {
        return <Benchmarks />
    }else if (path == "/docs/commands/help")  {
        return <Help />
    } else if (path == "/docs/commands/run") {
        return <Run />
    } else if (path == "/docs/commands/build") {
        return <Build />
    } else if (path == "/docs/ci/linux") {
        return <Linux />
    } else if (path == "/docs/ci/windows") {
        return <Windows />
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
    const [open, setOpen] = createSignal(false);

    return (
        <div class="flex w-full min-h-screen text-white pb-10 relative z-10">
            <Show when={open()}>
                <div class="fixed w-screen h-screen bg-black-100 z-50 p-5">
                    <button onClick={() => setOpen(false)}><svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" width="24px" height="24px"><path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" /></svg></button>
                    <div class="flex flex-col gap-8 p-2 max-w-[240px]">
                        <For each={menu}>
                            {index => (
                                <div class="gap-2 flex flex-col">
                                    <h1 class="font-bold text-[15px] leading-[150%]">{index.name}</h1>
                                    <div class="flex flex-col gap-2">
                                        <For each={index.contents}>
                                            {content => (
                                                <div onClick={() => window.location.replace(content.href)}>
                                                    <div style={{
                                                        background: location.pathname == content.href ? '#3D281E' : '',
                                                    }} class="text-[15px] px-4 py-[6px] leading-[22px] mi-w-[240px] hover:bg-[#3D291E] rounded-lg transition-all">
                                                        {content.name}
                                                    </div>
                                                </div>
                                            )}
                                        </For>
                                    </div>
                                </div>
                            )}
                        </For>
                    </div>
                </div>
            </Show>
            <Sidebar />
            <div class="px-5 py-3 w-full md:w-[60%]">
                <div class="flex md:hidden gap-2 relative">
                    <button onClick={() => setOpen(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </button>

                    <img src={Logo} class="block md:hidden" alt="" />
                </div>
                {resolveElement(useLocation().pathname)}
            </div>
        </div>
    )
}

export default Id;