import { signIn } from "@/auth"

export function GithubForm() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("github", { redirectTo: "/app" })
      }}
    >
      <button type="submit">Signin with GitHub</button>
    </form>
  )
} 