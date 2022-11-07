import {useRouter} from 'next/router'

const Job = ({jobs}: any) => {
    const router = useRouter()
    const {id} = router.query

    const job = jobs.find((job: any) => job.id === id)

    return (
        <div>
            {job.description}
        </div>
    )
}

export default Job

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