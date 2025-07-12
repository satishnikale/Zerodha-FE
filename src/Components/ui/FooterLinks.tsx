
export const FooterLinks = (text:string, link: string) => {
  return (
    <a className="font-inter text-[12px] text-gray-500 my-1 hover:text-blue-500" href={link}>{text}</a>
  )
}