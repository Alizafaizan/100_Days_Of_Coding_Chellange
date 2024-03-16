//  Make a list of five or more usernames called current_users.

let current_users: string[] = ['admin', 'user1', 'user2', 'user3', 'user4'];

// Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

let new_users: string[] = ['admin', 'user1', 'user5', 'user6', 'user7'];

// Loop through the new_users list to see if each new username has already been used.
new_users.forEach((newUser) => {
    if (
        current_users.some(
            (currentUser) => currentUser.toLocaleLowerCase() === newUser.toLowerCase()
        )
    ) {
        console.log(`${newUser} will need to enter a new username.`);
    } else {
        console.log(`${newUser} is available.`);
    }
})








