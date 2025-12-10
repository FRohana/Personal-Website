import style from "./entry.module.css";
import { ReactNode } from "react";

type EntryProp = {
  title: string;
  info?: string;
  description?: string | ReactNode;
};

export default function Entry({ title, info, description }: EntryProp) {
  let infoElement;
  let descriptionElement;

  if (info) {
    infoElement = <p className={style.entryinfo}>{info}</p>;
  }

  if (description) {
    descriptionElement = (
      <div className={style.entrydescription}>{description}</div>
    );
  }

  return (
    <div className={style.entry}>
      <h3 className={style.entrytitle}>{title}</h3>
      {infoElement}
      {descriptionElement}
    </div>
  );
}
