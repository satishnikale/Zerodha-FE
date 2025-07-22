import MainContent from "../MainContent"

export const AboutHero = () => {
    return (
        <MainContent>
            <div className="w-full h-auto">
                <h1 className="w-full h-auto flex felx-col justify-center items-center text-2xl font-inter text-lightblack my-20">We pioneered the discount broking model in India. <br />
                    Now, we are breaking ground with our technology.</h1>
                <hr />
                <div className="w-full h-auto grid grid-col-1 md:grid-cols-2 gap-8 my-10 font-inter text-lightblack text-sm">
                    <div>
                        <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>
                        <p>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
                        <p>Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
                    </div>
                    <div>
                        <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
                        <p>Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
                        <p>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies.</p>
                    </div>
                </div>
            </div>
        </MainContent>
    )
}