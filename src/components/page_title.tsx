import Typography from "./typography/typography"

interface PageTitleProps { number: number, text: string }

const PageTitle = ({ number, text }: PageTitleProps) => {
    return (
        <Typography variant="h6" as="h1" className='uppercase mx-6'>

            <Typography variant="h6" as="small" aria-hidden="true" className='mr-2 text-white/50'>
                {number.toString().padStart(2, '0')}
            </Typography>

            {text}
        </Typography >
    )
}

export default PageTitle