"use client";

import { useState, useEffect } from "react";
import Papa from "papaparse";
import toast from "react-hot-toast";
import moment from "moment";
import { fetchReport } from "./services/reportService";
import { Table, OverlayLoading, ReactCalendar } from "../components";

const columns = [
  {
    name: "Date",
    selector: (row: any) => (row?.Date ? row.Date : "-"),
    sortable: true,
  },
  {
    name: "Pub ID",
    selector: (row: any) => (row?.PubID ? row.PubID : "-"),
    sortable: true,
  },
  {
    name: "Channel",
    selector: (row: any) => (row?.Channel ? row.Channel : "-"),
    sortable: true,
  },
  {
    name: "Total Searches",
    selector: (row: any) =>
      row?.["Total Searches"] ? row?.["Total Searches"] : "-",
    sortable: true,
  },
  {
    name: "Monetized Searches",
    selector: (row: any) =>
      row?.["Monetized Searches"] ? row?.["Monetized Searches"] : "-",
    sortable: true,
  },
  {
    name: "Clicks",
    selector: (row: any) => (row?.Clicks ? row.Clicks : "-"),
    sortable: true,
  },
  {
    name: "Amount",
    selector: (row: any) => `${parseFloat(row.Amount) * 0.8}`,
    sortable: true,
  },
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [report, setReport] = useState([]);
  const [date, setDate] = useState(new Date());

  const handleSearch = async () => {
    setIsLoading(true);
    try {
      const res = await fetchReport({
        date: moment(date).format("YYYY-MM-DD"),
      });
      setReport(res);

      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  const downloadCSV = () => {
    if (report.length === 0) {
      toast.error("Data not Found.");
      return;
    }
    var csv = Papa.unparse(report);
    var fileName = `report_${moment(date).format("YYYY-MM-DD")}` || "report";

    var csvData = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    var csvURL = null;

    if ((window.navigator as any)?.msSaveBlob) {
      csvURL = (window.navigator as any).msSaveBlob(csvData, fileName);
    } else {
      csvURL = window.URL.createObjectURL(csvData);
    }

    var tempLink = document.createElement("a");
    tempLink.href = csvURL;
    tempLink.setAttribute("download", fileName);
    tempLink.click();
  };

  console.log("report...", report);

  return (
    <main className="w-full flex flex-col">
      {isLoading && <OverlayLoading />}
      <div className="w-full margins">
        <div className="w-full flex flex-col">
          <div className="w-full flex items-center mb-5">
            <div className="text-3xl font-semibold tet-gray-900">
              {report?.length > 0
                ? `${report?.length} Results Found`
                : `Search Data`}
            </div>
          </div>
          <div className="w-full flex items-center gap-16 mb-6">
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:flex items-center gap-3">
              <div className="w-full flex flex-col gap-1">
                <div className="min-w-fit text-sm font-medium text-gray-900">
                  Date:
                </div>
                <div className="w-full">
                  <ReactCalendar
                    date={date}
                    setDate={(date: any) => setDate(date)}
                  />
                </div>
              </div>
              <div className="w-full flex flex-col gap-1">
                <div className="min-w-fit text-sm font-medium text-gray-900 opacity-0 hidden md:block">
                  Search
                </div>
                <button
                  className="buttonPrimary h-[42px]"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
              <div className="w-full flex flex-col gap-1">
                <div className="min-w-fit text-sm font-medium text-gray-900 opacity-0 hidden md:block">
                  Download CSV
                </div>
                <button
                  className="buttonPrimary h-[42px]"
                  onClick={downloadCSV}
                >
                  Download CSV
                </button>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col">
            {report?.length > 0 ? (
              <Table
                columns={columns}
                data={report?.length ? report : []}
                pagination={true}
                paginationPerPage={25}
              />
            ) : (
              <div className="w-full flex items-center justify-center text-center py-12 px-6">
                <div className="text-base text-gray-700">Date not found.</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
