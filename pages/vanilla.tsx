export default function VanillaIndex() {
    return (
        <div>
            <p>Redirecting</p>
        </div>
    );
}

export async function getServerSideProps({ res }) {
    res.writeHead(301, {
        Location: '/vanilla/index.html',
    });
    res.end();
    return { props: {} };
}
