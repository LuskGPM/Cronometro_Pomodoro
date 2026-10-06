import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Cycles({ ciclos }: {ciclos: number}) {
    function div_ciclos() {
        let list_divs = []
        for (let i = 0; i < ciclos; i++){
            let classe = ""
            if (i % 2 !== 0) classe = "text-yellow-600"; else classe = "text-green-600"
            list_divs.push(<FontAwesomeIcon key={i} icon={faCircle} className={classe}/>)
        }
        return list_divs
    }

    return (
        <div className="flex gap-2 m-5">
            {div_ciclos()}
        </div>
    )
}