export default function checkImageLoading(moviePath: string | null | undefined) {
  const getImgUrl = () => {
    if (!moviePath) return '/movie.jpg';

    if (moviePath.startsWith('http')) {
      return `https://images.weserv.nl/?url=${encodeURIComponent(moviePath)}`;
    }
    const fullTmdbUrl = `https://image.tmdb.org/t/p/w500${moviePath}`;

    return `https://images.weserv.nl/?url=${encodeURIComponent(fullTmdbUrl)}`;
  };

  return { imgUrl: getImgUrl() };
}
