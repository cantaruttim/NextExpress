import Head from 'next/head';
import Menu from '../components/Menu';

function Home () {
    return (
    <div>
        <Head>
            <meta charSet='utf-8' />
            <meta name='robots' content='index, follow' />
            <meta name='description' content="Site sobre ... " />
            <meta name='author' content='Cesar - Celke' />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <title>Sobre</title>
        </Head>
        <Menu />
        Welcome to Sobre page

    </div>
    )

}

export default Home;