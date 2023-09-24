"use client";

export const Countdown = () => {
  const daysUntilOctober15 = () => {
    const currentDate = new Date();
    const targetDate = new Date(2023, 9, 15); // 15 October 2023
    const timeDifference = targetDate.getTime() - currentDate.getTime();
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysRemaining;
  };

  const daysLeft = daysUntilOctober15();

  return (
    <div role="alert" className="rounded border-s-4 mt-4 border-red-500 bg-red-50 p-4">
      <div className="flex items-center gap-2 text-red-800">
        <strong className="block font-medium"> Do wyborów i referendum zostało </strong>
      </div>

      <p className="mt-2 text-red-700 text-2xl font-bold">
        {daysLeft} {daysLeft === 1 ? "dzień" : "dni"}
      </p>
    </div>
  );
};
