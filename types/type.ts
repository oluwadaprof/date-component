export type TSchedule = {
  id: string; // Unique identifier for each schedule
  start: string;
  end: string;
};

export type TAvailability = {
  createdAt: string;
  schedule: TSchedule[]; // Change to an array of TSchedule
  id: string;
  days: string;
  timeZone: string;
  isDefault: boolean;
};