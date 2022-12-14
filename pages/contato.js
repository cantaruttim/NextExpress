import { useState } from 'react';
import Head from 'next/head';
import Menu from '../components/Menu';

function Contato () {

    const  [dataForm, setDataForm] = useState({
        name: '', 
        email: '',
        subject: '',
        content: ''
    });

    const onChangeInput = e => setDataForm( {...dataForm, [e.target.name]: e.target.value});

    const sendContato = async e => {
        e.preventDefault();
        console.log(dataForm.name);
        
        try{
            const res = await fetch('http://localhost:8080/add-msg-contact', {
                method: 'POST',
                body: JSON.stringify(dataForm),
                headers: { 'Content-Type': 'application/json'}
            });

            const responseEnv = await res.json();

            if(responseEnv.erro){
                console.log(responseEnv.mensagem);
            }else{
                console.log(responseEnv.mensagem);
            }
        } catch(err){
            console.log("ERRO: tente novamente!")
        }
    }

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


        <form onSubmit={sendContato}>
            <input type="text" name='name' placeholder='digite o nome' onChange={onChangeInput} value={dataForm.name} /><br /><br />
            <input type="email" name='email' placeholder='digite o seu melhor email' onChange={onChangeInput} value={dataForm.email} /><br /><br />
            <input type="text" name='subject' placeholder='digite o assunto da mensagem' onChange={onChangeInput} value={dataForm.subject} /><br /><br />
            <input type="text" name='content' placeholder='conteúdo da mensagem' onChange={onChangeInput} value={dataForm.content} /><br /><br />

            <button type='submit'> Enviar </button>
        </form>
    </div>
    )

}

export default Contato;