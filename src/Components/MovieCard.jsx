function MovieCard ({ movie: { title, vote_average, poster_path, release_date, original_language } }) {
    return ( 
        <div className="movie-card">
            <img src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : './no-movie.png'} alt={title} className="movie-poster" />
           <p className="text-white mt-[10px]">{title}</p>
           <p className="text-gray-400">Rating: <img src="./star.svg" alt="Star" className="w-4 h-4 inline mr-1" /> {vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
           <p className="text-gray-400">Language: {original_language}</p>
           <p className="text-gray-400">Release Date: {release_date ? release_date.split('-')[0] : 'N/A'}</p>
        </div>
     );
}

export default MovieCard ;