import { useNavigate } from "react-router";
import participants from "../data/participants2025.json";
import useStore from "~/store/store";
import { Button } from "~/components/ui/button";

export function Welcome() {
  const navigate = useNavigate();
  const setParticipant = useStore((state) => state.setParticipant);

  const handleClick = (participant: Participant) => {
    setParticipant(participant);
    navigate(`/vote?country=${participant.country}`);
  };

  // idea for later: make each country a card with its flag in the background

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <h1 className="text-2xl font-bold text-center">
          Welcome to <span className="text-blue-500">VoteVision</span>
        </h1>
        <div className="flex-1 flex items-center gap-4">
          <Button
            variant="outline"
            onClick={() => navigate("/vote?country=Albania")}
          >
            Start Voting
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              navigate("/result");
            }}
          >
            Result
          </Button>
        </div>
        <p>The participants of 2025</p>
        <ul className="grid grid-cols-6 gap-4 text-center">
          {participants.participants.map((participant: Participant) => {
            return (
              <li
                key={participant.id}
                className="flex flex-col items-center gap-4"
              >
                <Button
                  variant="link"
                  size="lg"
                  onClick={() => handleClick(participant)}
                  className="text-lg font-bold text-blue-600"
                >
                  {participant.country}
                </Button>
                <p>{participant.song}</p>
                <p className="text-pink-400">{participant.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
