import { Badge } from "@/components/ui/badge";
import { Card, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Room from "~/svg/Room.svg";

export const RoomCard = () => {
  return (
    <Card>
      <Image src={Room} alt="Room Image" className="w-full rounded-t-xl" />
      <CardFooter className="flex justify-between items-center pt-4 pb-10">
        <div>
          <h3 className="font-semibold text-lg lg:text-xl leading-5">Room Name</h3>
          <h6 className="text-[#667085]">Description</h6>
        </div>
        <div>
          <h3 className="leading-5 font-semibold">0 Staffs</h3>
          <Badge variant={"default"}>Active</Badge>
        </div>
      </CardFooter>
    </Card>
  );
};
