import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="bg-slate-100 border rounded-xl ml-2">
      <h1 className="text-4xl text-center mt-10">Welcome To Dashboard Page</h1>
      {session?.user ? (
        <div className="flex justify-center items-center flex-col mt-10 mx-auto pb-5">
          <Image
            width={100}
            height={100}
            className="rounded-full"
            src={session?.user?.image || "/default-avatar.png"}
            alt="user image"
          />
          <h2 className="text-xl font-semibold">{session?.user?.name}</h2>
          <h2 className="text-xl font-semibold">{session?.user?.email}</h2>
        </div>
      ) : (
        <div>Not Data found</div>
      )}
    </div>
  );
};

export default DashboardPage;
