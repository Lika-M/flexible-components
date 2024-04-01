import { type ComponentPropsWithoutRef, type ReactNode } from "react";

type ButtonProps = {
    el: 'button';
    children: ReactNode;
} & ComponentPropsWithoutRef<'button'>

type LinkProps = {
    el: 'link';
    children: ReactNode;
} & ComponentPropsWithoutRef<'a'>

export default function Button(props: ButtonProps | LinkProps) {
    
    if (props.el === 'link') {
        return <a className="button" {...props}>{props.children}</a>
    }

    return <button className="button"  {...props}>{props.children}</button>
}