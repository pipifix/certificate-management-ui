import { CheckCircle, OctagonAlert,TriangleAlert } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PublicCertificate } from "@/types/certificates";
import useIsCertificateValid from "@/hooks/use-is-certificate-valid";

interface StatusIconProps {
  certificate: PublicCertificate;
}

export function StatusIcon({ certificate }: StatusIconProps) {
  const isValid = useIsCertificateValid(certificate);

  if (certificate.message_error) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <OctagonAlert className="h-4 w-4 text-destructive" />
          </TooltipTrigger>
          <TooltipContent>{certificate.message_error}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  if (certificate.message_warning || !isValid) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <TriangleAlert className="h-4 w-4 text-orange-400" />
          </TooltipTrigger>
          <TooltipContent>
            {certificate.message_warning || "Certificate has expired"}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return <CheckCircle className="h-4 w-4 text-green-500" />;
}