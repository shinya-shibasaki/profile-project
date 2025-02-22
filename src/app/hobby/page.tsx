import Link from 'next/link';

const Hobby = () => {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center">
            <div className=''>My Hobby</div>
            <Link href="/">Homeへ</Link>
        </div>
    );
}

export default Hobby;