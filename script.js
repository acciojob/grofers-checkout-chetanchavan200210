const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all price elements
  let prices = document.querySelectorAll(".price");
  let total = 0;

  prices.forEach(el => {
    total += parseInt(el.textContent, 10);
  });

  // Remove existing answer if any
  let oldAns = document.getElementById("ans");
  if (oldAns) oldAns.remove();

  // Create answer container
  let ans = document.createElement("div");
  ans.id = "ans";                   // ✅ required by Cypress test
  ans.textContent = total;          // ✅ test expects only the number inside
  document.body.appendChild(ans);
};

getSumBtn.addEventListener("click", getSum);
