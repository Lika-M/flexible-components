import { type ComponentPropsWithoutRef, forwardRef } from "react";

type InputRefProps = {
    id: string;
    label: string;
} & ComponentPropsWithoutRef<'input'>

const InputRef = forwardRef<HTMLInputElement, InputRefProps>(function InputRef(
    { id, label, ...rest }, ref
) {
    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...rest} ref={ref} />
        </p>
    );
})

export default InputRef;