"use client";

import Image from 'next/image';
import {CustomButtonProps} from "@/components/CustomButton/CustomButton.props";


const CustomButton = ({title, containerStyles, handleClick, buttonType}: CustomButtonProps) => {
    return (
        <button
            disabled={false}
            type={buttonType || "button"}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span className={`flex-1`}>
                {title}
            </span>

        </button>
    )
}

export default CustomButton;