import { memo } from 'react';

export const Reset = memo((props) => {
    return(
        <div>
            <button onClick={props.t}>リセット</button>
        </div>
    )
})