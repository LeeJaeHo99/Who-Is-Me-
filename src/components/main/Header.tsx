import Link from "next/link";

export default function Header() {
    return (
        <header className="flex items-center justify-between w-full h-20">
            <div className="inner justify-center">
                <h1 className="text-3xl text-primary tracking-wider">
                    <Link href="/">후이즈미?</Link>
                </h1>
            </div>
        </header>
    );
}
