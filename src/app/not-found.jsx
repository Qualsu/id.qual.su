import Link from 'next/link';
import Image from 'next/image';
import { images } from '@/config/routing/images.route';
import { pages } from '@/config/routing/pages.route';

export default function NotFound() {
  return (
    <div className="relative isolate flex min-h-screen items-center justify-center text-white">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(164,93,255,0.16),transparent_55%)]" />

        <div className="section-shell mx-4 flex max-w-3xl flex-col items-center gap-6 py-16 text-center sm:mx-6">
            <div className="pointer-events-none absolute -top-12 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-purple-600/15 blur-3xl" />

            <Image src={images.NOT_FOUND} width={240} height={240} alt="404 Not Found" className="relative" />

            <div className="flex flex-col gap-4 text-center">
            <h1 className="relative text-2xl font-semibold text-white sm:text-3xl">
                Страница не найдена
            </h1>
            <p className="relative text-sm text-white/50">
                Кажется, вы заблудились. Возможно, страница была удалена или переехала
            </p>
            <Link
                href={pages.ROOT}
                className="primary-button relative px-8 py-3 text-base"
            >
                На главную
            </Link>
            </div>        
        </div>
    </div>
  );
};