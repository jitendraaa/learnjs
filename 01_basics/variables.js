const accountID = 5463218
let accountEmail = "hello@gmail.com"
/**
 * var has a problem with Scope, So this gave birth to let.
 * So prefer not to use VAR. because issue in block Scope/Functional Scope.
 * 
 */
var accountPassword = "12314"
accountCity = "Vizag"
let accountState;

// accountID = 1

console.log(accountID)


console.table([accountID, accountEmail, accountPassword, accountCity, accountState])