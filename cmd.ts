import { exec } from "child_process";
import chalk from "chalk";
import ora from "ora";

export function executeCommand(
  command: string,
  loader_message: string = "Executing..."
): Promise<string> {
  const spinner = ora(`${loader_message}\n`).start();

  const clearLastLine = () => {
    process.stdout.moveCursor(0, -1); // up one line
    process.stdout.clearLine(1);
  };

  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      spinner.stop();

      if (error) {
        console.error(chalk.red(error.message.trim()));
        reject(error.message.trim());
      }
      if (stdout.trim().length !== 0) {
        console.log(chalk.greenBright(stdout));
      }
      if (stderr.trim().length !== 0) {
        console.log(chalk.cyanBright(stderr));
        reject(stderr.trim());
      }
      resolve(stdout.trim());
    });
  });
}

export async function executeCommandAndCapture(
  command: string
): Promise<string> {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error.message.trim());
      }
      if (stderr.trim().length !== 0) {
        reject(stderr.trim());
      }
      resolve(stdout.trim());
    });
  });
}
