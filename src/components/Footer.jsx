function Footer() {
  return (
    <div className="w-full grid grid-cols-2 px-10 py-10 gap-6">
      <div>
        <h3 className="text-2xl font-bold">
          Etiam et id tincidunt faucibus mollis a sociis pretium fermentum quis
          magna faucibus lacus.
        </h3>
      </div>
      <div className="grid grid-cols-3">
        <div>
          <h4 className="text-xl font-bold">Market Place</h4>
          <p>Home</p>
          <p>Activity</p>
          <p>Discover</p>
          <p>Learn More</p>
        </div>
        <div>
          <h4 className="text-xl font-bold">Company</h4>
          <p>About us</p>
          <p>Services</p>
          <p>Portfolio</p>
        </div>
        <div >
          <h4 className="text-xl font-bold">Contact</h4>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
          <p>Email</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
