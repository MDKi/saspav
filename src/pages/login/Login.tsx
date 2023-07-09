
import { signIn, signOut, useSession } from "next-auth/react";
import LoginForm from "./components/loginForm";
export default function Login (){

    return (
        <>
          <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#e6edf2] to-[#84bbe3]">
            <div className="container flex flex-col items-center justify-center ">
                <LoginForm/>    
              </div>
          </main>
        </>
      );
}

// module.exports = Login;