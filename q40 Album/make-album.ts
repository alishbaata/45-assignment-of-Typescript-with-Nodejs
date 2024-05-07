//Creating a function
function make_album (artist_name: string, album_title: string, tracks?: number){
    let album: {artist: string, title: string, tracks?: number} = {
        artist: artist_name, 
        title: album_title,
    };

    if (tracks !== undefined){
        album.tracks = tracks;
    }
    
    return album;

}

//Calling three times function and creating 3 variables with different values

//First Time
let album1 = make_album("Hamza" , "Album No 1");

//Printing values of our object created by function

console.log(album1);

//Second Time
let album2 = make_album("Alishba" , "Album No 2");

//Printing values of our object created by function

console.log(album2);

//Third Time
let album3 = make_album("Saif" , "Album No 3", 10);

//Printing values of our object created by function

console.log(album3);
