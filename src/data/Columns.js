import Swal from "sweetalert2";

const Columns = {
  Header: "Books",
  columns: [
    {
      id: "title",
      Header: "Title",
      accessor: "title",
      Cell: ({ row }) => (
        <p
          style={{ cursor: "pointer" }}
          onClick={() =>
            Swal.fire({
              title: row.values.title,
              text: row.values.subtitle,
              imageUrl: row.values.image,
              imageAlt: row.values.isbn13,
            })
          }
        >
          <u>{row.values.title}</u>
        </p>
      ),
    },
    {
      id: "subtitle",
      Header: "Subtitle",
      accessor: "subtitle",
      width: 30,
    },
    {
      id: "isbn",
      Header: "ISBN",
      accessor: "isbn13",
      disableSortBy: true,
    },
    {
      id: "price",
      Header: "Price",
      accessor: "price",
      align: "right",
    },
    {
      id: "url",
      Header: "URL",
      accessor: "url",
      Cell: ({ row }) => (
        <a href={row.values.url}>
          <u>{row.values.url}</u>
        </a>
      ),
      disableSortBy: true,
    },
    {
      id: "image",
      Header: "Image",
      accessor: "image",
    },
  ],
};

export default Columns;
