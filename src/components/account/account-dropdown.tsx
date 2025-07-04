import type { MouseEvent } from "react";

import type { Repository } from "../../utils/pds";
import {
  DeleteAccountButton,
  ResetPasswordButton,
  TakedownAccountButton,
  UntakedownAccountButton,
} from "./account-buttons";

type AccountDropdownProps = {
  repo: Repository;
};

export function AccountDropdown({ repo }: AccountDropdownProps) {
  const preventClickPropagation = (e: MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <div className="dropdown dropdown-end" onClick={preventClickPropagation}>
      <div
        tabIndex={0}
        role="button"
        className="btn btn-circle btn-ghost size-8"
        data-testid="account-dropdown-button"
      >
        <span className="i-lucide-more-horizontal size-6"></span>
      </div>
      <ul
        tabIndex={0}
        className="menu dropdown-content bg-base-100 rounded-box w-fit shadow-md"
        onClick={preventClickPropagation}
      >
        <li>
          <ResetPasswordButton did={repo.repoInfo.did} />
        </li>
        {repo.repoInfo.status === "takendown" ? (
          <li>
            <UntakedownAccountButton did={repo.repoInfo.did} />
          </li>
        ) : (
          <li>
            <TakedownAccountButton did={repo.repoInfo.did} />
          </li>
        )}
        <li>
          <DeleteAccountButton
            did={repo.repoInfo.did}
            handle={repo.accountInfo.handle}
          />
        </li>
      </ul>
    </div>
  );
}
