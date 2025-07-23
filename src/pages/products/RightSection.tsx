import type { ReactNode } from "react";

interface leftSectionProps {
    image: string;
    heading: string;
    information: string;
    buttons?: ReactNode;
}

export const RightSection = ({ image, heading, information, buttons }: leftSectionProps) => {
    return (
        <div className="w-full h-auto flex flex-col justify-center items-center gap-x-16 lg:flex-row">

            <div className="w-full h-auto space-y-2 font-inter">
                <h1 className="text-2xl">{heading}</h1>
                <p className="text-lightblack text-sm leading-normal">{information}</p>
                <div className="flex">
                    {buttons}
                </div>
            </div>
            <img className="w-[340px] md:w-[500px] max-w-[500px]" src={image} alt="" />
        </div>
    )
}