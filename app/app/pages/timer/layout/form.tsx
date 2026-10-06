import { Dispatch, SetStateAction } from "react"

type FormProps = {
    nomeTask: string
    setNomeTask: Dispatch<SetStateAction<string>>
}

export function Form({ nomeTask ,setNomeTask }: FormProps) {
    return (
        <form className="mt-10 flex flex-col items-center">
            <label htmlFor="NomeTask">Task:</label>
            <input type="text" id="NomeTask" 
            className="border-b mt-5 focus:outline-0"
            value={nomeTask} onChange={(event) => {setNomeTask(event.target.value)}}/>
        </form>
    )
}