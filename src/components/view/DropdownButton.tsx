import {useState, useRef, useEffect} from "react";
import {CurrencyQuotesModel} from "../../models/CurrencyQuotesModel";

interface ButtonProps{
    id: string
    name : string
    cur : CurrencyQuotesModel
}


export const DropdownButton = (props : ButtonProps) => {
    const [btnName, setBtnName] = useState(props.name)
    const [data, setData] = useState(props.cur)
    const [hidden, setHidden] = useState(true)

    let obj : CurrencyQuotesModel = data
    let newConvert : string = ''

    for (let convert in data){
        newConvert = convert.slice(3, 6)
        obj[`${newConvert}`] = 0
    }

    console.log(obj)



    const handleClick = () => {
        let state = hidden
        setHidden(!state)
    }

    return (
        <section className="dropdown relative">
            <button
                type={'button'}
                aria-expanded="false"
                id={props.id}
                className={
                    'w-[180px] px-6 py-2.5 text-white bg-orange-600 ' +
                    'shadow-md hover:bg-orange-700 hover:shadow-lg' +
                    'ease-in-out flex justify-between whitespace-nowrap'
                }
                onClick={() => {handleClick()}}
            >
                {btnName}
                <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="caret-down"
                    className="w-[15px] ml-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                >
                    <path
                        fill="currentColor"
                        d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                    />
                </svg>
            </button>
            <ul
                className={ `${hidden ? "hidden " : " "}` +
                    'w-[180px] z-10 shadow-md absolute max-h-[150px] overflow-auto bg-neutral-600 text-center text-white'
                }
                aria-labelledby={props.id}
            >
                <li className={
                    'w-full px-6 py-2.5 '
                }>
                    mocha
                </li>
                <li className={
                    'w-full px-6 py-2.5 '
                }>
                    mocha
                </li>
                <li className={
                    'w-full px-6 py-2.5 '
                }>
                    mocha
                </li>
                <li className={
                    'w-full px-6 py-2.5 '
                }>
                    mocha
                </li>
                <li className={
                    'w-full px-6 py-2.5 '
                }>
                    mocha
                </li>
                <li className={
                    'w-full px-6 py-2.5 '
                }>
                    mocha
                </li>
            </ul>
        </section>
    )
}