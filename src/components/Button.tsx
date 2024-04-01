import { ComponentPropsWithoutRef } from "react";

type ButtonProps = {
    el: 'button';
} & ComponentPropsWithoutRef<'button'>

type LinkProps = {
    el: 'link';
} & ComponentPropsWithoutRef<'a'>

export default function Button(props: ButtonProps | LinkProps) {

    if (props.el === 'link') {
        return <a className="button" {...props}>Link</a>
    }

    return <button className="button"  {...props}>Button</button>
}