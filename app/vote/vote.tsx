import { useNavigate, useSearchParams } from "react-router";
import useStore from "../store/store";
import { Button } from "~/components/ui/button";

export function VotePage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const currentCountry = searchParams.get("country");

  const participant = useStore((state) => state.participant);

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <h1 className="text-2xl font-bold text-center">VOTING</h1>
        <Button variant="outline" onClick={() => navigate("/")}>
          Home
        </Button>
        {participant && <p>{participant.song}</p>}
      </div>
    </main>
  );
}
