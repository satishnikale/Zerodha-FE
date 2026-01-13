import { useState } from "react";
import { ChevronDown } from "../../icons/ChevronDown";
import { ChevronUp } from "../../icons/ChevronUp";

interface teamProfileProps {
    image: string,
    profileName: string;
    position: string,
    bio: string;
}

export const TeamProfile = ({ image, profileName, position, bio }: teamProfileProps) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="w-64 h-auto flex flex-col justify-center items-center font-inter">
            <img className="w-48 rounded-full mb-2" src={image} alt="" />
            <h1 className="">{profileName}</h1>
            <p className="text-lightblack text-sm">{position}</p>
            <p 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1 text-sm font-inter text-lightblack">Bio
                {
                    isOpen ? (<ChevronDown />) : (<ChevronUp />)
                }
            </p>
            {
                isOpen && <p className="w-full text-center my-2 px-6 font-inter text-sm text-lightblack">
                    {bio}
                </p>
            }
        </div>
    )
}