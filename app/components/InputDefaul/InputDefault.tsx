type PropsInputDefault = {
    id: string;
    label: string;
} & React.ComponentProps<'input'>;

export function InputDefault({ id, label, type, ...rest }: PropsInputDefault) {
    return (
        <form className="grid grid-rows-2 text-center">
            <label htmlFor={id} className="self-center">{label}</label>
            <input id={id} type={type} {...rest} className="focus:outline-0 border-0 border-b text-center mt-2" />
        </form>
    )
}