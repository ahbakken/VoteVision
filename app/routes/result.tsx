import type { Route } from "./+types/home";
import ResultPage from "~/result/result";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "VoteVision" },
    { name: "description", content: "Result Page" },
  ];
}

export default function Result() {
  return <ResultPage />;
}
