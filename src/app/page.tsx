import singleImg from "./img/single.svg"
import safeImg from "./img/safe.svg"
import ecosystemImg from "./img/ecosystem.svg"
import teamImg from "./img/team.svg"
import { Card } from "./component/card";
import { Main } from "./component/main";
import { Header } from "./component/header";
import { Footer } from "./component/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <div className="flex flex-col grow justify-center items-center w-full">
        <Main />

        <div className="animate-fade-right animate-once animate-duration-1000 animate-delay-[2600ms]">
          <Card name="Синхронизация" description="Данные всех сервисов объеденены и связаны со всеми устройствами одним аккаунтом" img={singleImg}/>
        </div>

        <div className="animate-fade-right animate-once animate-duration-1000 animate-delay-[2800ms]">
          <Card name="Безопасность" description={"Ваши данные защищены Clerk и не передаются 3-им лицам, а так же вы можете подключить 2FA для дополнительной безопасности"} img={safeImg}/>
        </div>

        <div className="animate-fade-right animate-once animate-duration-1000 animate-delay-[3000ms]">
          <Card name="Единство" description="Наши продукты(Kenycloud, Notter и т.д) имеют общую систему аккаунтов Qual ID" img={ecosystemImg}/>
        </div>

        <div className="animate-fade-right animate-once animate-duration-1000 animate-delay-[3200ms]">
          <Card name="Командная работа" description="Для удобной командой работы Clerk предоставляет систему организаций с синхронизацией" img={teamImg} org/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
