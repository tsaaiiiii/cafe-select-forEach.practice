let data = [
  {
    name: "DAU.OE兜特歐宜",
    district: "鼓山區",
    address: "青海路599號",

    feature: {
      supportElect: "有插座",
      location: "",
    },
    price: "$100-200NT",
  },
  {
    name: "路人咖啡3號店",
    district: "三民區",
    address: "天津街253號",

    feature: {
      supportElect: "",
      location: "近捷運站",
    },
    price: "$200-300NT",
  },
  {
    name: "銀座聚場 咖啡民宿",
    district: "鹽埕區",
    address: "五福四路260巷8號",

    feature: {
      supportElect: "有插座",
      location: "近捷運站",
    },
    price: "$300-400NT",
  },
  {
    name: "潁川製所",
    district: "鳳山區",
    address: "光明路116號",

    feature: {
      supportElect: "",
      location: "近捷運站",
    },
    price: "$200-300NT",
  },
  {
    name: "愛開玩笑的人",
    district: "鼓山區",
    address: "裕誠路1298號",

    feature: {
      supportElect: "有插座",
      location: "",
    },
    price: "$100-200NT",
  },
  {
    name: "Café Strada 步道咖啡",
    district: "苓雅區",
    address: "中正二路67號",

    feature: {
      supportElect: "有插座",
      location: "近捷運站",
    },
    price: "$100-200NT",
  },
];

const cafe = document.querySelector(".list");
let str = "";
function init() {
  data.forEach(function (item, index) {
    console.log(
      (str += `<li>☕${item.name}，位於${item.district}${item.address}</li>`)
    );
  });
  console.log(str);
  cafe.innerHTML = str;
}
init();

//綁監聽 feature
const feature = document.querySelector(".feature");
feature.addEventListener("click", function (e) {
  if (e.target.value == undefined) {
    console.log("點到外面了");
    return; //中斷
  }
  let str = "";
  data.forEach(function (item, index) {
    if (e.target.value == "全部") {
      str += `<li>☕${item.name}，位於${item.district}${item.address}，價格為${item.price}</li>`;
    } else if (item.feature.supportElect == e.target.value) {
      str += `<li>☕${item.name}，位於${item.district}，特色為${item.feature.supportElect}</li>`;
    } else if (item.feature.location == e.target.value) {
      str += `<li>☕${item.name}，位於${item.district}，特色為${item.feature.location}</li>`;
    }
  });
  cafe.innerHTML = str;
});

//綁監聽 price
const price = document.querySelector(".price");
price.addEventListener("click", function (e) {
  // console.log(e.target.value);
  if (e.target.value == undefined) {
    console.log("你按到外面囉");
    return;
  }
  //再來要抓取forEach data的資料，才可以與監聽的項目寫判斷式
  let str = ""; //空字串
  data.forEach(function (item, index) {
    if (e.target.value == item.price) {
      str += `<li>☕${item.name}，位於${item.address}，價格大約為${item.price}</li>`;
    }
  });
  cafe.innerHTML = str;
});

//資料新增
const cafeName = document.querySelector(".cafeName"); //input咖啡廳名稱
const cafeDistrict = document.querySelector(".cafeDistrict"); //input xx區
const cafeAddress = document.querySelector(".cafeAddress"); //select 咖啡廳地址
const cafeFeature = document.querySelector(".cafeFeature"); //select 咖啡廳有插座
const cafeFeatureLocation = document.querySelector(".cafeFeatureLocation"); // select 咖啡廳近捷運站
const btn = document.querySelector(".btn"); //傳送
const cafePrice = document.querySelector(".cafePrice"); //option 咖啡廳價格

//btn做監聽
btn.addEventListener("click", function (e) {
  console.log(cafeName.value);
  console.log(cafeDistrict.value);
  console.log(cafeAddress.value);
  console.log(cafeFeature.value);
  console.log(cafeFeatureLocation.value);
  console.log(cafePrice.value);

  //用一個空物件，將資料push到 data裡面

  let newCafe = {
    feature: {},
  };
  newCafe.name = cafeName.value;
  newCafe.district = cafeDistrict.value;
  newCafe.address = cafeAddress.value;
  newCafe.feature.supportElect = cafeFeature.value;
  newCafe.feature.location = cafeFeatureLocation.value;
  newCafe.price = cafePrice.value;

  data.push(newCafe);
  //要讓新增的咖啡廳顯示在頁面上
  init();
  cafeName.value = "";
  cafeDistrict.value = "前金區";
  cafeAddress.value = "";
  cafePrice.value = "$100-200NT";
  cafeFeature.value = "有插座";
  cafeFeatureLocation.value = "近捷運站";
});
