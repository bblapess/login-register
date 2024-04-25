"use client";
import React from "react";
import { Button, Card, TextInput } from "@tremor/react";
import { Lock, Mail } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex w-full flex-col items-center justify-center px-4">
      <Card className="flex w-full flex-col gap-4 rounded-md bg-white p-4 text-black shadow-sm shadow-white md:w-1/4">
        <h1 className="text-center text-2xl font-bold dark:text-white">
          Masuk
        </h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <TextInput
            icon={Mail}
            placeholder="Email"
            type="email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
          />
          <TextInput
            icon={Lock}
            placeholder="Password"
            type="password"
            value={formData.password}
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
            }}
          />
          <div className="flex justify-center">
            <Button variant="secondary">Masuk</Button>
          </div>
        </form>
      </Card>
      <h3 className="mt-4 text-center">
        Belum punya akun?{" "}
        <Link href="/register" className="text-blue-500">
          Daftar
        </Link>
      </h3>
    </div>
  );
};

export default Login;
