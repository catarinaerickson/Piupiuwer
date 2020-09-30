import React, { FormEvent, FormHTMLAttributes, HTMLAttributes, useCallback, useEffect, useState } from 'react';

import { useAuth, user } from '../../hooks/auth';

import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';

import { InputErrorComponent, InputPiuForm, PageFeed } from './styles';
import imgIcon from '../../assets/images/image.svg';
import gifIcon from '../../assets/images/gif.svg';
import smileIcon from '../../assets/images/smile.svg';
import calendarIcon from '../../assets/images/calendar.svg';
import Piu from '../../components/Piu';
import api from '../../services/api';


interface PiuObject {
    usuario: user;
    texto:string;
    likers: [];
    favoritado_por: [];
    id: number;
}

interface InputPiuProps extends FormHTMLAttributes<HTMLFormElement> {
    profileImg: string;
    userId: number;
    pius: PiuObject[];
    updatePius: (value:PiuObject) => void;
}

interface InputErrorProps {
    content: string,
    isRed: boolean,
}

const InputError: React.FC<InputErrorProps> = ({content, isRed}) => {
    return (
        <InputErrorComponent isRed={isRed}>
            <p>{content}</p>
        </InputErrorComponent>
    )
}

const InputPiu: React.FC<InputPiuProps> = ({profileImg, userId, pius, updatePius, ...rest}) => {

    const [message, setMessage] = useState('');

    const [counter, setCounter] = useState('');

    const [redCounter, setRedCounter] = useState(false);

    const[errInput, setErrInput] = useState('');

    //define a cor do contador
    useEffect(() => {
        if (message.length != 0) {
            setCounter(message.length + '/140');
            if(message.length > 140) {
                setRedCounter(true);
            } else {
                setRedCounter(false);
            };
        } else {
            setCounter('');
        }
    }, [message])
    
    // função para postar no piu e exibir mesegem de erro
    const handlePostPiu = useCallback(async (e: FormEvent) => {
        
        const data = {"usuario": userId, "texto": message };
        if (message.length == 0) {
            e.preventDefault();
            setErrInput('Você não pode enviar um piu vazio!')
            setTimeout(() => {setErrInput('')}, 3000)
        } else if (message.length > 140) {
            e.preventDefault();
            setErrInput('Seu piu deve ter, no máximo, 140 caracteres!')
            setTimeout(() => {setErrInput('')}, 3000)
        } else if(message.length>0 || message.length<141){
            const novopiu = await api.post('/pius/', data);
            // updatePius(novopiu.data: PiuObject)
            
        }
        
    }, [userId, message, api, setMessage, setErrInput])

    return(
        <InputPiuForm onSubmit={handlePostPiu}>
            <img src={ profileImg } alt="Foto de Perfil"/>
            <section>
                <textarea 
                placeholder='Dá um piu!' 
                value={message}
                onChange={(e) => {setMessage(e.target.value)}}
                />
                <InputError
                    content={counter}
                    isRed={redCounter}
                />
                <InputError
                    content={errInput}
                    isRed={true}
                />
                <div className="options">
                    <div className="options-bar">
                        <img src={ imgIcon } alt="Adicionar imagem"/>
                        <img src={ gifIcon } alt="Adicionar gif"/>
                        <img src={ smileIcon } alt="Adicionar emoji"/>
                        <img src={ calendarIcon } alt="Adicionar agenda"/>
                    </div>
                    <Button 
                        title='Piupiu'
                        isSmall={ true }
                    />
                </div>
            </section>
        </InputPiuForm>
    )
}

 function Feed() {

    const {user} = useAuth(); 

    const [pius, setPius] = useState<PiuObject[]>([]);
    
    // carregar pius
    useEffect(() => {
        function getPius() {
            api.get('/pius/').then(response => {
                setPius(response.data)     
                
                console.log(response.data)      
            })
        }
        getPius();
    },[])

    //abre ou fecha a navBar quando a tela tem max-width de 500px
    const [displayNavbar, setDisplayNavbar] = useState(false);
    const handleShowNavbar = useCallback(() => {
        setDisplayNavbar(true);
    }, [setDisplayNavbar])

    const handleHideNavbar = useCallback(() => {
        setDisplayNavbar(false);
    }, [setDisplayNavbar])


     return(
         <PageFeed>
            <Navbar displayNavbar={displayNavbar} hideNavbar={handleHideNavbar}/>
            <main>
                <Header callNavbar={handleShowNavbar}/>

                <InputPiu 
                    userId={user.id}
                    profileImg={user.foto}
                    pius={pius} 
                    updatePius={(novopiu) => {setPius([...pius, novopiu])}}
                />

                {pius.map((piu: PiuObject) => {
                    return(
                        <Piu 
                            key={piu.id}
                            username={piu.usuario.username}
                            first_name={piu.usuario.first_name}
                            last_name={piu.usuario.last_name}
                            texto={piu.texto}
                            likers={piu.likers}
                            favoritado_por={piu.favoritado_por}
                            foto={piu.usuario.foto}      
                            piuId={piu.id}    
                            disappear={false}     
                            transition={false}             
                        />
                    )
                })}

            </main>
         </PageFeed>
     )
 }

 export default Feed;