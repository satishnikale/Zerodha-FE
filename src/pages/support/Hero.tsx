export const SupportHero = () => {
    return (
        <div className="w-full h-auto py-6 bg-gray-200">
            <div className="w-11/12 lg:w-9/12 max-w-[1080px] h-auto mx-auto flex flex-col my-8 font-inter space-y-8">
                <div className="flex justify-between">
                    <span className="text-3xl">Support Portal</span>
                    <button className="text-white bg-blue-500
                    py-2 px-4 rounded-sm cursor-pointer
                    ">My Tickets
                    </button>
                </div>
                <input
                    className="appearance-none py-4 px-4 border"
                    type="text" placeholder="Eg: how do i activate F&O..."
                />
            </div>
        </div>
    )
}