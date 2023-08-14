import Image from "next/image";

const AuthNav = () => {
  return (
    <div className="flex absolute top-2 left-2 lg:top-5 lg:left-10 items-center">
      <Image src="/images/logo.png" width={100} height={100} alt="logo" />
      <h1 className="text-2xl font-bold">DevUI</h1>
    </div>
  );
};

export default AuthNav;
