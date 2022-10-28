//Extensão de interfaces - tsx
import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder?: boolean;
}

export default function Avatar({hasBorder=true, ...props}: AvatarProps){
    return(
        <img 
            className={hasBorder ? styles.avatarHasBorder : styles.avatar} 
            {...props}
        />
    )
}