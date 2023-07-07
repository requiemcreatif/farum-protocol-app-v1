import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-start p-24 ${inter.className}`}>
      <div style={{ backgroundColor: '#334DA2' }}className="mt-[-100px] w-screen py-4">
        <p className="text-white text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
      <div className="flex items-center justify-end mt-[74px] w-full">
        <h1 className="text-2xl mb-2 font-bold" style={{ position: 'absolute', left: 100 }}>FARUM</h1>
          <div className="ml-auto">
            <button className="bg-transparent hover:bg-blue-800 hover:text-white text-trueGray-200 font-light px-4 rounded-full border-2 border-trueGray-300">
              Login
            </button>
          </div>
      </div>
      <div style={{ backgroundColor: '#b2b6b7' }}className="mt-[30px] w-screen h-[0.5px]"></div>   
            <h2 className="text-6xl text-center font-bold mt-8">Organize Your Advanced training with Farum Protocol Manager</h2>
      <div className="mt-[30px] text-center font-light w-screen py-4">
             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
      </div>
      <div className="flex mt-[20px]">
        <button style={{ width: '143px' }}className="bg-transparent hover:bg-blue-800 hover:text-white text-trueGray-300 font-Inter py-2 px-4 rounded-md mr-2">
          Get Started
        </button>
        <button style={{ width: '143px' }}className="bg-transparent hover:bg-blue-800 hover:text-white text-trueGray-300 font-Inter py-2 px-4 rounded-md">
          Sign In
        </button>
      </div>

    </main>
  );
}
