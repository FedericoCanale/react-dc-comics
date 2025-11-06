export default function ComicCard({ comic }) {
    const { thumb, series } = comic;

    return (
        <div>
            <div className="comic-thumb">
                <img src={thumb} alt={series} />
            </div>
            <p className="comic-title">{series}</p>
        </div>
    );
}