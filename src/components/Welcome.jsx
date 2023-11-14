function Welcome() {
  return (
    <section className="w-full grid grid-cols-2 px-10 py-10 h-[700px]">
      <div className="flex flex-col justify-center gap-2">
        <h2 className="text-5xl font-bold">Discover, collect, and charity in extraordinary NFT marketplace</h2>
        <p>In aenean posuere lorem risus nec. Tempor tincidunt aenean purus purus vestibulum nibh mi venenatis</p>
        <div className="space-x-4">
            <a className="py-1 px-3 bg-gray-50 rounded text-black">Explore</a>
            <a className="py-1 px-3 border rounded">Create</a>
        </div>
      </div>
      <div className="flex justify-end items-center">
        <div className="border p-4 rounded space-y-4">
            <div className="w-[300px] h-[300px] rounded bg-gray-600"></div>
            <div className="flex justify-between items-center">
                <div>
                    <p>Laura</p>
                    <p>0.21 Wench</p>
                </div>
                <div>
                    <p>We are here</p>
                    <p>25</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
