import { EmailForm } from "../(auth)/components/form/emailForm";
import { GoogleForm } from "../(auth)/components/form/googleForm";
import { GithubForm } from "../(auth)/components/form/githubForm";

export const runtime = 'edge'

export default function LoginPage() {
  return (
    <>
      <h1>Login</h1>
      <GoogleForm />
      <GithubForm />
      <EmailForm />
    </>
  );
}
