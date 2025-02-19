import { RoomCard } from "./room-card";

export const RoomCards = () => {
  return (
    <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <RoomCard />
      <RoomCard />
      <RoomCard />
    </div>
  );
};
