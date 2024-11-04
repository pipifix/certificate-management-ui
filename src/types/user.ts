const d: Date = new Date()
//var date = new Date(jsonDate);
//const d: Date = new Date().toString();

export type User = {
  id: number | undefined
  uuid: string | undefined
  firstName: string
  familyName: string
  email: string
  adress_ID: string | undefined
  phone?: string | undefined
  mobile?: string | undefined
  principalname?: string | undefined
  accountType?: ('Basiskonto' | 'Businesskonto') | undefined
  apps: string[] | undefined
  roles: string[] | undefined
  rights: string[] | undefined
  isLoggedIn?: boolean | undefined

  organization_Id?: string | undefined
  isAdmin?: boolean | undefined
  isOrgaAdmin?: boolean | undefined
  isOrgaAdmin_group_ID?: number[] | undefined
  companyEmail?: string[] | undefined
  taskId?: number[] | undefined
  identityLevel: number | undefined
  identities?: number[] | undefined
  certificates?: number | undefined
  guestOfCompany?: number[] | undefined
  createdAt?: typeof Date
  updatedAt?: typeof Date
}

export type StaffUser = User & {
  organization_Id?: string | undefined
  isAdmin?: boolean | undefined
  isOrgaAdmin?: boolean | undefined
  isOrgaAdmin_group_ID?: number[] | undefined
  companyEmail?: string[] | undefined
}

export type GuestUser = User & {
  GuestOfCompany: number[] | undefined
  groupId?: number[] | undefined
}

export type Contact = {
  id: number
  status?: ('connected' | 'pending' | 'rejected' | 'disolved') | undefined
  connectedSince?: Date | undefined
}

export type PrivateContact = Contact & {
  id: string
  ContactPersonId: string
  category?: Category | undefined
  isFavorite?: boolean
}

export type CompanyContact = Contact & {
  id: string
  EmployeeId: string
  isFavorite?: boolean
}

type Category = Partial<{
  id: number
  name: string
}>

type Tag = Partial<{
  id: string
  name: string
}>

export type Task = {
  taskId: string
  Title: string
  helpdeskUrl?: string | undefined
  isDone?: boolean | undefined
  priority?: string[] | undefined
  catgory?: Category | undefined
}

export type Identy = {
  identityId: string
  Title: string
  description?: string
  provider?: string
  isActive?: boolean
  createdAT: Date
}
