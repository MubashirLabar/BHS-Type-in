export async function fetchReport(params?: any) {
  const res = await fetch(`/api/report?date=${params.date}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return data?.data;
}
