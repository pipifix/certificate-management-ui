const d: Date = new Date();

export type GeneralCertificate = {
  id: string;
  email?: string;
  isActive?: boolean;
  owner_cn: string;
  owner_details?: string;
  authority_cn: string;
  authority_details: string;
  serialnumber_hex: string;
  message_warning?: string;
  message_error?: string;
  validFrom: string;   // ISO Datum
  validTill: string;   // ISO Datum
  createdAt?: string;   // ISO Datum
};

export type PublicCertificate = GeneralCertificate & {
signing_algorithm?: string;
application?: string;
alias: string;
isValid: boolean;
createdAt?: string;   // ISO Datum
createdFromPerson?:string; 
updatedAt?: string;   // ISO Datum
updatedFromPerson?:string;
updatedStatusAt?: string;   // ISO Datum
updatedStatusFromPerson?: string;
updatedStatus?: string; 
serialnumber_dec?: string;
source?:string;
tenants?: string[];
}

export type PGPKey = {
name: string;
email: string;
tenants?: string[];
key_id?: string;
subkey_ids?: string[];
validFrom: string;   // ISO Datum
validTill: string;   // ISO Datum
}

export type PrivateKey = GeneralCertificate & {
email: string;
tenants?: string[];
key_id?: string;
subkey_ids?: string[];
createdAt?: string;   // ISO Datum
createdFromPerson?:string; 
updatedAt?: string;   // ISO Datum
updatedFromPerson?:string;
source?:string;
application?: string;
}

export type ExhibitorCertificate = GeneralCertificate & {
oscp_url?: string;
crl_urlss?: string[];
serialnumber_dec?: string;
signing_algorithm?: string;
}

export type CertificateFile = GeneralCertificate & {
    function?:
     "key"
    | "key-encipherment"
    | "data-encipherment"
    | "ident"
    | "sign"
    | undefined;
  type?: "pem" | "p12" | "pkcs" | undefined;
}