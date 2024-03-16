// Task 15= Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let Guest_list: string[] = ['Imran kahn', 'Ali Muhammad Khan ', 'Hammad Azher', 'Muraad Saeed'];
for(let i=0; i<Guest_list.length; i++){

    console.log('Respected Sir. ' +  Guest_list[i] + ',\n\n it is our pleasure to invite you in our get together dinner please come and join us.\n\nThank you!\n\n')
}
let not_comingGuest = 'Imran Khan';
let new_guest= 'Kamran Khan Tassori';
Guest_list[0] = new_guest ;

for(let i=0; i<Guest_list.length; i++){

    console.log('Respected Sir. ' +  Guest_list[i] + ',\n\n it is our pleasure to invite you in our get together dinner please come and join us.\n\nThank you!\n\n')
}
console.log(`Mr.${not_comingGuest} will not coming.`);
