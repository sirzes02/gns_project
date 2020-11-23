import FileSaver from "file-saver";

let csvResult;

class Json2Csv {
  constructor(data) {
    const items = data;

    const replacer = (_, value) => (value === null ? "" : value);
    const header = Object.keys(items[0]);
    let csv = items.map((row) =>
      header
        .map((fieldName) => JSON.stringify(row[fieldName], replacer))
        .join(",")
    );
    csv.unshift(header.join(","));
    csvResult = csv.join("\r\n");
  }

  download() {
    const csvData = new Blob([csvResult], { type: "text/csv;charset=utf-8;" });

    FileSaver.saveAs(csvData, "data.csv");
  }
}

export default Json2Csv;
