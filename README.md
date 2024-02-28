Spam Detection System
This project implements a simple system for checking spam messages within an HTML page using JavaScript. Users can enter text into the message input field and then press the "Check Message" button to verify if the entered message contains certain keywords commonly associated with spam.

Utilized Regular Expressions
Help Regex: Checks if the message contains phrases like "please help" or "assist me".

Dollar Regex: Verifies if the message contains expressions indicating a sum of money in dollars.

Money Regex: Checks if the message contains the expression "free money".

Stock Regex: Checks if the message contains an expression related to stocks.

Dear Regex: Checks if the message contains the expression "dear friend".

How to Use
Open the HTML file in a web browser.

Enter a message in the designated input field.

Press the "Check Message" button to verify if the message contains spam.

The result is displayed - whether the message looks like spam or not.

This system uses addEventListener to track click events on the button, then utilizes an array of regular expressions to determine if the entered message contains potentially suspicious phrases.