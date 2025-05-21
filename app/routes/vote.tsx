import type { Route } from "./+types/home";
import { VotePage } from "~/vote/vote";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "VoteVision" },
    { name: "description", content: "Voting Page" },
  ];
}

export default function Vote() {
  return <VotePage />;
}
