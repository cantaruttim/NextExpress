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
            <title>Contato</title>
        </Head>
        <Menu />
        <br /><br /><br /><br /><br />


        <form>
            <input type="text" name='name' placeholder='digite o nome' /><br /><br />
            <input type="email" name='email' placeholder='digite o seu melhor email' /><br /><br />
            <input type="text" name='subject' placeholder='digite o assunto da mensagem' /><br /><br />
            <input type="text" name='content' placeholder='conteúdo da mensagem' /><br /><br />


        </form>
    </div>
    )

}

export default Home;