import React, {ButtonHTMLAttributes} from 'react';

import { PiuComponent, ReactionButtonComponent } from './styles';

import commentIcon from '../../assets/images/message-circle.svg';
import favoritIcon from '../../assets/images/star.svg';
import likeIcon from '../../assets/images/heart.svg';
import shareIcon from '../../assets/images/upload.svg';
import trashIcon from '../../assets/images/trash.svg';

interface PiuProps {
    username: '';
    first_name: '';
    texto: '';
    last_name: '';
    foto: '';
    likers: [];
    favoritado_por: [];
    like(): void;
    favorit(): void;
}

interface ReactionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    react(): void;
    src: string;
    reactions: number;
}

const ReactionButton: React.FC<ReactionButtonProps> = ({react, src, reactions, ...rest}) => {
    return (
        <ReactionButtonComponent onClick={react} {...rest}>
            <img src={src} alt="Favoritos"/>
            <p>{reactions}</p>
        </ReactionButtonComponent>
    )
}

const Piu: React.FC<PiuProps> = ({username, first_name, texto, last_name, likers, 
    favoritado_por, foto, like, favorit}) => {   
    return(
        <PiuComponent>
            <div className="piu-foto">
                <img src={ foto } alt='Foto de Perfil'/>
            </div>
            <div className="piu-block">

                <div className="piu-user">
                    <strong>{first_name} {last_name}</strong>
                    <p>@{username}</p>
                </div>

                <div className="piu-msg">
                    <p>{texto}</p>
                </div>

                <div className="piu-react">
                    <div className="icon">
                        <img src={commentIcon} alt="Comentários"/>
                        <p>1</p>
                    </div>
                    <ReactionButton
                        
                        react={favorit}
                        src={favoritIcon}
                        reactions={favoritado_por.length}
                    />
                    <ReactionButton
                        
                        react={like}
                        src={likeIcon}
                        reactions={likers.length}
                    />                    
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