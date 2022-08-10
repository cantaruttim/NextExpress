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
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css' />
            <title>Home</title>
        </Head>
        <Menu />
        Welcome to Mathew's page

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src='custom.js'></script>

    </div>
    )

}

export default Home;