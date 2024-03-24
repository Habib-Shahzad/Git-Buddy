export enum CommitType {
  FEAT = "FEAT",
  FIX = "FIX",
  DOCS = "DOCS",
  STYLE = "STYLE",
  REFACTOR = "REFACTOR",
  PERF = "PERF",
  TEST = "TEST",
  BUILD = "BUILD",
  CI = "CI",
  CHORE = "CHORE",
  REVERT = "REVERT",
}

export const commitTypeToLabel: Record<CommitType, string> = {
  [CommitType.FEAT]: "feat",
  [CommitType.FIX]: "fix",
  [CommitType.DOCS]: "docs",
  [CommitType.STYLE]: "style",
  [CommitType.REFACTOR]: "refactor",
  [CommitType.PERF]: "perf",
  [CommitType.TEST]: "test",
  [CommitType.BUILD]: "build",
  [CommitType.CI]: "ci",
  [CommitType.CHORE]: "chore",
  [CommitType.REVERT]: "revert",
};

export const labelToCommitType: Record<string, CommitType> = {
  feat: CommitType.FEAT,
  fix: CommitType.FIX,
  docs: CommitType.DOCS,
  style: CommitType.STYLE,
  refactor: CommitType.REFACTOR,
  perf: CommitType.PERF,
  test: CommitType.TEST,
  build: CommitType.BUILD,
  ci: CommitType.CI,
  chore: CommitType.CHORE,
  revert: CommitType.REVERT,
};

export const commitTypeToEmoji: Record<CommitType, string> = {
  [CommitType.FEAT]: ":sparkles:",
  [CommitType.FIX]: ":bug:",
  [CommitType.DOCS]: ":books:",
  [CommitType.STYLE]: ":gem:",
  [CommitType.REFACTOR]: ":package:",
  [CommitType.PERF]: ":rocket:",
  [CommitType.TEST]: ":rotating_light:",
  [CommitType.BUILD]: ":wrench:",
  [CommitType.CI]: ":gear:",
  [CommitType.CHORE]: ":recycle:",
  [CommitType.REVERT]: ":wastebasket:",
};

export const commitTypeToAlias: Record<CommitType, string> = {
  [CommitType.FEAT]: "[FEAT]",
  [CommitType.FIX]: "[FIX]",
  [CommitType.DOCS]: "[DOCS]",
  [CommitType.STYLE]: "[STYLE]",
  [CommitType.REFACTOR]: "[REFACTOR]",
  [CommitType.PERF]: "[PERF]",
  [CommitType.TEST]: "[TEST]",
  [CommitType.BUILD]: "[BUILD]",
  [CommitType.CI]: "[CI]",
  [CommitType.CHORE]: "[CHORE]",
  [CommitType.REVERT]: "[REVERT]",
};
