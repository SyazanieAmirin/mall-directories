export default function Header() {
    return (
        <div className="flex flex-row justify-between w-full p-5 bg-black">
            <h1 className="font-light tracking-[.25em] lg:tracking-[1em] text-white">MALL DIRECTORIES</h1>

            {/*Hamburger menu*/}
            <div className="flex flex-col gap-1 justify-center lg:hidden">
                <div className="py-[0.10rem] px-4 bg-white rounded-full"></div>
                <div className="py-[0.10rem] px-4 bg-white rounded-full"></div>
                <div className="py-[0.10rem] px-4 bg-white rounded-full"></div>
            </div>
        </div>
    )
}