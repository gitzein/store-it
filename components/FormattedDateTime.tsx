import { cn, formatDateTime } from "@/lib/utils";

type PropsType = {
  date: string;
  className?: string;
};

function FormattedDateTime({ date, className }: PropsType) {
  return (
    <p className={cn("body-1 text-light-200", className)}>
      {formatDateTime(date)}
    </p>
  );
}
export default FormattedDateTime;
