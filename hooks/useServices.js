import useLocation from "./useLocation";
import useNetwork from "./useNetwork";

const useServices = () => {
    useLocation();
    useNetwork();
};

export default  useServices;