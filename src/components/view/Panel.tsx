import {DropdownButton} from "./DropdownButton";


export const Panel = () => {
    return (
        <section className={
            'flex flex-wrap mx-6 my-6 justify-between w-[400px] h-[440px] ' +
            'bg-gray.600 rounded self-center '
        }>
            <DropdownButton id={'btn-1'} name={'Convert From'}/>
            <h2 className={'text-white'}>wnecwefewfew</h2>
            <DropdownButton id={'btn-2'} name={'Convert To'}/>
            <h2 className={'text-white'}>wnecwefewfew</h2>
        </section>
    )
}