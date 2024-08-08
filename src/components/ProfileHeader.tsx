import Image from "next/image";

function ProfileHeader() {
  return (
    <div className="w-full relative">
      <div className="w-full h-52 md:72 lg:h-80">
        <Image
          className="aspect-square object-cover rounded-md"
          fill
          src={"/cover-image.jpg"}
          alt="cover image"
        />
      </div>
      <div className="mx-auto lg:mx-12 lg:top-[276px] absolute inset-0 top-[126px] size-36 md:size-40 lg:size-44 z-40">
        <div className="relative size-36 md:size-40 lg:size-44 ring-4 ring-white rounded-full overflow-hidden">
          <Image
            fill
            src={"/profile-image.jpg"}
            className="hover:scale-105 transition-transform aspect-square object-cover rounded-full "
            alt="profile image"
          />
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
