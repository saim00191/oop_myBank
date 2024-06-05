#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Customers {
    static counter = 101010;
    FullName;
    FatherName;
    Age;
    Gender;
    MobileNumber;
    AccountNumber;
    Cnic;
    balance = Math.floor(Math.random() * 90000);
    password;
    constructor(FullName, FatherName, Age, Gender, MobileNumber, Cnic, password) {
        this.FullName = FullName;
        this.FatherName = FatherName;
        this.Age = Age;
        this.Gender = Gender;
        this.MobileNumber = MobileNumber;
        this.AccountNumber = Customers.counter++;
        this.Cnic = Cnic;
        this.password = password;
    }
    checkPassword(inputPassword) {
        return this.password === inputPassword;
    }
    viewBalance() {
        console.log(chalk.bold(`\nNAME : ${chalk.yellow.bold.italic(this.FullName)} \nFATHER NAME : ${chalk.yellow.bold.italic(this.FatherName)} \nBALANCE : ${chalk.yellow.bold.italic(this.balance)}\n`));
    }
    cashWithdraw(amount) {
        if (amount > this.balance) {
            console.log(chalk.red.bold("\nInsufficient Balance\n"));
        }
        else {
            this.balance -= amount;
            console.log(chalk.green.bold(`\nDear ${chalk.yellow.bold.italic(this.FullName)} Your Withdrawal was SuccessFully Done !! Your Remaining Balance is ${chalk.yellow.bold.italic(this.balance)}\n`));
        }
    }
    cashDeposit(amount) {
        this.balance += amount;
        console.log(chalk.green.bold(`\nDear ${chalk.yellow.bold.italic(this.FullName)} Your Deposit was SuccessFully Done !! Your New Balance is ${chalk.yellow.bold.italic(this.balance)}\n`));
    }
    changePassword(newPassword) {
        this.password = newPassword;
        console.log(chalk.green.bold(`\nDear ${chalk.yellow.bold.italic(this.FullName)} Your Password was SuccessFully Changed !!\n`));
    }
    showDetails() {
        console.log(chalk.bold(`\nNAME : ${chalk.bold(this.FullName)} \nFATHER NAME : ${chalk.bold(this.FatherName)} \nAGE : ${chalk.bold(this.Age)} \nGENDER : ${chalk.bold(this.Gender)} \nMOBILE NUMBER : ${chalk.bold(this.MobileNumber)} \nACCOUNT NUMBER : ${chalk.bold(this.AccountNumber)} \nCNIC : ${chalk.bold(this.Cnic)} \nBALANCE : ${chalk.bold(this.balance)}\n`));
    }
    transferMoney(bank, TransferAccountNumber, amount) {
        if (amount > this.balance) {
            console.log(chalk.red.bold("\nInsufficient Balance\n"));
        }
        else {
            this.balance -= amount;
            console.log(chalk.green.bold(`\nDear ${chalk.yellow.bold.italic(this.FullName)} You SuccessFully Tansfer ${chalk.yellow.italic.bold(amount)} to ${chalk.yellow.italic.bold(TransferAccountNumber)}${chalk.yellow.bold.italic(`(${bank})`)}\n`));
        }
    }
}
class BankManager {
    customers = [];
    addCustomer(FullName, FatherName, Age, Gender, MobileNumber, Cnic, password) {
        let CustomerMobileNumCheck = this.customers.find((cus) => cus.MobileNumber === MobileNumber);
        let CustomerCnicNumCheck = this.customers.find((cus) => cus.Cnic === Cnic);
        let PasswordCheck = this.customers.find((cus) => cus.password === password);
        if (CustomerMobileNumCheck) {
            console.log(chalk.red.bold("\nPhone Number Already Exists"));
        }
        else if (CustomerCnicNumCheck) {
            console.log(chalk.red.bold("\nCnic Number Already Exists"));
        }
        else if (PasswordCheck) {
            console.log(chalk.red.bold("\nPassword Already Used"));
        }
        else {
            let CustomersDetails = new Customers(FullName, FatherName, Age, Gender, MobileNumber, Cnic, password);
            this.customers.push(CustomersDetails);
            console.log(chalk.green.bold(`\nDear ${chalk.yellow.bold.italic(FullName)} Your Account was SuccessFully Opened !! Your Account Number is ${chalk.yellow.bold.italic(CustomersDetails.AccountNumber)}\n`));
        }
    }
    viewBalancee(AccountNumber, password) {
        let CustomerAccountNumCheck = this.customers.find((cus) => cus.AccountNumber === AccountNumber);
        if (CustomerAccountNumCheck) {
            if (CustomerAccountNumCheck.checkPassword(password)) {
                CustomerAccountNumCheck.viewBalance();
            }
            else {
                console.log(chalk.red.bold("\nIncorrect Password\n"));
            }
        }
        else {
            console.log(chalk.red.bold("\nAccount Number Not Found\n"));
        }
    }
    CashWithdraw(AccountNumber, password, amount) {
        let CustomerAccountNumCheck = this.customers.find((cus) => cus.AccountNumber === AccountNumber);
        if (CustomerAccountNumCheck) {
            if (CustomerAccountNumCheck.checkPassword(password)) {
                CustomerAccountNumCheck.cashWithdraw(amount);
            }
            else {
                console.log(chalk.red.bold("\nIncorrect Password\n"));
            }
        }
        else {
            console.log(chalk.red.bold("\nAccount Number Not Found\n"));
        }
    }
    CashDeposit(AccountNumber, password, amount) {
        let CustomerAccountNumCheck = this.customers.find((cus) => cus.AccountNumber === AccountNumber);
        if (CustomerAccountNumCheck) {
            if (CustomerAccountNumCheck.checkPassword(password)) {
                CustomerAccountNumCheck.cashDeposit(amount);
            }
            else {
                console.log(chalk.red.bold("\nIncorrect Password\n"));
            }
        }
        else {
            console.log(chalk.red.bold("\nAccount Number Not Found\n"));
        }
    }
    changePassword(AccountNumber, password, newPassword) {
        let CustomerAccountNumCheck = this.customers.find((cus) => cus.AccountNumber === AccountNumber);
        if (CustomerAccountNumCheck) {
            if (CustomerAccountNumCheck.checkPassword(password)) {
                CustomerAccountNumCheck.changePassword(newPassword);
            }
            else {
                console.log(chalk.red.bold("\nIncorrect Password Entered\n"));
            }
        }
        else {
            console.log(chalk.red.bold("\nAccount Number Not Found\n"));
        }
    }
    showDetails(AccountNumber, password) {
        let CustomerAccountNumCheck = this.customers.find((cus) => cus.AccountNumber === AccountNumber);
        if (CustomerAccountNumCheck) {
            if (CustomerAccountNumCheck.checkPassword(password)) {
                CustomerAccountNumCheck.showDetails();
            }
            else {
                console.log(chalk.red.bold("\nIncorrect Password\n"));
            }
        }
        else {
            console.log(chalk.red.bold("\nAccount Number Not Found\n"));
        }
    }
    transferMoney(AccountNumber, password, bank, TansferAccountNum, amount) {
        let CustomerAccountNumCheck = this.customers.find((cus) => cus.AccountNumber === AccountNumber);
        if (CustomerAccountNumCheck) {
            if (CustomerAccountNumCheck.checkPassword(password)) {
                CustomerAccountNumCheck.transferMoney(bank, TansferAccountNum, amount);
            }
            else {
                console.log(chalk.red.bold("\nIncorrect Password\n"));
            }
        }
        else {
            console.log(chalk.red.bold("\nAccount Number Not Found\n"));
        }
    }
}
let bankManager = new BankManager();
console.log(chalk.bold("*".repeat(16)));
console.log(chalk.green.bold.italic("WELCOME TO BANK"));
console.log(chalk.bold("*".repeat(16)));
let condition = true;
while (condition) {
    let choices = await inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "Select an option",
            choices: ["Add Customer", "Cash Withdraw", "Cash Deposit", "View Balance", "Change Password", "Show Details", "Transfer Money", "Exit"]
        }
    ]);
    if (choices.choice === "Add Customer") {
        let FullName = await inquirer.prompt([
            {
                type: "input",
                name: "FullName",
                message: "Enter Your Full Name =>",
                validate: (value) => {
                    if (isNaN(value)) {
                        return true;
                    }
                    else if (value.length < 3) {
                        return (chalk.red.bold("\nName Should Be Atleast 3 Character Long\n"));
                    }
                    else if (value.length > 15) {
                        console.log(chalk.red.bold("\nPlease Enter Your Name in 15 Words"));
                    }
                    else {
                        return (chalk.red.bold("\nPlease Enter Valid Input\n"));
                    }
                }
            }
        ]);
        let FatherName = await inquirer.prompt([
            {
                type: "input",
                name: "FatherName",
                message: "Enter Your Father Name =>",
                validate: (value) => {
                    if (isNaN(value)) {
                        return true;
                    }
                    else if (value.length < 3) {
                        return (chalk.red.bold("\nName Should Be Atleast 3 Character Long\n"));
                    }
                    else if (value.length > 15) {
                        console.log(chalk.red.bold("\nPlease Enter Your Name in 15 Words"));
                    }
                    else {
                        return (chalk.red.bold("\nPlease Enter Valid Input\n"));
                    }
                }
            }
        ]);
        let Age = await inquirer.prompt([
            {
                type: "number",
                name: "Age",
                message: "Enter Your Age =>",
                validate: (value) => {
                    if (isNaN(value)) {
                        return (chalk.red.bold("\nAge Should be in numbers\n"));
                    }
                    else if (value < 18) {
                        console.log(chalk.red.bold("\nAge Should Must Be Greater thann or Equals To  18"));
                    }
                    else if (value > 75) {
                        console.log(chalk.red.bold("\nAge Should Must be less than 75"));
                    }
                    else {
                        return true;
                    }
                }
            }
        ]);
        let Gender = await inquirer.prompt([
            {
                type: "list",
                name: "gender",
                message: "Select Your Gender :",
                choices: ["Male", "Female", "Other"]
            }
        ]);
        let MobileNumber = await inquirer.prompt([
            {
                type: "number",
                name: "MobileNumber",
                message: "Enter Your Mobile Number =>",
                validate: (value) => {
                    if (isNaN(value)) {
                        return (chalk.red.bold("\nPhone Number Should be in numbers\n"));
                    }
                    else if (value.toString().length === 10) {
                        return true;
                    }
                    else {
                        return (chalk.red.bold("\nInValid Input\n"));
                    }
                }
            }
        ]);
        let Cnic = await inquirer.prompt([
            {
                type: "number",
                name: "Cnic",
                message: "Enter Your Cnic (without - dashes) =>",
                validate: (value) => {
                    if (isNaN(value)) {
                        return (chalk.red.bold("\nCnic Should in numbers\n"));
                    }
                    else if (value.toString().length === 13) {
                        return true;
                    }
                    else {
                        return (chalk.red.bold("\nInValid Input\n"));
                    }
                }
            }
        ]);
        let password = await inquirer.prompt([
            {
                type: "number",
                name: "password",
                message: "Enter Your Password =>",
                validate: (value) => {
                    if (isNaN(value)) {
                        return (chalk.red.bold("\nPlease Enter in numbers\n"));
                    }
                    else if (value.length < 8) {
                        console.log(chalk.red.bold("\nPassword Should Be Atleast 8 Character Long . Please Try Again."));
                    }
                    else if (value.length > 12) {
                        console.log(chalk.red.bold("\nPassword Should be In 12 Characters"));
                    }
                    else {
                        return true;
                    }
                }
            }
        ]);
        bankManager.addCustomer(FullName.FullName, FatherName.FatherName, Age.Age, Gender.gender, MobileNumber.MobileNumber, Cnic.Cnic, password.password);
    }
    else if (choices.choice === "View Balance") {
        let viewBalance = await inquirer.prompt([
            {
                type: "number",
                name: "AccountNumber",
                message: "Enter Your Account Number =>",
                validate: (value) => {
                    if (isNaN(value)) {
                        return (chalk.red.bold("\nAccount Number Should be in numbers\n"));
                    }
                    else {
                        return true;
                    }
                }
            },
            {
                type: "number",
                name: "password",
                message: "Enter Your Password =>",
                validate: (value) => {
                    if (isNaN(value)) {
                        return (chalk.red.bold("\nPassword Should be in numbers\n"));
                    }
                    else {
                        return true;
                    }
                }
            }
        ]);
        bankManager.viewBalancee(viewBalance.AccountNumber, viewBalance.password);
    }
    else if (choices.choice === "Cash Withdraw") {
        let cashWithdraw = await inquirer.prompt([
            {
                type: "number",
                name: "AccountNumber",
                message: "Enter Your Account Number =>",
                validate: (value) => {
                    if (isNaN(value)) {
                        return (chalk.red.bold("\nAccount Number Should be in numbers\n"));
                    }
                    else {
                        return true;
                    }
                }
            },
            {
                type: "number",
                name: "password",
                message: "Enter Your Password =>",
                validate: (value) => {
                    if (isNaN(value)) {
                        return (chalk.red.bold("\nPassword Should be in numbers\n"));
                    }
                    else {
                        return true;
                    }
                }
            },
            {
                type: "number",
                name: "amount",
                message: "Enter Amount =>",
                validate: (value) => {
                    if (isNaN(value)) {
                        return (chalk.red.bold("\nAmount Should be in numbers\n"));
                    }
                    else {
                        return true;
                    }
                }
            }
        ]);
        bankManager.CashWithdraw(cashWithdraw.AccountNumber, cashWithdraw.password, cashWithdraw.amount);
    }
    else if (choices.choice === "Cash Deposit") {
        let cashDepositInputs = await inquirer.prompt([
            {
                type: "number",
                name: "AccountNumber",
                message: "Enter Your Account Number =>",
                validate: (value) => {
                    if (isNaN(value)) {
                        return (chalk.red.bold("\nAccount Number Should be in numbers\n"));
                    }
                    else {
                        return true;
                    }
                }
            },
            {
                type: "number",
                name: "password",
                message: "Enter Your Password =>",
                validate: (value) => {
                    if (isNaN(value)) {
                        return (chalk.red.bold("\nPassword Should be in numbers\n"));
                    }
                    else {
                        return true;
                    }
                }
            },
            {
                type: "number",
                name: "amount",
                message: "Enter Amount =>",
                validate: (value) => {
                    if (isNaN(value)) {
                        return (chalk.red.bold("\nAmount Should be in numbers\n"));
                    }
                    else {
                        return true;
                    }
                }
            }
        ]);
        bankManager.CashDeposit(cashDepositInputs.AccountNumber, cashDepositInputs.password, cashDepositInputs.amount);
    }
    else if (choices.choice === "Exit") {
        console.log(chalk.green.bold.italic("Good Bye"));
        condition = false;
    }
    else if (choices.choice === "Change Password") {
        let changePassword = await inquirer.prompt([
            {
                type: "number",
                name: "AccountNumber",
                message: "Enter Your Account Number =>",
                validate: (value) => {
                    if (isNaN(value)) {
                        return (chalk.red.bold("\nAccount Number Should be in numbers\n"));
                    }
                    else {
                        return true;
                    }
                }
            },
            {
                type: "number",
                name: "password",
                message: "Enter Your Password =>",
                validate: (value) => {
                    if (isNaN(value)) {
                        return (chalk.red.bold("\nPassword Should be in numbers\n"));
                    }
                    else {
                        return true;
                    }
                }
            },
            {
                type: "number",
                name: "newPassword",
                message: "Enter New Password =>",
                validate: (value) => {
                    if (isNaN(value)) {
                        return (chalk.red.bold("\nPassword Should be in numbers\n"));
                    }
                    else {
                        return true;
                    }
                }
            }
        ]);
        bankManager.changePassword(changePassword.AccountNumber, changePassword.password, changePassword.newPassword);
    }
    else if (choices.choice === "Show Details") {
        let showDetails = await inquirer.prompt([
            {
                type: "number",
                name: "AccountNumber",
                message: "Enter Your Account Number =>",
                validate: (value) => {
                    if (isNaN(value)) {
                        return (chalk.red.bold("\nAccount Number Should be in numbers\n"));
                    }
                    else {
                        return true;
                    }
                }
            },
            {
                type: "number",
                name: "password",
                message: "Enter Your Password =>",
                validate: (value) => {
                    if (isNaN(value)) {
                        return (chalk.red.bold("\nPassword Should be in numbers\n"));
                    }
                    else {
                        return true;
                    }
                }
            }
        ]);
        bankManager.showDetails(showDetails.AccountNumber, showDetails.password);
    }
    else if (choices.choice === "Transfer Money") {
        let transferMoney = await inquirer.prompt([
            {
                type: "number",
                name: "AccountNumber",
                message: "Enter Your Account Number =>",
                validate: (value) => {
                    if (isNaN(value)) {
                        return (chalk.red.bold("\nAccount Number Should be in numbers\n"));
                    }
                    else {
                        return true;
                    }
                }
            },
            {
                type: "number",
                name: "password",
                message: "Enter Your Password =>",
                validate: (value) => {
                    if (isNaN(value)) {
                        return (chalk.red.bold("\nPassword Should be in numbers\n"));
                    }
                    else {
                        return true;
                    }
                }
            },
            {
                type: 'list',
                name: "bank",
                message: "Select Bank",
                choices: ["Allied Bank Limited", "Askari Bank Limited", "Bank Alfalah Limited", "Bank Al Habib Limited", "Bank Islami Pakistan Limited", "Faysal Bank Limited", "Habib Bank Limited (HBL)", "JS Bank Limited", "MCB Bank Limited", "Meezan Bank Limited", "National Bank of Pakistan (NBP)", "Silkbank Limited", "Sindh Bank Limited", "Soneri Bank Limited", "Summit Bank Limited", "United Bank Limited (UBL)"]
            },
            {
                type: "number",
                name: "accountNumber",
                message: "Enter Account Number",
                validate: (value) => {
                    if (isNaN(value)) {
                        return (chalk.red.bold("\nAccount Number Should be in numbers\n"));
                    }
                    else if (value < 13) {
                        return (chalk.red.bold("\nInvalid Account Number\n"));
                    }
                    else {
                        return true;
                    }
                }
            },
            {
                type: "number",
                name: "amount",
                message: "Enter Amount =>",
                validate: (value) => {
                    if (isNaN(value)) {
                        return (chalk.red.bold("\nAmount Should be in numbers\n"));
                    }
                    else {
                        return true;
                    }
                }
            },
        ]);
        bankManager.transferMoney(transferMoney.AccountNumber, transferMoney.password, transferMoney.bank, transferMoney.accountNumber, transferMoney.amount);
    }
}
