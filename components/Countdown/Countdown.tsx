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
    <div className="flex flex-col items-center mt-8">
      <div className="text-2xl  text-center">
        Do wyborów pozostało&nbsp;
        <span className="font-bold text-red-600">
          {daysLeft}
        </span>
        &nbsp;dni.
      </div>
    </div>
  );
};
