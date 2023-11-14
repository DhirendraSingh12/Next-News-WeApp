import { useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from '@/firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';


const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleLogin = async () => {
    if (!email || !password) return;
    try {
     const user = await signInWithEmailAndPassword(auth, email, password);
      router.push('/index.js');

    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <main className="flex lg:h-[100vh]">
            <div className="w-full lg:w-[60%] p-8 md:p-14 flex items-center justify-center lg:justify-start">
                <div className="p-8 w-[600px]">
                    <h1 className="text-6xl font-semibold">Login</h1>
                    <p className="mt-6 ml-1">
                        Don't have an account ?{" "}
                        <span className="underline hover:text-blue-400 cursor-pointer">
                            Sign Up
                        </span>
                    </p>

                    <form>

                    <div className="mt-10 pl-1 flex flex-col">
                        <label>Email</label>
                        <input
                            type="email"
                            className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mt-10 pl-1 flex flex-col">
                        <label>Password</label>
                        <input
                            type="password"
                            className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className="bg-black text-white w-44 py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.8] active:scale-90" onClick ={handleLogin}>
                        Sign in
                    </button>


                    </form>


                    
                </div>
            </div>
        </main>
    );
};

export default Login;