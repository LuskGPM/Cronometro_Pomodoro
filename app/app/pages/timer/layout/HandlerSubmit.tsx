import { faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type PropsSubmit = {
    rodando: boolean
    stopTimer: Function
}

export function HandlerSubmit({ rodando, stopTimer }: PropsSubmit) {
    return <button className="mt-10 bg-blue-500 p-2 w-50 rounded-3xl hover:bg-orange-600 hover:cursor-pointer text-white" onClick={() => stopTimer(rodando)}>
        <FontAwesomeIcon icon={rodando ? faStop : faPlay} />
    </button>
}