export function toQueryString(obj: Record<string, any>) {
  const queries = [];
  for (let key in obj) {
    queries.push(`${key}=${obj[key] ?? ""}`);
  }
  return queries.join("&");
}
