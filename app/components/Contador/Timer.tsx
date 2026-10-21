export function Timer() {
    return (
        <section id="contador" className="mt-10 text-8xl font-mono">
            {String(0).padStart(2, '0')}:{String(0).padStart(2, "0")}
        </section>
    )
}