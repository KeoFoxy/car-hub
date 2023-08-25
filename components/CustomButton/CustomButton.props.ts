import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    buttonType?: "button" | "submit";
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    textStyles?:string;
    icon?: string;
    isDisabled?: boolean;
}