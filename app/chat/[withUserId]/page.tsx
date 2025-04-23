import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
import ChatDataWrapper from "./components/ChatDataWrapper";
import WithUserHeader from "./components/WithUserHeader";
nterface Params {
  withUserId: string;
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { withUserId } = await params;

  return (

    <div className="flex flex-col grow w-full">
      <Suspense fallback={<Skeleton className="h-[45px] w-full" />}>
        <WithUserHeader withUserId={params.withUserId} />
      </Suspense>
      <ChatDataWrapper toUserId={params.withUserId} />
    </div>
  );
}
