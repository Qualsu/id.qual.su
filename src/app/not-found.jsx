import Link from 'next/link';
import Image from 'next/image';
import { images } from '@/config/routing/images.route';
import { pages } from '@/config/routing/pages.route';

const NotFound = () => {
  return (
        <section className="flex justify-center md:flex-row flex-col items-center h-screen">
            <title>404 Not found</title>
            <Image src={images.NOT_FOUND} width="400" height="400" alt="" className="m-2 md:mr-2 flex items-center"/>
            <div className="text-center md:text-left mx-2 mb-8 ml-0 md:ml-12">
                <h1 className="text-7xl md:text-8xl my-5 md:my-2">
                    <span className="text-qual-Q">4</span>
                    <span className="text-qual-U">0</span>
                    <span className="text-qual-S">4</span>
                </h1>

                <h3 className="text-2xl break-word max-w-[500px] text-white px-4 md:px-0">
                    Страница не найдена
                </h3>

                <Link href={pages.ROOT} className="text-gray-300 hover:text-gray-400">
                    На главную
                </Link>
            </div>
        </section>
  );
};

export default NotFound;
