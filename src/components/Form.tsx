import { type FormEvent, type ComponentPropsWithoutRef, type FC } from "react";

type FormProps = ComponentPropsWithoutRef<'form'> & {
    onSave: (value: unknown) => void;
}

const Form: FC<FormProps> = ({ children, onSave, ...restProps }) => {

    function handleSubmit(ev: FormEvent<HTMLFormElement>) {
        ev.preventDefault();

        const formData = new FormData(ev.currentTarget);
        const data = Object.fromEntries(formData);
        onSave(data);
    }

    return (
        <form onSubmit={handleSubmit}{...restProps}>
            {children}
        </form>
    );
}

export default Form;