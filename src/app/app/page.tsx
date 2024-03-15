import { auth } from '@/services/auth'

interface PageProps {

}
export default async function Page(props : PageProps){
    const session = await auth()
    return(
        <pre>{JSON.stringify(session?.user, 1)}</pre>
    )
}