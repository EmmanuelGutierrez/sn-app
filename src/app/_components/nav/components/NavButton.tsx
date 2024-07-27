import { ClipboardDocumentListIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

export interface NavButtonProps {
  Icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string;
      titleId?: string;
    } & React.RefAttributes<SVGSVGElement>
  >;
  text: string;
  href: string;
}

const NavButton = ({ Icon, text, href }: NavButtonProps) => {
  return (
    <Link
      href={href}
      className=" flex flex-col justify-center items-center mb-12"
    >
      <Icon className="size-6 stroke-gray  stroke-2" />
      <p className="self-center text-sm font-normal sm:text-2sm whitespace-nowrap text-gray dark:text-white mt-2">
        {text}
      </p>
    </Link>
  );
};

export default NavButton;
