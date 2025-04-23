import { Skeleton } from "@/components/ui/skeleton";
import { TypographyH2 } from "@/components/ui/typographyH2";
import { Suspense } from "react";
import UserCard from "./components/UserCard";
import type { PageProps } from "next";

interface Params {
  userId: string;
}

export default async function Page({ params }: PageProps<Params>) {
  return (
    <div className="flex flex-col grow w-full">
      <TypographyH2>View profile</TypographyH2>
      <Suspense fallback={<Skeleton className="w-full h-[290px] mt-4" />}>
        <UserCard viewingUserId={params.userId} />
      </Suspense>
    </div>
  );
}
