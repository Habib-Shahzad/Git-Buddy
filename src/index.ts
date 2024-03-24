#!/usr/bin/env node

import { labelToCommitType } from "./constants";
import { Github } from "./github";
import { parseCliParams } from "./params-parser";

async function GitHelper() {
  const github = new Github();

  const { action, args } = parseCliParams();

  if (action == "push") {
    const message = args["m"];
    const emoji = args["e"] ?? null;
    const commitType = args["t"];
    const ammend = args["ammend"] == "-";

    if (!message) {
      console.log("No commit message provided");
      return;
    }
    await github.commit_and_push({
      message: message,
      commitType: labelToCommitType[commitType] ?? null,
      emoji: emoji,
      ammend: ammend,
    });
  } else if (action == "pull") {
    await github.pull();
  } else if (action == "push_origin") {
    const force = args["f"] == "-";
    await github.push_origin(force);
  } else if (action == "commit") {
    const message = args["m"];
    const emoji = args["e"] ?? null;
    const commitType = args["t"];
    const ammend = args["ammend"] == "-";

    if (!message) {
      console.log("No commit message provided");
      return;
    }
    await github.commit_changes({
      message: message,
      commitType: labelToCommitType[commitType] ?? null,
      emoji: emoji,
      ammend: ammend,
    });
  } else if (action == "squash") {
    const num = args["n"] ?? 1;

    const message = args["m"];
    const emoji = args["e"] ?? null;
    const commitType = args["t"];
    const ammend = args["ammend"] == "-";

    if (!message) {
      console.log("No commit message provided");
      return;
    }

    await github.squash_and_push(parseInt(num), {
      message: message,
      commitType: labelToCommitType[commitType] ?? null,
      emoji: emoji,
      ammend: ammend,
    });
  } else if (action == "reset") {
    const num = args["n"] ?? 1;
    await github.reset(parseInt(num));
  } else {
    console.log("Invalid Args");
  }
}
GitHelper();

module.exports = GitHelper;
