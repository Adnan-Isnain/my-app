"use client"
import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState<string | undefined>(undefined)
  const [password, setPassword] = useState<string | undefined>(undefined)
  return (
    <div className="w-full h-dvh bg-purple-400 flex justify-center items-center">
      <div className="rounded-lg border border-gray-400 bg-white flex flex-col gap-2 p-10">
        <h1 className="text-2xl text-black text-center">LEARNING ROOM</h1>
        <span className="text-lg text-black text-center">Masuk</span>
        <div className="w-full bg-gray-400 pl-2 py-2 rounded-md"><input value={username} type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} /></div>
        {username !== undefined && !username.length && <span className="text-red-700 text-xs">*Username must not be empty</span>}
        <div className="w-full bg-gray-400 pl-2 py-2 rounded-md">
          <input value={password} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        {password !== undefined && !password.length && <span className="text-red-700 text-xs">*Password must not be empty</span>}
        {password !== undefined && password.length < 8 && <span className="text-red-700 text-xs">*Min password length: 8</span>}
        <div className="flex gap-2">
          <input type="checkbox" />
          <span>Ingat Saya</span>
        </div>
        <div className="text-xs flex flex-col">
          <span className="border border-gray-400 p-2 rounded-t-xl"><b>Lupa Username or Password?</b>{' '}<a href="#click-here" className="text-purple-400">Click Here</a></span>
          <span className="border border-gray-400 text-purple-400 p-2 rounded-b-xl"><b>Login dengan kode aktivasi</b>{" >"}</span>
        </div>
        <button className="bg-purple-400 rounded-xl py-2 text-white hover:cursor-pointer">Masuk</button>
      </div>
    </div>
  );
}
