interface universeProps {
    image1: string;
    label1: string;
    image2: string;
    label2: string
}

export const UniverseCard = ({ label1, label2, image1, image2 }: universeProps) => {
    return (
        <div className="w-full h-auto flex flex-col font-inter text-sm text-lightblack lg:mx-8">
            <img className="w-40 mx-auto px-4" src={image1} alt="Universe card image" loading="lazy" />
            <p className="text-center px-4 my-4">{label1}</p>
            <img className="w-40 mx-auto mt-6" src={image2} alt="Universe card image" loading="lazy" />
            <p className="text-center px-4 my-4">{label2}</p>
        </div>
    )
}