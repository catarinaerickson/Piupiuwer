import React, {ButtonHTMLAttributes, useCallback, useEffect, useState} from 'react';

import { DeletePiuComponent, PiuComponent, ReactionButtonComponent } from './styles';

import commentIcon from '../../assets/images/message-circle.svg';
import favoritIcon from '../../assets/images/star.svg';
import yellowFavoritIcon from '../../assets/images/yellowstar.svg';
import likeIcon from '../../assets/images/heart.svg';
import redLikeIcon from '../../assets/images/redheart.svg';
import shareIcon from '../../assets/images/upload.svg';
import trashIcon from '../../assets/images/trash.svg';
import redTrashIcon from '../../assets/images/redtrash.svg';
import api from '../../services/api';
import { reducedUser, useAuth, user } from '../../hooks/auth';

interface PiuProps {
    username: string;
    first_name: string;
    texto: string;
    last_name: string;
    foto: string;
    likers: reducedUser[];
    favoritado_por: reducedUser[];
    piuId: number;
    disappear: boolean;
    transition: boolean;
}

interface ReactionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    react(): void;
    reacted: boolean;
    reactions: number;
    reactType: string;
}

interface DeletePiuProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    displayDelete: boolean;
}

const ReactionButton: React.FC<ReactionButtonProps> = ({react, reacted, reactions, reactType, ...rest}) => {
    // define a cor do icone caso o usuario ja tiver reagido ou fizer uma nova reação
    const iconColor = useCallback(() => {
        if(reacted) {
            if (reactType === 'likes') {
                return redLikeIcon
            } else if (reactType === 'favorits') {
                return yellowFavoritIcon
            }
        } else{
            if (reactType === 'likes') {
                return likeIcon
            } else if (reactType === 'favorits') {
                return favoritIcon
            }
        }
    },[reacted, reactType])

    return (
        <ReactionButtonComponent onClick={react} {...rest}>
            <img src={iconColor()} alt="Favoritos"/>
            <p>{reactions}</p>
        </ReactionButtonComponent>
    )
}

const DeletePiu: React.FC<DeletePiuProps> = ({displayDelete, ...rest}) => {
    const [iconSrc, setIconSrc] = useState(trashIcon);
    return (
        <DeletePiuComponent 
            onMouseOver={() => {setIconSrc(redTrashIcon)}}
            onMouseOut={() => {setIconSrc(trashIcon)}}
            
            displayDelete={displayDelete}
            {...rest}
        >
            <img src={iconSrc} alt="Excluir"/>
        </DeletePiuComponent>
    )
}

const Piu: React.FC<PiuProps> = ({username, first_name, texto, last_name, likers, 
    favoritado_por, foto, piuId}) => {   
    
    const {user} = useAuth();

    const [likes, setLikes] = useState({
        liked: false,
        numLikes: likers.length,
    })

    const [favorits, setFavorits] = useState({
        favoritado: false,
        numFavorits: favoritado_por.length
    })

    // verifica se o usuario ja reagiu com algum piu anteriormente
    useEffect(() => {
        function wasLiked(like: reducedUser) {
            if (like.id === user.id) {
                return setLikes({liked: true, numLikes: likes.numLikes})
            }
        }

        function wasFavoritado(favorit: reducedUser) {
            if(favorit.id === user.id) {
                return setFavorits({favoritado: true, numFavorits: favorits.numFavorits})
            }
        }

        likers.map((like) => {
            wasLiked(like);
        });

        favoritado_por.map((favorit) => {
            wasFavoritado(favorit);
        })
    }, [])

    // faz o post de um like/dislike e atualiza os likes na página
    const handleLike = useCallback(() => {      
        const data = {'usuario': user.id, 'piu': piuId};
        try {
            api.post('pius/dar-like/', data);
            if (likes.liked) {
                setLikes({liked: false, numLikes: likes.numLikes - 1} )
            } else if(!likes.liked) {
                setLikes({liked: true, numLikes: likes.numLikes + 1})
            }
        } catch(err) {
            alert('opa, estamos com problemas!');
        }
    }, [user, piuId, likes, setLikes]);

    // faz o post de um favoritar/desfavoritar e atualiza os favorits na pégina
    const handleFavorit = useCallback(() => {
        const data = {'usuario': user.id, 'piu': piuId};
        try {
            api.post('/pius/favoritar/', data);
            if (favorits.favoritado) {
                setFavorits({favoritado: false, numFavorits: favorits.numFavorits - 1} )
            } else if(!favorits.favoritado) {
                setFavorits({favoritado: true, numFavorits: favorits.numFavorits + 1})
            }
        } catch (err) {
            alert('opa, estamos com problemas!');
        }
    }, [user, piuId, favorits, setFavorits]);

    //display da opção de excluir
    const [displayDelete, setDisplayDelete] = useState(false);
    useEffect(() => {
        if (username === user.username) {
            setDisplayDelete(true);
        }
    }, [])

    //excluir piu
    const [piuDisappear, setPiuDisappear] = useState(false)
    const [piuTransition, setPiuTransition] = useState(false)
    const handleDelete = useCallback(() => {
        api.delete(`/pius/${piuId}`);
        setPiuTransition(true);
        setTimeout(() => {setPiuDisappear(true);}, 1000);        
    }, [piuId, setPiuDisappear])

    return(
        <PiuComponent disappear={piuDisappear} transition={piuTransition}>
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
                        <p>0</p>
                    </div>
                    <ReactionButton
                        reactType='favorits'
                        react={handleFavorit}
                        reacted={favorits.favoritado}
                        reactions={favorits.numFavorits}
                    />
                    <ReactionButton
                        reactType='likes'
                        react={handleLike}
                        reacted={likes.liked}
                        reactions={likes.numLikes}
                    />                    
                    <div className="icon">
                        <img src={shareIcon} alt="Compartilhar"/>
                    </div>
                </div>
            </div>

            <div className="delete-button">
                <DeletePiu 
                onClick={handleDelete}
                displayDelete={displayDelete}/>
            </div>

                
        </PiuComponent>
    )
}

export default Piu;