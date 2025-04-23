import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
import ChatDataWrapper from "./components/ChatDataWrapper";
import WithUserHeader from "./components/WithUserHeader";
import { getUser } from "@/lib/user"; // ✅ Ensure this is a valid import

type PageProps = {
  params: {
    withUserId: string;
  };
};

export default async function Page({ params }: PageProps) {
  const userId = params.withUserId;

  const user = await getUser(userId); // ✅ Must not return a Promise inside params
  return (
    <div className="flex flex-col grow w-full">
      <Suspense fallback={<Skeleton className="h-[45px] w-full" />}>
        <WithUserHeader withUserId={params.withUserId} />
      </Suspense>
      <ChatDataWrapper toUserId={params.withUserId} />
    </div>
  );
}
