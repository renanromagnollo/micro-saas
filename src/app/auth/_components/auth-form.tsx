'use client'

import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { signIn } from "next-auth/react"
import { toast } from "@/components/ui/use-toast"


interface AuthFormProps {

}

export function AuthForm(props : AuthFormProps){

  const form = useForm()

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      await signIn('email', {email: data.email, redirect: false})

      toast({
        title: 'Magic Link Sent',
        description: 'Check your email for the maig link to login'
      })
      
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Um erro ocorreu. Tente novamente.'
      })
      
    }
  })

    return (
      <Card className="w-full max-w-md">
      <CardHeader>
        <div>Sign in to your account</div>
        <div className="mt-2 text-sm">Enter your email to receive a magic link</div>
      </CardHeader>
      <CardContent className="grid gap-4">
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <Label htmlFor="email">Email</Label>
            <Input className="w-full" id="email" placeholder="Email" required type="email" 
            {... form.register('email')}/>
          </div>
          <div className="mt-6">
            <Button className="w-full" type="submit">
              Send magic link
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>


  )
}
