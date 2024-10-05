export class CreateTrainingSessionDto {
  trainerId: number;
  day:
    | 'Monday'
    | 'Tuesday'
    | 'Wednesday'
    | 'Thursday'
    | 'Friday'
    | 'Saturday'
    | 'Sunday';
  hour: string; // Format: 'HH:MM:SS'
  spaces: number;
  duration: string; // Format: 'HH:MM:SS'
}
