"use client";
import { Button, Card, TextInput } from "@tremor/react";
import React from "react";
import { useState } from "react";
import {
  GraduationCap,
  Lock,
  Mail,
  MapPin,
  Phone,
  UserRound,
  Users2,
} from "lucide-react";
import Link from "next/link";

const Register = () => {
  const [counter, setCounter] = useState<number>(0);
  const [register, setRegister] = useState({
    name: "",
    phoneNumber: "",
    address: "",
    school: "",
    parentName: "",
    parentPhoneNumber: "",
    parentEmail: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(register);
  };

  return (
    <div className="flex w-full flex-col items-center justify-center px-4">
      <Card className="flex w-full flex-col gap-4 rounded-md bg-white p-4 text-black shadow-sm shadow-white md:w-1/2">
        <h1 className="text-center text-2xl font-bold dark:text-white">
          Daftar Akun
        </h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {counter === 0 && (
            <>
              <div className="flex flex-row gap-4">
                <TextInput
                  icon={UserRound}
                  placeholder="Nama Lengkap"
                  type="text"
                  name="name"
                  value={register.name}
                  onChange={(e) => {
                    setRegister({ ...register, name: e.target.value });
                  }}
                />
                <TextInput
                  icon={Phone}
                  placeholder="Nomor HP Aktif"
                  type="text"
                  name="phoneNumber"
                  value={register.phoneNumber}
                  onChange={(e) => {
                    setRegister({ ...register, phoneNumber: e.target.value });
                  }}
                />
              </div>
              <div className="flex flex-row gap-4">
                <TextInput
                  icon={MapPin}
                  placeholder="Alamat"
                  type="text"
                  name="address"
                  value={register.address}
                  onChange={(e) => {
                    setRegister({ ...register, address: e.target.value });
                  }}
                />
                <TextInput
                  icon={GraduationCap}
                  placeholder="Sekolah"
                  type="text"
                  name="school"
                  value={register.school}
                  onChange={(e) => {
                    setRegister({ ...register, school: e.target.value });
                  }}
                />
              </div>
              <div className="flex justify-end">
                <Button
                  variant="secondary"
                  type="button"
                  onClick={() => setCounter(counter + 1)}
                >
                  Selanjutnya
                </Button>
              </div>
            </>
          )}
          {counter === 1 && (
            <>
              <div className="flex flex-row gap-4">
                <TextInput
                  icon={Users2}
                  placeholder="Nama Orang Tua"
                  type="text"
                  name="parentName"
                  value={register.parentName}
                  onChange={(e) => {
                    setRegister({ ...register, parentName: e.target.value });
                  }}
                />
                <TextInput
                  icon={Phone}
                  placeholder="Nomor HP Orang Tua"
                  type="text"
                  name="parentPhoneNumber"
                  value={register.parentPhoneNumber}
                  onChange={(e) => {
                    setRegister({
                      ...register,
                      parentPhoneNumber: e.target.value,
                    });
                  }}
                />
              </div>
              <TextInput
                icon={Mail}
                placeholder="Email Orang Tua"
                type="email"
                name="parentEmail"
                value={register.parentEmail}
                onChange={(e) => {
                  setRegister({ ...register, parentEmail: e.target.value });
                }}
              />
              <div className="flex flex-row justify-end gap-4">
                <Button
                  variant="secondary"
                  type="button"
                  onClick={() => setCounter(counter - 1)}
                >
                  Kembali
                </Button>
                <Button
                  variant="secondary"
                  type="button"
                  onClick={() => setCounter(counter + 1)}
                >
                  Selanjutnya
                </Button>
              </div>
            </>
          )}
          {counter === 2 && (
            <>
              <TextInput
                icon={Mail}
                placeholder="Email"
                type="email"
                name="email"
                value={register.email}
                onChange={(e) => {
                  setRegister({ ...register, email: e.target.value });
                }}
              />
              <div className="flex flex-row gap-4">
                <TextInput
                  icon={Lock}
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={register.password}
                  onChange={(e) => {
                    setRegister({ ...register, password: e.target.value });
                  }}
                />
                <TextInput
                  icon={Lock}
                  placeholder="Konfirmasi Password"
                  type="password"
                />
              </div>
              <div className="flex justify-end gap-4">
                <Button
                  variant="secondary"
                  type="button"
                  onClick={() => setCounter(counter - 1)}
                >
                  Kembali
                </Button>
                <Button variant="primary" type="submit">
                  Daftar
                </Button>
              </div>
            </>
          )}
        </form>
      </Card>
      <h3 className="mt-4 text-center">
        Sudah punya akun?{" "}
        <Link href="/login" className="text-blue-500">
          Masuk
        </Link>
      </h3>
    </div>
  );
};

export default Register;
