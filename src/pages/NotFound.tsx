import MainContent from "./MainContent"

export const NotFound = () => {
    return (
        <MainContent>
            <div className="flex flex-col justify-center items-center my-36 gap-4">
                <h1 className="text-4xl font-inter">Not Found.</h1>
                <p>Soory! The page you are looking for does not exists.</p>
            </div>
        </MainContent>
    )
}