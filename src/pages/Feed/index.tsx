import React from 'react';

import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';

import { PageFeed } from './styles';
import profileImg from '../../assets/images/piupic.png';
import imgIcon from '../../assets/images/image.svg';
import gifIcon from '../../assets/images/gif.svg';
import smileIcon from '../../assets/images/smile.svg';
import calendarIcon from '../../assets/images/calendar.svg';
import Piu from '../../components/Piu';



 function Feed() {
     return(
         <PageFeed>
            <Navbar />
            <main>
                <Header />
                <form>
                    <div className='input-block'>
                        <img src={ profileImg } alt="Foto de Perfil"/>
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

                <Piu />
                <Piu />
            </main>
         </PageFeed>
     )
 }

 export default Feed;