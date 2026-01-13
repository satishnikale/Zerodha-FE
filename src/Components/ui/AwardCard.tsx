interface AwardCardProps {
    label: string,
    text: string,
}

export default function AwardCard({ label, text }: AwardCardProps) {
    return (
        <div className="w-full h-auto font-inter">
            <h1>{label}</h1>
            <p className="text-[12px] text-gray-700">{text}</p>
        </div>
    )
}
