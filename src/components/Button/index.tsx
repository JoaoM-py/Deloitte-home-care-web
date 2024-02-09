import { ConteinerButton } from "./styles";

interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
}


export default function Button({ onClick, children }:ButtonProps) {
    return (
        <ConteinerButton onClick={onClick}>
            {children}
        </ConteinerButton>
    )

}