import React from 'react';

import { PiuComponent } from './styles';

import profileImg from '../../assets/images/piupic.png';
import commentIcon from '../../assets/images/message-circle.svg';
import repiuIcon from '../../assets/images/repiu.svg';
import likeIcon from '../../assets/images/heart.svg';
import shareIcon from '../../assets/images/upload.svg';
import trashIcon from '../../assets/images/trash.svg';

const Piu: React.FC = () => {
    return(
        <PiuComponent>
            <img src={ profileImg } alt='Foto de Perfil'/>
            <div className="piu-block">

                <div className="piu-user">
                    <strong>Pintinho</strong>
                    <p>@_amarelinho</p>
                </div>

                <div className="piu-msg">
                    <p>piu piu piu piu piupiu piu piu piu piupiu piu piu piu piupiu piu piu piu piupiu piu piu piu piupiu piu piu piu piupiu piu piu piu piupiu piu piu piu piupiu piu piu piu piu</p>
                </div>

                <div className="piu-react">
                    <div className="icon">
                        <img src={commentIcon} alt="Comentários"/>
                        <p>1</p>
                    </div>
                    <div className="icon">
                        <img src={repiuIcon} alt="Repius"/>
                        <p>2</p>
                    </div>
                    <div className="icon">
                        <img src={likeIcon} alt="Curtidas"/>
                        <p>3</p>
                    </div>
                    <div className="icon">
                        <img src={shareIcon} alt="Compartilhar"/>
                    </div>
                </div>
            </div>

                {/* <div className="piu-delete">
                    <img src={trashIcon} alt="Excluir"/>
                </div> */}
                
        </PiuComponent>
    )
}

export default Piu;