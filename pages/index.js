import Sidebar from "../Components/Sidebar";
import { useThemeContext } from "../context/themeContext"
import Header from "../Components/Header";
import Layout from "../Components/Layout";
import MainContent from "../Components/MainContent";

export default function Home() {
  const theme = useThemeContext();
  console.log("theme:", theme);
  return (
    <div >
      <Layout>
        <MainContent>
          
        </MainContent>
      </Layout>
    </div>
  )
}
