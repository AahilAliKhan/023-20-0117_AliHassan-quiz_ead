function AuctionCard() {
  return (
    <div className="">
      <div className="w-[200px] h-[200px] bg-gray-400 rounded"></div>
      <div className="flex justify-between items-center border-b py-2">
        <p>Lorem Ipsum</p>
        <p>1.20 Weth</p>
      </div>
      <div className="flex justify-between items-center py-2">
        <p>Ends in 0.134.15</p>
        <button className="border px-2 py-1 rounded">Bid</button>
      </div>
    </div>
  );
}

export default AuctionCard;
