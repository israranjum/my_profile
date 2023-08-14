"use client";
import AuthNav from "@/components/AuthNav";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  const [authState, setAuthState] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const submit = () => {
    console.log(authState);
  };
  return (
    <div className="h-screen">
      <AuthNav></AuthNav>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="hidden lg:block">
          <Image
            src="/images/design.svg"
            width={100}
            height={100}
            alt="auth side image"
            className="h-screen w-full"
          />
        </div>
        <div className="flex justify-center items-center mt-20 lg:mt-0">
          <div className="px-10 lg:px-32 w-full">
            <h1 className="text-5xl">DevUI</h1>
            <p>Explore best UI</p>
            <div className="mt-4">
              <Label htmlFor="name">Enter Your Name</Label>
              <Input
                placeholder="Enter Your Name"
                id="name"
                type="text"
                onChange={(e) => {
                  setAuthState({
                    ...authState,
                    name: e.target.value,
                  });
                }}
              />
            </div>
            <div className="mt-4">
              <Label htmlFor="email">Your email address</Label>
              <Input
                placeholder="Enter your Email"
                id="email"
                type="email"
                onChange={(e) => {
                  setAuthState({
                    ...authState,
                    email: e.target.value,
                  });
                }}
              />
            </div>
            <div className="mt-4">
              <Label htmlFor="password">Your password</Label>
              <Input
                placeholder="Enter your Password"
                id="password"
                type="password"
                onChange={(e) => {
                  setAuthState({
                    ...authState,
                    password: e.target.value,
                  });
                }}
              />
              <Label htmlFor="password">Re-Type Password</Label>
              <Input
                placeholder="Enter your Password Again"
                id="cpassword"
                type="password"
                onChange={(e) => {
                  setAuthState({
                    ...authState,
                    password_confirmation: e.target.value,
                  });
                }}
              />
            </div>
            <div className="mt-4">
              <Button className="w-full" onClick={submit}>
                Sign Up
              </Button>
            </div>
            <div className="mt-2 text-center">
              <strong className="font-bold">Already have an account ? </strong>
              <Link
                href="/login"
                className="text-orange-500 font-bold hover:text-orange-900"
              >
                login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
