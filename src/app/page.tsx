import { images } from "@/config/routing/images.route";
import { Card } from "./_components/card";
import { Main } from "./_components/main";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";

export default function Home() {
  return (
    <div className="relative isolate min-h-screen text-white">
      <Header/>
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(164,93,255,0.16),transparent_55%)]"/>
      <Main />

      <div>
        <Card name="Синхронизация" description="Данные всех сервисов объеденены и связаны со всеми устройствами одним аккаунтом" img={images.SINGLE}/>
      </div>

      <div>
        <Card name="Безопасность" description={"Ваши данные защищены Clerk и не передаются 3-им лицам, а так же вы можете подключить 2FA для дополнительной безопасности"} img={images.SAFE}/>
      </div>

      <div>
        <Card name="Единство" description="Почти все наши приложения используют данную систему аккаунтов" img={images.ECOSYSTEM}/>
      </div>

      <div>
        <Card name="Командная работа" description="Для удобной командой работы, Clerk предоставляет систему организаций с синхронизацией" img={images.TEAM} org/>
      </div>
      <Footer/>
    </div>
  );
}
