import React, { useCallback, useEffect, useState } from 'react';

import { useAuth } from '../../hooks/auth';

import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';

import { PageFeed } from './styles';
import imgIcon from '../../assets/images/image.svg';
import gifIcon from '../../assets/images/gif.svg';
import smileIcon from '../../assets/images/smile.svg';
import calendarIcon from '../../assets/images/calendar.svg';
import Piu from '../../components/Piu';
import api from '../../services/api';


 function Feed() {

    const {user}: any = useAuth(); 

    const [pius, setPius] = useState([])
        
    useEffect(() => {
        function getPius() {
            api.get('/pius/').then(response => {
                setPius(response.data)           
            })

        }
        getPius();

    },[])

     return(
         <PageFeed>
            <Navbar />
            <main>
                <Header />
                <form>
                    <div className='input-block'>
                        <img src={ user.foto } alt="Foto de Perfil"/>
                        <section>
                            <textarea placeholder='Dá um piu!'></textarea>
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
                    </div>
                </form>

                {pius.map((piu, index) => {
                    return(
                        <Piu key={index} />
                    )
                })}

                {/* <Piu />
                <Piu /> */}

            </main>
         </PageFeed>
     )
 }

 export default Feed;