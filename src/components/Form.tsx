import { type FormEvent, type ComponentPropsWithoutRef, useRef, useImperativeHandle, forwardRef } from "react";

type FormProps = ComponentPropsWithoutRef<'form'> & {
    onSave: (value: unknown) => void;
}

const Form = forwardRef(function Form({ children, onSave, ...restProps }: FormProps, ref) {

    const form = useRef<HTMLFormElement>(null);

//  the second argument is an externally callable function that returns the methods
    useImperativeHandle(ref, () => {
        return {
            clear() {
                form.current?.reset();
                console.log('clearing');
            }
        }
    });

    function handleSubmit(ev: FormEvent<HTMLFormElement>) {
        ev.preventDefault();

        const formData = new FormData(ev.currentTarget);
        const data = Object.fromEntries(formData);
        onSave(data);

        // form.current?.reset();
    }

    return (
        <form onSubmit={handleSubmit}{...restProps} ref={form}>
            {children}
        </form>
    );
});

export default Form;