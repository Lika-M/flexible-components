import { ComponentPropsWithoutRef } from "react";

type InputProps = {
    id: string;
    label: string;
} & ComponentPropsWithoutRef<'input'>

export default function Input({ id, label, ...rest }: InputProps) {
    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <input id={id} name={id} {...rest} />
        </p>
    );
}