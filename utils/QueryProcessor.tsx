export default function QueryProcessor(query: string): string {
  if (query.includes("What is your name?")) {
    return (
      "Leo"
    );
  }

  return "";
}
