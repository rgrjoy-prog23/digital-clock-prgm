import { SlidingNumber } from "./shadcnui/sliding-number";

const ClockApp = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-1 font-mono text-9xl">
        <SlidingNumber
          value={10}
          padStart={true}
        />
        <span className="animate-pulse">:</span>

        <SlidingNumber
          value={10}
          padStart={true}
        />
        <span className="animate-pulse">:</span>

        <SlidingNumber
          value={10}
          padStart={true}
        />

        <span className="ms-2">{"am"}</span>
      </div>

      <div className="text-center text-6xl">{"Sat, 21 Feb 2026"}</div>
    </div>
  );
};

export default ClockApp;
