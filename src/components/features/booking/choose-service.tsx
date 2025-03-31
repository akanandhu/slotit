import { Search } from "@/components/ui/search";
import { TabsTrigger, Tabs, TabsList, TabsContent } from "@/components/ui/tabs";
import { XIcon } from "lucide-react";
import { useState } from "react";
import { ServiceSelection } from "./choose-service-options";

const services = Array(12).fill({
  name: "Name of Service",
  duration: "20 Mins",
  price: "₹ 64,000",
  oldPrice: "₹ 64,000",
});

export const ChooseService = () => {
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const handleClear = () => {
    setSelectedIndices([]);
  };
  return (
    <Tabs defaultValue="hair" className="w-full">
      <TabsList className="w-full border-b bg-white">
        <TabsTrigger value="hair">Hair</TabsTrigger>
        <TabsTrigger value="face">Face</TabsTrigger>
        <TabsTrigger value="bodycare">Body care</TabsTrigger>
        <TabsTrigger value="nails">Nails</TabsTrigger>
        <TabsTrigger value="makeover">Makeover</TabsTrigger>
        <TabsTrigger value="spa">Spa</TabsTrigger>
      </TabsList>
      <div className="my-6 flex gap-4 items-center">
        <Search />
        <div className="flex items-center gap-1">
          Selected {selectedIndices.length}
          {selectedIndices.length > 0 && (
            <XIcon
              onClick={handleClear}
              className="cursor-pointer"
              width={20}
              height={20}
            />
          )}
        </div>
      </div>
      <TabsContent value="hair" className="p-4">
        <ServiceSelection
          data={services}
          selectedIndices={selectedIndices}
          setSelectedIndices={setSelectedIndices}
        />
      </TabsContent>
    </Tabs>
  );
};
