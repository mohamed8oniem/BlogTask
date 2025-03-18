import Link from 'next/link';

export default async function Home() {
  return (
    <div>
      <Link href="/blog" className="text-4xl font-bold">
        Click To Go To Blog Page To Preview Posts
      </Link>
    </div>
  );
}
