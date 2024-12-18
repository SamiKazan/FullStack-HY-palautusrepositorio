interface Stats {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
  }

export const calculateExercises = (days: Array<number>, target: number): Stats => {
    const periodLength = days.length;
    const trainingDays = days.filter(day => day > 0).length;
    const ratingDescription = 'Trying is all that matters!';
    const rating = 3;
    const success = true;
    const average = (days.reduce((sum, current) => sum + current, 0)/ periodLength);

    return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average
      };
};

if (require.main === module) {
  const dailyHours: Array<number> = process.argv.slice(3).map(Number);
  const target: number = Number(process.argv[2]);

  if (!(dailyHours) && !(target) && target > 0) {
    console.log(calculateExercises(dailyHours, target));
  } else {
    console.log('Please provide valid params');
  }
};