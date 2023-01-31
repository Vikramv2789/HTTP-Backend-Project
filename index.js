//Vikram Varikooty Even 7-8 Jan 29, 2023
/*Tools required:  browser, code editor,  API platform, command line utility, server utility, and
application
*/
const express = require('express')
const app = express();
app.use(express.json());
const genres = [
    {id: 1, name: "Rap"},
    {id: 2, name: "Classical"},
    {id: 3, name: "Pop"},
    {id: 4, name: "Hip Hop"}
]
const songs = [
    {id: 1, name: "It's Everyday Bro"},
    {id: 2, name: "Symphony No.5"},
    {id: 3, name: "Beat it"},
    {id: 4, name: "Down like that"}
]
app.listen(3000, () => {
    console.log('Listening on port 3000 ...');
})

//=========== ROUTES FOR HTTP GET REQUESTS ==========


app.get('/api/genres', (req,res)=>{
    res.send(genres);
})

app.get('/api/songs', (req,res)=>{
    res.send(songs);
})

app.get('/api/genres/:id', (req,res)=>{
    const genre = genres.find(c=> c.id === parseInt(req.params.id));
    if(!genre){
        res.status(404).send("The song with the given ID was not found");
        return;
    }
        res.send(genre);
}
)

app.get('/api/songs/:id', (req,res)=>{
    const song = songs.find(c=> c.id === parseInt(req.params.id));
    if(!song){
        res.status(404).send("The song with the given ID was not found");
        return;
    }
        res.send(song);
}
)


//=========== ROUTES FOR HTTP POST REQUESTS ==========

app.post('/api/genres', (req,res)=> {
    if(Object.values(req.body)[0].length >= 3){
        const genre ={
            //we assign an ID and a name property
            id: genres.length +1,
            name:req.body.name    
        }
        genres.push(genre);
        res.send(genre);
        return 200;
    }
    else{
        res.status(404).send("The name has to be at least three character long");
        return;
    }
})

app.post('/api/songs', (req,res)=> {
    if(Object.values(req.body)[0].length >= 3){
        const song ={
            //we assign an ID and a name property
            id: songs.length +1,
            name:req.body.name    
        }
        songs.push(song);
        res.send(song);
        return 200;
    }
    else{
        res.status(404).send("The name has to be at least three character long");
        return;
    }
})


//=========== ROUTES FOR HTTP PUT REQUESTS ==========

app.put('/api/genres/:id', (req,res)=>{
    const genre = genres.find(c=> c.id === parseInt(req.params.id));
    if(!genre){
        res.status(404).send("The course with the given ID was not found");
        return;
    }
    else if(Object.values(req.body)[0].length >= 3){
        const newGenre ={
            //we assign an ID and a name property
            id: req.params.id,
            name:req.body.name    
        }
        const num = genres.indexOf(genre)
        genres[num] = newGenre;
        res.send(newGenre);
        return 200;
    }
    else{
        res.status(404).send("The name has to be at least three character long");
        return;
    }
});

app.put('/api/songs/:id', (req,res)=>{
    const song = songs.find(c=> c.id === parseInt(req.params.id));
    if(!song){
        res.status(404).send("The course with the given ID was not found");
        return;
    }
    else if(Object.values(req.body)[0].length >= 3){
        const newSong ={
            //we assign an ID and a name property
            id: req.params.id,
            name:req.body.name    
        }
        const num = songs.indexOf(song)
        songs[num] = newSong;
        res.send(newSong);
        return 200;
    }
    else{
        res.status(404).send("The name has to be at least three character long");
        return;
    }
});


//=========== ROUTES FOR HTTP DELETE REQUESTS ==========

app.delete('/api/genres/:id', (req,res)=>{
        const genre = genres.find(c=> c.id === parseInt(req.params.id));
        if(!genre){
            res.status(404).send("The genre with the given ID was not found");
            return;
        }
        else{
            const num = genres.indexOf(genre)
            genres.splice(num);
            res.send(genre);
            return 200;
        }
});

app.delete('/api/songs/:id', (req,res)=>{
    const song = songs.find(c=> c.id === parseInt(req.params.id));
    if(!song){
        res.status(404).send("The song with the given ID was not found");
        return;
    }
    else{
        const num = songs.indexOf(song)
        songs.splice(num);
        res.send(song);
        return 200;
    }
});
//1)To access my API, Postman connects to my javascript express local host.
//2) I became familiar with using an API by using Postman requests.
//3) Songs and genres can be linked to advance this project.
