const app = require("express")();
const axios = require("axios");
const cheerio = require("cheerio");

const port = 4300;
app.post("login", (req, res) => {});

app.get("/", async (req, res) => {
  try {
    const { data } = await axios.get(
      "https://www.snapdeal.com/search?keyword=Mobile&santizedKeyword=&catId=&categoryId=0&suggested=false&vertical=&noOfResults=20&searchState=&clickSrc=go_header&lastKeyword=&prodCatId=&changeBackToAll=false&foundInAll=false&categoryIdSearched=&cityPageUrl=&categoryUrl=&url=&utmContent=&dealDetail=&sort=rlvncy"
    );
    const $ = await cheerio.load(data);
    const mobileData = [];
    $("product-title").each((_idx, el) => {
      const postTitle = $(el).text();
      mobileData.push(postTitle);
    });
    console.log("🚀 ~ file: index.js:17 ~ $ ~ postTitle", mobileData);

    // console.log($.text());
    // return res.send($);
  } catch (err) {
    console.log(err);
  }
});

app.listen(4300, () => {
  console.log(`${port} running on this port`);
});
