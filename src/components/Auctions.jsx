import AuctionCard from "./AuctionCard";

const Auctions = () => {
  return (
    <section className="w-full py-10 px-10">
      <h2 className="my-4 text-2xl font-bold">Hot Auctions</h2>
      <div className="flex gap-10 items-center justify-center">
        {Array(4)
          .fill()
          .map((_, i) => (
            <AuctionCard key={i} />
          ))}
      </div>
    </section>
  );
}

export default Auctions;
