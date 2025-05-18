import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "VoteVision" },
    { name: "description", content: "Welcome to VoteVision!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
