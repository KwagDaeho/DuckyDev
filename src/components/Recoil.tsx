"use client";

import { ReactNode } from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

type Props = {
  children: ReactNode;
};

export default function Recoil({ children }: Props) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
