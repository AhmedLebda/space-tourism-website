import { ElementType } from "react";

type Variant =
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body"
    | "body-small"
    | "small"
const tags: Record<Variant, ElementType> = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    body: "p",
    'body-small': "p",
    small: "span",
};

const sizes: Record<Variant, string> = {
    h1: "text-5xl xs:text-7xl xl:text-8xl 2xl:text-9xl",
    h2: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl",
    h3: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl",
    h4: "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl",
    h5: "text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl",
    h6: "text-lg lg:text-xl xl:text-2xl 2xl:text-2xl",
    body: "text-base sm:text-lg md:text-lg lg:text-lg xl:text-xl 2xl:text-xl",
    "body-small": "text-sm sm:text-base md:text-base lg:text-base xl:text-lg 2xl:text-xl",
    small: "text-xs sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-lg",
};



interface Props {
    variant: Variant;
    className?: string;
    children: React.ReactNode;
    as?: ElementType;
}

const Typography = ({ variant, className, children, as: Component = "p" }: Props) => {
    const sizeClasses = sizes[variant];
    const Tag = Component || tags[variant];

    return <Tag className={`${sizeClasses} ${className}`}>{children}</Tag>
};

export default Typography;