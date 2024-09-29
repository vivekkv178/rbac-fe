import { ROLES } from "@/lib/constants";

export type User = {
  name: string;
  email: string;
  access_role: ROLES;
};
