import { useMemo } from 'react';
import { isAfter, isBefore, parseISO } from 'date-fns';
import { Certificate } from '@/types/certificates'

/* interface Certificate {
  id: string;
  title: string;
  serialNumber: string;
  validAt: string;   // ISO Datum
  validTill: string; // ISO Datum
} */

const useIsCertificateValid = (certificate: Certificate): boolean => {
  const isValid = useMemo(() => {
    const today = new Date();
    const validFrom = parseISO(certificate.validFrom);
    const validUntil = parseISO(certificate.validTill);

    return isAfter(today, validFrom) && isBefore(today, validUntil);
  }, [certificate]);

  return isValid;
};

export default useIsCertificateValid;
