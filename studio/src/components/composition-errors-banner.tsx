import { BoltSlashIcon } from "@heroicons/react/24/outline";
import { CompositionErrorsDialog } from "@/components/composition-errors-dialog";
import React from "react";
import { cn } from "@/lib/utils";

export const CompositionErrorsBanner = ({
  errors,
  className,
}: {
  errors?: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "mb-3 flex items-center justify-between space-x-2.5 rounded-lg border border-destructive p-2 px-4 text-destructive dark:border-red-900",
        className,
      )}
    >
      <div className="flex items-center justify-between space-x-2.5">
        <div>
          <BoltSlashIcon className="h-5 w-5 text-destructive" />
        </div>
        <div className="text-xs">
          This version of the API schema does not include the latest from some
          of your subgraphs because the composition failed.
        </div>
      </div>
      {errors && <CompositionErrorsDialog errors={errors} />}
    </div>
  );
};
