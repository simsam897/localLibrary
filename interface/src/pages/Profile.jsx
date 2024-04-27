import {  TextInput } from "flowbite-react";
export default function Profile() {
  return (
    <div className="mt-40">
      <div className=" max-w-2xl md:max-w-3xl  mx-auto flex flex-col gap-8 ">

        <h1 className="text-3xl text-center font-bold text-blue-900">
          Profile
        </h1>
        
        <TextInput
          type="text"
          id="username"
          placeholder="ltsu123"
          addon="Username"
          style={{ height: "64px", fontSize: "20px" }}
        />

        <TextInput
          id="email1"
          type="email"
          placeholder="name@library.com"
          required
          addon="Email"
          style={{ height: "64px", fontSize: "20px" }}
        />

        <TextInput
          id="password"
          type="password"
          placeholder="*********"
          required
          addon="Password"
          style={{ height: "64px", fontSize: "20px" }}
        />
        <button
          className="w-full h-14   font-bold bg-blue-600 rounded-lg text-white"
          type="button"
          style={{ fontSize: "25px" }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
