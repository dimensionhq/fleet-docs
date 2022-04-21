import ProgressBar from "./progressbar"
import Text from "./text"
import ETerm from "./terminal"
import WithoutTerminal from "./without"
import { createSignal, onMount, Show } from "solid-js"
import With from "./with"

const Terminal = () => {
    const [width, setWidth] = createSignal(0);

    const [tab, setTab] = createSignal('w/o')

    const changeTab = (to: string) => {
        if (tab() !== to) {
            setWidth(0)
            setTab(to)
        }
    }

    return (
        <div class="w-full flex justify-between pb-[198px] items-center flex-col gap-10 lg:flex-row lg:gap-0">
            <div class="w-full h-full flex flex-col gap-[72px]">
                <div onClick={() => changeTab("w/o")} class={`flex flex-col gap-3 max-w-fit ${tab() != "w/o" ? "opacity-40" : ""} hover:opacity-90`}>
                    <Text>without fleet_</Text>
                    <Show when={tab() == "w/o"}>
                        <ProgressBar id="progress">
                            <span style={{ height: "10px", width: width() + "%" }}></span>
                        </ProgressBar>
                    </Show>
                </div>
                <div onClick={() => changeTab("w")} class={`flex flex-col gap-3 max-w-fit ${tab() != "w" ? "opacity-40" : ""} hover:opacity-90`}>
                    <Text>with fleet_</Text>
                    <Show when={tab() == "w"}>
                        <ProgressBar>
                            <span style={{ height: "10px", width: width() + "%" }}></span>
                        </ProgressBar>
                    </Show>
                </div>
            </div >
            <Show when={tab() == 'w'} fallback={() => (
                <WithoutTerminal render={tab() == "w/o" ? true : false} setWidth={setWidth} width={width} />
            )}>
                <With render={tab() == "w" ? true : false} setWidth={setWidth} width={width} />
            </Show>
        </div >
    )
}

export default Terminal