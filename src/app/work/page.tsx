import Link from 'next/link'

const Work = () => {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center">
            <div className=''>My Work</div>
            <Link href="/">Homeへ</Link>
        </div>
    );
}

export default Work;