import Image from "next/image";

export default function Products() {
  return (
    <main>
      <section id="produkter">
        <Image
          src="/img/explanation.png"
          alt="explanation of service"
          width={600}
          height={300}
        />
        <h1>Connect with hundreds of owners and caretakers.</h1>
        <div className="container">
          <div className="productCard">
            <Image
              src="/img/Owner-A-(no-bg).png"
              alt="dog owner"
              width={200}
              height={200}
            />
            <h2>Owner</h2>
            <p>Find a trusted person to care for your pet.</p>
            <button>Join</button>
          </div>
          <div className="productCard">
            <Image
              src="/img/Owner-B-(no-bg).png"
              alt="dog renter"
              width={200}
              height={200}
            />
            <h2>Caretaker</h2>
            <p>Help others by spending time with pets.</p>
            <button>Join</button>
          </div>
        </div>
      </section>
    </main>
  );
}
