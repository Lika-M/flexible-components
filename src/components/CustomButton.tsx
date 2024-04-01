import { ComponentPropsWithoutRef } from "react";


// No need to specify element, but attributes that will/never use
// Otherwise they are mixed between the two types
type CustomButtonProps = ComponentPropsWithoutRef<'button'> & {
    href?: never;
    disabled?: true;
}
type CustomLinkProps = ComponentPropsWithoutRef<'a'>  & {
    href?: string;
    disabled?: never;
}

// Util function: if returns true  --> props is /return type/
function isAnchorProps(props: CustomButtonProps | CustomLinkProps): props is CustomLinkProps {
    return 'href' in props;
}

export default function CustomButton(props: CustomButtonProps | CustomLinkProps) {

    // if ('href' in props) {
    //     return <a className="custom button" {...props}>Link</a>
    // }

    if (isAnchorProps(props)) {
        return <a className="custom button" {...props}>Link</a>
    }

    return <button className="custom button" {...props}>Button</button>
}