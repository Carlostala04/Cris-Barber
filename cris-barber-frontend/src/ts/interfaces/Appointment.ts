import type { appointmentStatus } from "../types/appointmentStatus";

export interface Appointment {
  id: number;
  id_user: number;
  id_service: number;
  id_employee: number;
  date: Date;
  status: appointmentStatus;
}
