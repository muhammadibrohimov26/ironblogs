import { Badge } from "@/components/ui/badge";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { popularCategories, popularTags } from "@/constants";
import { Search } from "lucide-react";

const GlobalSearch = () => {
  return (
    <Drawer>
      <DrawerTrigger>
        <div className="'hover:bg-blue-400/20 py-2 px-3 gap-3 cursor-pointer rounded-sm transition-colors flex items-center">
          <span className="hidden md:flex">Search</span>
          <Search className="w-4 h-4" />
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div className="container max-w-6xl mx-auto py-12">
          <Input className="bg-secondary" placeholder="type to search ..." />
          <div className="flex flex-col space-y-2 mt-4 ">
            <p className="font-creteRound text-2xl">See post catagories</p>
            <div className="flex flex-wrap gap-2">
              {popularCategories.map((item) => (
                <Badge key={item.slug}>{item.name} </Badge>
              ))}
            </div>
       
          </div>

          <div className="flex flex-col space-y-2 mt-4 ">
            <p className="font-creteRound text-2xl">See post tags</p>
            <div className="flex flex-wrap gap-2">
              {popularTags.map((item) => (
                <Badge key={item.slug} >{item.name} </Badge>
              ))}
            </div>
       
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default GlobalSearch;
