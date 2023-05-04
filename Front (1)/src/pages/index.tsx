import LoginForm from "@/components/login"
import Sidebar from '@/components/layout/Sidebar'
import { useSession, signOut } from "next-auth/react"
import Router from 'next/router';

export default function FirstPage() {
 const { data: session }: { data: any } = useSession()
    if (session) {
        Router.push("/user")
    }
  return (
    <>
        <LoginForm />
    </>
  )
}
