import { useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from '@/firebase/firebase';

import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const router = useRouter();
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleRegister = async () => {
    if (!username || !email || !password) return;
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      router.push('/login');
      
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (

    <main className="flex lg:h-[100vh]">
            <div className="w-full lg:w-[60%] p-8 md:p-14 flex items-center justify-center lg:justify-start">
                <div className="p-8 w-[600px]">
                    <h1 className="text-6xl font-semibold">Sign Up</h1>
                    <p className="mt-6 ml-1">
                        Already have an account ?{" "}
                        <span className="underline hover:text-blue-400 cursor-pointer" >
                            Login
                        </span>
                    </p>

                    <form>

                    <div className="mt-10 pl-1 flex flex-col">
                        <label>Name</label>
                        <input
                            type="text"
                            className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                            required
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mt-10 pl-1 flex flex-col">
                        <label>Email</label>
                        <input
                            type="text"
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
                    <button className="bg-black text-white w-44 py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.8] active:scale-90" onClick={handleRegister}>
                        Sign Up
                    </button>
                    </form>
   
                </div>
            </div>
        </main>
    );
};

export default Register;