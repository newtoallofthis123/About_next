import Layout from "@/components/layout";
const Md = () => {
    if (typeof window !== 'undefined') {
        setTimeout(() => {
            window.location.href = "https://htmler.noobscience.rocks"
        }, 10000)
    }
    return (
        <Layout>
            <div className="normalize">
                <div className="page-div">
                    <h1>
                        Migrated to HTMLER
                    </h1>
                    <button className="fancy_btn"><a href="https://htmler.noobscience.rocks">Visit the New Site</a></button>
                    <p>
                        You'll be redirected to the new site in 10 seconds.
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default Md