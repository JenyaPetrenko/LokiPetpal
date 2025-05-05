import Image from "next/image";

export default function Reviews() {
  return (
    <main>
      <section id="referenser">
        <h1>Voice of our customers</h1>
        <div id="reviewCards">
          <article className="reviewCard">
            <Image
              src="/img/Reviewers/person1.jpg"
              alt="thumbnail of reviewer"
              width={150}
              height={150}
            />
            <h2>Jane</h2>
            <p>
              Through Pet pals I managed to find a great caretaker for my cat
              Simba for the weekend.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
