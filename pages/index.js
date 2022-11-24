import styled from 'styled-components';
import Layout from '../Components/Layout';
import MainContent from '../Components/MainContent';
import {useThemeContext} from '../context/themeContext'
import Game from '../Components/Game'
import { useStatsContext } from '../context/context';
import Button from '../Components/Button';
import { down } from '../utilts/Icons';



export default function Home() {
  const theme = useThemeContext();
  const { homepage_games } = useStatsContext()
  console.log("theme:", theme);
  return (
    <div>
      <Layout>
        <MainContent>
        <HomepageStyled>
        <div className="home-items">
          {
            homepage_games.map((game) =>{
              return <Game 
              key={game.id}
              values={{...game}}
               
              />              
            })        
          }
        </div>
        </HomepageStyled>

        </MainContent>
      </Layout>
    </div>
  )
}


const HomepageStyled = styled.div`
  .home-items{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
    grid-gap: 2rem;
  }
`;
