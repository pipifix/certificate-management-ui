import { IconType } from "recharts/types/component/DefaultLegendContent";
import { unknown } from "zod";

export type Company = {
  id: string;
  Title: string;
  customerID?: string;
  BillwerkID?: string;
  cloudStorageID: string;
  adressId: number[];
  domains: string[];
  domainsVerified?: boolean;
  contactPersonId?: number[];
  orgaAdminId?: number[];
  companyRegistrationTitle?: string;
  companyRegistrationLOcation?: string;
};

export type companycontact = {
  id: number;
  mobile?: string;
  phone?: string;
  fax?: string;
  email: string;
  website?: string;
  additionalEmail?: string;
  additionalContactPersonID?: string;
};

export type companygroup = {
  groupID: number;
  label: string | unknown;
  description?: string;
  icon?: IconType;
  children?: number[];
  groupAdminId?: string[];
};
