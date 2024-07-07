import { signIn } from "@/auth"

export function GoogleForm() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google", { redirectTo: "/app" })
      }}
    >
      <button type="submit">Signin with Google</button>
    </form>
  )
} 