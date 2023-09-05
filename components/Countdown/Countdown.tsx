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
    <div className="flex flex-col items-center mt-5">
      <div className="text-2xl">
        Do wyborów do Sejmu i Senatu 15 października 2023 pozostało:
      </div>
      <div className="flex justify-between pt-20">
        <div className="text-2xl text-green-300 text-center">
          {daysLeft} dni
        </div>
      </div>
    </div>
  );
};
