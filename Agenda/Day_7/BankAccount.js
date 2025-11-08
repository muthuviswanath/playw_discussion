I have a bank account with deposit(amount), withdraw(amount), checkbalance() methods
initialize the bankbalance vaiable as 0
whenever the user attempts to deposit the money, bank balance should increase
whenever the user attempts to withdraw the money, bank balance should decrease
checkbalance shows the amount present in the bank account
if the user tries to withdraw more then the available balance, it should say insufficient balance


bankAccount.deposit(10000).withdraw(6000)

Deposited: 10000
Balance: 10000

Withdrew: 6000
Balance: 4000


bankAccount.deposit(10000).withdraw(6000).withdraw(5000)

Deposited: 10000
Balance: 10000

Withdrew: 6000
Balance: 4000

insufficient Balance! Current Balance: 4000



bankAccount.deposit(10000).withdraw(6000).checkbalance()
Deposited: 10000
Balance: 10000

Withdrew: 6000
Balance: 4000

Your current Balance: 4000