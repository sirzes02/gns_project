import axios from "axios";

const route = "https://api.itbook.store/1.0/search/";

class Books {
  async getBooks(name = "mongodb") {
    let allData;

    console.log(name);

    await axios
      .get(route + name)
      .then((data) => (allData = data))
      .catch((err) => console.error(err));

    return allData;
  }
}

export default Books;
