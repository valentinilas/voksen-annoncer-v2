"use client"

import { useUser } from "@/context/UserContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function PrivatePage() {
  const { user, loading } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login")
    }
  }, [user, loading, router])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Welcome to the Private Page</h1>
      <p>Hello, {user?.email}!</p>
      {/* Add more private content here */}
    </div>
  )
}