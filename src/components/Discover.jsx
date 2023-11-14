import AuctionCard from "./AuctionCard";

function Discover() {
  return (
    <section className="w-full py-10 px-10">
      <h2 className="my-4 text-2xl font-bold">Discover</h2>
      <div className="flex gap-10 items-center justify-center flex-wrap">
        {Array(8)
          .fill()
          .map((_, i) => (
            <AuctionCard key={i} />
          ))}
      </div>
    </section>
  );
}

export default Discover;
