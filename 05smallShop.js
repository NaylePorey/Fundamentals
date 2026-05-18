function smallShop(product, town, quantity) {
  let price = 0;

  if (town == "Sofia") {
    if (product == "coffee") {
      price = quantity * 0.5;
    } else if (product == "water") {
      price = quantity * 0.8;
    } else if (product == "beer") {
      price = quantity * 1.20;
    } else if (product == "sweets") {
      price = quantity * 1.45;
    } else if (product == "peanuts") {
      price = quantity * 1.6;
    }
  } else if (town == "Plovdiv") {
    if (product == "coffee") {
      price = quantity * 0.4;
    } else if (product == "water") {
      price = quantity * 0.7;
    } else if (product == "beer") {
      price = quantity * 1.15;
    } else if (product == "sweets") {
      price = quantity * 1.3;
    } else if (product == "peanuts") {
      price = quantity * 1.5;
    }
  } else if (town == "Varna") {
    if (product == "coffee") {
      price = quantity * 0.45;
    } else if (product == "water") {
      price = quantity * 0.7;
    } else if (product == "beer") {
      price = quantity * 1.10;
    } else if (product == "sweets") {
      price = quantity * 1.35;
    } else if (product == "peanuts") {
      price = quantity * 1.55;
    }
  }

  console.log(price);
}


smallShop("coffe", "Varna", 2);
