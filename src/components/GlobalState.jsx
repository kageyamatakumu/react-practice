import { Card } from './Card';
import { memo } from 'react';
import { useContext } from 'react';
import { AdminFlagContext } from './providers/AdminFlagProvider';

export const GlobalState = memo(() => {

    const {admin, setAdmin} = useContext(AdminFlagContext);

    const onClickSwitch = () => {
        setAdmin(!admin)
    }

    return(
        <div>
            {admin? <span>管理者</span> : <span>非管理者</span>}
            <button onClick={onClickSwitch}>切り替え</button>
            <Card admin={admin}/>
        </div>
    )
})