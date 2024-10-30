
interface PageTitleProps { number: number, text: string }

const PageTitle = ({ number, text }: PageTitleProps) => {
    return (
        <h1 className='uppercase text-xl md:text-2xl'>
            <span aria-hidden="true" className='mr-2 text-white/50'>
                {number.toString().padStart(2, '0')}
            </span>

            {text}
        </h1>
    )
}

export default PageTitle