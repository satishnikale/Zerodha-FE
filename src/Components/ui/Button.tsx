interface ButtonProps{
    text: string;
    onClick?: () => void;
}

export const Button = ({text}: ButtonProps) => {
    return(
       <button className="appearance-none py-2 px-7 text-sm rounded-sm font-inter font-semibold text-white bg-blue-800 hover:bg-black transition-all duration-200">
        {text}
       </button>
    )
}