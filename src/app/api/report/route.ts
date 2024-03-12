import moment from "moment";
import Papa from "papaparse";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const start_date = moment(searchParams.get("start_date"));
  const end_date = moment(searchParams.get("end_date"));

  let combinedData = [];

  // Loop through the dates between start_date and end_date
  for (
    let date = moment(start_date);
    date.isSameOrBefore(end_date);
    date.add(1, "days")
  ) {
    const formattedDate = date.format("YYYY-MM-DD");

    const res: any = await fetch(
      `https://api.maniasearch.com?pid=2018&key=kxXyCyWIgKRh71XxdhaDsoqwU0kdMbvk&date=${formattedDate}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (res.ok) {
      if (res.headers.get("content-type").includes("application/json")) {
        const data = await res.json();
        combinedData.push(data);
      } else if (res.headers.get("content-type").includes("text/csv")) {
        const text = await res.text();
        const parsedData = Papa.parse(text, { header: true });

        if (parsedData.errors.length > 0) {
          console.error("CSV parsing error:", parsedData.errors);
          // Handle CSV parsing error only at the backend
          continue; // Skip to the next iteration of the loop
        }

        // Push jsonData into combinedData only if parsedData.data has a length
        if (parsedData.data && parsedData.data.length > 0) {
          const jsonData = parsedData.data;
          combinedData.push(jsonData);
        }
      } else {
        console.error(
          "Unsupported content type:",
          res.headers.get("content-type")
        );
        return new Response(null, {
          status: 415,
          statusText: "Unsupported Media Type",
        });
      }
    } else {
      const text = await res.text();
      console.error("Non-JSON response:", text);
      return new Response(text, { status: res.status });
    }
  }
  combinedData = [].concat(...combinedData);
  return Response.json({ data: combinedData });
}
