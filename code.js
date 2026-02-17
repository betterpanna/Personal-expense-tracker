function doGet() {
  return HtmlService.createTemplateFromFile('Index').evaluate()
    .setTitle('Finance Pro Dashboard')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

const SS = SpreadsheetApp.getActiveSpreadsheet();
const TXN_SHEET = SS.getSheetByName('Transactions');
const SET_SHEET = SS.getSheetByName('Settings');

function getExchangeRates() {
  try {
    const response = UrlFetchApp.fetch("https://open.er-api.com/v6/latest/USD");
    return JSON.parse(response.getContentText()).rates;
  } catch(e) { return { JPY: 150, BDT: 115, USD: 1 }; }
}

// New function to save the budget
function updateBudget(newLimit) {
  SET_SHEET.getRange("B1").setValue(newLimit);
  return newLimit;
}

function saveTransaction(data) {
  const rates = getExchangeRates();
  const date = Utilities.formatDate(new Date(), SS.getSpreadsheetTimeZone(), "yyyy/MM/dd");
  let usdVal = data.curr === 'USD' ? data.amount : data.amount / rates[data.curr];
  TXN_SHEET.appendRow([date, data.category, data.type, Number(data.amount), "", data.curr, usdVal]);
  return "Success";
}

function getDashboardData(month, currentLang) {
  const data = TXN_SHEET.getDataRange().getValues();
  const rates = getExchangeRates();
  const budgetLimit = SET_SHEET.getRange("B1").getValue() || 1000;
  
  let totals = {};
  let monthlyInc = 0, monthlyExp = 0;

  const masterMap = {
    "Salary": "Salary", "給与": "Salary", "বেতন": "Salary",
    "Rent": "Rent", "家賃": "Rent", "ভাড়া": "Rent",
    "Food": "Food", "食費": "Food", "খাবার": "Food",
    "Loan": "Loan", "ローン": "Loan", "ঋণ": "Loan",
    "Shopping": "Shopping", "買い物": "Shopping", "কেনাকাটা": "Shopping",
    "Household": "Household", "家事": "Household", "গৃহস্থালী": "Household",
    "Transport": "Transport", "交通費": "Transport", "পরিবহন": "Transport"
  };

  const displayLabels = {
    en: { "Salary": "Salary", "Rent": "Rent", "Food": "Food", "Loan": "Loan", "Shopping": "Shopping", "Household": "Household", "Transport": "Transport" },
    jp: { "Salary": "給与", "Rent": "家賃", "Food": "食費", "Loan": "ローン", "Shopping": "買い物", "Household": "家事", "Transport": "交通費" },
    bn: { "Salary": "বেতন", "Rent": "ভাড়া", "Food": "খাবার", "Loan": "ঋণ", "Shopping": "কেনাকাটা", "Household": "গৃহস্থালী", "পরিবহন": "Transport" }
  };

  for (let i = 1; i < data.length; i++) {
    const rowDate = new Date(data[i][0]);
    const rowMonth = Utilities.formatDate(rowDate, "GMT", "yyyy-MM");
    if (rowMonth === month) {
      let usdAmt = Number(data[i][6]);
      if (data[i][2] === 'Income') { monthlyInc += usdAmt; } 
      else {
        monthlyExp += usdAmt;
        let englishKey = masterMap[data[i][1]] || "Other";
        let label = displayLabels[currentLang][englishKey] || englishKey;
        totals[label] = (totals[label] || 0) + usdAmt;
      }
    }
  }

  let chartArray = [['Category', 'Amount']];
  for (let key in totals) chartArray.push([key, totals[key]]);

  return {
    chart: chartArray,
    stats: { inc: monthlyInc.toFixed(2), exp: monthlyExp.toFixed(2), bal: (monthlyInc - monthlyExp).toFixed(2) },
    rates: rates,
    budgetLimit: budgetLimit
  };
}
