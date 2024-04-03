import Link from "next/link";

export default async function Home() {
  const createRoom = async () => {};

  return (
    <div className="flex flex-col h-screen w-full items-center justify-center">
      <h1 className="text-4xl mb-5">Welcome to the Video Chat App</h1>
      <div className="flex items-center gap-x-5">
        <Link href="/room">Create Room</Link>
      </div>
    </div>
  );
}
