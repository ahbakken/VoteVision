import { useNavigate, useSearchParams } from "react-router";
import useStore from "../store/store";
import { Button } from "~/components/ui/button";
import VoteForm from "./voteForm";
import { useEffect } from "react";
import { getParticipantByCountry, getParticipantById } from "./utils";

export function VotePage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const currentCountry = searchParams.get("country");

  const participant = useStore((state) => state.participant);
  const setParticipant = useStore((state) => state.setParticipant);

  useEffect(() => {
    if (!participant && currentCountry) {
      const foundParticipant = getParticipantByCountry(currentCountry);
      foundParticipant
        ? setParticipant(foundParticipant)
        : navigate("/vote?country=Albania");
    }
  }, [currentCountry, participant]);

  const handleNext = (next: boolean) => {
    const participantId = parseInt(participant?.id || "0", 10);

    const id = next ? participantId + 1 : participantId - 1;
    const nextParticipant = getParticipantById(id.toString());
    if (participant && nextParticipant) {
      navigate("/vote?country=" + nextParticipant?.country);
      setParticipant(nextParticipant);
    }
  };

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
        <div className="flex-1 flex items-center gap-4">
          <Button
            disabled={participant?.id === "1"}
            onClick={() => handleNext(false)}
          >
            Previous
          </Button>
          <Button
            disabled={participant?.id === "37"}
            onClick={() => handleNext(true)}
          >
            Next
          </Button>
        </div>
      </div>
    </main>
  );
}
