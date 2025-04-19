import { useRouter } from 'next/router';
import Navbar from './Navbar';
import React, { useState } from 'react'

export default function Layout({children}) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    // if (status === "loading") {
    //     return (
    //       <div className="bg-indigo-900 flex w-screen h-screen items-center justify-center flex-col">
    //         <Loader />
    //         <span className="text-white text-3xl">Loading...</span>
    //       </div>
    //     );
    //   }
    
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}
