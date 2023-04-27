import LoadingScreen from "@components/loading"

export default function LoadingTest() {
    return (
        <div style={{
            textAlign: "center",
        }}>
            <h1>
                This is a test page for the loading screen.
            </h1>
            <p>
                You don't need to be here
            </p>
            <LoadingScreen></LoadingScreen>
        </div>
    )
}