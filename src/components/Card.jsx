import { EditButton } from './EditButton';
// memo化する必要はないかもしれない
import { memo } from 'react';
import classes from './Card.module.scss';

export const Card = memo(() => {
    return(
        <div className={classes.card}>
            <p>山田</p>
            <EditButton />
        </div>
    )
})