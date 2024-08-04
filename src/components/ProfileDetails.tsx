import { PROFILE_DETAILS } from "@/constants";
import { MailIcon, GlobeIcon, PhoneIcon } from "lucide-react";
import { Button } from "./ui/button";

function ProfileDetails() {
  return (
    <div className="mt-24 w-full flex flex-col items-center justify-center">
      <div className="text-center font-medium">
        <p className="text-green-600 text-lg font-bold -tracking-tighter">
          {PROFILE_DETAILS.name}
        </p>
        <p className="text-zinc-800 font-bold">{PROFILE_DETAILS.jobType}</p>
        <div className="mt-2">
          <p className="text-sm text-zinc-500">
            {PROFILE_DETAILS.contacts.email}
          </p>

          <p className="text-sm text-zinc-500">
            {PROFILE_DETAILS.contacts.phone}
          </p>
        </div>
      </div>
      <Socials />
      <ProfileActions />
    </div>
  );
}

function Socials() {
  return (
    <div className="mt-8 grid grid-cols-3 gap-4 w-max mx-auto">
      <MailIcon className="size-5" />
      <GlobeIcon className="size-5" />
      <PhoneIcon className="size-5" />
      <svg
        className="size-5"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
      >
        <path d="M16,2c-7.732,0-14,6.268-14,14,0,6.566,4.52,12.075,10.618,13.588v-9.31h-2.887v-4.278h2.887v-1.843c0-4.765,2.156-6.974,6.835-6.974,.887,0,2.417,.174,3.043,.348v3.878c-.33-.035-.904-.052-1.617-.052-2.296,0-3.183,.87-3.183,3.13v1.513h4.573l-.786,4.278h-3.787v9.619c6.932-.837,12.304-6.74,12.304-13.897,0-7.732-6.268-14-14-14Z"></path>
      </svg>
      <svg
        className="size-5 fill-current"
        height="23"
        viewBox="0 0 1200 1227"
        width="23"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"></path>
      </svg>
      <svg
        className="size-5"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0 0 50 50"
      >
        <path d="M 25 2 C 12.347656 2 2 11.597656 2 23.5 C 2 30.007813 5.132813 35.785156 10 39.71875 L 10 48.65625 L 11.46875 47.875 L 18.6875 44.125 C 20.703125 44.664063 22.800781 45 25 45 C 37.652344 45 48 35.402344 48 23.5 C 48 11.597656 37.652344 2 25 2 Z M 25 4 C 36.644531 4 46 12.757813 46 23.5 C 46 34.242188 36.644531 43 25 43 C 22.835938 43 20.742188 42.6875 18.78125 42.125 L 18.40625 42.03125 L 18.0625 42.21875 L 12 45.375 L 12 38.8125 L 11.625 38.53125 C 6.960938 34.941406 4 29.539063 4 23.5 C 4 12.757813 13.355469 4 25 4 Z M 22.71875 17.71875 L 10.6875 30.46875 L 21.5 24.40625 L 27.28125 30.59375 L 39.15625 17.71875 L 28.625 23.625 Z"></path>
      </svg>
    </div>
  );
}

function ProfileActions() {
  return (
    <div className="mt-8 w-full flex items-center justify-center gap-4 px-8">
      <Button className="flex-1 rounded-full" size={"lg"}>
        Email Me
      </Button>
      <Button className="flex-1 rounded-full" variant={"outline"} size={"lg"}>
        Save Contact
      </Button>
    </div>
  );
}

export default ProfileDetails;
