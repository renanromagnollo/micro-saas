import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AuthForm } from "./_components/auth-form";
import { auth } from "@/services/auth";
import { Button } from "@/components/ui/button";
import { UserInfo } from "../app/_components/user-info";

export default async function Page() {

  const session = await auth()

  return (
    <main>
      <UserInfo user={session?.user}/>
    </main>
  )