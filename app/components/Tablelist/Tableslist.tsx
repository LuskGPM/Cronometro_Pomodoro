import "./table-list.css"

type props = {
    children: React.ReactNode
}

export function Table({ children }: props) {
    return <div className="table-container">
        <table className="styled-table">
            {children}
        </table>
    </div>
}

export function Ul({ children }: props) {
    return <ul className="custom-list">
        {children}
    </ul>
}