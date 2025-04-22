"use client"
import Image from "next/image";
import {useTranslations} from 'next-intl';
import LangSwitcher from "@/LangSwitcher";

export default function Home() {
  const t = useTranslations('Homepage');

  return (
    <div>
      Irenic Hotel {t("hello")}
      {/* <LangSwitcher/> */}
    </div>
  );
}
