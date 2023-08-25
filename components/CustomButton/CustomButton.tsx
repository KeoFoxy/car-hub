"use client";

import Image from 'next/image';
import {CustomButtonProps} from "@/components/CustomButton/CustomButton.props";


const CustomButton = ({title, containerStyles, handleClick, buttonType, textStyles, icon, isDisabled }: CustomButtonProps) => {
    return (
        <button
            disabled={false}
            type={buttonType || "button"}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span className={`flex-1`}>
                <p className={textStyles}>
                    {title}
                </p>
            </span>
            {icon && (
                <div className={"relative w-6 h-6"}>
                    <Image src={icon} alt={"icon"} fill className={"object-contain"}/>
                </div>
            )}

        </button>
    )
}

export default CustomButton;