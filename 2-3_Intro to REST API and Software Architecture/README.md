# API Endpoints

## getAllPlaylist :

```
Method : GET
Endpoint : "/playlist"
Query :
order_by_play: string ("asc"/"des") **OPTIONAL**
```

## addNewSongToPlayList :

```
Method : POST
Endpoint : "/playlist"
Request Body :
{
    "title": string,
    "artists": [string],
    "url": string,
    "playcount": int
}
```

## deleteSongById :

```
Method : DELETE
Endpoint : "/playlist/:id"
```

## updateSongById :

```
Method : PUT
Endpoint : "/playlist/:id"
Request Body :
{
    "title": string,
    "artists": [string],
    "url": string,
}
```

## playSongById :

```
Method : PUT
Endpoint : "/playlist/play/:id"
```
