import { type FormEvent, type ComponentPropsWithoutRef, type FC, useRef } from "react";

type FormProps = ComponentPropsWithoutRef<'form'> & {
    onSave: (value: unknown) => void;
}

const Form: FC<FormProps> = ({ children, onSave, ...restProps }) => {

    const form = useRef<HTMLFormElement>(null);

    function handleSubmit(ev: FormEvent<HTMLFormElement>) {
        ev.preventDefault();

        const formData = new FormData(ev.currentTarget);
        const data = Object.fromEntries(formData);
        onSave(data);

        form.current?.reset();
    }

    return (
        <form onSubmit={handleSubmit}{...restProps} ref={form}>
            {children}
        </form>
    );
}

export default Form;