/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const obj = {};

  for(let i=0;i<transactions.length;i++){
    if(obj.hasOwnProperty(transactions[i].category)) obj[transactions[i].category].totalSpent += transactions[i].price;
    else obj[transactions[i].category] = new Object({category : transactions[i].category, totalSpent : transactions[i].price});
  }

  var arr = [];
  for(const key in obj){
    arr.push(obj[key]);
  }
  // console.log(arr);
  return arr;
}

module.exports = calculateTotalSpentByCategory;
