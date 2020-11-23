import axios from "axios";

const route = "https://api.itbook.store/1.0/search/";

class Books {
  async getBooks(name = "mongodb") {
    let allData;

    await axios
      .get(route + name)
      .then((data) => {
        allData = data;
        console.log(data);
      })
      .catch((err) => console.error(err));

    return allData;
  }
}

export default Books;
