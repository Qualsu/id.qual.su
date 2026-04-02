import { images } from "@/config/routing/images.route";
import { Card } from "./_components/card";
import { Main } from "./_components/main";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";

export default function Home() {
  return (
    <>
      <Header/>
      <Main />

      <div className="animate-fade-right animate-once animate-duration-1000 animate-delay-[2600ms]">
        <Card name="Синхронизация" description="Данные всех сервисов объеденены и связаны со всеми устройствами одним аккаунтом" img={images.SINGLE}/>
      </div>

      <div className="animate-fade-right animate-once animate-duration-1000 animate-delay-[2800ms]">
        <Card name="Безопасность" description={"Ваши данные защищены Clerk и не передаются 3-им лицам, а так же вы можете подключить 2FA для дополнительной безопасности"} img={images.SAFE}/>
      </div>

      <div className="animate-fade-right animate-once animate-duration-1000 animate-delay-[3000ms]">
        <Card name="Единство" description="Наши продукты(Kenycloud, Notter и т.д) имеют общую систему аккаунтов Qual ID" img={images.ECOSYSTEM}/>
      </div>

      <div className="animate-fade-right animate-once animate-duration-1000 animate-delay-[3200ms]">
        <Card name="Командная работа" description="Для удобной командой работы Clerk предоставляет систему организаций с синхронизацией" img={images.TEAM} org/>
      </div>
      <Footer/>
    </>
  );
}
