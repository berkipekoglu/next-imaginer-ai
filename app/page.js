import {HomePageContainer} from "@/containers/home-page-container";
import {HomePageProvider} from "@/containers/home-page-container/useHomepage";

export default function Homepage() {
    return <HomePageProvider><HomePageContainer/></HomePageProvider>;
}
