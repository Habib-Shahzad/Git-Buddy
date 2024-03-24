interface IParams {
  [key: string]: string;
}

export function parseCliParams(): { action: string; args: IParams } {
  const args: IParams = {};
  const rawArgs = process.argv.slice(3, process.argv.length);
  rawArgs.forEach((arg: string, index) => {
    if (arg.slice(0, 2).includes("--")) {
      const longArgKey = arg.slice(2, arg.length);
      const longArgValue = "-";
      args[longArgKey] = longArgValue;
    } else if (arg.slice(0, 1).includes("-")) {
      const longArgKey = arg.slice(1, arg.length);
      const longArgValue = rawArgs[index + 1];
      args[longArgKey] = longArgValue;
    }
  });

  const action = process.argv[2];

  return { action, args };
}
