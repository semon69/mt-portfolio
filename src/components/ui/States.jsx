import { FiAlertCircle, FiInbox } from "react-icons/fi";

export const ErrorState = ({ message = "Couldn't load this content." }) => (
  <div
    role="alert"
    className="flex flex-col items-center gap-3 rounded-xl border border-line bg-surface px-6 py-14 text-center"
  >
    <FiAlertCircle className="text-2xl text-accent" aria-hidden="true" />
    <p className="font-medium text-ink">{message}</p>
    <p className="text-sm text-muted">
      Please check your connection and refresh the page.
    </p>
  </div>
);

export const EmptyState = ({ message = "Nothing here yet." }) => (
  <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-line px-6 py-14 text-center">
    <FiInbox className="text-2xl text-faint" aria-hidden="true" />
    <p className="text-muted">{message}</p>
  </div>
);
