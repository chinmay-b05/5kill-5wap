import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
import ChatDataWrapper from "./components/ChatDataWrapper";
import WithUserHeader from "./components/WithUserHeader";
import { type NextPage } from "next";

type PageProps = {
  params: {
    withUserId: string;
  };
};

const Page = ({ params }: PageProps) => {
  return (
    <div className="flex flex-col grow w-full">
      <Suspense fallback={<Skeleton className="h-[45px] w-full" />}>
        <WithUserHeader withUserId={params.withUserId} />
      </Suspense>
      <ChatDataWrapper toUserId={params.withUserId} />
    </div>
  );
};

export default Page;

