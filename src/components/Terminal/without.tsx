import { Accessor, createSignal, For, onMount } from "solid-js";
import ETerm from "./terminal"

import f_line_deps from "../../utils/packages"

const f_lines: string[] = f_line_deps
interface IWithoutTerminal {
    setWidth: (width: number) => void
    width: Accessor<any>
    render: boolean
}
const WithoutTerminal = (props: IWithoutTerminal) => {
    const [lines, setLines] = createSignal<string[]>([]);
    const [currentLine, setCurrentLine] = createSignal(-1)
    const [time, setTime] = createSignal(0);

    function updateLines() {
        let c_line = currentLine() + 1;
        let r = Math.floor(Math.random() * 100) + 1;
        let timeout = r > 15 ? 125 : 325;



        if (c_line <= f_lines.length) {
            let t_time = time() + timeout;
            setTime(t_time)
            setCurrentLine(c_line)
            if (f_lines[c_line]) {
                let line = f_lines[c_line];

                line = line.replace("Compiling", "<span class=\"text-green-600\">Compiling</span>")

                line = line.replace("Finished", "<span class=\"text-green-600\">Finished</span>")
                line = line.replace("3.5s", parseInt((time() / 1000).toString()) + "s")
                // go through lines and remove any previous instances of building
                let new_lines = lines().map((l: string) => {
                    let line = l.split("\n")[1]
                    l = l.replace(line, "")
                    return l
                })


                setLines([...new_lines, line]);
            }
            props.setWidth(props.width() + 1)
        }
        let elem = document.getElementById('scroll-cargo')!;

        elem.scrollTop = elem.scrollHeight;
        if (props.render) {
            setTimeout(() => { updateLines() }, timeout)
        }
    }

    onMount(() => {
        props.setWidth(0)
        updateLines()
    })
    return (
        <ETerm >
            <div id="scroll-cargo" class="overflow-y-hidden rounded-xl h-full w-full">
                <h1 class="flex gap-2">
                    <span class="text-red-300 font-bold">volt</span>
                    on
                    <span class="text-red-500">🦀v1.62.0-nightly</span>
                </h1>
                <h1>❯ cargo run</h1>
                <For each={lines()}>
                    {(line, index) => (
                        <div class="text-sm m-0 p-0" innerHTML={line}></div>
                    )}
                </For>

            </div>

            <div class="absolute -top-4 grid place-items-center w-full">
                <div class="w-[80px] flex gap-2 items-center justify-center py-3 px-8 bg-black-200 rounded-lg" style={{
                    border: "1px solid #5B3F33"
                }}>
                    <div class="flex gap-[6px] items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.99992 14.6667C11.6818 14.6667 14.6666 11.6819 14.6666 8.00004C14.6666 4.31814 11.6818 1.33337 7.99992 1.33337C4.31802 1.33337 1.33325 4.31814 1.33325 8.00004C1.33325 11.6819 4.31802 14.6667 7.99992 14.6667Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10 10.6667L8.39067 9.05733C8.1406 8.80734 8.00008 8.46826 8 8.11467V4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <h1 class="text-[15px] leading-[22px] text-white">{parseInt((time() / 1000).toString())}s</h1>
                    </div>
                </div>
            </div>
        </ETerm>
    )
}
export default WithoutTerminal