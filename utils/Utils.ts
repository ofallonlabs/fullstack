function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function printError(origin: string, error: unknown): void {
    const timestamp = new Date().toISOString();
    const baseMessage = `[${timestamp}] Error<${origin}>:`;

    if (error instanceof Error) {
        console.error(baseMessage, error.message, '\nStack:', error.stack);
    } else {
        console.error(baseMessage, 'Unexpected error format', error);
    }
}

function printLog(origin: string, message: string): void {
    const timestamp = new Date().toISOString();
    const baseMessage = `[${timestamp}] Log<${origin}>:`;

    console.log(baseMessage, 'Unexpected error format', message);
}


export {
    classNames,
    printError,
    printLog
}