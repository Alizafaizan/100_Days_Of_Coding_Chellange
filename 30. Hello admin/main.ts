let userNames: string[] = ['admin', 'user1', 'user2', 'user3', 'user4'];

userNames.forEach(userNames => {
    if(userNames === "admin") {
        console.log("Hello admin, Would you like to see a status report?;")
    } else {
        console.log(`Hello ${userNames}, thank you for logging in again,`);
    }
})