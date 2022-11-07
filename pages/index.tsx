import Link from 'next/link'

export default function Home({jobs}: any) {
    return (
        <ul>
            {
                jobs.map((job: any, index: any) => {
                    return (
                        <li>
                            <Link href={`/jobs/${job.id}`}>
                                {job.title}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export async function getServerSideProps() {
    const res = await fetch('https://api.json-generator.com/templates/ZM1r0eic3XEy/data',
        {headers: {Authorization: "Bearer wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu"}})
    const jobs = await res.json();
    return {
        props: {
            jobs
        }
    }
}