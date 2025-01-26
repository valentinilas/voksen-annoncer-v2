"use client"
import { login } from "./actions"
import { useRouter } from "next/navigation"
import { useUser } from "@/context/UserContext"

export default function LoginPage() {
  const router = useRouter()
  const { setUser } = useUser()

  async function handleSubmit(formData: FormData) {
    const loggedInUser = await login(formData) // Modify login to return user
    if (loggedInUser) {
      setUser(loggedInUser)
      router.refresh()      // Force the header to re-check session
      router.push("/private")
    } else {
      // Handle login error if needed
    }
  }

  return (
    <form onSubmit={async (e) => {
      e.preventDefault()
      await handleSubmit(new FormData(e.currentTarget))
    }}>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button type="submit">Log in</button>
    </form>
  )
}