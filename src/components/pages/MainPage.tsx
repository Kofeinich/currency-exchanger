import {useCounter} from "../hooks/useCounter";
import {Panel} from "../view/Panel";


export const MainPage = () => {

    const {newAmount, location} = useCounter()

    console.log(newAmount)
    console.log(location)

    return (
        <div className={
            'w-screen static h-screen flex justify-center min-w-[400px]' +
            ' white m-auto'
        }>
            <Panel cur={newAmount} loc={location}/>
        </div>
    )
}