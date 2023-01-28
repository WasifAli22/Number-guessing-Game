import inquirer from "inquirer";
const systemGenNumber = Math.floor(Math.random() * 10)

// console.log(systemGenNumber);

type userType = {
    userguess: number
}

const userInput: userType = await inquirer.prompt([
    {
        type: "number",
        name: "userguess",
        message: "Enter Number b/w 1 to 10 "
    }

])

const { userguess } = userInput
console.log(`The system generated number is ${systemGenNumber} & You Entered ${userguess}`);

if (userguess === systemGenNumber) {
    console.log("correct You win");

} else {
    console.log("Please try again");

}
