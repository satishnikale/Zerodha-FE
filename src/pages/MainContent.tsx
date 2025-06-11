import type { ReactNode } from "react";
interface ChilProps{
    children: ReactNode,
}
export default function MainContent({children}:ChilProps) {
  return (
    <div className="w-7/12 max-w-[1080px] h-auto mx-auto">
      {children}
    </div>
  )
}
