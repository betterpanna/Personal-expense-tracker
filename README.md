# Personal-expense-tracker
 Building a personal finance dashboard is a great way to take control of your "financial data exhaust."
Here is a blueprint for a robust, automated dashboard.

1. The Sheet Structure
Before writing code, you need a solid foundation. Create a spreadsheet with these three core tabs:
Transactions: The "Brain." Columns: Date, Description, Category, Amount, Type(Income/Expense).
Categories: The "Settings." A simple list used for Data Validation (dropdowns) in the Transactions tab.
Dashboard: The "Face." This is where your charts and summaries live.


2. The Automation (Apps Script)
We'll use Apps Script to create a custom menu and automate a "Monthly Summary" generator.
In Google Sheets, go to Extensions > Apps Script.

1. Delete any existing code and paste the following: code.js code there 
2. The Interface (The "Face")
In Apps Script, click the + next to "Files" and select HTML. Name it Index.
Paste this code (it includes the design and logic): just copy the index.html file code
3. Deploy
Click Deploy > New Deployment.

Choose Web App. Set access to "Anyone".

Click Deploy and authorize the permissions.

Copy the Web App URL provided.
<img width="975" height="380" alt="image" src="https://github.com/user-attachments/assets/0e22302e-17a7-4629-bb3b-bc26f5d1519e" />
