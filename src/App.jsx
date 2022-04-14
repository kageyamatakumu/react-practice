import { ColoredMessage } from './components/ColoredMessage'

export const App = () => {

    const onClickButton = () => {
        alert('react')
    }

    return (
        <div>
            <h1>こんにちは</h1>
            <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
            <ColoredMessage color="pink">元気です</ColoredMessage>
            <button onClick={onClickButton}>ボタン</button>
        </div>
    )
}