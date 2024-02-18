
// const class1 = {
//     name: "10-A",
//     students: ["Max", "Mote4ka", "777", "Poco"],
//     studentCount: 4,
// }

// console.log(class1.name);

// class1.name = "10-B";
// class1.raiting = 10;
// delete class1.raiting;

// console.log(class1);
// console.log(class1['raiting']);

// class1.students.push('Shelly');

// console.log(class1.students);



// const userName = 'Oleg';
// const email = 'oleg@email.com';

// const signUpData = {
//     userName,
//     email,
// }

// console.log(signUpData);


// const playlist = {
//     name: 'Плейлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],

//     getName() {
//       console.log(this.name);
//     },

//     changeName(newName){
//      return this.name = newName;
//     },

//     getTracksCount() {
//         return this.tracks.length;
//     },

//     addNewTrack(newTrack) {
//         this.tracks.push(newTrack);
//     }
// }

// playlist.addNewTrack("трек-4");
// console.log(playlist.tracks);
// console.log(playlist.getTracksCount());

// const feedback = {
//     good: 10,
//     neutral: 5,
//     bad: 2,
// }
// const allKeys = Object.keys(feedback);
// console.log(feedback)
// console.log(allKeys)

// for (const key of allKeys) {
//     console.log(feedback[key])
// }


// const values = Object.values(feedback);
// console.log(values);

// const entries = Object.entries(feedback);
// console.log(entries);




const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: false },
    { name: 'Ajax', online: false },
];

// const findFriendByName = function(allFriends, friendToFind) {
//     for (const friend of allFriends) {
//         if (friend.name === friendToFind) {
//             return 'Друга знайдено';
//         } else {
//             continue;
//         }
//     }
//     return 'Друга не знайдено';
// }

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));


const getAllNames = function(allFriends) {
    const names = [];
    for (const friend of allFriends) {
        names.push(friend.name);
    }
    console.log(names);
    return `Список всіх друзів : ${names}.`;
}



console.log(getAllNames(friends));
