import NextLink from "next/link";

type Props = {
    children: string,
    href: string
}

const Link = ({ children, href, ...props }: Props) => {
    return (
        <>
            <NextLink href={href}>
                <a {...props}>{children}</a>
            </NextLink>
        </>
    );
}

export default Link