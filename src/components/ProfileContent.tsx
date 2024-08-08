import Image from "next/image";

function ProfileContent() {
  return (
    <div className="mt-12 py-14 bg-zinc-100 rounded-md">
      <div className="px-8">
        <h1 className="text-4xl text-zinc-800 font-semibold">Profit Pioneer</h1>
        <div className="flex flex-col space-y-8">
          <div className="space-y-4 mt-6">
            <h2 className="text-zinc-800">Company Background</h2>
            <p className="lg:max-w-full text-sm text-pretty max-w-prose -tracking-tighter text-zinc-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              voluptatum voluptates veniam. Ut, laudantium culpa! Dolor ex error
              distinctio nisi hic et iusto alias obcaecati, sed dolores cumque
              dolorem nemo.
            </p>
          </div>
          <div className="space-y-4 mt-6">
            <h2 className="text-zinc-800">Our Services</h2>
            <p className="lg:max-w-full text-sm text-pretty max-w-prose -tracking-tighter text-zinc-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              esse fugiat a culpa eius eos ex distinctio quisquam.
            </p>
            <div className="w-full grid grid-cols-2 h-52 lg:h-96 gap-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="relative w-full h-full overflow-hidden rounded-md"
                >
                  <Image
                    fill
                    src={`/services/services-${i + 1}.jpg`}
                    alt="service image"
                    className="hover:scale-110 transition-transform aspect-square object-cover "
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileContent;
