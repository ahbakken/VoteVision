import { useNavigate, useSearchParams } from "react-router";
import useStore from "../store/store";
import { Button } from "~/components/ui/button";
import VoteForm from "./voteForm";
import { useEffect } from "react";
import { getParticipant } from "./utils";

export function VotePage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const currentCountry = searchParams.get("country");

  const participant = useStore((state) => state.participant);
  const setParticipant = useStore((state) => state.setParticipant);

  useEffect(() => {
    if (!participant && currentCountry) {
      const foundParticipant = getParticipant(currentCountry);
      foundParticipant && setParticipant(foundParticipant);
    }
  }, [currentCountry]);

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-8 min-h-0">
        <h1 className="text-5xl font-bold text-center">VOTING</h1>
        <h2 className="text-xl font-bold text-center">
          {participant?.country} - {participant?.name} - {participant?.song}
        </h2>
        <Button variant="outline" onClick={() => navigate("/")}>
          Home
        </Button>
        {participant && <VoteForm country={participant.country} />}
      </div>
    </main>
  );
}
