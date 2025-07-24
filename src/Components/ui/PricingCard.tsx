interface PricingCardProps{
    image: string;
    heading: string;
    text: string
}

export const PricingCard = ({image, heading, text}: PricingCardProps) => {
    return (
        <div className="w-96 flex flex-col justify-center items-center font-inter">
            <img className="w-64" src={image} alt="" />
            <h1 className="text-3xl my-4">{heading}</h1>
            <p className="w-full h-auto text-md text-lightblack text-center my-2">{text}</p>
        </div>
    )
}