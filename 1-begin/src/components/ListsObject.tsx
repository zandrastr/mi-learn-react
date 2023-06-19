interface IMovie {
    Title: string;
    Poster: string;
    imdbID: string;
}

const movies: IMovie[] = [
    { Title: 'Movie 1', Poster: 'poster URL', imdbID: 'abc1' },
    { Title: 'Movie 2', Poster: 'poster URL', imdbID: 'abc2' },
    { Title: 'Movie 3', Poster: 'poster URL', imdbID: 'abc3' },
];

export const ListsObject = () => {
    const html = movies.map((movie) => {
        return (
            <div className='movie' key={movie.imdbID}>
                <h3>{movie.Title}</h3>
                <div>
                    <img src={movie.Poster} alt={movie.Title} />
                </div>
            </div>
        );
    });
    return <div className='movies'> {html} </div>;
};
