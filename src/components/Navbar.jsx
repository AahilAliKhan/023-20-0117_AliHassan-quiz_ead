const Navbar = () => {
    return (
        <section className="w-full flex flex-row items-center justify-between px-10 py-4">
            <div>
                <h3 className="text-xl font-bold">FASTECH</h3>
            </div>
            <div className="space-x-5 capitalize">
                <a>Home</a>
                <a>My Profile</a>
                <a>Activity</a>
                <a>How It Works</a>
            </div>
            <div className="space-x-3">
                <a className="border py-1 px-3 rounded">Create</a>
                <a>Sign in</a>
            </div>
        </section>
    );
}

export default Navbar;