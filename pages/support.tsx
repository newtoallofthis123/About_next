export default function Support() {
    return (
        <p>
            Redirecting
        </p>
  )
}

export async function getServerSideProps() {
    return {
        redirect: {
            destination: 'https://www.buymeacoffee.com/noobscience',
            permanent: false,
        },
    }
}