import { auth } from '@/services/auth'
import { UserInfo } from './_components/user-info'

interface PageProps {

}
export default async function Page(props : PageProps){
    const session = await auth()
    return(
        <main>
            <UserInfo user={session?.user}/>
        </main>
    )
}