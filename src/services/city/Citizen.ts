import type { UserRole } from "./UserRole";

export type Citizen = {
  name: string;
  _minecraftHead: string;
  staffRoles?: string[];
  roles?: UserRole[];
  publicLink?: string;
}