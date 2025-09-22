const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all price elements by class
  let prices = document.querySelectorAll(".prices");
  let total = 0;

  // Calculate total
  prices.forEach(el => {
    total += parseInt(el.textContent, 10);
  });

  // Create new row for total
  let table = document.querySelector("table");
  let totalRow = document.createElement("tr");
  let totalCell = document.createElement("td");

  totalCell.setAttribute("colspan", "2");
  totalCell.textContent = "Total Price: " + total;

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
