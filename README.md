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
Here you see the English version of the app 
<img width="975" height="380" alt="image" src="https://github.com/user-attachments/assets/0e22302e-17a7-4629-bb3b-bc26f5d1519e" />
Here you see the Japanese version of the app
<img width="975" height="391" alt="image" src="https://github.com/user-attachments/assets/d6abdd84-7503-49f9-96f1-aed8692db434" />
Here you see the Bangla version of the app 
<img width="975" height="400" alt="image" src="https://github.com/user-attachments/assets/f4f98b95-0775-46f8-9e8c-a4112b722851" />

Why this version is better:
Language Buttons: Clicking EN, 日本語, or বাংলা updates the text immediately using a dictionary logic.

Live Converter: You can type an amount into the sidebar and instantly see what it equals in the other two currencies based on today's real market rates.

Unified Charting: Even if you spend in Yen today and Taka tomorrow, the chart calculates the "USD Value" so you can compare your spending accurately.


1. Multi-Currency Transaction Management
The core service of this app is to bridge the gap between different currencies.

Automatic Normalization: You can enter expenses in USD , JPY , or BDT , and the app automatically converts them into a base USD value for your master records using real-time exchange rates.

Localized Categories: Whether you are looking for "Food," "Food," or "খাবার," the app maps these to the same data point so your records stay organized regardless of the language you were speaking when you spent the money.

2. Intelligent Budget Monitoring
The app serves as a financial "guardrail" through its dynamic progress tracking.

Self-Adjusting Budget: You can set a custom spending limit (eg, $500 or $1,500) directly from the header.

Persistent Memory: Because the budget is saved in the Settingstab of your Google Sheet, the app "remembers" your financial goals across different sessions and devices.

Visual Warning System: The progress bar uses color psychology—staying Green while you are safe and turning Red when you exceed 80% of your monthly limit.

3. Real-Time Currency Conversion
Beyond tracking, the page acts as a utility tool for daily life.

Instant Exchange: The integrated converter allows you to quickly check how much a price in one currency equals in another without leaving the dashboard.

Live Rates: It fetches fresh data from an external API, ensuring your conversions are accurate to the current global market.
4. Visual Financial Analytics
Instead of looking at rows of numbers, the page provides a high-level visual summary.

Automated Pie Chart: The app aggregates all expenses for the selected month and builds a spending breakdown.
<img width="975" height="573" alt="image" src="https://github.com/user-attachments/assets/a38bdc3f-6557-4e12-b488-a52384b5fdab" />

Snapshot Stats: Three clear cards at the top show your Total Income , Total Expenses , and your Net Balance for the month.

5. High-Speed ​​Data Entry (Quick Add)
To reduce the "friction" of manual tracking, the app provides a shortcut service.

One-Tap Logging: Common daily expenses (like a ৳150 snack or a ¥500 train fare) can be logged with a single click, which is much faster than typing.

