import {useState} from "react";

interface InputProps {
    placeholder: string

}

export const Input = (props: InputProps) => {
    const [inputPlaceholder, setInputPlaceholder] = useState(props.placeholder)
    return (
        <section className="relative z-1 ">
            <input
                className={'dark:placeholder-gray-400 px-6 py-2.5 w-[180px] shadow-xl text-center rounded-md border-orange-700 border-1'}
                type="number"
                placeholder={`${inputPlaceholder}`}
            />
        </section>
    )
}