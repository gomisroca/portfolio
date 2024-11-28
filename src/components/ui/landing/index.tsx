import { useTranslations } from "@/i18n/utils";
import MovingEmoji from "@/components/MovingEmoji";
import FadeInText from "./FadeInText";

function Landing({ lang = "en" }: { lang?: "en" | "es" | "cat" | "de" }) {
  const t = useTranslations(lang);
  return (
    <FadeInText className="flex flex-row space-x-2">
      <span className="text-4xl font-semibold">{t("landing.welcome")}</span>
      <MovingEmoji>👋</MovingEmoji>
    </FadeInText>
  );
}

export default Landing;
