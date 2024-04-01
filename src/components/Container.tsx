import { type ReactNode, type ElementType, type ComponentPropsWithoutRef } from "react";

// T is identifier and brings all props of the extended type
type ContainerProps<T extends ElementType> = {
    as?: T;
    children: ReactNode;
} & ComponentPropsWithoutRef<T>

// that needs to a Generic fn that may wrap every component type
// the problem is that "as" needs to be optional and the Component must have another opportunity 
export default function Container<C extends ElementType>({
    as,
    children,
    ...restProps
}: ContainerProps<C>) {
    const Component = as || 'div';

    return <Component className="container button" {...restProps}>{children}</Component>;
}



