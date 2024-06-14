"use client";
import { useRouter } from "next/router";
import { Demo1 } from "../../../components/Example1";
import { Demo2 } from "../../../components/Example2";
import { Understandable } from "../../../components/Example4";
import { Example5 } from "../../../components/Example5";
import { Example6 } from "../../../components/Example6";
import { Example7 } from "../../../components/Example7";

import { Suspense, useMemo } from "react";
import { Robust } from "@/components/Robust";

const examples = {
  Demo1: <Demo1 />,
  Demo2: <Demo2 />,
  Demo3: <Understandable />,
  Demo4: <Robust />,
  Demo5: <Example5 />,
  Demo6: <Example6 />,
  Demo7: <Example7 />,
};

const Page = ({ params }: { params: { id: string } }) => {
  const exampleContent = useMemo(() => {
    return (
      examples[params.id as keyof typeof examples] || (
        <div>Example not found</div>
      )
    );
  }, [params.id]);

  return <Suspense fallback={<div>Loading...</div>}>{exampleContent}</Suspense>;
};

export default Page;
