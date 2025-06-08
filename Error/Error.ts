export function isError(err: any) {
  if (err instanceof Error) {
    console.log("Error");
  }
}
