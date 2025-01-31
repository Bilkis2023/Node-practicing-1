//Music should ba an object with title, artist, album properties:
const music= {
    title: "The Less I know the Better ",
    artist: "Tame Impala",
    album: "Currents",
};

//Write code between the div tag to output the data from the music object above.
//Use an h2 element for the title and p element for the artist and album.
const songSnippet = `
<div class="song" >
<h2> ${music.title} </h2>
<p class="artist" > ${music.artist} </p>
<p class="album" > ${music.album} </p>
</div>
`;

const element = document.getElementById("music");
element.innerHTML = songSnippet;



