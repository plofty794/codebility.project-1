import Image from "next/image";

function ProfileHeader() {
  return (
    <div className="w-full relative">
      <div className="w-full h-52">
        <Image
          className="aspect-square object-cover rounded-md"
          fill
          src={"/cover-image.jpg"}
          alt="cover image"
        />
      </div>
      <div className="mx-auto absolute inset-0 top-[126px] size-40 z-40">
        <Image
          fill
          src={"/profile-image.jpg"}
          className="aspect-square object-cover rounded-full ring-4 ring-white"
          alt="profile image"
        />
      </div>
    </div>
  );
}

export default ProfileHeader;
