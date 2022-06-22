import Head from 'next/head'
import Image from 'next/image'
import slug_getter from "../utils/slug_getter";
import Link from "next/link";


export const getStaticProps = async () => {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${process.env.API_KEY}`);
    const data = await res.json();

    return {
        props: {
            posts: data.articles
        }
    }

}


const Home = ({posts}) => {
    return (
        <div className='w-screen h-screen bg-gray font-body p-8'>
            <div className="flex gap-8">
                {posts.map(post => (
                    <div key={slug_getter(post.url)}>
                        <Link href={`/posts/${slug_getter(post.url)}`}>
                            <a>
                                <h2 className="py-8 font-bold text-2xl text-header">{post.title}</h2>
                            </a>
                        </Link>
                        <br/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;