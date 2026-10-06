
type PropsTimer = {
    minutes: number
    seconds: number
}

export function Timer({ minutes, seconds }: PropsTimer) {

    return (
        <div className="text-center p-5 pb-0 font-mono text-7xl text-blue-500 tabular-nums">{String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}</div>
    )
}