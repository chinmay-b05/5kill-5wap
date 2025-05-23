import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
import ChatDataWrapper from "./components/ChatDataWrapper";
import WithUserHeader from "./components/WithUserHeader";
interface Params {
  withUserId: string;
}

interface PageProps {
  params: Params;
}

export default function Page({ params }: PageProps) {
  const { withUserId } = params;

  return (

    <div className="flex flex-col grow w-full">
      <Suspense fallback={<Skeleton className="h-[45px] w-full" />}>
        <WithUserHeader withUserId={params.withUserId} />
      </Suspense>
      <ChatDataWrapper toUserId={params.withUserId} />
    </div>
  );
}
