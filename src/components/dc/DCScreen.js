import { HeroList } from "../hero/HeroList";

export const DCScreen = () => {

  return (
    <div>
      <h1>DC Heroes</h1>
      <hr />
        <HeroList publisher='DC Comics' />
    </div>
  )
  
};
