import { useState } from 'react';
import { useEffect } from 'react';
import { useCallback} from 'react';
import { ColoredMessage } from './components/ColoredMessage';
import { CssModules } from './components/CssModules';
import { Reset } from './components/ResetCount';
import { GlobalState } from './components/GlobalState';

export const App = () => {

    const [num, setNum] = useState(0)

    const [text, setText] = useState('test')

    const onClickButton = () => {
        setNum((prev) => prev +1);
        setText('word')
    };

    const onClickReset = useCallback(() => {
        setNum(0)
        setText('リセットされた')
    }, [])

    useEffect(() => {
        alert('ようこそ');
    }, [])

    return (
        <div>
            <h1>こんにちは</h1>
            <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
            <ColoredMessage color="pink">{text}</ColoredMessage>
            <CssModules/>
            <button onClick={onClickButton}>ボタン</button>
            <p>{num}</p>
            <Reset t={onClickReset}/>
            <GlobalState/>
        </div>
    )
}