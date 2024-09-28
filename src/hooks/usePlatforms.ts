import useData from "./useData";
import platforms from "../data/platforms";

interface Platform {
    id :number;
    name : string;
    slug : string;
}

const usePlatfrom =() => ({
    data: platforms,
    isLoading: false, 
    error: null
})

export default usePlatfrom;  