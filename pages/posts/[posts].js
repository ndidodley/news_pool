import slug_getter from "../../utils/slug_getter";

export const getStaticPaths = async () => {
    const res = fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${process.env.API_KEY}`)
    const data = await res.json();

    const paths = data.map(post => {
        return {
            params: {
                slug: slug_getter(post.url).toString()
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const slug = context.params.slug
    const res = fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${process.env.API_KEY}`)
    const data = res.json();



}


const Details = () => {
    return (
        <div>
            <h1>Details Page</h1>
        </div>
    )
}

export default Details;