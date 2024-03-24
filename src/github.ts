import { executeCommand, executeCommandAndCapture } from "./cmd";
import { commitTypeToEmoji, CommitType, commitTypeToAlias } from "./constants";
import * as readline from "readline";

interface CommitProps {
  message: string;
  commitType: CommitType;
  emoji: string | null;
  ammend: boolean;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export class Helper {
  // for example removing __pycache__
  delete_all_folders(dir_name: string) {
    executeCommand(`find . -name '${dir_name}' -type d -exec rm -rf {} +`);
  }

  // for example removing .DS_Store
  delete_all_files(file_name: string) {
    executeCommand(`find . -name '${file_name}' -type f -delete`);
  }
}

export class Github {
  async push(): Promise<void> {
    try {
      await executeCommand(`git push origin HEAD`, "Pushing...");
    } catch {}
  }

  async force_push(): Promise<void> {
    try {
      await executeCommand(`git push origin HEAD --force`, "Pushing...");
    } catch {}
  }

  async pull(): Promise<void> {
    try {
      await executeCommand(`git pull origin HEAD`, "Pulling...");
    } catch {}
  }

  async push_origin(force: boolean = false) {
    force ? await this.force_push() : await this.push();
  }

  async commit(
    message: string,
    commitType: CommitType,
    emoji: string | null,
    ammend: boolean
  ) {
    if (!emoji) emoji = commitTypeToEmoji?.[commitType] ?? "";
    message = `"${commitTypeToAlias[commitType]} ${message} ${emoji}"`;
    const ammendParam = ammend ? "--amend" : "";

    await executeCommand(
      `git add . && git commit ${ammendParam} -m ${message}`,
      "Committing..."
    );
  }

  async commit_changes(props?: CommitProps) {
    try {
      this.commit(
        props?.message ?? "message",
        props?.commitType ?? CommitType.FEAT,
        props?.emoji ?? null,
        props?.ammend ?? false
      );
    } catch {}
  }

  async commit_and_push(props?: CommitProps) {
    try {
      this.commit(
        props?.message ?? "message",
        props?.commitType ?? CommitType.FEAT,
        props?.emoji ?? null,
        props?.ammend ?? false
      );

      this.push_origin(props?.ammend ?? false);
    } catch {}
  }

  async squash(num: Number = 1) {
    try {
      await executeCommand(`git reset --soft HEAD~${num}`, "Squashing...");
    } catch {}
  }

  async squash_and_push(num: Number = 1, props: CommitProps) {
    try {
      this.squash(num);
      this.commit_changes(props);
      this.push_origin(true);
    } catch {}
  }

  async reset(num: number = 1) {
    const commitsInBranch = parseInt(
      await executeCommandAndCapture(`git rev-list --count HEAD`)
    );
    if (num >= commitsInBranch) {
      console.log("Cannot reset");
      return;
    }
    console.log(`\nCommits in branch: ${commitsInBranch}\n`);

    const question = `This will delete the last ${num} commits from remote\nAre you absolutely sure about this? (y/n): `;
    rl.question(question, (answer: string) => {
      switch (answer.toLowerCase()) {
        case "y":
          executeCommand(`git reset --hard HEAD~${num}`, "Resetting...")
            .then(() => {
              this.force_push();
            })
            .catch(() => {});

          break;
        case "n":
          console.log("");
          break;
        default:
          console.log("");
          break;
      }
      rl.close();
    });
  }
}
